// src/components/ShelterDashboard.jsx
import React, { useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import ShelterList from "./ShelterList";
import ShelterDetail from "./ShelterDetail";
import SummaryPanel from "./SummaryPanel";
import RegisterModal from "./RegisterModal";
import { mockShelters, mockEmployees } from "./mocks";
import { exportCSV } from "./utils";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";

export default function ShelterDashboard({ employees = mockEmployees, apiUrl = "/api/shelters" }) {

  const { data: shelters, loading, error } = getShelters();

  const [localShelters, setLocalShelters] = useState(shelters);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(localShelters[0] || null);
  const [showOccupancyChart] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

 

  const selectedEmployees = useMemo(
    () => employees.filter((e) => e.shelterId === (selected ? selected.id : "")),
    [employees, selected]
  );

  const chartData = useMemo(
    () => localShelters.map((s) => ({ name: s.name, capacity: s.capacity, occupied: s.occupied })),
    [localShelters]
  );

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Albergues</h1>

          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar albergue, dirección o ID"
                className="pl-3 pr-3 py-2 rounded-md border w-72"
              />
            </div>


            <button onClick={() => setShowRegisterModal(true)} className="px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
              Registrar albergue
            </button>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6">
          <ShelterList  selected={selected} onSelect={setSelected} />

          <ShelterDetail
            shelter={selected}
            employees={selectedEmployees}
            updateShelter={(s) => setLocalShelters((prev) => prev.map((p) => (p.id === s.id ? s : p)))}
          />

          <SummaryPanel
            localShelters={localShelters}
            employees={employees}
            chartData={chartData}
            showOccupancyChart={showOccupancyChart}
            streetViewSelectable={{ selected, setSelected }}
          />
        </div>

        {showRegisterModal && (
          <RegisterModal
            onClose={() => setShowRegisterModal(false)}
            onCreate={(created) => {
              setLocalShelters((prev) => [created, ...prev]);
              setSelected(created);
            }}
            apiUrl={apiUrl}
          />
        )}
      </main>
    </div>
  );
}
