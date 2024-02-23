import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const DetailMovie = () => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const movieId = 

  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetail(response.data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      }
    };

    fetchMovieDetail();
  }, [API_KEY, movieId]);

  return (
    <div>
      {movieDetail && (
        <Container>
          <Row>
            <Col lg={4}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            </Col>
            <Col lg={8}>
              <div className="name">{movieDetail.title}</div>
              <div className="sub">
                <div className="time">{movieDetail.release_date}</div>
                <div className="cate">
                  {movieDetail.genres.map((genre) => genre.name).join(", ")}
                </div>
                <div className="length">
                  <i className="fa-regular fa-clock"></i> {movieDetail.runtime}{" "}
                  min
                </div>
              </div>
              <div className="rate">
                <div className="vote">{movieDetail.vote_average}%</div>
                <div className="userscore">user score</div>
              </div>
              <h2>{movieDetail.tagline}</h2>
              <h3>Overview</h3>
              <div className="description">{movieDetail.overview}</div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default DetailMovie;
