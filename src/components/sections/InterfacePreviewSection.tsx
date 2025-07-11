'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  EyeIcon,
  CogIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  RectangleStackIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'

const wireframeFeatures = [
  {
    id: 1,
    title: "Dashboard Étudiant",
    description: "Interface centralisée pour suivre ta progression et tes projets pratiques.",
    icon: RectangleStackIcon,
    wireframe: "dashboard"
  },
  {
    id: 2,
    title: "Projets Interactifs",
    description: "Système gamifié pour transformer la théorie en pratique concrète.",
    icon: PuzzlePieceIcon,
    wireframe: "projects"
  },
  {
    id: 3,
    title: "Collaboration",
    description: "Outils pour travailler ensemble et partager les connaissances.",
    icon: UserGroupIcon,
    wireframe: "collaboration"
  }
]

export function InterfacePreviewSection() {
  return (
    <section id="interface-preview" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
            <EyeIcon className="w-5 h-5 text-blue-600 mr-2" />
            <Typography className="text-blue-700 font-semibold text-sm">
              Vision Conceptuelle
            </Typography>
          </div>
          
          <Typography variant="heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aperçu de Notre <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Vision</span>
          </Typography>
          
          <Typography className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Voici l'expérience que nous construisons <strong>ensemble</strong> avec nos bêta testeurs.
          </Typography>
          
          <div className="inline-flex items-center bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg">
            <CogIcon className="w-4 h-4 text-amber-600 mr-2" />
            <Typography className="text-amber-700 text-sm font-medium">
              Interface conceptuelle • En développement collaboratif
            </Typography>
          </div>
        </motion.div>

        {/* Conceptual Wireframes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          {/* Wireframe Container */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border-2 border-dashed border-gray-300 overflow-hidden">
            {/* Wireframe Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 border-b-2 border-dashed border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 border-2 border-dashed border-blue-400 rounded-full flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Wireframe Content */}
            <div className="p-8">
              {/* Welcome Wireframe */}
              <div className="mb-8 p-4 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 border border-dashed border-blue-400 rounded-full mr-3"></div>
                  <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-64 bg-gray-200 rounded"></div>
                <Typography className="text-xs text-gray-500 mt-2 italic">
                  Zone d'accueil personnalisée
                </Typography>
              </div>

              {/* Wireframe Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Dashboard Wireframe */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-blue-300 p-6 rounded-2xl bg-blue-50/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 border-2 border-dashed border-blue-400 rounded-xl flex items-center justify-center">
                      <RectangleStackIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="w-16 h-5 bg-blue-200 rounded-full"></div>
                  </div>
                  <div className="h-5 w-24 bg-gray-300 rounded mb-3"></div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  <Typography className="text-xs text-blue-600 mt-2 font-medium">
                    Dashboard Étudiant
                  </Typography>
                </motion.div>

                {/* Projects Wireframe */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-green-300 p-6 rounded-2xl bg-green-50/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 border-2 border-dashed border-green-400 rounded-xl flex items-center justify-center">
                      <PuzzlePieceIcon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="w-16 h-5 bg-green-200 rounded-full"></div>
                  </div>
                  <div className="h-5 w-28 bg-gray-300 rounded mb-3"></div>
                  <div className="space-y-2 mb-3">
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  <Typography className="text-xs text-green-600 mt-2 font-medium">
                    Projets Interactifs
                  </Typography>
                </motion.div>

                {/* Collaboration Wireframe */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-purple-300 p-6 rounded-2xl bg-purple-50/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 border-2 border-dashed border-purple-400 rounded-xl flex items-center justify-center">
                      <UserGroupIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="w-16 h-5 bg-purple-200 rounded-full"></div>
                  </div>
                  <div className="h-5 w-20 bg-gray-300 rounded mb-3"></div>
                  <div className="flex space-x-1 mb-3">
                    <div className="w-6 h-6 border border-dashed border-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 border border-dashed border-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 border border-dashed border-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <Typography className="text-xs text-purple-600 mt-2 font-medium">
                    Collaboration
                  </Typography>
                </motion.div>
              </div>

              {/* Co-creation Message */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <SparklesIcon className="w-5 h-5 text-amber-600 mr-2" />
                      <Typography className="font-bold text-amber-900">
                        Co-création avec nos Bêta Testeurs
                      </Typography>
                    </div>
                    <Typography className="text-amber-700 text-sm">
                      Ton feedback influence directement ces wireframes et l'interface finale
                    </Typography>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CogIcon className="w-8 h-8 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <SparklesIcon className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Wireframe Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wireframeFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-gray-400" />
              </div>
              
              <Typography variant="heading" className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </Typography>
              
              <Typography className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </Typography>
              
              <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
                <Typography className="text-xs text-gray-500 font-medium">
                  Wireframe • {feature.wireframe}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Typography className="text-lg text-gray-600 mb-4">
            Prêt à co-créer l'avenir de l'apprentissage ?
          </Typography>
          
          <Typography className="text-sm text-gray-500 mb-8">
            Rejoins-nous pour transformer ces wireframes en réalité
          </Typography>
          
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyYa6PA7ABolUntWz7d_GzZ48WXNnT1JuaOZCdGwdytgzS_g/viewform" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Devenir Bêta Testeur</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
