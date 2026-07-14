import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Users,
  Award,
  Plus,
  Globe2,
  TreePine,
  Sprout,
  Leaf,
  MapPin,
  AlertTriangle,
  ChevronDown,
  Bell,
  Truck,
  Clock,
  Trophy,
  User,
  BarChart3,
  Trash2,
  Cloud,
  Activity,
  Crosshair,
  Compass,
  Loader2,
  Target,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import streetMapImg from "@/assets/street_map.png";

type Tab = "ranking" | "reportes" | "camiones";

export const Route = createFileRoute("/comunidad")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as Tab) || "ranking",
    };
  },
  head: () => ({
    meta: [
      { title: "Comunidad — Greenio" },
      {
        name: "description",
        content:
          "Únete a la comunidad Greenio: rankings, reportes ciudadanos y seguimiento de camiones de recojo en tiempo real.",
      },
    ],
  }),
  component: Comunidad,
});

function Comunidad() {
  const { tab: initialTab } = Route.useSearch();
  const [tab, setTab] = useState<Tab>(initialTab || "ranking");

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      
      {/* 1. Top Tabs (Fijo en la parte superior) */}
      <div className="pt-12 pb-2 px-4 border-b border-[var(--gn-border-str)] bg-[var(--gn-bg)] z-10 flex justify-between items-center shrink-0">
        {([
          ["ranking", "Ranking y Metas"],
          ["reportes", "Reportes"],
          ["camiones", "Camiones"],
        ] as [Tab, string][]).map(([key, label]) => {
          const active = tab === key;
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`text-xs font-semibold transition-colors pb-2 cursor-pointer ${
                active
                  ? "text-[var(--gn-primary)] font-bold border-b-2 border-[var(--gn-primary)]"
                  : "text-[var(--gn-sub)]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 2. Contenedor con Scroll */}
      {tab === "ranking" && <RankingTab />}
      {tab === "reportes" && <ReportesTab />}
      {tab === "camiones" && <CamionesTab />}
      <BottomNav />
    </div>
  );
}

function RankingTab() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      {/* 3. Tarjeta 1: Meta colectiva */}
      <section className="mt-6 mx-4 bg-gn-card border border-[var(--gn-border-str)] rounded-3xl p-6 flex flex-col items-center relative overflow-hidden shadow-lg">
        {/* Cabecera */}
        <h2 className="text-xl font-bold text-[var(--gn-base)] mb-6 text-center">Meta colectiva</h2>
        
        {/* Bloque Central (Totalmente alineado al centro) */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Nuevo Ícono: ecológico y visible (Mundo) */}
          <Globe2 className="w-16 h-16 text-[var(--gn-primary)] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse" />
          
          {/* Porcentaje gigante justo DEBAJO del nuevo ícono */}
          <p className="text-5xl font-black text-[var(--gn-base)] tracking-tight">62%</p>
          
          {/* Barra de progreso */}
          <div className="w-full max-w-xs h-3 bg-[var(--gn-surface)] rounded-full overflow-hidden relative border border-[var(--gn-bg)]">
            <div 
              className="h-full bg-[var(--gn-primary)] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
              style={{ width: "62%" }}
            />
          </div>
          
          {/* Texto descriptivo */}
          <p className="text-sm text-[var(--gn-base)] mt-1 text-center font-medium">CO2 evitado por todos:</p>
          {/* Cifra destacada */}
          <p className="text-2xl font-bold text-[var(--gn-primary)] text-center drop-shadow-[0_0_6px_rgba(16,185,129,0.2)]">90,620 kg</p>
        </div>

        {/* Pie de tarjeta */}
        <div className="w-full mt-6 pt-4 border-t border-[var(--gn-border-str)]/80 flex justify-between items-center">
          {/* Lado Izquierdo (Participantes) */}
          <div className="flex items-center gap-2">
            <Users className="text-[var(--gn-sub)] w-5 h-5 shrink-0" />
            <span className="text-xs text-[var(--gn-base)] font-medium">2,500 participantes</span>
          </div>
          {/* Lado Derecho (Faltante) */}
          <div className="flex items-center gap-2">
            <Leaf className="text-[var(--gn-primary)] w-4 h-4 shrink-0" />
            <span className="text-xs text-[var(--gn-base)] font-medium">Faltan 29,380 kg</span>
          </div>
        </div>
      </section>

      {/* 4. Tarjeta 2: Ranking Semanal */}
      <section className="mt-6 mx-4 bg-gn-card border border-[var(--gn-border-str)] rounded-3xl p-5 shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-4">Ranking Semanal</h2>
        
        {/* Lista del Podio */}
        <div className="flex flex-col gap-4">
          
          {/* Fila 1 (1er Lugar) */}
          <div className="flex items-center gap-4">
            <Trophy className="text-yellow-400 w-8 h-8 shrink-0 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
            <div className="bg-[var(--gn-surface)] p-2 rounded-full shrink-0 flex items-center justify-center w-9 h-9 border border-[var(--gn-border-str)]">
              <User size={18} className="text-[var(--gn-sub)]" />
            </div>
            <span className="text-sm font-bold text-[var(--gn-base)] flex-1 truncate">Mario</span>
            <span className="text-sm font-medium text-[var(--gn-primary)] shrink-0">12,150 kg</span>
          </div>

          {/* Fila 2 (2do Lugar) */}
          <div className="flex items-center gap-4">
            <Trophy className="text-[var(--gn-sub)] w-8 h-8 shrink-0 drop-shadow-[0_0_8px_rgba(203,213,225,0.4)]" />
            <div className="bg-[var(--gn-surface)] p-2 rounded-full shrink-0 flex items-center justify-center w-9 h-9 border border-[var(--gn-border-str)]">
              <User size={18} className="text-[var(--gn-sub)]" />
            </div>
            <span className="text-sm font-bold text-[var(--gn-base)] flex-1 truncate">Nicole</span>
            <span className="text-sm font-medium text-[var(--gn-primary)] shrink-0">10,430 kg</span>
          </div>

          {/* Fila 3 (3er Lugar) */}
          <div className="flex items-center gap-4">
            <Trophy className="text-[var(--gn-amber)] w-8 h-8 shrink-0 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)]" />
            <div className="bg-[var(--gn-surface)] p-2 rounded-full shrink-0 flex items-center justify-center w-9 h-9 border border-[var(--gn-border-str)]">
              <User size={18} className="text-[var(--gn-sub)]" />
            </div>
            <span className="text-sm font-bold text-[var(--gn-base)] flex-1 truncate">Renzo</span>
            <span className="text-sm font-medium text-[var(--gn-primary)] shrink-0">9,890 kg</span>
          </div>

        </div>
      </section>
    </div>
  );
}

function ReportesTab() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
      {/* Tarjeta 1: Mapa del Punto Crítico (h-48, rounded-2xl) */}
      <section className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-2xl relative h-48 overflow-hidden shadow-lg">
        {/* Imagen del mapa */}
        <img
          src={streetMapImg}
          alt="Mapa del punto crítico"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Filtro oscuro sutil */}
        <div className="absolute inset-0 bg-[var(--gn-bg)] backdrop-brightness-[0.8]" />

        {/* Pin de ubicación rojo en el centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-gn-surface animate-ping" />
            <div className="relative w-10 h-10 rounded-full bg-[#f87171] flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.7)] ring-2 ring-white/10">
              <MapPin size={22} className="text-[var(--gn-base)] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Tarjeta de Punto Crítico (JUSTO DEBAJO del mapa) */}
      <Link
        to="/reporte-detalle"
        className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 flex gap-4 items-center w-full mt-4 hover:border-[var(--gn-border-str)] transition duration-300 shadow-md"
      >
        {/* Izquierda: Imagen miniatura */}
        <div className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-[#f87171] shadow-inner">
          <Trash2 size={22} />
        </div>

        {/* Centro */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-[var(--gn-base)] leading-tight">
            Punto crítico: Acumulación de basura (Av. Arica)
          </p>
          <div className="flex items-center gap-1 mt-1 text-[var(--gn-base)]">
            <Users size={12} className="text-[var(--gn-sub)]" />
            <span className="text-[9px] font-semibold">Reportado por vecinos</span>
          </div>
        </div>

        {/* Derecha */}
        <AlertTriangle size={20} className="text-yellow-400 shrink-0 animate-pulse" />
      </Link>

      {/* Tarjeta 2: Impacto Colectivo */}
      <section className="mt-4 bg-gradient-to-br from-slate-900 to-slate-900/60 border border-[var(--gn-primary)]/10 rounded-3xl p-5 flex flex-col gap-4 shadow-lg">
        <h3 className="text-center text-xs font-bold uppercase tracking-wider text-[var(--gn-sub)]">
          Impacto colectivo
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Dato 1: Vecinos */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-[var(--gn-primary)]">
                <Users size={16} />
              </div>
              <span className="bg-[var(--gn-primary)] text-[var(--gn-primary)] text-[8px] font-black tracking-wide px-1.5 py-0.5 rounded-full border border-[var(--gn-primary)]/20 uppercase">
                Activa
              </span>
            </div>
            <p className="text-2xl font-black font-mono text-[var(--gn-base)] mt-3 leading-none tracking-tight">15</p>
            <p className="text-[10px] text-[var(--gn-base)] font-semibold mt-1">Vecinos activos</p>
          </div>

          {/* Dato 2: Toneladas */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-[var(--gn-primary)]">
                <BarChart3 size={16} className="animate-pulse" />
              </div>
            </div>
            <p className="text-2xl font-black font-mono text-[var(--gn-base)] mt-3 leading-none tracking-tight">5.2<span className="text-xs font-bold text-[var(--gn-primary)] ml-0.5">T</span></p>
            <p className="text-[10px] text-[var(--gn-base)] font-semibold mt-1">Basura recogida</p>
            {/* Pequeña barra CSS */}
            <div className="h-1 bg-[var(--gn-bg)] rounded-full mt-2 w-full overflow-hidden border border-[var(--gn-card)]">
              <div className="h-full bg-[var(--gn-primary)] rounded-full w-[70%] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          {/* Dato 3: CO2 Ahorrado */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-[var(--gn-primary)]">
                <Cloud size={16} />
              </div>
            </div>
            <p className="text-xl font-black font-mono text-[var(--gn-base)] mt-3 leading-none tracking-tight bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">1,240<span className="text-[10px] font-bold text-[var(--gn-primary)] ml-0.5">kg</span></p>
            <p className="text-[10px] text-[var(--gn-base)] font-semibold mt-1">CO₂ evitado en Callao</p>
          </div>

          {/* Dato 4: Puntos Resueltos */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-[var(--gn-primary)]">
                <Activity size={16} />
              </div>
            </div>
            <p className="text-2xl font-black font-mono text-[var(--gn-base)] mt-3 leading-none tracking-tight">18</p>
            <p className="text-[10px] text-[var(--gn-base)] font-semibold mt-1">Puntos resueltos</p>
          </div>
        </div>
      </section>

      {/* 1. Nueva Sección: Tu Participación */}
      <section className="mt-6">
        <h3 className="text-xs font-bold text-[var(--gn-sub)] uppercase tracking-wider mb-3 px-1">
          Tu Participación
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Tarjeta 1: Mis Chats */}
          <Link
            to="/reto-coordinacion"
            className="bg-gn-card hover:bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 relative transition-colors cursor-pointer"
          >
            <MessageCircle className="text-[var(--gn-primary)] w-6 h-6" />
            <span className="absolute top-3 right-8 w-2.5 h-2.5 bg-[#f87171] rounded-full animate-pulse" />
            <span className="text-sm font-bold text-[var(--gn-base)]">Mis Chats</span>
          </Link>

          {/* Tarjeta 2: Auditar */}
          <Link
            to="/reto-verificacion"
            className="bg-gn-card hover:bg-[var(--gn-surface)] border border-[var(--gn-amber)]/30 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <ShieldCheck className="text-[var(--gn-amber)] w-6 h-6" />
            <span className="text-sm font-bold text-[var(--gn-base)]">Auditar Retos</span>
            <span className="text-[10px] font-bold text-amber-950 bg-[var(--gn-amber)] px-2 py-0.5 rounded-full mt-1">
              1 pendiente
            </span>
          </Link>
        </div>
      </section>

      {/* 2. Reubicación de Botones Principales */}
      <div className="mt-6 flex flex-col gap-3">
        <Link
          to="/retos"
          className="bg-transparent border-2 border-[var(--gn-primary)] hover:bg-[var(--gn-primary)] text-[var(--gn-primary)] font-bold py-3.5 rounded-xl text-center text-sm transition duration-300 block w-full cursor-pointer"
        >
          Ver todos los retos activos
        </Link>
        <Link
          to="/reportar"
          className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-bold py-3.5 rounded-xl text-center text-sm transition duration-300 shadow-lg shadow-[var(--gn-primary)]-500/20 active:scale-[0.98] block w-full cursor-pointer"
        >
          Reportar nuevo punto crítico
        </Link>
      </div>
    </div>
  );
}

function CamionesTab() {
  const [selectedDistance, setSelectedDistance] = useState<"100m" | "300m" | "500m">("300m");
  const [alarmActive, setAlarmActive] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [showLocationToast, setShowLocationToast] = useState(false);

  const handleFixLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setIsLocating(false);
      setShowLocationToast(true);
      setTimeout(() => setShowLocationToast(false), 2000);
    }, 1000);
  };

  const handleToggleAlarm = () => {
    setAlarmActive(!alarmActive);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      {/* Filter */}
      <div className="px-4 py-3 shrink-0 z-10">
        <button className="w-full bg-gn-card border border-[var(--gn-border-str)] rounded-xl px-3 py-2.5 flex items-center justify-between text-sm shadow-md">
          <span className="text-[var(--gn-sub)]">
            Distrito: <span className="text-[var(--gn-base)] font-medium">Callao (07041)</span>
          </span>
          <ChevronDown size={16} className="text-[var(--gn-base)]" />
        </button>
      </div>

      {/* Map */}
      <div className="flex-1 bg-gn-card relative overflow-hidden">
        {/* streets grid */}
        <div className="absolute inset-0 bg-gn-card" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(71,85,105,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.6)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(71,85,105,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(71,85,105,0.8)_2px,transparent_2px)] bg-[size:96px_96px]" />

        {/* Mensaje Flotante Superior */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-gn-card backdrop-blur border border-[var(--gn-border-str)] text-xs px-4 py-2 rounded-full shadow-lg z-10 pointer-events-none whitespace-nowrap">
          Toca la ruta para fijar el punto de aviso
        </div>

        {/* route line (SVG) */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path
            d="M 5 80 L 25 80 L 25 50 L 55 50 L 55 25 L 90 25"
            stroke="rgb(16,185,129)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 4px rgb(16,185,129))" }}
          />
        </svg>

        {/* truck icon */}
        <div className="absolute transition-all duration-1000" style={{ left: "52%", top: "46%" }}>
          <div className="w-10 h-10 rounded-full bg-[var(--gn-primary)] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.7)] /50 relative">
            <span className="absolute inset-0 rounded-full bg-[var(--gn-primary)] animate-ping" />
            <Truck size={20} className="text-[var(--gn-bg)] relative z-10" />
          </div>
        </div>

        {/* User Location Pin (Home icon in blue/white on path) */}
        <div className={`absolute transition-all duration-500 ${isLocating ? "scale-125" : ""}`} style={{ left: "23%", top: "46%" }}>
          <div className="relative">
            <span className="absolute -inset-2 rounded-full bg-blue-500/20 animate-pulse" />
            <div className="relative w-8 h-8 rounded-full bg-gn-card border border-blue-500 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              <Home size={14} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Floating Locator Button (top right corner of map) */}
        <button
          type="button"
          onClick={handleFixLocation}
          disabled={isLocating}
          className="absolute top-4 right-4 bg-[var(--gn-surface)] border border-[var(--gn-border-str)] p-2 rounded-full shadow-lg hover:bg-[var(--gn-surface)] text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition-all duration-300 z-10 active:scale-95 disabled:opacity-50"
          title="Fijar mi ubicación"
        >
          {isLocating ? (
            <Loader2 size={16} className="animate-spin text-[var(--gn-primary)]" />
          ) : (
            <Target size={16} className="text-[var(--gn-primary)]" />
          )}
        </button>

        {/* Location Toast Notification */}
        {showLocationToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-gn-card border border-[var(--gn-border-str)] px-4 py-2 rounded-full z-30 shadow-2xl animate-in fade-in duration-200">
            <p className="text-[10px] text-[var(--gn-primary)] font-bold uppercase tracking-wider">
              Ubicación fijada correctamente
            </p>
          </div>
        )}

        {/* Radio de alcance (Geocerca) */}
        <div
          className={`bg-[var(--gn-amber)] border border-[var(--gn-amber)]/30 rounded-full animate-pulse absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            selectedDistance === "100m"
              ? "w-20 h-20"
              : selectedDistance === "300m"
              ? "w-32 h-32"
              : "w-44 h-44"
          }`}
        />

        {/* Pin de Alarma (El punto seleccionado por el usuario) */}
        <div className="bg-[var(--gn-amber)] p-2 rounded-full text-[var(--gn-bg)] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
          <Bell size={16} fill="currentColor" />
        </div>

        {/* Bottom sheet */}
        <div className="absolute bottom-16 w-full bg-gn-card border-t border-[var(--gn-border-str)] rounded-t-3xl p-6 z-20 shadow-[0_-8px_24px_rgba(0,0,0,0.5)]">
          {/* Indicator handle */}
          <div className="w-12 h-1 bg-[var(--gn-surface)] rounded-full mb-4 mx-auto" />

          {/* Fila de Estado */}
          <div className="flex justify-between items-center mb-4">
            {/* Izquierda */}
            <div className="flex items-center gap-2 text-sm text-[var(--gn-sub)]">
              <Clock size={16} className="text-[var(--gn-base)]" />
              <span>Horario: 20:00 - 22:00</span>
            </div>
            {/* Derecha */}
            <span className="text-sm font-bold text-[var(--gn-primary)]">Distancia al punto: 1.2 km</span>
          </div>

          {/* Configuración de Alarma */}
          <div className="mb-5">
            <p className="text-sm text-[var(--gn-base)] mt-4 mb-3">
              Sonar la alarma cuando el camión esté a:
            </p>
            {/* Selector de Distancia (Segmented Control) */}
            <div className="flex bg-[var(--gn-bg)] rounded-xl p-1 gap-1 w-full mb-5">
              {(["100m", "300m", "500m"] as const).map((dist) => {
                const active = selectedDistance === dist;
                return (
                  <button
                    key={dist}
                    type="button"
                    onClick={() => setSelectedDistance(dist)}
                    className={
                      active
                        ? "bg-[var(--gn-surface)] text-[var(--gn-base)] font-bold py-2 flex-1 text-center rounded-lg text-sm border border-[var(--gn-border-str)] shadow"
                        : "text-[var(--gn-base)] py-2 flex-1 text-center text-sm"
                    }
                  >
                    {dist}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botón de Acción Principal */}
          <button
            type="button"
            onClick={handleToggleAlarm}
            className={`text-[var(--gn-bg)] font-black py-4 rounded-xl w-full flex justify-center items-center gap-2 transition duration-300 active:scale-[0.98] shadow-lg ${
              alarmActive
                ? "bg-[var(--gn-primary)] hover:bg-[var(--gn-primary)] shadow-[var(--gn-primary)]-500/20"
                : "bg-[var(--gn-amber)] hover:bg-amber-600 shadow-amber-500/20"
            }`}
          >
            <Bell size={16} className={alarmActive ? "animate-bounce" : ""} />
            {alarmActive ? "DESACTIVAR ALARMA" : "FIJAR PUNTO Y ACTIVAR"}
          </button>
        </div>
      </div>
    </div>
  );
}

function NavLink({
  to,
  icon,
  label,
  active,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-[var(--gn-primary)]" : "text-[var(--gn-sub)]"
      }`}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
