
import React from "react";
import { motion } from "framer-motion";
import { occupancyBadge } from "./utils";
import { getShelters } from "../api/Requests/GetShelters";

export default function ShelterList({ selected, onSelect }) {

  const {data, loading, error} = getShelters();
  if (loading) return <section>Cargando albergues...</section>;
  if (error) return <section>Error al cargar los albergues.</section>;

  return (
    <section className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">Albergues ({data.length})</div>
        <div className="text-xs text-gray-500">Actualizado</div>
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">
        {data.map((s) => {
          const badge = occupancyBadge(s.occupied, s.capacity);

          return (
            <motion.div
              key={s.id}
              onClick={() => onSelect(s)}
              whileHover={{ scale: 1.01 }}
              className={`p-3 rounded-md border cursor-pointer 
                ${badge.borderClass}
                ${selected && selected.id === s.id
                  ? "border-blue-400 bg-gradient-to-r from-white to-blue-50"
                  : "hover:bg-gray-50"
                }`}
            >
            
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500">{s.address}</div>
                </div>

                <div className="text-right flex flex-col items-end gap-1">
                  <div className="text-sm">{s.occupied}/{s.capacity}</div>
                  <div className={`px-2 py-0.5 rounded-full text-xs ${badge.className}`}>
                    {badge.text}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
