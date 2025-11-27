import { useState } from "react"
import { apiClient } from "../../generateapi";

export const useNewEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNewEmail = async (id, emailData) => {
        setLoading(true);
        setError(null);
        try {
            await apiClient.patch(`/authorize/email/${id}`, emailData);
            return true;
        }
        catch (err) {
            setError(err);
            throw err;
        }
        finally {
            setLoading(false);
        }




    }

    return { loading, error, fetchNewEmail }
} 