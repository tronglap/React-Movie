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
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListMovie;
