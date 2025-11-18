// src/components/RegisterModal.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

export default function RegisterModal({ onClose, onCreate, apiUrl = "/api/shelters" }) {
  const [newShelter, setNewShelter] = useState({ id: "", name: "", address: "", capacity: "", occupied: 0, phone: "", notes: "", lat: "", lng: "" });
  const [saving, setSaving] = useState(false);

  async function handleCreateShelter(e) {
    e.preventDefault();
    if (!newShelter.id || !newShelter.name) return alert("Completa al menos ID y nombre del albergue");

    const payload = {
      id: newShelter.id,
      name: newShelter.name,
      address: newShelter.address,
      capacity: Number(newShelter.capacity) || 0,
      occupied: Number(newShelter.occupied) || 0,
      phone: newShelter.phone,
      notes: newShelter.notes,
      lat: newShelter.lat ? Number(newShelter.lat) : undefined,
      lng: newShelter.lng ? Number(newShelter.lng) : undefined,
    };

    setSaving(true);
    try {
      const res = await axios.post(apiUrl, payload);
      const created = (res && res.data) ? res.data : payload;
      onCreate(created);
      onClose();
    } catch (err) {
      console.error("Error creando albergue:", err);
      alert("No fue posible crear el albergue en el servidor. Revisa la consola para más detalles.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.form onSubmit={handleCreateShelter} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 w-full max-w-lg bg-white rounded-lg p-6 shadow-2xl">
        <h3 className="text-lg font-semibold mb-4">Registrar nuevo albergue</h3>

        <div className="grid grid-cols-2 gap-3">
          <input placeholder="ID (ej. S04)" value={newShelter.id} onChange={(e) => setNewShelter((p) => ({ ...p, id: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />
          <input placeholder="Nombre" value={newShelter.name} onChange={(e) => setNewShelter((p) => ({ ...p, name: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />

          <input placeholder="Dirección" value={newShelter.address} onChange={(e) => setNewShelter((p) => ({ ...p, address: e.target.value }))} className="px-3 py-2 rounded border col-span-2" />

          <input placeholder="Teléfono" value={newShelter.phone} onChange={(e) => setNewShelter((p) => ({ ...p, phone: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />
          <input placeholder="Capacidad" value={newShelter.capacity} onChange={(e) => setNewShelter((p) => ({ ...p, capacity: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />

          <input placeholder="Ocupado (opcional)" value={newShelter.occupied} onChange={(e) => setNewShelter((p) => ({ ...p, occupied: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />
          <input placeholder="Lat" value={newShelter.lat} onChange={(e) => setNewShelter((p) => ({ ...p, lat: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />

          <input placeholder="Lng" value={newShelter.lng} onChange={(e) => setNewShelter((p) => ({ ...p, lng: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />
          <input placeholder="Notas" value={newShelter.notes} onChange={(e) => setNewShelter((p) => ({ ...p, notes: e.target.value }))} className="px-3 py-2 rounded border col-span-1" />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-2 rounded border">Cancelar</button>
          <button type="submit" disabled={saving} className="px-4 py-2 rounded bg-green-600 text-white">{saving ? "Guardando..." : "Crear albergue"}</button>
        </div>
      </motion.form>
    </div>
  );
}
