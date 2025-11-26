import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./SearchBar";
import LocateButton from "./LocateButton";
import UserLocation from "./UserLocation";
import { getShelters } from "../api/Requests/GetShelters";
import { useEffect, useState } from "react";
import { ShelterviewModal } from "./SheltersViewModal";

const centerPosition = [21.1619, -86.8515];

export default function MapView({ size = "normal" }) {

  const { data: shelters, loading, error } = getShelters();

  const [selectedShelterId, setSelectedShelterId] = useState(null);

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
        className="w-full h-full rounded-xl shadow-lg z-0 "
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        <LocateButton />



        {shelters.map((m, i) => (
          <Marker key={i} position={[m.latitude, m.longitude]}
            eventHandlers={{
              click: () => {
                setSelectedShelterId(m.id)
                console.log("Shelter ID seleccionado:", m.id);
              }
            }} >
            <Popup>{m.name}</Popup>
          </Marker>
        ))}

        <ShelterviewModal id={selectedShelterId} setId={() => setSelectedShelterId(null)} />


      </MapContainer>

    </div >

  );
}