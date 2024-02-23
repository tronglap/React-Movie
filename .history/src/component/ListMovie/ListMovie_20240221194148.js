import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";

const ListMovie = () => {
  const ListMovie = useFetch(apiLink);

  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>List Movie</h1>
        </div>
        <Row>
          <Col lg={3}>
            <div className="slider-container mt-4 list">
              {ListMovie.results &&
                ListMovie.results.map((item) => (
                  <CardMovie
                    poster_path={item.poster_path}
                    title={item.title}
                    original_title={item.original_title}
                    release_date={item.release_date}
                    vote_average={item.vote_average}
                  ></CardMovie>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListMovie;
