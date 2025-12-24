import { useEffect, useState } from "react";
import axios from "axios";

const API =  import.meta.env.VITE_API_BASE_URL;

export default function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`${API}${endpoint}`)
      .then(res => setData(res.data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
}
