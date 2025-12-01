// src/components/ShelterDashboard.jsx
import React, { useEffect, useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import ShelterList from "./ShelterList";
import ShelterDetail from "./ShelterDetail";
import SummaryPanel from "./SummaryPanel";
import RegisterModal from "./RegisterModal";
import { mockEmployees } from "./mocks";
import { exportCSV } from "./utils";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
import ShelterDetailForOrganizer from "./ShelterDetailForOrganizer";
import { ShelterviewModal } from "./SheltersViewModal";

export default function ShelterDashboardOrganizer() {

    const { data: shelters, loading, error } = getShelters();

    const [localShelters, setLocalShelters] = useState(shelters);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(localShelters[0] || null);
    const [showOccupancyChart] = useState(true);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    useEffect(() => {
        if (shelters && shelters.length > 0) {
            setLocalShelters(shelters);

            // si no hay seleccionado, tomamos el primero
            setSelected((prev) => prev || shelters[0]);
        }
    }, [shelters]);

    const filteredShelters = useMemo(() => {
        if (!query) return localShelters;

        const q = query.toLowerCase();

        return localShelters.filter(
            (s) =>
                (s.name || "").toLowerCase().includes(q) ||
                (s.address || "").toLowerCase().includes(q) ||
                (s.id || "").toLowerCase().includes(q)
        );
    }, [localShelters, query]);






    return (


        <div className="min-h-screen flex bg-gray-50 text-gray-800" >
            <main className="flex-1 p-6">
                <header>
                    <h1 className=" font-bold text-2xl m-3 ">Bienvenido: {localStorage.getItem('userName') || ''}</h1>
                </header>
                <section>
                </section>
                <div className="grid grid-cols-3 gap-30">
                    <ShelterDetailForOrganizer shelter={selected} />
                </div>

            </main>
        </div>
    );
}
