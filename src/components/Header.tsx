import React, { useState, useRef, useEffect } from 'react';
import { ViewMode } from '../types';
import { CryptoLogo } from './CryptoLogo';
import { CryptoImages } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, Moon, Sun, Menu, X, ChevronDown, ArrowRight, 
  Globe
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, articleSlug?: string) => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

type MenuKey = 'fundamentos' | 'aprender' | null;

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  darkMode,
  onToggleTheme
}) => {
  const { t, language, setLanguage } = useLanguage();
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const isEn = language === 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (view: ViewMode, slug?: string) => {
    onNavigate(view, slug);
    setActiveMenu(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = (key: MenuKey) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  return (
    <header 
      ref={navContainerRef}
      className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-200 ${
        darkMode 
          ? 'bg-slate-950/95 border-slate-800/80 text-slate-100' 
          : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
      }`}
    >
      {/* Top Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Modern Vector Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center cursor-pointer focus:outline-none"
          aria-label={isEn ? 'Go to CryptoGuía home' : 'Ir al inicio de CryptoGuía'}
        >
          <CryptoLogo size="md" showSubtitle={true} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold">
          
          {/* Item 1: Inicio / Home */}
          <button
            onClick={() => handleNav('home')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentView === 'home'
                ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {t.nav.home}
          </button>

          {/* Item 2: Foundations Mega Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('fundamentos')}
              onMouseEnter={() => setActiveMenu('fundamentos')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeMenu === 'fundamentos' || ['criptomonedas', 'blockchain', 'bitcoin', 'ethereum'].includes(currentView)
                  ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                  : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              <span>{t.nav.foundations}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeMenu === 'fundamentos' ? 'rotate-180 text-blue-500' : darkMode ? 'text-slate-500' : 'text-slate-400'
              }`} />
            </button>
          </div>

          {/* Item 3: Learn & Guides Mega Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('aprender')}
              onMouseEnter={() => setActiveMenu('aprender')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeMenu === 'aprender' || ['aprende', 'mitos-riesgos', 'cronologia', 'comparativas'].includes(currentView)
                  ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                  : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              <span>{t.nav.learnGuides}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeMenu === 'aprender' ? 'rotate-180 text-blue-500' : darkMode ? 'text-slate-500' : 'text-slate-400'
              }`} />
            </button>
          </div>

          {/* Item 5: Articles */}
          <button
            onClick={() => handleNav('articulos')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentView === 'articulos' || currentView === 'articulo_detalle'
                ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {t.nav.articles}
          </button>

          {/* Item 6: Glossary */}
          <button
            onClick={() => handleNav('glosario')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentView === 'glosario'
                ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {t.nav.glossary}
          </button>

          {/* Item 7: FAQ */}
          <button
            onClick={() => handleNav('faq')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentView === 'faq'
                ? darkMode ? 'text-blue-400 bg-blue-950/50' : 'text-blue-600 bg-blue-50 font-bold'
                : darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Right Action Tools: Search, Language Switcher, Theme & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-sm cursor-pointer border ${
              darkMode
                ? 'bg-slate-900 hover:bg-slate-800 border-slate-700/80 text-slate-300 hover:text-white'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-950'
            }`}
            title={isEn ? 'Search encyclopedia (Ctrl + K)' : 'Buscar en la enciclopedia (Ctrl + K)'}
          >
            <Search className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden sm:inline">{t.nav.search}</span>
            <kbd className={`hidden md:inline font-mono text-[9px] px-1 py-0.2 rounded border ${
              darkMode ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-white text-slate-500 border-slate-300'
            }`}>
              {t.nav.searchShortcut}
            </kbd>
          </button>

          {/* Language Switcher (EN / ES) */}
          <div className={`flex items-center rounded-full p-0.5 shadow-sm border ${
            darkMode ? 'bg-slate-900 border-slate-700/80' : 'bg-slate-100 border-slate-300'
          }`}>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
          </div>

          {/* Functional Theme Toggle (Day / Night Lights) */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-amber-400 hover:text-amber-300'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-blue-600'
            }`}
            title={darkMode ? (isEn ? 'Switch to Light Mode' : 'Activar Modo Claro') : (isEn ? 'Switch to Dark Mode' : 'Activar Modo Oscuro')}
            aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Pill CTA Button */}
          <button
            onClick={() => handleNav('aprende')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer"
          >
            {t.nav.exploreGuide}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950'
            }`}
            aria-label={isEn ? 'Toggle menu' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MEGA-MENU DROPDOWN 1: FUNDAMENTOS */}
      {activeMenu === 'fundamentos' && (
        <div 
          onMouseLeave={() => setActiveMenu(null)}
          className={`hidden lg:block absolute top-16 left-0 right-0 backdrop-blur-xl border-b shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150 ${
            darkMode
              ? 'bg-slate-950/98 border-slate-800 text-slate-200'
              : 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8">
            
            {/* Left Preview Image Card */}
            <div className={`col-span-3 rounded-2xl overflow-hidden p-4 flex flex-col justify-between group border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-slate-700/50">
                  <img
                    src={CryptoImages.chainLinks}
                    alt={isEn ? 'Cryptographic Foundations' : 'Fundamentos Cripto'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider block mb-1">
                  {isEn ? 'Foundational Guide' : 'Guía Primaria'}
                </span>
                <h4 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                  {isEn ? 'Decentralization Architecture' : 'Bases de la Descentralización'}
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {isEn
                    ? 'Understand how peer-to-peer topologies remove intermediary trust via mathematics and consensus.'
                    : 'Aprende cómo las redes P2P eliminan los intermediarios tradicionales mediante matemáticas y consenso.'}
                </p>
              </div>
              <button
                onClick={() => handleNav('criptomonedas')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer"
              >
                <span>{isEn ? 'Explore foundations' : 'Explorar fundamentos'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Column 1: Core Pillars */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'THEORETICAL PILLARS' : 'PILARES CONCEPTUALES'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('criptomonedas')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'What is a Cryptocurrency?' : '¿Qué es una Criptomoneda?'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Digital money without central banks' : 'Dinero digital sin banca central'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('blockchain')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'How does Blockchain Work?' : '¿Cómo funciona la Blockchain?'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Distributed immutable ledger' : 'Libro contable inmutable y distribuido'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Leading Networks */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'MAJOR NETWORKS' : 'REDES LÍDERES'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('bitcoin')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Bitcoin & Nakamoto Consensus' : 'Bitcoin & Satoshi Nakamoto'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? '21M hardcap & disinflation' : 'Escasez de 21M y el Halving'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('ethereum')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Ethereum & Smart Contracts' : 'Ethereum & Smart Contracts'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'The EVM world computer' : 'Computadora mundial y la EVM'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('articulo_detalle', 'que-son-las-defi')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'DeFi & Open Protocols' : 'DeFi & Finanzas Abiertas'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Lending protocols and AMMs' : 'Préstamos y pools de liquidez'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Custody & Security */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'SECURITY & CUSTODY' : 'SEGURIDAD & CUSTODIA'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('articulo_detalle', 'que-es-una-wallet')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Wallets & Key Management' : 'Wallets Explicadas'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Cold storage vs hot wallets' : 'Billeteras frías vs. calientes'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('articulo_detalle', 'frase-semilla-claves-privadas')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Seed Phrases & Cryptographic Entropy' : 'Protección de Frase Semilla'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'BIP-39 mnemonic preservation' : 'Evitar phishing y robo de claves'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('mitos-riesgos')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className="font-semibold block text-amber-500 hover:underline">
                      {isEn ? 'Myths vs Realities' : 'Riesgos y Mitos Frecuentes'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Objective security warnings' : 'Aclaraciones objetivas y advertencias'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* MEGA-MENU DROPDOWN 2: APRENDER & GUÍAS */}
      {activeMenu === 'aprender' && (
        <div 
          onMouseLeave={() => setActiveMenu(null)}
          className={`hidden lg:block absolute top-16 left-0 right-0 backdrop-blur-xl border-b shadow-2xl py-8 animate-in fade-in slide-in-from-top-2 duration-150 ${
            darkMode
              ? 'bg-slate-950/98 border-slate-800 text-slate-200'
              : 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-200/50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8">
            
            {/* Left Preview Image Card */}
            <div className={`col-span-3 rounded-2xl overflow-hidden p-4 flex flex-col justify-between group border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-slate-700/50">
                  <img
                    src={CryptoImages.globalNetwork}
                    alt={isEn ? 'Learning Roadmap' : 'Ruta de Aprendizaje'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-wider block mb-1">
                  {isEn ? 'Structured Curriculum' : 'Ruta Estructurada'}
                </span>
                <h4 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                  {isEn ? 'Step-by-Step Learning' : 'Progresión Metódica'}
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {isEn
                    ? 'Three tiers of structured knowledge with progress tracking and conceptual checkpoints.'
                    : 'Tres niveles secuenciales con registro local de progreso y autoevaluaciones conceptuales.'}
                </p>
              </div>
              <button
                onClick={() => handleNav('aprende')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer"
              >
                <span>{isEn ? 'View roadmap' : 'Ver ruta de aprendizaje'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Column 1: Roadmap & Synthesis */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'CURRICULUM & MODELS' : 'CURRÍCULO Y SÍNTESIS'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('aprende')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Level 1: Novice Foundations' : 'Nivel 1: Principiante'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Money, trust, and cryptography' : 'Dinero, confianza e intermediarios'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('aprende')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Level 2: Intermediate Protocols' : 'Nivel 2: Intermedio'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Mining, staking, and smart contracts' : 'Minería, staking y smart contracts'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('aprende')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Level 3: Advanced Architectures' : 'Nivel 3: Avanzado'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Layer 2, ZK-Rollups, and governance' : 'Layer 2, ZK-rollups y gobernanza'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('comparativas')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Direct Comparison Tables' : 'Tablas Comparativas'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'BTC vs ETH • PoW vs PoS • Coins vs Tokens' : 'BTC vs ETH • PoW vs PoS • Monedas vs Tokens'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('cronologia')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Cryptographic Historical Timeline' : 'Cronología Histórica'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'From 1980s Cypherpunks to modern L2s' : 'De los cypherpunks en 1980 hasta hoy'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Reference Publications */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'PUBLICATIONS' : 'PUBLICACIONES Y GUÍAS'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('articulos')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'All 20 Encyclopedic Articles' : 'Todos los 20 Artículos'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Comprehensive theoretical papers' : 'Tratados teóricos rigurosos'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('glosario')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Alphabetical Glossary' : 'Glosario Alfabético'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? '36+ technical terms explained' : '36+ términos técnicos explicados'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('faq')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className={`font-semibold block ${darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'}`}>
                      {isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes (FAQ)'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Clear answers to direct doubts' : 'Respuestas claras a dudas frecuentes'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Security Notices */}
            <div className="col-span-3 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 border-b ${
                darkMode ? 'text-blue-400 border-slate-800' : 'text-blue-600 border-slate-200'
              }`}>
                {isEn ? 'CRITICAL SECURITY' : 'SEGURIDAD CRÍTICA'}
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('mitos-riesgos')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className="font-semibold block text-amber-500 hover:underline">
                      {isEn ? 'Debunking Pervasive Myths' : 'Desmontando Mitos'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'No total anonymity nor magic wealth' : 'Ni anónimo total ni riqueza mágica'}
                    </span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('mitos-riesgos')} 
                    className="text-left hover:translate-x-1 transition-all block cursor-pointer"
                  >
                    <span className="font-semibold block text-rose-500 hover:underline">
                      {isEn ? 'Real Risk Management' : 'Gestión de Riesgos Reales'}
                    </span>
                    <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isEn ? 'Irreversibility, phishing, and hacks' : 'Volatilidad, custodia y estafas'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* MOBILE ACCORDION DRAWER */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          
          {/* Mobile Language Switcher Row */}
          <div className={`flex items-center justify-between p-3 rounded-2xl border shadow-sm ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>{isEn ? 'Language / Idioma' : 'Idioma / Language'}</span>
            </div>
            <div className={`flex items-center p-1 rounded-xl border ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  language === 'en' ? 'bg-blue-600 text-white shadow-md' : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  language === 'es' ? 'bg-blue-600 text-white shadow-md' : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleNav('home')}
              className={`w-full text-left min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                currentView === 'home' 
                  ? darkMode ? 'bg-blue-950/80 text-blue-300 border border-blue-800/60' : 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : darkMode ? 'text-slate-200 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>🏠</span>
              <span>{t.nav.home}</span>
            </button>
          </div>

          {/* Group 1: Foundations */}
          <div className={`p-3.5 rounded-2xl border space-y-2 ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider block px-1">
              {t.nav.foundations}
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => handleNav('criptomonedas')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.crypto}
              </button>
              <button
                onClick={() => handleNav('blockchain')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.blockchain}
              </button>
              <button
                onClick={() => handleNav('bitcoin')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.bitcoin}
              </button>
              <button
                onClick={() => handleNav('ethereum')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.ethereum}
              </button>
            </div>
          </div>

          {/* Group 2: Analysis & Historical Timeline */}
          <div className={`p-3.5 rounded-2xl border space-y-2 ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider block px-1">
              {isEn ? 'Analysis & Timeline' : 'Análisis y Cronología'}
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => handleNav('comparativas')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.comparisons}
              </button>
              <button
                onClick={() => handleNav('cronologia')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.timeline}
              </button>
            </div>
          </div>

          {/* Group 3: Resources & Guides */}
          <div className={`p-3.5 rounded-2xl border space-y-2 ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider block px-1">
              {t.nav.learnGuides}
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => handleNav('aprende')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.learningPath}
              </button>
              <button
                onClick={() => handleNav('articulos')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.articles}
              </button>
              <button
                onClick={() => handleNav('glosario')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.glossary}
              </button>
              <button
                onClick={() => handleNav('faq')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-slate-950/40 text-slate-200 hover:bg-slate-800' : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.faq}
              </button>
              <button
                onClick={() => handleNav('mitos-riesgos')}
                className={`text-left min-h-[40px] px-3 py-2 rounded-lg col-span-2 ${
                  darkMode ? 'bg-slate-950/40 text-amber-400 hover:bg-slate-800' : 'bg-white text-amber-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {t.nav.mythsRisks}
              </button>
            </div>
          </div>

          {/* Mobile Bottom Action Row */}
          <div className={`pt-2 flex items-center justify-between border-t text-xs ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer min-h-[44px] px-2"
            >
              <Search className="w-4 h-4" /> 
              <span>{t.nav.search} ({t.nav.searchShortcut})</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400">CryptoGuía</span>
          </div>

        </div>
      )}
    </header>
  );
};
