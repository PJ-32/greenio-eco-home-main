import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ZapOff,
  Check,
  Cloud,
  Droplets,
  Recycle,
  ArrowRight,
} from "lucide-react";
import ecoscanBg from "@/assets/ecoscan_bg.png";

export const Route = createFileRoute("/ecoscan")({
  head: () => ({
    meta: [
      { title: "Eco-Scan — Greenio" },
      {
        name: "description",
        content: "Escanea tus residuos para ganar GreenPoints en Greenio.",
      },
    ],
  }),
  component: EcoScan,
});

function EcoScan() {
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      {/* 1. Header Superior (Absoluto sobre la cámara) */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-slate-950/90 to-transparent">
        <Link
          to="/registra"
          aria-label="Atrás"
          className="w-10 h-10 rounded-full bg-gn-card border border-[var(--gn-border-str)]/80 flex items-center justify-center text-[var(--gn-base)] hover:text-[var(--gn-primary)] transition"
        >
          <ArrowLeft size={20} />
        </Link>
        <span className="font-bold text-base tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Eco-Scan
        </span>
        <button
          aria-label="Flash apagado"
          className="w-10 h-10 rounded-full bg-gn-card border border-[var(--gn-border-str)]/80 flex items-center justify-center text-[var(--gn-base)] hover:text-[var(--gn-base)] transition"
        >
          <ZapOff size={18} />
        </button>
      </header>

      {/* 2. Área de Cámara */}
      <main className="flex-1 bg-gn-card relative flex justify-center items-center overflow-hidden">
        {/* Simulación del visor de la cámara usando la imagen placeholder generada */}
        <img
          src={ecoscanBg}
          alt="Vista de la cámara"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Filtro oscuro/verde sutil de la cámara */}
        <div className="absolute inset-0 bg-[var(--gn-bg)] backdrop-brightness-[0.85]" />

        {/* Mensaje flotante superior */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/80 text-[var(--gn-sub)] text-xs px-4 py-2 rounded-full text-center shadow-lg w-[85%] max-w-[320px] z-10 pointer-events-none">
          Encuadra el residuo junto al contenedor...
        </div>

        {/* Marco de escaneo en el centro */}
        <div className="relative w-72 h-72 flex flex-col justify-center items-center">
          {/* Esquinas del escáner */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[var(--gn-primary)] rounded-tl-2xl shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[var(--gn-primary)] rounded-tr-2xl shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[var(--gn-primary)] rounded-bl-2xl shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[var(--gn-primary)] rounded-br-2xl shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
          
          {/* Brillo verde interior pulsante */}
          <div className="absolute inset-4 border border-[var(--gn-primary)]/20 bg-[var(--gn-primary)] rounded-2xl animate-pulse pointer-events-none" />

          {/* Elementos escaneados simulados con UI/UX detallado */}
          <div className="relative flex gap-5 items-center justify-center z-10">
            {/* Botella de Plástico */}
            <div className="relative group">
              <div className="w-16 h-28 bg-[var(--gn-primary)] border-2 border-[#4ADE80]/80 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                {/* Líquido/nivel interior de reciclado */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[var(--gn-primary)]" />
                <div className="w-5 h-3 bg-gn-surface absolute -top-0.5 border-b-2 border-[#4ADE80]/80 rounded-t-sm" />
                <span className="text-[10px] text-[var(--gn-base)] font-bold tracking-wider">PET-1</span>
              </div>
              
              {/* VALIDACIÓN UX: Check verde animado */}
              <div className="absolute -top-2 -right-2 bg-[var(--gn-primary)] text-[var(--gn-bg)] rounded-full p-1 shadow-lg ring-2 ring-[var(--gn-bg)] animate-bounce">
                <Check size={12} strokeWidth={4} />
              </div>
            </div>

            {/* Flecha de reconocimiento */}
            <div className="text-[var(--gn-primary)] animate-[pulse_1.5s_infinite] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
              <ArrowRight size={20} strokeWidth={3} />
            </div>

            {/* Contenedor/Tacho */}
            <div className="w-16 h-20 bg-[var(--gn-bg)] border border-[var(--gn-primary)]/30 rounded-xl flex flex-col items-center justify-center p-2 relative shadow-lg">
              <Recycle size={28} className="text-[var(--gn-primary)]" />
              <span className="text-[8px] text-[var(--gn-base)] mt-1 uppercase font-black tracking-wider">
                Plástico
              </span>
            </div>
          </div>

          {/* Insignia de Validación UX */}
          <div className="absolute -bottom-6 bg-[var(--gn-primary)] text-[var(--gn-bg)] text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-[#4ADE80]/40 flex items-center gap-1.5 z-20">
            <span className="w-2 h-2 rounded-full bg-[var(--gn-bg)] animate-ping" />
            Residuo: PLÁSTICO - RECONOCIDO
          </div>
        </div>
      </main>

      {/* 3. Panel Inferior de Resultados (Bottom Sheet) */}
      <footer className="bg-gn-card border-t border-[var(--gn-primary)]/30 rounded-t-3xl p-6 w-full shadow-[0_-10px_40px_rgba(16,185,129,0.15)] z-50">
        {/* Indicador de arrastre sutil para estética bottom-sheet */}
        <div className="w-12 h-1 bg-[var(--gn-surface)] rounded-full mx-auto mb-4" />

        <h3 className="text-lg font-bold text-[var(--gn-primary)] text-center mb-4">
          Resultados del Eco-Scan
        </h3>

        {/* Grid de Impacto */}
        <div className="grid grid-cols-2 gap-3">
          {/* CO2 */}
          <div className="bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--gn-primary)] flex items-center justify-center text-[var(--gn-primary)] shrink-0">
              <Cloud size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-[var(--gn-base)] uppercase font-bold tracking-wider truncate">
                CO2 evitado
              </p>
              <p className="text-xs font-bold text-[var(--gn-base)] mt-0.5">10g</p>
            </div>
          </div>

          {/* Agua */}
          <div className="bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/80 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--gn-primary)] flex items-center justify-center text-[var(--gn-primary)] shrink-0">
              <Droplets size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-[var(--gn-base)] uppercase font-bold tracking-wider truncate">
                Agua conservada
              </p>
              <p className="text-xs font-bold text-[var(--gn-base)] mt-0.5">100ml</p>
            </div>
          </div>
        </div>

        {/* Recompensa */}
        <div className="bg-[var(--gn-bg)] border border-[var(--gn-primary)]/20 rounded-2xl py-3 px-4 my-4 flex justify-between items-center">
          <span className="text-[var(--gn-base)] text-xs font-bold uppercase tracking-wider">
            Recompensa
          </span>
          <span className="text-[var(--gn-primary)] text-xl font-black drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
            +50 GPts
          </span>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Link
            to="/registra"
            className="flex-1 bg-gn-surface hover:bg-gn-surface text-[#f87171] border border-[#f87171]/20 py-3 rounded-xl font-bold flex justify-center items-center text-sm transition duration-300"
          >
            Cancelar
          </Link>
          <Link
            to="/exito"
            className="flex-1 bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] py-3 rounded-xl font-black flex justify-center items-center text-sm transition duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.35)] active:scale-[0.98]"
          >
            Confirmar
          </Link>
        </div>
      </footer>
    </div>
  );
}
