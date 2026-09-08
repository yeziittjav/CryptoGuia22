import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Layers, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { getLocalizedArticles } from '../data/bilingualArticles';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { ROADMAP_CONCEPTS } from '../data/roadmapData';
import { FAQ_DATA } from '../data/faqData';
import { ViewMode } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewMode, slug?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isEn = language === 'en';

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const cleanQuery = query.trim().toLowerCase();

  const localizedArticles = useMemo(() => getLocalizedArticles(language), [language]);

  const results = useMemo(() => {
    if (!cleanQuery) return null;

    const matchedArticles = localizedArticles.filter(a => 
      a.title.toLowerCase().includes(cleanQuery) ||
      a.excerpt.toLowerCase().includes(cleanQuery) ||
      a.sections.some(s => s.heading.toLowerCase().includes(cleanQuery) || s.paragraphs.some(p => p.toLowerCase().includes(cleanQuery)))
    ).slice(0, 5);

    const matchedGlossary = GLOSSARY_DATA.filter(g =>
      g.term.toLowerCase().includes(cleanQuery) ||
      g.shortDefinition.toLowerCase().includes(cleanQuery) ||
      g.detailedExplanation.toLowerCase().includes(cleanQuery)
    ).slice(0, 5);

    const matchedConcepts = ROADMAP_CONCEPTS.filter(c =>
      c.title.toLowerCase().includes(cleanQuery) ||
      c.summary.toLowerCase().includes(cleanQuery)
    ).slice(0, 4);

    const matchedFaqs = FAQ_DATA.filter(f =>
      f.question.toLowerCase().includes(cleanQuery) ||
      f.answer.toLowerCase().includes(cleanQuery)
    ).slice(0, 3);

    const totalCount = matchedArticles.length + matchedGlossary.length + matchedConcepts.length + matchedFaqs.length;

    return {
      totalCount,
      articles: matchedArticles,
      glossary: matchedGlossary,
      concepts: matchedConcepts,
      faqs: matchedFaqs
    };
  }, [cleanQuery, localizedArticles]);

  if (!isOpen) return null;

  const popularSearches = isEn 
    ? ['Bitcoin', 'Blockchain', 'Ethereum', 'Smart contracts', 'Wallet', 'PoW vs PoS', 'Halving', 'DeFi']
    : ['Bitcoin', 'Blockchain', 'Ethereum', 'Smart contracts', 'Billeteras', 'PoW vs PoS', 'Halving', 'DeFi'];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-16 animate-in fade-in duration-150">
      <div
        className={`border rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Search Input Bar */}
        <div className={`p-4 border-b flex items-center gap-3 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <Search className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isEn ? 'Search articles, concepts, terms, and FAQs...' : 'Buscar artículos, conceptos, glosario, FAQs...'}
            className={`w-full bg-transparent text-sm sm:text-base focus:outline-none placeholder:text-slate-400 ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className={`px-2 py-1 text-xs font-mono rounded border transition-colors ${
              darkMode
                ? 'text-slate-400 bg-slate-800 hover:bg-slate-700 border-slate-700'
                : 'text-slate-500 bg-slate-100 hover:bg-slate-200 border-slate-200'
            }`}
          >
            ESC
          </button>
        </div>

        {/* Search Body Content */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {!cleanQuery ? (
            <div className="py-6">
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-3 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {isEn ? 'Suggested queries:' : 'Términos sugeridos:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results && results.totalCount === 0 ? (
            <div className="text-center py-12">
              <p className={`text-base font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>
                {isEn ? 'No results found for that term.' : 'No encontramos información sobre ese término.'}
              </p>
              <p className={`text-xs max-w-sm mx-auto mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                {isEn
                  ? 'Try searching for fundamental concepts such as "Bitcoin", "Hash", "Wallet", or "Consensus".'
                  : 'Prueba buscando términos generales como "Bitcoin", "Wallet", "Consenso" o "Minería".'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Bitcoin', 'Blockchain', 'Ethereum'].map((suggest) => (
                  <button
                    key={suggest}
                    onClick={() => setQuery(suggest)}
                    className="text-xs text-blue-500 underline"
                  >
                    {suggest}
                  </button>
                ))}
              </div>
            </div>
          ) : results && (
            <div className="space-y-6">
              {/* Matched Articles */}
              {results.articles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-500 uppercase font-bold mb-2.5">
                    <FileText className="w-3.5 h-3.5" />
                    {isEn ? `Articles (${results.articles.length})` : `Artículos Educativos (${results.articles.length})`}
                  </div>
                  <div className="space-y-1.5">
                    {results.articles.map((art) => (
                      <button
                        key={art.id}
                        onClick={() => {
                          onNavigate('articulo_detalle', art.slug);
                          onClose();
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                          darkMode
                            ? 'bg-slate-950/70 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900'
                            : 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-white shadow-sm'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] font-mono block mb-0.5 ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {art.category} • {art.readTime}
                          </span>
                          <h4 className={`text-sm font-bold transition-colors ${
                            darkMode ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-blue-600'
                          }`}>
                            {art.title}
                          </h4>
                          <p className={`text-xs line-clamp-1 mt-0.5 ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {art.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Glossary Terms */}
              {results.glossary.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-500 uppercase font-bold mb-2.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {isEn ? `Glossary Terms (${results.glossary.length})` : `Términos del Glosario (${results.glossary.length})`}
                  </div>
                  <div className="space-y-1.5">
                    {results.glossary.map((term) => (
                      <button
                        key={term.id}
                        onClick={() => {
                          onNavigate('glosario');
                          onClose();
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                          darkMode
                            ? 'bg-slate-950/70 border-slate-800 hover:border-purple-500/50 hover:bg-slate-900'
                            : 'bg-slate-50 border-slate-200 hover:border-purple-500 hover:bg-white shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-sm font-bold transition-colors ${
                              darkMode ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'
                            }`}>
                              {term.term}
                            </span>
                            <span className="text-[10px] font-mono text-purple-500 bg-purple-50 px-1.5 rounded">
                              {term.category}
                            </span>
                          </div>
                          <p className={`text-xs line-clamp-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {term.shortDefinition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched FAQs */}
              {results.faqs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase font-bold mb-2.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    {isEn ? `FAQ Answers (${results.faqs.length})` : `Preguntas Frecuentes (${results.faqs.length})`}
                  </div>
                  <div className="space-y-1.5">
                    {results.faqs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          onNavigate('faq');
                          onClose();
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                          darkMode
                            ? 'bg-slate-950/70 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900'
                            : 'bg-slate-50 border-slate-200 hover:border-emerald-500 hover:bg-white shadow-sm'
                        }`}
                      >
                        <div>
                          <h4 className={`text-xs font-bold transition-colors ${
                            darkMode ? 'text-white group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-600'
                          }`}>
                            {faq.question}
                          </h4>
                          <p className={`text-xs line-clamp-1 mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {faq.answer}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
