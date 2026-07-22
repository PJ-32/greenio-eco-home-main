import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft, Trash2, CheckCircle2, AlertCircle, HelpCircle, ChevronLeft, ChevronRight
} from "lucide-react";

export const Route = createFileRoute("/guia-segregacion")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      bin: (search.bin as string) || "papel",
    };
  },
  head: () => ({
    meta: [{ title: "Guía de Segregación — Greenio" }],
  }),
  component: GuiaSegregacion,
});

const categories = [
  {
    id: "papel",
    label: "Papel y Cartón",
    binColor: "AZUL",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-300",
    badgeBg: "bg-blue-600 text-white border-blue-700",
    iconBg: "bg-blue-100 border-blue-300",
    iconColor: "text-blue-600",
    yes: ["Hojas de papel y cuadernos", "Periódicos y revistas", "Cajas de cartón corrugado", "Sobres de papel limpios"],
    no: ["Papel higiénico o servilletas usadas", "Cartón sucio con grasa o comida", "Papel plastificado o térmico (boletas)"],
    tip: "Mantenlo seco y sin grasa. El papel o cartón húmedo ya no se puede reciclar. Si tu caja de pizza tiene grasa, recorta la parte limpia para este tacho y bota la parte manchada al tacho negro. Desarma siempre las cajas para optimizar tu espacio.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5IEKBgavoke3H3PscaXS1vmgBRHNgqsmwudJ6tBHdQl5fZgLk-Qf9SPv&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXKJCpn0hmja-FO3vELflKlGOIzwFMIsfzV6ZlbjZoECIJ1-5q-rbJFg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AteiKEpn_bEgOMYR8QepMwlb69e0aLE6rvx58z-0UQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4TVlfJWk_95MD7ERqzjJtJ7xlFEb_KGf_YVyjvHMNg&s=10",
    ],
  },
  {
    id: "plastico",
    label: "Plásticos y Metales",
    binColor: "AMARILLO",
    color: "text-yellow-700",
    bg: "bg-yellow-50/70",
    border: "border-yellow-300",
    badgeBg: "bg-yellow-500 text-white border-yellow-600",
    iconBg: "bg-yellow-100 border-yellow-300",
    iconColor: "text-yellow-600",
    yes: ["Botellas de agua y bebidas (PET)", "Envases de detergente y champú (HDPE)", "Latas de aluminio y conserva", "Tapas de plástico"],
    no: ["Bolsas plásticas delgadas de un solo uso", "Tecnopor (poliestireno expandido)", "Envases de pintura o químicos", "Pajitas/sorbetes"],
    tip: "Ahorra espacio y agua. Usa el agua sobrante de lavar los platos para enjuagar tus envases. Para reducir su tamaño a la mitad, aplasta las botellas de plástico desde la base hacia arriba y vuelve a ponerles la tapa; esto expulsa el aire y evita que recuperen su forma.",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIdDqtyL2tGi_2LwQAGW1TWfyJQK3RPparbrqxOiFUdu2l7TRLJe5JtZFo8tZxy6aUjHrUcD1K4baVXAHj-YyHnxXaUOUMw4pTUqSuSe-KTwM4soJ4ad3BB-o6ZC9HKp1Il4kVmi7OAEh/s700/botellas-de-pet-definiciones-proceso-de-fabricacion-botellas-pet-de-varios-tama%25C3%25B1os.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_pWC8VRWVFU6yZfX2TNbTv33gZ6JAwCK6I_3Pu-5gsWXGxVIZfPsAdpQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycBx5p1nFxL4P_A63PRymS0jTmJlGJ9cM2GR_6pQyxP_08vDnmxIY9fw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK-K21wVWbQg5lmLHnBSfzUOxvyF2phlgRzyOU-82UMFBsp5tDIoN_UY&s=10",
    ],
  },
  {
    id: "vidrio",
    label: "Vidrio",
    binColor: "VERDE",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    badgeBg: "bg-emerald-600 text-white border-emerald-700",
    iconBg: "bg-emerald-100 border-emerald-300",
    iconColor: "text-emerald-600",
    yes: ["Botellas de vidrio (bebidas)", "Frascos de conservas, mermeladas y perfumes"],
    no: ["Focos y tubos de luz (van a Peligrosos)", "Espejos y vidrios planos de ventanas", "Cerámica, loza y vajilla rota"],
    tip: "Prioriza la seguridad. Nunca intentes romper o compactar el vidrio. Si un envase se rompe por accidente, envuelve los pedazos en varias capas de periódico o mételos en una caja de cartón sellada antes de botarlos; así evitarás que el personal de limpieza sufra cortes.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8als5hZ98TbcPnOvB8wxIzGtEErXSB76TidiJsL2DZOy9-mPn4rGtwgY&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlLFpUtTmamoXZWJ3PBeI9wAj4LU75VTYK3o2DFMWpw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2TOpw-L_-D01VSvng5wAoyy_1mXiz23MSKcsNhgQwSH-g5LsIU0dQBiT&s=10",
    ],
  },
  {
    id: "peligrosos",
    label: "Peligrosos",
    binColor: "ROJO",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-300",
    badgeBg: "bg-red-600 text-white border-red-700",
    iconBg: "bg-red-100 border-red-300",
    iconColor: "text-red-600",
    yes: ["Pilas y baterías gastadas", "Focos, fluorescentes y luces LED", "Medicamentos vencidos", "Termómetros de mercurio"],
    no: ["Cualquier residuo común que pueda reciclarse", "Envases vacíos de desinfectante común (HDPE)"],
    tip: "Aísla la energía. Antes de guardar tus pilas gastadas en una botella plástica, pégales un pedacito de cinta adhesiva en ambos polos (los extremos). Esto evita fricciones, cortocircuitos y posibles reacciones químicas mientras las acumulas.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw5rngdv3r1Gmbuic_ZkV4LunkMuFypNtnbOd7yJV8W8NxpVPBQEKVvS7&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJHxhzevuzj42E1gemlUxnvT1WHht9HjiLHonMtWfE8lK2uNyai2gYmFv&s=10",
      "https://www.lavanguardia.com/files/og_thumbnail/uploads/2016/01/26/5fa2b21ae4a62.jpeg",
      "https://portal.andina.pe/EDPfotografia3/Thumbnail/2025/09/16/001206331W.webp",
    ],
  },
  {
    id: "organicos",
    label: "Orgánicos",
    binColor: "MARRÓN",
    color: "text-amber-800",
    bg: "bg-amber-50/70",
    border: "border-amber-300",
    badgeBg: "bg-amber-700 text-white border-amber-800",
    iconBg: "bg-amber-100 border-amber-300",
    iconColor: "text-amber-700",
    yes: ["Restos de frutas y verduras", "Cáscaras de huevo", "Filtros de café y bolsas de té usadas", "Hojas secas y restos de poda"],
    no: ["Huesos, carne y restos de pescado", "Excrementos de mascotas", "Aceites de cocina usados (deben embotellarse)"],
    tip: "Cero malos olores. Si separas tus orgánicos pero temes que atraigan moscas, guárdalos en un táper hermético dentro de tu refrigeradora. Se mantendrán congelados y sin olores hasta que los lleves a tu compostera o los entregues en la recolección municipal.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QsEDLqACowcevQGd03HglzIWqMf-0fLcldvJpdRjMo0YJY04E0hvWG8&s=10",
      "https://mejorconsalud.as.com/wp-content/uploads/2018/07/cascara-huevo.jpg",
      "https://m.media-amazon.com/images/I/71b5xM1E9DL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsX7MD5ijhC5GS8VU-TihQCG93Oo4tfkw-jSXSrUIvVN8EDbc6cJ4i7KFU&s=10",
    ],
  },
  {
    id: "no_aprovechables",
    label: "No Aprovechables",
    binColor: "NEGRO",
    color: "text-gray-700",
    bg: "bg-gray-50",
    border: "border-gray-300",
    badgeBg: "bg-gray-700 text-white border-gray-800",
    iconBg: "bg-gray-200 border-gray-300",
    iconColor: "text-gray-600",
    yes: ["Papel higiénico, pañales y servilletas usadas", "Colillas de cigarro", "Mascarillas y guantes usados", "Envolturas de golosinas sucias"],
    no: ["Cualquier residuo que encaje en las categorías anteriores", "Botellas de vidrio o PET limpias"],
    tip: "Neutraliza los olores. Espolvorea un poco de bicarbonato de sodio en el fondo del tacho o de la bolsa para absorber los malos olores. Amarra la bolsa con doble nudo y respeta el horario del camión para evitar que los animales la rompan en la calle.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSr530a1sidgbposKAFXqFSg8kMg5sI_inIaUPnKRyDyZO9ILozVKAINM&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fAE9ZBJgRXDhDOCgdfqdsQgocddmkA5UdRDdiG9KU9-rJskoVPjfhkw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35E1lGgt9yMbey-mrA8K-yvbWnvfIHBrkJEFBmv2-R0KWE7DtRaLiSvo&s=10",
      "https://thumbs.dreamstime.com/b/envoltorios-de-caramelos-vac%C3%ADas-en-la-mesa-comer-muchos-dulces-mosc%C3%BA-rusia-febrero-los-chocolates-glotoner%C3%ADa-el-riesgo-diabetes-174074882.jpg",
    ],
  },
];

function GuiaSegregacion() {
  const { bin } = Route.useSearch();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  // Inicializar el carrusel en el tacho enviado por parámetro de búsqueda
  useEffect(() => {
    if (bin) {
      const idx = categories.findIndex((c) => c.id === bin);
      if (idx !== -1) {
        setActiveIndex(idx);
      }
    }
  }, [bin]);

  // Auto-scroll al elemento activo cada vez que cambia activeIndex
  useEffect(() => {
    if (activeButtonRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const activeCategory = categories[activeIndex];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < categories.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-28 px-4 pt-6 flex flex-col justify-between">
        
        {/* Header */}
        <header className="flex items-center gap-3 mb-4 shrink-0">
          <Link to="/aprende" search={{ tab: "main" }}
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition cursor-pointer hover:scale-105 active:scale-95">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Guía de Segregación</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Guía de segregación</p>
          </div>
        </header>

        {/* Carrusel/Miniaturas de selección superior */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto pb-3 shrink-0 -mx-4 px-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((c, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={c.id}
                ref={isActive ? activeButtonRef : null}
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-gn-card shadow-sm border-[var(--gn-border-str)] ring-2 ring-[var(--gn-primary-lt)] scale-105"
                    : "bg-[var(--gn-surface)]/60 text-[var(--gn-hint)] border-transparent hover:bg-[var(--gn-surface)] hover:scale-105"
                }`}
              >
                <Trash2 size={12} className={isActive ? c.iconColor : "text-slate-400"} />
                <span className={isActive ? "text-[var(--gn-base)]" : "text-slate-500"}>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Carta Principal de Información (Con efecto de carrusel/animación) */}
        <div className="flex-1 flex flex-col justify-center my-1">
          <div className={`bg-gn-card border ${activeCategory.border} rounded-3xl p-5 shadow-lg flex flex-col gap-4 transition-all duration-350 transform scale-100`}>
            
            {/* Visualización del Tacho */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
              <div className={`h-16 w-16 rounded-2xl ${activeCategory.iconBg} border ${activeCategory.border} flex items-center justify-center shrink-0 shadow-inner`}>
                <Trash2 size={36} className={activeCategory.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[9px] font-black uppercase tracking-wider ${activeCategory.badgeBg} px-2.5 py-0.5 rounded-full border shadow-sm mb-1`}>
                  TACHO {activeCategory.binColor} · {activeIndex + 1} de {categories.length}
                </span>
                <h2 className="text-base font-extrabold text-[var(--gn-base)] leading-none">{activeCategory.label}</h2>
              </div>
            </div>

            {/* Listas de Sí / No */}
            <div className="flex flex-col gap-3.5">
              
              {/* Sí Depositar */}
              <div>
                <h3 className="text-[11px] font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>Sí depositar aquí:</span>
                </h3>
                <ul className="grid grid-cols-1 gap-1.5 pl-1.5">
                  {activeCategory.yes.map((y, idx) => (
                    <li key={idx} className="text-[12px] text-[var(--gn-base)] font-bold flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{y}</span>
                    </li>
                  ))}
                </ul>

                {/* Galería referencial de imágenes */}
                <div className="flex gap-3 mt-3 mb-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
                  {activeCategory.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Ejemplo ${activeCategory.label} ${i + 1}`}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200/60 shadow-sm shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* No Depositar */}
              <div>
                <h3 className="text-[11px] font-black text-red-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <AlertCircle size={14} className="text-red-500" />
                  <span>No depositar aquí:</span>
                </h3>
                <ul className="grid grid-cols-1 gap-1.5 pl-1.5">
                  {activeCategory.no.map((n, idx) => (
                    <li key={idx} className="text-[12px] text-[var(--gn-sub)] font-bold flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Consejo Práctico */}
            <div className="bg-[var(--gn-surface)] border border-[var(--gn-border)] rounded-2xl p-3.5 shadow-sm mt-1">
              <div className="flex gap-2">
                <HelpCircle size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-[11px] font-bold text-emerald-900 leading-relaxed">
                  <span className="uppercase text-[9px] font-black text-emerald-800 block mb-0.5">Consejo práctico:</span>
                  {activeCategory.tip}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Puntos / Dot indicators */}
        <div className="flex justify-center gap-2 mt-4 shrink-0">
          {categories.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? `w-5 ${activeCategory.iconColor.replace("text-", "bg-")}`
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Controles del Carrusel (Anterior / Siguiente) */}
        <div className="flex justify-between items-center gap-4 mt-4 shrink-0">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-1 shadow-sm border transition-all cursor-pointer ${
              activeIndex === 0
                ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-slate-50 text-[var(--gn-sub)] border-[var(--gn-border)] active:scale-95"
            }`}
          >
            <ChevronLeft size={16} />
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === categories.length - 1}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-1 shadow-sm border transition-all cursor-pointer ${
              activeIndex === categories.length - 1
                ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                : "bg-[var(--gn-primary)] hover:bg-[var(--gn-primary-dk)] text-white border-[var(--gn-primary-dk)] active:scale-95"
            }`}
          >
            Siguiente
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
