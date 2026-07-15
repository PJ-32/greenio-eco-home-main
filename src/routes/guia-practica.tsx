import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft, Droplets, Clock, Share2, BookmarkPlus,
  CheckCircle2, Lightbulb, ChevronRight, Plus,
  Home, BookOpen, Users, Award,
} from "lucide-react";

export const Route = createFileRoute("/guia-practica")({
  head: () => ({
    meta: [{ title: "Guía Práctica — Greenio" }],
  }),
  component: GuiaPractica,
});

const steps = [
  { title: "Cierra bien el grifo", desc: "Un grifo goteando desperdicia hasta 30 litros al día. Revísalo cada semana.", impact: "Ahorra 900L/mes" },
  { title: "Ducha de 5 minutos", desc: "Reducir tu ducha de 10 a 5 minutos ahorra hasta 50 litros por baño.", impact: "Ahorra 1,500L/mes" },
  { title: "Reutiliza el agua de cocción", desc: "El agua donde herviste pasta o verduras, úsala para regar plantas cuando enfríe.", impact: "Ahorra 200L/mes" },
  { title: "Lava a máquina llena", desc: "Espera a tener la carga completa antes de poner la lavadora. Usa el ciclo eco.", impact: "Ahorra 40L/ciclo" },
  { title: "Recoge agua de lluvia", desc: "Un balde en el balcón durante la temporada de lluvias puede darte agua para plantas durante semanas.", impact: "Ahorra 500L/mes" },
];

function GuiaPractica() {
  return (
    <div className="max-w-md mx-auto h-screen relative overflow-hidden flex flex-col shadow-2xl"
      style={{ background: "linear-gradient(160deg, #e1f5fe 0%, #e0f2f1 50%, var(--gn-surface) 100%)" }}>

      {/* Header con foto de portada simulada */}
      <div className="relative h-48 shrink-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0277bd 0%, #00897b 50%, var(--gn-primary-dk) 100%)" }}>
        {/* Ícono decorativo grande */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Droplets size={140} className="text-white" />
        </div>
        {/* Gradiente inferior para legibilidad */}
        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }} />

        {/* Botones top */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 pt-5">
          <Link to="/aprende" search={{ tab: "guias" }}
            className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-slate-800 border border-[var(--gn-border-str)] cursor-pointer hover:scale-105 active:scale-95 transition">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-slate-800 border border-[var(--gn-border-str)] cursor-pointer hover:scale-105 active:scale-95 transition">
              <BookmarkPlus size={16} />
            </button>
            <button className="w-9 h-9 bg-gn-card rounded-full flex items-center justify-center text-slate-800 border border-[var(--gn-border-str)] cursor-pointer hover:scale-105 active:scale-95 transition">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Título sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-gn-surface text-slate-900 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[var(--gn-border-str)] mb-2">
            Cuidado del Agua
          </span>
          <h1 className="text-white font-bold text-base leading-snug drop-shadow-md">
            5 formas fáciles de ahorrar agua en casa
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-28 px-4 pt-5">

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-5">
          <span className="flex items-center gap-1.5 text-[11px] text-[var(--gn-sub)] font-medium">
            <Clock size={13} className="text-[#0288d1]" /> 4 min de lectura
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-[var(--gn-sub)] font-medium">
            <Droplets size={13} className="text-[#0288d1]" /> Ahorra hasta 3,140L/mes
          </span>
        </div>

        {/* Introducción */}
        <div className="bg-gn-card border border-[#b3e5fc] rounded-2xl p-4 mb-5 shadow-sm">
          <p className="text-[13px] text-[#1a3a4a] leading-relaxed font-medium">
            El agua dulce es uno de los recursos más escasos del planeta. En Lima, donde el acceso al agua es un desafío real, cada litro cuenta. Estas 5 acciones son simples, gratuitas y pueden marcar una gran diferencia desde hoy.
          </p>
        </div>

        {/* Impacto rápido */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 bg-gn-surface border border-[#80cbc4] rounded-xl p-3 text-center shadow-sm">
            <p className="text-xl font-bold text-[#00695c]">3,140</p>
            <p className="text-[10px] text-[var(--gn-sub)] font-medium mt-0.5">litros al mes</p>
          </div>
          <div className="flex-1 bg-[var(--gn-surface)] border border-[var(--gn-border)] rounded-xl p-3 text-center shadow-sm">
            <p className="text-xl font-bold text-[var(--gn-primary-dk)]">5</p>
            <p className="text-[10px] text-[var(--gn-sub)] font-medium mt-0.5">acciones clave</p>
          </div>
          <div className="flex-1 bg-gn-surface border border-[#81d4fa] rounded-xl p-3 text-center shadow-sm">
            <p className="text-xl font-bold text-[#0277bd]">0</p>
            <p className="text-[10px] text-[var(--gn-sub)] font-medium mt-0.5">costo extra</p>
          </div>
        </div>

        {/* Pasos */}
        <h2 className="font-bold text-[var(--gn-base)] text-sm mb-3 flex items-center gap-2">
          <Lightbulb size={15} className="text-[var(--gn-amber)]" /> Los 5 pasos
        </h2>
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <div key={i} className="bg-gn-card border border-[#b3e5fc] rounded-2xl p-4 shadow-sm flex gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm"
                style={{ background: "linear-gradient(135deg, #0288d1, #00897b)" }}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-[#1a3a4a]">{step.title}</p>
                <p className="text-[11px] text-[var(--gn-sub)] mt-1 leading-relaxed">{step.desc}</p>
                <span className="inline-block mt-2 bg-[#e0f7fa] text-[#00695c] border border-[#80deea] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {step.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tip final */}
        <div className="mt-5 rounded-2xl p-4 border border-[var(--gn-border)] shadow-sm"
          style={{ background: "linear-gradient(135deg, rgba(46,125,50,0.1) 0%, rgba(0,137,123,0.1) 100%)" }}>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-[var(--gn-primary-dk)] shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-bold text-[var(--gn-base)]">¿Listo para empezar hoy?</p>
              <p className="text-[11px] text-[var(--gn-sub)] mt-1 leading-relaxed">
                Registra cada acción sostenible en Greenio y ve cómo tu impacto crece semana a semana en tu ecosistema virtual.
              </p>
            </div>
          </div>
        </div>

        {/* Más guías */}
        <h2 className="font-bold text-[var(--gn-base)] text-sm mt-6 mb-3">Más guías para ti</h2>
        <div className="flex flex-col gap-2">
          {[
            { title: "Cómo compostar en casa", tag: "Hogar", mins: "5" },
            { title: "Guía de reciclaje por material", tag: "Residuos", mins: "3" },
          ].map((g, i) => (
            <button key={i} className="bg-gn-card border border-[var(--gn-border)] rounded-xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-[9px] font-bold uppercase text-[var(--gn-primary-dk)] bg-[var(--gn-surface)] px-2 py-0.5 rounded-full border border-[var(--gn-border-str)]">{g.tag}</span>
                <p className="text-[12px] font-bold text-[var(--gn-base)] mt-1">{g.title}</p>
                <p className="text-[10px] text-[var(--gn-hint)]">{g.mins} min</p>
              </div>
              <ChevronRight size={16} className="text-[var(--gn-border)]" />
            </button>
          ))}
        </div>
      </div>

      {/* CTA flotante */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 pt-3 bg-gradient-to-t from-white/95 to-transparent">
        <Link to="/registra"
          className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-2xl shadow-lg active:scale-95 transition"
          style={{ background: "linear-gradient(135deg, var(--gn-primary-dk) 0%, #00897b 100%)" }}>
          <Plus size={18} strokeWidth={3} /> Registrar acción de agua
        </Link>
      </div>
    </div>
  );
}
