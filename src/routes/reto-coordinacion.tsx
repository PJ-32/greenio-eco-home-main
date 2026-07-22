import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Paperclip,
  Send,
  User,
  Users,
  Shield,
  ShieldAlert,
  Phone,
  ChevronRight,
  Bell,
  Flame,
  HeartPulse,
} from "lucide-react";

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

interface AuthorityDetailProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  desc: string;
  primaryBtn: string;
  onPrimary: () => void;
  onSecondary: () => void;
}

function AuthorityDetail({
  icon,
  iconBg,
  title,
  subtitle,
  desc,
  primaryBtn,
  onPrimary,
  onSecondary,
}: AuthorityDetailProps) {
  return (
    <div className="flex-1 flex flex-col justify-between h-full py-4 text-center">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 my-auto">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${iconBg} shadow-sm`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-800">{title}</h3>
          <p className="text-xs text-[var(--gn-primary)] font-bold mt-0.5">{subtitle}</p>
        </div>
        <p className="text-xs text-slate-500 max-w-[280px] leading-relaxed mt-2">
          {desc}
        </p>
      </div>

      <div className="flex flex-col gap-2.5 w-full max-w-xs mx-auto mt-6 shrink-0">
        <button
          type="button"
          onClick={onPrimary}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl w-full shadow-md transition cursor-pointer text-xs uppercase tracking-wider"
        >
          {primaryBtn}
        </button>
        <button
          type="button"
          onClick={onSecondary}
          className="border border-slate-300 text-slate-700 font-bold py-3.5 px-6 rounded-xl w-full transition cursor-pointer hover:bg-slate-50 text-xs uppercase tracking-wider"
        >
          Enviar ubicación
        </button>
      </div>
    </div>
  );
}

function RetoCoordinacion() {
  const [activeTab, setActiveTab] = useState<Tab>("chat");
  const [messageText, setMessageText] = useState("");
  const [helpStep, setHelpStep] = useState<null | string>(null);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg("");
    }, 3000);
  };

  const handleBackClick = () => {
    if (helpStep === "MENU_INICIAL") {
      setHelpStep(null);
    } else if (helpStep === "LISTA_AUTORIDADES") {
      setHelpStep("MENU_INICIAL");
    } else {
      setHelpStep("LISTA_AUTORIDADES");
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      {/* 1. Header Superior */}
      <header className="z-10 bg-gn-card border-b border-[var(--gn-border-str)] p-4 pt-12 flex flex-col shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/comunidad"
            search={{ tab: "reportes" }}
            aria-label="Volver a Comunidad"
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
                <div className="bg-gn-card border border-[var(--gn-border-str)]/80 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-slate-800 leading-relaxed">
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
                <div className="bg-gn-card border border-[var(--gn-border-str)]/80 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm text-slate-800 leading-relaxed">
                  Yo llevo una pala y guantes para 3 personas 🌿
                </div>
              </div>
            </div>

            {/* Mensaje Propio */}
            <div className="flex flex-col gap-1 max-w-[80%] self-end">
              <span className="text-[10px] text-[var(--gn-primary)]/80 font-bold mr-1 text-right">Tú</span>
              <div className="bg-[var(--gn-primary)] text-white rounded-2xl rounded-tr-none p-3 shadow-[0_2px_8px_rgba(16,185,129,0.2)] text-sm leading-relaxed font-medium">
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
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/50 px-2 py-0.5 rounded-full font-bold uppercase">
                  Listo
                </span>
              </div>
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Traer herramientas/palas</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Asignado a Nicole y Renzo</p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/50 px-2 py-0.5 rounded-full font-bold uppercase">
                  Listo
                </span>
              </div>
              <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-bold text-[var(--gn-base)]">Proveer hidratación (Agua)</h3>
                  <p className="text-[10px] text-[var(--gn-sub)] mt-0.5">Asignado a Ti</p>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/50 px-2 py-0.5 rounded-full font-bold uppercase">
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
            
            {/* Botón Disparador de Ayuda */}
            <button
              type="button"
              onClick={() => setHelpStep("MENU_INICIAL")}
              className="w-full mt-4 border-2 border-emerald-600 text-emerald-700 py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-emerald-50 transition-colors cursor-pointer text-sm"
            >
              <Users size={18} />
              <span>Solicitar ayuda</span>
            </button>
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
      {/* Flow Modal Overlays */}
      {helpStep && (
        <div className="absolute inset-0 bg-[#fbfdfc] z-[60] flex flex-col animate-in slide-in-from-bottom duration-300 text-slate-800">
          <header className="pt-12 px-4 pb-4 border-b border-slate-100 flex items-center gap-3 shrink-0 bg-white">
            <button
              type="button"
              onClick={handleBackClick}
              className="p-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <h2 className="text-sm font-bold text-slate-850">
              {helpStep === "MENU_INICIAL" && "Solicitar Ayuda"}
              {helpStep === "LISTA_AUTORIDADES" && "Autoridades de Emergencia"}
              {helpStep === "DETALLE_POLICIA" && "Detalle: Policía Nacional"}
              {helpStep === "DETALLE_BOMBEROS" && "Detalle: Cuerpo de Bomberos"}
              {helpStep === "DETALLE_AMBULANCIA" && "Detalle: Ambulancia"}
              {helpStep === "DETALLE_ALERTA" && "Detalle: Alerta Vecinal"}
              {helpStep === "DETALLE_LLAMADA" && "Detalle: Llamada Rápida"}
            </h2>
          </header>

          <div className="flex-1 overflow-y-auto p-5 flex flex-col">
            {helpStep === "MENU_INICIAL" && (
              <div className="flex-1 flex flex-col justify-center items-center text-center gap-5 my-auto">
                <div className="relative w-24 h-24 flex items-center justify-center bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600">
                  <Shield size={48} className="absolute text-emerald-600/30" />
                  <Phone size={28} className="relative z-10 text-emerald-700 animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-855 leading-tight">¿En qué podemos ayudarte?</h3>
                <p className="text-xs text-slate-500 max-w-[280px] leading-relaxed">
                  Selecciona el tipo de ayuda que necesitas y te conectaremos con la autoridad correspondiente.
                </p>
                <div className="flex flex-col gap-2.5 w-full max-w-xs mt-4">
                  <button
                    type="button"
                    onClick={() => setHelpStep("LISTA_AUTORIDADES")}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl w-full shadow-md transition cursor-pointer text-xs uppercase tracking-wider"
                  >
                    Ver autoridades
                  </button>
                  <button
                    type="button"
                    onClick={() => setHelpStep("DETALLE_LLAMADA")}
                    className="border-2 border-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl w-full transition cursor-pointer hover:bg-slate-50 text-xs uppercase tracking-wider"
                  >
                    Llamada rápida
                  </button>
                </div>
              </div>
            )}

            {helpStep === "LISTA_AUTORIDADES" && (
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-500 mb-2">
                  Selecciona una entidad para ver detalles y opciones de contacto:
                </p>

                {/* Policía */}
                <button
                  type="button"
                  onClick={() => setHelpStep("DETALLE_POLICIA")}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-350 transition cursor-pointer text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800">Policía Nacional (105)</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Seguridad y patrullaje</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </button>

                {/* Bomberos */}
                <button
                  type="button"
                  onClick={() => setHelpStep("DETALLE_BOMBEROS")}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-350 transition cursor-pointer text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <Flame size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800">Bomberos (116)</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Incendios, rescates y urgencias</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </button>

                {/* Ambulancia */}
                <button
                  type="button"
                  onClick={() => setHelpStep("DETALLE_AMBULANCIA")}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-350 transition cursor-pointer text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <HeartPulse size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800">Ambulancia (SAMU)</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Emergencias médicas y traslado</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </button>

                {/* Alerta Vecinal */}
                <button
                  type="button"
                  onClick={() => setHelpStep("DETALLE_ALERTA")}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-350 transition cursor-pointer text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Bell size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800">Campana Alerta</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Notificar comunidad activa</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </button>

                {/* Llamada */}
                <button
                  type="button"
                  onClick={() => setHelpStep("DETALLE_LLAMADA")}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-350 transition cursor-pointer text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800">Llamada de Emergencia</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Conexión directa Greenio</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </button>
              </div>
            )}

            {helpStep === "DETALLE_POLICIA" && (
              <AuthorityDetail
                icon={<Shield size={48} className="text-blue-600" />}
                iconBg="bg-blue-50 border border-blue-100"
                title="Policía Nacional"
                subtitle="Llamar a la Central de Emergencias (105)"
                desc="Comunícate con la comisaría del sector para reportar incidentes de seguridad ciudadana, disturbios o solicitar patrullaje de apoyo."
                primaryBtn="Llamar al 105"
                onPrimary={() => showToast("Llamando a la Policía Nacional (105)...")}
                onSecondary={() => showToast("Ubicación enviada: Callao (07041)")}
              />
            )}

            {helpStep === "DETALLE_BOMBEROS" && (
              <AuthorityDetail
                icon={<Flame size={48} className="text-red-600" />}
                iconBg="bg-red-50 border border-red-100"
                title="Cuerpo de Bomberos"
                subtitle="Llamar a la Central de Bomberos (116)"
                desc="Solicita ayuda ante incendios, rescates, accidentes vehiculares, fugas de gas o cualquier urgencia mecánica de riesgo."
                primaryBtn="Llamar al 116"
                onPrimary={() => showToast("Llamando a la Central de Bomberos (116)...")}
                onSecondary={() => showToast("Ubicación enviada: Callao (07041)")}
              />
            )}

            {helpStep === "DETALLE_AMBULANCIA" && (
              <AuthorityDetail
                icon={<HeartPulse size={48} className="text-emerald-600" />}
                iconBg="bg-emerald-50 border border-emerald-100"
                title="Ambulancia (SAMU / EsSalud)"
                subtitle="Emergencias Médicas y Traslado"
                desc="Pide el envío de una ambulancia médica de urgencia para atención ambulatoria inmediata o traslado rápido a clínicas/hospitales."
                primaryBtn="Llamar Ambulancia"
                onPrimary={() => showToast("Llamando a Emergencias Médicas (SAMU)...")}
                onSecondary={() => showToast("Ubicación enviada: Callao (07041)")}
              />
            )}

            {helpStep === "DETALLE_ALERTA" && (
              <AuthorityDetail
                icon={<Bell size={48} className="text-amber-600" />}
                iconBg="bg-amber-50 border border-amber-100"
                title="Notificar Vecinos"
                subtitle="Alerta de Emergencia Comunitaria"
                desc="Se notificará a los vecinos activos que se encuentran participando en este reto para que acudan a brindar soporte colectivo."
                primaryBtn="Activar alerta"
                onPrimary={() => showToast("Alerta enviada a Nicole, Renzo, Mario y vecinos activos.")}
                onSecondary={() => showToast("Ubicación enviada: Callao (07041)")}
              />
            )}

            {helpStep === "DETALLE_LLAMADA" && (
              <AuthorityDetail
                icon={<Phone size={48} className="text-indigo-600" />}
                iconBg="bg-indigo-50 border border-indigo-100"
                title="Llamada de Emergencia"
                subtitle="Contacto de Emergencia Único"
                desc="Establece comunicación directa de voz con la central de coordinación general de Greenio para soporte vecinal de contingencia."
                primaryBtn="Iniciar llamada de voz"
                onPrimary={() => showToast("Iniciando llamada de emergencia directa con Greenio...")}
                onSecondary={() => showToast("Ubicación enviada: Callao (07041)")}
              />
            )}
          </div>
        </div>
      )}

      {/* Global Toast Message */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-5 py-3.5 rounded-full z-[100] shadow-2xl flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-[90%] text-center border border-slate-800">
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
