import React from "react";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
  const keySearch = useParams();
  console.log("====================================");
  console.log(keySearch);
  console.log("====================================");
  return <div>Search</div>;
};

export default SearchMovie;
