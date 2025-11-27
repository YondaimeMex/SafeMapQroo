import { useEffect, useState } from "react";
import { apiClient } from "../../generateapi";


export const getOneShelters = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchShelters = async () => {

            if (id == null) return;

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
