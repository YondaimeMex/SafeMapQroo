import React, { useState, useEffect } from "react";
import { getOneShelters } from "../api/Requests/shelter/GetOneShelterHook";
import { updateOccupancy } from "../api/Requests/occupancy/UpdateOccupancyHook";

export default function ShelterDetailForOrganizer({ shelter }) {
    const shelterId = shelter?.id;

    const { data, loading, error } = getOneShelters(shelterId);
    const { updateOccupancy: updateOcc, loading: updating, error: updateError } = updateOccupancy();

    const [newOccupancy, setNewOccupancy] = useState("");
    const [localShelter, setLocalShelter] = useState(null);

    useEffect(() => {
        if (data) setLocalShelter(data);
    }, [data]);

    const BlockMessage = ({ text }) => (
        <div className="flex items-center justify-center h-[80vh] w-[60vw] mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg">
            <div className="bg-white text-gray-700 px-8 py-6 rounded-lg shadow-md text-center text-base font-medium max-w-md">
                {text}
            </div>
        </div>
    );

    if (!shelterId) return <BlockMessage text="Selecciona un albergue para ver los detalles..." />;
    if (loading) return <BlockMessage text="Cargando información del albergue..." />;
    if (error) return <BlockMessage text="Error al obtener los datos del albergue..." />;
    if (!localShelter) return <BlockMessage text="No se encontraron datos del albergue..." />;

    const shelterDetails = localShelter;
    const occupancyArray = Array.isArray(shelterDetails?.occupancy)
        ? shelterDetails.occupancy
        : [];
    const TotalOcupancy = occupancyArray.reduce(
        (total, entry) => total + entry.currentOccupancy,
        0
    );

    const handleUpdate = async () => {
        try {
            const updated = await updateOcc(shelterId, { currentOccupancy: Number(newOccupancy) });
            setNewOccupancy("");

            setLocalShelter((prev) => ({
                ...prev,
                occupancy: [...(prev.occupancy || []), updated],
            }));
        } catch (err) {
            console.error("Error al actualizar ocupación:", err);
        }
    };

    return (
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 
                        h-[80vh] w-[60vw] mx-auto overflow-y-auto">
            {/* Encabezado */}
            <div className="flex items-start justify-between gap-6 border-b pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{shelterDetails.name}</h2>
                    <p className="text-gray-500 mt-1">{shelterDetails.address}</p>
                    <p className="mt-2 text-gray-700">
                        <strong>Tel:</strong> {shelterDetails.phone} • <strong>ID:</strong> {shelterDetails.id}
                    </p>
                </div>
            </div>

            {/* Notas */}
            <div className="mt-6 text-gray-700 leading-relaxed">{shelterDetails.notes}</div>

            {/* Capacidad y ocupación */}
            <section className="mt-6">
                <div className="text-left bg-gray-50 px-4 py-2 rounded-lg shadow-sm flex-initial">
                    <p className="text-sm text-gray-600">Capacidad</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{shelterDetails.capacity}</p>
                    <p className="text-sm text-gray-500">Total ocupado:</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{TotalOcupancy}</p>
                </div>
            </section>

            {/* Formulario para actualizar ocupación */}
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nueva ocupación</label>
                <input
                    type="number"
                    value={newOccupancy}
                    onChange={(e) => setNewOccupancy(e.target.value)}
                    className="border rounded px-3 py-2 w-40"
                />
                <button
                    onClick={handleUpdate}
                    disabled={updating}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {updating ? "Actualizando..." : "Actualizar"}
                </button>
                {updateError && <p className="text-red-500 mt-2">Error al actualizar ocupación</p>}
            </div>
        </section>
    );
}
