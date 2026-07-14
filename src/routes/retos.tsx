import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MapPin,
  Users,
  Trash2,
  TreePine,
  ChevronRight,
  Sprout,
  Waves,
} from "lucide-react";

export const Route = createFileRoute("/retos")({
  head: () => ({
    meta: [
      { title: "Retos Activos — Greenio" },
      {
        name: "description",
        content: "Descubre y participa en los retos ecológicos activos en tu zona en Greenio.",
      },
    ],
  }),
  component: RetosActivos,
});

function RetosActivos() {
  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl">
      {/* 1. Header Superior */}
      <header className="pt-12 px-4 pb-4 border-b border-[var(--gn-border-str)] bg-gn-card flex items-center gap-3 shrink-0">
        <Link
          to="/comunidad"
          aria-label="Volver"
          className="bg-[var(--gn-surface)] hover:bg-[var(--gn-surface)] p-2 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="flex flex-col min-w-0">
          <h1 className="text-base font-bold text-[var(--gn-base)] truncate">
            Retos Activos en tu Zona
          </h1>
          <span className="text-[var(--gn-primary)] text-xs font-semibold">
            Callao District
          </span>
        </div>
      </header>

      {/* 2. Contenedor de Lista */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide pb-24">
        {/* 3. Tarjeta de Reto 1 (Urgente): Limpieza de Playa */}
        <section className="bg-gn-card border border-[#f87171]/50 rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="bg-gn-surface text-[#f87171] text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md border border-[#f87171]/30 uppercase">
              Urgente
            </span>
            <MapPin size={14} className="text-[#f87171]" />
          </div>

          <div className="flex gap-3 mt-3">
            {/* Izquierda: Imagen miniatura */}
            <div className="bg-[var(--gn-surface)] border border-slate-750 w-20 h-20 rounded-xl shrink-0 flex items-center justify-center text-[#f87171] shadow-inner">
              <Waves size={32} />
            </div>
            {/* Derecha */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-bold text-[var(--gn-base)] truncate">
                Limpieza de Playa
              </h2>
              <p className="text-xs text-[var(--gn-base)] mt-0.5">Av. Faucett</p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--gn-sub)] mt-2.5">
                <Users size={12} className="text-[var(--gn-sub)]" />
                <span className="font-medium text-[10px]">15 vecinos unidos</span>
              </div>
            </div>
          </div>

          {/* Progreso */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-[10px] text-[var(--gn-base)] mb-1.5 font-medium">
              <span>Progreso de limpieza</span>
              <span className="text-[#f87171] font-bold">60%</span>
            </div>
            <div className="h-2 bg-[var(--gn-bg)] rounded-full overflow-hidden border border-[var(--gn-card)]">
              <div
                className="h-full bg-[#f87171] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                style={{ width: "60%" }}
              />
            </div>
            <p className="text-[9px] text-[var(--gn-sub)] mt-1.5 text-right font-medium">
              Fin del reto: 3 días
            </p>
          </div>

          <Link
            to="/reto-detalle"
            search={{ id: "playa" }}
            className="block text-center bg-[var(--gn-surface)] hover:bg-slate-750 text-[var(--gn-base)] font-bold py-2.5 mt-3 rounded-lg w-full text-xs transition duration-300 active:scale-[0.98]"
          >
            Ver Detalles
          </Link>
        </section>

        {/* 4. Tarjeta de Reto 2 (En curso): Limpieza de Río */}
        <section className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="bg-[var(--gn-primary)] text-[var(--gn-primary)] text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md border border-[var(--gn-primary)]/20 uppercase">
              En curso
            </span>
            <MapPin size={14} className="text-[var(--gn-primary)]" />
          </div>

          <div className="flex gap-3 mt-3">
            {/* Izquierda: Imagen miniatura */}
            <div className="bg-[var(--gn-surface)] border border-slate-750 w-20 h-20 rounded-xl shrink-0 flex items-center justify-center text-[var(--gn-primary)] shadow-inner">
              <TreePine size={32} />
            </div>
            {/* Derecha */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-bold text-[var(--gn-base)] truncate">
                Limpieza de Ribera del Río Rímac
              </h2>
              <p className="text-xs text-[var(--gn-base)] mt-0.5">Puente Huánuco</p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--gn-sub)] mt-2.5">
                <Users size={12} className="text-[var(--gn-sub)]" />
                <span className="font-medium text-[10px]">22 vecinos unidos</span>
              </div>
            </div>
          </div>

          {/* Progreso */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-[10px] text-[var(--gn-base)] mb-1.5 font-medium">
              <span>Progreso de limpieza</span>
              <span className="text-[var(--gn-primary)] font-bold">75%</span>
            </div>
            <div className="h-2 bg-[var(--gn-bg)] rounded-full overflow-hidden border border-[var(--gn-card)]">
              <div
                className="h-full bg-[var(--gn-primary)] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                style={{ width: "75%" }}
              />
            </div>
            <p className="text-[9px] text-[var(--gn-sub)] mt-1.5 text-right font-medium">
              Fin del reto: 5 días
            </p>
          </div>

          <Link
            to="/reto-detalle"
            search={{ id: "rio" }}
            className="block text-center bg-[var(--gn-surface)] hover:bg-slate-750 text-[var(--gn-base)] font-bold py-2.5 mt-3 rounded-lg w-full text-xs transition duration-300 active:scale-[0.98]"
          >
            Ver Detalles
          </Link>
        </section>

        {/* 5. Tarjeta de Reto 3 (Nuevo/Próximo): Reforestación Urbana */}
        <section className="bg-gn-card border border-blue-500/25 rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="bg-blue-500/20 text-blue-400 text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md border border-blue-500/20 uppercase">
              Próximo
            </span>
            <MapPin size={14} className="text-blue-400" />
          </div>

          <div className="flex gap-3 mt-3">
            {/* Izquierda: Imagen miniatura */}
            <div className="bg-[var(--gn-surface)] border border-slate-750 w-20 h-20 rounded-xl shrink-0 flex items-center justify-center text-blue-400 shadow-inner">
              <Sprout size={32} />
            </div>
            {/* Derecha */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-bold text-[var(--gn-base)] truncate">
                Reforestación Urbana en Callao
              </h2>
              <p className="text-xs text-[var(--gn-base)] mt-0.5">Av. Principales del Callao</p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--gn-sub)] mt-2.5">
                <Users size={12} className="text-[var(--gn-sub)]" />
                <span className="font-medium text-[10px]">35 vecinos unidos</span>
              </div>
            </div>
          </div>

          {/* Progreso */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-[10px] text-[var(--gn-base)] mb-1.5 font-medium">
              <span>Progreso de plantación</span>
              <span className="text-blue-400 font-bold">0%</span>
            </div>
            <div className="h-2 bg-[var(--gn-bg)] rounded-full overflow-hidden border border-[var(--gn-card)]">
              <div
                className="h-full bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                style={{ width: "2%" }} // 2% visual mínimo
              />
            </div>
            <p className="text-[9px] text-[var(--gn-sub)] mt-1.5 text-right font-medium">
              Faltan 8 días
            </p>
          </div>

          <Link
            to="/reto-detalle"
            search={{ id: "reforestacion" }}
            className="block text-center bg-[var(--gn-surface)] hover:bg-slate-750 text-[var(--gn-base)] font-bold py-2.5 mt-3 rounded-lg w-full text-xs transition duration-300 active:scale-[0.98]"
          >
            Ver Detalles
          </Link>
        </section>

        {/* 6. Tarjeta Inferior de Ayuda */}
        <Link
          to="/reportar"
          className="mt-2 bg-[var(--gn-bg)] border border-dashed border-[var(--gn-border-str)] hover:border-[var(--gn-primary-dk)] transition-colors rounded-xl p-4 flex justify-between items-center"
        >
          <p className="text-xs text-[var(--gn-base)] leading-snug max-w-[270px]">
            ¿No encuentras un reto? Reporta un nuevo punto crítico...
          </p>
          <ChevronRight size={16} className="text-[var(--gn-sub)] shrink-0" />
        </Link>
      </main>
    </div>
  );
}
