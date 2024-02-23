import React from "react";
import { Container } from "react-bootstrap";
import "./ListMovie.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";
const ListMovie = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const ListMovie = useFetch(props.apiLink);

  return (
    <div className="list-movie m-5">
      <Container md={6}>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>{props.title}</h1>
        </div>

        <div className="slider-container mt-4 list">
          <Slider {...settings}>
            {ListMovie.results &&
              ListMovie.results.map((item) => (
                <CardMovie
                  id={item.id}
                  poster_path={item.poster_path}
                  title={item.title}
                  original_title={item.original_title}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                ></CardMovie>
              ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ListMovie;
