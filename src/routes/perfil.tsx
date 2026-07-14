import { BottomNav } from "../components/BottomNav";
import { NivelModal } from "../components/NivelModal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Home,
  BookOpen,
  Users,
  Award,
  Plus,
  Settings,
  CheckCircle2,
  UtensilsCrossed,
  Ticket,
  Backpack,
  User,
  Coffee,
  Music,
  Gamepad2,
  Shirt,
} from "lucide-react";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Mi perfil — Greenio" },
      {
        name: "description",
        content:
          "Revisa tu saldo de GreenPoints, nivel y canjea recompensas eco-amigables en Greenio.",
      },
    ],
  }),
  component: Perfil,
});

const categories = ["Todas", "Comida/Bebidas", "Cine y Ocio", "Kits Greenio"];

function Perfil() {
  const [balance, setBalance] = useState(2450);
  const [nivelModal, setNivelModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("greenio_balance");
    if (saved) {
      setBalance(parseInt(saved, 10));
    }
  }, []);

  const verifiedPoints = Math.min(balance, 1450);
  const manualPoints = Math.max(0, balance - verifiedPoints);

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        {/* Header */}
        <header className="relative flex items-center justify-center">
          <h1 className="text-xl font-bold">Mi perfil</h1>
          <Link
            to="/configuracion"
            aria-label="Ajustes"
            className="absolute right-0 w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)]"
          >
            <Settings size={18} />
          </Link>
        </header>

        {/* Tarjeta de usuario */}
        <section className="bg-gn-card rounded-2xl p-4 border border-[var(--gn-border-str)] mt-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/30 to-slate-800 border border-[var(--gn-primary)]/30 flex items-center justify-center shrink-0">
            <User size={32} className="text-[var(--gn-primary)]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[var(--gn-base)] font-bold text-lg leading-tight">
              Khalep Velarde
            </h2>
            <p className="text-[var(--gn-base)] text-xs truncate">
              khalep.velarde@unmsm.edu.pe
            </p>
            <button onClick={() => setNivelModal(true)} className="bg-[var(--gn-surface)] text-[var(--gn-primary-dk)] border border-[var(--gn-border-str)] rounded-full px-3 py-1 mt-2 inline-block text-xs font-bold active:scale-95 transition">
              Nivel: Brote I 🌱
            </button>
          </div>
        </section>

        {/* Saldo de puntos */}
        <section className="bg-gradient-to-br from-emerald-900/40 to-slate-900 rounded-2xl p-4 border border-[var(--gn-primary)]/50 mt-4 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--gn-primary)] blur-2xl pointer-events-none" />
          <p className="text-[var(--gn-sub)] text-sm relative">Saldo de Puntos</p>
          <p className="text-3xl font-black text-[var(--gn-primary)] mt-1 relative">
            {balance.toLocaleString()} <span className="text-lg font-bold">GPts</span>
          </p>
          <div className="mt-3 pt-3 border-t border-[var(--gn-border-str)]/50 flex justify-between relative">
            <div>
              <p className="text-xs text-[var(--gn-base)]">Verificados</p>
              <p className="text-sm text-[var(--gn-primary)] flex items-center gap-1 mt-0.5 font-semibold">
                <CheckCircle2 size={14} /> {verifiedPoints.toLocaleString()} GPts
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[var(--gn-base)]">Manuales</p>
              <p className="text-sm text-[var(--gn-base)] mt-0.5 font-semibold">
                {manualPoints.toLocaleString()} GPts
              </p>
            </div>
          </div>
        </section>

        {/* Recompensas */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recompensas</h3>
            <Link to="/recompensas" className="text-[var(--gn-primary)] text-sm hover:underline cursor-pointer">
              Canjear puntos &gt;
            </Link>
          </div>

          {/* Filtros */}
          <div className="flex gap-2 mt-3 pb-2 overflow-x-auto no-scrollbar">
            {categories.map((c, i) => (
              <button
                key={c}
                className={
                  "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition " +
                  (i === 0
                    ? "bg-[var(--gn-primary)] text-[var(--gn-bg)]"
                    : "bg-[var(--gn-surface)] text-[var(--gn-base)] hover:bg-[var(--gn-surface)]")
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* Lista */}
          <div className="mt-2 flex flex-col gap-5">
            <CategoryGroup label="Comida / Bebidas">
              <RewardCard
                icon={<UtensilsCrossed size={26} className="text-[var(--gn-amber)]" />}
                title="Descuento 20% en Restaurante"
                subtitle="Válido hasta agotar stock"
                cost="2,000 GPts"
              />
              <RewardCard
                icon={<Coffee size={26} className="text-orange-300" />}
                title="Combo Eco-Cafetería"
                subtitle="Incluye termo reutilizable"
                cost="1,500 GPts"
              />
            </CategoryGroup>

            <CategoryGroup label="Cine y Ocio">
              <RewardCard
                icon={<Ticket size={26} className="text-sky-400" />}
                title="Entrada Cine 2D"
                subtitle="Válido de Lunes a Jueves"
                cost="1,800 GPts"
              />
              <RewardCard
                icon={<Music size={26} className="text-fuchsia-400" />}
                title="Sorteo: Entrada a Concierto Local"
                subtitle="Participa por entradas a música en vivo"
                cost="800 GPts"
              />
              <RewardCard
                icon={<Gamepad2 size={26} className="text-indigo-400" />}
                title="Descuento en Hosting de Servidores"
                subtitle="Aplica para juegos modded (Ej. Minecraft)"
                cost="2,500 GPts"
                disabled
              />
            </CategoryGroup>

            <CategoryGroup label="Kits Greenio">
              <RewardCard
                icon={<Backpack size={26} className="text-[var(--gn-primary)]" />}
                title="Kit Escolar Ecológico"
                subtitle="Cuadernos reciclados y lápices plantables"
                cost="4,000 GPts"
                disabled
              />
              <RewardCard
                icon={<Shirt size={26} className="text-teal-300" />}
                title="Polo de Algodón Reciclado Greenio"
                subtitle="Tallas S, M, L"
                cost="3,500 GPts"
                disabled
              />
            </CategoryGroup>
          </div>
        </section>
      </div>
      <BottomNav />
      {nivelModal && <NivelModal onClose={() => setNivelModal(false)} />}
    </div>
  );
}

function RewardCard({
  icon,
  title,
  subtitle,
  cost,
  disabled,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  cost: string;
  disabled?: boolean;
}) {
  return (
    <article className="bg-gn-card rounded-xl p-3 border border-[var(--gn-border-str)] flex gap-4 items-center">
      <div className="bg-[var(--gn-surface)] rounded-lg w-16 h-16 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[var(--gn-base)] leading-tight">
          {title}
        </h4>
        <p className="text-xs text-[var(--gn-base)] mt-1">{subtitle}</p>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <p className="text-[var(--gn-primary)] font-bold text-sm">{cost}</p>
        <button
          disabled={disabled}
          className={
            "rounded-lg px-2 py-1 text-xs transition " +
            (disabled
              ? "bg-[var(--gn-surface)] text-[var(--gn-sub)] cursor-not-allowed opacity-60"
              : "bg-[var(--gn-surface)] hover:bg-[var(--gn-primary)] hover:text-[var(--gn-bg)] text-[var(--gn-base)]")
          }
        >
          Seleccionar
        </button>
      </div>
    </article>
  );
}

function CategoryGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-[var(--gn-base)] font-semibold mb-2">
        {label}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
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
      className={
        "flex flex-col items-center gap-1 " +
        (active ? "text-[var(--gn-primary)]" : "text-[var(--gn-sub)]")
      }
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
