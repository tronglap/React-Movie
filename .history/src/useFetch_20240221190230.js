import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [now, setNow] = useState([]);

  const fetchNow = async () => {
    const res = await fetch(url);
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
