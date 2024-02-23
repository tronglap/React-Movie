import React from "react";
import { Container } from "react-bootstrap";

const ListMovie = () => {
  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>{props.title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default ListMovie;
