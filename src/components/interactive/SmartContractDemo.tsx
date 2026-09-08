import React, { useState } from 'react';
import { Cpu, CheckCircle2, XCircle, ArrowRight, RefreshCw, Lock, AlertTriangle } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  conditionDescription: string;
  triggerParam: string;
  expectedValue: number | string;
  currentValue: number | string;
  actionIfTrue: string;
  actionIfFalse: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'escrow',
    name: 'Fianza de Alquiler Descentralizada',
    conditionDescription: 'Si el inquilino entrega las llaves y la inspección digital está aprobada...',
    triggerParam: 'Estado de inspección',
    expectedValue: 'Aprobada',
    currentValue: 'Aprobada',
    actionIfTrue: 'Liberar automáticamente fianza de 1,200 USDC a favor del inquilino.',
    actionIfFalse: 'Retener fianza en depósito de custodia temporal.'
  },
  {
    id: 'insurance',
    name: 'Seguro Paramétrico de Vuelos',
    conditionDescription: 'Si el vuelo se retrasa más de 120 minutos según el oráculo de la aerolínea...',
    triggerParam: 'Minutos de retraso',
    expectedValue: 120,
    currentValue: 145,
    actionIfTrue: 'Indemnizar inmediatamente al pasajero con 300 DAI sin presentar reclamaciones.',
    actionIfFalse: 'Cerrar póliza de seguro sin desembolso.'
  },
  {
    id: 'lottery',
    name: 'Reparto Autónomo de Fondos Comunitarios',
    conditionDescription: 'Si el balance acumulado en la tesorería de la DAO supera los 10,000 tokens...',
    triggerParam: 'Tokens en tesorería',
    expectedValue: 10000,
    currentValue: 8400,
    actionIfTrue: 'Distribuir proporcionalmente dividendos a los 150 miembros de la comunidad.',
    actionIfFalse: 'Continuar acumulando fondos hasta alcanzar el umbral de activación.'
  }
];

export const SmartContractDemo: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [conditionMet, setConditionMet] = useState<boolean>(true);
  const [executionState, setExecutionState] = useState<'idle' | 'running' | 'completed'>('idle');

  const handleRun = () => {
    setExecutionState('running');
    setTimeout(() => {
      setExecutionState('completed');
    }, 900);
  };

  return (
    <div id="smart-contract-demo" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
        <Cpu className="w-4 h-4" />
        Lógica determinista sin intermediarios
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white">
        ¿Cómo funciona un Smart Contract?
      </h3>
      <p className="text-slate-400 text-sm mt-1 mb-6">
        Un contrato inteligente es código informático que se ejecuta automáticamente bajo el principio estricto: <span className="text-cyan-300 font-mono">"IF (condición X) THEN (ejecutar Y)"</span>.
      </p>

      {/* Select scenario buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            onClick={() => {
              setSelectedScenario(sc);
              setExecutionState('idle');
            }}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              selectedScenario.id === sc.id
                ? 'bg-cyan-950 text-cyan-300 border-cyan-500 shadow-sm'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {sc.name}
          </button>
        ))}
      </div>

      {/* Simulator 3-stage visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Stage 1: Condición */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
              1. CONDICIÓN (IF)
            </span>
            <h5 className="text-sm font-semibold text-white mt-1 mb-2">
              {selectedScenario.conditionDescription}
            </h5>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              <div>Parámetro: <span className="text-cyan-400">{selectedScenario.triggerParam}</span></div>
              <div>Umbral requerido: <span className="text-emerald-400 font-semibold">{String(selectedScenario.expectedValue)}</span></div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">¿Simular que se cumple?</span>
            <button
              onClick={() => {
                setConditionMet(!conditionMet);
                setExecutionState('idle');
              }}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                conditionMet 
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' 
                  : 'bg-rose-950 text-rose-300 border border-rose-700'
              }`}
            >
              {conditionMet ? '✓ SÍ (Cumplida)' : '✗ NO (Incumplida)'}
            </button>
          </div>
        </div>

        {/* Stage 2: Verificación */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-sky-400 uppercase font-bold tracking-wider">
              2. VERIFICACIÓN (EVM)
            </span>
            <h5 className="text-sm font-semibold text-white mt-1 mb-2">
              Auditoría de Código en Nodos
            </h5>
            <p className="text-xs text-slate-400 mb-3">
              Los nodos de la red leen las variables de estado en la blockchain y evalúan la cláusula booleana con exactitud matemática.
            </p>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>Resultado de evaluación:</span>
              <span className={`font-bold flex items-center gap-1 ${conditionMet ? 'text-emerald-400' : 'text-rose-400'}`}>
                {conditionMet ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                {conditionMet ? 'TRUE' : 'FALSE'}
              </span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800">
            <button
              onClick={handleRun}
              disabled={executionState === 'running'}
              className="w-full py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              {executionState === 'running' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Ejecutando en EVM...
                </>
              ) : (
                <>
                  <Cpu className="w-3.5 h-3.5" />
                  Disparar Contrato
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stage 3: Ejecución */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider">
              3. EJECUCIÓN (THEN)
            </span>
            <h5 className="text-sm font-semibold text-white mt-1 mb-2">
              Acción Irreversible Ejecutada
            </h5>
            <div className={`p-3 rounded-lg border text-xs font-medium leading-relaxed transition-all ${
              executionState === 'completed'
                ? conditionMet
                  ? 'bg-emerald-950/50 border-emerald-600 text-emerald-200'
                  : 'bg-amber-950/50 border-amber-700 text-amber-200'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              {executionState === 'completed' ? (
                conditionMet ? selectedScenario.actionIfTrue : selectedScenario.actionIfFalse
              ) : (
                'Presiona "Disparar Contrato" para simular la ejecución descentralizada.'
              )}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
            <Lock className="w-3 h-3 text-cyan-400" />
            Sin intermediarios humanos ni demoras
          </div>
        </div>
      </div>

      <div className="p-3 bg-amber-950/30 border border-amber-800/60 rounded-xl text-xs text-amber-300 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-200">Aclaración legal esencial:</strong> Un smart contract informático no equivale automáticamente a un contrato jurídico tradicional vinculante ante un tribunal civil. Es un mecanismo de ejecución tecnológica autónoma donde el código gobierna el flujo de datos y fondos.
        </div>
      </div>
    </div>
  );
};
