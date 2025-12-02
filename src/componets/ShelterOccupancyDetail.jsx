// src/components/ShelterOccupancyDetail.jsx
import React, { useEffect, useRef } from "react";
import { getOccupancy } from "../api/Requests/occupancy/GetOccupancyHook";

export default function ShelterOccupancyDetail({ shelterId }) {
    const { data, loading, error, refetch } = getOccupancy();
    const listRef = useRef(null); // 👈 referencia al UL

    useEffect(() => {
        const listener = () => refetch();
        window.addEventListener("occupancyUpdated", listener);
        return () => window.removeEventListener("occupancyUpdated", listener);
    }, [refetch]);

    // 👇 cada vez que cambien los datos, hacer scroll al final
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [data]);

    if (loading) return <p>Cargando ocupación...</p>;
    if (error) return <p>Error al cargar ocupación</p>;

    const filtered = data.filter((occ) => occ.shelterId === shelterId);

    if (filtered.length === 0) {
        return <p>No hay datos de ocupación para este albergue.</p>;
    }

    return (
        <section className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 h-[500px] w-[500px] mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Historial de ocupación</h3>
            <ul
                ref={listRef}
                className="space-y-3 h-[400px] overflow-y-auto"
            >
                {filtered.map((occ, index) => (
                    <li
                        key={index}
                        className="bg-gray-50 px-4 py-3 rounded-lg shadow-sm flex flex-col"
                    >
                        <span className="text-indigo-600 font-extrabold text-lg">
                            {occ.currentOccupancy} personas
                        </span>
                        <span className="text-gray-500 text-sm mt-1">
                            Última actualización: {new Date(occ.updatedOn).toLocaleString()}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
