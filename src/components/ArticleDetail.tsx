import React, { useEffect, useState } from 'react';
import { getLocalizedArticleBySlug, getLocalizedArticles } from '../data/bilingualArticles';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Clock, Calendar, ArrowUp, ChevronRight, BookOpen, Layers } from 'lucide-react';

interface ArticleDetailProps {
  articleSlug: string;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  articleSlug,
  onBack,
  onSelectArticle,
}) => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = getLocalizedArticleBySlug(articleSlug, language);
  const allArticles = getLocalizedArticles(language);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleSlug, language]);

  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug && (a.category === article.category || a.concepts.some((c) => article.title.includes(c))))
    .slice(0, 3);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isEn = language === 'en';

  return (
    <div
      className={`relative min-h-screen pb-24 transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Reading Progress Indicator */}
      <div
        className={`fixed top-16 left-0 right-0 h-1 z-50 transition-colors ${
          darkMode ? 'bg-slate-900' : 'bg-slate-200'
        }`}
      >
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors cursor-pointer py-2 px-3.5 rounded-lg border ${
              darkMode
                ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-850'
                : 'bg-white text-slate-700 hover:text-slate-950 border-slate-200 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-blue-500" />
            <span>{isEn ? 'Back to all articles' : 'Volver a todos los artículos'}</span>
          </button>

          <span
            className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
              darkMode
                ? 'bg-blue-950/60 text-blue-400 border-blue-800/80'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
          >
            {article.category}
          </span>
        </div>

        {/* Article Header (Editorial & Authoritative) */}
        <header className="mb-10">
          <h1
            className={`text-2xl sm:text-4xl md:text-4xl font-extrabold tracking-tight leading-snug mb-5 font-['Outfit'] ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            {article.title}
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 font-normal ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {article.excerpt}
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 text-xs font-mono py-3.5 border-y ${
              darkMode
                ? 'border-slate-800 text-slate-400'
                : 'border-slate-200 text-slate-500'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="text-blue-500 font-semibold flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {isEn ? 'Technical Publication' : 'Publicación Técnica'}
            </span>
          </div>
        </header>

        {/* Index / Table of Contents (Clean Text Only) */}
        {article.sections && article.sections.length > 0 && (
          <nav
            aria-label={isEn ? 'Table of Contents' : 'Índice de contenidos'}
            className={`rounded-xl p-5 mb-10 border transition-colors ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider block mb-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              {isEn ? 'Sections in this treatise' : 'Índice de secciones del tratado'}
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {article.sections.map((sec, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(`section-${idx}`)}
                    className={`text-left w-full transition-colors flex items-start gap-2 py-1 cursor-pointer ${
                      darkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-700 hover:text-blue-700'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{sec.heading}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Article Body Content (Pure Coherent Text, Deep Educational Focus) */}
        <article className="space-y-12 leading-relaxed">
          {article.sections.map((section, idx) => (
            <section
              id={`section-${idx}`}
              key={idx}
              className="scroll-mt-24 space-y-4"
            >
              <h2
                className={`text-xl sm:text-2xl font-bold tracking-tight pb-2 border-b ${
                  darkMode
                    ? 'text-white border-slate-800'
                    : 'text-slate-950 border-slate-200'
                }`}
              >
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-base sm:text-[17px] leading-[1.8] font-normal ${
                      darkMode ? 'text-slate-300' : 'text-slate-800'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>

        {/* Theoretical Concepts Covered */}
        {article.concepts && article.concepts.length > 0 && (
          <div
            className={`mt-14 p-6 rounded-xl border transition-colors ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3
              className={`text-base font-bold mb-3 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>
                {isEn
                  ? 'Core Conceptual Topics Explored'
                  : 'Conceptos Teóricos Fundamentales'}
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.concepts.map((concept, cIdx) => (
                <span
                  key={cIdx}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${
                    darkMode
                      ? 'bg-slate-950 text-slate-300 border-slate-800'
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div
          className={`mt-12 pt-6 border-t flex items-center justify-between ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-800'
                : 'bg-white text-slate-700 hover:text-slate-950 border-slate-200 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? 'Back to directory' : 'Volver al directorio'}</span>
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-blue-950/60 text-blue-300 hover:text-white border-blue-800 hover:bg-blue-900/60'
                : 'bg-blue-50 text-blue-700 hover:text-blue-900 border-blue-200 hover:bg-blue-100'
            }`}
          >
            <span>{isEn ? 'Scroll to top' : 'Subir al inicio'}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Related Articles (Clean Text List) */}
        {relatedArticles.length > 0 && (
          <div
            className={`mt-14 pt-8 border-t ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <h3
              className={`text-lg font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {isEn
                ? 'Related Publications to Continue Reading:'
                : 'Publicaciones Relacionadas para Continuar Leyendo:'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.slug)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    darkMode
                      ? 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-blue-500/50'
                      : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-500/50 shadow-sm'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 block mb-1">
                      {rel.category} • {rel.readTime}
                    </span>
                    <h4
                      className={`text-sm font-bold line-clamp-2 mb-2 group-hover:text-blue-500 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {rel.title}
                    </h4>
                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs text-blue-500 font-semibold mt-4 group-hover:underline">
                    {isEn ? 'Read article →' : 'Leer artículo →'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
