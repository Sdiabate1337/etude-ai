'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * HeroPath – Animated SVG illustrating the learner's journey.
 * – Progressive stroke-draw animation for the path.
 * – Nodes appear with spring pop-in.
 * – Honors `prefers-reduced-motion`.
 */
export default function HeroPath() {
  const prefersReduced = useReducedMotion();

  // Stroke animation variants
  const pathVariants = useMemo(
    () => ({
      hidden: { pathLength: 0 },
      visible: {
        pathLength: 1,
        transition: {
          duration: 3,
          ease: 'easeInOut',
        },
      },
    }),
    []
  );

  const nodeVariants = useMemo(
    () => ({
      hidden: { scale: 0, opacity: 0 },
      visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 20,
          delay: 0.3 + i * 0.25,
        },
      }),
    }),
    []
  );

  const nodes = [
    { id: 'start', label: 'Départ', cx: 200, cy: 120, color: 'url(#grad-start)' },
    { id: 'v1', label: 'Projet validé', cx: 200, cy: 220, color: '#22c55e' },
    { id: 'todo1', label: 'À faire', cx: 130, cy: 360, color: '#ffffff' },
    { id: 'lock', label: 'Bloqué', cx: 90, cy: 480, color: '#d1d5db' },
    { id: 'todo2', label: 'À faire', cx: 310, cy: 480, color: '#ffffff' },
    { id: 'v2', label: 'Projet validé', cx: 200, cy: 620, color: '#22c55e' },
  ];

  return (
    <div
      className="relative w-full h-full select-none"
      aria-hidden="true"
      // important for Framer Motion layout calculations
    >
      <svg
        viewBox="0 0 400 740"
        className="w-full h-full"
        fill="none"
        strokeLinecap="round"
      >
        {/* Gradient */}
        <defs>
          <linearGradient id="grad-start" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* Main path */}
        {prefersReduced ? (
          <path
            d="M200 120 L200 220 Q200 240 180 280 Q160 320 130 360 Q110 420 90 480 Q120 480 155 480 Q190 480 200 480 Q240 480 275 480 Q310 480 310 480 Q290 420 268 360 Q240 320 220 280 Q200 240 200 220 L200 120 Z"
            stroke="#a855f7"
            strokeWidth={6}
          />
        ) : (
          <motion.path
            d="M200 120 L200 220 Q200 240 180 280 Q160 320 130 360 Q110 420 90 480 Q120 480 155 480 Q190 480 200 480 Q240 480 275 480 Q310 480 310 480 Q290 420 268 360 Q240 320 220 280 Q200 240 200 220 L200 120 Z"
            stroke="#a855f7"
            strokeWidth={6}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        )}

        {/* Nodes */}
        {nodes.map((n, idx) => (
          prefersReduced ? (
            <circle
              key={n.id}
              cx={n.cx}
              cy={n.cy}
              r={20}
              fill={n.color}
              stroke="#ffffff"
              strokeWidth={4}
            >
              <title>{n.label}</title>
            </circle>
          ) : (
            <motion.circle
              key={n.id}
              custom={idx}
              variants={nodeVariants}
              initial="hidden"
              animate="visible"
              cx={n.cx}
              cy={n.cy}
              r={20}
              fill={n.color}
              stroke="#ffffff"
              strokeWidth={4}
            >
              <title>{n.label}</title>
            </motion.circle>
          )
        ))}
      </svg>
    </div>
  );
}
