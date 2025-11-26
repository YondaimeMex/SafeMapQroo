import { useState } from "react";
import { apiClient } from "../generateapi";

export const useCreateShelter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createShelter = async (shelterData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await apiClient.post('/shelters', shelterData);
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, createShelter };
};
