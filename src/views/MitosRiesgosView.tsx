import React from 'react';
import { MythsSection } from '../components/MythsSection';
import { RisksSection } from '../components/RisksSection';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const MitosRiesgosView: React.FC = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-300 text-xs font-mono font-semibold uppercase mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          Seguridad, Advertencias & Realidades
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Mitos vs. Realidades y Gestión de Riesgos
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
          Comprender los límites y riesgos reales de las tecnologías descentralizadas es esencial para no caer en fraudes ni en expectativas irreales.
        </p>
      </div>

      <MythsSection />
      <RisksSection />
    </div>
  );
};
