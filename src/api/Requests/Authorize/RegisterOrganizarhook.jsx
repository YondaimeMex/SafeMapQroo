import { useState } from "react";
import { apiClient } from "../../generateapi";

export const LogingHook = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const RegisterOrganizerFunction = async (OrganizerData) => {

        setLoading(true);
        setError(null);

        try {

            const response = await apiClient.post('authorize/registerOrganizer', OrganizerData);
            setData(response.data);
            return response.data;

        } catch (err) {
            setError(err);
            throw err; // opcional, si quieres manejar el error desde el componente
        } finally {
            setLoading(false);
        }

    };

    return { data, loading, error, RegisterOrganizerFunction };
};
