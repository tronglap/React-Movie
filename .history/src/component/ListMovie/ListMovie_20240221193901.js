import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ListMovie = () => {
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
              <Slider {...settings}>
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
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListMovie;
