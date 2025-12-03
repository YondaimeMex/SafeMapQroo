import React, { useState, useEffect } from "react";
import { getOneShelters } from "../api/Requests/shelter/GetOneShelterHook";
import { updateOccupancy } from "../api/Requests/occupancy/UpdateOccupancyHook";

export default function ShelterDetailForOrganizer({ shelter }) {
    const shelterId = shelter?.id;

    const { data, loading, error } = getOneShelters(shelterId);
    const { updateOccupancy: updateOcc, loading: updating, error: updateError } = updateOccupancy();

    const [newOccupancy, setNewOccupancy] = useState("");
    const [localShelter, setLocalShelter] = useState(null);
    const [warning, setWarning] = useState("");

    useEffect(() => {
        if (data) setLocalShelter(data);
    }, [data]);

    if (!shelterId) return <p>Selecciona un albergue...</p>;
    if (loading) return <p>Cargando información...</p>;
    if (error) return <p>Error al obtener datos...</p>;
    if (!localShelter) return <p>No se encontraron datos...</p>;

    const shelterDetails = localShelter;
    const occupancyArray = Array.isArray(shelterDetails?.occupancy)
        ? shelterDetails.occupancy
        : [];
    const TotalOcupancy = occupancyArray.reduce(
        (total, entry) => total + entry.currentOccupancy,
        0
    );

    const handleUpdate = async () => {
        const newValue = Number(newOccupancy);

        // Validación contra capacidad
        if (TotalOcupancy + newValue > shelterDetails.capacity) {
            setWarning("No puedes exceder la capacidad del albergue");
            return;
        }

        try {
            const updated = await updateOcc(shelterId, { currentOccupancy: newValue });
            setNewOccupancy("");
            setWarning("");

            // 👇 Actualizar estado local para recalcular TotalOcupancy
            setLocalShelter((prev) => ({
                ...prev,
                occupancy: [...(prev.occupancy || []), updated],
            }));

            // Disparar evento global para refrescar otros componentes
            if (typeof window !== "undefined") {
                const event = new Event("occupancyUpdated");
                window.dispatchEvent(event);
            }
        } catch (err) {
            console.error("Error al actualizar ocupación:", err);
        }
    };

    return (
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 h-[500px] w-[60vw] mx-auto overflow-y-auto">
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

            {/* Capacidad y ocupación */}
            <section className="mt-6">
                <div className="text-left bg-gray-50 px-4 py-2 rounded-lg shadow-sm flex-initial">
                    <p className="text-sm text-gray-600">Capacidad</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{shelterDetails.capacity}</p>
                    <p className="text-sm text-gray-500">Total ocupado:</p>
                    <p className="text-3xl font-extrabold text-indigo-600">{TotalOcupancy}</p>
                </div>
            </section>

            {/* Formulario */}
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cantidad de Personas que llegaron
                </label>
                <input
                    type="number"
                    value={newOccupancy}
                    onChange={(e) => setNewOccupancy(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleUpdate();
                        }
                    }}
                    className={`border rounded px-3 py-2 w-40 ${warning ? "border-red-600 blink" : ""}`}
                />
                <button
                    onClick={handleUpdate}
                    disabled={updating}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {updating ? "Actualizando..." : "Actualizar"}
                </button>

                {/* Mensaje de advertencia con parpadeo */}
                {warning && (
                    <p className="text-red-600 font-bold mt-3 blink">{warning}</p>
                )}
                {updateError && <p className="text-red-500 mt-2">Error al actualizar ocupación</p>}
            </div>
        </section>
    );
}
