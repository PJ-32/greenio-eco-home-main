import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      
      {/* 1. Top Tabs (Segmented Control Rediseñado - Heurística #8) */}
      <div className="pt-12 pb-3 px-4 bg-[var(--gn-bg)] border-b border-[var(--gn-border)] z-10 shrink-0 shadow-sm">
        <div className="flex bg-[var(--gn-surface)] border border-[var(--gn-border-str)]/50 rounded-2xl p-1 gap-1 w-full shadow-inner">
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
                className={`flex-1 text-center py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  active
                    ? "bg-[var(--gn-primary)] text-white shadow-md scale-[1.01]"
                    : "text-[var(--gn-sub)] hover:bg-[var(--gn-card)]/50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
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
      <section className="bg-[#eef6f2] border border-[var(--gn-border-str)] rounded-2xl relative h-48 overflow-hidden shadow-lg select-none">
        {/* Mapa Vectorial Simplificado en SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-85" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice">
          {/* Manzanas (Blocks) en pasteles y verdes */}
          <rect x="10" y="10" width="80" height="40" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />
          <rect x="100" y="10" width="100" height="40" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />
          <rect x="210" y="10" width="80" height="40" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />

          <rect x="10" y="60" width="80" height="40" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />
          <rect x="100" y="60" width="100" height="40" rx="6" fill="#d1eed9" stroke="#9adab1" strokeWidth="1.5" /> {/* Parque central */}
          <rect x="210" y="60" width="80" height="40" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />

          <rect x="10" y="110" width="120" height="30" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />
          <rect x="140" y="110" width="150" height="30" rx="6" fill="#f4faf6" stroke="#d5e8dc" strokeWidth="1.5" />

          {/* Avenidas / Calles */}
          <line x1="0" y1="55" x2="300" y2="55" stroke="#e1f1e7" strokeWidth="10" />
          <line x1="0" y1="105" x2="300" y2="105" stroke="#e1f1e7" strokeWidth="10" />
          <line x1="95" y1="0" x2="95" y2="150" stroke="#e1f1e7" strokeWidth="10" />
          <line x1="205" y1="0" x2="205" y2="150" stroke="#e1f1e7" strokeWidth="10" />

          {/* Nombre de Calles */}
          <text x="35" y="58" fill="#44735c" className="text-[6px] font-bold tracking-wide uppercase opacity-70">Av. Argentina</text>
          <text x="225" y="108" fill="#44735c" className="text-[6px] font-bold tracking-wide uppercase opacity-70">Ca. Los Diamantes</text>
        </svg>

        {/* Pin de ubicación rojo en el centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-[#f87171] opacity-35 animate-ping" />
            <div className="relative w-10 h-10 rounded-full bg-[#f87171] flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.7)] ring-2 ring-white/10">
              <MapPin size={22} className="text-white animate-bounce" />
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
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-white">
                <Users size={16} />
              </div>
              <span className="bg-emerald-50 text-emerald-800 text-[8px] font-black tracking-wide px-1.5 py-0.5 rounded-full border border-emerald-200/50 uppercase">
                Activa
              </span>
            </div>
            <p className="text-2xl font-black font-mono text-slate-900 mt-3 leading-none tracking-tight">15</p>
            <p className="text-[10px] text-slate-600 font-semibold mt-1">Vecinos activos</p>
          </div>

          {/* Dato 2: Toneladas */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-white">
                <BarChart3 size={16} className="animate-pulse" />
              </div>
            </div>
            <p className="text-2xl font-black font-mono text-slate-900 mt-3 leading-none tracking-tight">5.2<span className="text-xs font-bold text-slate-700 ml-0.5">T</span></p>
            <p className="text-[10px] text-slate-600 font-semibold mt-1">Basura recogida</p>
            {/* Pequeña barra CSS */}
            <div className="h-1 bg-[var(--gn-bg)] rounded-full mt-2 w-full overflow-hidden border border-[var(--gn-card)]">
              <div className="h-full bg-[var(--gn-primary)] rounded-full w-[70%] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          {/* Dato 3: CO2 Ahorrado */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-white">
                <Cloud size={16} />
              </div>
            </div>
            <p className="text-xl font-black font-mono text-slate-900 mt-3 leading-none tracking-tight">1,240<span className="text-[10px] font-bold text-slate-700 ml-0.5">kg</span></p>
            <p className="text-[10px] text-slate-600 font-semibold mt-1">CO₂ evitado en Callao</p>
          </div>

          {/* Dato 4: Puntos Resueltos */}
          <div className="flex flex-col bg-[var(--gn-bg)] border border-[var(--gn-border-str)]/60 rounded-2xl p-3.5 hover:scale-[1.03] transition-transform duration-300 shadow-inner">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[var(--gn-primary)] rounded-lg text-white">
                <Activity size={16} />
              </div>
            </div>
            <p className="text-2xl font-black font-mono text-slate-900 mt-3 leading-none tracking-tight">18</p>
            <p className="text-[10px] text-slate-600 font-semibold mt-1">Puntos resueltos</p>
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
          className="bg-transparent border-2 border-[var(--gn-primary)] hover:bg-[var(--gn-primary)] text-[var(--gn-primary)] hover:text-white font-bold py-3.5 rounded-xl text-center text-sm transition duration-300 block w-full cursor-pointer"
        >
          Ver todos los retos activos
        </Link>
        <Link
          to="/reportar"
          className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-white font-bold py-3.5 rounded-xl text-center text-sm transition duration-300 shadow-lg shadow-[var(--gn-primary)]-500/20 active:scale-[0.98] block w-full cursor-pointer"
        >
          Reportar nuevo punto crítico
        </Link>
      </div>
    </div>
  );
}

function CamionesTab() {
  const casas = [
    { value: "diamantes_23", label: "Calle Los Diamantes 23", x: 290, y: 300, labelShort: "Diamantes 23" },
    { value: "sol_777", label: "Pasaje El Sol 777", x: 150, y: 115, labelShort: "Pje. El Sol 777" },
    { value: "ciro_104", label: "Av. Ciro Alegría 104", x: 175, y: 215, labelShort: "Ciro Alegría 104" },
  ];

  const [casaSeleccionada, setCasaSeleccionada] = useState("");
  const [selectedDistance, setSelectedDistance] = useState<"100m" | "300m" | "500m">("300m");
  const [alarmActive, setAlarmActive] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [showLocationToast, setShowLocationToast] = useState(false);

  // Posición del Pin de Alarma (por defecto en Calle Los Diamantes / centro inferior)
  const [alarmPos, setAlarmPos] = useState({ x: 200, y: 338 });

  // --- Drag & Pan del Mapa ---
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  // Referencia para saber si el gesto fue un arrastre real (para no mover el pin de alarma al hacer pan)
  const hasDraggedRef = useRef(false);

  // --- Tarjeta Colapsable (Bottom Sheet) ---
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Manzanas del mapa vectorial
  const blocks = [
    // Fila 1 (Superior, arriba de Av. Argentina)
    { x: 10, y: 10, w: 80, h: 50, name: "Minka" },
    { x: 100, y: 10, w: 120, h: 50, name: "Almacenes" },
    { x: 230, y: 10, w: 160, h: 50, name: "Zona Ind." },
    
    // Fila 2 (Entre Av. Argentina y Pje. El Sol)
    { x: 10, y: 85, w: 80, h: 60, name: "Residencial A" },
    { x: 100, y: 85, w: 100, h: 60, name: "Sector B-1" },
    { x: 210, y: 85, w: 180, h: 60, name: "C.C. Bellavista" },
    
    // Fila 3 (Entre Pje. El Sol y Calle José Eguren)
    { x: 10, y: 165, w: 80, h: 70, name: "Sector B-2" },
    { x: 100, y: 165, w: 100, h: 70, name: "Colegio Callao" },
    { x: 210, y: 165, w: 180, h: 70, isPark: true, name: "Parque Santa Teresita" },
    
    // Fila 4 (Entre Calle José Eguren y Calle Los Diamantes)
    { x: 10, y: 255, w: 80, h: 70, name: "Residencial C" },
    { x: 100, y: 255, w: 100, h: 70, name: "Mercado" },
    { x: 210, y: 255, w: 180, h: 70, name: "Pasaje Los Olivos" }
  ];

  // Nodos del recorrido del camión recolector
  const routePoints = [
    { x: 205, y: 0 },
    { x: 205, y: 152 }, // Baja por Ciro Alegría
    { x: 90, y: 152 },  // Dobla a la izquierda en Pje. El Sol
    { x: 90, y: 338 },  // Baja por Ricardo Palma
    { x: 300, y: 338 }, // Dobla a la derecha en Calle Los Diamantes (pasa por la casa)
    { x: 390, y: 338 }  // Sigue por Calle Los Diamantes hasta salir del mapa
  ];

  const truckPos = { x: 90, y: 220 };

  // Configuración de la geocerca: mapeo de distancia en metros a unidades SVG
  const distanceConfig = {
    "100m": { radiusMeters: 100, radiusUnits: 25 },
    "300m": { radiusMeters: 300, radiusUnits: 55 },
    "500m": { radiusMeters: 500, radiusUnits: 85 },
  };

  // Cálculo de distancia euclidiana entre el camión y el Pin de Alarma
  // (Asumiendo que 1 unidad de SVG son 3 metros para ajustar escala del mapa)
  const dx = truckPos.x - alarmPos.x;
  const dy = truckPos.y - alarmPos.y;
  const distanceInMeters = Math.sqrt(dx * dx + dy * dy) * 3;

  const currentCasa = casas.find((c) => c.value === casaSeleccionada) || casas[0];

  // Vista dinámica del mapa (efecto de centrado y zoom + pan por arrastre - Heurísticas #2 y #7)
  const zoomSize = 400; // zoom-out completo para ver todo el cuadrante del distrito
  const basePanX = Math.max(0, Math.min(400 - zoomSize, currentCasa.x - zoomSize / 2));
  const basePanY = Math.max(0, Math.min(500 - zoomSize * 1.25, currentCasa.y - zoomSize * 0.5));
  // panOffset acumula el desplazamiento por arrastre del usuario
  const viewBoxX = Math.max(-200, Math.min(400, basePanX - panOffset.x));
  const viewBoxY = Math.max(-200, Math.min(500, basePanY - panOffset.y));
  const currentViewBox = `${viewBoxX} ${viewBoxY} ${zoomSize} ${zoomSize * 1.25}`;

  // Estado de alerta activada
  const isInsideGeofence = distanceInMeters <= distanceConfig[selectedDistance].radiusMeters;
  const alarmTriggered = alarmActive && isInsideGeofence;

  const handleFixLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setIsLocating(false);
      setShowLocationToast(true);
      // Mover la casa de vuelta a su coordenada predeterminada para el usuario
      setCasaSeleccionada("diamantes_23");
      setTimeout(() => setShowLocationToast(false), 2500);
    }, 1000);
  };

  const handleToggleAlarm = () => {
    setAlarmActive(!alarmActive);
  };

  // Mapear clic del mouse respetando la vista de zoom activa del viewBox
  // Solo reubica la alarma si no hubo arrastre real
  const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (hasDraggedRef.current) return; // evitar clic accidental tras arrastrar
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clickXPercent = (e.clientX - rect.left) / rect.width;
    const clickYPercent = (e.clientY - rect.top) / rect.height;
    const x = viewBoxX + clickXPercent * zoomSize;
    const y = viewBoxY + clickYPercent * (zoomSize * 1.25);
    setAlarmPos({ x: Math.round(x), y: Math.round(y) });
  };

  // --- Handlers de Drag & Pan (Mouse) ---
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsDragging(true);
    hasDraggedRef.current = false;
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDraggedRef.current = true;
    // Convertir px de pantalla a unidades SVG (el viewBox tiene 400 unidades en ~screenWidth px)
    const svgEl = e.currentTarget;
    const rect = svgEl.getBoundingClientRect();
    const scaleX = zoomSize / rect.width;
    const scaleY = (zoomSize * 1.25) / rect.height;
    setPanOffset((prev) => ({
      x: prev.x + dx * scaleX,
      y: prev.y + dy * scaleY,
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // --- Handlers de Drag & Pan (Touch) ---
  const handleTouchStart = (e: React.TouchEvent<SVGSVGElement>) => {
    const touch = e.touches[0];
    setIsDragging(true);
    hasDraggedRef.current = false;
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragStart.x;
    const dy = touch.clientY - dragStart.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDraggedRef.current = true;
    const svgEl = e.currentTarget;
    const rect = svgEl.getBoundingClientRect();
    const scaleX = zoomSize / rect.width;
    const scaleY = (zoomSize * 1.25) / rect.height;
    setPanOffset((prev) => ({
      x: prev.x + dx * scaleX,
      y: prev.y + dy * scaleY,
    }));
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      {/* 1. Selector de Distrito Superior */}
      <div className="px-4 py-2.5 shrink-0 z-10 bg-[var(--gn-bg)]/90 backdrop-blur-sm border-b border-[var(--gn-border)] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">Distrito Activo</span>
          <span className="text-sm font-black text-[var(--gn-base)]">Callao (07041)</span>
        </div>
        <button className="bg-gn-surface hover:bg-[var(--gn-border)] border border-[var(--gn-border-str)] rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-[var(--gn-base)] font-bold transition-all">
          <span>Cambiar</span>
          <ChevronDown size={14} />
        </button>
      </div>

      {/* 2. Mapa Vectorial Simplificado */}
      <div className="flex-1 bg-[#eef6f2] relative overflow-hidden">
        {/* Contenedor del Mapa en SVG - con soporte de Drag & Pan */}
        <svg
          className={`absolute inset-0 w-full h-full select-none transition-[viewBox] duration-300 ease-out ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          viewBox={currentViewBox}
          preserveAspectRatio="xMidYMid slice"
          onClick={handleMapClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Manzanas (Blocks) */}
          {blocks.map((b, index) => (
            <g key={index}>
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx={6}
                fill={b.isPark ? "#c8ebd5" : "#f5fbf8"}
                stroke={b.isPark ? "#7dc4a0" : "#d1e5db"}
                strokeWidth={1}
                className="transition-colors duration-300"
              />
              <text
                x={b.x + b.w / 2}
                y={b.y + b.h / 2 + 3}
                textAnchor="middle"
                fill="#5a8f74"
                className="text-[9px] font-bold pointer-events-none opacity-85 select-none"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {b.name}
              </text>
            </g>
          ))}

          {/* Rótulos de Calles / Avenidas */}
          {/* Av. Argentina */}
          <text x="200" y="73" textAnchor="middle" fill="#2d6a4a" className="text-[9px] font-black uppercase tracking-widest pointer-events-none select-none opacity-80">Av. Argentina</text>
          
          {/* Pasaje El Sol */}
          <text x="150" y="154" textAnchor="middle" fill="#2d6a4a" className="text-[8px] font-bold pointer-events-none select-none opacity-75">Pje. El Sol</text>
          
          {/* Calle José Eguren */}
          <text x="150" y="247" textAnchor="middle" fill="#2d6a4a" className="text-[8px] font-bold pointer-events-none select-none opacity-75">Ca. José Eguren</text>

          {/* Calle Los Diamantes */}
          <text x="310" y="340" textAnchor="middle" fill="#2d6a4a" className="text-[9px] font-black uppercase pointer-events-none select-none opacity-80">Calle Los Diamantes</text>

          {/* Calles Verticales (Rotadas) */}
          <text x="92" y="290" transform="rotate(-90 92 290)" textAnchor="middle" fill="#2d6a4a" className="text-[8px] font-bold pointer-events-none select-none opacity-75">Ca. Ricardo Palma</text>
          
          <text x="207" y="295" transform="rotate(-90 207 295)" textAnchor="middle" fill="#2d6a4a" className="text-[9px] font-black uppercase tracking-wider pointer-events-none select-none opacity-80">Av. Ciro Alegría</text>

          {/* Ruta Verde del Camión Recolector */}
          <path
            d={`M ${routePoints.map(p => `${p.x} ${p.y}`).join(' L ')}`}
            stroke="#22c55e"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90 drop-shadow-[0_0_4px_rgba(34,197,94,0.6)]"
          />

          {/* Radio de la Geocerca (Alrededor del Pin de Alarma) */}
          {alarmActive && (
            <circle
              cx={alarmPos.x}
              cy={alarmPos.y}
              r={distanceConfig[selectedDistance].radiusUnits}
              fill="rgba(249, 115, 22, 0.12)"
              stroke="rgba(249, 115, 22, 0.45)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
              className={`transition-all duration-300 ${alarmTriggered ? "animate-pulse fill-orange-500/20 stroke-orange-600" : ""}`}
            />
          )}

          {/* HOGARES ESTÁTICOS EN EL MAPA (Heurística #2) */}
          {casaSeleccionada && casas.filter(c => c.value === casaSeleccionada).map((c) => {
            return (
              <g key={c.value}>
                <foreignObject x={c.x - 16} y={c.y - 22} width={32} height={40}>
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 bg-blue-600 scale-110 shadow-blue-500/30">
                      <Home size={12} className="text-white" />
                    </div>
                    <div className="mt-0.5 text-[7px] font-black px-1 py-0.2 rounded shadow-sm whitespace-nowrap pointer-events-none bg-blue-900 text-white">
                      Mi Hogar
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* PIN DE ALARMA (Naranja) */}
          <g>
            <foreignObject x={alarmPos.x - 16} y={alarmPos.y - 16} width={32} height={32}>
              <div className="flex items-center justify-center h-full pointer-events-none">
                <div 
                  className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center shadow-md transition-all duration-300 ${
                    alarmActive 
                      ? "bg-orange-500 scale-105 shadow-orange-500/20" 
                      : "bg-orange-400 opacity-90"
                  }`}
                >
                  <Bell size={13} className="text-white" fill="currentColor" />
                </div>
              </div>
            </foreignObject>
          </g>

          {/* PIN DE CAMIÓN (Verde GPS) */}
          <g>
            <foreignObject x={truckPos.x - 18} y={truckPos.y - 18} width={36} height={36}>
              <div className="flex items-center justify-center h-full pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[var(--gn-primary)] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(26,148,87,0.5)]">
                  <Truck size={14} className="text-white" />
                </div>
              </div>
            </foreignObject>
          </g>
        </svg>

        {/* Mensaje Informativo de Clic en el Mapa */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gn-card/90 backdrop-blur border border-[var(--gn-border-str)] text-[10px] font-bold text-[var(--gn-base)] px-4 py-1.5 rounded-full shadow-md z-10 pointer-events-none whitespace-nowrap uppercase tracking-wide">
          🔔 Toca el mapa para reubicar el punto de alarma
        </div>

        {/* Botón Flotante Localizador */}
        <button
          type="button"
          onClick={handleFixLocation}
          disabled={isLocating}
          className="absolute top-16 right-4 bg-gn-card border border-[var(--gn-border-str)] p-2.5 rounded-full shadow-lg hover:bg-gn-surface text-[var(--gn-primary)] hover:scale-105 transition-all duration-200 z-10 active:scale-95 disabled:opacity-50"
          title="Fijar mi ubicación en Diamantes 23"
        >
          {isLocating ? (
            <Loader2 size={16} className="animate-spin text-[var(--gn-primary)]" />
          ) : (
            <Target size={16} className="text-[var(--gn-primary)]" />
          )}
        </button>

        {/* Notificación Emergente de Ubicación Fijada */}
        {showLocationToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-[var(--gn-primary)] text-white border border-[var(--gn-primary-dk)] px-4 py-2 rounded-full z-30 shadow-2xl animate-in fade-in zoom-in duration-200 flex items-center gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider">
              Ubicación establecida en Diamantes 23
            </span>
          </div>
        )}

        {/* BANNER DE NOTIFICACIÓN DE GEOCERCA DISPARADA */}
        {alarmTriggered && (
          <div className="absolute inset-x-4 top-14 bg-amber-50 border-2 border-orange-500 rounded-2xl p-4 shadow-2xl z-30 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex gap-3">
              <div className="bg-orange-500 text-white p-2 rounded-xl shrink-0 flex items-center justify-center w-10 h-10 shadow">
                <Bell size={20} className="animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-black text-orange-950 uppercase tracking-wide flex items-center gap-1">
                  <span>🚨 ¡Llegada Inminente!</span>
                </h4>
                <p className="text-[11px] text-orange-900 mt-1 leading-snug font-semibold">
                  El camión recolector ingresó a tu radio de {selectedDistance}. Está a <span className="font-black text-orange-600 font-mono">{Math.round(distanceInMeters)}m</span> de tu alarma. ¡Es hora de sacar la basura!
                </p>
                <div className="flex gap-2 mt-2.5">
                  <button
                    type="button"
                    onClick={() => setAlarmActive(false)}
                    className="bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-black px-3 py-1.5 rounded-lg transition-all active:scale-95"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Panel de Control - Bottom Sheet Colapsable (Heurística #7 y #8) */}
        <div
          className={`absolute bottom-16 w-full bg-gn-card border-t border-[var(--gn-border-str)] rounded-t-3xl z-20 shadow-[0_-8px_24px_rgba(13,61,34,0.15)] flex flex-col transition-transform duration-300 ease-in-out ${
            isCollapsed ? "translate-y-[calc(100%-48px)]" : "translate-y-0"
          }`}
        >
          {/* Manija táctil – clic para colapsar/expandir */}
          <button
            type="button"
            aria-label={isCollapsed ? "Expandir panel de control" : "Minimizar panel de control"}
            onClick={() => setIsCollapsed((v) => !v)}
            className="w-full flex flex-col items-center pt-3 pb-2 gap-1.5 cursor-pointer focus:outline-none"
          >
            <div className="w-12 h-1.5 bg-[var(--gn-border-str)] rounded-full" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--gn-sub)]">
              {isCollapsed ? "▲ Mostrar panel" : "▼ Minimizar panel"}
            </span>
          </button>
          <div className={`flex flex-col gap-3 px-5 pb-5 overflow-hidden transition-all duration-300 ${
            isCollapsed ? "max-h-0 py-0" : "max-h-[600px]"
          }`}>

          {/* Grilla de Tarjetas Inferiores */}
          <div className="grid grid-cols-2 gap-3">
            {/* Tarjeta 1: Mi Ubicación (Selector) */}
            <div className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--gn-sub)] uppercase tracking-wider">
                <MapPin size={13} className="text-blue-500 shrink-0" />
                <span>Mi Hogar</span>
              </div>
              <Select value={casaSeleccionada || undefined} onValueChange={(val) => { setCasaSeleccionada(val === "none" ? "" : val); setPanOffset({ x: 0, y: 0 }); }}>
                <SelectTrigger className="w-full h-8 bg-[var(--gn-card)] border-[var(--gn-border)] text-xs text-[var(--gn-base)] font-bold rounded-lg px-2 shadow-inner">
                  <SelectValue placeholder="Selecciona tu hogar" />
                </SelectTrigger>
                <SelectContent className="bg-[var(--gn-card)] border-[var(--gn-border-str)] text-[var(--gn-base)]">
                  <SelectItem value="none" className="text-xs font-semibold focus:bg-[var(--gn-surface)] cursor-pointer text-slate-400">
                    Deseleccionar hogar
                  </SelectItem>
                  {casas.map((c) => (
                    <SelectItem key={c.value} value={c.value} className="text-xs font-semibold focus:bg-[var(--gn-surface)] cursor-pointer">
                      {c.labelShort}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tarjeta 2: Horario de Recojo */}
            <div className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--gn-sub)] uppercase tracking-wider">
                <Clock size={13} className="text-[var(--gn-primary)] shrink-0" />
                <span>Horario Recojo</span>
              </div>
              <div className="text-xs font-black text-[var(--gn-base)] py-1 flex-1 flex items-center">
                20:00 - 22:00
              </div>
            </div>

            {/* Tarjeta 3: Configuración de Geocerca */}
            <div className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col gap-1.5 col-span-2 shadow-sm">
              <div className="flex justify-between items-center text-[10px] font-bold text-[var(--gn-sub)] uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Bell size={13} className="text-[var(--gn-amber)] shrink-0" />
                  <span>Radio de Aviso Alarma</span>
                </div>
                <span className="text-[9px] font-extrabold bg-[var(--gn-amber)]/20 text-[var(--gn-amber)] px-1.5 py-0.5 rounded tracking-normal">
                  {selectedDistance}
                </span>
              </div>
              {/* Chips de Selección de Distancia */}
              <div className="flex bg-[var(--gn-card)] border border-[var(--gn-border)] rounded-xl p-0.5 gap-1 mt-1">
                {(["100m", "300m", "500m"] as const).map((dist) => {
                  const active = selectedDistance === dist;
                  return (
                    <button
                      key={dist}
                      type="button"
                      onClick={() => setSelectedDistance(dist)}
                      className={`py-1.5 flex-1 text-center rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                        active
                          ? "bg-[var(--gn-primary)] text-white shadow border border-[var(--gn-primary-dk)]"
                          : "text-[var(--gn-sub)] hover:bg-[var(--gn-surface)]"
                      }`}
                    >
                      {dist}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 5. Botón de Acción Principal (Toggle de Alarma) */}
          <button
            type="button"
            onClick={handleToggleAlarm}
            className={`text-white font-black py-3.5 rounded-xl w-full flex justify-center items-center gap-2 transition-all duration-300 active:scale-[0.98] shadow-md cursor-pointer ${
              alarmActive
                ? "bg-[var(--gn-coral)] hover:bg-orange-700 shadow-orange-500/20"
                : "bg-[var(--gn-primary)] hover:bg-[var(--gn-primary-dk)] shadow-emerald-500/20"
            }`}
          >
            <Bell size={16} className={alarmActive ? "animate-bounce" : ""} />
            <span className="text-sm font-black uppercase tracking-wider">
              {alarmActive ? "CANCELAR ALERTA ACTIVA" : "FIJAR PUNTO Y ACTIVAR"}
            </span>
          </button>
          </div>
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
