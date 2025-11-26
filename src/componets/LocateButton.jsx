import { useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import UserLocation from "./UserLocation";

export default function LocateButton() {
  const map = useMap();
  const [loading, setLoading] = useState(false);

  const handleLocate = () => {
    setLoading(true);

    // Ubicación estática en latitud y longitud
    
    const lat = 21.049706925680244;  // Latitud de ejemplo (Cancún, MX)
    const lon = -86.8469667206303;  // Longitud de ejemplo (Cancún, MX)

    const userLatLng = [lat, lon];

    console.log("Ubicación estática:", lat, lon);

    // Remover marcadores previos
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) map.removeLayer(layer);
    });

    // Agregar marcador en la ubicación estática
    L.marker(userLatLng, {
      icon: L.icon({
        iconUrl: "src/assets/UserIconLocation.png",
        iconSize: [50, 50],
        iconAnchor: [50, 50],
      }),
    }).addTo(map);

    map.flyTo(userLatLng, 16); // Ajustar zoom a 16 para mayor precisión visual

    setLoading(false);
  };

  return (
    <button
      onClick={handleLocate}
      className="text-lg absolute top-5 right-5 bg-pink-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 z-[1000]"
    >
      {loading ? "Buscando..." : "Buscar albergues más cercanos"}
    </button>
  );
}
