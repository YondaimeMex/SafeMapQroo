import React, { useState } from "react";
import { getOneShelters } from "../api/Requests/shelter/GetOneShelterHook";

export default function ShelterDetailForOrganizer({ shelter }) {
    const shelterId = shelter?.id;

    const { data, loading, error } = getOneShelters(shelterId);
    const { localData, setLocalData } = useState(data);
    const BlockMessage = ({ text }) => (
        <div className="flex items-center justify-center h-[80vh] w-[60vw] mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg">
            <div className="bg-white text-gray-700 px-8 py-6 rounded-lg shadow-md text-center text-base font-medium max-w-md">
                {text}
            </div>
        </div>
    );

    if (!shelterId) {
        return <BlockMessage text="Selecciona un albergue para ver los detalles..." />;
    }

    if (loading) {
        return <BlockMessage text="Cargando información del albergue..." />;
    }

    if (error) {
        return <BlockMessage text="Error al obtener los datos del albergue..." />;
    }

    if (!data) {
        return <BlockMessage text="No se encontraron datos del albergue..." />;
    }

    const shelterDetails = data;
    const lastOccupancy = shelterDetails?.occupancy?.[shelterDetails.occupancy.length - 1];
    const TotalOcupancy = shelterDetails.occupancy.reduce((total, entry) => total + entry.currentOccupancy, 0);


    return (

        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 
                        h-[80vh] w-[60vw] mx-auto overflow-y-auto">
            {/* Encabezado */}
            <div className="flex items-start justify-between gap-6 border-b pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{shelterDetails.name}</h2>
                    <p className="text-gray-500 mt-1">{shelterDetails.address}</p>
                    <p className="mt-2 text-gray-700">
                        <strong>Tel:</strong> {shelterDetails.phone} • <strong>ID:</strong>{" "}
                        {shelterDetails.id}
                    </p>
                </div>
            </div>

            {/* Notas */}
            <div className="mt-6 text-gray-700 leading-relaxed">
                {shelterDetails.notes}
            </div>
            <section>
                <div className="text-left bg-gray-50 px-4 py-2 rounded-lg shadow-sm flex-initial">
                    <p className="text-sm text-gray-600">Capacidad</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{shelterDetails.capacity}</p>
                    <p className="text-sm text-gray-500">Total ocupado:</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{TotalOcupancy}</p>
                </div>
            </section>
        </section>


    );
}
