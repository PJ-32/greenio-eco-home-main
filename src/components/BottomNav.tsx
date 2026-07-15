import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, Users, Award, Plus, Radar } from "lucide-react";

const links = [
  { to: "/",         icon: Home,     label: "Inicio"    },
  { to: "/aprende",  icon: BookOpen, label: "Aprende"   },
  { to: "/comunidad",icon: Radar,    label: "Radar"     },
  { to: "/perfil",   icon: Award,    label: "Perfil"    },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="absolute bottom-0 w-full px-4 py-2.5 flex justify-between items-center z-50"
      style={{
        backgroundColor: "var(--gn-nav)",
        borderTop: "1.5px solid var(--gn-nav-border)",
        boxShadow: "0 -2px 12px rgba(13,61,34,0.08)",
      }}
    >
      {links.slice(0, 2).map(({ to, icon: Icon, label }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to}
            className="flex flex-col items-center gap-0.5 transition-colors"
            style={{ color: active ? "var(--gn-primary)" : "var(--gn-hint)" }}>
            <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
            <span className="text-[10px]" style={{ fontWeight: active ? 700 : 500 }}>{label}</span>
          </Link>
        );
      })}

      {/* FAB central */}
      <Link to="/registra" aria-label="Registrar acción"
        className="w-14 h-14 rounded-full flex items-center justify-center transform -translate-y-4 hover:scale-105 active:scale-95 transition duration-200"
        style={{
          background: "var(--gn-primary)",
          boxShadow: "0 4px 16px rgba(26,148,87,0.4)",
          outline: "4px solid var(--gn-surface)",
        }}>
        <Plus size={28} className="text-white" strokeWidth={3} />
      </Link>

      {links.slice(2).map(({ to, icon: Icon, label }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to}
            className="flex flex-col items-center gap-0.5 transition-colors"
            style={{ color: active ? "var(--gn-primary)" : "var(--gn-hint)" }}>
            <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
            <span className="text-[10px]" style={{ fontWeight: active ? 700 : 500 }}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
