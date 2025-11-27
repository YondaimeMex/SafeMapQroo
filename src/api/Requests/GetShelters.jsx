import { use, useState } from "react";
import { apiClient } from "../generateapi";
import { useEffect } from "react";


export const getShelters = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShelters = async () => {
            try {
                const response = await apiClient.get('/shelters');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchShelters();
    }, []);

    return { data, loading, error };
};
