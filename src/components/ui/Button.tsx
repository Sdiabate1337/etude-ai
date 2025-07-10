'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'magnetic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glowEffect?: boolean;
  pulseOnHover?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary',
    size = 'md',
    responsive = true,
    icon,
    iconPosition = 'right',
    glowEffect = false,
    pulseOnHover = false,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const variantClasses = {
      primary: 'bg-gradient-to-r from-etude-orange-500 to-etude-green-500 text-white hover:from-etude-orange-600 hover:to-etude-green-600 shadow-lg hover:shadow-2xl',
      secondary: 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200',
      outline: 'border-2 border-gray-300 text-gray-700 hover:border-etude-orange-500 hover:text-etude-orange-600 hover:bg-etude-orange-50',
      ghost: 'text-gray-700 hover:text-etude-orange-600 hover:bg-gray-100',
      magnetic: 'relative overflow-hidden bg-gradient-to-r from-etude-orange-500 to-etude-green-500 text-white shadow-lg hover:shadow-2xl'
    };

    // ✅ Correction : Tailles responsive mieux calibrées
    const sizeClasses = {
      sm: responsive ? 'px-4 py-2 text-sm md:px-6 md:py-3' : 'px-4 py-2 text-sm',
      md: responsive ? 'px-6 py-3 text-base md:px-8 md:py-4' : 'px-6 py-3 text-base',
      lg: responsive ? 'px-8 py-4 text-lg md:px-10 md:py-5' : 'px-8 py-4 text-lg',
      xl: responsive ? 'px-10 py-5 text-xl md:px-12 md:py-6' : 'px-10 py-5 text-xl'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden',
          variantClasses[variant],
          sizeClasses[size],
          glowEffect && 'animate-pulse shadow-lg shadow-etude-orange-500/50',
          pulseOnHover && 'hover:scale-105',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
        
        {icon && iconPosition === 'left' && (
          <span className={cn(
            "mr-2 flex-shrink-0 transition-transform duration-300",
            isHovered && "scale-110"
          )}>
            {icon}
          </span>
        )}
        
        <span className={responsive ? 'truncate relative z-10' : 'relative z-10'}>{children}</span>
        
        {icon && iconPosition === 'right' && (
          <span className={cn(
            "ml-2 flex-shrink-0 transition-transform duration-300",
            isHovered && "translate-x-1 scale-110"
          )}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';