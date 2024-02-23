import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [now, setNow] = useState([]);

  const fetchNow = async () => {
    const res = await fetch(apiNowPlaying);
    const data = await res.json();
    console.log(data);
    setNow(data);
  };

  useEffect(() => {
    fetchNow();
  }, []);
  return <div></div>;
};

export default useFetch;
