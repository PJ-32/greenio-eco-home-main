import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  BookOpen,
  Users,
  Award,
  X,
  Camera,
  Recycle,
  ClipboardCheck,
  Plus,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/registra")({
  head: () => ({
    meta: [
      { title: "Registrar Acción — Greenio" },
      {
        name: "description",
        content: "Registra una acción sostenible cotidiana y gana GreenPoints en Greenio.",
      },
    ],
  }),
  component: Registra,
});

function Registra() {
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      {/* Contenedor Principal con Scrollbar Oculta */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-8 pb-24">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Registra
          </h1>
          <p className="mt-2 text-sm text-[var(--gn-base)]">
            Registrar una acción sostenible cotidiana
          </p>
        </header>

        {/* Tarjeta 1: Escanear Residuo (Opción Principal - Destacada) */}
        <section className="mt-8 bg-gn-card border-2 border-[var(--gn-primary)] rounded-3xl p-6 flex flex-col items-center text-center gap-3 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] group transition-all duration-300 hover:border-[#4ADE80] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]">
          {/* Fondo gradiente sutil interactivo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
          
          {/* Diseño Premium de Ícono de Escáner sobre Reciclaje */}
          <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
            <Recycle className="w-16 h-16 text-[var(--gn-primary)]/20 absolute group-hover:scale-110 transition-transform duration-500" />
            <Camera className="w-10 h-10 text-[var(--gn-primary)] relative z-10 group-hover:rotate-6 transition-transform duration-300" />
            <div className="absolute inset-0 border-2 border-dashed border-[#4ADE80]/40 rounded-2xl animate-[spin_15s_linear_infinite] pointer-events-none" />
            <div className="absolute w-full h-0.5 bg-[#4ADE80] top-1/2 left-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-[bounce_2s_infinite] pointer-events-none" />
          </div>

          <h2 className="text-2xl font-bold text-[var(--gn-base)] group-hover:text-[var(--gn-base)] transition-colors">
            Escanear Residuo
          </h2>
          <p className="text-[var(--gn-sub)] text-sm leading-relaxed max-w-[280px]">
            Escanea el residuo con tu cámara.
          </p>
          <span className="text-[var(--gn-primary)] font-black text-xs uppercase tracking-wider bg-[var(--gn-primary)] border border-[var(--gn-primary)]/20 px-3 py-1 rounded-full animate-pulse">
            ¡Gana más puntos!
          </span>

          <Link to="/ecoscan" className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-bold py-3 px-8 rounded-xl w-full mt-2 flex justify-center items-center gap-2 transition duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.4)] active:scale-[0.98]">
            <Camera size={18} strokeWidth={2.5} />
            Seleccionar
          </Link>
        </section>

        {/* Tarjeta 2: Registrar Hábito (Opción Secundaria) */}
        <section className="mt-6 bg-gn-card border border-[var(--gn-border-str)] rounded-3xl p-6 flex flex-col items-center text-center gap-3 group transition-all duration-300 hover:bg-gn-card hover:border-[var(--gn-border-str)]">
          
          {/* Diseño Premium de Ícono de Checklist / Mano */}
          <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
            <ClipboardCheck className="w-12 h-12 text-[var(--gn-base)] group-hover:text-[var(--gn-sub)] group-hover:scale-105 transition-all duration-300" />
            <Plus className="w-5 h-5 text-[var(--gn-primary)] absolute bottom-1 right-1 bg-[var(--gn-bg)] rounded-full border border-[var(--gn-border-str)] p-0.5 group-hover:bg-gn-card group-hover:border-[var(--gn-border-str)] transition-colors" />
          </div>

          <h2 className="text-xl font-bold text-[var(--gn-sub)] group-hover:text-[var(--gn-base)] transition-colors">
            Registrar Hábito
          </h2>
          <p className="text-[var(--gn-base)] text-sm leading-relaxed max-w-[280px]">
            Selecciona la característica y acción específica.
          </p>
          <span className="text-[var(--gn-sub)] font-bold text-xs uppercase tracking-wider">
            Gana puntos extra
          </span>

          <Link to="/habito" className="bg-[var(--gn-surface)] hover:bg-[var(--gn-surface)] text-[var(--gn-base)] font-semibold py-3 px-8 rounded-xl w-full mt-2 flex justify-center items-center gap-2 transition duration-300 active:scale-[0.98]">
            Seleccionar
            <ArrowRight size={16} className="opacity-60 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
