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
    {
      title: "Upcoming Movie",
      apiKey:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1",
    },
    {
      title: "Top Rated Movie",
      apiKey:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1",
    },
  ];
  return (
    <div>
      <Banner></Banner>
      {arrayMovie.map((item) => (
        <ListMovie
          key={item.index}
          title={item.title}
          apiKey={item.apiKey}
        ></ListMovie>
      ))}
    </div>
  );
};

export default Home;
