import { useMap } from "react-leaflet";
import { useState } from "react";

export default function LocateButton({ onLocation }) {
  const map = useMap();
  const [loading, setLoading] = useState(false);

  const handleLocate = () => {
    setLoading(true);

    const lat = 21.049706925680244;
    const lon = -86.8469667206303;
    const userLatLng = [lat, lon];

    console.log("Ubicación estática:", lat, lon);

    // Solo mueve el mapa — no borra nada
    map.flyTo(userLatLng, 16);

    // Envía la ubicación al componente padre
    onLocation(userLatLng);

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
