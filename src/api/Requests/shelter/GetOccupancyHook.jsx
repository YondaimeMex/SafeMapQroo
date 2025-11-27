<<<<<<<< HEAD:src/Api/Requests/shelter/GetOccupancyHook.jsx
import { use, useState } from "react";
import { apiClient } from "../generateapi";
import { useEffect } from "react";


export const getOccupancy = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOccupancy = async () => {
            try {
                const response = await apiClient.get('/shelters');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOccupancy();
    }, []);

    return { data, loading, error };
};
========
import { useState } from "react";
import { apiClient } from "../../generateapi";
import { useEffect } from "react";


export const getOneUser = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchAuthorize = async () => {

            if (id == null) return;

            try {
                const response = await apiClient.get('/authorize/' + id);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (!id) {
            setData(null);
            setLoading(false);
            return;
        } else {
            fetchAuthorize();
        }

    }, [id]);

    return { data, loading, error };
};
>>>>>>>> d42c324599e50cebc445eb07eb805799307673b8:src/Api/Requests/Authorize/GetOneUserHook.jsx
