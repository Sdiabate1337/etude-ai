'use client';

import { useState } from 'react';
import {
  SparklesIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Interface Labyrinthe",
    icon: <SparklesIcon className="w-8 h-8 text-etude-green-500" />,
    description: (
      <>
        <span className="font-semibold text-etude-orange-600">Chaque case débloquée</span> = une compétence acquise<br />
        Avance à ton rythme, choisis tes chemins, accumule des badges
      </>
    ),
    bg: "bg-etude-green-50"
  },
  {
    title: "Mentor IA Disponible 24/7",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-etude-purple-500" />,
    description: (
      <>
        <span className="font-semibold text-etude-purple-600">Feedback immédiat</span>, aide au déblocage,<br />
        explications adaptées à ton niveau
      </>
    ),
    bg: "bg-etude-purple-50"
  },
  {
    title: "Projets Réels",
    icon: <RocketLaunchIcon className="w-8 h-8 text-etude-orange-500" />,
    description: (
      <>
        Code une API pour <span className="font-semibold text-etude-orange-500">Orange Money</span>,<br />
        simule un budget PME, rédige un contrat juridique.<br />
        <span className="font-semibold text-etude-green-600">Crée un portfolio prêt à être montré à un recruteur.</span>
      </>
    ),
    bg: "bg-etude-orange-50"
  }
];

export function GamifiedExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-2 bg-gradient-to-b from-etude-green-50 via-white to-etude-purple-50 overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-etude-green-100 opacity-25 blur-3xl animate-float"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-etude-purple-100 opacity-30 blur-2xl animate-float-slow"></div>
      <div className="max-w-5xl mx-auto px-2 relative z-10">
        <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-gray-900 mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-etude-orange-100 via-etude-green-100 to-etude-purple-100 text-etude-green-900 font-semibold tracking-wide shadow hover:shadow-lg transition animate-fade-in-down">
            UNE EXPÉRIENCE PÉDAGOGIQUE GAMIFIÉE
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`relative group card transition-all duration-300 cursor-pointer hover:scale-105 ${feat.bg} hover:shadow-2xl`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`rounded-full p-4 mb-2 bg-white shadow-md transition-all duration-300 ${hovered === i ? 'scale-110 ring-4 ring-etude-orange-200' : ''}`}>
                  {feat.icon}
                </div>
                <div className="text-lg font-bold text-gray-800 text-center">{feat.title}</div>
                <div className="text-gray-700 text-base text-center mt-2 leading-relaxed">{feat.description}</div>
                {/* Badges/Effets interactifs */}
                {i === 0 && (
                  <div className="flex gap-1 mt-4">
                    <TrophyIcon className="w-5 h-5 text-amber-400 animate-bounce" />
                    <CheckCircleIcon className="w-5 h-5 text-etude-green-400 animate-pulse" />
                    <StarIcon className="w-5 h-5 text-etude-orange-400 animate-spin-slow" />
                  </div>
                )}
                {i === 1 && hovered === i && (
                  <div className="flex gap-2 mt-4 transition-opacity duration-200 opacity-90">
                    <AcademicCapIcon className="w-5 h-5 text-etude-purple-400 animate-bounce" />
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-etude-green-500 animate-wiggle" />
                  </div>
                )}
                {i === 2 && hovered === i && (
                  <div className="flex gap-2 mt-4 transition-opacity duration-200 opacity-90">
                    <RocketLaunchIcon className="w-5 h-5 text-etude-orange-400 animate-bounce" />
                    <SparklesIcon className="w-5 h-5 text-etude-green-400 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations keyframes */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(.4,0,.2,1) both;}
        @keyframes float {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(30px);}
        }
        .animate-float { animation: float 8s ease-in-out infinite;}
        @keyframes float-slow {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-30px);}
        }
        .animate-float-slow { animation: float-slow 13s ease-in-out infinite;}
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow { animation: spin-slow 2.5s linear infinite;}
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg);}
          50% { transform: rotate(6deg);}
        }
        .animate-wiggle { animation: wiggle 0.8s infinite;}
      `}</style>
    </section>
  );
}