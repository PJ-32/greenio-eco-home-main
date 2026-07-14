import { X } from "lucide-react";

const niveles = [
  { grupo: "Brote",    sub: ["I","II","III"],    acciones: [0,10,25],    bg:"#d1fae5", border:"#6ee7b7", text:"#065f46", dot:"#16a34a" },
  { grupo: "Retoño",   sub: ["I","II","III"],    acciones: [50,80,120],  bg:"#dcfce7", border:"#4ade80", text:"#166534", dot:"#22c55e" },
  { grupo: "Árbol",    sub: ["I","II","III"],    acciones: [170,230,300],bg:"#bbf7d0", border:"#34d399", text:"#065f46", dot:"#10b981" },
  { grupo: "Bosque",   sub: ["I","II","III"],    acciones: [380,480,600],bg:"#a7f3d0", border:"#059669", text:"#064e3b", dot:"#059669" },
  { grupo: "Guardián del Bosque", sub: [""],    acciones: [800],        bg:"linear-gradient(135deg,#d4af37,#f9e270,#d4af37)", border:"#d4af37", text:"#78350f", dot:"#d4af37", unique: true },
];

export function NivelModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4"
      style={{ background: "rgba(13,61,34,0.45)" }}
      onClick={onClose}>
      <div className="w-full max-w-md bg-gn-card rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[var(--gn-border)]">
          <div>
            <h2 className="font-bold text-[var(--gn-base)] text-base">Niveles de Greenio</h2>
            <p className="text-[11px] text-[var(--gn-hint)] mt-0.5">Basado en acciones verificadas (Eco-Scan)</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-[var(--gn-surface)] flex items-center justify-center text-[var(--gn-hint)] hover:text-[var(--gn-base)] transition">
            <X size={16} />
          </button>
        </div>

        {/* Lista de niveles */}
        <div className="overflow-y-auto max-h-[70vh] px-5 py-4 flex flex-col gap-3 scrollbar-hide">
          {niveles.map((n) =>
            n.unique ? (
              /* Guardián — nivel único especial */
              <div key={n.grupo}
                className="rounded-2xl p-4 border-2 flex items-center gap-3 shadow-md"
                style={{ background: n.bg, borderColor: n.border }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
                  style={{ background: "rgba(212,175,55,0.25)", border: "2px solid #d4af37" }}>
                  👑
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm" style={{ color: n.text }}>Guardián del Bosque</p>
                  <p className="text-[10px] font-medium mt-0.5" style={{ color: n.text }}>Nivel único — Élite</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(212,175,55,0.25)", color: n.text, border: "1px solid #d4af37" }}>
                  800+ acciones
                </span>
              </div>
            ) : (
              /* Grupos de 3 subniveles */
              <div key={n.grupo}>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--gn-hint)] mb-1.5 px-1">{n.grupo}</p>
                <div className="flex flex-col gap-1.5">
                  {n.sub.map((s, i) => (
                    /* Subnivel activo si i===0 y grupo===Brote (demo) */
                    <div key={s}
                      className="rounded-xl p-3 border flex items-center gap-3"
                      style={{ background: n.bg, borderColor: n.border,
                        ...(n.grupo === "Brote" && i === 0 ? { boxShadow: `0 0 0 2px ${n.dot}` } : {}) }}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: n.dot, color: "#fff" }}>
                        {s}
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] font-bold" style={{ color: n.text }}>
                          {n.grupo} {s}
                          {n.grupo === "Brote" && i === 0 &&
                            <span className="ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{ background: n.dot, color: "#fff" }}>TU NIVEL</span>}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold shrink-0 px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.6)", color: n.text, border: `1px solid ${n.border}` }}>
                        {n.acciones[i]}+ acc.
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 pt-2 border-t border-[var(--gn-border)]">
          <p className="text-[11px] text-[var(--gn-hint)] text-center">
            Tu nivel actual: <span className="font-bold text-[var(--gn-primary)]">Brote I</span> · 0 / 10 acciones verificadas
          </p>
        </div>
      </div>
    </div>
  );
}
