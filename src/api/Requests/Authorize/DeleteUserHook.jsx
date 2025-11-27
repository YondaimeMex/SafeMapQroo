

import { useState } from "react";
import { apiClient } from "../../generateapi";

export const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDeleteUser = async (id) => {
        setLoading(true);
        setError(null);

        try {
            await apiClient.delete(`/authorize/${id}`);
            return true;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchDeleteUser };
};
