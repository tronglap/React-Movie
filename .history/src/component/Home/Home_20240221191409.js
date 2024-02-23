import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";

const Home = () => {
  const arrayMovie = [
    {
      title: "Now Playing Movie",
      apiKey:
        "https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1",
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
