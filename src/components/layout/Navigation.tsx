'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'À propos' },
    { href: '/features', label: 'Fonctionnalités' },
    { href: '/pricing', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={cn('relative', className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-etude-orange-600 transition-colors font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-700 hover:text-etude-orange-600 hover:bg-gray-100 transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-4 z-50 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-gray-700 hover:text-etude-orange-600 hover:bg-gray-50 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-gray-200 mt-4 pt-4 px-6 space-y-3">
            <Link
              href="/signin"
              className="block w-full text-center py-2 text-gray-700 hover:text-etude-orange-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Se connecter
            </Link>
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/signup">Commencer</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
