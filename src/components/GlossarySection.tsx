import React, { useState, useMemo } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { GlossaryTerm } from '../types';
import { Search, BookOpen, ChevronDown, Sparkles, Lightbulb } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('TODAS');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [expandedId, setExpandedId] = useState<string | null>(GLOSSARY_DATA[0].id);

  const categories = ['Todas', 'Básicos', 'Blockchain', 'Criptografía', 'Consenso', 'Seguridad', 'DeFi', 'Web3', 'Mercado'];

  const alphabet = ['TODAS', ...Array.from(new Set(GLOSSARY_DATA.map(t => t.term[0].toUpperCase()))).sort()];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter((term) => {
      const matchLetter = selectedLetter === 'TODAS' || term.term.toUpperCase().startsWith(selectedLetter);
      const matchCat = selectedCategory === 'Todas' || term.category === selectedCategory;
      const matchSearch =
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.detailedExplanation.toLowerCase().includes(searchTerm.toLowerCase());
      return matchLetter && matchCat && matchSearch;
    });
  }, [searchTerm, selectedLetter, selectedCategory]);

  return (
    <section id="glosario-completo" className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
            DICCIONARIO TÉCNICO DESCENTRALIZADO
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Glosario Cripto & Blockchain
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Más de 36 términos esenciales explicados sin rodeos: definición corta, desarrollo técnico, analogía cotidiana y conceptos relacionados.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar término (ej. Hash, Mempool, Halving, Gas, Staking)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Alphabet bar */}
          <div className="flex flex-wrap gap-1 items-center border-t border-slate-800 pt-3">
            <span className="text-xs font-mono text-slate-500 mr-2">Filtrar A-Z:</span>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-2 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-6">
          <span>{filteredTerms.length} términos encontrados</span>
          {(searchTerm || selectedLetter !== 'TODAS' || selectedCategory !== 'Todas') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLetter('TODAS');
                setSelectedCategory('Todas');
              }}
              className="text-cyan-400 underline cursor-pointer"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Terms List Accordion Cards */}
        <div className="space-y-3">
          {filteredTerms.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-md hover:border-slate-700"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {item.term}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      {item.shortDefinition}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="text-xs text-cyan-400 font-semibold hidden sm:inline">
                      {isExpanded ? 'Ver menos' : 'Explicación completa'}
                    </span>
                    <div className={`p-1 rounded bg-slate-950 border border-slate-800 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-4 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Desarrollo Técnico Detallado:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.detailedExplanation}
                      </p>
                    </div>

                    <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-3.5 flex items-start gap-3">
                      <Lightbulb className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-cyan-300 text-xs block mb-0.5">Analogía cotidiana:</strong>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.analogy}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-500">Relacionado con:</span>
                      {item.relatedTerms.map((rel, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchTerm(rel);
                          }}
                          className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 hover:border-cyan-500/60 transition-colors"
                        >
                          {rel}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm">No se encontraron términos coincidentes con "{searchTerm}".</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLetter('TODAS');
              }}
              className="mt-2 text-xs text-cyan-400 underline cursor-pointer"
            >
              Mostrar todo el glosario
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
