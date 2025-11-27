import { tr } from "framer-motion/client";
import { apiClient } from "../generateapi";
import { useEffect, useState } from "react";

export const GetMyShelter = (lat, lon) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchMyShelter = async () => {

            try {
                const response = await apiClient.get(`/shelters/${lat},${lon}`);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        if (!lat || !lon) {
            setData(null);
            setLoading(false);
            return;
        } else {
            fetchMyShelter();
        }



    }, [lat, lon]);

    return { data, loading, error };
}