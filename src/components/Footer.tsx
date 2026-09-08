import React from 'react';
import { ViewMode } from '../types';
import { CryptoLogo } from './CryptoLogo';
import { ShieldCheck, BookOpen, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (view: ViewMode, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const { darkMode } = useTheme();
  const isEn = language === 'en';

  return (
    <footer
      className={`border-t text-xs transition-colors duration-200 ${
        darkMode
          ? 'bg-slate-950 border-slate-800 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3">
            <CryptoLogo size="md" showSubtitle={false} />
            <p
              className={`leading-relaxed text-xs ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {isEn
                ? 'A comprehensive, open educational repository designed to clarify Bitcoin, Ethereum, distributed ledgers, and cryptography without financial noise or speculation.'
                : 'Portal educativo integral para comprender el funcionamiento de Bitcoin, Ethereum, las redes blockchain y la descentralización tecnológica sin jerga opaca.'}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {isEn
                  ? '100% Educational & Non-Commercial'
                  : '100% Gratuito y sin publicidad financiera'}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {isEn ? 'Core Sections' : 'Secciones Principales'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Home & Showcase' : 'Inicio & Destacados'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('criptomonedas')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'What is a Cryptocurrency?' : '¿Qué es una Criptomoneda?'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blockchain')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Blockchain Technology' : 'Tecnología Blockchain'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bitcoin')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Bitcoin & The Halving' : 'Bitcoin & Halving'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ethereum')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Ethereum & Smart Contracts' : 'Ethereum & Smart Contracts'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Educational Interactive Tools */}
          <div className="space-y-3">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {isEn ? 'Educational Modules' : 'Módulos Educativos'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('comparativas')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Direct Comparison Tables' : 'Tablas Comparativas'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cronologia')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Cryptographic Historical Timeline' : 'Cronología Histórica'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aprende')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Guided Learning Roadmap' : 'Ruta Paso a Paso'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articulos')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Encyclopedic Articles (20)' : 'Biblioteca de Artículos (20)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glosario')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Glossary of 36+ Terms' : 'Glosario de 36+ Términos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-blue-500 transition-colors cursor-pointer text-left"
                >
                  {isEn ? 'Frequently Asked Questions (FAQ)' : 'Preguntas Frecuentes (FAQ)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Objective Disclaimers */}
          <div className="space-y-3">
            <h4
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {isEn ? 'Ethical Notice' : 'Aviso Pedagógico'}
            </h4>
            <p
              className={`text-[11px] leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {isEn
                ? 'All materials on this portal are for informational and computer-science educational purposes only. Nothing here constitutes investment, legal, or financial advice.'
                : 'Todo el material de este portal tiene fines exclusivamente formativos y de divulgación técnica. No constituye bajo ninguna circunstancia asesoramiento financiero ni recomendación de inversión.'}
            </p>
            <div
              className={`p-3 rounded-xl border flex items-start gap-2 text-[11px] ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                {isEn
                  ? 'Verify everything yourself. Run your own node. Never share your seed phrase.'
                  : 'Verifica por ti mismo. Ejecuta tu propio nodo. Jamás compartas tu frase semilla.'}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
            darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-500'
          }`}
        >
          <div>
            © {new Date().getFullYear()} CryptoGuía. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('glosario')} className="hover:underline cursor-pointer">
              {isEn ? 'Glossary' : 'Glosario'}
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('faq')} className="hover:underline cursor-pointer">
              {isEn ? 'FAQ' : 'Preguntas Frecuentes'}
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('mitos-riesgos')} className="hover:underline cursor-pointer">
              {isEn ? 'Security & Risks' : 'Seguridad & Riesgos'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
