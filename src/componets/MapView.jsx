import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
import { useEffect, useState } from "react";
import { ShelterviewModal } from "./SheltersViewModal";
import L from "leaflet";
import { useLocation } from "react-router-dom";
import { GetMyShelter } from "../api/Requests/shelter/GetMyShelterHook";

const centerPosition = [21.1619, -86.8515];

export default function MapView({ size = "normal" }) {
  const location = useLocation();

  const { data: shelters = [], loading, error } = getShelters();
  const [selectedShelterId, setSelectedShelterId] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const maxBounds = [
    [14.5, -118.5], // Suroeste
    [32.7, -86.5],  // Noreste
  ];

  const containerClass =
    size === "small"
      ? "relative w-full h-80"
      : "relative w-full h-[90vh]";

  // 🟣 Si venimos desde Information con coords, las guardamos como userLocation
  useEffect(() => {
    const state = location.state;
    if (state?.userLat && state?.userLon) {
      setUserLocation([state.userLat, state.userLon]);
    }
  }, [location.state]);

  return (
    <div className={containerClass}>
      <MapContainer
        center={centerPosition}
        zoom={12}
        minZoom={6}
        maxZoom={18}
        maxBounds={maxBounds}
        maxBoundsViscosity={0.8}
        scrollWheelZoom={true}
        className="w-full h-full rounded-xl shadow-lg z-0"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        {/* 📍 Marcador de la ubicación del usuario (si la tenemos) */}
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

        {/* 🧭 Localizar albergue más cercano y hacer flyTo */}
        {userLocation && (
          <NearestShelterLocator
            userLocation={userLocation}
            setSelectedShelterId={setSelectedShelterId}
          />
        )}

        {/* Marcadores de todos los albergues */}
        {(shelters || []).map((m, i) => (
          <Marker
            key={i}
            position={[m.latitude, m.longitude]}
            eventHandlers={{
              click: () => {
                setSelectedShelterId(m.id);
                console.log("Shelter ID seleccionado:", m.id);
              },
            }}
          >
            <Popup>{m.name}</Popup>
          </Marker>
        ))}

        {/* Modal de detalle del albergue */}
        <ShelterviewModal
          id={selectedShelterId}
          setId={() => setSelectedShelterId(null)}
        />
      </MapContainer>
    </div>
  );
}

/**
 * 🔍 Componente interno:
 * - Usa la ubicación del usuario
 * - Llama a GetMyShelter(lat, lon)
 * - Centra el mapa en el albergue más cercano
 */
function NearestShelterLocator({ userLocation, setSelectedShelterId }) {
  const map = useMap();
  const [alreadyCentered, setAlreadyCentered] = useState(false);

  const lat = userLocation?.[0];
  const lon = userLocation?.[1];

  const {
    data: nearest,
    loading,
    error,
  } = GetMyShelter(lat, lon);

  useEffect(() => {
    if (!lat || !lon) return;
    if (loading || error) return;
    if (!nearest || !nearest.shelter) return;
    if (alreadyCentered) return;

    const shelter = nearest.shelter; // ajusta si tu API usa otro nombre

    // Guardamos el ID para que se abra el modal
    setSelectedShelterId(shelter.id);

    // Volamos el mapa al albergue más cercano
    map.flyTo([shelter.latitude, shelter.longitude], 16);

    setAlreadyCentered(true);
  }, [lat, lon, loading, error, nearest, map, alreadyCentered, setSelectedShelterId]);

  return null;
}
