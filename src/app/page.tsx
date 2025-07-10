import { 
  ResponsiveLayout, 
  ResponsiveHeader, 
  ResponsiveMain, 
  ResponsiveFooter 
} from '@/components/layout/ResponsiveLayout';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';


import { BetaAdvantagesSection } from '@/components/sections/BetaAdvantagesSection';
import { InterfacePreviewSection } from '@/components/sections/InterfacePreviewSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <ResponsiveLayout>
      {/* Header */}
      <ResponsiveHeader>
        {/* Premium Logo */}
        <Link href="/" className="flex items-center group relative">
          {/* Logo Container with Advanced Effects */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            
            {/* Main Logo */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              {/* Inner Glow */}
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
              
              {/* Sigma Symbol */}
              <span className="relative text-white font-black text-xl sm:text-2xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">∑</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          {/* Brand Text */}
          <div className="ml-4 flex flex-col">
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
              tude.ai
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              THÉORIE → PRATIQUE
            </span>
          </div>
        </Link>

        {/* Enhanced Navigation */}
        <div className="hidden lg:flex items-center">
          <Navigation />
        </div>

        {/* Premium CTA Section */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu for Navigation */}
          <div className="lg:hidden">
            <Navigation />
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              <Link href="/demo">Domaines</Link>
            </Button>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-6"
            >
              <Link href="/signup">Devenir Bêta Testeur</Link>
            </Button>
          </div>
        </div>
      </ResponsiveHeader>
      <ResponsiveMain>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Beta Advantages Section */}
        <BetaAdvantagesSection />
        
        {/* Interface Preview Section */}
        <InterfacePreviewSection />
        


        {/* Autres sections à venir... */}
      </ResponsiveMain>
      
      {/* Footer */}
      <Footer />

    </ResponsiveLayout>
  );
}