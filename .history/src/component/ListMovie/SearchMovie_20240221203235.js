import React from "react";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
  const { slug: keySearch } = useParams();
  console.log(keySearch);
  return <div>Search</div>;
};

export default SearchMovie;
