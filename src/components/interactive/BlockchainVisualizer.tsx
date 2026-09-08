import React, { useState } from 'react';
import { BlockData } from '../../types';
import { PlusCircle, RotateCcw, Link2, ShieldCheck, Database } from 'lucide-react';

// Lightweight educational hash simulator (deterministic representation)
function calculateEduHash(index: number, prevHash: string, timestamp: string, data: string, nonce: number): string {
  let str = `${index}-${prevHash}-${timestamp}-${data}-${nonce}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const hexPart = Math.abs(hash).toString(16).padStart(8, '0');
  const syntheticSha = `0000${hexPart}${Math.abs(hash * 31).toString(16).padStart(8, '0')}7f9a2e3b1c4d5e6f`.slice(0, 32);
  return syntheticSha;
}

const INITIAL_BLOCKS: BlockData[] = [
  {
    index: 0,
    timestamp: '2024-01-01 00:00:00',
    data: 'Bloque Génesis: Inicio de la red CryptoGuía',
    previousHash: '00000000000000000000000000000000',
    hash: '0000a1b2c3d4e5f67a8b9c0d1e2f3a4b',
    nonce: 1042
  },
  {
    index: 1,
    timestamp: '2024-01-01 00:10:00',
    data: 'Tx: Alicia transfiere 1.5 unidades a Roberto',
    previousHash: '0000a1b2c3d4e5f67a8b9c0d1e2f3a4b',
    hash: '0000e4f5a6b7c8d90e1f2a3b4c5d6e7f',
    nonce: 3821
  },
  {
    index: 2,
    timestamp: '2024-01-01 00:20:00',
    data: 'Tx: Carlos transfiere 0.8 unidades a Elena',
    previousHash: '0000e4f5a6b7c8d90e1f2a3b4c5d6e7f',
    hash: '0000b9c8d7e6f5a4b3c2d1e0f9a8b7c6',
    nonce: 7914
  }
];

export const BlockchainVisualizer: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockData[]>(INITIAL_BLOCKS);
  const [newTxText, setNewTxText] = useState('Tx: David transfiere 2.0 unidades a Sofía');

  const addBlock = () => {
    const prev = blocks[blocks.length - 1];
    const newIndex = blocks.length;
    const now = new Date();
    const timestampStr = now.toISOString().replace('T', ' ').slice(0, 19);
    const nonce = Math.floor(Math.random() * 90000) + 1000;
    const computedHash = calculateEduHash(newIndex, prev.hash, timestampStr, newTxText, nonce);

    const newBlock: BlockData = {
      index: newIndex,
      timestamp: timestampStr,
      data: newTxText || `Bloque #${newIndex} con transacciones validadas`,
      previousHash: prev.hash,
      hash: computedHash,
      nonce: nonce
    };

    setBlocks([...blocks, newBlock]);
    setNewTxText(`Tx: Usuario_${Math.floor(Math.random() * 100)} envía 0.${Math.floor(Math.random() * 9) + 1} unidades a Usuario_${Math.floor(Math.random() * 100)}`);
  };

  const resetChain = () => {
    setBlocks(INITIAL_BLOCKS);
  };

  return (
    <div id="blockchain-visualizer" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Database className="w-4 h-4" />
            Simulador interactivo en vivo
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Construye una Blockchain</h3>
          <p className="text-slate-400 text-sm mt-1">
            Observa cómo cada nuevo bloque se encadena criptográficamente incorporando el hash del bloque anterior.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={resetChain}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            title="Reiniciar a los bloques iniciales"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar
          </button>
          <button
            onClick={addBlock}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            Crear bloque
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-slate-400 mb-1.5">
          Datos / Transacciones a empaquetar en el próximo bloque:
        </label>
        <input
          type="text"
          value={newTxText}
          onChange={(e) => setNewTxText(e.target.value)}
          placeholder="Escribe datos ficticios para el próximo bloque..."
          className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none transition-colors"
        />
      </div>

      {/* Horizontal scrollable chain */}
      <div className="overflow-x-auto pb-4 pt-2 -mx-2 px-2">
        <div className="flex items-stretch gap-4 min-w-max">
          {blocks.map((block, idx) => {
            const isGenesis = block.index === 0;
            return (
              <div key={block.index} className="flex items-center gap-4">
                <div className="w-72 sm:w-80 bg-slate-950 border border-cyan-500/30 rounded-xl p-4 shadow-lg hover:border-cyan-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                      <span className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        BLOQUE #{block.index} {isGenesis && <span className="text-[10px] bg-cyan-950/80 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">GÉNESIS</span>}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        Nonce: {block.nonce}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] block mb-0.5">Contenido / Datos:</span>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-200 font-mono text-[11px] break-words">
                          {block.data}
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-400 text-[11px] block mb-0.5 flex items-center gap-1">
                          <Link2 className="w-3 h-3 text-cyan-400" />
                          Hash Anterior (prevHash):
                        </span>
                        <div className="font-mono text-[10px] text-slate-400 bg-slate-900/60 p-1.5 rounded truncate border border-slate-800">
                          {block.previousHash}
                        </div>
                      </div>

                      <div>
                        <span className="text-cyan-300 text-[11px] block mb-0.5 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          Hash del Bloque:
                        </span>
                        <div className="font-mono text-[11px] text-cyan-300 font-semibold bg-cyan-950/30 p-1.5 rounded truncate border border-cyan-900/40">
                          {block.hash}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>{block.timestamp}</span>
                    <span className="text-emerald-400 font-sans flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Válido
                    </span>
                  </div>
                </div>

                {idx < blocks.length - 1 && (
                  <div className="flex flex-col items-center justify-center text-cyan-400 px-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-sky-500"></div>
                    <span className="text-[10px] font-mono text-cyan-300 mt-1">enlace</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-start gap-3">
        <span className="text-cyan-400 text-lg leading-none">💡</span>
        <div>
          <strong className="text-white">Principio fundamental de inmutabilidad:</strong> Observa que cada bloque almacena en su encabezado el hash exacto del bloque precedente. Si un atacante modificara un solo céntimo en el Bloque #1, el hash del Bloque #1 cambiaría automáticamente, dejando de coincidir con el campo <em>Hash Anterior</em> del Bloque #2 y rompiendo toda la cadena posterior de inmediato.
        </div>
      </div>
    </div>
  );
};
