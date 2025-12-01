// src/components/Sidebar.jsx
import React from "react";
import { Home, Users, Settings, FileText, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { getShelters } from "../api/Requests/shelter/GetSheltersHook";
export default function SelectShelter() {

    const { data: shelters, loading, error } = getShelters();
    const { localStorage, setlocalStorage } = useState(shelters);

    return (
        <aside className="w-72 bg-white border-r p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold">AL</div>
                <div>
                    <div className="text-lg font-semibold">Panel Albergues</div>
                    <div className="text-sm text-gray-500">Administra tus albergues</div>
                </div>
            </div>

            <section className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold">Albergues ({shelters.length})</div>
                </div>

                <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">
                    {shelters.map((s) => {
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
            <Link
                to="/login"
                className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
            >
                <LogOut size={16} />
                Cerrar sesión
            </Link>
        </aside>
    );
}
