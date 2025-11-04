import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({variant = "full"
}) {
  // Map configuration
  const latitude = 21.1619;
  const longitude = -86.8515;
  const mapCenter = [latitude, longitude];
  const mapZoom = 13;
  const sizeClass = variant=== "full" ? "w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)]": "w-[500px] h-[500px]"


  return (
    <div className="flex justify-center items-center">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        className={`${sizeClass} rounded-2xl shadow-lg overflow-hidden`}
      >
        {/* Base map tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
        />

        {/* Example marker */}
        <Marker position={[21.1619, -86.8515]}>
          <Popup>Descripcion de la localizacion</Popup>
        </Marker>
        <Marker position={[21.1729, -86.8925]}>
          <Popup>Descripcion de la localizacion</Popup>
        </Marker>
        <Marker position={[21.1729, -86.8225]}>
          <Popup>Descripcion de la localizacion</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}