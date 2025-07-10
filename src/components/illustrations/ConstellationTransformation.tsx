'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

interface ConstellationTransformationProps {
  className?: string;
}

export default function ConstellationTransformation({ className = '' }: ConstellationTransformationProps) {
  const [mounted, setMounted] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState(0);
  const [energyFlow, setEnergyFlow] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    
    // Cycle through orbits for progressive activation
    const orbitInterval = setInterval(() => {
      setActiveOrbit(prev => (prev + 1) % 4);
    }, 3000);
    
    // Energy flow animation
    const energyInterval = setInterval(() => {
      setEnergyFlow(prev => (prev + 1) % 100);
    }, 50);
    
    return () => {
      clearInterval(orbitInterval);
      clearInterval(energyInterval);
    };
  }, []);

  // Deterministic floating particles for consistent SSR
  const floatingParticles = useMemo(() => [
    { id: 1, x: 15, y: 20, size: 2, delay: 0, color: '#3b82f6' },
    { id: 2, x: 85, y: 15, size: 1.5, delay: 0.5, color: '#10b981' },
    { id: 3, x: 25, y: 80, size: 2.5, delay: 1, color: '#f97316' },
    { id: 4, x: 75, y: 85, size: 1.8, delay: 1.5, color: '#8b5cf6' },
    { id: 5, x: 45, y: 10, size: 1.2, delay: 2, color: '#06b6d4' },
    { id: 6, x: 90, y: 60, size: 2.2, delay: 2.5, color: '#84cc16' },
    { id: 7, x: 10, y: 90, size: 1.6, delay: 3, color: '#f59e0b' },
    { id: 8, x: 60, y: 25, size: 1.4, delay: 3.5, color: '#ec4899' },
    { id: 9, x: 30, y: 55, size: 1.9, delay: 4, color: '#6366f1' },
    { id: 10, x: 80, y: 40, size: 1.3, delay: 4.5, color: '#14b8a6' },
  ], []);

  // Mastery orbits configuration
  const orbits = useMemo(() => [
    { id: 0, radius: 15, nodes: 3, level: 'Fondation', color: '#3b82f6', opacity: 0.6 },
    { id: 1, radius: 25, nodes: 5, level: 'Développement', color: '#06b6d4', opacity: 0.7 },
    { id: 2, radius: 35, nodes: 7, level: 'Maîtrise', color: '#10b981', opacity: 0.8 },
    { id: 3, radius: 45, nodes: 9, level: 'Excellence', color: '#f97316', opacity: 0.9 },
  ], []);

  // Generate project nodes for each orbit
  const generateOrbitNodes = (orbit: typeof orbits[0]) => {
    const nodes = [];
    const angleStep = (2 * Math.PI) / orbit.nodes;
    
    for (let i = 0; i < orbit.nodes; i++) {
      const angle = i * angleStep - Math.PI / 2; // Start from top
      const x = 50 + orbit.radius * Math.cos(angle);
      const y = 50 + orbit.radius * Math.sin(angle);
      
      // Determine node status based on orbit and position
      let status = 'locked';
      if (orbit.id <= activeOrbit) {
        if (i < Math.floor(orbit.nodes * 0.4)) status = 'completed';
        else if (i < Math.floor(orbit.nodes * 0.6)) status = 'current';
        else if (i < Math.floor(orbit.nodes * 0.8)) status = 'available';
      }
      
      nodes.push({
        id: `${orbit.id}-${i}`,
        x,
        y,
        angle,
        status,
        orbitId: orbit.id,
        nodeIndex: i,
      });
    }
    return nodes;
  };

  const allNodes = useMemo(() => 
    orbits.flatMap(orbit => generateOrbitNodes(orbit)),
    [orbits, activeOrbit]
  );

  const getNodeColor = (status: string, orbitColor: string) => {
    switch (status) {
      case 'completed': return '#10b981'; // Green
      case 'current': return '#f59e0b'; // Amber
      case 'available': return '#3b82f6'; // Blue
      case 'locked': return '#6b7280'; // Gray
      default: return orbitColor;
    }
  };

  const getNodeGlow = (status: string) => {
    switch (status) {
      case 'completed': return '#34d399';
      case 'current': return '#fbbf24';
      case 'available': return '#60a5fa';
      case 'locked': return '#9ca3af';
      default: return '#ffffff';
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background cosmic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 rounded-3xl" />
      
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="w-full h-full min-h-[400px] lg:min-h-[600px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Advanced gradients */}
          <radialGradient id="centralCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="40%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#10b981" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </radialGradient>
          
          <linearGradient id="transformationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="33%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="66%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          {/* Premium filters */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="centralGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cosmic background */}
        <rect width="100" height="100" fill="url(#transformationGrad)" opacity="0.1" />
        
        {/* Floating knowledge particles */}
        {mounted && !prefersReduced && floatingParticles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size / 2}
            fill={particle.color}
            opacity={0.4}
            animate={{
              y: [particle.y, particle.y - 8, particle.y],
              x: [particle.x, particle.x + (particle.id % 2 === 0 ? 3 : -3), particle.x],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + (particle.id % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Mastery orbits */}
        {orbits.map((orbit, index) => (
          <motion.circle
            key={orbit.id}
            cx="50"
            cy="50"
            r={orbit.radius}
            fill="none"
            stroke={orbit.color}
            strokeWidth="0.3"
            strokeOpacity={orbit.id <= activeOrbit ? orbit.opacity : 0.2}
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { 
              pathLength: 1, 
              opacity: orbit.id <= activeOrbit ? orbit.opacity : 0.2,
              rotate: orbit.id <= activeOrbit ? 360 : 0
            } : {}}
            transition={{ 
              duration: 2, 
              delay: index * 0.3,
              rotate: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" }
            }}
          />
        ))}
        
        {/* Energy connection lines */}
        {mounted && allNodes.map((node, index) => {
          if (node.status === 'locked') return null;
          
          const nextNode = allNodes[index + 1];
          if (!nextNode || nextNode.status === 'locked') return null;
          
          return (
            <motion.line
              key={`connection-${node.id}`}
              x1={node.x}
              y1={node.y}
              x2={nextNode.x}
              y2={nextNode.y}
              stroke="url(#energyFlow)"
              strokeWidth="0.5"
              filter="url(#energyGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            />
          );
        })}
        
        {/* Project nodes */}
        {allNodes.map((node, index) => {
          const orbit = orbits[node.orbitId];
          const nodeColor = getNodeColor(node.status, orbit.color);
          const glowColor = getNodeGlow(node.status);
          const isActive = node.status === 'current';
          
          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={mounted ? { scale: 1, opacity: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Node glow */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? "3" : "2"}
                fill={glowColor}
                opacity={isActive ? 0.6 : 0.3}
                animate={isActive && !prefersReduced ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.8, 0.3]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Main node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? "2" : "1.5"}
                fill={nodeColor}
                filter="url(#nodeGlow)"
                animate={isActive && !prefersReduced ? {
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                style={{ cursor: 'pointer' }}
              />
              
              {/* Status indicators */}
              {node.status === 'completed' && (
                <motion.path
                  d={`M ${node.x - 0.8} ${node.y - 0.2} L ${node.x - 0.2} ${node.y + 0.4} L ${node.x + 0.8} ${node.y - 0.6}`}
                  stroke="white"
                  strokeWidth="0.4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                />
              )}
              
              {node.status === 'current' && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="0.8"
                  fill="white"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              
              {node.status === 'locked' && (
                <g>
                  <rect
                    x={node.x - 0.6}
                    y={node.y - 0.5}
                    width="1.2"
                    height="1"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.2"
                    rx="0.3"
                  />
                  <rect
                    x={node.x - 0.4}
                    y={node.y - 0.1}
                    width="0.8"
                    height="0.6"
                    fill="white"
                    rx="0.1"
                  />
                </g>
              )}
            </motion.g>
          );
        })}
        
        {/* Central transformation core */}
        <motion.g
          initial={{ scale: 0, rotate: -180 }}
          animate={mounted ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 2, ease: "backOut", delay: 0.5 }}
        >
          {/* Core energy field */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="url(#centralCore)"
            opacity="0.2"
            animate={!prefersReduced ? {
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Main core */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#centralCore)"
            filter="url(#centralGlow)"
            animate={!prefersReduced ? {
              rotate: [0, 360]
            } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Central ∑ symbol */}
          <motion.text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[8px] font-bold fill-white"
            animate={!prefersReduced ? {
              scale: [1, 1.1, 1]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ∑
          </motion.text>
          
          {/* Energy pulse rings */}
          {[1, 2, 3].map((ring) => (
            <motion.circle
              key={ring}
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="0.5"
              strokeOpacity="0"
              animate={!prefersReduced ? {
                r: [8, 20 + ring * 5],
                strokeOpacity: [0.8, 0],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: ring * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
