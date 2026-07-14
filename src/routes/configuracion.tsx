import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, PawPrint, Users, LogOut } from "lucide-react";

export const Route = createFileRoute("/configuracion")({
  head: () => ({
    meta: [
      { title: "Configuración — Greenio" },
      { name: "description", content: "Gestiona tus datos personales, preferencias y notificaciones de Greenio." },
    ],
  }),
  component: Configuracion,
});

function Configuracion() {
  const navigate = useNavigate();
  const [alarmaCamion, setAlarmaCamion] = useState(true);
  const [notifCriticos, setNotifCriticos] = useState(true);
  const [confirmLogout, setConfirmLogout] = useState(false);

  function handleLogout() {
    if (!confirmLogout) { setConfirmLogout(true); return; }
    localStorage.removeItem("greenio_auth");
    localStorage.removeItem("greenio_balance");
    navigate({ to: "/login" });
  }

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-6 pb-10">

        <header className="flex items-center gap-4">
          <Link to="/perfil" aria-label="Volver"
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)]">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-xl font-bold">Configuración</h1>
        </header>

        {/* Datos Personales */}
        <section className="mt-6">
          <h2 className="text-sm text-[var(--gn-primary)] font-bold uppercase tracking-wider mb-3">Datos Personales</h2>
          <div className="bg-gn-card rounded-2xl p-4 border border-[var(--gn-border-str)] flex flex-col gap-4">
            <Field label="Nombre Completo" defaultValue="Khalep Velarde" />
            <Field label="Correo Electrónico" type="email" defaultValue="khalep.velarde@unmsm.edu.pe" />
            <Field label="Ubicación / Código Postal" defaultValue="Callao (07041)" />
            <Field label="Institución / Ocupación" defaultValue="UNMSM - FISI" />
            <button className="bg-[var(--gn-surface)] text-[var(--gn-base)] rounded-lg py-2 text-sm mt-1 transition font-semibold hover:bg-[var(--gn-border-str)]">
              Actualizar Datos
            </button>
          </div>
        </section>

        {/* Preferencias */}
        <section className="mt-6">
          <h2 className="text-sm text-[var(--gn-primary)] font-bold uppercase tracking-wider mb-3">Preferencias</h2>
          <div className="bg-gn-card rounded-2xl p-4 border border-[var(--gn-border-str)] flex flex-col gap-4">
            <ToggleRow label="Alarma de proximidad (Camión a 5 min)" checked={alarmaCamion} onChange={setAlarmaCamion} />
            <ToggleRow label="Notificaciones de Puntos Críticos" checked={notifCriticos} onChange={setNotifCriticos} />
            <ToggleRow label="Modo Oscuro" checked={false} disabled />
          </div>
        </section>

        {/* Datos Extra */}
        <section className="mt-6">
          <h2 className="text-sm text-[var(--gn-primary)] font-bold uppercase tracking-wider mb-3">Datos Extra</h2>
          <div className="bg-gn-card rounded-2xl p-4 border border-[var(--gn-border-str)] flex flex-col gap-3">
            <ExtraRow icon={<PawPrint size={18} className="text-[var(--gn-primary)]" />} label="Registrar mascota para residuos orgánicos" />
            <ExtraRow icon={<Users size={18} className="text-[var(--gn-primary)]" />} label="Gestionar comunidad vecinal" />
          </div>
        </section>

        {/* Acciones */}
        <div className="mt-8 flex flex-col gap-3">
          <button className="bg-[var(--gn-surface)] text-[var(--gn-base)] py-3 rounded-xl font-semibold text-center transition hover:bg-[var(--gn-border-str)]">
            Soporte y Ayuda
          </button>

          {/* Cerrar sesión con confirmación */}
          <button
            onClick={handleLogout}
            className={`py-3 rounded-xl font-bold text-center transition flex items-center justify-center gap-2 ${
              confirmLogout
                ? "bg-[var(--gn-red)] text-white"
                : "border border-[var(--gn-red)] text-[var(--gn-red)] hover:bg-[var(--gn-red-lt)]"
            }`}>
            <LogOut size={16} />
            {confirmLogout ? "¿Confirmar cierre de sesión?" : "Cerrar Sesión"}
          </button>

          {confirmLogout && (
            <button onClick={() => setConfirmLogout(false)}
              className="text-[12px] text-[var(--gn-hint)] text-center underline underline-offset-2">
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, defaultValue, type = "text" }: { label: string; defaultValue: string; type?: string }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-[var(--gn-sub)] font-semibold">{label}</span>
      <input type={type} defaultValue={defaultValue}
        className="bg-[var(--gn-bg)] border border-[var(--gn-border-str)] rounded-lg px-3 py-2 text-[var(--gn-base)] text-sm focus:outline-none focus:border-[var(--gn-primary)] transition" />
    </label>
  );
}

function ToggleRow({ label, checked, onChange, disabled }: { label: string; checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <div className="flex justify-between items-center gap-4">
      <span className="text-sm text-[var(--gn-base)]">{label}</span>
      <button type="button" role="switch" aria-checked={checked} disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={"relative w-11 h-6 rounded-full transition shrink-0 " +
          (checked ? "bg-[var(--gn-primary)]" : "bg-[var(--gn-surface)]") +
          (disabled ? " opacity-60 cursor-not-allowed" : " cursor-pointer")}>
        <span className={"absolute top-0.5 w-5 h-5 bg-gn-card rounded-full shadow transition-all " + (checked ? "left-[22px]" : "left-0.5")} />
      </button>
    </div>
  );
}

function ExtraRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 text-left text-sm text-[var(--gn-base)] hover:text-[var(--gn-primary)] transition">
      <span className="w-9 h-9 rounded-lg bg-[var(--gn-surface)] flex items-center justify-center shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      <span className="text-[var(--gn-sub)]">›</span>
    </button>
  );
}
