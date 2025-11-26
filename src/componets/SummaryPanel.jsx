import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import MapView from "./MapView";


export default function SummaryPanel({ localShelters, employees, chartData, showOccupancyChart, streetViewSelectable }) {
const { selected, setSelected } = streetViewSelectable || {};


return (
<section className="col-span-1 bg-white p-4 rounded-lg shadow-sm">
{/*<div className="flex items-center justify-between mb-3">
<div className="font-semibold">Resumen</div>
<div className="text-xs text-gray-500">Visual</div>
</div>*/}


<div className="space-y-4">
  {/*
<div>
<div className="text-sm text-gray-600 mb-2">Ocupación por albergue</div>
<div style={{ height: 180 }}>
{showOccupancyChart ? (
<ResponsiveContainer width="100%" height="100%">
<BarChart data={chartData}>
<XAxis dataKey="name" tick={{ fontSize: 12 }} />
<YAxis />
<Tooltip />
<Bar dataKey="occupied" name="Ocupados" />
</BarChart>
</ResponsiveContainer>
) : (
<div className="text-xs text-gray-500">Gráfico oculto</div>
)}
</div>
</div>*/}

{/*
<div className="pt-2 border-t">
<div className="flex items-center justify-between mb-2">
<div className="text-sm">Total albergues</div>
<div className="font-semibold">{localShelters.length}</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="text-sm">Total empleados</div>
<div className="font-semibold">{employees.length}</div>
</div>
<div className="flex items-center justify-between">
<div className="text-sm">Total capacidad</div>
<div className="font-semibold">{localShelters.reduce((a, b) => a + (b.capacity || 0), 0)}</div>
</div>
</div>
*/}

<div className="pt-4 border-t">
  <div className="font-semibold mb-2">Street View</div>
  
  <MapView size="small" />
</div>

</div>
</section>
);
}