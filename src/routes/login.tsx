import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Eye, EyeOff, LogIn } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Iniciar sesión — Greenio" }],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Completa todos los campos.");
      return;
    }
    setLoading(true);
    // Simula autenticación
    setTimeout(() => {
      localStorage.setItem("greenio_auth", "1");
      navigate({ to: "/" });
    }, 900);
  }

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col overflow-hidden shadow-2xl"
      style={{ background: "linear-gradient(160deg, #c8e6c9 0%, #dcedc8 50%, #b2dfdb 100%)" }}>

      {/* Parte superior decorativa */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-3">
        {/* Logo */}
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg mb-2"
          style={{ background: "var(--gn-primary)" }}>
          <Leaf size={40} className="text-white" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-bold text-[var(--gn-base)] tracking-tight">Greenio</h1>
        <p className="text-sm text-[var(--gn-sub)] text-center leading-relaxed">
          Registra hábitos sostenibles, haz crecer tu ecosistema y gana recompensas reales.
        </p>
      </div>

      {/* Formulario */}
      <div className="bg-gn-card rounded-t-3xl px-6 pt-8 pb-10 shadow-[0_-4px_24px_rgba(13,61,34,0.12)]">
        <h2 className="text-xl font-bold text-[var(--gn-base)] mb-6">Iniciar sesión</h2>

        {error && (
          <div className="mb-4 bg-[var(--gn-red-lt)] border border-[var(--gn-red)] rounded-xl px-4 py-3 text-[13px] text-[var(--gn-red)] font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--gn-sub)] uppercase tracking-wide">Correo electrónico</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-xl px-4 py-3 text-sm text-[var(--gn-base)] placeholder:text-[var(--gn-hint)] focus:outline-none focus:border-[var(--gn-primary)] transition"
            />
          </label>

          {/* Contraseña */}
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--gn-sub)] uppercase tracking-wide">Contraseña</span>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-[var(--gn-surface)] border border-[var(--gn-border-str)] rounded-xl px-4 py-3 pr-12 text-sm text-[var(--gn-base)] placeholder:text-[var(--gn-hint)] focus:outline-none focus:border-[var(--gn-primary)] transition w-full"
              />
              <button type="button" tabIndex={-1}
                onClick={() => setShowPass(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gn-hint)] hover:text-[var(--gn-sub)] transition">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <button type="submit" disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-2xl transition active:scale-95 disabled:opacity-70"
            style={{ background: "var(--gn-primary)", boxShadow: "0 4px 14px rgba(26,148,87,0.35)" }}>
            {loading
              ? <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              : <><LogIn size={18} /> Ingresar</>}
          </button>
        </form>

        <p className="text-center text-[12px] text-[var(--gn-hint)] mt-6">
          ¿No tienes cuenta?{" "}
          <span className="text-[var(--gn-primary)] font-bold cursor-pointer">Regístrate</span>
        </p>
      </div>
    </div>
  );
}
