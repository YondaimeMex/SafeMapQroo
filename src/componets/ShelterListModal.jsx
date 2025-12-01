import React, { useState } from "react";
import ShelterList from "./ShelterList";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";

export function ShelterListModal({ shelters, selected, onSelect, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] max-h-[80vh] overflow-auto">
                <h2 className="text-lg font-semibold mb-4">Selecciona un albergue</h2>

                <ShelterList shelters={shelters} selected={selected} onSelect={onSelect} />

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedShelter, setSelectedShelter] = useState(null);
    const { data: shelters, loading, error } = getShelters();

    if (loading) return <p>Cargando albergues...</p>;
    if (error) return <p>Error al cargar albergues</p>;

    return (
        <div className="p-6">
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Elegir albergue
            </button>

            {isOpen && (
                <ShelterListModal
                    shelters={shelters}
                    selected={selectedShelter}
                    onSelect={(s) => {
                        setSelectedShelter(s);
                        localStorage.setItem("selectedShelterId", s.id);
                        setIsOpen(false);
                    }}
                    onClose={() => setIsOpen(false)}
                />
            )}

            {selectedShelter && (
                <p className="mt-4">Albergue seleccionado: {selectedShelter.name}</p>
            )}
        </div>
    );
}
