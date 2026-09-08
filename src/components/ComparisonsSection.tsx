import React, { useState } from 'react';
import { COMPARISONS_DATA, ComparisonSection } from '../data/comparisonsData';
import { Columns, ArrowLeftRight, Check, X, Shield, Info } from 'lucide-react';

export const ComparisonsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(COMPARISONS_DATA[0].id);

  const activeComparison = COMPARISONS_DATA.find((c) => c.id === selectedId) || COMPARISONS_DATA[0];

  return (
    <section id="comparaciones" className="py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            ANÁLISIS COMPARATIVO CLARO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comparativas Directas Esenciales
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Aprende a diferenciar conceptos que suelen confundirse mediante tablas esquemáticas de alta precisión conceptual.
          </p>
        </div>

        {/* Buttons to switch comparison tables */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {COMPARISONS_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedId === item.id
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Table Display */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 bg-slate-950/40">
            <h3 className="text-xl font-bold text-white mb-1">{activeComparison.title}</h3>
            <p className="text-xs text-slate-400">{activeComparison.subtitle}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-xs font-mono text-slate-300">
                  <th className="py-3.5 px-5 font-semibold text-slate-400 w-1/4">Criterio</th>
                  <th className="py-3.5 px-5 font-bold text-cyan-300 w-3/8 bg-cyan-950/20 border-l border-r border-slate-800">
                    {activeComparison.nameA}
                  </th>
                  <th className="py-3.5 px-5 font-bold text-purple-300 w-3/8 bg-purple-950/20">
                    {activeComparison.nameB}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                {activeComparison.items.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-white font-sans">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 leading-relaxed bg-cyan-950/10 border-l border-r border-slate-800">
                      {row.optionA}
                    </td>
                    <td className="py-3.5 px-5 leading-relaxed bg-purple-950/10">
                      {row.optionB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-950/60 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300">Nota pedagógica:</strong> {activeComparison.educationalNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
