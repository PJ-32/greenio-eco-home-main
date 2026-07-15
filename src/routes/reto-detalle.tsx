import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Users,
  Clock,
  Gift,
  Award,
  Loader2,
  CheckCircle,
  TrendingUp,
  Check,
  Hourglass,
} from "lucide-react";

// 1. Definición de la estructura de datos para retos
export interface Challenge {
  id: string;
  title: string;
  subtitle: string;
  status: "urgente" | "en_curso" | "proximo";
  statusLabel: string;
  neighbors: number;
  progress: number;
  daysLeft: string;
  image: string;
  description: string;
  rewardPoints: number;
  rewardMedal: string;
  meta: string;
}

// 2. Diccionario de retos unificados
export const CHALLENGES: Record<string, Challenge> = {
  playa: {
    id: "playa",
    title: "Limpieza de Playa",
    subtitle: "Av. Faucett",
    status: "urgente",
    statusLabel: "URGENTE",
    neighbors: 15,
    progress: 60,
    daysLeft: "Fin del reto: 3 días",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80",
    description: "Jornada de limpieza urgente para remover plásticos y residuos acumulados en la playa cercana a la Av. Faucett. ¡Ayúdanos a recuperar nuestro ecosistema marino!",
    rewardPoints: 150,
    rewardMedal: "Medalla Costera",
    meta: "200 kg de residuos",
  },
  rio: {
    id: "rio",
    title: "Limpieza de Ribera del Río Rímac",
    subtitle: "Puente Huánuco",
    status: "en_curso",
    statusLabel: "EN CURSO",
    neighbors: 22,
    progress: 75,
    daysLeft: "Fin del reto: 5 días",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
    description: "Únete a la jornada de limpieza en el tramo del puente Huánuco. Buscamos recolectar 500kg de residuos plásticos para proteger el ecosistema local.",
    rewardPoints: 200,
    rewardMedal: "Medalla de Limpieza",
    meta: "500 kg de residuos",
  },
  reforestacion: {
    id: "reforestacion",
    title: "Reforestación Urbana en Callao",
    subtitle: "Avenidas principales del Callao",
    status: "proximo",
    statusLabel: "PRÓXIMO",
    neighbors: 35,
    progress: 0,
    daysLeft: "Faltan 8 días",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Vamos a plantar 100 árboles nativos en las avenidas principales del Callao para reducir el calor urbano y mejorar el aire.",
    rewardPoints: 300,
    rewardMedal: "Medalla de Guardián Urbano",
    meta: "100 árboles plantados",
  },
};

// 3. Validación y carga de parámetros en TanStack Router
export const Route = createFileRoute("/reto-detalle")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: (search.id as string) || "rio",
    };
  },
  head: (ctx: any) => {
    const searchId = ctx?.search?.id || "rio";
    const challenge = CHALLENGES[searchId] || CHALLENGES.rio;
    return {
      meta: [
        { title: `${challenge.title} — Greenio` },
        { name: "description", content: challenge.description },
      ],
    };
  },
  component: RetoDetailView,
});

// 4. Componente de Página Unificado
function RetoDetailView() {
  const { id } = Route.useSearch();
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [joined, setJoined] = useState(false);

  // Obtener la información del reto específico, con fallback
  const challenge = CHALLENGES[id] || CHALLENGES.rio;

  const handleJoinChallenge = () => {
    setIsJoining(true);
    setTimeout(() => {
      setIsJoining(false);
      setJoined(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setJoined(true);
    navigate({ to: "/reto-coordinacion" });
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "urgente":
        return "bg-gn-surface text-[#f87171] border-[#f87171]/20";
      case "proximo":
        return "bg-blue-500/20 text-blue-400 border-blue-500/20";
      case "en_curso":
      default:
        return "bg-[var(--gn-primary)] text-[var(--gn-primary)] border-[var(--gn-primary)]/20";
    }
  };

  const getProgressBarStyles = (status: string) => {
    switch (status) {
      case "urgente":
        return "bg-[#f87171] shadow-[0_0_10px_rgba(239,68,68,0.5)]";
      case "proximo":
        return "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]";
      case "en_curso":
      default:
        return "bg-[var(--gn-primary)] shadow-[0_0_10px_rgba(16,185,129,0.5)]";
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      {/* Header (Absoluto, z-10) */}
      <header className="absolute top-0 left-0 w-full z-10 p-4 flex items-center justify-between">
        <Link
          to="/retos"
          aria-label="Volver a retos"
          className="bg-[var(--gn-bg)] hover:bg-gn-card p-2.5 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center border border-[var(--gn-border-str)] shadow-lg mt-6"
        >
          <ArrowLeft size={18} />
        </Link>
      </header>

      {/* Imagen de Portada (Ocupa el 30% superior) */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-full object-cover brightness-[0.7]"
        />
        {/* Difuminado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      {/* Contenido Principal con Scroll */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scrollbar-hide">
        {/* Título del Reto */}
        <h1 className="text-2xl font-black mt-6 tracking-tight leading-tight">
          {challenge.title}
        </h1>

        {/* Badge de Estado */}
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full inline-block mt-3 border uppercase tracking-wider ${getStatusBadgeStyles(
            challenge.status
          )}`}
        >
          {challenge.statusLabel}
        </span>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Bloque 1: Comunidad */}
          <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--gn-surface)] flex items-center justify-center text-[var(--gn-base)] border border-slate-750 shrink-0">
              <Users size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">
                Comunidad
              </p>
              <p className="text-xs font-bold text-[var(--gn-base)] truncate">
                {challenge.neighbors} vecinos
              </p>
            </div>
          </div>

          {/* Bloque 2: Tiempo */}
          <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--gn-surface)] flex items-center justify-center text-[var(--gn-base)] border border-slate-750 shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">
                Tiempo
              </p>
              <p className="text-xs font-bold text-[var(--gn-base)] truncate">
                {challenge.daysLeft}
              </p>
            </div>
          </div>
        </div>

        {/* Barra de progreso interactiva */}
        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 mt-4">
          <div className="flex justify-between items-center text-xs text-[var(--gn-base)] mb-2 font-medium">
            <span>Progreso del reto</span>
            <span className="text-[var(--gn-primary)] font-bold">{challenge.progress}%</span>
          </div>
          <div className="h-2.5 bg-[var(--gn-bg)] rounded-full overflow-hidden border border-slate-850">
            <div
              className={`h-full rounded-full ${getProgressBarStyles(challenge.status)}`}
              style={{ width: `${challenge.progress || 2}%` }} // Mostrar 2% mínimo visualmente si es 0
            />
          </div>
          <p className="text-[10px] text-[var(--gn-sub)] mt-2 font-semibold">
            Meta colectiva: {challenge.meta}
          </p>
        </div>

        {/* Sobre este reto */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider">
            Sobre este reto
          </h2>
          <p className="text-[var(--gn-base)] mt-2 text-sm leading-relaxed font-medium">
            {challenge.description}
          </p>
        </section>

        {/* Caja de Recompensa */}
        <section className="bg-gn-card p-4 rounded-2xl border border-[var(--gn-primary)]/20 mt-6 flex gap-4 items-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--gn-primary)] flex items-center justify-center text-white shrink-0 border border-[var(--gn-primary)]/20 shadow-inner">
            <Gift size={22} className="animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider">
              Recompensa del Reto
            </h3>
            <p className="text-xs text-[var(--gn-sub)] mt-0.5 font-semibold leading-snug">
              Al completar: +{challenge.rewardPoints} GPts y {challenge.rewardMedal}
            </p>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="absolute bottom-0 w-full p-6 bg-[var(--gn-bg)] border-t border-[var(--gn-card)] z-55 shrink-0">
        {joined ? (
          <Link
            to="/reto-coordinacion"
            className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-white font-black py-4 rounded-2xl w-full text-center text-sm uppercase tracking-wider transition duration-300 active:scale-95 shadow-[0_4px_16px_rgba(16,185,129,0.4)] flex justify-center items-center gap-2"
          >
            <CheckCircle size={16} />
            Ir a Coordinación
          </Link>
        ) : (
          <button
            onClick={handleJoinChallenge}
            disabled={isJoining}
            className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-white font-black py-4 rounded-2xl w-full text-center text-sm uppercase tracking-wider transition duration-300 active:scale-95 shadow-[0_4px_16px_rgba(16,185,129,0.4)] disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isJoining && <Loader2 size={16} className="animate-spin" />}
            {isJoining ? "Uniéndose..." : "Unirse al Reto"}
          </button>
        )}
      </footer>

      {/* Success Modal Overlay */}
      {joined && (
        <div className="absolute inset-0 bg-[var(--gn-bg)] flex items-center justify-center p-4 z-50 overflow-hidden animate-fade-in">
          {/* Card Contenedor Central */}
          <div className="w-full bg-gn-card border border-[var(--gn-primary)]/30 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden animate-scale-in">
            {/* Resplandor sutil de fondo */}
            <div className="absolute w-full h-32 bg-[var(--gn-primary)] blur-2xl top-0 left-0 pointer-events-none" />

            {/* Animación / Ícono Principal */}
            <div className="w-24 h-24 bg-[var(--gn-primary)] rounded-full flex items-center justify-center mb-2 relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[var(--gn-primary)] animate-ping" />
              <div className="w-16 h-16 bg-[var(--gn-primary)] text-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                <Check size={28} strokeWidth={4} />
              </div>
            </div>

            {/* Textos de Felicitación */}
            <h2 className="text-3xl font-black text-[var(--gn-base)] mt-4 tracking-tight">¡Felicidades!</h2>
            <p className="text-sm text-[var(--gn-base)] mt-2 font-medium">Te acabas de unir a la actividad:</p>
            <p className="text-lg font-bold text-[var(--gn-primary)] mt-1 px-1 leading-tight">
              {challenge.title}
            </p>

            {/* Caja de Información */}
            <div className="w-full bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-xl p-4 mt-6 flex gap-3 text-left items-start">
              <Hourglass size={18} className="text-[var(--gn-base)] shrink-0 mt-0.5 animate-pulse" />
              <p className="text-xs text-[var(--gn-sub)] leading-relaxed">
                Cuando la comunidad verifique que esta actividad se ha completado exitosamente, tu recompensa será liberada y sumada a tu perfil automáticamente.
              </p>
            </div>

            {/* Botón de Cierre */}
            <button
              onClick={handleCloseModal}
              type="button"
              className="bg-[var(--gn-primary)] hover:bg-[var(--gn-primary)] active:scale-95 text-white font-black py-4 rounded-xl w-full mt-6 transition duration-300 shadow-[0_4px_16px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              ¡Entendido, a trabajar!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
