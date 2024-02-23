import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const ListMovie = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>Now Playing Movie</h1>
        </div>

        <div className="slider-container mt-4 list">
          <Slider {...settings}>
            {movieUpComing.results &&
              movieUpComing.results.map((item) => (
                <CardMovie
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
