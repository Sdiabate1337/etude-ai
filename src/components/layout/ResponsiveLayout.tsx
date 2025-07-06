import { cn } from '@/lib/utils';

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

export function ResponsiveHeader({ children, className }: ResponsiveLayoutProps) {
  return (
    <header className={cn(
      'w-full sticky top-0 z-50',
      'bg-white/95 backdrop-blur-md',
      'border-b border-gray-200',
      'transition-all duration-200',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {children}
        </div>
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
