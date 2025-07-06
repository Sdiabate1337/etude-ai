import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  padding = 'md',
  hover = true
}: CardProps) {
  const variantClasses = {
    default: 'bg-white shadow-lg',
    elevated: 'bg-white shadow-xl',
    outlined: 'bg-white border-2 border-gray-200',
    gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-lg'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <div className={cn(
      'rounded-2xl transition-all duration-200',
      variantClasses[variant],
      paddingClasses[padding],
      hover && 'hover:shadow-xl hover:scale-105',
      className
    )}>
      {children}
    </div>
  );
}
