'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#experience', label: 'L\'Expérience', description: 'Ce que tu vas vivre' },
    { href: '#beta-advantages', label: 'Avantages Bêta', description: 'Exclusivité et urgence' },
    { href: '#interface-preview', label: 'Aperçu', description: 'Interface de la plateforme' }
  ];

  return (
    <nav className={cn('relative', className)}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:bg-blue-50/50"
          >
            <span className="relative z-10">{item.label}</span>
            
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            
            {/* Active Indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-6 transition-all duration-300 rounded-full" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 py-6 z-50 lg:hidden"
          >
            {/* Navigation Items */}
            <div className="space-y-1 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200 font-medium rounded-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Divider */}
            <div className="mx-6 my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            
            {/* CTA Section */}
            <motion.div 
              className="px-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/signin"
                className="block w-full text-center py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Se connecter
              </Link>
              
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 py-3"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/signup">Devenir Bêta Testeur</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
