<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { getOneShelters } from "../api/Requests/GetOneShelter";

export default function ShelterDetail({ shelter, employees = [] }) {

  const shelterId = shelter?.id;

  const {data, loading, error} = getOneShelters(shelterId)
  
  if (!shelterId) {
  return <section>Selecciona un albergue...</section>;
  }

  if (loading) {
  return <section>Cargando...</section>;
  }

  if (error) {
  return <section>Error al obtener los datos...</section>;
}
  if (!data) {
  return <section>No se encontraron datos...</section>;
}
const shelterDetails = data;
=======
// src/components/ShelterDetail.jsx
import React from "react";
import { getOneShelters } from "../api/Requests/shelter/GetOneShelterHook";


export default function ShelterDetail({ shelte, employees = [] }) {

  console.log("Shelte ID:", shelte);

  const { data: shelter, loading, error } = getOneShelters(shelte?.id);

  if (!shelter) return <section className="col-span-1 bg-white p-4 rounded-lg shadow-sm text-gray-500">Selecciona un albergue para ver el detalle.</section>;
>>>>>>> d42c324599e50cebc445eb07eb805799307673b8

  return (
    <section className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{shelterDetails.name}</h2>
          <div className="text-sm text-gray-500">{shelterDetails.address}</div>
          <div className="mt-2 text-sm">
            <strong>Tel:</strong> {shelterDetails.phone} • <strong>ID:</strong> {shelterDetails.id}
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm">Capacidad</div>
          <div className="text-2xl font-bold">{shelterDetails.capacity}</div>
          <div className="text-sm text-gray-500">Ocupado: {shelterDetails.occupied}</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700">{shelterDetails.notes}</div>

      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 rounded-md border">Editar</button>
        <button className="px-3 py-1 rounded-md border">Agregar empleado</button>
        <button className="px-3 py-1 rounded-md border">Ver historial</button>
      </div>

      <div className="mt-6">
        <div className="font-semibold mb-2">Empleados asignados ({employees.length})</div>

        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="pb-2">Nombre</th>
              <th className="pb-2">Rol</th>
              <th className="pb-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-3 text-gray-500">
                  No hay empleados asignados.
                </td>
              </tr>
            ) : (
              employees.map((e) => (
                <tr key={e.id} className="border-t">
                  <td className="py-2">{e.name}</td>
                  <td className="py-2">{e.role}</td>
                  <td className="py-2">{e.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
