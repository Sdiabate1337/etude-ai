import { 
  ResponsiveLayout, 
  ResponsiveHeader, 
  ResponsiveMain, 
  ResponsiveFooter 
} from '@/components/layout/ResponsiveLayout';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { GamifiedExperienceSection } from '@/components/sections/GamifiedExperienceSection';

export default function HomePage() {
  return (
    <ResponsiveLayout>
      {/* Header */}
      <ResponsiveHeader>
        <Link href="/" className="flex items-center group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-etude-orange-500 to-etude-green-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg sm:text-xl">∑</span>
          </div>
          <span className="ml-3 text-2xl sm:text-3xl font-bold text-gray-900">tude.ai</span>
        </Link>

        <Navigation />

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Link href="/demo">Domaines</Link>
          </Button>
          <Button variant="primary" size="sm" className="bg-etude-orange-500 hover:bg-etude-orange-600">
            <Link href="/signup">Postuler Maintenant</Link>
          </Button>
        </div>
      </ResponsiveHeader>
      <ResponsiveMain>
        <HeroSection />
        <ProblemSection />
        <SolutionSection/>
        <GamifiedExperienceSection/>
        {/* Autres sections à venir... */}
      </ResponsiveMain>

    </ResponsiveLayout>
  );
}