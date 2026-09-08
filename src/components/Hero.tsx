import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Compass, BookOpen, ShieldCheck } from 'lucide-react';
import { CryptoImages } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onStartLearning: () => void;
  onExploreArticles: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreArticles
}) => {
  const { t, language } = useLanguage();

  // Interactive 3D Parallax Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Desktop Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Mobile Touch Tilt Support
  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: Math.max(-0.4, Math.min(0.4, x)), y: Math.max(-0.4, Math.min(0.4, y)) });
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden bg-[#070b12] text-white pt-10 sm:pt-16 lg:pt-24 pb-14 sm:pb-20 lg:pb-28 border-b border-slate-800/80 min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Dynamic Interactive Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: isHovered
            ? `rotateY(${tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg) scale(1.08) translate3d(${tilt.x * 30}px, ${tilt.y * 22}px, 0px)`
            : 'rotateY(0deg) rotateX(0deg) scale(1.04) translate3d(0, 0, 0)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Full-bleed 3D scene from user reference */}
        <img
          src={CryptoImages.hero3D}
          alt="Cryptographic Torus and Glass Sphere Scene"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right lg:object-center opacity-70 sm:opacity-85"
        />

        {/* Dynamic Atmospheric Light Orbs with Depth */}
        <div
          className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/25 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none"
          style={{
            transform: `translate3d(${tilt.x * 45}px, ${tilt.y * 35}px, 60px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-400/20 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none"
          style={{
            transform: `translate3d(${tilt.x * -35}px, ${tilt.y * -25}px, 35px)`,
          }}
        />
      </div>

      {/* Cinematic High-Contrast Overlay for Text Clarity across Desktop and Mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b12] via-[#070b12]/95 lg:via-[#070b12]/85 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/60 pointer-events-none z-[1]" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8 text-center lg:text-left">
          
          {/* Micro Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-mono text-slate-300 shadow-xl mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 font-semibold">{t.hero.badge}</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">{language === 'en' ? 'Verified Open Curriculum' : 'Currículo Verificado'}</span>
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-['Outfit'] drop-shadow-2xl">
            {t.hero.headlinePart1}<br />
            {t.hero.headlinePart2}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              {t.hero.headlinePart3}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            {t.hero.subtitle}
          </p>

          {/* Touch-Friendly Action Buttons (Minimum 44px height for mobile ergonomics) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto min-h-[46px] px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-600/35 hover:shadow-blue-600/60 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Compass className="w-4 h-4 text-blue-200" />
              <span>{t.hero.ctaExplore}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreArticles}
              className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 rounded-full bg-slate-900/85 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>{t.hero.ctaArticles}</span>
            </button>
          </div>

          {/* Interactive Hint */}
          <p className="text-[11px] font-mono text-slate-400 pt-1 flex items-center justify-center lg:justify-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.hero.motionHint}</span>
          </p>

        </div>
      </div>

    </section>
  );
};
