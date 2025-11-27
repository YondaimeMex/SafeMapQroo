import { useState } from "react";
import { apiClient } from "../../generateapi";

export const useNewUserName = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const fetchNewUserName = async (id, userName) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiClient.patch(`/authorize/username/${id}`, { userName });
            return response.data;
        }
        catch (err) {
            setError(err);
            throw err;
        }
        finally {
            setLoading(false);
        }

    }
    return { loading, error, fetchNewUserName };
}