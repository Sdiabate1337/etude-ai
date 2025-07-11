'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  TrophyIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  XMarkIcon,
  HandRaisedIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import Link from 'next/link'

const steps = [
  {
    id: 1,
    icon: LightBulbIcon,
    title: "Évaluation intelligente",
    subtitle: "Ton profil en 2 minutes",
    description: "Un quiz rapide pour comprendre ton niveau, ta filière, tes objectifs.",
    detail: "Tu n'as rien à préparer — c'est ∑tude.ai qui s'adapte à toi.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    time: "2 min",
    result: "Profil personnalisé créé"
  },
  {
    id: 2,
    icon: BookOpenIcon,
    title: "Transformation magique",
    subtitle: "Tes cours deviennent missions",
    description: "Tu sélectionnes un chapitre. L'IA le convertit en projet réel :",
    detail: "Code une API, rédige un contrat, crée une analyse financière, résume une étude clinique...",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    time: "30 sec",
    result: "Mission pratique générée"
  },
  {
    id: 3,
    icon: UserGroupIcon,
    title: "Mentorat & collaboration",
    subtitle: "Jamais seul(e) dans l'action",
    description: "Mentor IA 24/7 + communauté étudiante active.",
    detail: "Tu avances avec de l'aide, tu échanges, tu collabores, tu progresses ensemble.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    time: "En continu",
    result: "Support permanent"
  },
  {
    id: 4,
    icon: TrophyIcon,
    title: "Validation & progression",
    subtitle: "Tes accomplissements comptent",
    description: "Mission validée → badge gagné → portfolio enrichi.",
    detail: "Tu débloques le prochain défi, comme dans un jeu. Tu peux montrer ce que tu sais faire, vraiment.",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    time: "À chaque réussite",
    result: "Portfolio concret"
  }
]

export function ExperienceSection() {
  const [activeStep, setActiveStep] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-green-100/20" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-green-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200/50 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Ton Expérience ∑tude.ai
            </span>
          </motion.div>

          <Typography variant="hero" className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="block">Imagine-toi dans</span>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              3 mois
            </span>
          </Typography>

          <Typography className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pendant que tes camarades restent dans la <span className="text-gray-400 line-through">théorie</span>,
            <br />
            <strong className="text-blue-600">tu auras déjà un portfolio</strong> qui impressionne les recruteurs.
          </Typography>
        </motion.div>

        {/* Interactive Journey */}
        <div className="max-w-6xl mx-auto">
          
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <step.icon className="w-5 h-5 inline mr-2" />
                Étape {step.id}
                {activeStep === step.id && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl"
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              activeStep === step.id && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Content */}
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Typography variant="heading" className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </Typography>
                        <Typography className="text-gray-600 font-medium">
                          {step.subtitle}
                        </Typography>
                      </div>
                      <Typography className="text-gray-700 mt-4 leading-relaxed">
                        {step.description}
                      </Typography>
                      <Typography className="text-blue-600 font-medium mt-2">
                        {step.detail}
                      </Typography>
                      <div className="flex items-center mt-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          ⏱️ {step.time}
                        </span>
                        <span className="ml-6 flex items-center">
                          ✅ {step.result}
                        </span>
                      </div>
                    </div>
                    
                    {/* Illustration Section */}
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200 rounded-full"></div>
                          <div className="absolute bottom-4 right-4 w-16 h-16 bg-green-200 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full"></div>
                        </div>
                        
                        {/* Step-specific Illustration */}
                        {step.id === 1 && (
                          <div className="relative z-10 text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="w-32 h-32 mx-auto mb-4"
                            >
                              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                                <LightBulbIcon className="w-16 h-16 text-white" />
                              </div>
                            </motion.div>
                            <div className="text-sm text-gray-600 font-medium">Analyse intelligente</div>
                          </div>
                        )}
                        
                        {step.id === 2 && (
                          <div className="relative z-10 text-center">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0.8, opacity: 0.5 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl flex items-center justify-center"
                                >
                                  <span className="text-white font-bold">{i}</span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">Projets personnalisés</div>
                          </div>
                        )}
                        
                        {step.id === 3 && (
                          <div className="relative z-10 text-center">
                            <div className="relative">
                              <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 h-32 bg-gradient-to-b from-blue-500 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                              >
                                <UserGroupIcon className="w-12 h-12 text-white" />
                              </motion.div>
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold">3</span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 font-medium">Collaboration active</div>
                          </div>
                        )}
                        
                        {step.id === 4 && (
                          <div className="relative z-10 text-center">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="relative"
                            >
                              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrophyIcon className="w-16 h-16 text-white" />
                              </div>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                              >
                                <CheckCircleIcon className="w-5 h-5 text-white" />
                              </motion.div>
                            </motion.div>
                            <div className="text-sm text-gray-600 font-medium">Portfolio validé</div>
                          </div>
                        )}
                        
                        {/* Floating particles - Fixed positions for SSR */}
                        {[
                          { x: 20, y: 30, delay: 0 },
                          { x: 80, y: 20, delay: 0.5 },
                          { x: 60, y: 70, delay: 1 },
                          { x: 30, y: 80, delay: 1.5 },
                          { x: 90, y: 50, delay: 2 },
                          { x: 10, y: 60, delay: 2.5 }
                        ].map((particle, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/60 rounded-full"
                            animate={{
                              x: [0, 30, -20, 0],
                              y: [0, -20, 30, 0],
                              opacity: [0, 1, 0.5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: particle.delay,
                              ease: "easeInOut"
                            }}
                            style={{
                              left: `${particle.x}%`,
                              top: `${particle.y}%`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Results Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="flex items-center justify-center mb-12">
              <RocketLaunchIcon className="w-8 h-8 text-blue-600 mr-3" />
              <Typography variant="title" className="text-3xl font-bold text-gray-900">
                Résultat final
              </Typography>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { 
                  icon: XMarkIcon, 
                  text: "Tu ne consommes plus passivement", 
                  highlight: "Fini la passivité",
                  color: "text-red-500",
                  bgColor: "bg-red-50"
                },
                { 
                  icon: HandRaisedIcon, 
                  text: "Tu agis, collabores, pratiques, progresses", 
                  highlight: "Action concrète",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50"
                },
                { 
                  icon: BriefcaseIcon, 
                  text: "Tu peux montrer ce que tu sais faire, vraiment", 
                  highlight: "Portfolio réel",
                  color: "text-green-500",
                  bgColor: "bg-green-50"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <Typography className="font-semibold text-blue-600 mb-2">
                    {item.highlight}
                  </Typography>
                  <Typography className="text-gray-600">
                    {item.text}
                  </Typography>
                </motion.div>
              ))}
            </div>

            {/* Pourquoi ∑tude.ai ? */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 mb-12">
              <Typography variant="heading" className="text-xl font-bold text-gray-900 mb-8">
                Pourquoi ∑tude.ai ?
              </Typography>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    stat: "73%",
                    description: "des étudiants africains disent que leurs cours manquent de pratique",
                    icon: BookOpenIcon,
                    color: "text-red-500",
                    bgColor: "bg-red-50"
                  },
                  {
                    stat: "2/3",
                    description: "étudiants sur 3 ont du mal à appliquer ce qu'ils apprennent",
                    icon: LightBulbIcon,
                    color: "text-orange-500",
                    bgColor: "bg-orange-50"
                  },
                  {
                    stat: "0%",
                    description: "de solutions adaptées au contexte africain... jusqu'à maintenant",
                    icon: SparklesIcon,
                    color: "text-green-500",
                    bgColor: "bg-green-50"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-2">
                      {item.stat}
                    </div>
                    <Typography className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </Typography>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Typography className="text-gray-700 font-medium">
                  <span className="text-blue-600 font-bold">∑tude.ai</span> change la donne avec une approche 100% pratique et contextualisée.
                </Typography>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyYa6PA7ABolUntWz7d_GzZ48WXNnT1JuaOZCdGwdytgzS_g/viewform" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <SparklesIcon className="mr-3 h-6 w-6" />
                    Devenir Bêta Testeur
                    <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              
              <Typography className="text-sm text-gray-500 mt-4">
                ✨ Gratuit • Sans engagement • Résultats garantis
              </Typography>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
