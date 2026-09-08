import React from 'react';
import { SmartContractDemo } from '../components/interactive/SmartContractDemo';
import { Cpu, ArrowRight, Layers, Flame, Zap, CheckCircle2 } from 'lucide-react';

interface EthereumViewProps {
  onSelectArticle: (slug: string) => void;
}

export const EthereumView: React.FC<EthereumViewProps> = ({ onSelectArticle }) => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-mono font-semibold uppercase mb-3">
          <Cpu className="w-3.5 h-3.5" />
          La Computadora Mundial Programable
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ethereum & Smart Contracts
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
          Propuesto en 2013 por Vitalik Buterin para expandir la tecnología blockchain más allá de las transferencias de dinero simple, convirtiéndola en una plataforma global de aplicaciones descentralizadas.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Ethereum Virtual Machine (EVM)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Un entorno de ejecución descentralizado donde miles de nodos globales ejecutan el mismo código con resultados idénticos y deterministas.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Comisiones de Gas</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Mide el esfuerzo computacional requerido para procesar una acción. Evita bucles infinitos de código malicioso y remunera a los validadores.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Proof of Stake (The Merge)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            En septiembre de 2022, Ethereum eliminó la minería PoW, reduciendo su consumo energético en un 99.95% mediante validadores que bloquean ETH.
          </p>
        </div>
      </div>

      {/* Interactive: Smart Contract Demo */}
      <SmartContractDemo />

      {/* Token Standards comparison */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-400" />
          Estándares de tokens: ERC-20 vs ERC-721
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 block uppercase">ERC-20 • Tokens Fungibles</span>
            <p className="leading-relaxed">
              Cada unidad es exactamente idéntica e intercambiable por otra del mismo tipo (como USDC, UNI o DAI). Es la base del dinero programable y el ecosistema DeFi.
            </p>
          </div>
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-purple-400 block uppercase">ERC-721 • Tokens No Fungibles (NFT)</span>
            <p className="leading-relaxed">
              Cada token posee un identificador único (TokenID) indivisible e irrepetible. Certifica la titularidad de obras digitales, entradas o credenciales exclusivas.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Lectura recomendada:</span>
          <button
            onClick={() => onSelectArticle('que-es-ethereum')}
            className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer group"
          >
            <span>Ethereum y la revolución de los Smart Contracts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
