import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, Clock, Share2, BookmarkPlus,
  ChevronRight, TrendingDown, Recycle, Leaf,
  Home, BookOpen, Users, Award, Plus,
} from "lucide-react";

export const Route = createFileRoute("/noticia")({
  head: () => ({
    meta: [{ title: "Noticia Ambiental — Greenio" }],
  }),
  component: Noticia,
});

function Noticia() {
  return (
    <div className="max-w-md mx-auto h-screen relative overflow-hidden flex flex-col shadow-2xl"
      style={{ background: "linear-gradient(160deg, #f3e5f5 0%, #e8eaf6 40%, #e0f2f1 100%)" }}>

      {/* Portada */}
      <div className="relative h-52 shrink-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #283593 0%, #1565c0 40%, #00695c 100%)" }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <TrendingDown size={160} className="text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />

        {/* Botones top */}
        <div className="absolute top-0 left-0 right-0 flex justify-between px-4 pt-5">
          <Link to="/aprende"
            className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-white border border-[var(--gn-border-str)]">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-white border border-[var(--gn-border-str)]">
              <BookmarkPlus size={16} />
            </button>
            <button className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-white border border-[var(--gn-border-str)]">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Info sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gn-surface text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[var(--gn-border-str)]">
              Noticia
            </span>
            <span className="flex items-center gap-1 text-white/80 text-[10px] font-medium">
              <Clock size={10} /> 2 min · Lima, Perú
            </span>
          </div>
          <h1 className="text-white font-bold text-base leading-snug drop-shadow-md">
            Lima reduce un 12% sus residuos sólidos este año
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-5">

        {/* Fuente y fecha */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[var(--gn-surface)] border border-[var(--gn-border)] flex items-center justify-center">
              <Leaf size={13} className="text-[var(--gn-primary-dk)]" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[var(--gn-base)]">MINAM — Perú</p>
              <p className="text-[9px] text-[var(--gn-hint)]">Julio 2026 · Verificado</p>
            </div>
          </div>
          <span className="text-[10px] bg-[var(--gn-surface)] text-[var(--gn-primary-dk)] border border-[var(--gn-border)] px-2.5 py-1 rounded-full font-bold">
            Oficial
          </span>
        </div>

        {/* Dato destacado */}
        <div className="rounded-2xl p-4 mb-5 border border-[#c5cae9] shadow-sm"
          style={{ background: "linear-gradient(135deg, rgba(40,53,147,0.08) 0%, rgba(0,105,92,0.08) 100%)" }}>
          <div className="flex items-center gap-4">
            <div className="text-center shrink-0">
              <p className="text-4xl font-bold text-[#1565c0]">12%</p>
              <p className="text-[10px] text-[var(--gn-sub)] font-bold mt-0.5">reducción</p>
            </div>
            <div className="w-px h-12 bg-[#c5cae9]" />
            <p className="text-[12px] text-[#1a237e] leading-relaxed font-medium">
              En residuos sólidos generados en Lima Metropolitana durante el primer semestre de 2026.
            </p>
          </div>
        </div>

        {/* Cuerpo de la noticia */}
        <div className="bg-gn-card border border-[#c5cae9] rounded-2xl p-4 mb-4 shadow-sm">
          <p className="text-[13px] text-[#1a237e] leading-relaxed font-medium">
            Según el reporte semestral del Ministerio del Ambiente (MINAM), Lima Metropolitana logró reducir en un 12% la generación de residuos sólidos durante el primer semestre de 2026, en comparación con el mismo período del año anterior.
          </p>
        </div>

        <div className="bg-gn-card border border-[#c5cae9] rounded-2xl p-4 mb-4 shadow-sm">
          <p className="text-[13px] text-[var(--gn-sub)] leading-relaxed">
            Este avance se atribuye principalmente a la implementación del programa de segregación en la fuente en 15 distritos piloto, la mayor cobertura de puntos de acopio y el aumento en la participación ciudadana en campañas de reciclaje.
          </p>
        </div>

        {/* Datos clave */}
        <h2 className="font-bold text-[var(--gn-base)] text-sm mb-3 mt-5 flex items-center gap-2">
          <Recycle size={14} className="text-[var(--gn-primary-dk)]" /> Datos clave
        </h2>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { val: "15", unit: "distritos", label: "con segregación activa" },
            { val: "320", unit: "toneladas", label: "recicladas por semana" },
            { val: "2.4M", unit: "ciudadanos", label: "participantes activos" },
            { val: "180", unit: "puntos", label: "de acopio habilitados" },
          ].map((d, i) => (
            <div key={i} className="bg-gn-card border border-[#c5cae9] rounded-xl p-3 text-center shadow-sm">
              <p className="text-xl font-bold text-[#1565c0]">{d.val}</p>
              <p className="text-[9px] font-bold text-[var(--gn-sub)]">{d.unit}</p>
              <p className="text-[9px] text-[var(--gn-hint)] mt-0.5">{d.label}</p>
            </div>
          ))}
        </div>

        {/* Cita */}
        <div className="border-l-4 border-[var(--gn-primary-dk)] bg-gn-card rounded-r-2xl px-4 py-3 mb-5 shadow-sm">
          <p className="text-[12px] text-[var(--gn-sub)] italic leading-relaxed">
            "Este resultado demuestra que cuando los ciudadanos se involucran activamente, la diferencia es real y medible."
          </p>
          <p className="text-[10px] font-bold text-[var(--gn-primary-dk)] mt-2">— Ministerio del Ambiente, MINAM</p>
        </div>

        {/* Más noticias */}
        <h2 className="font-bold text-[var(--gn-base)] text-sm mb-3">Más noticias</h2>
        <div className="flex flex-col gap-2">
          {[
            { title: "Nueva ley de envases retornables en Perú", tag: "Política", mins: "3" },
            { title: "Cifras del reciclaje en Lima Metropolitana", tag: "Ciencia", mins: "4" },
          ].map((n, i) => (
            <button key={i} className="bg-gn-card border border-[#c5cae9] rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[9px] font-bold uppercase text-[#1565c0] bg-[#e8eaf6] px-2 py-0.5 rounded-full border border-[#c5cae9]">{n.tag}</span>
                <p className="text-[12px] font-bold text-[#1a237e] mt-1">{n.title}</p>
                <p className="text-[10px] text-[var(--gn-hint)]">{n.mins} min</p>
              </div>
              <ChevronRight size={16} className="text-[#c5cae9]" />
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
