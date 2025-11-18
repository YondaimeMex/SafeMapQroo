
import React, { useState } from "react";

export default function Information() {
  const tipsBefore = [
    "Revisa que tu casa tenga puertas y ventanas en buen estado.",
    "Identifica el refugio temporal más cercano o una zona segura en tu casa.",
    "Guarda documentos importantes en bolsas herméticas.",
    "Ten linternas, radio y pilas de repuesto.",
    "Carga baterías del celular y power banks.",
    "Almacena agua potable y alimentos enlatados para 3 días.",
  ];

  const tipsDuring = [
    "Permanece dentro de un lugar seguro lejos de ventanas.",
    "Desconecta aparatos eléctricos innecesarios.",
    "No salgas durante el ojo del huracán.",
    "Sigue indicaciones oficiales en radio o TV.",
    "Ten tu kit de emergencia listo.",
  ];

  const tipsAfter = [
    "Espera confirmación oficial antes de salir.",
    "Evita cables tirados o charcos.",
    "No consumas agua contaminada.",
    "Reporta daños a las autoridades.",
    "Ayuda a tus vecinos si es posible.",
  ];

  const emergencyKit = [
    "Agua potable",
    "Alimentos no perecederos",
    "Abrelatas manual",
    "Linterna y baterías",
    "Radio de baterías",
    "Botiquín",
    "Medicinas",
    "Copias de documentos",
    "Ropa impermeable",
    "Power banks",
  ];

  const carouselImages = [
    {
      src: "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg",
      alt: "Playa Caribe",
      label: "Zona costera de Quintana Roo",
    },
    {
      src: "https://images.pexels.com/photos/460671/pexels-photo-460671.jpeg",
      alt: "Lluvia fuerte",
      label: "Lluvias intensas en zona urbana",
    },
    {
      src: "https://images.pexels.com/photos/1071875/pexels-photo-1071875.jpeg",
      alt: "Tormenta",
      label: "Cielo de tormenta",
    },
    {
      src: "https://images.pexels.com/photos/1331820/pexels-photo-1331820.jpeg",
      alt: "Ciudad costera",
      label: "Ciudad costera del Caribe",
    },
  ];

  // Niveles de alerta 
  const alertLevels = [
  {
    colorName: "Azul",
    danger: "Peligro mínimo",
    desc: "El ciclón está lejos (más de 72 h). Mantente informado.",
    barClass: "bg-blue-700",
    panelClass: "bg-blue-50",
    borderClass: "border-blue-200",
    img: "/src/assets/cat1.jpeg", // 
  },
  {
    colorName: "Verde",
    danger: "Peligro bajo",
    desc: "Comienza la prevención: limpia azoteas, patios y desagües.",
    barClass: "bg-green-700",
    panelClass: "bg-green-50",
    borderClass: "border-green-200",
    img: "/src/assets/cat2.jpg",
  },
  {
    colorName: "Amarillo",
    danger: "Peligro moderado",
    desc: "Prepara tu refugio, guarda documentos y la mochila de emergencia.",
    barClass: "bg-yellow-500",
    panelClass: "bg-yellow-50",
    borderClass: "border-yellow-200",
    img: "/src/assets/cat3.jpg",
  },
  {
    colorName: "Naranja",
    danger: "Peligro alto",
    desc: "Posible impacto en menos de 36 h. Atiende indicaciones y posibles evacuaciones.",
    barClass: "bg-orange-600",
    panelClass: "bg-orange-50",
    borderClass: "border-orange-200",
    img: "/src/assets/cat4.jpg",
  },
  {
    colorName: "Rojo",
    danger: "Peligro máximo",
    desc: "Impacto inminente. Permanece en refugio seguro y sigue las órdenes oficiales.",
    barClass: "bg-red-700",
    panelClass: "bg-red-50",
    borderClass: "border-red-200",
    img: "/src/assets/cat5.jpg",
  },
];

  const infographics = [
    {
      id: "antes-durante-despues",
      title: "¿Qué hacer antes, durante y después de un huracán?",
      desc: "Infografía oficial con pasos claros para cada fase.",
      src: "/src/assets/huracanes_prevencion.jpg",
    },
    {
      id: "mochila-emergencia",
      title: "Mochila de emergencia",
      desc: "Infografía oficial sobre qué debe llevar tu mochila de emergencia.",
      src: "/src/assets/huracanes_mochila.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-950 text-white font-sans">
      {/* ENCABEZADO */}
      <header className="bg-pink-800 shadow-xl border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold">Huracanes en Quintana Roo</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Información preventiva, recomendaciones de Protección Civil y medidas
            básicas para protegerte a ti y a tu familia en caso de ciclones y huracanes.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Badge text="Temporada: junio - noviembre" />
            <Badge text="Protección Civil Quintana Roo" />
            <Badge text="Caribe Mexicano" />
          </div>
        </div>
      </header>

      {/* MAIN*/}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10 bg-white text-pink-950 rounded-t-3xl shadow-2xl mt-4">
        {/* ¿Qué es un huracán? */}
        <section className="border border-pink-200 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">¿Qué es un huracán?</h2>
          <p className="text-sm md:text-base mb-3">
            Un huracán es un sistema de tormentas con vientos muy fuertes y lluvias
            intensas que se forma sobre el océano. En Quintana Roo pueden presentarse
            cada año durante la temporada de ciclones tropicales.
          </p>
          <p className="text-sm md:text-base">
            Las autoridades utilizan la <strong>escala Saffir-Simpson</strong> para
            clasificar los huracanes de categoría 1 a 5 según la velocidad del viento y
            el daño potencial.
          </p>
        </section>

        {/* SISTEMA DE ALERTA TEMPRANA */}
        <section className="border border-pink-200 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">
            Sistema de Alerta Temprana (SIAT-CT)
          </h2>
          <p className="text-sm md:text-base mb-4">
            Protección Civil utiliza colores para indicar el nivel de peligro por
            ciclones tropicales en Quintana Roo.
          </p>

          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {alertLevels.slice(0, 2).map((level) => (
              <AlertLevelCard key={level.colorName} level={level} />
            ))}
          </div>

          <div className="flex justify-center mb-4">
            <div className="w-full md:w-2/3">
              <AlertLevelCard level={alertLevels[2]} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {alertLevels.slice(3).map((level) => (
              <AlertLevelCard key={level.colorName} level={level} />
            ))}
          </div>
        </section>

        {/* CARRUSEL DE IMÁGENES */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold">Imágenes de Quintana Roo</h2>
         
          <ImageCarousel images={carouselImages} />
        </section>

        {/* RECOMENDACIONES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Recomendaciones</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <TipsCard title="Antes del huracán" tips={tipsBefore} />
            <TipsCard title="Durante el huracán" tips={tipsDuring} />
            <TipsCard title="Después del huracán" tips={tipsAfter} />
          </div>
        </section>

        <section className="border border-pink-200 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Kit básico de emergencia</h2>
          <p className="text-sm md:text-base mb-3">
            Prepara una{" "}
            <a
              href="#mochila-emergencia-card"
              className="text-pink-700 font-semibold underline"
            >
              mochila de emergencia
            </a>{" "}
            con artículos esenciales y colócala en un lugar conocido por todos en casa.
          </p>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            {emergencyKit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* INFORMACIÓN OFICIAL */}
        <section className="bg-pink-50 border border-pink-300 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Información oficial</h2>
          <p className="text-sm md:text-base mb-3">
            En caso de emergencia, sigue únicamente fuentes oficiales:
          </p>
          <ul className="text-sm md:text-base space-y-2">
            <li>
              <strong>Emergencias:</strong> 911
            </li>
            <li>
              <strong>Protección Civil estatal y municipal:</strong> páginas y redes
              oficiales.
            </li>
            <li>
              <strong>CONAGUA / SMN:</strong> monitoreo oficial de ciclones tropicales.
            </li>
          </ul>
        </section>

        {/* INFOGRAFÍAS OFICIALES */}
        <section className="border border-pink-200 rounded-3xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Infografías oficiales</h2>
          <InfographicsAccordion items={infographics} />
        </section>

        {/* AVISO */}
        <section className="bg-pink-50 border border-pink-300 rounded-3xl p-5">
          <p className="text-sm md:text-base">
            <strong>Aviso:</strong> Esta página es informativa. Sigue siempre las
            indicaciones de Protección Civil y autoridades oficiales.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-6 bg-pink-950 border-t border-white/10 py-4 text-center text-white/70 text-xs">
        Información preventiva · Quintana Roo · Protección Civil
      </footer>
    </div>
  );
}

/* COMPONENTES AUXILIARES */

function Badge({ text }) {
  return (
    <span className="px-3 py-1 rounded-full bg-pink-950 text-white text-xs border border-white/30">
      {text}
    </span>
  );
}

function TipsCard({ title, tips }) {
  return (
    <article className="rounded-3xl bg-pink-800 text-white p-4 shadow-md border border-pink-900">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 list-disc list-inside text-xs md:text-sm space-y-1">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </article>
  );
}

/* TARJETA DE NIVEL DE ALERTA*/
function AlertLevelCard({ level }) {
  return (
    <div
      className={`rounded-3xl overflow-hidden shadow-sm border ${level.borderClass} bg-white flex flex-col`}
    >
     
      <div
        className={`px-4 py-3 flex items-center justify-between text-white text-base font-semibold ${level.barClass}`}
      >
        <span>{level.colorName}</span>
        <span>{level.danger}</span>
      </div>

     
      <div className={`px-4 py-3 text-pink-950 ${level.panelClass}`}>
        <p className="font-semibold text-sm mb-2">{level.danger}</p>
        <p className="text-sm leading-snug">{level.desc}</p>
      </div>

      <div className={`${level.panelClass} h-28 md:h-32 px-4 pb-4`}>
        <div className="w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
          <img
            src={level.img}
            alt={`Imagen alerta ${level.colorName}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}


/* CARRUSEL DE IMÁGENES */
function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const currentImage = images[current];

  return (
    <div className="w-full border border-pink-200 rounded-3xl overflow-hidden shadow-md bg-pink-50">
      <div className="relative">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-56 md:h-72 object-cover"
        />

        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-800/80 text-white rounded-full px-3 py-1"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-800/80 text-white rounded-full px-3 py-1"
        >
          ▶
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-pink-950/80 text-white text-xs px-3 py-2">
          {currentImage.label}
        </div>
      </div>

      <div className="flex justify-center gap-2 py-2 bg-white">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? "bg-pink-800" : "bg-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ACORDEÓN DE INFOGRAFÍAS DINÁMICAS */
function InfographicsAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          id={item.id === "mochila-emergencia" ? "mochila-emergencia-card" : undefined}
          className="border border-pink-200 rounded-2xl overflow-hidden bg-white"
        >
          <button
            type="button"
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm md:text-base text-pink-950"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-pink-700">{item.desc}</p>
            </div>
            <span className="text-pink-700 text-lg">
              {openId === item.id ? "−" : "+"}
            </span>
          </button>
          {openId === item.id && (
            <div className="border-t border-pink-100 bg-pink-50">
              <img
                src={item.src}
                alt={item.title}
                className="w-full max-h-[520px] object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
