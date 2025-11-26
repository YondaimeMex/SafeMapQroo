import { use, useState } from "react";
import { apiClient } from "../generateapi";
import { useEffect } from "react";


export const getOneShelters = ({ id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchShelters = async () => {
            try {
                const response = await apiClient.get('/shelters/' + id);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (!id) {
            setData(null);
            setLoading(false);
            return;
        } else {
            fetchShelters();
        }

    }, [id]);

    return { data, loading, error };
};
