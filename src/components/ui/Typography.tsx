import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'hero' | 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'label';
  responsive?: boolean;
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
}

export function Typography({ 
  children, 
  className, 
  as: Component = 'p',
  variant = 'body',
  responsive = true,
  gradient = false,
  animated = false,
  glow = false
}: TypographyProps) {
  // ✅ Correction : Tailles responsive mieux calibrées
  const variantClasses = {
    hero: responsive 
      ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight' 
      : 'text-7xl font-bold leading-tight',
    title: responsive 
      ? 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight' 
      : 'text-5xl font-bold leading-tight',
    heading: responsive 
      ? 'text-2xl md:text-3xl lg:text-4xl font-bold' 
      : 'text-4xl font-bold',
    subheading: responsive 
      ? 'text-xl md:text-2xl lg:text-3xl font-semibold' 
      : 'text-3xl font-semibold',
    body: responsive 
      ? 'text-base md:text-lg lg:text-xl leading-relaxed' 
      : 'text-xl leading-relaxed',
    caption: responsive 
      ? 'text-sm md:text-base text-gray-600' 
      : 'text-base text-gray-600',
    label: responsive 
      ? 'text-sm md:text-base font-medium' 
      : 'text-base font-medium'
  };

  const gradientClass = gradient ? 'bg-gradient-to-r from-etude-orange-500 via-etude-green-500 to-etude-purple-500 bg-clip-text text-transparent' : '';
  const animatedClass = animated ? 'bg-[length:300%_300%] animate-gradient' : '';
  const glowClass = glow ? 'drop-shadow-lg' : '';

  return (
    <Component className={cn(
      variantClasses[variant],
      gradientClass,
      animatedClass,
      glowClass,
      className
    )}>
      {children}
    </Component>
  );
}