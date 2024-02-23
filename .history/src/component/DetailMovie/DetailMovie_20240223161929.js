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
            <div className="sub">
              <div className="time">2023-12-06</div>
              <div className="cate">
                Animation,Action,Adventure,Comedy,Family
              </div>
              <div className="length">
                <i class="fa-regular fa-clock"></i> 83 min
              </div>
            </div>
            <div className="rate">
              <div className="vote">7.635%</div>
              <div className="userscore">user score</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailMovie;
