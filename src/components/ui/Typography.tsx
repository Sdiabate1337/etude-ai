import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'hero' | 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'label';
  responsive?: boolean;
  gradient?: boolean;
}

export function Typography({ 
  children, 
  className, 
  as: Component = 'p',
  variant = 'body',
  responsive = true,
  gradient = false
}: TypographyProps) {
  const variantClasses = {
    hero: responsive 
      ? 'text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight' 
      : 'text-7xl font-bold leading-tight',
    title: responsive 
      ? 'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight' 
      : 'text-5xl font-bold leading-tight',
    heading: responsive 
      ? 'text-2xl sm:text-3xl lg:text-4xl font-bold' 
      : 'text-4xl font-bold',
    subheading: responsive 
      ? 'text-xl sm:text-2xl lg:text-3xl font-semibold' 
      : 'text-3xl font-semibold',
    body: responsive 
      ? 'text-base sm:text-lg lg:text-xl leading-relaxed' 
      : 'text-xl leading-relaxed',
    caption: responsive 
      ? 'text-sm sm:text-base text-gray-600' 
      : 'text-base text-gray-600',
    label: responsive 
      ? 'text-sm sm:text-base font-medium' 
      : 'text-base font-medium'
  };

  return (
    <Component className={cn(
      variantClasses[variant],
      gradient && 'bg-gradient-to-r from-etude-orange-500 to-etude-green-500 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </Component>
  );
}
