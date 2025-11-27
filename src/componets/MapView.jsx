import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./SearchBar";
import LocateButton from "./LocateButton";
import UserLocation from "./UserLocation";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
import { useEffect, useState } from "react";
import { ShelterviewModal } from "./SheltersViewModal";
import L from "leaflet";

const centerPosition = [21.1619, -86.8515];

export default function MapView({ size = "normal" }) {

  const { data: shelters, loading, error } = getShelters();
  const [selectedShelterId, setSelectedShelterId] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  // Definición de los límites máximos del mapa
  const maxBounds = [
    [18.5, -89.5], // southwest lat, lng
    [21.9, -85.0], // northeast lat, lng
  ];
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
        minZoom={8}            // no puede alejarse más que este nivel
        maxZoom={20}           // no puede acercarse más que este nivel
        maxBounds={maxBounds}  // limita el área donde puede moverse
        maxBoundsViscosity={0.8} // resistencia al empujar fuera de bounds
        scrollWheelZoom={true}
        className="w-full h-full rounded-xl shadow-lg z-0"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        <LocateButton onLocation={setUserLocation} />
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.icon({
              iconUrl: "src/assets/UserIconLocation.png",
              iconSize: [50, 50],
              iconAnchor: [25, 50],
            })}
          >
            <Popup>Estás aquí</Popup>
          </Marker>
        )}


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