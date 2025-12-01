
// src/components/ShelterDashboardOrganizer.jsx
import React, { useEffect, useState, useMemo } from "react";
import ShelterDetailForOrganizer from "./ShelterDetailForOrganizer";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
import { ShelterListModal } from "./ShelterListModal";

export default function ShelterDashboardOrganizer() {
    const { data: shelters, loading, error } = getShelters();

    const [selectedShelter, setSelectedShelter] = useState(null);
    const [showModal, setShowModal] = useState(true); // Mostrar modal al inicio

    if (loading) return <p>Cargando albergues...</p>;
    if (error) return <p>Error al cargar albergues</p>;

    return (
        <div className="min-h-screen flex bg-gray-50 text-gray-800">
            <main className="flex-1 p-6">
                <header>
                    <h1 className="font-bold text-2xl m-3">
                        Bienvenido: {localStorage.getItem("userName") || ""}
                    </h1>
                </header>

                {/* Mostrar modal solo si no hay refugio seleccionado */}
                {showModal && !selectedShelter && (
                    <ShelterListModal
                        shelters={shelters}
                        selected={selectedShelter}
                        onSelect={(s) => {
                            setSelectedShelter(s);
                            setShowModal(false);
                        }}
                        onClose={() => setShowModal(false)}
                    />
                )}

                {/* Mostrar detalle del refugio seleccionado */}
                {selectedShelter && (
                    <div className="grid grid-cols-3 gap-30">
                        <ShelterDetailForOrganizer shelter={selectedShelter} />
                    </div>
                )}
            </main>
        </div>
    );
}
