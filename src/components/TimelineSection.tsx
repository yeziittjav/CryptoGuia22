import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/timelineData';
import { History, Calendar, CheckCircle2, ChevronRight, Award, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>(TIMELINE_DATA[1].year); // 2008 Bitcoin default

  const selectedEvent = TIMELINE_DATA.find((e) => e.year === selectedYear) || TIMELINE_DATA[0];

  return (
    <section id="linea-temporal" className="py-16 border-b border-slate-800 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            CRONOLOGÍA CRIPTOGRÁFICA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Historia y Evolución de las Criptomonedas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Desde las teorías del movimiento cypherpunk en los años 80 y 90 hasta la adopción institucional global. Selecciona un hito para explorar su trascendencia.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="overflow-x-auto pb-4 mb-8 custom-scrollbar">
          <div className="flex items-center min-w-[760px] gap-2 px-2">
            {TIMELINE_DATA.map((event, idx) => {
              const isSelected = event.year === selectedYear;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedYear(event.year)}
                  className={`flex-1 min-w-[120px] p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {event.year}
                  </span>
                  <span className={`text-xs font-semibold mt-1 line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {event.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Event Focus Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg sm:text-xl font-mono font-black text-cyan-400">
                  {selectedEvent.year}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">
                  {selectedEvent.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedEvent.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 self-start md:self-auto">
              {selectedEvent.badge}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-medium">
            {selectedEvent.description}
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-1.5">
              Significado Histórico y Trascendencia
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedEvent.significance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
