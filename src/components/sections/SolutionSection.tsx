'use client';

import { useState } from 'react';

const oldModel = [
  "Trop de théorie, pas de pratique",
  "Aucun feedback personnalisé",
  "Aucun lien avec le marché local",
  "Tu es seul face à tes cours",
];

const newModel = [
  "Missions concrètes dès le 1er jour",
  "Feedback intelligent via mentor IA",
  "Projets contextualisés pour l’Afrique",
  "Collaboration avec d'autres étudiants du continent",
];

export function SolutionSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-2 bg-gradient-to-b from-white via-etude-green-50 to-purple-50 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-etude-green-100 opacity-25 blur-3xl animate-float"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-100 opacity-30 blur-2xl animate-float-slow"></div>
      
      <div className="max-w-5xl mx-auto px-2 relative z-10">
        <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-gray-900 mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-etude-green-100 to-purple-100 text-etude-green-700 font-semibold tracking-wide shadow hover:shadow-lg transition animate-fade-in-down">
            LA SOLUTION : <span className="text-etude-green-600 font-black">∑tude.ai</span>
          </span>
        </h2>
        <div className="relative flex flex-col md:flex-row gap-10 items-stretch group">
          {/* Old model */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur rounded-3xl shadow-2xl border-2 border-gray-100 flex flex-col justify-between px-6 py-8 hover:scale-[1.025] transition-transform duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl text-red-500 drop-shadow-lg animate-shake">✖</span>
                <span className="text-lg font-extrabold text-gray-700 tracking-wider">L’ancien modèle</span>
              </div>
              <ul className="space-y-5 mt-6">
                {oldModel.map((item, i) => (
                  <li
                    key={i}
                    className={`
                      flex items-center gap-4 py-3 px-2 rounded-lg transition-all duration-200 
                      ${hovered === i ? 'bg-red-50 scale-105 shadow-md' : ''}
                    `}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="text-2xl text-red-400">{hovered === i ? "🚫" : "❌"}</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Middle animated vertical divider */}
          <div className="hidden md:flex flex-col items-center justify-center relative z-10">
            <div className="h-full w-1 bg-gradient-to-b from-etude-green-200 via-etude-green-400 to-purple-300 rounded-full shadow-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-white px-4 py-2 rounded-full border border-etude-green-300 text-etude-green-700 font-bold text-lg shadow-xl animate-pulse">
                  VS
                </span>
              </div>
            </div>
          </div>
          {/* New model */}
          <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-etude-green-200 flex flex-col justify-between px-6 py-8 hover:scale-[1.03] transition-transform duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl text-green-500 drop-shadow-lg animate-bounce">✔</span>
                <span className="text-lg font-extrabold text-gray-700 tracking-wider">Avec <span className="text-etude-green-600">∑tude.ai</span></span>
              </div>
              <ul className="space-y-5 mt-6">
                {newModel.map((item, i) => (
                  <li
                    key={i}
                    className={`
                      flex items-center gap-4 py-3 px-2 rounded-lg cursor-pointer transition-all duration-200
                      ${hovered === i ? 'bg-green-50 scale-105 shadow-md' : ''}
                    `}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="text-2xl text-green-500 animate-wiggle">{hovered === i ? "🌟" : "✅"}</span>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile VS badge */}
        <div className="md:hidden flex justify-center my-10">
          <span className="bg-white px-4 py-2 rounded-full border border-etude-green-300 text-etude-green-700 font-bold text-lg shadow-xl animate-pulse">
            VS
          </span>
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
        @keyframes shake {
          10%, 90% { transform: translateX(-2px);}
          20%, 80% { transform: translateX(3px);}
          30%, 50%, 70% { transform: translateX(-4px);}
          40%, 60% { transform: translateX(4px);}
        }
        .animate-shake { animation: shake 1.1s cubic-bezier(.36,.07,.19,.97) infinite;}
        @keyframes bounce {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        .animate-bounce { animation: bounce 1.2s infinite;}
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg);}
          50% { transform: rotate(6deg);}
        }
        .animate-wiggle { animation: wiggle 0.8s infinite;}
      `}</style>
    </section>
  );
}