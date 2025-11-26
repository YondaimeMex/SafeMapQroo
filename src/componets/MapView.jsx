import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./SearchBar";
import LocateButton from "./LocateButton";
import UserLocation from "./UserLocation";
import { getShelters } from "../api/Requests/GetShelters";
import { useEffect, useState } from "react";

const centerPosition = [21.1619, -86.8515];
const markers = [
  { lat: 21.17429, lng: -86.84656, title: "Playa Tortugas" },
  { lat: 21.16202, lng: -86.82375, title: "Zona Hotelera Cancún" },
  { lat: 21.14589, lng: -86.83421, title: "Mercado 28" }
];

export default function MapView({ size = "normal" }) {

  const { data: shelters, loading, error } = getShelters();



  // Condición de clases según el tamaño
  const containerClass =
    size === "small"
      ? "relative w-full h-80"
      : "relative w-full h-[90vh]";

  return (
    <div className={containerClass}>
      <MapContainer
        center={centerPosition}
        zoom={12}
        className="w-full h-full rounded-xl shadow-lg"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        <LocateButton />

        {shelters.map((m, i) => (
          <Marker key={i} position={[m.latitude, m.longitude]}
            eventHandlers={{ click: () => console.log("click") }}>
            <Popup>{m.name}</Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}