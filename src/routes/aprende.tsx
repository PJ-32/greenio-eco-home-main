import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Search, SlidersHorizontal, Trash2, Camera,
  Droplets, Sprout, ArrowLeft, Clock, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/aprende")({
  head: () => ({
    meta: [
      { title: "Aprende — Greenio" },
      { name: "description", content: "Guías prácticas y noticias ambientales de Greenio." },
    ],
  }),
  component: Aprende,
});

/* ── Datos ── */
const bins = [
  { color: "text-[#3b82f6]", bg: "bg-[#eff6ff]", border: "border-[#bfdbfe]", label: "Papel y Cartón" },
  { color: "text-[#eab308]", bg: "bg-[#fefce8]", border: "border-[#fef08a]", label: "Plásticos y Metales" },
  { color: "text-[var(--gn-primary)]", bg: "bg-[var(--gn-surface)]", border: "border-[var(--gn-border-str)]", label: "Vidrio" },
  { color: "text-[var(--gn-red)]", bg: "bg-[var(--gn-red-lt)]", border: "border-[#fecaca]", label: "Peligrosos" },
  { color: "text-[#92400e]", bg: "bg-[var(--gn-amber-lt)]", border: "border-[#fde68a]", label: "Orgánicos" },
  { color: "text-[var(--gn-sub)]", bg: "bg-[#f3f4f6]", border: "border-[#e5e7eb]", label: "No Aprovechables" },
];

const guias = [
  { icon: <Droplets size={14} />, tag: "Agua", tagColor: "text-[#0369a1]", tagBg: "bg-[#e0f2fe]", tagBorder: "border-[#7dd3fc]", title: "5 formas fáciles de ahorrar agua en casa", mins: "4" },
  { icon: <Sprout size={14} />, tag: "Hogar", tagColor: "text-[#166534]", tagBg: "bg-[#dcfce7]", tagBorder: "border-[#86efac]", title: "Cómo iniciar tu huerto urbano en Lima", mins: "6" },
  { icon: <Leaf size={14} />, tag: "Hábitos", tagColor: "text-[#065f46]", tagBg: "bg-[var(--gn-surface)]", tagBorder: "border-[var(--gn-border-str)]", title: "Reduce tu huella de carbono diaria", mins: "5" },
  { icon: <Camera size={14} />, tag: "Reciclaje", tagColor: "text-[#166534]", tagBg: "bg-[#dcfce7]", tagBorder: "border-[#86efac]", title: "Cómo reciclar correctamente en Lima", mins: "3" },
  { icon: <Droplets size={14} />, tag: "Energía", tagColor: "text-[#0369a1]", tagBg: "bg-[#e0f2fe]", tagBorder: "border-[#7dd3fc]", title: "Ahorra luz con estos 7 consejos", mins: "4" },
];

const noticias = [
  { tag: "Noticia", time: "2 min", title: "Lima reduce un 12% sus residuos sólidos este año" },
  { tag: "Política", time: "3 min", title: "Nueva ley de envases retornables entra en vigencia" },
  { tag: "Ciencia", time: "4 min", title: "Estudio revela impacto del reciclaje en Lima Metropolitana" },
  { tag: "Evento", time: "2 min", title: "Gran campaña de limpieza en el Rímac este sábado" },
  { tag: "Datos", time: "3 min", title: "Perú produce 23,000 toneladas de residuos al día" },
];

/* ── Vista listado guías ── */
function ListadoGuias() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        <header className="flex items-center gap-3 mb-5">
          <button onClick={() => navigate({ to: "/aprende" })}
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Guías Prácticas</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Guías prácticas</p>
          </div>
        </header>

        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl px-4 py-3 flex items-center gap-2 mb-5 shadow-sm">
          <Search size={16} className="text-[var(--gn-primary-dk)]" />
          <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
            placeholder="Buscar guías…" />
        </div>

        <div className="flex flex-col gap-3">
          {guias.map((g, i) => (
            <Link to="/guia-practica" key={i}
              className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
              <div className={`w-10 h-10 rounded-xl ${g.tagBg} border ${g.tagBorder} flex items-center justify-center shrink-0`}>
                <span className={g.tagColor}>{g.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-flex items-center text-[9px] font-bold uppercase tracking-wider ${g.tagBg} ${g.tagColor} border ${g.tagBorder} rounded-full px-2 py-0.5 mb-1`}>{g.tag}</span>
                <p className="text-[13px] font-bold text-[var(--gn-base)] leading-snug">{g.title}</p>
                <p className="text-[10px] text-[var(--gn-hint)] mt-1 flex items-center gap-1"><Clock size={10} /> {g.mins} min</p>
              </div>
              <ChevronRight size={16} className="text-[var(--gn-border-str)] shrink-0" />
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

/* ── Vista listado noticias ── */
function ListadoNoticias() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        <header className="flex items-center gap-3 mb-5">
          <button onClick={() => navigate({ to: "/aprende" })}
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Noticias Ambientales</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Noticias ambientales</p>
          </div>
        </header>

        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl px-4 py-3 flex items-center gap-2 mb-5 shadow-sm">
          <Search size={16} className="text-[var(--gn-primary-dk)]" />
          <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
            placeholder="Buscar noticias…" />
        </div>

        <div className="flex flex-col gap-3">
          {noticias.map((n, i) => (
            <Link to="/noticia" key={i}
              className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--gn-surface)] text-[var(--gn-primary-dk)] border border-[var(--gn-border-str)] rounded-full px-2 py-0.5">{n.tag}</span>
                  <span className="text-[10px] text-[var(--gn-hint)] flex items-center gap-1"><Clock size={10} /> {n.time}</span>
                </div>
                <p className="text-[13px] font-bold text-[var(--gn-base)] leading-snug">{n.title}</p>
              </div>
              <ChevronRight size={16} className="text-[var(--gn-border-str)] shrink-0" />
            </Link>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

/* ── Vista principal Aprende ── */
function Aprende() {
  const [vista, setVista] = useState<"main" | "guias" | "noticias">("main");

  if (vista === "guias")    return <ListadoGuias />;
  if (vista === "noticias") return <ListadoNoticias />;

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">

        <header>
          <h1 className="text-2xl font-bold text-[var(--gn-base)] flex items-center gap-2">
            Aprende <Leaf size={20} className="text-[var(--gn-primary-dk)]" />
          </h1>
          <p className="text-xs text-[var(--gn-primary-dk)] mt-1 font-medium">Aprende, actúa y transforma tu entorno</p>
        </header>

        {/* Buscador */}
        <div className="mt-5 flex gap-2">
          <div className="bg-gn-card border border-[var(--gn-border)] rounded-xl px-4 py-3 flex items-center gap-2 w-full shadow-sm">
            <Search size={16} className="text-[var(--gn-primary-dk)]" />
            <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
              placeholder="¿Qué quieres aprender hoy?" />
          </div>
          <button className="bg-gn-card border border-[var(--gn-border)] rounded-xl px-3 flex items-center justify-center shadow-sm">
            <SlidersHorizontal size={16} className="text-[var(--gn-primary-dk)]" />
          </button>
        </div>

        {/* Segregación */}
        <section className="mt-6">
          <h2 className="font-bold text-[var(--gn-base)] text-sm">Guía de Segregación</h2>
          <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">¿Dónde va cada residuo?</p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {bins.map((b) => (
              <Link to="/guia-segregacion" key={b.label}
                className={`bg-gn-card border ${b.border} rounded-xl p-3 flex items-center gap-3 hover:shadow-md transition-all text-left shadow-sm`}>
                <div className={`h-9 w-9 rounded-lg ${b.bg} border ${b.border} grid place-items-center shrink-0`}>
                  <Trash2 size={18} className={b.color} />
                </div>
                <span className="text-[11px] font-semibold text-[var(--gn-base)] leading-tight">{b.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Banner CTA */}
        <section className="mt-5 bg-gn-card border border-[var(--gn-border)] rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
          <p className="text-xs text-[var(--gn-sub)] leading-snug">
            Separar bien los residuos es el primer paso para cuidar nuestro planeta.
          </p>
          <Link to="/registra"
            className="mt-3 text-white font-bold py-2.5 px-6 rounded-full w-full flex justify-center items-center gap-2 transition active:scale-95 shadow-md"
            style={{ background: "var(--gn-primary)" }}>
            <Camera size={16} /> Ir a Registrar Acción
          </Link>
        </section>

        {/* Guías Prácticas */}
        <section className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-[var(--gn-base)] text-sm">Guías Prácticas</h2>
              <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">Hábitos sostenibles para tu día a día</p>
            </div>
            <button onClick={() => setVista("guias")}
              className="text-[11px] text-[var(--gn-primary-dk)] font-bold underline underline-offset-2">
              Ver todas
            </button>
          </div>
          {/* Scroll horizontal */}
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
            {guias.map((g, i) => (
              <Link to="/guia-practica" key={i} className="snap-start shrink-0">
                <article className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 w-52 shadow-sm hover:shadow-md transition-all">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${g.tagBg} ${g.tagColor} border ${g.tagBorder} rounded-full px-2.5 py-0.5`}>
                    {g.icon} {g.tag}
                  </span>
                  <p className="text-sm font-bold text-[var(--gn-base)] leading-snug mt-3">{g.title}</p>
                  <p className="text-[10px] text-[var(--gn-hint)] mt-3 font-medium flex items-center gap-1">
                    <Clock size={10} /> {g.mins} min de lectura
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Noticias Ambientales */}
        <section className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-[var(--gn-base)] text-sm">Noticias Ambientales</h2>
              <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">Lo más reciente de Lima y Perú</p>
            </div>
            <button onClick={() => setVista("noticias")}
              className="text-[11px] text-[var(--gn-primary-dk)] font-bold underline underline-offset-2">
              Ver todas
            </button>
          </div>
          {/* Scroll horizontal */}
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
            {noticias.map((n, i) => (
              <Link to="/noticia" key={i} className="snap-start shrink-0">
                <article className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 w-52 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--gn-surface)] text-[var(--gn-primary-dk)] border border-[var(--gn-border-str)] rounded-full px-2 py-0.5">{n.tag}</span>
                    <span className="text-[10px] text-[var(--gn-hint)] font-medium">{n.time}</span>
                  </div>
                  <p className="text-xs font-bold text-[var(--gn-base)] leading-snug">{n.title}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
