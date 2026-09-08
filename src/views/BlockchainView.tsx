import React from 'react';
import { HashSimulator } from '../components/interactive/HashSimulator';
import { BlockchainVisualizer } from '../components/interactive/BlockchainVisualizer';
import { CentralizedVsDistributed } from '../components/interactive/CentralizedVsDistributed';
import { Link2, ArrowRight, Layers, Lock, Cpu, Database } from 'lucide-react';

interface BlockchainViewProps {
  onSelectArticle: (slug: string) => void;
}

export const BlockchainView: React.FC<BlockchainViewProps> = ({ onSelectArticle }) => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold uppercase mb-3">
          <Link2 className="w-3.5 h-3.5" />
          Arquitectura Criptográfica
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          ¿Cómo funciona la Blockchain?
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
          Un libro contable público, inmutable y distribuido donde cada bloque de transacciones se encadena criptográficamente al anterior mediante funciones de hash.
        </p>
      </div>

      {/* Interactive Tool 1: Hash Simulator */}
      <HashSimulator />

      {/* Interactive Tool 2: Blockchain Visualizer */}
      <BlockchainVisualizer />

      {/* Interactive Tool 3: Centralized vs Distributed */}
      <CentralizedVsDistributed />

      {/* Educational anatomy box */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Database className="w-6 h-6 text-cyan-400" />
          Anatomía interna de un bloque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-3">
            <h4 className="font-bold text-cyan-300 text-sm">1. Cabecera del bloque (Block Header)</h4>
            <p className="leading-relaxed">
              Contiene los metadatos esenciales: la versión del software, el hash del bloque precedente, la marca de tiempo (timestamp), el objetivo de dificultad y el número de un solo uso (nonce).
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-cyan-300 text-sm">2. Cuerpo de transacciones (Merkle Tree)</h4>
            <p className="leading-relaxed">
              Alberga los miles de transacciones procesadas. Se resumen emparejadas en un Árbol de Merkle para condensar millones de bytes en una sola raíz criptográfica de 32 bytes inviolable.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Lectura recomendada:</span>
          <button
            onClick={() => onSelectArticle('blockchain-explicada-desde-cero')}
            className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <span>Blockchain explicada desde cero: ¿Qué es y cómo funciona?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
