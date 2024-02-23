import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../useFetch";

const DetailMovie = (props) => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const movieID = 634492;

  const apiMovieDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;
  const movieDetail = useFetch(apiMovieDetail);

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
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => genre.name).join(", ")}
                </div>
                <div className="length">
                  <i className="fa-regular fa-clock"></i> {movieDetail.runtime}
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
