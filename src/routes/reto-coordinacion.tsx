import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Paperclip, Send, User } from "lucide-react";

export const Route = createFileRoute("/reto-coordinacion")({
  head: () => ({
    meta: [
      { title: "Coordinación: Limpieza Av. Faucett — Greenio" },
      {
        name: "description",
        content: "Chat y coordinación de tareas para la limpieza vecinal de Av. Faucett.",
      },
    ],
  }),
  component: RetoCoordinacion,
});

type Tab = "chat" | "tareas" | "detalles";

function RetoCoordinacion() {
  const [activeTab, setActiveTab] = useState<Tab>("chat");
  const [messageText, setMessageText] = useState("");

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      {/* 1. Header Superior */}
      <header className="z-10 bg-gn-card border-b border-[var(--gn-border-str)] p-4 pt-12 flex flex-col shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/reto-detalle"
            search={{ id: "playa" }}
            aria-label="Volver al detalle del reto"
            className="bg-[var(--gn-surface)] hover:bg-[var(--gn-surface)] p-2 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft size={16} />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-[var(--gn-base)] truncate">
              Coordinación: Limpieza Av. Faucett
            </h1>
            <p className="text-[var(--gn-primary)] text-xs font-semibold mt-0.5">
              15 vecinos unidos
            </p>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="mt-4 flex gap-4 border-b border-[var(--gn-border-str)]/50">
          {(["chat", "tareas", "detalles"] as const).map((tab) => {
            const active = activeTab === tab;
            const label = tab.charAt(0).toUpperCase() + tab.slice(1);
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold pb-2 transition-colors relative cursor-pointer ${
                  active ? "text-[var(--gn-primary)]" : "text-[var(--gn-sub)] hover:text-[var(--gn-base)]"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--gn-primary)] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* 2. Área de Contenido según Tab */}
      <div className="flex-1 overflow-y-auto bg-[var(--gn-bg)] flex flex-col pb-28 scrollbar-hide">
        {activeTab === "chat" && (
          <div className="p-4 flex flex-col gap-4">
            {/* Mensaje del Sistema */}
            <div className="text-center text-xs text-[var(--gn-sub)] my-2 bg-gn-card py-1.5 px-3 rounded-full border border-[var(--gn-border-str)]/30 max-w-[220px] mx-auto">
              Renzo se ha unido al reto
            </div>

            {/* Mensaje Ajeno 1 */}
            <div className="flex gap-2.5 items-start">
              <div className="w-8 h-8 rounded-full bg-[var(--gn-surface)] flex items-center justify-center shrink-0 border border-[var(--gn-border-str)] shadow-inner">
                <User size={14} className="text-[var(--gn-sub)]" />
              </div>
              <div className="flex flex-col gap-1 max-w-[80%]">
                <span className="text-[10px] text-[var(--gn-base)] font-bold ml-1">Mario</span>
                <div className="bg-gn-card border border-[var(--gn-border-str)]/80 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-slate-100 leading-relaxed">
                  ¿Alguien tiene palas extra? Yo llevo 20 bolsas de basura.
                </div>
              </div>
            </div>

            {/* Mensaje Ajeno 2 */}
            <div className="flex gap-2.5 items-start">
              <div className="w-8 h-8 rounded-full bg-[var(--gn-surface)] flex items-center justify-center shrink-0 border border-[var(--gn-border-str)] shadow-inner">
                <User size={14} className="text-[var(--gn-sub)]" />
              </div>
              <div className="flex flex-col gap-1 max-w-[80%]">
                <span className="text-[10px] text-[var(--gn-base)] font-bold ml-1">Nicole</span>
                <div className="bg-gn-card border border-[var(--gn-border-str)]/80 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-slate-100 leading-relaxed">
                  Yo llevo una pala y guantes para 3 personas 🌿
                </div>
              </div>
            </div>

            {/* Mensaje Propio */}
            <div className="flex flex-col gap-1 max-w-[80%] self-end">
              <span className="text-[10px] text-[var(--gn-primary)]/80 font-bold mr-1 text-right">Tú</span>
              <div className="bg-[var(--gn-primary)] text-[var(--gn-base)] rounded-2xl rounded-tr-none p-3 shadow-[0_2px_8px_rgba(16,185,129,0.2)] text-sm leading-relaxed font-medium">
                Perfecto, nos vemos a las 9 AM en el paradero. Llevo agua para todos.
              </div>
            </div>
          </div>
        )}

        {activeTab === "tareas" && (
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-sm font-bold text-[var(--gn-sub)] mb-2">Tareas del Reto</h2>
            <div className="flex flex-col gap-3">
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Traer bolsas de basura</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Asignado a Mario</p>
                </div>
                <span className="text-[10px] bg-[var(--gn-primary)] text-[var(--gn-primary)] border border-[var(--gn-primary)]/20 px-2 py-0.5 rounded-full font-bold uppercase">
                  Listo
                </span>
              </div>
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Traer herramientas/palas</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Asignado a Nicole y Renzo</p>
                </div>
                <span className="text-[10px] bg-[var(--gn-primary)] text-[var(--gn-primary)] border border-[var(--gn-primary)]/20 px-2 py-0.5 rounded-full font-bold uppercase">
                  Listo
                </span>
              </div>
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Proveer hidratación (Agua)</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Asignado a Ti</p>
                </div>
                <span className="text-[10px] bg-[var(--gn-primary)] text-[var(--gn-primary)] border border-[var(--gn-primary)]/20 px-2 py-0.5 rounded-full font-bold uppercase">
                  Listo
                </span>
              </div>
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center opacity-60">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Coordinar con camión municipal</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Pendiente de asignación</p>
                </div>
                <span className="text-[10px] bg-[var(--gn-surface)] text-[var(--gn-base)] border border-[var(--gn-border-str)] px-2 py-0.5 rounded-full font-bold uppercase">
                  Pendiente
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "detalles" && (
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-sm font-bold text-[var(--gn-sub)] mb-2">Detalles del Punto de Encuentro</h2>
            <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-4 flex flex-col gap-3">
              <div>
                <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">Fecha y Hora</p>
                <p className="text-xs font-bold text-[var(--gn-base)] mt-1">Sábado, 20 de Junio - 9:00 AM</p>
              </div>
              <div className="h-px bg-[var(--gn-surface)]" />
              <div>
                <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">Punto de Encuentro</p>
                <p className="text-xs font-bold text-[var(--gn-base)] mt-1">Paradero Principal de Av. Faucett c/ Av. Venezuela</p>
              </div>
              <div className="h-px bg-[var(--gn-surface)]" />
              <div>
                <p className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">Meta del Grupo</p>
                <p className="text-xs font-bold text-[var(--gn-primary)] mt-1">Recolectar 200 kg de residuos plásticos</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Input de Chat Fijo */}
      {activeTab === "chat" && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bottom-0 w-full bg-gn-card border-t border-[var(--gn-border-str)] p-4 pb-8 flex gap-2 items-center z-20"
        >
          <button
            type="button"
            aria-label="Adjuntar archivo"
            className="text-[var(--gn-base)] hover:text-[var(--gn-base)] p-2 transition active:scale-95 cursor-pointer"
          >
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="bg-[var(--gn-bg)] border border-[var(--gn-border-str)] focus:border-[var(--gn-primary)] focus:outline-none rounded-full px-4 py-2.5 w-full text-sm text-[var(--gn-base)] placeholder-slate-500 transition duration-200"
          />
          <button
            type="submit"
            aria-label="Enviar mensaje"
            className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] p-2.5 rounded-full flex items-center justify-center shrink-0 transition active:scale-95 cursor-pointer shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
          >
            <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
