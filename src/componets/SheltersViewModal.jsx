import { u } from "framer-motion/client";
import { getOneShelters } from "../api/Requests/GetOneShelter";
import Modal from "react-modal";


export const ShelterviewModal = ({ id, setId }) => {
    const { data: shelter, loading, error } = getOneShelters(id);

    console.log("Shelter data in modal:", error);

    // Si no hay id, no mostramos nada
    if (!id) return null;

    const googleMapsUrl = shelter
        ? `https://www.google.com/maps/search/?api=1&query=${shelter.latitude},${shelter.longitude}`
        : "";

    return (
        <div className="z'[2000]">
            <Modal
                isOpen={Boolean(id)}
                onRequestClose={() => setId(null)}
                contentLabel="Información del refugio"
                className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black/80 bg-opacity-40"
            >
                {/* Título */}
                <h2 className="text-xl font-bold mb-4">Información del Refugio</h2>

                {/* Loading */}
                {loading && <p className="text-gray-500">Cargando información...</p>}

                {/* Error */}
                {error && <p className="text-red-500">Error al cargar el refugio.</p>}

                {/* Datos */}
                {shelter && (
                    <div className="space-y-2">
                        <p><strong>Nombre:</strong> {shelter.name}</p>
                        <p><strong>Dirección:</strong> {shelter.address}</p>
                        <p><strong>Capacidad:</strong> {shelter.capacity}</p>
                        <p><strong>Disponible:</strong> {shelter.available ? "Sí" : "No"}</p>
                        <p><strong>Municipio:</strong> {shelter.municipality}</p>

                        {/* Link a Google Maps */}
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 text-blue-600 underline font-semibold"
                        >
                            Ver en Google Maps
                        </a>
                    </div>
                )}

                {/* Botón de cerrar */}
                <button
                    onClick={() => setId(null)}
                    className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Cerrar
                </button>
            </Modal>
        </div>
    );
};
