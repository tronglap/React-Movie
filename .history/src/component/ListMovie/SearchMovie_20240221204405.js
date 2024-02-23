import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";

const SearchMovie = () => {
  const { slug: keySearch } = useParams();
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const apiSearch = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=1 `
  );

  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>Search key:{keySearch}</h1>
        </div>
        <div className=" mt-4">
          <Row>
            {apiSearch.results &&
              apiSearch.results.map((item) => (
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

export default SearchMovie;
