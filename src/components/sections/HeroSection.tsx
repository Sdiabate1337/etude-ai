'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Beautiful Background Gradient */}
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 -z-10" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-green-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Rotating Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent animate-spin-slow opacity-50" style={{ animationDuration: '20s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200/50 backdrop-blur-sm mb-8 group hover:shadow-lg transition-all duration-300"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Nouvelle approche pédagogique
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <Typography as="h1" className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-tight">
              Ton cours est{' '}
              <span className="text-gray-400 line-through">théorique</span>
              <br />
              Ton futur{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ne le sera pas
              </span>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <Typography className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Avec <strong className="text-blue-600">∑tude.ai</strong>, transforme chaque chapitre de ton programme en{' '}
              <strong className="text-green-600 bg-green-50 px-2 py-1 rounded">projet concret</strong>, réalisable dès aujourd'hui.
            </Typography>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-10"
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyYa6PA7ABolUntWz7d_GzZ48WXNnT1JuaOZCdGwdytgzS_g/viewform" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <SparklesIcon className="mr-2 h-5 w-5" />
                  Devenir Bêta Testeur
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}