import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Award, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/exito")({
  head: () => ({
    meta: [
      { title: "Acción Registrada — Greenio" },
      {
        name: "description",
        content: "Acción registrada exitosamente en Greenio. ¡Gracias por tu aporte!",
      },
    ],
  }),
  component: Exito,
});

function Exito() {
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col items-center justify-center shadow-2xl p-6 text-center">
      {/* Fondo decorativo con resplandor verde esmeralda */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--gn-primary)] blur-3xl pointer-events-none" />

      {/* 1. Animación/Ícono Principal */}
      <div className="relative mb-6">
        {/* Anillo de pulso exterior */}
        <div className="absolute inset-0 bg-[var(--gn-primary)] rounded-full scale-125 animate-ping opacity-60" />
        
        <div className="bg-[var(--gn-primary)] w-32 h-32 rounded-full flex items-center justify-center animate-pulse relative z-10 border border-[var(--gn-primary)]/30">
          <Sprout
            size={64}
            className="text-[var(--gn-primary)] drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]"
            strokeWidth={1.8}
          />
        </div>

        {/* Pequeño check flotante de éxito */}
        <div className="absolute bottom-1 right-1 bg-[var(--gn-primary)] text-[var(--gn-bg)] rounded-full p-1.5 shadow-lg border-2 border-[var(--gn-bg)] z-20">
          <CheckCircle2 size={18} strokeWidth={3} />
        </div>
      </div>

      {/* 2. Textos de Éxito */}
      <div className="space-y-2 max-w-[280px]">
        <h1 className="text-4xl font-black text-[var(--gn-base)] tracking-wide bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          ¡Gracias!
        </h1>
        <p className="text-2xl font-bold text-[var(--gn-primary)] drop-shadow-[0_0_6px_rgba(16,185,129,0.3)]">
          +50 GPts sumados
        </p>
        <div className="inline-flex items-center gap-1.5 bg-gn-card border border-[var(--gn-border-str)] px-4 py-1.5 rounded-full mt-2">
          <Award size={14} className="text-[var(--gn-primary)]" />
          <span className="text-xs text-[var(--gn-sub)] font-medium">
            Saldo actual: 2,500 GPts
          </span>
        </div>
      </div>

      {/* 3. Botones de Continuidad */}
      <footer className="w-full mt-10 flex flex-col gap-3 z-10">
        <Link
          to="/"
          className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] py-4 px-6 rounded-xl font-black w-full text-center text-sm transition duration-300 shadow-[0_4px_16px_rgba(16,185,129,0.35)] active:scale-[0.98]"
        >
          Volver al Inicio
        </Link>
        <Link
          to="/registra"
          className="bg-gn-card border border-[var(--gn-border-str)] text-[var(--gn-base)] hover:bg-[var(--gn-surface)] hover:border-[var(--gn-border-str)] py-4 px-6 rounded-xl font-bold w-full text-center text-sm transition duration-300"
        >
          Registrar otra acción
        </Link>
      </footer>
    </div>
  );
}
