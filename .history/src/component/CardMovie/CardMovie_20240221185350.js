import React from "react";

const CardMovie = (props) => {
  return (
    <div className="card-movie p-2">
      <img
        className="rounded-4"
        src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}
        alt={props.title}
      />
      <div className="name d-block">{props.original_title}</div>
      <div className="d-flex">
        <div className="date">{props.release_date}</div>
        <div className="vote">{props.vote_average}</div>
      </div>
    </div>
  );
};

export default CardMovie;
