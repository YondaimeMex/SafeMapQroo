
// src/components/ShelterDashboardOrganizer.jsx
import React, { useEffect, useState, useMemo } from "react";
import ShelterDetailForOrganizer from "./ShelterDetailForOrganizer";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
import { ShelterListModal } from "./ShelterListModal";
import ShelterOccupancyDetail from "./ShelterOccupancyDetail";

export default function ShelterDashboardOrganizer() {
    const { data: shelters, loading, error } = getShelters();

    const firstShelter = shelters && shelters.length > 0 ? shelters[0] : null;
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

                {firstShelter && (
                    <div className="flex gap-10">
                        <ShelterDetailForOrganizer shelter={firstShelter} />
                        <ShelterOccupancyDetail shelterId={firstShelter.id} />
                    </div>
                )}
            </main>
        </div>

    );
}
