import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./SearchBar";
import LocateButton from "./LocateButton";
import UserLocation from "./UserLocation";

const centerPosition = [21.1619, -86.8515];
const markers = [
  { lat: 21.17429, lng: -86.84656, title: "Playa Tortugas" },
  { lat: 21.16202, lng: -86.82375, title: "Zona Hotelera Cancún" },
  { lat: 21.14589, lng: -86.83421, title: "Mercado 28" }
];

export default function MapView() {
  return (
    <div className="relative w-full h-[90vh]">
      <MapContainer
        center={centerPosition}
        zoom={12}
        className="w-full h-full rounded-xl shadow-lg"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />
        <SearchBar />
        <LocateButton />
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]}>
            <Popup>{m.title}</Popup>
          </Marker>
        ))}
        <UserLocation />
      </MapContainer>
    </div>
  );
}