import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Pickaxe, Award, CheckCircle2 } from 'lucide-react';

interface BitcoinViewProps {
  onSelectArticle: (slug: string) => void;
}

export const BitcoinView: React.FC<BitcoinViewProps> = ({ onSelectArticle }) => {
  const halvings = [
    { year: '2009', block: 'Génesis', reward: '50 BTC', context: 'Nacimiento del protocolo por Satoshi' },
    { year: '2012', block: '#210,000', reward: '25 BTC', context: 'Primer halving histórico' },
    { year: '2016', block: '#420,000', reward: '12.5 BTC', context: 'Maduración del ecosistema minero' },
    { year: '2020', block: '#630,000', reward: '6.25 BTC', context: 'Entrada de inversores institucionales' },
    { year: '2024', block: '#840,000', reward: '3.125 BTC', context: 'Emisión actual hasta ~2028' },
    { year: '~2140', block: '#6,930,000', reward: '0 BTC', context: 'Minado del último satoshi (límite 21M)' }
  ];

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-300 text-xs font-mono font-semibold uppercase mb-3">
          <span>₿</span>
          El Patrón Oro Digital
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Bitcoin: La Primera Red Monetaria P2P
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
          Diseñado en 2008 bajo el seudónimo de Satoshi Nakamoto para ofrecer un medio de pago universal, descentralizado y con escasez matemáticamente incorruptible.
        </p>
      </div>

      {/* 4 Pillars of Bitcoin */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-2xl font-black font-mono text-amber-400 block mb-1">21M</span>
          <h3 className="text-sm font-bold text-white mb-1">Oferta Máxima Invariable</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jamás existirán más de 21 millones de bitcoins. Cada unidad es divisible en 100,000,000 de satoshis.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-2xl font-black font-mono text-cyan-400 block mb-1">~10 min</span>
          <h3 className="text-sm font-bold text-white mb-1">Tiempo Medio de Bloque</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            La dificultad minera se autoajusta cada 2,016 bloques (~2 semanas) para mantener un ritmo constante.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-2xl font-black font-mono text-purple-400 block mb-1">PoW</span>
          <h3 className="text-sm font-bold text-white mb-1">Prueba de Trabajo</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Computadoras especializadas (ASICs) anclan la seguridad de la red al consumo de energía termodinámica real.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <span className="text-2xl font-black font-mono text-emerald-400 block mb-1">UTXO</span>
          <h3 className="text-sm font-bold text-white mb-1">Salidas No Gastadas</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            En lugar de saldos en una cuenta, Bitcoin funciona como billetes físicos que se consumen y generan cambio.
          </p>
        </div>
      </div>

      {/* Halving Timeline Visual Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">
              POLÍTICA MONETARIA MATEMÁTICA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              El ciclo del Halving: Escasez programada
            </h3>
          </div>
          <Flame className="w-6 h-6 text-amber-400" />
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Cada 210,000 bloques minados (aproximadamente cada 4 años), la recompensa otorgada a los mineros por sellar un bloque se reduce a la mitad exacta, desacelerando la tasa de emisión hasta su límite final en el año ~2140.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {halvings.map((h, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Año {h.year}
                </span>
                <span className="text-xs font-mono text-cyan-400">{h.block}</span>
              </div>
              <div>
                <span className="text-sm font-mono font-black text-amber-400 block mb-1">
                  Recompensa: {h.reward}
                </span>
                <p className="text-[11px] text-slate-400">{h.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          onClick={() => onSelectArticle('que-es-bitcoin')}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] font-mono text-amber-400 block mb-1">Artículo Esencial</span>
            <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
              ¿Qué es Bitcoin y cómo funciona?
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Historia de Satoshi Nakamoto, el bloque génesis y la solución al problema de los generales bizantinos.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform ml-4 flex-shrink-0" />
        </div>

        <div
          onClick={() => onSelectArticle('que-es-el-halving-de-bitcoin')}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
        >
          <div>
            <span className="text-[10px] font-mono text-amber-400 block mb-1">Artículo Técnico</span>
            <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
              El Halving de Bitcoin en profundidad
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              Por qué existe, cómo impacta a la seguridad minera y la transición futura hacia el mercado de tarifas.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform ml-4 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};
