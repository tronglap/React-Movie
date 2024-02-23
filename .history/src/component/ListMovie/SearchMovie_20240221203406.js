import React from "react";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
  const { slug: keySearch } = useParams();
  console.log(keySearch);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query_string}&page=1 `;
  return <div>Search</div>;
};

export default SearchMovie;
