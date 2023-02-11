import {useState, useEffect} from "react";
import * as api from "../api/index";

export default function useDetailFetch(url, id) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await (url === "product" && api.fetchProductById(id));
        setData(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [id]);

  return {data, error, loading};
}
