<<<<<<<< HEAD:src/Api/Requests/shelter/DeleteShelter.jsx
import { useState } from "react";
import { apiClient } from "../generateapi";

export const useDeleteShelter = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteShelter = async (id) => {
        setLoading(true);
        setError(null);

        try {
            await apiClient.delete(`/shelters/${id}`);
            return true;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, deleteShelter };
};
========
import { useState } from "react";
import { apiClient } from "../../generateapi";

export const useDeleteShelter = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteShelter = async (id) => {
        setLoading(true);
        setError(null);

        try {
            await apiClient.delete(`/shelters/${id}`);
            return true;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, deleteShelter };
};
>>>>>>>> d42c324599e50cebc445eb07eb805799307673b8:src/Api/Requests/shelter/DeleteShelterHook.jsx
