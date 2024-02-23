import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import "./DetailMovie.css";

const DetailMovie = () => {
  const { slug: movieID } = useParams();
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const apiMovieDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;
  const movieDetail = useFetch(apiMovieDetail);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {movieDetail && (
        <Container>
          <Row>
            <Col lg={4}>
              <img
                className="rounded-3"
                src={`https://image.tmdb.org/t/p/w400/${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            </Col>
            <Col lg={8}>
              <div className="name fw-bold">{movieDetail.title}</div>
              <div className="sub d-flex justify-content-between w-50">
                <div className="time">{movieDetail.release_date}</div>
                <div className="cate">
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => genre.name).join(", ")}
                </div>
                <div className="length">
                  <i className="fa-regular fa-clock text-warning"></i>{" "}
                  {movieDetail.runtime}
                  min
                </div>
              </div>
              <div className="rate d-flex w-50 justify-content-between align-items-center m-2">
                <div className="vote">{movieDetail.vote_average}%</div>
                <div className="userscore">user score</div>
                <Button className="trailer" onClick={handleShow}>
                  <i class="fa-solid fa-play"></i> Play trailer
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="text-black text-uppercase fw-bold">
                      Trailer
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>ABC</Modal.Body>
                </Modal>
              </div>
              <h3>{movieDetail.tagline}</h3>
              <h2>Overview</h2>
              <div className="description">{movieDetail.overview}</div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default DetailMovie;
