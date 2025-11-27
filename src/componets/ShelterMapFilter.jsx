import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Componente para mostrar los detalles del albergue
import { mockShelters } from "./mocks"; // Suponiendo que 'mockShelters' es el arreglo de albergues
import { getShelters } from "../api/Requests/GetShelters";
import ShelterDetails from "./ShelterDetail";
import MapView from "./MapView";
const centerPosition = [21.1619, -86.8515]; // Coordenadas del centro de la vista inicial

export default function ShelterMapFilter() {
  const [query, setQuery] = useState(""); // Estado para la búsqueda
  const [selectedShelter, setSelectedShelter] = useState(null); // Albergue seleccionado
  const { data, loading, error } = getShelters();

  // Filtrar albergues
  const filteredShelters = useMemo(() => {
    if (!query) return shelters;
    const q = query.toLowerCase();
    return shelters.filter(
      (s) =>
        (s.name || "").toLowerCase().includes(q) ||
        (s.address || "").toLowerCase().includes(q) ||
        (s.id || "").toLowerCase().includes(q)
    );
  }, [shelters, query]);

  return (
    <div className="shelter-map-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar albergue, dirección o ID..."
          className="search-input"
        />
      </div>

      <MapView
        center={centerPosition}
        zoom={12}
        className="w-full h-full rounded-xl shadow-lg"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        {/* Marcadores de albergues filtrados */}
        {filteredShelters.map((shelter) => (
          <Marker
            key={shelter.id}
            position={[parseFloat(shelter.lat), parseFloat(shelter.lng)]}
            eventHandlers={{
              click: () => setSelectedShelter(shelter), // Al hacer click en el marcador, mostrar detalles
            }}
          >
            <Popup>{shelter.name}</Popup>
          </Marker>
        ))}
      </MapView>

      {selectedShelter && <ShelterDetails shelter={selectedShelter} />}
    </div>
  );
}
