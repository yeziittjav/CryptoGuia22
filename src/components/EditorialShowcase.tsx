import React from 'react';
import { CryptoImages } from '../assets/images';
import { Clock, Calendar, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { getLocalizedArticleBySlug } from '../data/bilingualArticles';

interface EditorialShowcaseProps {
  onSelectArticle: (slug: string) => void;
  onExploreAll: () => void;
}

export const EditorialShowcase: React.FC<EditorialShowcaseProps> = ({
  onSelectArticle,
  onExploreAll,
}) => {
  const { t, language } = useLanguage();
  const { darkMode } = useTheme();
  const isEn = language === 'en';

  const nftArt = getLocalizedArticleBySlug('nft-tokens-no-fungibles', language);
  const defiArt = getLocalizedArticleBySlug('que-son-las-defi', language);
  const walletArt = getLocalizedArticleBySlug('que-es-una-wallet', language);

  const blockchainArt = getLocalizedArticleBySlug('blockchain-explicada-desde-cero', language);
  const bitcoinArt = getLocalizedArticleBySlug('que-es-bitcoin', language);
  const beginnerArt = getLocalizedArticleBySlug('criptomonedas-guia-principiantes', language);

  return (
    <section
      id="editorial-showcase"
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        darkMode
          ? 'border-slate-800/80 bg-slate-950/60'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              {t.showcase.tag}
            </div>
            <h2
              className={`text-2xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {t.showcase.title}
            </h2>
            <p
              className={`text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t.showcase.subtitle}
            </p>
          </div>
          <button
            onClick={onExploreAll}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors group cursor-pointer"
          >
            <span>{t.showcase.viewAll}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Top 3 Featured Magazine Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Card 1: NFTs */}
          <div
            onClick={() => onSelectArticle(nftArt.slug)}
            className="group relative h-[380px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-700/60 hover:border-purple-500/80 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-end p-6"
          >
            <img
              src={CryptoImages.nftWeb3}
              alt={nftArt.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-400/40 backdrop-blur-md">
                  {nftArt.category}
                </span>
                <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-purple-400" /> {nftArt.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-purple-200 transition-colors">
                {nftArt.title}
              </h3>
              <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                {nftArt.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-purple-300 group-hover:underline">
                <span>{isEn ? 'Read full article' : 'Leer artículo completo'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 2: Understanding DeFi */}
          <div
            onClick={() => onSelectArticle(defiArt.slug)}
            className="group relative h-[380px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-700/60 hover:border-blue-500/80 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-end p-6"
          >
            <img
              src={CryptoImages.defiNodes}
              alt={defiArt.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40 backdrop-blur-md">
                  {defiArt.category}
                </span>
                <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" /> {defiArt.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                {defiArt.title}
              </h3>
              <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                {defiArt.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-300 group-hover:underline">
                <span>{isEn ? 'Read full article' : 'Leer artículo completo'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 3: Wallets & Storage */}
          <div
            onClick={() => onSelectArticle(walletArt.slug)}
            className="group relative h-[380px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-700/60 hover:border-sky-500/80 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-end p-6"
          >
            <img
              src={CryptoImages.walletVault}
              alt={walletArt.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-sky-500/30 text-sky-200 border border-sky-400/40 backdrop-blur-md">
                  {walletArt.category}
                </span>
                <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-sky-400" /> {walletArt.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-sky-200 transition-colors">
                {walletArt.title}
              </h3>
              <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                {walletArt.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-sky-300 group-hover:underline">
                <span>{isEn ? 'Read full article' : 'Leer artículo completo'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Item 1: Blockchain */}
          <div
            onClick={() => onSelectArticle(blockchainArt.slug)}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-lg'
                : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-md shadow-sm'
            }`}
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={CryptoImages.chainLinks}
                  alt={blockchainArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div
                  className={`flex items-center justify-between text-xs mb-2.5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {blockchainArt.publishDate}
                  </span>
                  <span
                    className={`font-medium px-2 py-0.5 rounded text-[11px] border ${
                      darkMode
                        ? 'text-blue-400 bg-blue-950/60 border-blue-800'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                    }`}
                  >
                    {blockchainArt.category}
                  </span>
                </div>
                <h4
                  className={`text-lg font-bold transition-colors leading-snug group-hover:text-blue-500 ${
                    darkMode ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {blockchainArt.title}
                </h4>
                <p
                  className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {blockchainArt.excerpt}
                </p>
              </div>
            </div>
            <div
              className={`px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t ${
                darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="text-xs">{isEn ? 'Foundations' : 'Fundamentos'}</span>
              <span className="text-blue-500 font-semibold group-hover:underline flex items-center gap-1">
                {isEn ? 'Read article →' : 'Leer artículo →'}
              </span>
            </div>
          </div>

          {/* Item 2: Bitcoin */}
          <div
            onClick={() => onSelectArticle(bitcoinArt.slug)}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-lg'
                : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-md shadow-sm'
            }`}
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={CryptoImages.defiNodes}
                  alt={bitcoinArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div
                  className={`flex items-center justify-between text-xs mb-2.5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {bitcoinArt.publishDate}
                  </span>
                  <span
                    className={`font-medium px-2 py-0.5 rounded text-[11px] border ${
                      darkMode
                        ? 'text-blue-400 bg-blue-950/60 border-blue-800'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                    }`}
                  >
                    {bitcoinArt.category}
                  </span>
                </div>
                <h4
                  className={`text-lg font-bold transition-colors leading-snug group-hover:text-blue-500 ${
                    darkMode ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {bitcoinArt.title}
                </h4>
                <p
                  className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {bitcoinArt.excerpt}
                </p>
              </div>
            </div>
            <div
              className={`px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t ${
                darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="text-xs">{isEn ? 'History & Protocol' : 'Historia y Protocolo'}</span>
              <span className="text-blue-500 font-semibold group-hover:underline flex items-center gap-1">
                {isEn ? 'Read article →' : 'Leer artículo →'}
              </span>
            </div>
          </div>

          {/* Item 3: Beginner */}
          <div
            onClick={() => onSelectArticle(beginnerArt.slug)}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-lg'
                : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-md shadow-sm'
            }`}
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={CryptoImages.globalNetwork}
                  alt={beginnerArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div
                  className={`flex items-center justify-between text-xs mb-2.5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {beginnerArt.publishDate}
                  </span>
                  <span
                    className={`font-medium px-2 py-0.5 rounded text-[11px] border ${
                      darkMode
                        ? 'text-blue-400 bg-blue-950/60 border-blue-800'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                    }`}
                  >
                    {beginnerArt.category}
                  </span>
                </div>
                <h4
                  className={`text-lg font-bold transition-colors leading-snug group-hover:text-blue-500 ${
                    darkMode ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  {beginnerArt.title}
                </h4>
                <p
                  className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {beginnerArt.excerpt}
                </p>
              </div>
            </div>
            <div
              className={`px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t ${
                darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <span className="text-xs">{isEn ? 'Starting Point' : 'Punto de Partida'}</span>
              <span className="text-blue-500 font-semibold group-hover:underline flex items-center gap-1">
                {isEn ? 'Read article →' : 'Leer artículo →'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
