import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";

const Home = () => {
  const arrayMovie = [
    {
      title: "Now Playing Movie",
      apiKey: ``,
    },
  ];
  return (
    <div>
      <Banner></Banner>
      <ListMovie></ListMovie>
    </div>
  );
};

export default Home;
