import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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
    ...props 
  }, ref) => {
    const variantClasses = {
      primary: 'bg-gradient-to-r from-etude-orange-500 to-etude-green-500 text-white hover:from-etude-orange-600 hover:to-etude-green-600 shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border-2 border-gray-300 text-gray-700 hover:border-etude-orange-500 hover:text-etude-orange-600',
      ghost: 'text-gray-700 hover:text-etude-orange-600 hover:bg-gray-100'
    };

    const sizeClasses = {
      sm: responsive ? 'px-4 py-2 text-sm' : 'px-4 py-2 text-sm',
      md: responsive ? 'px-6 py-3 text-base sm:px-8 sm:py-4' : 'px-6 py-3 text-base',
      lg: responsive ? 'px-8 py-4 text-lg sm:px-10 sm:py-5' : 'px-8 py-4 text-lg',
      xl: responsive ? 'px-10 py-5 text-xl sm:px-12 sm:py-6' : 'px-10 py-5 text-xl'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="mr-2 flex-shrink-0">{icon}</span>
        )}
        <span className={responsive ? 'truncate' : ''}>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
