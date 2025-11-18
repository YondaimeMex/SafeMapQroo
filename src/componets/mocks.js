export const mockShelters = [
  { id: "S01", name: "Albergue Las Palapas", address: "Av. Tulum 123, SM 22, Cancún", capacity: 80, occupied: 45, phone: "+52 998 123 4567", notes: "Cercano al parque Las Palapas.", lat: 21.17018, lng: -86.82748 },

  { id: "S02", name: "Refugio Kabah", address: "Av. Nichupté 22, SM 51, Cancún", capacity: 60, occupied: 52, phone: "+52 998 234 5678", notes: "Frente al Parque Kabah.", lat: 21.14252, lng: -86.82286 },

  { id: "S03", name: "Casa Azul Cancún", address: "Calle Chichén Itzá 45, SM 26, Cancún", capacity: 40, occupied: 20, phone: "+52 998 345 6789", notes: "Acepta mascotas pequeñas.", lat: 21.15972, lng: -86.83315 },

  { id: "S04", name: "Hogar La Esperanza", address: "Av. López Portillo 301, SM 64, Cancún", capacity: 120, occupied: 110, phone: "+52 998 456 7890", notes: "Área amplia para familias.", lat: 21.16971, lng: -86.84587 },

  { id: "S05", name: "Refugio Bonampak", address: "Av. Bonampak 210, SM 4, Cancún", capacity: 55, occupied: 33, phone: "+52 998 567 8901", notes: "Incluye zona de descanso.", lat: 21.16921, lng: -86.81210 },

  { id: "S06", name: "Centro Comunitario Nader", address: "Calle Nader 17, SM 2A, Cancún", capacity: 70, occupied: 42, phone: "+52 998 678 9012", notes: "Ubicación céntrica.", lat: 21.16316, lng: -86.82252 },

  { id: "S07", name: "Albergue Jardines del Sur", address: "Av. 135, SM 524, Cancún", capacity: 90, occupied: 55, phone: "+52 998 789 0123", notes: "Ideal para familias.", lat: 21.08808, lng: -86.84522 },

  { id: "S08", name: "Refugio Kukulkán", address: "Av. Kukulkán Km 3.5, Zona Hotelera", capacity: 45, occupied: 28, phone: "+52 998 890 1234", notes: "Cerca de playa Tortugas.", lat: 21.15250, lng: -86.80710 },

  { id: "S09", name: "Centro Integral Cancún", address: "Calle 20, SM 68, Cancún", capacity: 100, occupied: 60, phone: "+52 998 901 2345", notes: "Espacio multipropósito.", lat: 21.17281, lng: -86.85302 },

  { id: "S10", name: "Casa Comunitaria Región 100", address: "Av. Chac Mool 500, SM 100, Cancún", capacity: 75, occupied: 48, phone: "+52 998 012 3456", notes: "Incluye área médica básica.", lat: 21.15799, lng: -86.88790 },
];

export const mockEmployees = [
  { id: "E01", name: "María López", role: "Coordinadora", shelterId: "S01", phone: "+52 998 111 2233" },
  { id: "E02", name: "Juan Hernández", role: "Auxiliar", shelterId: "S01", phone: "+52 998 222 3344" },

  { id: "E03", name: "Ana García", role: "Enfermería", shelterId: "S02", phone: "+52 998 333 4455" },
  { id: "E04", name: "Carlos Martínez", role: "Logística", shelterId: "S02", phone: "+52 998 444 5566" },

  { id: "E05", name: "Daniel González", role: "Supervisor", shelterId: "S03", phone: "+52 998 555 6677" },
  { id: "E06", name: "Laura Pérez", role: "Cocina", shelterId: "S03", phone: "+52 998 666 7788" },

  { id: "E07", name: "Sofía Sánchez", role: "Trabajo Social", shelterId: "S04", phone: "+52 998 777 8899" },
  { id: "E08", name: "Miguel Ramírez", role: "Mantenimiento", shelterId: "S05", phone: "+52 998 888 9900" },

  { id: "E09", name: "Patricia Flores", role: "Administración", shelterId: "S06", phone: "+52 998 999 0011" },
  { id: "E10", name: "Roberto Cruz", role: "Seguridad", shelterId: "S07", phone: "+52 998 101 2020" },
];
