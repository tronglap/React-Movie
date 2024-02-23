import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ListMovie.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const apiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`;
  const [now, setNow] = useState([]);

  const fetchNow = async () => {
    const res = await fetch(apiNowPlaying);
    const data = await res.json();
    console.log(data);
    setNow(data);
  };

  useEffect(() => {
    fetchNow();
  }, []);

  return (
    <div className="list-movie m-5">
      <Container>
        <div className="headline text-center">
          <p className="text-warning">Online Streaming</p>
          <h1>Now Playing Movie</h1>
        </div>

        <div className="slider-container mt-4 list">
          <Slider {...settings}>
            {now.results &&
              now.results.map((item) => (
              ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ListMovie;
