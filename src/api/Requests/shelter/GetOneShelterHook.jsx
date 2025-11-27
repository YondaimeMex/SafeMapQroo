<<<<<<< HEAD:src/api/Requests/GetOneShelter.jsx
import { useState } from "react";
import { apiClient } from "../generateapi";
import { useEffect } from "react";


export const getOneShelters = ( id ) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchShelters = async () => {
            
            if(id == null) return;

            try {
                const response = await apiClient.get('/shelters/' + id);
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
            fetchShelters();
        }

    }, [id]);

    return { data, loading, error };
};
=======
import { useState } from "react";
import { apiClient } from "../../generateapi";
import { useEffect } from "react";


export const getOneShelters = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchShelters = async () => {

            if (id == null) return;

            try {
                const response = await apiClient.get('/shelters/' + id);
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
            fetchShelters();
        }

    }, [id]);

    return { data, loading, error };
};
>>>>>>> d42c324599e50cebc445eb07eb805799307673b8:src/Api/Requests/shelter/GetOneShelterHook.jsx
