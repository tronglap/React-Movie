import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";

const ListMovie = (index) => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const ListMovie = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${index}`
  );
  const [moreMovie, setMoreMovie] = useState([]);
  const [page, setPage] = useState(1);

  const showMorePic = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>List Movie</h1>
        </div>
        <div className=" mt-4">
          <Row>
            {ListMovie.results &&
              ListMovie.results.map((item) => (
                <Col lg={3}>
                  <CardMovie
                    poster_path={item.poster_path}
                    title={item.title}
                    original_title={item.original_title}
                    release_date={item.release_date}
                    vote_average={item.vote_average}
                  ></CardMovie>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ListMovie;
