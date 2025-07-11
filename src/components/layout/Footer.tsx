'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  SparklesIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { Typography } from '@/components/ui/Typography'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">∑</span>
                </div>
              </div>
              <div className="ml-4">
                <Typography variant="heading" className="text-2xl font-black text-gray-900">
                  tude.ai
                </Typography>
                <Typography className="text-sm text-gray-600 font-medium">
                  Théorie → Pratique
                </Typography>
              </div>
            </div>

            {/* Mission */}
            <Typography className="text-gray-700 leading-relaxed mb-6 max-w-md">
              Nous transformons l'apprentissage théorique en projets concrets pour préparer 
              les étudiants africains aux défis du monde professionnel.
            </Typography>

            {/* Beta CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-2xl border border-blue-100">
              <div className="flex items-center mb-2">
                <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
                <Typography className="font-bold text-gray-900">
                  Rejoins la Révolution
                </Typography>
              </div>
              <Typography className="text-sm text-gray-600 mb-3">
                Sois parmi les 100 premiers bêta testeurs
              </Typography>
              <Link 
                href="#hero"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
              >
                Devenir Bêta Testeur
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="heading" className="text-lg font-bold text-gray-900 mb-4">
              Navigation
            </Typography>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#experience" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  L'Expérience
                </Link>
              </li>
              <li>
                <Link 
                  href="#beta-advantages" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  Avantages Bêta
                </Link>
              </li>
              <li>
                <Link 
                  href="#interface-preview" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  Aperçu Interface
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Typography variant="heading" className="text-lg font-bold text-gray-900 mb-4">
              Contact
            </Typography>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 text-sm">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-blue-600" />
                diabatesekou1337@gmail.com
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                Afrique • Innovation
              </li>
            </ul>

            {/* Social Proof */}
            <div className="mt-6 p-3 bg-gray-50 rounded-xl">
              <Typography className="text-xs text-gray-600 mb-1">
                Bêta Testeurs Inscrits
              </Typography>
              <div className="flex items-center">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <Typography className="text-sm font-bold text-gray-900 ml-2">
                  +50 autres
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="flex items-center mb-4 md:mb-0">
              <Typography className="text-sm text-gray-600">
                2024 ∑tude.ai • Fait avec
              </Typography>
              <HeartIcon className="w-4 h-4 text-red-500 mx-1" />
              <Typography className="text-sm text-gray-600">
                pour l'Afrique
              </Typography>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="#" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Confidentialité
              </Link>
              <Link 
                href="#" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Conditions
              </Link>
              <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <Typography className="text-xs text-green-700 font-medium">
                  Bêta Active
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
