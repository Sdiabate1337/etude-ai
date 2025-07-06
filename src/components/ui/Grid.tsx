import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Grid({ 
  children, 
  className, 
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'lg'
}: GridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const getColsClass = () => {
    let classes = 'grid';
    
    if (cols.default) classes += ` grid-cols-${cols.default}`;
    if (cols.sm) classes += ` sm:grid-cols-${cols.sm}`;
    if (cols.md) classes += ` md:grid-cols-${cols.md}`;
    if (cols.lg) classes += ` lg:grid-cols-${cols.lg}`;
    if (cols.xl) classes += ` xl:grid-cols-${cols.xl}`;
    
    return classes;
  };

  return (
    <div className={cn(
      getColsClass(),
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}
