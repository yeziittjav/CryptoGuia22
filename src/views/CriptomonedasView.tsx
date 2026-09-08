import React from 'react';
import { Coins, ArrowRight, ShieldCheck, Zap, Globe, FileText, CheckCircle2, Lock, GitCommit, Database, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface CriptomonedasViewProps {
  onSelectArticle: (slug: string) => void;
}

export const CriptomonedasView: React.FC<CriptomonedasViewProps> = ({ onSelectArticle }) => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const isEn = language === 'en';

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase mb-3 ${
          darkMode 
            ? 'bg-blue-950/80 border border-blue-800 text-blue-300' 
            : 'bg-blue-50 border border-blue-200 text-blue-700'
        }`}>
          <Coins className="w-3.5 h-3.5" />
          {isEn ? 'Digital Monetary Fundamentals' : 'Fundamentos Monetarios Digitales'}
        </div>
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {isEn ? 'What Exactly is a Cryptocurrency?' : '¿Qué es realmente una Criptomoneda?'}
        </h1>
        <p className={`text-base sm:text-lg mt-3 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {isEn
            ? 'A purely digital form of money that does not rely on central banks, corporations, or third-party intermediaries to transfer value and securely record balances.'
            : 'Una forma de dinero puramente digital que no depende de bancos centrales, corporaciones ni intermediarios para transferir valor y registrar saldos de manera segura.'
          }
        </p>
      </div>

      {/* 3 Core pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-2xl border transition-all ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {isEn ? 'Genuine Decentralization' : 'Descentralización Real'}
          </h3>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {isEn
              ? 'No single entity can freeze your funds, unilaterally reverse validated transactions, or arbitrarily inflate the money supply.'
              : 'Ninguna entidad individual puede congelar tus fondos, revertir una transacción validada o decidir arbitrariamente duplicar la emisión monetaria.'
            }
          </p>
        </div>

        <div className={`p-6 rounded-2xl border transition-all ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {isEn ? 'Asymmetric Cryptography' : 'Criptografía Inviolable'}
          </h3>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {isEn
              ? 'Transactions are validated through cryptographic key pairs (ECDSA/Schnorr). The public key indicates destination; the private key authorizes expenditure.'
              : 'Las transacciones se validan con pares de claves matemáticas asimétricas (ECDSA/Schnorr). La clave pública identifica el destino; la clave privada autoriza el gasto.'
            }
          </p>
        </div>

        <div className={`p-6 rounded-2xl border transition-all ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {isEn ? 'Predictable Supply Rules' : 'Emisión Predecible'}
          </h3>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {isEn
              ? 'Unlike national currencies subject to quantitative easing and discretionary policy, decentralized protocols enforce unalterable mathematical limits.'
              : 'A diferencia de las divisas fiduciarias sujetas a emisión discrecional, los protocolos descentralizados definen reglas matemáticas públicas e inalterables.'
            }
          </p>
        </div>
      </div>

      {/* Deep Informative Text Section: El Gran Desafío Resuelto por Bitcoin */}
      <section id="doble-gasto-explicacion" className={`rounded-3xl p-6 sm:p-10 border space-y-8 ${
        darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
      }`}>
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-500">
            <GitCommit className="w-4 h-4" />
            {isEn ? 'Computer Science Breakthrough' : 'Hito de las Ciencias de la Computación'}
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {isEn
              ? 'The Historical Challenge Solved by Bitcoin: The Double-Spending Problem'
              : 'El Gran Desafío Resuelto por Bitcoin: El Problema del Doble Gasto'
            }
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {isEn
              ? 'Before Bitcoin was created in 2008, all forms of digital cash suffered from an insurmountable paradox: digital information can naturally be cloned at zero cost. Understanding how Satoshi Nakamoto eliminated the need for a central clearinghouse is the foundation of modern decentralized architecture.'
              : 'Antes de la invención de Bitcoin en 2008, toda iniciativa de dinero digital se enfrentaba a una paradoja aparentemente irresoluble: la información digital puede duplicarse a costo marginal cero. Comprender cómo Satoshi Nakamoto resolvió este problema sin requerir una entidad central es el pilar de toda la tecnología blockchain.'
            }
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* Card 1: La paradoja digital */}
          <div className={`p-6 rounded-2xl border space-y-4 ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center font-mono text-xs font-bold">1</span>
              <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {isEn ? 'The Paradox of Digital Replication' : 'La Paradoja de la Replicación Digital'}
              </h3>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {isEn
                ? 'When you send a computer file (such as a text document, photo, or MP3), the sender retains their original copy while the receiver gets an identical duplicate. In media and communication, this zero-friction copying is advantageous. In monetary economics, however, it is fatal: if a digital unit of currency could be duplicated in the same way, the sender could spend the identical coin twice, creating hyperinflation and rendering the asset completely worthless.'
                : 'Cuando envías un archivo informático (como un documento PDF, una imagen o una canción), el emisor conserva el archivo original mientras el receptor recibe una réplica idéntica. En la comunicación, esta duplicación sin costo es una ventaja. Sin embargo, en un sistema monetario es letal: si una moneda digital pudiera duplicarse, el usuario podría gastar la misma moneda con dos personas distintas, generando inflación descontrolada y destruyendo el valor del dinero.'
              }
            </p>
          </div>

          {/* Card 2: La limitación del intermediario */}
          <div className={`p-6 rounded-2xl border space-y-4 ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-mono text-xs font-bold">2</span>
              <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {isEn ? 'The Centralized Clearinghouse Model' : 'El Modelo del Intermediario Centralizado'}
              </h3>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {isEn
                ? 'During the 1980s and 1990s, early digital money proposals like DigiCash and e-gold attempted to solve double spending by maintaining a single central database. The company running the server would check balances and deduct units. While functionally effective, this created a critical vulnerability: a Single Point of Failure. If the company went bankrupt, was coerced by regulators, or shut down its servers, the entire monetary system perished overnight.'
                : 'Durante los años 80 y 90, experimentos pioneros de dinero digital como DigiCash o e-gold intentaron resolver el doble gasto manteniendo un servidor central que llevaba la contabilidad de todos los usuarios. Aunque funcionaba a nivel técnico, este esquema introducía un punto único de fallo: la entidad central podía quebrar, ser intervenida judicialmente o censurar transacciones arbitrariamente, colapsando el sistema.'
              }
            </p>
          </div>
        </div>

        {/* The Nakamoto Consensus Pillars */}
        <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2.5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <Database className="w-5 h-5 text-blue-500" />
            {isEn ? 'How Bitcoin Resolves Double Spending Without a Central Authority' : 'Cómo Resuelve Bitcoin el Doble Gasto sin Árbitro Central'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                {isEn ? 'Cryptographic Timestamping' : 'Marcado de Tiempo Criptográfico'}
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {isEn
                  ? 'Transactions are grouped into blocks linked sequentially via cryptographic SHA-256 hashes. Each block includes the hash of the preceding block, establishing an unbroken and unforgeable chronological arrow of time.'
                  : 'Las transacciones se agrupan en bloques encadenados mediante funciones de hash criptográficas SHA-256. Cada bloque incluye el hash del bloque anterior, fijando una línea temporal irreversible.'
                }
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                {isEn ? 'Thermodynamic Proof of Work' : 'Prueba de Trabajo Termodinámica'}
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {isEn
                  ? 'Miners must expend physical computing power to discover a valid block hash below the network difficulty target. Rewriting past blocks requires outcomputing the cumulative hash rate of the entire honest network.'
                  : 'Los mineros deben invertir potencia de cómputo y energía eléctrica para encontrar un hash válido. Reescribir el historial exigiría superar en poder computacional a toda la red honesta combinada.'
                }
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {isEn ? 'Autonomous Node Validation' : 'Validación Autónoma de Cada Nodo'}
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {isEn
                  ? 'Thousands of independent full nodes verify incoming transactions against their local UTXO state. If a transaction attempts to spend already-spent outputs, every node rejects it automatically and silences propagation.'
                  : 'Decenas de miles de nodos independientes cotejan las transacciones con su registro UTXO local. Si una transacción intenta gastar monedas ya transferidas, los nodos la descartan automáticamente sin consultar a nadie.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Synthesis Callout */}
        <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          darkMode ? 'bg-blue-950/20 border-blue-900/50 text-blue-200' : 'bg-blue-50/80 border-blue-200 text-blue-900'
        }`}>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block">
              {isEn ? 'Core Takeaway' : 'Conclusión Conceptual'}
            </span>
            <p className="text-xs sm:text-sm leading-relaxed">
              {isEn
                ? 'Bitcoin demonstrated for the first time in human history that absolute digital scarcity can be achieved without delegating power to a third-party intermediary.'
                : 'Bitcoin demostró por primera vez en la historia que es posible lograr escasez digital absoluta sin necesidad de delegar confianza en ningún intermediario.'
              }
            </p>
          </div>
          <button
            onClick={() => onSelectArticle('criptomonedas-guia-principiantes')}
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
          >
            <span>{isEn ? 'Read Complete Guide' : 'Leer Guía Completa'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Detailed narrative section: Evolution of payment systems */}
      <div className={`rounded-3xl p-6 sm:p-8 space-y-6 border ${
        darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          {isEn
            ? 'The Evolution of Payment Systems: From Human Trust to Deterministic Code'
            : 'La evolución de los sistemas de pago: de la confianza al código'
          }
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          <p>
            {isEn
              ? 'For centuries, commerce across long distances required trusted intermediaries: commercial banks, clearing houses, or card processing platforms certifying that an account held adequate funds and adjusting private databases accordingly.'
              : 'Durante siglos, el comercio digital requirió de una tercera parte de confianza: bancos, procesadores de tarjetas o plataformas que certificaran que una persona tenía dinero y dedujeran el importe en una base de datos privada.'
            }
          </p>
          <p>
            {isEn
              ? 'In 2008, with the release of the Bitcoin whitepaper, a peer-to-peer electronic cash system was established that proved mathematical rules, cryptographic incentives, and distributed ledgers can securely coordinate global value without counterparty risk.'
              : 'En 2008, con la aparición del whitepaper de Bitcoin, se logró por primera vez en la historia de la computación un sistema de dinero en efectivo electrónico entre pares (P2P) capaz de impedir el doble gasto sin necesidad de ningún árbitro central.'
            }
          </p>
        </div>

        <div className={`pt-4 border-t flex flex-wrap gap-4 items-center justify-between ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {isEn ? 'Recommended reading:' : 'Lectura recomendada:'}
          </span>
          <button
            onClick={() => onSelectArticle('criptomonedas-guia-principiantes')}
            className="flex items-center gap-2 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <span>
              {isEn ? 'Definitive Beginner’s Guide to Cryptocurrencies' : 'Guía definitiva sobre Criptomonedas para principiantes'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
