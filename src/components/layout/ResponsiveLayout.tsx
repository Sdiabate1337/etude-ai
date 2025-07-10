"use client"

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveLayout({ children, className }: ResponsiveLayoutProps) {
  return (
    <div className={cn(
      'min-h-screen w-full',
      'flex flex-col',
      'overflow-x-hidden',
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed z-50 top-0 left-0 right-0 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
      style={{ WebkitBackdropFilter: scrolled ? 'blur(12px)' : undefined, backdropFilter: scrolled ? 'blur(12px)' : undefined }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 min-h-[64px]">
        {children}
      </div>
    </header>
  );
}

export function ResponsiveMain({ children, className }: ResponsiveLayoutProps) {
  return (
    <main className={cn(
      'flex-1 w-full',
      'focus:outline-none',
      className
    )}>
      {children}
    </main>
  );
}

export function ResponsiveFooter({ children, className }: ResponsiveLayoutProps) {
  return (
    <footer className={cn(
      'w-full mt-auto',
      'bg-gray-900 text-white',
      'py-8 sm:py-12',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
}
