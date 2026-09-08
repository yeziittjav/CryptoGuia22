import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { HelpCircle, ChevronDown, Search, MessageSquareQuote } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id, FAQ_DATA[1].id]);

  const categories = ['Todas', 'Básicas', 'Técnicas', 'Seguridad', 'Legales y Economía'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchCat = activeCategory === 'Todas' || faq.category === activeCategory;
    const matchText =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <section id="preguntas-frecuentes" className="py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            RESOLVIENDO DUDAS PASO A PASO
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes (FAQ)
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Respuestas directas, claras y sin rodeos a las 21 interrogantes fundamentales sobre criptomonedas y tecnología blockchain.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en preguntas frecuentes..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-6">
          <span>{filteredFaqs.length} preguntas disponibles</span>
          {(searchTerm || activeCategory !== 'Todas') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('Todas');
              }}
              className="text-cyan-400 underline cursor-pointer"
            >
              Restablecer
            </button>
          )}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-md hover:border-slate-700"
              >
                <div
                  onClick={() => toggleFaq(faq.id)}
                  className="p-5 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 bg-slate-950/60 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
