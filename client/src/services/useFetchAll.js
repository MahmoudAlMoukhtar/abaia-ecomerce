import {useState, useEffect, useRef} from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetchAll(urls) {
  const prevUrlsRef = useRef([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(urls);
  useEffect(() => {
    //Only run the array of URLs passed in changes
    if (arrEqual(prevUrlsRef.current, urls)) {
      setLoading(false);
      return;
    }
    prevUrlsRef.current = urls;
    const promises = urls.map(url =>
      fetch("http://localhost:3001/api/products" + url).then(response => {
        if (response.ok) return response.json();
        throw response;
      })
    );

    Promise.all(promises)
      .then(json => setData(json))
      .catch(e => {
        console.error(e);
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [urls]);

  return {data, loading, error};
}

const arrEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};

/* // eslint-disable-next-line */
