import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [now, setNow] = useState([]);

  const fetchNow = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setNow(data);
  };

  useEffect(() => {
    fetchNow();
  }, [url]);
  return now;
};

export default useFetch;
