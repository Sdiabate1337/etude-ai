import Link from 'next/link';
import { ArrowRightIcon, GlobeAltIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline';
import { 
  ResponsiveLayout, 
  ResponsiveHeader, 
  ResponsiveMain, 
  ResponsiveFooter 
} from '@/components/layout/ResponsiveLayout';
import { Navigation } from '@/components/layout/Navigation';
import { Section } from '@/components/ui/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';

export default function HomePage() {
  return (
    <ResponsiveLayout>
      {/* Header */}
      <ResponsiveHeader>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-etude-orange-500 to-etude-green-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg sm:text-xl">∑</span>
          </div>
          <span className="ml-3 text-2xl sm:text-3xl font-bold text-gray-900">tude.ai</span>
        </Link>

        {/* Navigation */}
        <Navigation />

        {/* Auth buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/signin" 
            className="text-gray-700 hover:text-etude-orange-600 transition-colors font-medium"
          >
            Se connecter
          </Link>
          <Button variant="primary" size="sm">
            <Link href="/signup">Commencer</Link>
          </Button>
        </div>
      </ResponsiveHeader>

      <ResponsiveMain>
        {/* Hero Section */}
        <Section background="gradient" padding="xl" className="relative overflow-hidden">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-etude-orange-100 text-etude-orange-800 text-sm font-medium">
              <span className="w-2 h-2 bg-etude-orange-500 rounded-full mr-2"></span>
              <span className="hidden sm:inline">Plateforme d'apprentissage panafricaine</span>
              <span className="sm:hidden">Éducation panafricaine</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-12">
            <Typography as="h1" variant="hero" className="text-gray-900 mb-6">
              Transforme tes cours en
              <span className="block sm:inline">
                <Typography as="span" variant="hero" gradient> projets concrets</Typography>
              </span>
            </Typography>

            <Typography variant="body" className="text-gray-600 max-w-4xl mx-auto mb-8">
              Avec un mentor IA disponible 24/7 et une communauté de{' '}
              <span className="font-semibold text-etude-orange-600">50,000 étudiants africains</span>
              {' '}pour apprendre ensemble.
            </Typography>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRightIcon className="h-5 w-5" />}
                className="group"
              >
                <Link href="/signup">Commencer gratuitement</Link>
              </Button>
              
              <Button variant="outline" size="lg">
                <Link href="/demo">Voir la démo</Link>
              </Button>
            </div>

            {/* Stats */}
            <Grid cols={{ default: 3 }} gap="md" className="max-w-2xl mx-auto">
              <div className="text-center">
                <Typography as="div" variant="heading" className="text-etude-orange-600 mb-2">
                  50K+
                </Typography>
                <Typography variant="caption">
                  Étudiants africains
                </Typography>
              </div>
              <div className="text-center">
                <Typography as="div" variant="heading" className="text-etude-green-600 mb-2">
                  15
                </Typography>
                <Typography variant="caption">
                  Pays connectés
                </Typography>
              </div>
              <div className="text-center">
                <Typography as="div" variant="heading" className="text-etude-purple-600 mb-2">
                  24/7
                </Typography>
                <Typography variant="caption">
                  Mentor IA
                </Typography>
              </div>
            </Grid>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-72 sm:h-72 bg-etude-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-72 sm:h-72 bg-etude-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-1/2 w-32 h-32 sm:w-72 sm:h-72 bg-etude-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-glow"></div>
          </div>
        </Section>

        {/* Features Section */}
        <Section background="white" padding="lg">
          <div className="text-center mb-16">
            <Typography as="h2" variant="title" className="text-gray-900 mb-4">
              Pourquoi choisir ∑tude.ai ?
            </Typography>
            <Typography variant="body" className="text-gray-600 max-w-3xl mx-auto">
              Une approche révolutionnaire de l'apprentissage, conçue spécialement pour les étudiants africains
            </Typography>
          </div>

          <Grid cols={{ default: 1, md: 3 }} gap="lg">
            <Card className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-etude-orange-500 to-etude-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <AcademicCapIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <Typography as="h3" variant="subheading" className="text-gray-900 mb-4">
                Apprentissage Gamifié
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Débloquez votre labyrinthe personnalisé avec des missions adaptées à votre niveau et vos objectifs de carrière.
              </Typography>
            </Card>

            <Card className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-etude-green-500 to-etude-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <UsersIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <Typography as="h3" variant="subheading" className="text-gray-900 mb-4">
                Réseau Panafricain
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Collaborez avec des étudiants du Maroc au Kenya, créez des projets ensemble et échangez vos cultures.
              </Typography>
            </Card>

            <Card className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-etude-purple-500 to-etude-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <GlobeAltIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <Typography as="h3" variant="subheading" className="text-gray-900 mb-4">
                IA Contextuelle
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Un mentor IA qui comprend les défis et opportunités du marché africain, disponible 24/7.
              </Typography>
            </Card>
          </Grid>
        </Section>

        {/* Témoignages Section */}
        <Section background="gray" padding="lg">
          <div className="text-center mb-16">
            <Typography as="h2" variant="title" className="text-gray-900 mb-4">
              Ce que disent nos étudiants
            </Typography>
            <Typography variant="body" className="text-gray-600 max-w-3xl mx-auto">
              Plus de 50,000 étudiants africains transforment déjà leur apprentissage avec ∑tude.ai
            </Typography>
          </div>

          <Grid cols={{ default: 1, md: 3 }} gap="lg">
            <Card variant="gradient" className="text-center">
              <div className="mb-4">
                <Typography variant="body" className="text-gray-700 italic mb-4">
                  "Grâce à ∑tude.ai, j'ai transformé mes cours théoriques en projets concrets. Le mentor IA m'aide 24/7 !"
                </Typography>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-etude-orange-500 to-etude-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <Typography variant="label" className="text-gray-900">
                      Amina Kone
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Étudiante en Informatique, Côte d'Ivoire 🇨🇮
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="gradient" className="text-center">
              <div className="mb-4">
                <Typography variant="body" className="text-gray-700 italic mb-4">
                  "La communauté panafricaine m'a permis de collaborer avec des étudiants du Kenya. Incroyable expérience !"
                </Typography>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-etude-green-500 to-etude-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    K
                  </div>
                  <div>
                    <Typography variant="label" className="text-gray-900">
                      Kwame Asante
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Étudiant en Économie, Ghana 🇬🇭
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="gradient" className="text-center">
              <div className="mb-4">
                <Typography variant="body" className="text-gray-700 italic mb-4">
                  "Le labyrinthe gamifié rend l'apprentissage addictif. Je progresse plus vite qu'en cours traditionnels !"
                </Typography>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-etude-purple-500 to-etude-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    F
                  </div>
                  <div>
                    <Typography variant="label" className="text-gray-900">
                      Fatou Diallo
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Étudiante en Droit, Sénégal 🇸🇳
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        </Section>

        {/* Stats Section */}
        <Section padding="lg">
          <div className="text-center">
            <Typography as="h2" variant="title" className="text-gray-900 mb-16">
              L'impact de ∑tude.ai en chiffres
            </Typography>

            <Grid cols={{ default: 2, md: 4 }} gap="lg">
              <div className="text-center">
                <Typography as="div" variant="hero" className="text-etude-orange-600 mb-4">
                  95%
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  Taux de satisfaction des étudiants
                </Typography>
              </div>
              <div className="text-center">
                <Typography as="div" variant="hero" className="text-etude-green-600 mb-4">
                  3x
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  Apprentissage plus rapide qu'en cours traditionnel
                </Typography>
              </div>
              <div className="text-center">
                <Typography as="div" variant="hero" className="text-etude-purple-600 mb-4">
                  15K+
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  Projets concrets réalisés
                </Typography>
              </div>
              <div className="text-center">
                <Typography as="div" variant="hero" className="text-etude-orange-600 mb-4">
                  24/7
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  Support IA personnalisé
                </Typography>
              </div>
            </Grid>
          </div>
        </Section>

        {/* CTA Section */}
        <Section padding="lg" className="bg-gradient-to-r from-etude-orange-500 to-etude-green-500">
          <div className="text-center">
            <Typography as="h2" variant="title" className="text-white mb-6">
              Prêt à transformer ton apprentissage ?
            </Typography>
            <Typography variant="body" className="text-etude-orange-100 mb-8 max-w-3xl mx-auto">
              Rejoins des milliers d'étudiants africains qui révolutionnent leur éducation avec des projets concrets, un mentor IA et une communauté panafricaine.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-etude-orange-600 hover:bg-etude-orange-50"
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                <Link href="/signup">Commencer gratuitement</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-etude-orange-600"
              >
                <Link href="/demo">Voir la démo</Link>
              </Button>
            </div>
          </div>
        </Section>
      </ResponsiveMain>

      {/* Footer */}
      <ResponsiveFooter>
        <Grid cols={{ default: 1, md: 4 }} gap="lg" className="mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-etude-orange-500 to-etude-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">∑</span>
              </div>
              <span className="ml-2 text-xl font-bold">tude.ai</span>
            </div>
            <Typography variant="body" className="text-gray-400 mb-4">
              L'avenir de l'éducation africaine commence ici.
            </Typography>
            <div className="flex space-x-4">
              <span className="text-2xl">🌍</span>
              <span className="text-2xl">🚀</span>
              <span className="text-2xl">🎓</span>
            </div>
          </div>

          <div>
            <Typography as="h4" variant="label" className="text-white mb-4">
              Plateforme
            </Typography>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/features" className="hover:text-white transition-colors">Fonctionnalités</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Démo</Link></li>
              <li><Link href="/mobile" className="hover:text-white transition-colors">App Mobile</Link></li>
            </ul>
          </div>

          <div>
            <Typography as="h4" variant="label" className="text-white mb-4">
              Communauté
            </Typography>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Événements</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/mentors" className="hover:text-white transition-colors">Devenir Mentor</Link></li>
            </ul>
          </div>

          <div>
            <Typography as="h4" variant="label" className="text-white mb-4">
              Support
            </Typography>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Centre d'aide</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </Grid>

        <div className="border-t border-gray-800 pt-8 text-center">
          <Typography variant="caption" className="text-gray-400">
            &copy; 2025 ∑tude.ai. Tous droits réservés. Développé avec ❤️ par{' '}
            <span className="text-etude-orange-500 font-semibold">@Sdiabate1337</span> pour l'Afrique.
          </Typography>
        </div>
      </ResponsiveFooter>
    </ResponsiveLayout>
  );
}