import React, { useState } from 'react';
import { getLocalizedArticles, LocalizedArticle } from '../data/bilingualArticles';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import { CryptoImages } from '../assets/images';

interface ArticlesDirectoryProps {
  onSelectArticle: (slug: string) => void;
}

export const ArticlesDirectory: React.FC<ArticlesDirectoryProps> = ({ onSelectArticle }) => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const isEn = language === 'en';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterText, setFilterText] = useState<string>('');

  const articles: LocalizedArticle[] = getLocalizedArticles(language);

  const categories = isEn
    ? [
        { id: 'all', label: 'All' },
        { id: 'foundations', label: 'Foundations' },
        { id: 'bitcoin', label: 'Bitcoin' },
        { id: 'ethereum', label: 'Ethereum' },
        { id: 'blockchain', label: 'Blockchain' },
        { id: 'security', label: 'Security' },
        { id: 'technology', label: 'Technology' },
        { id: 'defi', label: 'DeFi' },
      ]
    : [
        { id: 'all', label: 'Todos' },
        { id: 'foundations', label: 'Fundamentos' },
        { id: 'bitcoin', label: 'Bitcoin' },
        { id: 'ethereum', label: 'Ethereum' },
        { id: 'blockchain', label: 'Blockchain' },
        { id: 'security', label: 'Seguridad' },
        { id: 'technology', label: 'Tecnología' },
        { id: 'defi', label: 'DeFi' },
      ];

  const filteredArticles = articles.filter((art) => {
    const catLower = art.category.toLowerCase();
    let matchesCat = selectedCategory === 'all';
    if (!matchesCat) {
      if (selectedCategory === 'foundations' && (catLower.includes('fund') || catLower.includes('found'))) matchesCat = true;
      else if (selectedCategory === 'bitcoin' && catLower.includes('bitc')) matchesCat = true;
      else if (selectedCategory === 'ethereum' && catLower.includes('ether')) matchesCat = true;
      else if (selectedCategory === 'blockchain' && catLower.includes('block')) matchesCat = true;
      else if (selectedCategory === 'security' && (catLower.includes('segur') || catLower.includes('secu'))) matchesCat = true;
      else if (selectedCategory === 'technology' && (catLower.includes('tecn') || catLower.includes('tech'))) matchesCat = true;
      else if (selectedCategory === 'defi' && catLower.includes('defi')) matchesCat = true;
    }

    const matchesText =
      art.title.toLowerCase().includes(filterText.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(filterText.toLowerCase()) ||
      art.concepts.some((c) => c.toLowerCase().includes(filterText.toLowerCase()));

    return matchesCat && matchesText;
  });

  const getImageForSlug = (slug: string) => {
    if (slug.includes('nft') || slug.includes('web3')) return CryptoImages.nftWeb3;
    if (slug.includes('defi') || slug.includes('smart-contracts') || slug.includes('ethereum')) return CryptoImages.defiNodes;
    if (slug.includes('wallet') || slug.includes('seguridad') || slug.includes('semilla') || slug.includes('riesgos')) return CryptoImages.walletVault;
    if (slug.includes('blockchain') || slug.includes('consenso') || slug.includes('fork')) return CryptoImages.chainLinks;
    return CryptoImages.globalNetwork;
  };

  return (
    <section
      id="directorio-articulos"
      className={`py-12 min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span
            className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-2 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {isEn ? 'COMPREHENSIVE EDUCATIONAL REPOSITORY' : 'BIBLIOTECA EDUCATIVA COMPLETA'}
          </span>
          <h1
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            {isEn ? 'Articles & Technical Treatises' : 'Artículos y Ensayos Explicativos'}
          </h1>
          <p
            className={`text-sm sm:text-base mt-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {isEn
              ? '20 in-depth publications written with pedagogical rigor, factual accuracy, and clear explanatory prose.'
              : '20 publicaciones exhaustivas redactadas con rigor pedagógico, precisión conceptual y lenguaje claro.'}
          </p>
        </div>

        {/* Filters and search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    active
                      ? darkMode
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                        : 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                      : darkMode
                      ? 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-950 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
                darkMode ? 'text-slate-500' : 'text-slate-400'
              }`}
            />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder={isEn ? 'Filter publications...' : 'Filtrar por tema o término...'}
              className={`w-full pl-9 pr-3 py-1.5 rounded-xl text-xs transition-colors focus:outline-none ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-blue-500'
                  : 'bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Articles Count */}
        <div
          className={`flex items-center justify-between text-xs font-mono mb-6 border-b pb-3 ${
            darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}
        >
          <span>
            {isEn
              ? `Showing ${filteredArticles.length} of ${articles.length} publications`
              : `Mostrando ${filteredArticles.length} de ${articles.length} artículos`}
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {isEn ? 'Reset filter' : 'Restablecer filtro'}
            </button>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const img = article.imageUrl || getImageForSlug(article.slug);
            return (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article.slug)}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-md shadow-sm'
                }`}
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={img}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        darkMode ? 'from-slate-950 via-slate-950/40' : 'from-slate-900/80 via-transparent'
                      } to-transparent`}
                    />
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-blue-600/90 text-white backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div
                      className={`flex items-center gap-3 text-[11px] font-mono mb-2.5 ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        {article.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-bold leading-snug group-hover:text-blue-500 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-950'
                      }`}
                    >
                      {article.title}
                    </h3>

                    <p
                      className={`text-xs mt-2.5 line-clamp-3 leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-5 pt-0 mt-auto border-t flex items-center justify-between ${
                    darkMode ? 'border-slate-800/60' : 'border-slate-100'
                  }`}
                >
                  <div className="flex flex-wrap gap-1">
                    {article.concepts.slice(0, 2).map((c, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          darkMode
                            ? 'bg-slate-950 text-slate-400 border-slate-800'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-blue-500 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{isEn ? 'Read' : 'Leer'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
