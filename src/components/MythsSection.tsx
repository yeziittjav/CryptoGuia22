import React, { useState } from 'react';
import { MYTHS_DATA } from '../data/mythsData';
import { HelpCircle, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

export const MythsSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([MYTHS_DATA[0].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="mitos-y-realidades" className="py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            DESMONTANDO CONFUSIONES FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mitos y Realidades del Mundo Cripto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            El exceso de sensacionalismo suele distorsionar el funcionamiento real de esta tecnología. Aclaremos los malentendidos más comunes con datos objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MYTHS_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-md transition-all hover:border-slate-700"
              >
                <div
                  onClick={() => toggle(item.id)}
                  className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                      {item.category}
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-mono font-bold text-rose-400 mt-0.5">MITO:</span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        "{item.myth}"
                      </h4>
                    </div>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 bg-slate-950/50 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 mt-0.5">REALIDAD:</span>
                      <p className="text-xs font-semibold text-emerald-300 leading-snug">
                        {item.reality}
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6 border-l-2 border-slate-800">
                      {item.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
