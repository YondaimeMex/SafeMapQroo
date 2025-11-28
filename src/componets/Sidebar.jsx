// src/components/Sidebar.jsx
import React from "react";
import { Home, Users, Settings, FileText, LogOut} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold">AL</div>
        <div>
          <div className="text-lg font-semibold">Panel Albergues</div>
          <div className="text-sm text-gray-500">Administra tus albergues</div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <Home size={18} />
              <span>Resumen</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <Users size={18} />
              <span>Albergues</span>
            </a>
          </li>
          {/*<li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <FileText size={18} />
              <span>Reportes</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <Settings size={18} />
              <span>Configuración</span>
            </a>
          </li>*/}
        </ul>
      </nav>
      <div className="mt-auto pt-4 border-t">
        <Link
  to="/login"
  className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
>
  <LogOut size={16} />
  Cerrar sesión
</Link>
      </div>
    </aside>
  );
}
