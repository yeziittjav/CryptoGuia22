import React from 'react';
import { ViewMode } from '../types';
import { Clock, Map, Columns, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface CalmHubProps {
  onNavigate: (view: ViewMode) => void;
}

export const CalmHub: React.FC<CalmHubProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { darkMode } = useTheme();

  const hubs = [
    {
      id: 'aprende',
      title: t.hub.pathTitle,
      subtitle: t.hub.pathSub,
      description: t.hub.pathDesc,
      icon: Map,
      cta: t.hub.pathCta,
      view: 'aprende' as ViewMode,
      badge: t.hub.pathBadge,
    },
    {
      id: 'comparativas',
      title: t.hub.compTitle,
      subtitle: t.hub.compSub,
      description: t.hub.compDesc,
      icon: Columns,
      cta: t.hub.compCta,
      view: 'comparativas' as ViewMode,
      badge: t.hub.compBadge,
    },
    {
      id: 'cronologia',
      title: t.hub.timeTitle,
      subtitle: t.hub.timeSub,
      description: t.hub.timeDesc,
      icon: Clock,
      cta: t.hub.timeCta,
      view: 'cronologia' as ViewMode,
      badge: t.hub.timeBadge,
    },
    {
      id: 'mitos-riesgos',
      title: t.hub.mythsTitle,
      subtitle: t.hub.mythsSub,
      description: t.hub.mythsDesc,
      icon: ShieldAlert,
      cta: t.hub.mythsCta,
      view: 'mitos-riesgos' as ViewMode,
      badge: t.hub.mythsBadge,
    }
  ];

  return (
    <section
      className={`py-14 sm:py-20 border-b transition-colors duration-200 ${
        darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span
            className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-2 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {t.hub.sectionTag}
          </span>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}
          >
            {t.hub.title}
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {t.hub.subtitle}
          </p>
        </div>

        {/* 4 Clean Hub Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <div
                key={hub.id}
                onClick={() => onNavigate(hub.view)}
                className={`active:scale-[0.99] border rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-sm min-h-[220px] ${
                  darkMode
                    ? 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-blue-500/50 shadow-lg'
                    : 'bg-white hover:bg-slate-50/90 border-slate-200 hover:border-blue-500/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${
                        darkMode
                          ? 'bg-slate-800/80 border-slate-700/80 text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-950/40'
                          : 'bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {hub.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold transition-colors mb-1 font-['Outfit'] ${
                      darkMode
                        ? 'text-white group-hover:text-blue-300'
                        : 'text-slate-950 group-hover:text-blue-600'
                    }`}
                  >
                    {hub.title}
                  </h3>
                  <span
                    className={`text-xs font-mono block mb-2 font-medium ${
                      darkMode ? 'text-blue-400/90' : 'text-blue-600'
                    }`}
                  >
                    {hub.subtitle}
                  </span>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {hub.description}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                    darkMode ? 'border-slate-800/80' : 'border-slate-100'
                  }`}
                >
                  <span
                    className={`transition-colors ${
                      darkMode
                        ? 'text-slate-400 group-hover:text-white'
                        : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                  >
                    {hub.cta}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
