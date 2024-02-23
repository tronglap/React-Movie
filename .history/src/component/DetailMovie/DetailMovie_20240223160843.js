import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DetailMovie = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <img
              src="https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg"
              alt=""
            />
          </Col>
          <Col lg={8}>
            <div className="name">Migration</div>
            <div className="sub"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailMovie;
