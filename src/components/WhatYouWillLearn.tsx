import React from 'react';
import { Coins, Link2, ShieldCheck, Globe2, Cpu, ArrowRight } from 'lucide-react';
import { ViewMode } from '../types';

interface WhatYouWillLearnProps {
  onNavigate: (view: ViewMode) => void;
}

export const WhatYouWillLearn: React.FC<WhatYouWillLearnProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'crypto',
      icon: Coins,
      badge: 'Fundamentos',
      title: 'Criptomonedas',
      description: 'Qué son, por qué existen, cómo difieren del dinero bancario y cómo funcionan los protocolos digitales de valor.',
      view: 'criptomonedas' as ViewMode,
      accentColor: 'from-amber-500/20 to-amber-500/5',
      borderColor: 'border-amber-500/30 hover:border-amber-400',
      iconColor: 'text-amber-400'
    },
    {
      id: 'blockchain',
      icon: Link2,
      badge: 'Arquitectura',
      title: 'Blockchain',
      description: 'Cómo se registran y relacionan los datos en bloques encadenados mediante hashes criptográficos inmutables.',
      view: 'blockchain' as ViewMode,
      accentColor: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      iconColor: 'text-cyan-400'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      badge: 'Custodia',
      title: 'Seguridad',
      description: 'Wallets, claves públicas vs privadas, frases semilla de recuperación y principios esenciales de autocustodia.',
      view: 'mitos-riesgos' as ViewMode,
      accentColor: 'from-sky-500/20 to-sky-500/5',
      borderColor: 'border-sky-500/30 hover:border-sky-400',
      iconColor: 'text-sky-400'
    },
    {
      id: 'decentralization',
      icon: Globe2,
      badge: 'Redes P2P',
      title: 'Descentralización',
      description: 'Cómo operan las redes distribuidas entre pares, el papel de los nodos completos y el trilema de la blockchain.',
      view: 'blockchain' as ViewMode,
      accentColor: 'from-emerald-500/20 to-emerald-500/5',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
      iconColor: 'text-emerald-400'
    },
    {
      id: 'technology',
      icon: Cpu,
      badge: 'Ecosistema',
      title: 'Tecnología',
      description: 'Smart contracts, finanzas descentralizadas (DeFi), Web3, tokens NFT y soluciones de escalabilidad de Capa 2.',
      view: 'ethereum' as ViewMode,
      accentColor: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      iconColor: 'text-purple-400'
    }
  ];

  return (
    <section id="que-aprenderas" className="py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            PLAN DE ESTUDIO MODULAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Qué aprenderás en CryptoGuía?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Hemos estructurado todo el conocimiento en cinco áreas esenciales para que construyas tu comprensión de forma sólida y progresiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.view)}
                className={`group bg-slate-900/70 border ${card.borderColor} rounded-2xl p-5 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-gradient-to-b ${card.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:underline">
                  <span>Explorar módulo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
