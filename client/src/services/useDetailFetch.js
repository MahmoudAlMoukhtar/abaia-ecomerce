import {useState, useEffect} from "react";
import * as api from "../api/index";
//local-server

export default function useDetailFetch(url, id) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await (url === "product"
          ? api.fetchProductById(id)
          : api.fetchPostById(id));
        setData(data);
        //console.log(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return {data, error, loading};
}
