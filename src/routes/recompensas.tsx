import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Coins,
  Lock,
  Plus,
  Check,
  Home,
  BookOpen,
  Users,
  Award,
  Ticket,
  X,
} from "lucide-react";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/recompensas")({
  head: () => ({
    meta: [
      { title: "Catálogo de Recompensas — Greenio" },
      {
        name: "description",
        content:
          "Canjea tus GreenPoints (GPts) por recompensas eco-amigables de alimentos, transporte, moda y hogar.",
      },
    ],
  }),
  component: RecompensasCatalog,
});

interface Reward {
  id: number;
  title: string;
  category: string;
  cost: number;
  image: string;
  description: string;
}

const REWARDS_DATA: Reward[] = [
  {
    id: 1,
    title: "20% Dscto. Veggie Burger",
    category: "Alimentos",
    cost: 500,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=300&q=80",
    description: "Válido para cualquier combo de hamburguesa vegana en locales adheridos.",
  },
  {
    id: 2,
    title: "Pasaje Gratis Metropolitano",
    category: "Transporte",
    cost: 1200,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=300&q=80",
    description: "Canjeable por un pasaje de transporte público en toda la red metropolitana.",
  },
  {
    id: 3,
    title: "Termo Ecológico Metálico",
    category: "Hogar",
    cost: 3000,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80",
    description: "Termo de acero inoxidable de 500ml de alta durabilidad para mantener tus bebidas frías o calientes.",
  },
  {
    id: 4,
    title: "Polo Algodón Orgánico",
    category: "Moda Sostenible",
    cost: 1800,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80",
    description: "Polo eco-amigable confeccionado con 100% algodón orgánico certificado y tintes naturales.",
  },
  {
    id: 5,
    title: "Kit Zero Waste Hogar",
    category: "Hogar",
    cost: 3500,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80",
    description: "Kit completo que incluye cepillo de bambú, pajitas de metal y cubiertos de madera reutilizables.",
  },
  {
    id: 6,
    title: "Bolsa de Lona Sostenible",
    category: "Moda Sostenible",
    cost: 400,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80",
    description: "Bolsa resistente hecha de algodón reciclado ideal para tus compras diarias sin plásticos.",
  },
];

const FILTERS = ["Todos", "Alimentos", "Transporte", "Moda Sostenible", "Hogar"];

function RecompensasCatalog() {
  const [balance, setBalance] = useState(2450);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [redeemed, setRedeemed] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("greenio_balance");
    if (saved) {
      setBalance(parseInt(saved, 10));
    } else {
      localStorage.setItem("greenio_balance", "2450");
    }
  }, []);

  const filteredRewards = REWARDS_DATA.filter((reward) => {
    if (activeFilter === "Todos") return true;
    return reward.category === activeFilter;
  });

  const handleSelectReward = (reward: Reward) => {
    if (balance < reward.cost) return;
    setSelectedReward(reward);
  };

  const handleConfirmRedeem = () => {
    if (!selectedReward) return;
    const newBalance = balance - selectedReward.cost;
    setBalance(newBalance);
    localStorage.setItem("greenio_balance", newBalance.toString());
    setRedeemed((prev) => [...prev, selectedReward.id]);
    
    // Toast Notification
    toast.success(`¡Canjeado con éxito!`, {
      description: `Has canjeado "${selectedReward.title}" por ${selectedReward.cost} GPts.`,
      duration: 3000,
    });
    
    setSelectedReward(null);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl overflow-hidden">
      <Toaster position="top-center" richColors />
      
      {/* 1. Header y Saldo */}
      <header className="pt-12 px-4 pb-4 bg-gn-card border-b border-[var(--gn-border-str)] shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/perfil"
            aria-label="Volver a perfil"
            className="w-9 h-9 rounded-full bg-[var(--gn-surface)] border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
          </Link>
          <h1 className="text-lg font-bold">Recompensas</h1>
        </div>
        
        {/* Saldo Disponible Box */}
        <div className="mt-4 bg-[var(--gn-bg)] border border-[var(--gn-primary)]/30 rounded-2xl p-4 flex justify-between items-center shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gn-primary)] blur-2xl pointer-events-none" />
          <span className="text-sm text-[var(--gn-base)]">Saldo Disponible</span>
          <div className="text-2xl font-black text-[var(--gn-primary)] flex items-center gap-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <Coins size={22} className="text-[var(--gn-primary)] animate-pulse" />
            <span>{balance.toLocaleString()} GPts</span>
          </div>
        </div>
      </header>

      {/* 2. Barra de Filtros */}
      <div className="mt-4 px-4 pb-2 shrink-0">
        <div className="flex gap-3 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs transition duration-300 whitespace-nowrap snap-center cursor-pointer ${
                  active
                    ? "bg-[var(--gn-primary)] text-[var(--gn-bg)] font-bold shadow-md shadow-[var(--gn-primary)]-500/20"
                    : "bg-gn-card border border-[var(--gn-border-str)] text-[var(--gn-sub)] hover:bg-[var(--gn-surface)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Grid de Recompensas */}
      <main className="flex-1 overflow-y-auto p-4 pb-24 [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-2 gap-4">
          {filteredRewards.map((reward) => {
            const isLocked = balance < reward.cost;
            const isRedeemed = redeemed.includes(reward.id);
            
            return (
              <div
                key={reward.id}
                className={`bg-gn-card border border-[var(--gn-border-str)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] shadow-md ${
                  isLocked && !isRedeemed ? "opacity-60 grayscale border-[var(--gn-border-str)]/50" : ""
                }`}
              >
                {/* Imagen Superior */}
                <div className="h-24 bg-[var(--gn-surface)] relative shrink-0">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                  {isRedeemed && (
                    <div className="absolute inset-0 bg-[var(--gn-bg)] backdrop-blur-[2px] flex items-center justify-center text-xs font-black text-[var(--gn-primary)]">
                      CANJEADO
                    </div>
                  )}
                  {isLocked && !isRedeemed && (
                    <div className="absolute top-2 right-2 w-7 h-7 bg-[var(--gn-bg)] border border-slate-850 rounded-full flex items-center justify-center text-[var(--gn-base)] shadow-md">
                      <Lock size={12} />
                    </div>
                  )}
                </div>

                {/* Cuerpo */}
                <div className="p-3 flex-1 flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--gn-sub)]">
                    {reward.category}
                  </span>
                  <h3 className="text-xs font-bold text-[var(--gn-base)] leading-tight mt-1 line-clamp-2">
                    {reward.title}
                  </h3>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-3 flex justify-between items-center">
                    <span className={`text-xs font-bold ${isLocked && !isRedeemed ? "text-[var(--gn-sub)]" : "text-[var(--gn-primary)]"}`}>
                      {reward.cost} GPts
                    </span>
                    {isRedeemed ? (
                      <div className="w-7 h-7 rounded-full bg-[var(--gn-primary)] border border-[var(--gn-primary)]/20 text-[var(--gn-primary)] flex items-center justify-center">
                        <Check size={14} />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSelectReward(reward)}
                        disabled={isLocked}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          isLocked
                            ? "bg-[var(--gn-surface)] text-[var(--gn-sub)] cursor-not-allowed"
                            : "bg-[var(--gn-primary)] text-[var(--gn-bg)] hover:bg-[#4ADE80] active:scale-90 shadow-[0_2px_8px_rgba(16,185,129,0.3)]"
                        }`}
                        title={isLocked ? "Puntos insuficientes" : "Canjear recompensa"}
                      >
                        <Plus size={16} strokeWidth={3} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Redemption Overlay Modal */}
      {selectedReward && (
        <div className="absolute inset-0 bg-[var(--gn-bg)] flex items-center justify-center p-4 z-50 overflow-hidden animate-in fade-in duration-200">
          {/* Card Contenedor */}
          <div className="w-full bg-gn-card border border-[var(--gn-border-str)] rounded-[2rem] p-6 flex flex-col shadow-2xl relative animate-in scale-in duration-200">
            {/* Botón de cerrar (X) */}
            <button
              type="button"
              onClick={() => setSelectedReward(null)}
              className="absolute top-4 right-4 text-[var(--gn-base)] hover:text-[var(--gn-base)] transition cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Imagen central */}
            <div className="w-20 h-20 rounded-full border-4 border-[var(--gn-card)] bg-[var(--gn-surface)] flex items-center justify-center mx-auto -mt-12 shadow-lg relative shrink-0">
              <Ticket className="text-[var(--gn-base)] w-10 h-10" />
            </div>

            {/* Información de la Recompensa */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-[var(--gn-base)] leading-tight">
                {selectedReward.title}
              </h2>
              <p className="text-sm text-[var(--gn-base)] mt-2 leading-relaxed">
                {selectedReward.description}
              </p>
            </div>

            {/* Zona de Transacción */}
            <div className="bg-[var(--gn-bg)] rounded-xl p-4 mt-6 flex flex-col gap-2 border border-[var(--gn-card)]/40">
              {/* Fila 1 */}
              <div className="flex justify-between items-center text-xs text-[var(--gn-base)]">
                <span>Costo de recompensa</span>
                <span className="text-[#f87171] font-bold">-{selectedReward.cost} GPts</span>
              </div>
              {/* Fila 2 */}
              <div className="flex justify-between items-center text-xs text-[var(--gn-base)] border-t border-[var(--gn-border-str)]/40 pt-2">
                <span>Nuevo saldo estimado</span>
                <span className="text-[var(--gn-primary)] font-bold">
                  {(balance - selectedReward.cost).toLocaleString()} GPts
                </span>
              </div>
            </div>

            {/* Botón de Acción */}
            <button
              type="button"
              onClick={handleConfirmRedeem}
              className="bg-[var(--gn-primary)] hover:bg-[var(--gn-primary)] active:scale-95 text-[var(--gn-bg)] font-black py-4 rounded-xl w-full mt-6 transition duration-200 cursor-pointer shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
            >
              Canjear ahora
            </button>

            {/* Texto microscópico */}
            <p className="text-xs text-[var(--gn-sub)] text-center mt-2 font-medium">
              Esta acción no se puede deshacer.
            </p>
          </div>
        </div>
      )}
      <BottomNav />
    </div>
  );
}
