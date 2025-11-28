import { useEffect, useState } from "react";
import { apiClient } from "../../generateapi";

export const GetMyShelter = (lat, lon) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lat == null || lon == null) {
      return;
    }

    const fetchMyShelter = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiClient.get(`/shelters/${lat},${lon}`);
        setData(response.data);
        
        console.log("hookResponse", response.data);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyShelter();
  }, [lat, lon]);

  return { data, loading, error };
};
