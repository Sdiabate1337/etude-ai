import { cn } from '@/lib/utils';
import { Container } from './Container';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gradient' | 'transparent';
}

export function Section({ 
  children, 
  className, 
  containerSize = 'xl',
  padding = 'lg',
  background = 'transparent',
  ...rest
}: SectionProps) {
  const paddingClasses = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32'
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-etude-orange-50 via-white to-etude-green-50',
    transparent: 'bg-transparent'
  };

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      {...rest}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}