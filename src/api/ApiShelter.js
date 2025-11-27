import axios from 'axios'

const API_BASE_URL = "http://localhost:5078/api";

export const getShelters = async () => {

    try {
        const response = await axios.get(${API_BASE_URL}/Shelters);
        return response.data;
    } catch (error) {
        console.error("Error al obtener shelters:", error);
        throw error;
    }
};