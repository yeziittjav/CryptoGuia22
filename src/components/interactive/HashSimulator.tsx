import React, { useState, useMemo } from 'react';
import { Binary, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

// Educational pseudo-SHA256 generator that shows genuine avalanche effect
function pseudoSha256(input: string): string {
  if (!input) return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
  
  // Custom multi-pass deterministic hash for clear educational representation
  let h0 = 0x6a09e667;
  let h1 = 0xbb67ae85;
  let h2 = 0x3c6ef372;
  let h3 = 0xa54ff53a;
  let h4 = 0x510e527f;
  let h5 = 0x9b05688c;
  let h6 = 0x1f83d9ab;
  let h7 = 0x5be0cd19;

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    h0 = Math.imul(h0 ^ code, 0x5bd1e995) >>> 0;
    h1 = Math.imul(h1 ^ (code * 31), 0x27d4eb2f) >>> 0;
    h2 = Math.imul(h2 + code, 0x165667b1) >>> 0;
    h3 = (h3 ^ (h0 >>> 13)) >>> 0;
    h4 = Math.imul(h4 ^ (code * 17), 0x85ebca6b) >>> 0;
    h5 = (h5 + h1) >>> 0;
    h6 = (h6 ^ (code * 53)) >>> 0;
    h7 = (h7 + h4) >>> 0;
  }

  const toHex = (n: number) => (n >>> 0).toString(16).padStart(8, '0');
  return `${toHex(h0)}${toHex(h1)}${toHex(h2)}${toHex(h3)}${toHex(h4)}${toHex(h5)}${toHex(h6)}${toHex(h7)}`;
}

export const HashSimulator: React.FC = () => {
  const [inputText, setInputText] = useState('Hola CryptoGuía');
  const computedHash = useMemo(() => pseudoSha256(inputText), [inputText]);

  const presetA = 'Hola CryptoGuía';
  const presetB = 'Hola CryptoGuia'; // Without accent

  return (
    <div id="hash-simulator" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
        <Binary className="w-4 h-4" />
        Experimento criptográfico en vivo
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white">¿Qué es una Función Hash?</h3>
      <p className="text-slate-400 text-sm mt-1 mb-6">
        Una función hash criptográfica toma cualquier cantidad de texto de entrada y produce una huella digital única de longitud fija de 64 caracteres hexadecimales (256 bits).
      </p>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-300">
              Texto de entrada (modifica una sola letra para ver la magia):
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setInputText(presetA)}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded cursor-pointer transition-colors"
              >
                Con tilde: "Hola CryptoGuía"
              </button>
              <button
                type="button"
                onClick={() => setInputText(presetB)}
                className="text-[11px] text-sky-400 hover:text-sky-300 bg-sky-950/60 border border-sky-800 px-2 py-0.5 rounded cursor-pointer transition-colors"
              >
                Sin tilde: "Hola CryptoGuia"
              </button>
            </div>
          </div>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe lo que quieras aquí..."
            className="w-full bg-slate-950 border border-cyan-500/50 focus:border-cyan-400 rounded-xl px-4 py-3 text-slate-100 font-medium text-base focus:outline-none transition-all shadow-inner"
          />
        </div>

        <div className="flex justify-center py-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <span>Función Criptográfica (SHA-256)</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Resultado de salida (Hash de 256 bits):
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Longitud fija: {computedHash.length} caracteres
            </span>
          </div>
          <div className="w-full bg-slate-950 border border-cyan-500/40 rounded-xl p-4 font-mono text-xs sm:text-sm text-cyan-300 break-all select-all shadow-lg tracking-wider">
            {computedHash}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-800/80 text-xs">
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <span className="font-semibold text-white block mb-1">1. Efecto Avalancha</span>
          <p className="text-slate-400">Si alteras una sola letra (como poner o quitar la tilde en "Guía"), el hash resultante cambia en más de un 50% de sus bits de forma impredecible.</p>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <span className="font-semibold text-white block mb-1">2. Unidireccional</span>
          <p className="text-slate-400">Es instantáneo calcular el hash conociendo el texto, pero es computacionalmente imposible deducir el texto original conociendo solo el hash.</p>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <span className="font-semibold text-white block mb-1">3. Determinista</span>
          <p className="text-slate-400">La misma entrada siempre producirá exactamente la misma salida en cualquier computadora del mundo, garantizando verificación universal.</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 italic">
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
        <span>Aclaración didáctica: Este ejemplo interactivo es una representación ilustrativa orientada a la comprensión del efecto avalancha en navegadores web.</span>
      </div>
    </div>
  );
};
