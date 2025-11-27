import { use, useState } from "react";
import { apiClient } from "../../generateapi";
import { useEffect } from "react";


export const getOneUsers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiClient.get('/authorize');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { data, loading, error };
};
