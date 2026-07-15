import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  AlertTriangle,
  Clock,
  Trash2,
  Calendar,
  CheckCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/reporte-detalle")({
  head: () => ({
    meta: [
      { title: "Detalles del Reporte — Greenio" },
      {
        name: "description",
        content: "Ver detalles del punto crítico reportado por los vecinos en la Av. Arica.",
      },
    ],
  }),
  component: ReporteDetalle,
});

function ReporteDetalle() {
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoinChallenge = () => {
    setIsJoining(true);
    setTimeout(() => {
      setIsJoining(false);
      setJoined(true);
      navigate({ to: "/exito" });
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl">
      {/* Header (Absoluto, z-10) */}
      <header className="absolute top-0 left-0 w-full z-10 p-4 flex items-center justify-between">
        <Link
          to="/comunidad"
          search={{ tab: "reportes" }}
          aria-label="Volver a Comunidad"
          className="bg-[var(--gn-bg)] hover:bg-gn-card p-2.5 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center border border-[var(--gn-border-str)] shadow-lg mt-6"
        >
          <ArrowLeft size={18} />
        </Link>
      </header>

      {/* Imagen de Portada (Ocupa el 30% superior) */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80"
          alt="Acumulación de basura en Av. Arica"
          className="w-full h-full object-cover brightness-[0.75]"
        />
        {/* Difuminado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      {/* Contenido Principal con Scroll */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scrollbar-hide">
        {/* Título */}
        <h1 className="text-xl font-black mt-6 tracking-tight leading-tight">
          Punto crítico: Acumulación de basura
        </h1>

        {/* Badge de Estado */}
        <div className="flex gap-2 items-center mt-3">
          <span className="bg-amber-50 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-200/50 uppercase tracking-wider">
            Bajo Revisión
          </span>
          <span className="bg-gn-surface text-[#f87171] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#f87171]/10 uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle size={10} className="animate-pulse" />
            Problema Crítico
          </span>
        </div>

        {/* Ubicación e Información de Reporte */}
        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 mt-6 flex flex-col gap-3.5 shadow-md">
          {/* Ubicación */}
          <div className="flex gap-3 items-start">
            <MapPin size={16} className="text-[var(--gn-primary)] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">
                Dirección
              </p>
              <p className="text-xs font-semibold text-[var(--gn-base)] mt-0.5">
                Av. Arica, Callao (Cerca a Plaza Bolognesi)
              </p>
            </div>
          </div>

          {/* Vecinos respaldando */}
          <div className="flex gap-3 items-start">
            <Users size={16} className="text-[var(--gn-primary)] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">
                Respaldo Ciudadano
              </p>
              <p className="text-xs font-semibold text-[var(--gn-base)] mt-0.5">
                15 vecinos respaldan este reporte
              </p>
            </div>
          </div>

          {/* Fecha */}
          <div className="flex gap-3 items-start">
            <Clock size={16} className="text-[var(--gn-primary)] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">
                Reportado
              </p>
              <p className="text-xs font-semibold text-[var(--gn-base)] mt-0.5">
                Hace 2 horas por Nicole B.
              </p>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider">
            Detalles del problema
          </h2>
          <p className="text-[var(--gn-base)] mt-2 text-xs leading-relaxed font-medium">
            Acumulación masiva de residuos sólidos y plásticos a lo largo de la berma central en la Av. Arica. El olor es sumamente intenso y obstruye completamente el paso peatonal, atrayendo plagas al vecindario.
          </p>
        </section>

        {/* Impacto */}
        <section className="bg-gn-card p-4 rounded-xl border border-[#f87171]/10 mt-6 flex gap-4 items-center">
          <div className="w-10 h-10 rounded-lg bg-gn-surface flex items-center justify-center text-[#f87171] shrink-0 border border-[#f87171]/10 shadow-inner">
            <AlertTriangle size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[11px] font-bold text-[var(--gn-base)] uppercase tracking-wider">
              Nivel de Alerta
            </h3>
            <p className="text-xs text-[var(--gn-base)] mt-0.5 font-medium leading-snug">
              Este punto requiere acción comunitaria prioritaria.
            </p>
          </div>
        </section>

        {/* Auditoría Sección */}
        <section className="bg-gn-card border border-[var(--gn-amber)]/20 rounded-2xl p-4 mt-4 flex flex-col gap-3 shadow-md">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-lg bg-[var(--gn-amber)] flex items-center justify-center text-white shrink-0 border border-[var(--gn-amber)]/20">
              <Sparkles size={18} className="animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider">Auditar Solución</h3>
              <p className="text-[10px] text-[var(--gn-base)] mt-0.5 font-medium">¿Estás cerca? Verifica si el punto ya fue limpiado.</p>
            </div>
          </div>
          <Link
            to="/reto-verificacion"
            className="bg-[var(--gn-amber)] hover:bg-[#d97706] text-white text-xs font-bold py-2.5 rounded-xl text-center transition duration-300 block w-full shadow-[0_2px_8px_rgba(245,158,11,0.2)] active:scale-[0.98] cursor-pointer"
          >
            Verificar y ganar +10 GPts
          </Link>
        </section>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="absolute bottom-0 w-full p-6 bg-[var(--gn-bg)] border-t border-[var(--gn-card)] z-50 shrink-0">
        <button
          onClick={handleJoinChallenge}
          disabled={isJoining || joined}
          className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-black py-4 rounded-2xl w-full text-center text-sm uppercase tracking-wider transition duration-300 active:scale-95 shadow-[0_4px_16px_rgba(16,185,129,0.4)] disabled:opacity-50 flex justify-center items-center gap-2"
        >
          {isJoining ? (
            <Loader2 size={16} className="animate-spin" />
          ) : joined ? (
            <CheckCircle size={16} />
          ) : null}
          {isJoining ? "Procesando..." : joined ? "¡Inscrito en el Reto!" : "Unirse al Reto de Limpieza"}
        </button>
      </footer>
    </div>
  );
}
