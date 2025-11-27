import { useState } from "react"
import { apiClient } from "../../generateapi";
import { treemapPayloadSearcher } from "recharts/types/chart/Treemap";

export const useNewPassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNewPassword = async (id, passwordData) => {
        setLoading(true);
        setError(null);
        try {
            await apiClient.patch(`authorize/password/${id}`, passwordData);
            return true;
        }
        catch (err) {
            setError(error)
            throw err;
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, error, fetchNewPassword }
}