import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Information() {
  const navigate = useNavigate();
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
      colorName: "Ambar",
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

  const handleGoToMap = () => {

    // 👇 Navegamos a /mapa y mandamos la ubicación del usuario
    navigate("/Map", {
      state: { click: true },
    });
  };
  return (
    <div className="min-h-screen bg-pink-950 text-white font-sans text-lg md:text-xl">
      {/* ENCABEZADO */}
      <header className="bg-pink-800 shadow-xl border-b border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4 py-8">


          <div className="gap-2 w-full flex lg:flex-row flex-col justify-between items-center">
            <h1 className="text-4xl font-extrabold">Huracanes en Quintana Roo</h1>


            <button
              onClick={handleGoToMap}
              className="mt-3.5 bg-white text-pink-800 px-6 py-3 rounded-xl font-bold text-lg md:text-xl shadow-md hover:bg-pink-100 hover:scale-105 transition-all"
            >
              Buscar albergue cercano
            </button>
          </div>


          <p className="text-white/90 mt-2 max-w-2xl text-lg md:text-xl">
            Información preventiva, recomendaciones de Protección Civil y medidas
            básicas para protegerte a ti y a tu familia en caso de ciclones y huracanes.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 md:text-2xl">
            <Badge text="Temporada: junio - noviembre" />
            <Badge text="Protección Civil Quintana Roo" />
            <Badge text="Caribe Mexicano" />
          </div>
        </div>
      </header>

      {/* MAIN*/}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10 bg-white text-pink-950 rounded-t-3xl shadow-2xl md:text-xl mt-4">

        {/* SISTEMA DE ALERTA TEMPRANA */}
        <section className="p-2">
          <h2 className="text-2xl font-bold mb-2 ">
            Sistema de Alerta Temprana (SIAT-CT)
          </h2>
          <p className="text-lg md:text-base mb-4">
            Protección Civil utiliza colores para indicar el nivel de peligro por
            ciclones tropicales en Quintana Roo.
          </p>

          {/* Contenedor flex para alinear todos los divs horizontalmente */}

          {/* Contenedor grid con 1 fila y 3 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 ">

            {alertLevels.slice(0, 3).map((level) => (
              <>
                <div key={level.colorName} className="text-xs w-full">
                  <AlertLevelCard level={level} />
                </div>

              </>
            ))}


          </div>

          {/* Contenedor grid con 1 fila y 2 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:mx-30 mt-4 ">

            {alertLevels.slice(3, 5).map((level) => (
              <>
                <div key={level.colorName} className="text-xs w-full">
                  <AlertLevelCard level={level} />
                </div>

              </>
            ))}


          </div>
        </section>

        {/* INFOGRAFÍAS OFICIALES */}
        <section className>
          <h2 className="text-2xl font-bold mb-4">Infografías oficiales</h2>
          <InfographicsAccordion items={infographics} />
        </section>


        {/* RECOMENDACIONES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Recomendaciones</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <TipsCard
              title="Antes del huracán"
              tips={tipsBefore}
              color="bg-[#B03A62]" // tono más claro
            />

            <TipsCard
              title="Durante el huracán"
              tips={tipsDuring}
              color="bg-[#8A2A4D]" // tono medio
            />

            <TipsCard
              title="Después del huracán"
              tips={tipsAfter}
              color="bg-[#611232]" // tono más oscuro (color oficial COEPROC)
            />
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

function TipsCard({ title, tips, color }) {
  return (
    <article
      className={`rounded-3xl text-white p-4 shadow-md border border-pink-900 ${color}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 list-disc list-inside text-sm md:text-base space-y-1">
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
      className={`rounded-3xl overflow-hidden shadow-sm border ${level.borderClass} ${level.panelClass} flex flex-col h-[350px]`}
    >
      <div
        className={`px-4 py-3 flex flex-col h-18 md:h-20 items-center text-white text-base font-semibold ${level.barClass}`}
      >
        <span className="text-xl font-bold md:text-xl">{level.colorName}</span>
        <span className="text-lg opacity-90 md:text-lg">{level.danger}</span>
      </div>


      <div className={`px-4 py-3 text-pink-950 ${level.panelClass} `}>
        <p className="font-semibold text-lg mb-2 md:text-lg">{level.danger}</p>
        <p className="text-base leading-snug md:h-14 h-18 md:text-base">{level.desc}</p>
      </div>

      <div className={`${level.panelClass} h-32 md:h-30 px-4 pb-4`}>
        <div className="w-full rounded-2xl h-30 md:h-35 overflow-hidden flex items-center justify-center">
          <img
            src={level.img}
            alt={`Imagen alerta ${level.colorName}`}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
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
            className="w-full flex items-center justify-between px-4 py-3 text-left text-sm md:text-lg text-pink-950"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs md:text-base text-pink-700">{item.desc}</p>
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
