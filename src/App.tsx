import React, { useState } from 'react';
import { ViewMode } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EditorialShowcase } from './components/EditorialShowcase';
import { CalmHub } from './components/CalmHub';
import { RoadmapSection } from './components/RoadmapSection';
import { ArticlesDirectory } from './components/ArticlesDirectory';
import { ArticleDetail } from './components/ArticleDetail';
import { GlossarySection } from './components/GlossarySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CriptomonedasView } from './views/CriptomonedasView';
import { BlockchainView } from './views/BlockchainView';
import { BitcoinView } from './views/BitcoinView';
import { EthereumView } from './views/EthereumView';
import { ComparativasView } from './views/ComparativasView';
import { CronologiaView } from './views/CronologiaView';
import { MitosRiesgosView } from './views/MitosRiesgosView';

function AppContent() {
  const { darkMode, toggleTheme } = useTheme();
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [activeArticleSlug, setActiveArticleSlug] = useState<string>('blockchain-explicada-desde-cero');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigate = (view: ViewMode, articleSlug?: string) => {
    if (articleSlug) {
      setActiveArticleSlug(articleSlug);
      setCurrentView('articulo_detalle');
    } else {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (slug: string) => {
    setActiveArticleSlug(slug);
    setCurrentView('articulo_detalle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen font-['Plus_Jakarta_Sans'] transition-colors duration-200 flex flex-col ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main View Content Router */}
      <main id="main-content" className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 3D Interactive Hero Section */}
            <Hero
              onStartLearning={() => handleNavigate('aprende')}
              onExploreArticles={() => handleNavigate('articulos')}
            />

            {/* Editorial Showcase with Featured In-Depth Educational Articles */}
            <EditorialShowcase
              onSelectArticle={handleSelectArticle}
              onExploreAll={() => handleNavigate('articulos')}
            />

            {/* Structured Learning Hub Grid */}
            <CalmHub onNavigate={handleNavigate} />
          </>
        )}

        {currentView === 'criptomonedas' && (
          <CriptomonedasView onSelectArticle={handleSelectArticle} />
        )}

        {currentView === 'blockchain' && (
          <BlockchainView onSelectArticle={handleSelectArticle} />
        )}

        {currentView === 'bitcoin' && (
          <BitcoinView onSelectArticle={handleSelectArticle} />
        )}

        {currentView === 'ethereum' && (
          <EthereumView onSelectArticle={handleSelectArticle} />
        )}

        {currentView === 'aprende' && (
          <div className="py-8">
            <RoadmapSection onSelectConceptSlug={handleSelectArticle} />
          </div>
        )}

        {currentView === 'comparativas' && (
          <ComparativasView />
        )}

        {currentView === 'cronologia' && (
          <CronologiaView />
        )}

        {currentView === 'mitos-riesgos' && (
          <MitosRiesgosView />
        )}

        {currentView === 'articulos' && (
          <ArticlesDirectory onSelectArticle={handleSelectArticle} />
        )}

        {currentView === 'articulo_detalle' && (
          <ArticleDetail
            articleSlug={activeArticleSlug}
            onBack={() => handleNavigate('articulos')}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentView === 'glosario' && (
          <div className="py-8">
            <GlossarySection />
          </div>
        )}

        {currentView === 'faq' && (
          <div className="py-8">
            <FaqSection />
          </div>
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Modal (Ctrl/Cmd + K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
