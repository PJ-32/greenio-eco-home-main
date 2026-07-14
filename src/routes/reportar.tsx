import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Target,
  Locate,
  Trash2,
  Construction,
  Sprout,
  MoreHorizontal,
  Camera,
  X,
  CheckCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import streetMapImg from "@/assets/street_map.png";

export const Route = createFileRoute("/reportar")({
  head: () => ({
    meta: [
      { title: "Reportar Punto Crítico — Greenio" },
      {
        name: "description",
        content: "Crea un reporte de punto crítico en tu zona y ayuda a la comunidad Greenio a limpiar el Callao.",
      },
    ],
  }),
  component: CrearReporte,
});

type ProblemType = "basura" | "escombros" | "areas_verdes" | "otro";

function CrearReporte() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<ProblemType>("basura");
  const [description, setDescription] = useState("");
  const [locationName, setLocationName] = useState("Callao District (Av. Arica)");
  const [isLocating, setIsLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [evidencePhoto, setEvidencePhoto] = useState<string | null>(null);

  // Simula la detección de ubicación
  const handleUseLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocationName("Av. Elmer Faucett 2341, Callao");
      setIsLocating(false);
    }, 1200);
  };

  // Simula subir una foto
  const handleUploadPhoto = () => {
    // Si ya hay foto, la quitamos
    if (evidencePhoto) {
      setEvidencePhoto(null);
      return;
    }
    // Si no hay foto, simulamos subir una de basura/problema
    setEvidencePhoto("https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=300&q=80");
  };

  // Simula enviar el formulario
  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-[var(--gn-bg)] text-[var(--gn-base)] relative flex flex-col shadow-2xl">
      {/* 1. Header Superior */}
      <header className="pt-12 px-4 pb-4 border-b border-[var(--gn-border-str)] bg-gn-card flex flex-col shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/comunidad"
            aria-label="Volver"
            className="bg-[var(--gn-surface)] hover:bg-[var(--gn-surface)] p-2 rounded-full text-[var(--gn-sub)] hover:text-[var(--gn-base)] transition flex items-center justify-center"
          >
            <ArrowLeft size={16} />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-[var(--gn-base)] uppercase tracking-wide truncate">
              Reportar Punto Crítico
            </h1>
          </div>
        </div>
        {/* Indicador de pasos */}
        <div className="flex gap-4 mt-2 px-1">
          <span className="text-[10px] font-bold text-[var(--gn-primary)] uppercase tracking-wider">
            Paso 1
          </span>
          <span className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">→</span>
          <span className="text-[10px] font-bold text-[var(--gn-primary)] uppercase tracking-wider">
            Paso 2
          </span>
          <span className="text-[10px] text-[var(--gn-sub)] font-bold uppercase tracking-wider">→</span>
          <span className="text-[10px] font-bold text-[var(--gn-primary)] uppercase tracking-wider">
            Paso 3
          </span>
        </div>
      </header>

      {/* 2. Formulario con Scroll */}
      <form
        onSubmit={handleSubmitReport}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 scrollbar-hide pb-28"
      >
        {/* 3. Sección 1: Ubicación */}
        <section className="flex flex-col">
          <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider mb-2">
            1. Ubicación del problema
          </h2>
          {/* Contenedor de Mapa */}
          <div className="bg-gn-card h-32 rounded-xl relative flex items-center justify-center border border-[var(--gn-border-str)] overflow-hidden shadow-inner group">
            {/* Imagen del mapa */}
            <img
              src={streetMapImg}
              alt="Mapa del punto a reportar"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-500"
            />
            {/* Filtro oscuro */}
            <div className="absolute inset-0 bg-[var(--gn-bg)]" />

            {/* Ícono de target/radar verde en el centro */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <span className="absolute -inset-2.5 rounded-full bg-[var(--gn-primary)] animate-ping" />
              <Target
                size={28}
                className="text-[var(--gn-primary)] relative z-10 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              />
              <span className="bg-[var(--gn-bg)] text-[9px] text-[var(--gn-sub)] px-2 py-0.5 rounded-md border border-[var(--gn-border-str)] font-semibold truncate max-w-[200px] shadow-sm">
                {isLocating ? "Detectando..." : locationName}
              </span>
            </div>
          </div>

          {/* Botón de ubicación actual */}
          <button
            type="button"
            onClick={handleUseLocation}
            disabled={isLocating}
            className="bg-gn-card hover:bg-slate-850 border border-[var(--gn-primary)]/30 text-[var(--gn-primary)] py-2.5 rounded-xl mt-3 w-full flex justify-center items-center gap-2 text-xs font-bold transition duration-300 active:scale-[0.98] disabled:opacity-50"
          >
            {isLocating ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Locate size={14} />
            )}
            {isLocating ? "Obteniendo coordenadas..." : "Usar mi ubicación actual"}
          </button>
        </section>

        {/* 4. Sección 2: Tipo de Problema */}
        <section className="flex flex-col">
          <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider mb-3">
            2. Tipo de problema
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Tarjeta 1: Acumulación de basura */}
            <button
              type="button"
              onClick={() => setSelectedType("basura")}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2.5 text-center transition duration-300 ${
                selectedType === "basura"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  : "bg-gn-card border-[var(--gn-border-str)] text-[var(--gn-base)] hover:border-[var(--gn-border-str)] hover:text-[var(--gn-sub)]"
              }`}
            >
              <Trash2 size={22} className={selectedType === "basura" ? "animate-bounce" : ""} />
              <span className="text-xs font-bold">Acumulación de basura</span>
            </button>

            {/* Tarjeta 2: Desmonte o escombros */}
            <button
              type="button"
              onClick={() => setSelectedType("escombros")}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2.5 text-center transition duration-300 ${
                selectedType === "escombros"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  : "bg-gn-card border-[var(--gn-border-str)] text-[var(--gn-base)] hover:border-[var(--gn-border-str)] hover:text-[var(--gn-sub)]"
              }`}
            >
              <Construction size={22} className={selectedType === "escombros" ? "animate-pulse" : ""} />
              <span className="text-xs font-bold">Desmonte o escombros</span>
            </button>

            {/* Tarjeta 3: Falta de áreas verdes */}
            <button
              type="button"
              onClick={() => setSelectedType("areas_verdes")}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2.5 text-center transition duration-300 ${
                selectedType === "areas_verdes"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  : "bg-gn-card border-[var(--gn-border-str)] text-[var(--gn-base)] hover:border-[var(--gn-border-str)] hover:text-[var(--gn-sub)]"
              }`}
            >
              <Sprout size={22} className={selectedType === "areas_verdes" ? "animate-pulse" : ""} />
              <span className="text-xs font-bold">Falta de áreas verdes</span>
            </button>

            {/* Tarjeta 4: Otro problema */}
            <button
              type="button"
              onClick={() => setSelectedType("otro")}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2.5 text-center transition duration-300 ${
                selectedType === "otro"
                  ? "bg-[var(--gn-base)] border-[var(--gn-primary)] text-[var(--gn-primary)] shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  : "bg-gn-card border-[var(--gn-border-str)] text-[var(--gn-base)] hover:border-[var(--gn-border-str)] hover:text-[var(--gn-sub)]"
              }`}
            >
              <MoreHorizontal size={22} />
              <span className="text-xs font-bold">Otro problema</span>
            </button>
          </div>
        </section>

        {/* 5. Sección 3 y 4: Descripción y Evidencia */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider mb-2">
              3. Descripción
            </h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe el problema observado..."
              className="bg-gn-card border border-[var(--gn-border-str)] rounded-xl p-3 w-full h-24 placeholder-slate-600 text-xs text-[var(--gn-base)] focus:outline-none focus:border-[var(--gn-primary)] transition duration-300 resize-none font-medium leading-relaxed"
            />
          </div>

          <div>
            <h2 className="text-xs font-bold text-[var(--gn-base)] uppercase tracking-wider mb-2">
              4. Evidencia (Foto)
            </h2>
            {evidencePhoto ? (
              <div className="relative rounded-xl overflow-hidden border border-[var(--gn-border-str)] h-32 group">
                <img
                  src={evidencePhoto}
                  alt="Evidencia del problema"
                  className="w-full h-full object-cover brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-[var(--gn-bg)]" />
                <button
                  type="button"
                  onClick={() => setEvidencePhoto(null)}
                  className="absolute top-2 right-2 bg-[var(--gn-bg)] hover:bg-[#f87171] p-1.5 rounded-full text-[var(--gn-base)] transition flex items-center justify-center shadow-lg"
                  aria-label="Eliminar foto"
                >
                  <X size={14} />
                </button>
                <div className="absolute bottom-2 left-2 bg-[var(--gn-primary)] text-[var(--gn-bg)] text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow">
                  <CheckCircle size={10} />
                  <span>Foto cargada</span>
                </div>
              </div>
            ) : (
              <div
                onClick={handleUploadPhoto}
                className="bg-gn-card border-2 border-dashed border-[var(--gn-border-str)] hover:border-[var(--gn-primary)]/40 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition duration-300 group hover:bg-gn-card shadow-inner"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--gn-surface)] flex items-center justify-center group-hover:scale-110 transition duration-300 text-[var(--gn-primary)] shadow-sm border border-[var(--gn-border-str)]/50">
                  <Camera size={20} />
                </div>
                <span className="text-xs font-bold text-[var(--gn-sub)]">Toma o sube una foto</span>
                <span className="text-[9px] text-[var(--gn-sub)] font-medium">Formatos JPG, PNG (máx 5MB)</span>
              </div>
            )}
          </div>
        </section>
      </form>

      {/* 6. Bottom Bar Fija */}
      <footer className="absolute bottom-0 w-full bg-gn-card border-t border-[var(--gn-border-str)] p-4 z-50 flex flex-col shrink-0">
        <button
          onClick={handleSubmitReport}
          disabled={isSubmitting}
          className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-black py-4 rounded-xl w-full text-center active:scale-[0.98] transition duration-300 text-xs uppercase tracking-wider flex justify-center items-center gap-2 shadow-[0_4px_12px_rgba(16,185,129,0.35)] disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            "Enviar Reporte"
          )}
          {isSubmitting && "Enviando Reporte..."}
        </button>
        <p className="text-[10px] text-center mt-2.5 text-[var(--gn-base)] font-medium tracking-wide">
          Tu reporte será revisado por la comunidad.
        </p>
      </footer>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="absolute inset-0 bg-[var(--gn-bg)] flex flex-col items-center justify-center p-6 text-center z-[100] animate-in fade-in zoom-in-95 duration-200">
          {/* Círculo con el escudo de verificación */}
          <div className="w-24 h-24 bg-[var(--gn-primary)] rounded-full flex items-center justify-center border border-[var(--gn-primary)]/20 mb-6 relative">
            <span className="absolute inset-0 rounded-full bg-[var(--gn-primary)] animate-ping" />
            <div className="relative w-16 h-16 rounded-full bg-[var(--gn-primary)] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <ShieldCheck size={32} className="text-[var(--gn-bg)] animate-bounce" />
            </div>
          </div>
          
          <h2 className="text-xl font-black text-[var(--gn-base)] tracking-tight mb-2">
            ¡Gracias por tu compromiso!
          </h2>
          <p className="text-xs text-[var(--gn-base)] font-medium leading-relaxed max-w-[280px] mb-8">
            Tu reporte ha sido enviado y está siendo verificado por nuestra comunidad y el sistema de fiscalización ambiental.
          </p>

          <Link
            to="/comunidad"
            search={{ tab: "reportes" }}
            className="bg-[var(--gn-primary)] hover:bg-[#4ADE80] text-[var(--gn-bg)] font-bold py-3.5 px-6 rounded-xl w-full text-center text-xs uppercase tracking-wider transition duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:scale-[1.01] active:scale-[0.98]"
          >
            Volver a Reportes
          </Link>
        </div>
      )}
    </div>
  );
}
