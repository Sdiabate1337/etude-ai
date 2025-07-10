'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  SparklesIcon, 
  StarIcon, 
  UserGroupIcon, 
  GiftIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'

const advantages = [
  {
    id: 1,
    icon: GiftIcon,
    title: "Accès Gratuit 3 Mois",
    description: "Teste toutes les fonctionnalités du plan Essentiel pendant 3 mois complets, puis continue à tarif préférentiel bêta testeur.",
    badge: "Valeur 27€",
    color: "from-blue-500 to-green-500",
    bgColor: "from-blue-50 to-green-50"
  },
  {
    id: 2,
    icon: StarIcon,
    title: "Badge Fondateur",
    description: "Reçois un badge exclusif 'Fondateur ∑tude.ai' qui te distingue dans la communauté et sur ton profil.",
    badge: "Exclusif",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
  {
    id: 3,
    icon: UserGroupIcon,
    title: "Influence Directe",
    description: "Tes retours façonnent directement le produit. Tu participes aux décisions de développement.",
    badge: "Impact Réel",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 4,
    icon: LockClosedIcon,
    title: "Communauté VIP",
    description: "Accès à un groupe privé avec les autres bêta testeurs et l'équipe ∑tude.ai pour échanger et apprendre.",
    badge: "Privé",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50"
  }
]

export function BetaAdvantagesSection() {
  return (
    <Section id="beta-advantages" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
            <Typography className="text-blue-700 font-semibold text-sm">
              Offre Limitée Bêta Testeur
            </Typography>
          </div>
          
          <Typography variant="heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Rejoindre <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Maintenant</span> ?
          </Typography>
          
          <Typography className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les premiers utilisateurs bénéficient d'avantages exclusifs et permanents. 
            Une opportunité unique de façonner l'avenir de l'éducation en Afrique.
          </Typography>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${advantage.bgColor} border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`bg-gradient-to-r ${advantage.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {advantage.badge}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <advantage.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <Typography variant="heading" className="text-2xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </Typography>
              
              <Typography className="text-gray-700 leading-relaxed">
                {advantage.description}
              </Typography>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <Typography variant="heading" className="text-3xl md:text-4xl font-bold mb-4">
              Places Limitées
            </Typography>
            
            <Typography className="text-xl mb-8 opacity-90">
              Nous acceptons seulement <span className="font-bold">100 bêta testeurs</span> pour garantir 
              un accompagnement personnalisé et des retours de qualité.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScyYa6PA7ABolUntWz7d_GzZ48WXNnT1JuaOZCdGwdytgzS_g/viewform" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Devenir Bêta Testeur</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <div className="flex items-center text-white/80">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                <span className="text-sm">Inscription gratuite • Sans engagement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
