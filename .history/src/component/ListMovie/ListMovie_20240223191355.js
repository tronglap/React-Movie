import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";

import "./ListMovie.css";

const ListMovie = () => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [page, setPage] = useState(1);
  const ListMovie = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
  );
  const allMovie = ListMovie.results;

  const [moreMovie, setMoreMovie] = useState([]);
  const handleShow = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (allMovie) {
      setMoreMovie((re) => [...re, ...allMovie]);
    }
  }, [allMovie]);

  console.log(allMovie);

  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>List Movie</h1>
        </div>
        <div className=" mt-4">
          <Row>
            {allMovie &&
              allMovie.map((item) => (
                <Col lg={3}>
                  <CardMovie
                    id={item.id}
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
        <div className="show">
          <button
            className=" bg-warning p-3 fw-bold fs-4 text-white rounded-2"
            onClick={() => handleShow()}
          >
            Load More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ListMovie;
