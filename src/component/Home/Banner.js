import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="full">
      <Carousel.Item interval={1000}>
        <img
          src="https://react-film-clone.vercel.app/img/banner_2.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://react-film-clone.vercel.app/img/banner_1.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
