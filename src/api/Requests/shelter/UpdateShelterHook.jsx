import { useState } from "react";
import { apiClient } from "../../generateapi";

export const updateShelter = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateShelter = async (id, occpancyData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await apiClient.put(`/shelters/${id}`, occpancyData);
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, updateShelter };
};
