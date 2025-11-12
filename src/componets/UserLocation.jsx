import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const userIcon = L.icon({
  iconUrl: "src/assets/UserIconLocation.png",
  iconSize: [50, 50],
  iconAnchor: [30, 40],
  popupAnchor: [0, -35],
});

export default function UserLocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 15 });

    function onLocationFound(e) {
      setPosition(e.latlng);
    }

    map.on("locationfound", onLocationFound);

    return () => {
      map.off("locationfound", onLocationFound);
    };
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>Estás aquí</Popup>
    </Marker>
  );
}