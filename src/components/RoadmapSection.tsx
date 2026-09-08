import React, { useState, useEffect } from 'react';
import { ROADMAP_CONCEPTS, LEVEL_QUIZZES } from '../data/roadmapData';
import { LearningConcept, QuizQuestion } from '../types';
import { CheckCircle2, Circle, Trophy, Award, ArrowRight, HelpCircle, RotateCcw, X, Check, ArrowUpRight } from 'lucide-react';

interface RoadmapSectionProps {
  onSelectConceptSlug?: (slug: string) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onSelectConceptSlug }) => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1);
  const [learnedConceptIds, setLearnedConceptIds] = useState<string[]>([]);
  const [activeQuizLevel, setActiveQuizLevel] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});

  // Load from local storage
  useEffect(() => {
    try {
      const savedLearned = localStorage.getItem('cryptoguia_learned_concepts');
      if (savedLearned) {
        setLearnedConceptIds(JSON.parse(savedLearned));
      }
      const savedScores = localStorage.getItem('cryptoguia_quiz_scores');
      if (savedScores) {
        setQuizScores(JSON.parse(savedScores));
      }
    } catch (e) {
      // Ignore local storage restrictions in private tabs
    }
  }, []);

  const toggleLearned = (id: string) => {
    setLearnedConceptIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('cryptoguia_learned_concepts', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const totalConcepts = ROADMAP_CONCEPTS.length;
  const completedCount = learnedConceptIds.length;
  const progressPercent = Math.round((completedCount / totalConcepts) * 100);

  const level1Concepts = ROADMAP_CONCEPTS.filter((c) => c.level === 1);
  const level2Concepts = ROADMAP_CONCEPTS.filter((c) => c.level === 2);
  const level3Concepts = ROADMAP_CONCEPTS.filter((c) => c.level === 3);

  const currentLevelConcepts = ROADMAP_CONCEPTS.filter((c) => c.level === activeLevel);
  const currentLevelCompleted = currentLevelConcepts.filter((c) => learnedConceptIds.includes(c.id)).length;

  const startQuiz = (level: number) => {
    setActiveQuizLevel(level);
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const submitQuiz = () => {
    if (!activeQuizLevel) return;
    const questions = LEVEL_QUIZZES[activeQuizLevel] || [];
    let correct = 0;
    questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });

    const newScores = { ...quizScores, [activeQuizLevel]: correct };
    setQuizScores(newScores);
    setQuizSubmitted(true);
    try {
      localStorage.setItem('cryptoguia_quiz_scores', JSON.stringify(newScores));
    } catch (e) {}
  };

  return (
    <section id="aprende-paso-a-paso" className="py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
              RUTA EDUCATIVA PROGRESIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Aprende paso a paso
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Marca los conceptos conforme los comprendas. Tu progreso se guarda de forma privada en tu navegador sin requerir registro ni cuentas.
            </p>
          </div>

          {/* Overall Progress Widget */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 min-w-[260px] shadow-lg">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                Progreso General:
              </span>
              <span className="text-cyan-400 font-mono font-bold">
                {completedCount} / {totalConcepts} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Level Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <button
            onClick={() => setActiveLevel(1)}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeLevel === 1
                ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-400 block mb-1">
                NIVEL 1 🌱
              </span>
              <h4 className="text-base font-bold text-white">Principiante</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                7 módulos introductorios para empezar desde cero
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              {level1Concepts.filter((c) => learnedConceptIds.includes(c.id)).length}/7
              {quizScores[1] !== undefined && (
                <span className="block text-[10px] text-amber-400 font-semibold mt-1">
                  Quiz: {quizScores[1]}/5
                </span>
              )}
            </div>
          </button>

          <button
            onClick={() => setActiveLevel(2)}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeLevel === 2
                ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-xs font-mono font-semibold text-sky-400 block mb-1">
                NIVEL 2 📚
              </span>
              <h4 className="text-base font-bold text-white">Intermedio</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                9 conceptos sobre consenso, PoW, PoS y smart contracts
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              {level2Concepts.filter((c) => learnedConceptIds.includes(c.id)).length}/9
              {quizScores[2] !== undefined && (
                <span className="block text-[10px] text-amber-400 font-semibold mt-1">
                  Quiz: {quizScores[2]}/5
                </span>
              )}
            </div>
          </button>

          <button
            onClick={() => setActiveLevel(3)}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeLevel === 3
                ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/10'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="text-xs font-mono font-semibold text-purple-400 block mb-1">
                NIVEL 3 🧠
              </span>
              <h4 className="text-base font-bold text-white">Avanzado</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                10 conceptos sobre DeFi, Capas 2, oráculos y tokenomics
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              {level3Concepts.filter((c) => learnedConceptIds.includes(c.id)).length}/10
              {quizScores[3] !== undefined && (
                <span className="block text-[10px] text-amber-400 font-semibold mt-1">
                  Quiz: {quizScores[3]}/5
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Level Concept Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {currentLevelConcepts.map((concept) => {
            const isLearned = learnedConceptIds.includes(concept.id);
            return (
              <div
                key={concept.id}
                className={`bg-slate-900/80 border rounded-2xl p-5 flex flex-col justify-between transition-all shadow-md ${
                  isLearned
                    ? 'border-emerald-500/50 bg-slate-900/90'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                      {concept.category}
                    </span>
                    <button
                      onClick={() => toggleLearned(concept.id)}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        isLearned
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {isLearned ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Aprendido</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5 text-slate-500" />
                          <span>Marcar aprendido</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {concept.title}
                  </h3>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {concept.summary}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-800/80 pt-3 mb-4">
                    <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                      Ideas clave:
                    </span>
                    {concept.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400 leading-none mt-1">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {concept.relatedSlug && onSelectConceptSlug && (
                  <button
                    onClick={() => onSelectConceptSlug(concept.relatedSlug!)}
                    className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-semibold hover:underline cursor-pointer group"
                  >
                    <span>Leer artículo a fondo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Level Mini-Quiz Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase mb-1">
              <Award className="w-4 h-4 text-amber-400" />
              REFUERZO DE APRENDIZAJE • NIVEL {activeLevel}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Listo para poner a prueba lo aprendido en este nivel?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Completa el mini quiz de 5 preguntas objetivas sin presiones de tiempo. El objetivo es reforzar tu comprensión.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {quizScores[activeLevel] !== undefined && (
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block">Último resultado</span>
                <span className="text-lg font-mono font-bold text-amber-400">
                  {quizScores[activeLevel]} / 5
                </span>
              </div>
            )}
            <button
              onClick={() => startQuiz(activeLevel)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{quizScores[activeLevel] !== undefined ? 'Repetir Quiz' : 'Hacer Mini Quiz'}</span>
            </button>
          </div>
        </div>

        {/* Modal / Overlay for Level Quiz */}
        {activeQuizLevel !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    Mini Quiz • Nivel {activeQuizLevel}
                  </span>
                  <h3 className="text-xl font-bold text-white">Refuerza tu conocimiento</h3>
                </div>
                <button
                  onClick={() => setActiveQuizLevel(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {(LEVEL_QUIZZES[activeQuizLevel] || []).map((q, qIdx) => {
                  const selected = quizAnswers[qIdx];
                  const isSubmitted = quizSubmitted;
                  return (
                    <div key={q.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        {qIdx + 1}. {q.question}
                      </h4>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          const isOptionCorrect = q.correctIndex === optIdx;
                          let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                          if (isSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = 'bg-emerald-950/70 border-emerald-600 text-emerald-200';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = 'bg-rose-950/70 border-rose-600 text-rose-200';
                            }
                          } else if (isOptionSelected) {
                            btnStyle = 'bg-cyan-950 border-cyan-500 text-cyan-200';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isSubmitted}
                              onClick={() => setQuizAnswers({ ...quizAnswers, [qIdx]: optIdx })}
                              className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-all flex items-start gap-2.5 ${btnStyle}`}
                            >
                              <span className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center flex-shrink-0 text-[10px] font-mono mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div className="mt-3 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                          <strong className="text-cyan-400 block mb-1">Explicación:</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                {quizSubmitted ? (
                  <>
                    <div className="text-sm font-bold text-white">
                      Resultado final:{' '}
                      <span className="text-cyan-400 font-mono text-base">
                        {quizScores[activeQuizLevel]} / 5 correctas
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startQuiz(activeQuizLevel)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                      >
                        Reintentar
                      </button>
                      <button
                        onClick={() => setActiveQuizLevel(null)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
                      >
                        Continuar aprendiendo
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-slate-400 font-mono">
                      Respondidas: {Object.keys(quizAnswers).length} de 5
                    </span>
                    <button
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < 5}
                      className="px-5 py-2 text-xs font-semibold rounded-lg bg-cyan-400 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-300 transition-all cursor-pointer"
                    >
                      Calcular resultado
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
