import { useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";

export default function LocateButton() {
  const map = useMap();
  const [loading, setLoading] = useState(false);

  const handleLocate = () => {
    setLoading(true);
    map.locate().on("locationfound", (e) => {
      map.flyTo(e.latlng, 14);
      setLoading(false);
    }).on("locationerror", () => {
      alert("No se pudo obtener tu ubicación");
      setLoading(false);
    });
  };

  return (
    <button
      onClick={handleLocate}
      className="absolute top-5 right-5 bg-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 z-[1000]"
    >
      {loading ? "Buscando..." : "Mi ubicación"}
    </button>
  );
}