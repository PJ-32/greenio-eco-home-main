import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Home as HomeIcon,
  Droplets,
  Zap,
  ShoppingBag,
  Check,
  AlertCircle,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/habito")({
  head: () => ({
    meta: [
      { title: "Registro de Hábitos — Greenio" },
      {
        name: "description",
        content: "Registra tus hábitos diarios sostenibles y gana GreenPoints en Greenio.",
      },
    ],
  }),
  component: RegistroHabito,
});

type CategoriaId = "hogar" | "agua" | "energia" | "consumo";
type AccionId = "luces" | "agua" | "standby";

function RegistroHabito() {
  const [categoria, setCategoria] = useState<CategoriaId>("hogar");
  const [accion, setAccion] = useState<AccionId>("luces");

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      {/* Contenedor Principal con Scrollbar Oculta */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-6 pb-24">
        {/* 1. Header */}
        <header className="flex justify-start items-center gap-4">
          <Link
            to="/registra"
            aria-label="Atrás"
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition"
          >
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-xl font-bold">Registro de hábitos</h1>
        </header>

        {/* 2. Paso 1: Categoría */}
        <section className="mt-6">
          <h2 className="text-xs font-black uppercase tracking-wider text-[var(--gn-base)] mb-3">
            Paso 1: Categoría
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {/* Hogar Sostenible */}
            <button
              onClick={() => setCategoria("hogar")}
              className={`rounded-2xl p-2.5 flex flex-col items-center gap-1.5 text-center transition border ${
                categoria === "hogar"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  : "bg-gn-card border-[var(--gn-border-str)]/80 text-[var(--gn-base)] hover:border-[var(--gn-border-str)]"
              }`}
            >
              <HomeIcon size={20} className={categoria === "hogar" ? "text-[var(--gn-primary)]" : "text-[var(--gn-base)]"} />
              <span className="text-[9px] leading-tight font-medium">Hogar</span>
            </button>

            {/* Cuidado del Agua */}
            <button
              onClick={() => setCategoria("agua")}
              className={`rounded-2xl p-2.5 flex flex-col items-center gap-1.5 text-center transition border ${
                categoria === "agua"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  : "bg-gn-card border-[var(--gn-border-str)]/80 text-[var(--gn-base)] hover:border-[var(--gn-border-str)]"
              }`}
            >
              <Droplets size={20} className={categoria === "agua" ? "text-[var(--gn-primary)]" : "text-[var(--gn-base)]"} />
              <span className="text-[9px] leading-tight font-medium">Agua</span>
            </button>

            {/* Energía */}
            <button
              onClick={() => setCategoria("energia")}
              className={`rounded-2xl p-2.5 flex flex-col items-center gap-1.5 text-center transition border ${
                categoria === "energia"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  : "bg-gn-card border-[var(--gn-border-str)]/80 text-[var(--gn-base)] hover:border-[var(--gn-border-str)]"
              }`}
            >
              <Zap size={20} className={categoria === "energia" ? "text-[var(--gn-primary)]" : "text-[var(--gn-base)]"} />
              <span className="text-[9px] leading-tight font-medium">Energía</span>
            </button>

            {/* Consumo */}
            <button
              onClick={() => setCategoria("consumo")}
              className={`rounded-2xl p-2.5 flex flex-col items-center gap-1.5 text-center transition border ${
                categoria === "consumo"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] font-bold shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                  : "bg-gn-card border-[var(--gn-border-str)]/80 text-[var(--gn-base)] hover:border-[var(--gn-border-str)]"
              }`}
            >
              <ShoppingBag size={20} className={categoria === "consumo" ? "text-[var(--gn-primary)]" : "text-[var(--gn-base)]"} />
              <span className="text-[9px] leading-tight font-medium">Consumo</span>
            </button>
          </div>
        </section>

        {/* 3. Paso 2: Acción */}
        <section className="mt-6">
          <h2 className="text-xs font-black uppercase tracking-wider text-[var(--gn-base)] mb-3">
            Paso 2: Acción
          </h2>
          <div className="bg-gn-card rounded-2xl p-2 border border-[var(--gn-border-str)]/80 flex flex-col gap-1">
            {/* Opción 1 */}
            <button
              onClick={() => setAccion("luces")}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition border ${
                accion === "luces"
                  ? "bg-[var(--gn-primary)] border-[var(--gn-primary)]/30 text-white font-bold shadow-[0_0_12px_rgba(16,185,129,0.05)]"
                  : "bg-transparent border-transparent text-[var(--gn-sub)] hover:bg-[var(--gn-bg)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${accion === "luces" ? "bg-[#4ADE80]" : "bg-[var(--gn-surface)]"}`} />
                <span className="text-xs">Apagar luces no usadas</span>
              </div>
              {accion === "luces" && <Check size={14} className="text-white" />}
            </button>

            {/* Opción 2 */}
            <button
              onClick={() => setAccion("agua")}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition border ${
                accion === "agua"
                  ? "bg-[var(--gn-primary)] border-[var(--gn-primary)]/30 text-white font-bold shadow-[0_0_12px_rgba(16,185,129,0.05)]"
                  : "bg-transparent border-transparent text-[var(--gn-sub)] hover:bg-[var(--gn-bg)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${accion === "agua" ? "bg-[#4ADE80]" : "bg-[var(--gn-surface)]"}`} />
                <span className="text-xs">Reducir uso de agua</span>
              </div>
              {accion === "agua" && <Check size={14} className="text-white" />}
            </button>

            {/* Opción 3 */}
            <button
              onClick={() => setAccion("standby")}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition border ${
                accion === "standby"
                  ? "bg-[var(--gn-primary)] border-[var(--gn-primary)]/30 text-white font-bold shadow-[0_0_12px_rgba(16,185,129,0.05)]"
                  : "bg-transparent border-transparent text-[var(--gn-sub)] hover:bg-[var(--gn-bg)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${accion === "standby" ? "bg-[#4ADE80]" : "bg-[var(--gn-surface)]"}`} />
                <span className="text-xs">Desconectar standby</span>
              </div>
              {accion === "standby" && <Check size={14} className="text-white" />}
            </button>
          </div>
        </section>

        {/* 4. Paso 3: Resumen y Confirmación */}
        <section className="mt-6 bg-gn-card p-5 rounded-3xl border border-[var(--gn-primary)]/30 shadow-[0_4px_25px_rgba(16,185,129,0.08)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none" />
          
          <div className="relative">
            <h3 className="text-base font-bold text-[var(--gn-base)] mb-3.5 flex items-center gap-2">
              <Leaf size={16} className="text-[var(--gn-primary)]" /> Resumen del registro
            </h3>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs border-b border-[var(--gn-border-str)]/60 pb-2">
                <span className="text-[var(--gn-base)]">Hábito</span>
                <span className="text-[var(--gn-base)] font-semibold">
                  {accion === "luces" && "Apagar luces no usadas"}
                  {accion === "agua" && "Reducir uso de agua"}
                  {accion === "standby" && "Desconectar standby"}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-[var(--gn-border-str)]/60 pb-2">
                <span className="text-[var(--gn-base)]">Categoría</span>
                <span className="text-[var(--gn-base)] font-semibold capitalize">
                  {categoria === "hogar" && "Hogar Sostenible"}
                  {categoria === "agua" && "Cuidado del Agua"}
                  {categoria === "energia" && "Energía"}
                  {categoria === "consumo" && "Consumo responsable"}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-[var(--gn-border-str)]/60 pb-2">
                <span className="text-[var(--gn-base)]">Impacto</span>
                <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                  Reducido
                </span>
              </div>
            </div>

            {/* Puntos Destacados */}
            <div className="bg-[var(--gn-bg)] border border-[var(--gn-border-str)] rounded-2xl py-3 px-4 my-4 flex justify-between items-center">
              <span className="text-[var(--gn-base)] text-xs font-bold uppercase tracking-wider">
                GPts a Conseguir
              </span>
              <span className="text-[var(--gn-primary)] text-lg font-black drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                +50 GPts
              </span>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-2 mt-4">
              <Link
                to="/exito"
                className="w-full bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] py-3 rounded-xl font-black text-center text-sm transition duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.3)] active:scale-[0.98]"
              >
                Confirmar registro
              </Link>
              <Link
                to="/registra"
                className="w-full bg-transparent hover:bg-gn-surface border border-[#f87171]/30 text-[#f87171] py-3 rounded-xl font-bold text-center text-sm transition duration-300"
              >
                Cancelar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
