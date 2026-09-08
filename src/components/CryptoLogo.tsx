import React from 'react';

interface CryptoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const CryptoLogo: React.FC<CryptoLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Sleek Cryptographic Isometric Cube Emblem */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(6,182,212,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="cubeTop" x1="6" y1="6" x2="38" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="6" y1="20" x2="22" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="22" y1="20" x2="38" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="coreGlow" x1="16" y1="16" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>

          {/* Hexagonal Isometric Base Cube */}
          {/* Top Face */}
          <polygon
            points="22,4 38,13 22,22 6,13"
            fill="url(#cubeTop)"
            opacity="0.95"
          />
          {/* Left Face */}
          <polygon
            points="6,13 22,22 22,40 6,31"
            fill="url(#cubeLeft)"
            opacity="0.9"
          />
          {/* Right Face */}
          <polygon
            points="22,22 38,13 38,31 22,40"
            fill="url(#cubeRight)"
            opacity="0.95"
          />

          {/* Subtle Inner Isometric Line Accents */}
          <line x1="22" y1="4" x2="22" y2="22" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="6" y1="13" x2="22" y2="22" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="38" y1="13" x2="22" y2="22" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="22" y1="22" x2="22" y2="40" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />

          {/* Central Cryptographic Key / Blockchain Node */}
          <circle cx="22" cy="22" r="5" fill="#020617" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="2.5" fill="url(#coreGlow)" />

          {/* Vertex Satellite Nodes (Distributed Network) */}
          <circle cx="22" cy="4" r="1.5" fill="#ffffff" />
          <circle cx="38" cy="13" r="1.5" fill="#38bdf8" />
          <circle cx="6" cy="13" r="1.5" fill="#38bdf8" />
          <circle cx="22" cy="40" r="1.5" fill="#818cf8" />
          <circle cx="6" cy="31" r="1.5" fill="#0284c7" />
          <circle cx="38" cy="31" r="1.5" fill="#6366f1" />
        </svg>
      </div>

      {/* Typography: CryptoGuía */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold tracking-tight text-white font-['Outfit'] text-lg sm:text-xl">
            Crypto<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Guía</span>
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-800/80">
            v2.0
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider uppercase font-mono font-medium text-slate-400 group-hover:text-cyan-300 transition-colors mt-0.5 hidden sm:block">
            Portal Educativo Cripto & Web3
          </span>
        )}
      </div>
    </div>
  );
};
