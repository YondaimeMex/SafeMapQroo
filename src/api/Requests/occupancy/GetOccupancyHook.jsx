// src/api/Requests/occupancy/GetOccupancyHook.js
import { useState, useEffect } from "react";
import { apiClient } from "../../generateapi";

export const getOccupancy = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOccupancy = async () => {
        try {
            const response = await apiClient.get("occupancy/");
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOccupancy();
    }, []);

    return { data, loading, error, refetch: fetchOccupancy };
};
