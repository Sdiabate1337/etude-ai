'use client';

import Link from 'next/link';
import { ArrowRightIcon, PlayIcon, SparklesIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section background="white" padding="xl" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-etude-orange-50/30 to-etude-green-50/30" />
        
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-etude-orange-200/40 to-etude-green-200/40 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-tr from-etude-green-200/40 to-etude-orange-200/40 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 max-w-2xl lg:max-w-none order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-etude-orange-100 to-etude-green-100 text-etude-orange-800 text-xs sm:text-sm font-semibold shadow-lg border border-etude-orange-200/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-etude-orange-600" />
              100% GRATUIT POUR LES PIONNIERS
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography as="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Ton cours est{' '}
                <span className="text-gray-400 line-through">théorique</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Ton futur{' '}
                <span className="bg-gradient-to-r from-etude-orange-500 via-etude-orange-600 to-etude-green-500 bg-clip-text text-transparent">
                  ne le sera pas
                </span>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl lg:max-w-2xl">
                Avec <strong className="text-etude-orange-600">∑tude.ai</strong>, transforme chaque chapitre de ton programme en{' '}
                <strong className="text-etude-green-600">projet concret</strong>, réalisable dès aujourd'hui, avec l'aide d'un{' '}
                <strong className="text-etude-orange-600">mentor IA 24/7</strong> et d'une communauté active d'étudiants comme toi.
              </Typography>
            </motion.div>



            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-etude-orange-500 to-etude-orange-600 hover:from-etude-orange-600 hover:to-etude-orange-700 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                <Link href="/signup" className="flex items-center justify-center">
                  <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" />
                  <span className="hidden sm:inline">Je rejoins la révolution ∑tude.ai</span>
                  <span className="sm:hidden">Rejoindre ∑tude.ai</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-etude-orange-500 hover:text-etude-orange-600 hover:bg-etude-orange-50 font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-200 w-full sm:w-auto"
              >
                <Link href="/demo" className="flex items-center justify-center">
                  <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Voir comment ça marche</span>
                  <span className="sm:hidden">Voir la démo</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Interactive visual */}
          <motion.div
            className="relative lg:pl-8 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GrowthSpiral />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// Growth Spiral Component - Revolutionary Visual Storytelling
function GrowthSpiral() {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState(0);
  const [spiralProgress, setSpiralProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Animate spiral progression
    const progressInterval = setInterval(() => {
      setSpiralProgress(prev => (prev + 0.5) % 100);
    }, 50);
    
    // Cycle through nodes
    const nodeInterval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 12);
    }, 1500);
    
    return () => {
      clearInterval(progressInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  // Generate spiral path points
  const generateSpiralPoints = () => {
    const points = [];
    const centerX = 50, centerY = 50;
    const maxRadius = 35;
    const turns = 3;
    
    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * turns * 2 * Math.PI;
      const radius = (i / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({ x, y, progress: i });
    }
    return points;
  };

  const spiralPoints = generateSpiralPoints();
  
  // Project nodes positioned along spiral
  const projectNodes = [
    { id: 0, progress: 8, status: 'completed', title: 'Fondations' },
    { id: 1, progress: 16, status: 'completed', title: 'Concepts' },
    { id: 2, progress: 24, status: 'completed', title: 'Pratique' },
    { id: 3, progress: 32, status: 'current', title: 'Projet' },
    { id: 4, progress: 40, status: 'available', title: 'Avancé' },
    { id: 5, progress: 48, status: 'available', title: 'Expert' },
    { id: 6, progress: 56, status: 'locked', title: 'Maître' },
    { id: 7, progress: 64, status: 'locked', title: 'Innovation' },
    { id: 8, progress: 72, status: 'locked', title: 'Leadership' },
    { id: 9, progress: 80, status: 'locked', title: 'Mentor' },
    { id: 10, progress: 88, status: 'locked', title: 'Visionnaire' },
    { id: 11, progress: 96, status: 'locked', title: 'Légende' },
  ];

  const getNodePosition = (progress: number) => {
    const point = spiralPoints.find(p => Math.abs(p.progress - progress) < 1) || spiralPoints[0];
    return { x: point.x, y: point.y };
  };

  const getStatusColor = (status: string) => {
    const colors = {
      completed: { primary: '#10b981', secondary: '#34d399', glow: '#6ee7b7' },
      current: { primary: '#f59e0b', secondary: '#fbbf24', glow: '#fcd34d' },
      available: { primary: '#3b82f6', secondary: '#60a5fa', glow: '#93c5fd' },
      locked: { primary: '#6b7280', secondary: '#9ca3af', glow: '#d1d5db' },
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="w-full h-auto min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Dynamic gradients */}
          <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
          </radialGradient>
          
          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="66%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Advanced filters */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="spiralGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>Node in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Particle system */}
          <filter id="particles">
            <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5"/>
          </filter>
        </defs>
        
        {/* Cosmic background */}
        <rect width="100" height="100" fill="url(#spiralGrad)" opacity="0.1" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r={Math.random() * 0.5 + 0.2}
            fill="#fbbf24"
            opacity={0.3}
            animate={{
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Main spiral path */}
        <motion.path
          d={`M ${spiralPoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
          fill="none"
          stroke="url(#spiralGrad)"
          strokeWidth="0.8"
          filter="url(#spiralGlow)"
          initial={{ pathLength: 0 }}
          animate={mounted ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Energy flow animation */}
        <motion.circle
          r="1"
          fill="#fbbf24"
          filter="url(#nodeGlow)"
          animate={{
            offsetDistance: [`${spiralProgress}%`, `${(spiralProgress + 10) % 100}%`]
          }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href={`#spiral-path`} />
          </animateMotion>
        </motion.circle>
        
        {/* Central core - Student/Brain */}
        <motion.g
          initial={{ scale: 0, rotate: -180 }}
          animate={mounted ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, ease: "backOut" }}
        >
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#centerCore)"
            filter="url(#nodeGlow)"
          />
          <motion.text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[5px] font-bold fill-white"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            ∑
          </motion.text>
        </motion.g>
        
        {/* Project nodes along spiral */}
        {projectNodes.map((node, index) => {
          const position = getNodePosition(node.progress);
          const colors = getStatusColor(node.status);
          const isActive = activeNode === node.id;
          
          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={mounted ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Node glow effect */}
              <motion.circle
                cx={position.x}
                cy={position.y}
                r={isActive ? "6" : "4"}
                fill={colors.glow}
                opacity={isActive ? 0.4 : 0.2}
                animate={{
                  scale: isActive ? [1, 1.3, 1] : 1,
                  opacity: isActive ? [0.2, 0.6, 0.2] : 0.2
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Main node */}
              <motion.circle
                cx={position.x}
                cy={position.y}
                r={isActive ? "4" : "3"}
                fill={colors.primary}
                filter="url(#nodeGlow)"
                animate={{
                  scale: isActive ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              {/* Status indicators */}
              {node.status === 'completed' && (
                <motion.path
                  d={`M ${position.x - 1.5} ${position.y - 0.5} L ${position.x - 0.5} ${position.y + 0.5} L ${position.x + 1.5} ${position.y - 1}`}
                  stroke="white"
                  strokeWidth="0.6"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                />
              )}
              
              {node.status === 'current' && (
                <motion.circle
                  cx={position.x}
                  cy={position.y}
                  r="2"
                  fill="white"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              
              {node.status === 'locked' && (
                <g>
                  <rect
                    x={position.x - 1}
                    y={position.y - 0.8}
                    width="2"
                    height="1.6"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.3"
                    rx="0.4"
                  />
                  <rect
                    x={position.x - 0.7}
                    y={position.y - 0.2}
                    width="1.4"
                    height="1"
                    fill="white"
                    rx="0.1"
                  />
                </g>
              )}
                  />
                </motion.g>
              )}
              
              {/* Current project pulse */}
              {project.status === 'current' && (
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeSize + 4}
                  fill="none"
                  stroke={style.pulseColor}
                  strokeWidth="2"
                  opacity="0.6"
                  animate={{
                    r: [nodeSize + 4, nodeSize + 12, nodeSize + 4],
                    opacity: [0.6, 0.1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )}
            </motion.g>
          );
        })}
      </svg>
      
      {/* Modern Legend */}
      <motion.div
        className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-etude-green-400 to-etude-green-600 rounded-full shadow-sm"></div>
          <span className="text-gray-700 font-medium">Validé</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-etude-orange-400 to-etude-orange-600 rounded-full shadow-sm animate-pulse"></div>
          <span className="text-gray-700 font-medium">En cours</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-sm"></div>
          <span className="text-gray-700 font-medium">Disponible</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-sm opacity-60"></div>
          <span className="text-gray-500 font-medium">Verrouillé</span>
        </div>
      </motion.div>
    </div>
  );
}
