import {useState, useEffect} from "react";
import * as api from "../api/index";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await (url === "products" && api.fetchProducts());
        setData(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return {data, setData, error, loading};
}
