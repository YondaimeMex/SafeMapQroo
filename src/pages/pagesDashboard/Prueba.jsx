import { useEffect, useState } from "react";
import { getShelters } from "../../Api/ApiShelter";

const Prueba = () => {
    const [shelter,setShelters]  = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]= useState(null);

    useEffect(() => {
        async function fetchData(){
            try {
        const data = await getShelters();
        setShelters(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
        }
        fetchData();
    }, [])



}

export default Prueba;