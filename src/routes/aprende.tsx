import { BottomNav } from "../components/BottomNav";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, Search, Trash2, Camera,
  Droplets, Sprout, ArrowLeft, Clock, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/aprende")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as "main" | "guias" | "noticias") || "main",
    };
  },
  head: () => ({
    meta: [
      { title: "Aprende — Greenio" },
      { name: "description", content: "Guías prácticas y noticias ambientales de Greenio." },
    ],
  }),
  component: Aprende,
});

/* ── Datos ── */
const bins = [
  { id: "papel", color: "text-[#3b82f6]", bg: "bg-[#eff6ff]", border: "border-[#bfdbfe]", label: "Papel y Cartón" },
  { id: "plastico", color: "text-[#eab308]", bg: "bg-[#fefce8]", border: "border-[#fef08a]", label: "Plásticos y Metales" },
  { id: "vidrio", color: "text-[var(--gn-primary)]", bg: "bg-[var(--gn-surface)]", border: "border-[var(--gn-border-str)]", label: "Vidrio" },
  { id: "peligrosos", color: "text-[var(--gn-red)]", bg: "bg-[var(--gn-red-lt)]", border: "border-[#fecaca]", label: "Peligrosos" },
  { id: "organicos", color: "text-[#92400e]", bg: "bg-[var(--gn-amber-lt)]", border: "border-[#fde68a]", label: "Orgánicos" },
  { id: "no_aprovechables", color: "text-[var(--gn-sub)]", bg: "bg-[#f3f4f6]", border: "border-[#e5e7eb]", label: "No Aprovechables" },
];

const guias = [
  {
    icon: <Droplets size={14} />,
    tag: "Agua",
    tagBg: "bg-sky-600",
    tagColor: "text-white",
    tagBorder: "border-sky-700",
    title: "5 formas fáciles de ahorrar agua en casa",
    mins: "4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn4t5jK3rq8hDPeXjFQKB7fk0GZjCO5YrKSoaS9Rs-Tt_x1sfzPmRVJg&s=10",
    desc: "Aprende pequeños hábitos cotidianos en casa para reducir drásticamente tu consumo de agua potable."
  },
  {
    icon: <Sprout size={14} />,
    tag: "Hogar",
    tagBg: "bg-green-600",
    tagColor: "text-white",
    tagBorder: "border-green-700",
    title: "Cómo iniciar tu huerto urbano en Lima",
    mins: "6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lua0e7G_9yQdvHW9yrggifJY07GFZGervhu0mqrHIQ&s=10",
    desc: "Guía práctica paso a paso para sembrar tus propias hortalizas y plantas aromáticas en espacios reducidos."
  },
  {
    icon: <Leaf size={14} />,
    tag: "Hábitos",
    tagBg: "bg-emerald-600",
    tagColor: "text-white",
    tagBorder: "border-emerald-700",
    title: "Reduce tu huella de carbono diaria",
    mins: "5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KmUsMYdLaaIDDn0JMU_fHPi0l5xJSk58tGE5dhxJpieYYYAoVZWP7kgm&s=10",
    desc: "Reduce tu huella ecológica a través de pequeños ajustes diarios en transporte, energía y alimentación."
  },
  {
    icon: <Camera size={14} />,
    tag: "Reciclaje",
    tagBg: "bg-teal-600",
    tagColor: "text-white",
    tagBorder: "border-teal-700",
    title: "Cómo reciclar correctamente en Lima",
    mins: "3",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80",
    desc: "Conoce los puntos de acopio, colores oficiales y formas de entregar tus residuos reciclables en la ciudad."
  },
  {
    icon: <Droplets size={14} />,
    tag: "Energía",
    tagBg: "bg-amber-500",
    tagColor: "text-white",
    tagBorder: "border-amber-600",
    title: "Ahorra luz con estos 7 consejos",
    mins: "4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TtYS3btGr5x70oOIPZGCCvnhGNkZovC7u-t-rWdmfw&s=10",
    desc: "Consejos eficientes para optimizar tus electrodomésticos y evitar el consumo fantasma de energía."
  },
];

const noticias = [
  {
    tag: "Noticia",
    tagBg: "bg-indigo-600",
    tagColor: "text-white",
    tagBorder: "border-indigo-700",
    time: "2 min",
    title: "Lima reduce un 12% sus residuos sólidos este año",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5idzoSkULV5H_F8iCx1FTGuqSOBhAnIorj_-fxX8HmA_l6iaSideVRsK&s=10",
    desc: "La municipalidad reporta un cambio positivo en hábitos de segregación ciudadana en Lima este semestre."
  },
  {
    tag: "Política",
    tagBg: "bg-rose-600",
    tagColor: "text-white",
    tagBorder: "border-rose-700",
    time: "3 min",
    title: "Nueva ley de envases retornables entra en vigencia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPBHQ9EZqwo9cAZutckNfEgapdckv518F9EQPXTLElQ&s=10",
    desc: "Nueva normativa promueve el uso de envases de vidrio y plástico retornable en supermercados y bodegas."
  },
  {
    tag: "Ciencia",
    tagBg: "bg-violet-600",
    tagColor: "text-white",
    tagBorder: "border-violet-700",
    time: "4 min",
    title: "Estudio revela impacto del reciclaje en Lima Metropolitana",
    image: "https://aulaambiental.minam.gob.pe/wp-content/uploads/2020/10/4.-La-ruta-del-reciclaje.png",
    desc: "Investigación detalla los beneficios económicos y ambientales de formalizar a los recicladores urbanos."
  },
  {
    tag: "Evento",
    tagBg: "bg-orange-500",
    tagColor: "text-white",
    tagBorder: "border-orange-600",
    time: "2 min",
    title: "Gran campaña de limpieza en el Rímac este sábado",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPr8vwYkYAlpeKhfwhL1w0jIi9ITeMUIqrSEbhlzmzh6r8ubGoP_GWTA&s=10",
    desc: "Organizaciones civiles convocan a voluntarios para recuperar las riberas del río Rímac este fin de semana."
  },
  {
    tag: "Datos",
    tagBg: "bg-purple-600",
    tagColor: "text-white",
    tagBorder: "border-purple-700",
    time: "3 min",
    title: "Perú produce 23,000 toneladas de residuos al día",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=400&q=80",
    desc: "Estudio nacional alerta sobre la urgencia de crear más rellenos sanitarios y plantas de compostaje."
  },
];

/* ── Vista listado guías ── */
function ListadoGuias() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterTags = ["Todas", "Agua", "Hogar", "Hábitos", "Reciclaje", "Energía"];

  const filteredGuias = activeFilter
    ? guias.filter((g) => g.tag.toLowerCase() === activeFilter.toLowerCase())
    : guias;

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        <header className="flex items-center gap-3 mb-4">
          <Link to="/aprende" search={{ tab: "main" }}
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition cursor-pointer hover:scale-105 active:scale-95">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Guías Prácticas</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Guías prácticas</p>
          </div>
        </header>

        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl px-4 py-3 flex items-center gap-2 mb-4 shadow-sm">
          <Search size={16} className="text-[var(--gn-primary-dk)]" />
          <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
            placeholder="Buscar guías…" />
        </div>

        {/* Filtros por etiquetas */}
        <div className="flex gap-2 overflow-x-auto pb-4 pt-1 -mx-4 px-4 scrollbar-hide">
          {filterTags.map((tag) => {
            const isActive = (activeFilter === tag) || (tag === "Todas" && !activeFilter);
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag === "Todas" ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer whitespace-nowrap hover:scale-105 active:scale-95 ${
                  isActive
                    ? "bg-[var(--gn-primary)] text-white border-[var(--gn-primary-dk)] shadow-sm"
                    : "bg-gn-card text-[var(--gn-sub)] border-[var(--gn-border)] hover:bg-[var(--gn-surface)]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          {filteredGuias.map((g, i) => (
            <Link to="/guia-practica" key={i}
              className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-3.5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]">
              <div className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-[var(--gn-border)] shadow-inner"
                style={{ backgroundImage: `url(${g.image})` }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center text-[8px] font-black uppercase tracking-wider ${g.tagBg} ${g.tagColor} border ${g.tagBorder} rounded-full px-2 py-0.5 shadow-sm`}>
                    {g.tag}
                  </span>
                  <span className="text-[9px] text-[var(--gn-hint)] flex items-center gap-1"><Clock size={10} /> {g.mins} min</span>
                </div>
                <p className="text-[12px] font-bold text-[var(--gn-base)] leading-snug line-clamp-1">{g.title}</p>
                <p className="text-[10px] text-[var(--gn-sub)] mt-0.5 line-clamp-1 leading-normal">{g.desc}</p>
              </div>
              <ChevronRight size={16} className="text-[var(--gn-border-str)] shrink-0" />
            </Link>
          ))}
          {filteredGuias.length === 0 && (
            <p className="text-center text-xs text-[var(--gn-hint)] mt-6">No hay guías en esta categoría.</p>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

/* ── Vista listado noticias ── */
function ListadoNoticias() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterTags = ["Todas", "Noticia", "Política", "Ciencia", "Evento", "Datos"];

  const filteredNoticias = activeFilter
    ? noticias.filter((n) => n.tag.toLowerCase() === activeFilter.toLowerCase())
    : noticias;

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">
        <header className="flex items-center gap-3 mb-4">
          <Link to="/aprende" search={{ tab: "main" }}
            className="w-9 h-9 rounded-full bg-gn-card border border-[var(--gn-border-str)] flex items-center justify-center text-[var(--gn-sub)] hover:text-[var(--gn-primary)] transition cursor-pointer hover:scale-105 active:scale-95">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-[var(--gn-base)]">Noticias Ambientales</h1>
            <p className="text-[11px] text-[var(--gn-hint)]">Aprende › Noticias ambientales</p>
          </div>
        </header>

        <div className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl px-4 py-3 flex items-center gap-2 mb-4 shadow-sm">
          <Search size={16} className="text-[var(--gn-primary-dk)]" />
          <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
            placeholder="Buscar noticias…" />
        </div>

        {/* Filtros por etiquetas */}
        <div className="flex gap-2 overflow-x-auto pb-4 pt-1 -mx-4 px-4 scrollbar-hide">
          {filterTags.map((tag) => {
            const isActive = (activeFilter === tag) || (tag === "Todas" && !activeFilter);
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag === "Todas" ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer whitespace-nowrap hover:scale-105 active:scale-95 ${
                  isActive
                    ? "bg-[var(--gn-primary)] text-white border-[var(--gn-primary-dk)] shadow-sm"
                    : "bg-gn-card text-[var(--gn-sub)] border-[var(--gn-border)] hover:bg-[var(--gn-surface)]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          {filteredNoticias.map((n, i) => (
            <Link to="/noticia" key={i}
              className="bg-gn-card border border-[var(--gn-border-str)] rounded-2xl p-3.5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]">
              <div className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-[var(--gn-border)] shadow-inner"
                style={{ backgroundImage: `url(${n.image})` }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center text-[8px] font-black uppercase tracking-wider ${n.tagBg} ${n.tagColor} border ${n.tagBorder} rounded-full px-2 py-0.5 shadow-sm`}>
                    {n.tag}
                  </span>
                  <span className="text-[9px] text-[var(--gn-hint)] flex items-center gap-1"><Clock size={10} /> {n.time}</span>
                </div>
                <p className="text-[12px] font-bold text-[var(--gn-base)] leading-snug line-clamp-1">{n.title}</p>
                <p className="text-[10px] text-[var(--gn-sub)] mt-0.5 line-clamp-1 leading-normal">{n.desc}</p>
              </div>
              <ChevronRight size={16} className="text-[var(--gn-border-str)] shrink-0" />
            </Link>
          ))}
          {filteredNoticias.length === 0 && (
            <p className="text-center text-xs text-[var(--gn-hint)] mt-6">No hay noticias en esta categoría.</p>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

/* ── Vista principal Aprende ── */
function Aprende() {
  const { tab } = Route.useSearch();

  if (tab === "guias")    return <ListadoGuias />;
  if (tab === "noticias") return <ListadoNoticias />;

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] relative overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-4 pt-6">

        <header>
          <h1 className="text-2xl font-bold text-[var(--gn-base)] flex items-center gap-2">
            Aprende <Leaf size={20} className="text-[var(--gn-primary-dk)]" />
          </h1>
          <p className="text-xs text-[var(--gn-primary-dk)] mt-1 font-medium">Aprende, actúa y transforma tu entorno</p>
        </header>

        {/* Buscador */}
        <div className="mt-5">
          <div className="bg-gn-card border border-[var(--gn-border)] rounded-xl px-4 py-3 flex items-center gap-2 w-full shadow-sm">
            <Search size={16} className="text-[var(--gn-primary-dk)]" />
            <input className="bg-transparent outline-none text-sm w-full text-[var(--gn-base)] placeholder:text-[var(--gn-hint)]"
              placeholder="¿Qué quieres aprender hoy?" />
          </div>
        </div>

        {/* Segregación */}
        <section className="mt-6">
          <h2 className="font-bold text-[var(--gn-base)] text-sm">Guía de Segregación</h2>
          <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">¿Dónde va cada residuo?</p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {bins.map((b) => (
              <Link to="/guia-segregacion" search={{ bin: b.id }} key={b.label}
                className={`bg-gn-card border ${b.border} rounded-xl p-3 flex items-center gap-3 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-left shadow-sm cursor-pointer`}>
                <div className={`h-9 w-9 rounded-lg ${b.bg} border ${b.border} grid place-items-center shrink-0`}>
                  <Trash2 size={18} className={b.color} />
                </div>
                <span className="text-[11px] font-semibold text-[var(--gn-base)] leading-tight">{b.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Banner CTA */}
        <section className="mt-5 bg-gn-card border border-[var(--gn-border)] rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
          <p className="text-xs text-[var(--gn-sub)] leading-snug">
            Separar bien los residuos es el primer paso para cuidar nuestro planeta.
          </p>
          <Link to="/registra"
            className="mt-3 text-white font-bold py-2.5 px-6 rounded-full w-full flex justify-center items-center gap-2 hover:opacity-90 transition active:scale-95 shadow-md cursor-pointer"
            style={{ background: "var(--gn-primary)" }}>
            <Camera size={16} /> Ir a Registrar Acción
          </Link>
        </section>

        {/* Guías Prácticas */}
        <section className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-[var(--gn-base)] text-sm">Guías Prácticas</h2>
              <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">Hábitos sostenibles para tu día a día</p>
            </div>
            <Link to="/aprende" search={{ tab: "guias" }}
              className="text-[11px] text-[var(--gn-primary-dk)] font-bold underline underline-offset-2 cursor-pointer hover:text-[var(--gn-primary)] transition-colors">
              Ver todas
            </Link>
          </div>
          {/* Scroll horizontal */}
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
            {guias.map((g, i) => (
              <Link to="/guia-practica" key={i} className="snap-start shrink-0 cursor-pointer block hover:scale-[1.02] transition-transform duration-200">
                <article className="relative rounded-2xl overflow-hidden w-72 h-48 border border-[var(--gn-border-str)] shadow-md flex flex-col justify-between p-4"
                  style={{
                    backgroundImage: `url(${g.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  {/* Overlay oscuro para legibilidad */}
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  
                  {/* Contenido z-10 */}
                  <div className="relative z-10 flex flex-col justify-between h-full text-white">
                    <div>
                      <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider ${g.tagBg} ${g.tagColor} border ${g.tagBorder} rounded-full px-2.5 py-0.5 shadow-sm`}>
                        {g.icon} {g.tag}
                      </span>
                      <h3 className="text-[13px] font-extrabold leading-snug mt-2 text-white line-clamp-2 drop-shadow-md">
                        {g.title}
                      </h3>
                      <p className="text-[10px] text-white/80 font-normal mt-1 line-clamp-2 leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/70 font-semibold border-t border-white/10 pt-2 mt-2">
                      <span className="flex items-center gap-1"><Clock size={11} /> {g.mins} min de lectura</span>
                      <span className="text-white hover:underline flex items-center gap-0.5">Leer más ›</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Noticias Ambientales */}
        <section className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-[var(--gn-base)] text-sm">Noticias Ambientales</h2>
              <p className="text-[11px] text-[var(--gn-primary-dk)] font-medium mt-0.5">Lo más reciente de Lima y Perú</p>
            </div>
            <Link to="/aprende" search={{ tab: "noticias" }}
              className="text-[11px] text-[var(--gn-primary-dk)] font-bold underline underline-offset-2 cursor-pointer hover:text-[var(--gn-primary)] transition-colors">
              Ver todas
            </Link>
          </div>
          {/* Scroll horizontal */}
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
            {noticias.map((n, i) => (
              <Link to="/noticia" key={i} className="snap-start shrink-0 cursor-pointer block hover:scale-[1.02] transition-transform duration-200">
                <article className="relative rounded-2xl overflow-hidden w-72 h-48 border border-[var(--gn-border-str)] shadow-md flex flex-col justify-between p-4"
                  style={{
                    backgroundImage: `url(${n.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  
                  {/* Contenido z-10 */}
                  <div className="relative z-10 flex flex-col justify-between h-full text-white">
                    <div>
                      <span className={`inline-flex items-center text-[9px] font-bold uppercase tracking-wider ${n.tagBg} ${n.tagColor} border ${n.tagBorder} rounded-full px-2.5 py-0.5 shadow-sm`}>
                        {n.tag}
                      </span>
                      <h3 className="text-[13px] font-extrabold leading-snug mt-2 text-white line-clamp-2 drop-shadow-md">
                        {n.title}
                      </h3>
                      <p className="text-[10px] text-white/80 font-normal mt-1 line-clamp-2 leading-relaxed">
                        {n.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/70 font-semibold border-t border-white/10 pt-2 mt-2">
                      <span className="flex items-center gap-1"><Clock size={11} /> {n.time}</span>
                      <span className="text-white hover:underline flex items-center gap-0.5">Ver noticia ›</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
