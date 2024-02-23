import React from "react";

const CardMovie = () => {
  return (
    <div className="card-movie p-2">
      <img
        className="rounded-4"
        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
        alt={item.title}
      />
      <div className="name">{item.original_title}</div>
      <div className="date">{item.release_date}</div>
      <div className="vote">{item.vote_average}</div>
    </div>
  );
};

export default CardMovie;
