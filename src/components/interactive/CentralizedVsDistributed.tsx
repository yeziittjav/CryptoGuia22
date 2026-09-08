import React, { useState } from 'react';
import { Server, Users, Network, ShieldAlert, CheckCircle2, RefreshCw } from 'lucide-react';

export const CentralizedVsDistributed: React.FC = () => {
  const [serverFails, setServerFails] = useState<boolean>(false);
  const [offlineNodeIndex, setOfflineNodeIndex] = useState<number | null>(null);

  return (
    <div id="centralized-vs-distributed" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
        <Network className="w-4 h-4" />
        Topología de redes y resiliencia
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white">
        Centralizado vs Distribuido vs Descentralizado
      </h3>
      <p className="text-slate-400 text-sm mt-1 mb-6">
        Explora qué ocurre cuando un elemento clave de la red sufre una caída o interrupción.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* MODELO CENTRALIZADO */}
        <div className={`p-5 rounded-xl border transition-all ${
          serverFails ? 'bg-rose-950/20 border-rose-800/80' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 block">MODELO CENTRALIZADO</span>
              <h4 className="text-base font-semibold text-white">Banco / Servidor Corporativo</h4>
            </div>
            <button
              onClick={() => setServerFails(!serverFails)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                serverFails
                  ? 'bg-rose-900/60 text-rose-200 border-rose-600'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              {serverFails ? 'Restaurar servidor' : 'Simular caída del servidor central'}
            </button>
          </div>

          <div className="py-6 flex flex-col items-center justify-center relative min-h-[190px]">
            {/* Central server */}
            <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 transition-all shadow-lg z-10 ${
              serverFails
                ? 'bg-rose-950 border-rose-500 text-rose-400 animate-pulse'
                : 'bg-amber-950/60 border-amber-400 text-amber-300'
            }`}>
              <Server className="w-7 h-7 mb-0.5" />
              <span className="text-[9px] font-mono uppercase font-bold">Servidor</span>
            </div>

            {/* Connecting lines & users */}
            <div className="grid grid-cols-4 gap-4 w-full mt-6">
              {[1, 2, 3, 4].map((u) => (
                <div key={u} className="flex flex-col items-center text-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                    serverFails 
                      ? 'bg-slate-900 border-slate-800 text-slate-600' 
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">Usuario {u}</span>
                  <span className={`text-[9px] font-semibold mt-0.5 ${serverFails ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {serverFails ? 'Sin servicio' : 'Conectado'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
            serverFails ? 'bg-rose-950/50 border-rose-800 text-rose-300' : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}>
            <strong>Punto Único de Fallo (SPOF):</strong> Si el servidor central sufre un hackeo, una orden judicial de cierre o una avería eléctrica, el 100% de los usuarios queda desconectado inmediatamente.
          </div>
        </div>

        {/* MODELO DESCENTRALIZADO P2P */}
        <div className="p-5 rounded-xl border bg-slate-950 border-cyan-500/30">
          <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 block">MODELO DISTRIBUIDO / P2P</span>
              <h4 className="text-base font-semibold text-white">Red Blockchain de Nodos</h4>
            </div>
            <button
              onClick={() => setOfflineNodeIndex(offlineNodeIndex !== null ? null : 2)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-300 border-cyan-700 transition-colors cursor-pointer"
            >
              {offlineNodeIndex !== null ? 'Reconectar nodo' : 'Simular caída de 1 nodo'}
            </button>
          </div>

          <div className="py-6 flex flex-col items-center justify-center relative min-h-[190px]">
            {/* Grid of connected nodes */}
            <div className="grid grid-cols-4 gap-4 w-full">
              {[0, 1, 2, 3].map((idx) => {
                const isDown = offlineNodeIndex === idx;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center border transition-all ${
                      isDown
                        ? 'bg-rose-950/50 border-rose-600 text-rose-400'
                        : 'bg-cyan-950/50 border-cyan-400/80 text-cyan-300 shadow-md shadow-cyan-500/10'
                    }`}>
                      <Network className="w-5 h-5 mb-0.5" />
                      <span className="text-[8px] font-mono">Nodo {idx + 1}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Copia local</span>
                    <span className={`text-[9px] font-semibold mt-0.5 ${isDown ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {isDown ? 'Desconectado' : 'Auditando'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="w-full mt-4 flex items-center justify-center gap-2 text-cyan-400 text-xs font-mono">
              <span>Sincronización P2P activa entre nodos restantes</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-cyan-950/30 border-cyan-800/60 text-xs text-cyan-200 leading-relaxed">
            <strong>Tolerancia Bizantina a Fallos:</strong> Aunque el Nodo 3 caiga o sea saboteado, los demás nodos conservan una copia idéntica del registro contable y continúan procesando transacciones con total normalidad sin interrupción.
          </div>
        </div>
      </div>

      <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-start gap-3">
        <span className="text-cyan-400 text-lg leading-none">⚠️</span>
        <div>
          <strong className="text-white">Matiz educativo fundamental:</strong> "Distribuido" no es sinónimo automático de "descentralizado". Por ejemplo, un banco internacional puede tener servidores físicamente distribuidos en 50 países, pero su control y gobernanza siguen siendo 100% centralizados. El grado de descentralización depende de quién tiene el poder real de cambiar las reglas.
        </div>
      </div>
    </div>
  );
};
