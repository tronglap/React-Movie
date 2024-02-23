import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import "./ListMovie.css";

const ListMovie = () => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
      );
      const data = await response.json();

      setMovieList((prevList) => [...prevList, ...data.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }, [API_KEY, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleLoadMore = () => {
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
            {movieList.map((item) => (
              <Col lg={3} key={item.id}>
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="show">
            <button
              className=" bg-warning p-3 fw-bold fs-4 text-white rounded-2"
              onClick={() => handleLoadMore()}
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ListMovie;
