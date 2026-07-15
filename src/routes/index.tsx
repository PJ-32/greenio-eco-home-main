import { BottomNav } from "../components/BottomNav";
import { NivelModal } from "../components/NivelModal";
import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home as HomeIcon,
  BookOpen,
  Users,
  Award,
  Plus,
  Sprout,
  User,
  Droplets,
  TreePine,
  PawPrint,
  Recycle,
  CheckCircle2,
  ListChecks,
  Truck,
  MapPin,
  Gift,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Greenio — Tu Ecosistema" },
      {
        name: "description",
        content: "Greenio: registra hábitos sostenibles, gana GPts y haz crecer tu ecosistema.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [nivelModal, setNivelModal] = React.useState(false);
  return (
    <div className="max-w-md mx-auto h-screen text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl"
         style={{ background: "linear-gradient(160deg, var(--gn-bg) 0%, var(--gn-bg) 45%, var(--gn-bg) 100%)" }}>

      <div className="flex-1 overflow-y-auto pb-24 pt-6 px-4 scrollbar-hide">

        {/* 1. Header */}
        <header className="flex justify-between items-start">
          <div className="min-w-0 pr-3">
            <h1 className="text-2xl font-bold leading-tight flex items-center gap-1.5 text-[var(--gn-base)]">
              ¡Hola, Khalep! <Sprout size={20} className="text-[var(--gn-primary)] shrink-0" />
            </h1>
            <p className="text-xs text-[var(--gn-sub)] mt-1 font-medium">
              Es un buen día para registrar una acción sostenible
            </p>
          </div>

          <Link to="/perfil" className="flex flex-col items-center shrink-0 hover:opacity-90 transition-opacity cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-gn-card border-2 border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-base)] shadow-md">
              <User size={20} />
            </div>
            <span className="mt-1.5 bg-[var(--gn-surface)] text-[var(--gn-base)] text-[10px] font-bold rounded-full px-2.5 py-0.5 border border-[var(--gn-border-str)]">
              Nivel: Brote
            </span>
          </Link>
        </header>

        {/* 2. Tarjeta Ecosistema */}
        <section className="mt-5 bg-gn-card rounded-3xl p-4 shadow-lg border border-[var(--gn-border-str)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-bold text-sm text-[var(--gn-base)]">Tu Ecosistema</h2>
              <p className="text-[10px] text-[var(--gn-sub)] font-medium">Crece con acciones verificadas</p>
            </div>
            <div className="flex rounded-full text-[10px] p-0.5 border border-[var(--gn-border-str)] bg-[var(--gn-bg)]">
              <button className="px-2.5 py-0.5 rounded-full bg-[var(--gn-primary)] text-white font-bold">Semanal</button>
              <button className="px-2.5 py-0.5 rounded-full text-[var(--gn-hint)]">Mensual</button>
              <button className="px-2.5 py-0.5 rounded-full text-[var(--gn-hint)]">Total</button>
            </div>
          </div>

          {/* Bosque + 4 datos */}
          <div className="relative flex justify-center items-center py-10 my-2 min-h-[190px]"
               style={{ background: "linear-gradient(180deg, var(--gn-surface) 0%, var(--gn-bg) 100%)", borderRadius: "1rem" }}>
            <div className="relative flex items-end justify-center w-24 h-24">
              <TreePine size={48} className="text-[var(--gn-primary-dk)] absolute -bottom-1 -left-2 drop-shadow-md" />
              <TreePine size={64} className="text-[var(--gn-primary)] relative z-10 drop-shadow-lg" />
              <TreePine size={48} className="text-[var(--gn-primary-dk)] absolute -bottom-1 -right-2 drop-shadow-md" />
            </div>

            {/* Arriba Izquierda */}
            <div className="absolute top-2 left-2 bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-2 text-center text-[10px] w-[90px] shadow-md">
              <Droplets size={12} className="text-[#0ea5e9] mx-auto mb-0.5" />
              <p className="text-[#0c4a6e] font-bold leading-tight">120L agua</p>
              <p className="text-[var(--gn-hint)] text-[8px]">ahorrada</p>
            </div>

            {/* Arriba Derecha */}
            <div className="absolute top-2 right-2 bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-2 text-center text-[10px] w-[90px] shadow-md">
              <TreePine size={12} className="text-[var(--gn-primary)] mx-auto mb-0.5" />
              <p className="text-[var(--gn-base)] font-bold leading-tight">+3 árboles</p>
              <p className="text-[var(--gn-hint)] text-[8px]">plantados</p>
            </div>

            {/* Abajo Izquierda */}
            <div className="absolute bottom-2 left-2 bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-2 text-center text-[10px] w-[90px] shadow-md">
              <PawPrint size={12} className="text-[var(--gn-amber)] mx-auto mb-0.5" />
              <p className="text-[#92400e] font-bold leading-tight">5 especies</p>
              <p className="text-[var(--gn-hint)] text-[8px]">atraídas</p>
            </div>

            {/* Abajo Derecha */}
            <div className="absolute bottom-2 right-2 bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-2 text-center text-[10px] w-[90px] shadow-md">
              <Recycle size={12} className="text-[var(--gn-primary)] mx-auto mb-0.5" />
              <p className="text-[var(--gn-base)] font-bold leading-tight">14 residuos</p>
              <p className="text-[var(--gn-hint)] text-[8px]">reciclados</p>
            </div>
          </div>

          {/* Barras de progreso */}
          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--gn-surface)] pt-4">
            <div>
              <div className="flex justify-between items-center text-[10px] mb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-[var(--gn-base)]">
                  <CheckCircle2 size={12} className="text-[var(--gn-primary)]" />
                  Impacto verificado
                </span>
                <span className="text-[var(--gn-primary)] font-bold">63%</span>
              </div>
              <div className="h-2 bg-[var(--gn-surface)] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--gn-primary)] to-[#4ade80] rounded-full" style={{ width: "63%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center text-[10px] mb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-[var(--gn-base)]">
                  <ListChecks size={12} className="text-[var(--gn-primary)]" />
                  Hábitos registrados
                </span>
                <span className="text-[var(--gn-primary)] font-bold">37%</span>
              </div>
              <div className="h-2 bg-[var(--gn-surface)] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--gn-primary)] to-[#4ade80] rounded-full" style={{ width: "37%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Acciones Rápidas */}
        <section className="grid grid-cols-3 gap-3 mt-5">
          <Link to="/comunidad" search={{ tab: "camiones" }}
            className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col items-center text-center justify-between min-h-[110px] hover:border-[var(--gn-primary)] hover:shadow-md transition-all shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[var(--gn-bg)] border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-primary)]">
              <Truck size={17} />
            </div>
            <p className="text-[10px] font-bold text-[var(--gn-base)] mt-1.5 leading-tight">Mapa de Recojo</p>
            <p className="text-[9px] text-[var(--gn-hint)] mt-1 leading-tight">Próximo: 20 min</p>
          </Link>

          <Link to="/reportar"
            className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col items-center text-center justify-between min-h-[110px] hover:border-[var(--gn-primary)] hover:shadow-md transition-all shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[var(--gn-bg)] border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-primary)]">
              <MapPin size={17} />
            </div>
            <p className="text-[10px] font-bold text-[var(--gn-base)] mt-1.5 leading-tight">Reportar Punto</p>
            <p className="text-[9px] text-[var(--gn-hint)] mt-1 leading-tight">Ayuda a limpiar</p>
          </Link>

          <Link to="/perfil"
            className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-3 flex flex-col items-center text-center justify-between min-h-[110px] hover:border-[var(--gn-amber)] hover:shadow-md transition-all shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[var(--gn-amber-lt)] border border-[var(--gn-amber-lt)] flex items-center justify-center text-[var(--gn-amber)]">
              <Gift size={17} />
            </div>
            <p className="text-[10px] font-bold text-[var(--gn-base)] mt-1.5 leading-tight">Canjear Puntos</p>
            <p className="text-[9px] text-[var(--gn-hint)] mt-1 leading-tight">2,450 GPts</p>
          </Link>
        </section>

        {/* 4. Noticias */}
        <section className="mt-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-sm text-[var(--gn-base)]">Noticias Ambientales</h2>
            <Link to="/aprende" search={{ tab: "noticias" }} className="text-[11px] text-[var(--gn-primary-dk)] font-bold underline underline-offset-2">
              Ver todas
            </Link>
          </div>

          <div className="flex gap-3 overflow-x-auto mt-3 pb-2 snap-x scrollbar-hide">
            <Link to="/guia-practica" className="snap-center shrink-0">
              <article className="bg-gn-card rounded-2xl p-4 min-w-[230px] border border-[var(--gn-border-str)] shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[var(--gn-surface)] text-[var(--gn-base)] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--gn-border-str)]">
                    Guía
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[var(--gn-hint)]">
                    <Clock size={10} /> 3 min
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[var(--gn-base)] leading-snug mt-1">
                  Cómo reciclar plástico correctamente
                </h3>
              </article>
            </Link>

            <Link to="/noticia" className="snap-center shrink-0">
              <article className="bg-gn-card rounded-2xl p-4 min-w-[230px] border border-[var(--gn-border-str)] shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[var(--gn-surface)] text-[var(--gn-base)] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--gn-border-str)]">
                    Noticia
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[var(--gn-hint)]">
                    <Clock size={10} /> 2 min
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[var(--gn-base)] leading-snug mt-1">
                  Lima reducirá plásticos en el mercado
                </h3>
              </article>
            </Link>
          </div>
        </section>
      </div>
      <BottomNav />
      {nivelModal && <NivelModal onClose={() => setNivelModal(false)} />}
    </div>
  );
}
