import React from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  return (
    <Link to={`/detail-movie/${props.id}`} className="card-movie p-2">
      <img
        className="rounded-4"
        src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}
        alt={props.title}
      />
      <div className="name d-block fw-bold">{props.original_title}</div>
      <div className="d-flex mt-4 justify-content-between ">
        <div className="date">{props.release_date}</div>
        <div className="vote text-warning ">
          <i class="fa-solid fa-star text-warning"></i>
          {props.vote_average}
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
