'use client';

import Link from 'next/link';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section
      background="white"
      padding="xl"
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Enhanced, modern, matching background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top Left Green */}
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[320px] rounded-full 
          bg-etude-green-100 opacity-40 blur-3xl animate-float"
        />
        {/* Top Right Orange */}
        <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[260px] rounded-full 
          bg-etude-orange-100 opacity-40 blur-2xl animate-float-slow"
        />
        {/* Center soft radial gradient */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-etude-orange-50 via-white to-etude-green-50 opacity-90 pointer-events-none" />
        {/* Bottom Purple */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[380px] h-[320px] rounded-full 
          bg-etude-purple-100 opacity-30 blur-2xl animate-float"
        />
        {/* Decorative lines */}
        <svg className="absolute top-1/3 left-0 w-full h-24 opacity-20 pointer-events-none" viewBox="0 0 1440 96" fill="none">
          <path d="M0 80 Q360 0 720 80 T1440 80" stroke="#22c55e" strokeWidth="4" strokeDasharray="14,10" />
        </svg>
        <svg className="absolute bottom-5 left-0 w-full h-16 opacity-10 pointer-events-none" viewBox="0 0 1440 64" fill="none">
          <path d="M0 32 Q360 64 720 32 T1440 32" stroke="#fb923c" strokeWidth="2" strokeDasharray="8,10" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-etude-orange-100 text-etude-orange-800 text-sm font-medium shadow-lg animate-fade-in-down">
              <span className="w-2 h-2 bg-etude-orange-500 rounded-full mr-2 animate-pulse"></span>
              ÉDUCATION POUR TOUS
            </div>

            {/* Titre principal */}
            <div className="space-y-4">
              <Typography as="h1" variant="hero" className="text-gray-900 leading-tight">
                Arrête de subir tes cours.{' '}
                <span className="bg-gradient-to-r from-etude-orange-500 to-etude-green-500 bg-clip-text text-transparent drop-shadow-lg">
                  Crée ton avenir
                </span>
              </Typography>

              <Typography variant="body" className="text-gray-600 text-xl max-w-xl">
                ∑tude.ai t'aide à acquérir les compétences dont tu as besoin pour construire
                et développer la carrière que tu veux.
              </Typography>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-etude-orange-500 hover:bg-etude-orange-600 text-white font-semibold shadow-md transition-all duration-200"
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                <Link href="/signup">Créer un Compte</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:border-etude-orange-500 hover:text-etude-orange-600 shadow transition-all duration-200"
                icon={<PlayIcon className="h-5 w-5" />}
              >
                <Link href="/demo">Voir Nos Domaines</Link>
              </Button>
            </div>
          </div>

          {/* Labyrinthe visuel */}
          <div className="relative w-full md:w-[430px] h-[160px] md:h-[650px] mx-auto">
            {/* Fond */}
            <div className="absolute inset-0 bg-gradient-to-br from-etude-orange-50 to-white rounded-3xl"></div>

            {/* Desktop SVG */}
            <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 400 700" fill="none">
              <path d="M200 120 L200 220" stroke="#bbf7d0" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M200 220 Q130 280 132 360" stroke="#f97316" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M200 220 Q270 280 268 360" stroke="#a855f7" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M132 360 Q90 420 90 480" stroke="#22c55e" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M268 360 Q310 420 310 480" stroke="#f97316" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M200 220 L200 400" stroke="#a855f7" strokeWidth={4} strokeDasharray="10,8" />
              <path d="M200 400 L200 550" stroke="#bbf7d0" strokeWidth={4} strokeDasharray="10,8" />
            </svg>

            {/* Desktop nœuds */}
            <div className="hidden md:block absolute inset-0">
              {/* Centre départ */}
              <div className="absolute flex flex-col items-center" style={{ top: "18%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-gradient-to-br from-etude-orange-500 to-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-2xl font-bold">∑</span>
                </div>
                <div className="text-center mt-1 text-xs font-bold text-gray-700">Départ</div>
              </div>
              {/* Projet validé */}
              <div className="absolute flex flex-col items-center" style={{ top: "32%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-xl">1</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700">Projet validé</div>
              </div>
              {/* Projet à faire */}
              <div className="absolute flex flex-col items-center" style={{ top: "46%", left: "33%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-800 text-xl">2</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700">À faire</div>
              </div>
              {/* Projet verrouillé */}
              <div className="absolute flex flex-col items-center" style={{ top: "60%", left: "18%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-gray-300 border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-500 text-xl">🔒</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-400">Bloqué</div>
              </div>
              {/* Projet à faire */}
              <div className="absolute flex flex-col items-center" style={{ top: "46%", left: "67%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-800 text-xl">3</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700">À faire</div>
              </div>
              {/* Projet validé */}
              <div className="absolute flex flex-col items-center" style={{ top: "60%", left: "82%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-xl">4</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700">Projet validé</div>
              </div>
              {/* Projet à faire */}
              <div className="absolute flex flex-col items-center" style={{ top: "74%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-800 text-xl">5</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700">À faire</div>
              </div>
              {/* Projet verrouillé */}
              <div className="absolute flex flex-col items-center" style={{ top: "88%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
                <div className="w-16 h-16 bg-gray-300 border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-gray-500 text-xl">🔒</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-400">Bloqué</div>
              </div>
            </div>

            {/* Mobile : Scroll horizontal avec les nœuds visibles */}
            <div className="md:hidden flex flex-row items-center h-full overflow-x-auto space-x-4 px-2 scrollbar-thin scrollbar-thumb-gray-300 bg-white rounded-3xl">
              {/* Départ */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-gradient-to-br from-etude-orange-500 to-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">∑</span>
                </div>
                <div className="text-center mt-1 text-xs font-bold text-gray-700 whitespace-nowrap">Départ</div>
              </div>
              {/* 1 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">1</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700 whitespace-nowrap">Projet validé</div>
              </div>
              {/* 2 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-800 text-lg">2</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700 whitespace-nowrap">À faire</div>
              </div>
              {/* 🔒 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-gray-300 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-lg">🔒</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-400 whitespace-nowrap">Bloqué</div>
              </div>
              {/* 3 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-800 text-lg">3</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700 whitespace-nowrap">À faire</div>
              </div>
              {/* 4 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-etude-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">4</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700 whitespace-nowrap">Projet validé</div>
              </div>
              {/* 5 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-800 text-lg">5</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-700 whitespace-nowrap">À faire</div>
              </div>
              {/* 🔒 */}
              <div className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 bg-gray-300 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-lg">🔒</span>
                </div>
                <div className="mt-1 text-xs font-semibold text-gray-400 whitespace-nowrap">Bloqué</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
}