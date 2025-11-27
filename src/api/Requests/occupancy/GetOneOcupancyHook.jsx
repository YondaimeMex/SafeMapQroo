import { useState } from "react";
import { apiClient } from "../../generateapi";
import { useEffect } from "react";


export const getOneOcupancy = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchOccupancy = async () => {

            if (id == null) return;

            try {
                const response = await apiClient.get('/occunpancy/' + id);
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
            fetchOccupancy();
        }

    }, [id]);

    return { data, loading, error };
};
