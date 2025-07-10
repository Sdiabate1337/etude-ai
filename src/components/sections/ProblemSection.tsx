'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);
    function update() {
      start += increment;
      if (start < target) {
        setCount(Math.round(start));
        ref.current = setTimeout(update, 30);
      } else {
        setCount(target);
      }
    }
    update();
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  }, [target, duration]);
  return count;
}

export function ProblemSection() {
  const count1 = useCountUp(73, 1200);
  const count2 = useCountUp(2, 1200);
  const count3 = useCountUp(3, 1200);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-etude-orange-50 to-etude-green-50 overflow-hidden">
      {/* Background animated shapes */}
      <div className="pointer-events-none absolute -top-24 -left-36 w-96 h-96 rounded-full bg-etude-orange-100 opacity-40 blur-3xl animate-float"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-36 w-96 h-96 rounded-full bg-etude-green-100 opacity-40 blur-3xl animate-float-slow"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-etude-orange-100 text-etude-orange-700 font-semibold tracking-wide shadow-sm animate-fade-in-down">
            LE PROBLÈME&nbsp;: L’apprentissage trop théorique
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {/* Compteur 1 */}
          <div className="group flex flex-col items-center animate-fade-in-up transition-all hover:scale-105 hover:-translate-y-2 duration-300">
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-etude-orange-200 to-etude-orange-400 flex items-center justify-center mb-4 shadow-xl border-4 border-white group-hover:shadow-2xl transition-all">
              <span className="text-5xl font-extrabold text-etude-orange-600 drop-shadow-lg animate-bounce">{count1}<span className="align-top text-2xl font-bold">%</span></span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-etude-orange-400 group-hover:scale-125 transition"></div>
            </div>
            <div className="text-lg font-semibold text-gray-800 leading-snug max-w-xs mx-auto">
              <span className="text-etude-orange-600 font-bold">des étudiants africains</span> disent que leurs cours manquent de <span className="text-etude-orange-500">pratique</span>
            </div>
          </div>
          {/* Compteur 2 */}
          <div className="group flex flex-col items-center animate-fade-in-up transition-all hover:scale-105 hover:-translate-y-2 duration-300" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-etude-green-200 to-etude-green-400 flex items-center justify-center mb-4 shadow-xl border-4 border-white group-hover:shadow-2xl transition-all">
              <span className="text-5xl font-extrabold text-etude-green-600 drop-shadow-lg animate-bounce">{count2}<span className="align-top text-2xl font-bold">/</span>{count3}</span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-etude-green-400 group-hover:scale-125 transition"></div>
            </div>
            <div className="text-lg font-semibold text-gray-800 leading-snug max-w-xs mx-auto">
              <span className="text-etude-green-600 font-bold">étudiants sur 3</span> ont du mal à <span className="text-etude-green-600">appliquer</span> ce qu’ils apprennent
            </div>
          </div>
          {/* Compteur 3 */}
          <div className="group flex flex-col items-center animate-fade-in-up transition-all hover:scale-105 hover:-translate-y-2 duration-300" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center mb-4 shadow-xl border-4 border-white group-hover:shadow-2xl transition-all">
              <span className="flex items-center justify-center">
                <svg width={48} height={48} viewBox="0 0 36 36" className="inline-block" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="#a78bfa" strokeWidth="4" className="animate-pulse" />
                  <path d="M10 24C12 18 24 18 26 24" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="13" cy="15" r="2" fill="#8b5cf6" />
                  <circle cx="23" cy="15" r="2" fill="#8b5cf6" />
                </svg>
              </span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition"></div>
            </div>
            <div className="text-lg font-semibold text-gray-800 leading-snug max-w-xs mx-auto">
              Les méthodes classiques ne préparent pas au <span className="text-purple-600 font-bold">monde réel</span>
            </div>
          </div>
        </div>
        {/* Decorative infographic line */}
        <div className="hidden sm:block mt-12 w-full">
          <div className="mx-auto w-5/6 h-2 rounded-full bg-gradient-to-r from-etude-orange-200 via-etude-green-200 to-purple-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-etude-orange-300 via-etude-green-200 to-purple-200 animate-gradient-x" />
          </div>
        </div>
      </div>
      {/* Animations keyframes (add to your global CSS!) */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-24px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(.4,0,.2,1) both;}
        @keyframes float {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(40px);}
        }
        .animate-float { animation: float 6s ease-in-out infinite;}
        @keyframes float-slow {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-40px);}
        }
        .animate-float-slow { animation: float-slow 9s ease-in-out infinite;}
        @keyframes gradient-x {
          0%,100% { left: 0;}
          50% { left: 50%;}
        }
        .animate-gradient-x { animation: gradient-x 2.8s ease-in-out infinite;}
      `}</style>
    </section>
  );
}