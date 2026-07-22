import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, CheckCircle2, XCircle, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/reto-verificacion")({
  head: () => ({
    meta: [
      { title: "Auditoría Vecinal — Greenio" },
      {
        name: "description",
        content: "Valida si el punto crítico reportado ha sido limpiado y gana puntos GPts.",
      },
    ],
  }),
  component: RetoVerificacion,
});

function RetoVerificacion() {
  const navigate = useNavigate();
  const [voted, setVoted] = useState<"si" | "no" | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [evidenciaAdjunta, setEvidenciaAdjunta] = useState(false);

  const handleVote = (type: "si" | "no") => {
    setVoted(type);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate({ to: "/comunidad", search: { tab: "reportes" } });
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      {/* 1. Header Superior */}
      <header className="pt-12 px-4 pb-4 border-b border-[var(--gn-border-str)] bg-gn-card flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-2.5 min-w-0">
          <Link
            to="/comunidad"
            search={{ tab: "reportes" }}
            aria-label="Volver a reportes"
            className="bg-[var(--gn-surface)] hover:bg-[var(--gn-surface)] p-2 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center cursor-pointer shrink-0"
          >
            <ArrowLeft size={16} />
          </Link>
          <h1 className="text-lg font-bold text-[var(--gn-base)] truncate">
            Auditoría Vecinal
          </h1>
        </div>

        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shrink-0 flex items-center gap-1 shadow-sm">
          <Sparkles size={10} className="animate-pulse text-white" />
          <span>+10 GPts</span>
        </div>
      </header>

      {/* 2. Contenedor de Comparación con Scroll */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide pb-32">
        <p className="text-sm text-[var(--gn-sub)] text-center leading-relaxed font-medium px-2">
          La comunidad afirma haber limpiado el punto crítico en <span className="text-[var(--gn-base)] font-bold">Av. Arica</span>. ¿Puedes confirmarlo?
        </p>

        {/* Tarjeta de Fotos */}
        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-2.5 flex flex-col gap-3 relative shadow-inner">

          {/* Foto ANTES */}
          <div className="relative h-40 rounded-xl overflow-hidden group border border-slate-850">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80"
              alt="Punto crítico antes de limpiar"
              className="w-full h-full object-cover brightness-[0.85] group-hover:scale-[1.02] transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <span className="bg-gn-surface text-[var(--gn-base)] text-[10px] font-black tracking-wider px-2.5 py-1 absolute top-2.5 left-2.5 rounded-md uppercase border border-[#f87171]/20 shadow-md">
              Antes (Reporte)
            </span>
          </div>

          {/* Flecha conectora flotante central */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[var(--gn-bg)] border border-[var(--gn-border-str)] text-[var(--gn-primary)] p-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <ChevronDown size={18} className="animate-bounce" />
          </div>

          {/* Foto DESPUÉS */}
          <div className="relative h-40 rounded-xl overflow-hidden group border border-slate-850">
            <img
              src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80"
              alt="Punto crítico después de limpiar"
              className="w-full h-full object-cover brightness-[0.9] group-hover:scale-[1.02] transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <span className="bg-[var(--gn-primary)] text-[var(--gn-bg)] text-[10px] font-black tracking-wider px-2.5 py-1 absolute top-2.5 left-2.5 rounded-md uppercase shadow-md">
              Después (Evidencia)
            </span>
          </div>

        </div>
      </main>

      {/* 3. Panel de Votación */}
      <footer className="bg-gn-card border-t border-[var(--gn-border-str)] p-6 rounded-t-3xl mt-auto z-10 shrink-0">
        <h2 className="font-bold text-center text-lg mb-5 text-[var(--gn-base)] tracking-tight">
          ¿El problema ha sido solucionado?
        </h2>

        {/* Botón de Carga de Evidencia */}
        <button
          type="button"
          onClick={() => setEvidenciaAdjunta(!evidenciaAdjunta)}
          className={`w-full border-2 border-dashed py-3 rounded-xl flex items-center justify-center gap-2 mb-4 transition-colors cursor-pointer text-xs font-bold ${evidenciaAdjunta
            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
            : "border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
        >
          {evidenciaAdjunta ? (
            <span>Evidencia adjuntada correctamente</span>
          ) : (
            <span>Subir foto de comprobación</span>
          )}
        </button>

        <div className="flex gap-4">
          {/* Botón NO */}
          <button
            type="button"
            onClick={() => handleVote("no")}
            className="bg-transparent border-2 border-[#f87171]/65 hover:border-[#f87171] hover:bg-gn-surface text-[#f87171] hover:text-[#f87171] font-bold py-3 px-4 rounded-xl flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-300 active:scale-95 cursor-pointer text-xs"
          >
            <XCircle size={20} />
            <span>Sigue sucio</span>
          </button>

          {/* Botón SÍ */}
          <button
            type="button"
            onClick={() => handleVote("si")}
            disabled={!evidenciaAdjunta}
            className={`font-black py-3 px-4 rounded-xl flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-300 text-xs ${evidenciaAdjunta
              ? "bg-[var(--gn-primary)] hover:bg-[#4ADE80] active:scale-95 text-[var(--gn-bg)] cursor-pointer shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              : "bg-slate-300 text-slate-500 opacity-50 cursor-not-allowed"
              }`}
          >
            <CheckCircle2 size={20} />
            <span>Está limpio</span>
          </button>
        </div>
      </footer>

      {/* Success Modal Overlay */}
      {showSuccess && (
        <div className="absolute inset-0 bg-[var(--gn-bg)] flex flex-col items-center justify-center p-6 text-center z-[100] animate-in fade-in zoom-in-95 duration-200">
          <div className="w-24 h-24 bg-[var(--gn-primary)] rounded-full flex items-center justify-center border border-[var(--gn-primary)]/20 mb-6 relative">
            <span className="absolute inset-0 rounded-full bg-[var(--gn-primary)] animate-ping" />
            <div className="relative w-16 h-16 rounded-full bg-[var(--gn-primary)] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <ShieldCheck size={32} className="text-[var(--gn-bg)] animate-bounce" />
            </div>
          </div>

          <h2 className="text-xl font-black text-[var(--gn-base)] tracking-tight mb-2">
            ¡Voto registrado!
          </h2>
          <p className="text-xs text-[var(--gn-base)] font-medium leading-relaxed max-w-[280px] mb-2">
            Gracias por participar en la auditoría del barrio. Tu respuesta ayuda a mantener la veracidad de la plataforma.
          </p>
          <p className="text-sm font-bold text-[var(--gn-amber)] mb-8 flex items-center gap-1 justify-center">
            <Sparkles size={14} className="animate-spin" />
            ¡Has ganado +10 GPts!
          </p>

          <button
            onClick={handleCloseSuccess}
            type="button"
            className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-bold py-3.5 px-6 rounded-xl w-full text-center text-xs uppercase tracking-wider transition duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            Volver a Reportes
          </button>
        </div>
      )}
    </div>
  );
}
