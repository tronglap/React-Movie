// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import CardMovie from "../CardMovie/CardMovie";
// import useFetch from "../../useFetch";

import "./ListMovie.css";

// const ListMovie = () => {
//   const API_KEY = "e9e9d8da18ae29fc430845952232787c";
//   const [page, setPage] = useState(1);
//   const ListMovie = useFetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
//   );

//   const [moreMovie, setMoreMovie] = useState(ListMovie);
//   const handleShow = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   useEffect(() => {
//     setMoreMovie(ListMovie);
//   }, [ListMovie]);

//   return (
//     <div>
//       <Container>
//         <div className="headline text-center">
//           <p className="text-warning">Online Streaming</p>
//           <h1>List Movie</h1>
//         </div>
//         <div className=" mt-4">
//           <Row>
//             {moreMovie.results &&
//               moreMovie.results.map((item) => (
//                 <Col lg={3}>
//                   <CardMovie
//                     poster_path={item.poster_path}
//                     title={item.title}
//                     original_title={item.original_title}
//                     release_date={item.release_date}
//                     vote_average={item.vote_average}
//                   ></CardMovie>
//                 </Col>
//               ))}
//           </Row>
//         </div>
//         <button className="show w-25 bg-warning " onClick={() => handleShow()}>
//           ShowMore
//         </button>
//       </Container>
//     </div>
//   );
// };

// export default ListMovie;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";

const ListMovie = () => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = async () => {
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
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

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
          <button
            className="show bg-warning p-3 fw-bold fs-4 text-white rounded-2"
            onClick={() => handleLoadMore()}
          >
            Load More
          </button>
        )}
      </Container>
    </div>
  );
};

export default ListMovie;
