import React from 'react';
import { AlertTriangle, KeyRound, ShieldAlert, Bug, TrendingDown, Network, Scale, Skull } from 'lucide-react';

export const RisksSection: React.FC = () => {
  const risks = [
    {
      id: 'r-estafas',
      icon: AlertTriangle,
      title: '⚠️ Estafas e Ingeniería Social',
      color: 'text-amber-400 border-amber-500/40 bg-amber-950/20',
      description: 'El mayor vector de pérdida no es un fallo en la criptografía, sino engaños humanos: sitios web falsos de phishing, falsos asesores en redes sociales y promesas de rendimientos garantizados que son esquemas piramidales Ponzi.'
    },
    {
      id: 'r-claves',
      icon: KeyRound,
      title: '🔐 Pérdida Irreversible de Claves',
      color: 'text-rose-400 border-rose-500/40 bg-rose-950/20',
      description: 'En autocustodia, si pierdes tu frase semilla o la clave privada y no tienes copia de respaldo física, tus fondos quedan inaccesibles para siempre. No existe ningún botón de "recuperar contraseña" ni servicio de soporte técnico que pueda ayudarte.'
    },
    {
      id: 'r-ataques',
      icon: ShieldAlert,
      title: '🧑‍💻 Ataques Informáticos y Malware',
      color: 'text-orange-400 border-orange-500/40 bg-orange-950/20',
      description: 'Programas espía como troyanos o "clippers" que interceptan el portapapeles del ordenador para sustituir la dirección de destino por la de un atacante en el momento de copiar y pegar una dirección de envío.'
    },
    {
      id: 'r-vulnerabilidades',
      icon: Bug,
      title: '🐛 Vulnerabilidades en Smart Contracts',
      color: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
      description: 'Los contratos inteligentes son código informático escrito por humanos. Un error de lógica o una vulnerabilidad no detectada en una auditoría puede ser explotada por hackers para drenar millones en liquidez en cuestión de segundos.'
    },
    {
      id: 'r-volatilidad',
      icon: TrendingDown,
      title: '📉 Volatilidad Extrema de Precios',
      color: 'text-sky-400 border-sky-500/40 bg-sky-950/20',
      description: 'Los criptoactivos sufren oscilaciones bruscas del 20%, 50% o más en periodos cortos debido a especulación, liquidez fragmentada y ausencia de amortiguadores institucionales. Nunca asumas estabilidad de valor.'
    },
    {
      id: 'r-bridges',
      icon: Network,
      title: '🌉 Riesgos de Bridges (Puentes)',
      color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20',
      description: 'Los puentes que transfieren valor entre dos blockchains bloquean inmensas sumas en contratos con alta complejidad técnica, habiendo sido blanco prioritario de los mayores ataques de la historia del software.'
    },
    {
      id: 'r-regulatorios',
      icon: Scale,
      title: '📜 Riesgos Regulatorios y Fiscales',
      color: 'text-yellow-400 border-yellow-500/40 bg-yellow-950/20',
      description: 'Los marcos normativos, exigencias de identificación y regulaciones impositivas sobre criptomonedas cambian rápidamente en todo el mundo, pudiendo afectar la operatividad de servicios y exchanges locales.'
    },
    {
      id: 'r-proyectos',
      icon: Skull,
      title: '🎭 Proyectos Fraudulentos (Rug Pulls)',
      color: 'text-red-400 border-red-500/40 bg-red-950/20',
      description: 'Desarrolladores anónimos que emiten tokens artificialmente inflados con marketing agresivo y repentinamente retiran toda la liquidez del mercado ("tiran de la alfombra"), dejando a los participantes con saldos sin valor.'
    }
  ];

  return (
    <section id="riesgos" className="py-16 border-b border-slate-800 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            CRÍTICO PARA CUALQUIER USUARIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conoce también los riesgos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Aprender sobre criptomonedas exige una comprensión honesta y lúcida de sus peligros y limitaciones. La libertad que confiere la descentralización implica una responsabilidad individual absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <div
                key={risk.id}
                className={`border rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all hover:-translate-y-1 ${risk.color}`}
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-2.5 leading-snug">
                    {risk.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {risk.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <span>Recomendación: Prudencia y verificación</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 text-2xl leading-none">🛡️</span>
            <div>
              <strong className="text-white">Regla de oro de CryptoGuía:</strong> Nunca inviertas dinero que no puedas permitirte perder íntegramente, desconfía de cualquier promesa de rentabilidad y jamás ingreses tu frase semilla en sitios web ni la compartas con personas en internet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
