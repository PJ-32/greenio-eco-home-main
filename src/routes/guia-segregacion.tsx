import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft, Trash2, CheckCircle2, AlertCircle, Info, HelpCircle
} from "lucide-react";

export const Route = createFileRoute("/guia-segregacion")({
  head: () => ({
    meta: [{ title: "Guía de Segregación — Greenio" }],
  }),
  component: GuiaSegregacion,
});

const categories = [
  {
    id: "papel",
    label: "Papel y Cartón",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badgeBg: "bg-blue-100",
    iconColor: "text-blue-500",
    yes: ["Hojas de papel y cuadernos", "Periódicos y revistas", "Cajas de cartón corrugado", "Sobres de papel limpios"],
    no: ["Papel higiénico o servilletas usadas", "Cartón sucio con grasa o comida", "Papel plastificado o térmico (boletas)"],
    tip: "Desarma las cajas de cartón para que ocupen menos espacio y asegúrate de retirar cintas adhesivas y grapas metálicas."
  },
  {
    id: "plastico",
    label: "Plásticos y Metales",
    color: "text-yellow-600",
    bg: "bg-yellow-50/70",
    border: "border-yellow-200",
    badgeBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    yes: ["Botellas de agua y bebidas (PET)", "Envases de detergente y champú (HDPE)", "Latas de aluminio y conserva", "Tapas de plástico"],
    no: ["Bolsas plásticas delgadas de un solo uso", "Tecnopor (poliestireno expandido)", "Envases de pintura o químicos", "Pajitas/sorbetes"],
    tip: "Enjuaga brevemente las botellas y latas para retirar residuos de alimentos. Aplástalas para reducir el volumen de almacenamiento."
  },
  {
    id: "vidrio",
    label: "Vidrio",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badgeBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    yes: ["Botellas de vidrio (bebidas)", "Frascos de conservas, mermeladas y perfumes"],
    no: ["Focos y tubos de luz (van a Peligrosos)", "Espejos y vidrios planos de ventanas", "Cerámica, loza y vajilla rota"],
    tip: "Retira las tapas metálicas o plásticas antes de depositar el vidrio. No es necesario retirar las etiquetas de papel."
  },
  {
    id: "peligrosos",
    label: "Peligrosos",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    badgeBg: "bg-red-100",
    iconColor: "text-red-500",
    yes: ["Pilas y baterías gastadas", "Focos, fluorescentes y luces LED", "Medicamentos vencidos", "Termómetros de mercurio"],
    no: ["Cualquier residuo común que pueda reciclarse", "Envases vacíos de desinfectante común (HDPE)"],
    tip: "Almacena las pilas en botellas plásticas cerradas y entrégalas en puntos de acopio autorizados o en campañas municipales."
  },
  {
    id: "organicos",
    label: "Orgánicos",
    color: "text-amber-800",
    bg: "bg-amber-50/70",
    border: "border-amber-200",
    badgeBg: "bg-amber-100",
    iconColor: "text-amber-700",
    yes: ["Restos de frutas y verduras", "Cáscaras de huevo", "Filtros de café y bolsas de té usadas", "Hojas secas y restos de poda"],
    no: ["Huesos, carne y restos de pescado", "Excrementos de mascotas", "Aceites de cocina usados (deben embotellarse)"],
    tip: "Puedes usar estos residuos para hacer compost casero y enriquecer tus plantas, ayudando a reducir a la mitad la basura de tu hogar."
  },
  {
    id: "no_aprovechables",
    label: "No Aprovechables",
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-200",
    badgeBg: "bg-gray-100",
    iconColor: "text-gray-500",
    yes: ["Papel higiénico, pañales y servilletas usadas", "Colillas de cigarro", "Mascarillas y guantes usados", "Envolturas de golosinas sucias"],
    no: ["Cualquier residuo que encaje en las categorías anteriores", "Botellas de vidrio o PET limpias"],
    tip: "Esta es la basura que va al relleno sanitario. Asegúrate de cerrarla en bolsas resistentes y sacarla solo en el horario de recojo."
  }
];

function GuiaSegregacion() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        
        {/* Header */}
        <header className="flex items-center gap-3 mb-5">
          <Link to="/aprende"
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Guía de Segregación</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Guía de segregación</p>
          </div>
        </header>

        {/* Intro Card */}
        <div className="bg-gn-card border border-[var(--gn-border)] rounded-2xl p-4 mb-5 shadow-sm">
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--gn-surface)] border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-primary)] shrink-0">
              <Info size={18} />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[var(--gn-base)]">¿Cómo separar en casa?</p>
              <p className="text-[11px] text-[var(--gn-sub)] mt-0.5 leading-relaxed">
                Clasificar tus residuos correctamente evita la contaminación de materiales reciclables y facilita el trabajo de los recicladores formalizados. Selecciona un tacho para ver su guía detallada.
              </p>
            </div>
          </div>
        </div>

        {/* Categorías Desplegables */}
        <div className="flex flex-col gap-3">
          {categories.map((c) => {
            const isOpen = activeTab === c.id;
            return (
              <div 
                key={c.id} 
                className={`bg-gn-card border ${c.border} rounded-2xl transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen ? "ring-2 ring-emerald-500/20" : ""
                }`}
              >
                {/* Título / Botón de toggle */}
                <button
                  onClick={() => setActiveTab(isOpen ? null : c.id)}
                  className="w-full p-4 flex items-center gap-3 text-left focus:outline-none transition-colors hover:bg-[var(--gn-surface)]/20 cursor-pointer"
                >
                  <div className={`h-10 w-10 rounded-xl ${c.bg} border ${c.border} grid place-items-center shrink-0 shadow-inner`}>
                    <Trash2 size={20} className={c.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-[8px] font-black uppercase tracking-wider ${c.badgeBg} ${c.color} px-2 py-0.5 rounded-full border ${c.border} mb-0.5`}>
                      Residuos
                    </span>
                    <h3 className="text-sm font-bold text-[var(--gn-base)] leading-none">{c.label}</h3>
                  </div>
                  <span className="text-[11px] text-[var(--gn-sub)] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xl bg-[var(--gn-surface)] border border-[var(--gn-border-str)]">
                    {isOpen ? "Cerrar" : "Detalles"}
                  </span>
                </button>

                {/* Contenido desplegable */}
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-[var(--gn-border)]/50 pt-4 bg-[var(--gn-surface)]/20 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Lista Sí depositar */}
                    <div>
                      <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>Sí depositar aquí:</span>
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 pl-1">
                        {c.yes.map((y, idx) => (
                          <li key={idx} className="text-xs text-[var(--gn-base)] font-semibold flex items-start gap-2 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                            <span>{y}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lista No depositar */}
                    <div>
                      <h4 className="text-[10px] font-black text-red-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <AlertCircle size={13} className="text-red-500" />
                        <span>No depositar aquí:</span>
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 pl-1">
                        {c.no.map((n, idx) => (
                          <li key={idx} className="text-xs text-[var(--gn-sub)] font-semibold flex items-start gap-2 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tip clave */}
                    <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-3 shadow-inner">
                      <div className="flex gap-2">
                        <HelpCircle size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                        <p className="text-[10px] font-bold text-emerald-900 leading-normal">
                          <span className="uppercase text-[9px] font-black text-emerald-800 block mb-0.5">Consejo práctico:</span>
                          {c.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
