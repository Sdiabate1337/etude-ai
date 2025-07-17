'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@/hooks/useAuth'
import { CheckIcon, UserIcon, AcademicCapIcon, GlobeAltIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'

// Types pour le Progressive Onboarding Wizard
interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  completed: boolean
  fields: string[]
}

interface OnboardingData {
  fullName: string
  university: string
  country: string
  whatsappNumber: string
  fieldOfStudy: string
  academicLevel: string
  level: string
  learningDomains: string[]
}

// Schéma de validation unifié
const onboardingSchema = z.object({
  fullName: z.string().min(2, 'Le nom complet doit contenir au moins 2 caractères'),
  university: z.string().min(2, 'L\'université doit contenir au moins 2 caractères'),
  country: z.string().min(2, 'Veuillez sélectionner un pays'),
  whatsappNumber: z.string().min(8, 'Le numéro WhatsApp doit contenir au moins 8 chiffres'),
  fieldOfStudy: z.string().min(2, 'Le domaine d\'étude doit contenir au moins 2 caractères'),
  academicLevel: z.string().min(1, 'Veuillez sélectionner un niveau académique'),
  level: z.string().min(1, 'Veuillez sélectionner votre niveau'),
  learningDomains: z.array(z.string()).min(1, 'Veuillez sélectionner au moins un domaine d\'apprentissage')
})

// Pays disponibles avec drapeaux
const countries = [
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'MA', name: 'Maroc', flag: '🇲🇦' },
  { code: 'TN', name: 'Tunisie', flag: '🇹🇳' },
  { code: 'DZ', name: 'Algérie', flag: '🇩🇿' },
  { code: 'SN', name: 'Sénégal', flag: '🇸🇳' },
  { code: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: 'CM', name: 'Cameroun', flag: '🇨🇲' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'BE', name: 'Belgique', flag: '🇧🇪' },
  { code: 'CH', name: 'Suisse', flag: '🇨🇭' }
]

// Niveaux académiques
const academicLevels = [
  'Licence (L1-L3)',
  'Master (M1-M2)',
  'Doctorat (PhD)',
  'École d\'Ingénieur',
  'BTS/DUT',
  'Autre'
]

export default function ProgressiveOnboardingWizard() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)


  // Configuration des étapes
  const steps: OnboardingStep[] = [
    {
      id: 'personal',
      title: 'Informations Personnelles',
      description: 'Commençons par faire connaissance',
      icon: UserIcon,
      completed: false,
      fields: ['fullName', 'university', 'country']
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Pour rester en contact',
      icon: PhoneIcon,
      completed: false,
      fields: ['whatsappNumber']
    },
    {
      id: 'academic',
      title: 'Parcours Académique',
      description: 'Personnalisons ton expérience',
      icon: AcademicCapIcon,
      completed: false,
      fields: ['fieldOfStudy', 'academicLevel', 'level', 'learningDomains']
    }
  ]

  const { register, watch, formState: { errors }, setValue, getValues } = useForm<OnboardingData>({
    resolver: zodResolver(onboardingSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      university: '',
      country: '',
      whatsappNumber: '',
      fieldOfStudy: '',
      academicLevel: '',
      level: '',
      learningDomains: []
    }
  })

  // Surveiller les changements pour l'auto-sauvegarde
  const watchedValues = watch()

  // Auto-sauvegarde avec debounce
  const debouncedSave = useCallback(
    debounce(async (data: OnboardingData) => {
      try {
        console.log('Auto-saving profile data...', data)
        await updateProfile({
          full_name: data.fullName,
          university: data.university,
          country: data.country,
          whatsapp_number: data.whatsappNumber,
          field_of_study: data.fieldOfStudy,
          academic_level: data.academicLevel,
          level: data.level,
          learning_domains: data.learningDomains
          // Ne pas inclure onboarding_completed dans l'auto-sauvegarde
        })
      } catch (error) {
        console.error('Auto-save failed:', error)
      }
    }, 1000),
    [updateProfile]
  )

  // Déclencher l'auto-sauvegarde quand les données changent
  useEffect(() => {
    const hasData = Object.values(watchedValues).some(value => value && value.length > 0)
    if (hasData) {
      debouncedSave(watchedValues)
    }
  }, [watchedValues, debouncedSave])

  // Vérifier si une étape est complétée
  const isStepCompleted = (step: OnboardingStep): boolean => {
    return step.fields.every(field => {
      const value = watchedValues[field as keyof OnboardingData]
      return value && value.length > 0
    })
  }

  // Calculer la progression
  const completedSteps = steps.filter(step => isStepCompleted(step)).length
  const progressPercentage = (completedSteps / steps.length) * 100

  // Finaliser l'onboarding
  const finalizeOnboarding = async () => {
    setIsLoading(true);
    try {
      // Save profile with all required fields
      const result = await updateProfile({
        full_name: watchedValues.fullName,
        university: watchedValues.university,
        country: watchedValues.country,
        whatsapp_number: watchedValues.whatsappNumber,
        field_of_study: watchedValues.fieldOfStudy,
        academic_level: watchedValues.academicLevel,
        level: watchedValues.level,
        learning_domains: watchedValues.learningDomains,
        onboarding_completed: true
      });

      if (result.error) {
        throw new Error(result.error);
      }

      // Show success message
      toast.success('Profil enregistré avec succès ! Redirection vers le dashboard...');
      
      // Wait a moment for the profile update to be reflected in the database
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear form values and reset steps
      setValue('fullName', '');
      setValue('university', '');
      setValue('country', '');
      setValue('whatsappNumber', '');
      setValue('fieldOfStudy', '');
      setValue('academicLevel', '');
      
      // Redirect to dashboard only if profile update was successful
      router.replace('/dashboard');
    } catch (error) {
      console.error('Failed to finalize onboarding:', error);
      // Show error message to user
      toast.error('Échec de la finalisation. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  // Vérifier si tout est complété
  const isAllCompleted = steps.every(step => isStepCompleted(step))

  // Effet pour finaliser automatiquement quand tout est rempli
  useEffect(() => {
    if (isAllCompleted && !isLoading) {
      finalizeOnboarding()
    }
  }, [isAllCompleted, isLoading])

  // Déterminer si on affiche le formulaire d'onboarding ou l'écran de bienvenue
  const showWelcomeScreen = isAllCompleted && !isLoading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      {showWelcomeScreen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <SparklesIcon className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Bienvenue sur ∑tude.ai{watchedValues.fullName ? `, ${watchedValues.fullName.split(' ')[0]}` : ''} ! 🎉
            </h1>
            <p className="text-lg text-slate-600">
              Ton profil est maintenant configuré. Prêt à commencer ton parcours d'apprentissage ?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold text-slate-900 mb-1">Université</h3>
              <p className="text-sm text-slate-600">{watchedValues.university}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-slate-900 mb-1">Domaine</h3>
              <p className="text-sm text-slate-600">{watchedValues.fieldOfStudy}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 mb-1">Niveau</h3>
              <p className="text-sm text-slate-600">{watchedValues.academicLevel}</p>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => router.replace('/dashboard')}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Accéder au Dashboard 🚀
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header avec progression */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Configuration de ton profil ∑tude.ai</h1>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
              {completedSteps}/{steps.length} étapes
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-white h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Navigation des étapes */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const completed = isStepCompleted(step)
                const current = index === currentStep
                
                return (
                  <motion.div
                    key={step.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      completed
                        ? 'border-green-200 bg-green-50'
                        : current
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                    onClick={() => setCurrentStep(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        completed
                          ? 'bg-green-100 text-green-600'
                          : current
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {completed ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          completed ? 'text-green-900' : current ? 'text-blue-900' : 'text-slate-600'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-500">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Formulaire de l'étape courante */}
            <div className="md:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      {steps[currentStep].title}
                    </h2>
                    <p className="text-slate-600">{steps[currentStep].description}</p>
                  </div>

                  {/* Formulaires par étape */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          {...register('fullName')}
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Prénom Nom"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Université/Institution *
                        </label>
                        <input
                          {...register('university')}
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nom de ton université ou école"
                        />
                        {errors.university && (
                          <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Pays *
                        </label>
                        <select
                          {...register('country')}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Sélectionne ton pays</option>
                          {countries.map(country => (
                            <option key={country.code} value={country.name}>
                              {country.flag} {country.name}
                            </option>
                          ))}
                        </select>
                        {errors.country && (
                          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Numéro WhatsApp *
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            {...register('whatsappNumber')}
                            type="tel"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+33 6 12 34 56 78"
                          />
                        </div>
                        {errors.whatsappNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber.message}</p>
                        )}
                        <p className="text-sm text-slate-500 mt-1">
                          Pour recevoir des notifications et du support personnalisé
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-slate-700">
                          Domaine d'études
                        </label>
                        <div className="mt-1">
                          <select
                            id="fieldOfStudy"
                            {...register('fieldOfStudy')}
                            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          >
                            <option value="">Sélectionnez votre domaine d'études</option>
                            <option value="Computer Science">Informatique</option>
                            <option value="Economics">Économie</option>
                            <option value="Law">Droit</option>
                            <option value="Medicine">Médecine</option>
                            <option value="Engineering">Ingénierie</option>
                            <option value="Business">Business</option>
                            <option value="Humanities">Humanités</option>
                            <option value="Sciences">Sciences</option>
                            <option value="Arts">Arts</option>
                            <option value="Other">Autre</option>
                          </select>
                        </div>
                        {errors.fieldOfStudy && (
                          <p className="mt-1 text-sm text-red-600">{errors.fieldOfStudy.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="academicLevel" className="block text-sm font-medium text-slate-700">
                          Niveau Académique
                        </label>
                        <div className="mt-1">
                          <select
                            id="academicLevel"
                            {...register('academicLevel')}
                            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          >
                            <option value="">Sélectionnez votre niveau académique</option>
                            <option value="L1">Licence 1</option>
                            <option value="L2">Licence 2</option>
                            <option value="L3">Licence 3</option>
                            <option value="M1">Master 1</option>
                            <option value="M2">Master 2</option>
                            <option value="Engineering School">École d'Ingénieurs</option>
                            <option value="Other">Autre</option>
                          </select>
                        </div>
                        {errors.academicLevel && (
                          <p className="mt-1 text-sm text-red-600">{errors.academicLevel.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="level" className="block text-sm font-medium text-slate-700">
                          Votre niveau
                        </label>
                        <div className="mt-1">
                          <select
                            id="level"
                            {...register('level')}
                            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          >
                            <option value="">Sélectionnez votre niveau</option>
                            <option value="beginner">Débutant</option>
                            <option value="intermediate">Intermédiaire</option>
                            <option value="advanced">Avancé</option>
                            <option value="expert">Expert</option>
                          </select>
                        </div>
                        {errors.level && (
                          <p className="mt-1 text-sm text-red-600">{errors.level.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700">
                          Domaines d'apprentissage
                        </label>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center">
                            <input
                              id="ai"
                              type="checkbox"
                              {...register('learningDomains')}
                              value="AI"
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="ai" className="ml-3 text-sm text-slate-700">
                              Intelligence Artificielle
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="webdev"
                              type="checkbox"
                              {...register('learningDomains')}
                              value="Web Development"
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="webdev" className="ml-3 text-sm text-slate-700">
                              Développement Web
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="data"
                              type="checkbox"
                              {...register('learningDomains')}
                              value="Data Science"
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="data" className="ml-3 text-sm text-slate-700">
                              Data Science
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="mobile"
                              type="checkbox"
                              {...register('learningDomains')}
                              value="Mobile Development"
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="mobile" className="ml-3 text-sm text-slate-700">
                              Développement Mobile
                            </label>
                          </div>
                        </div>
                        {errors.learningDomains && (
                          <p className="mt-1 text-sm text-red-600">{errors.learningDomains.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Message de finalisation automatique */}
                  {isAllCompleted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                    >
                      <div className="flex items-center justify-center space-x-2 text-green-700">
                        <SparklesIcon className="w-5 h-5" />
                        <span className="font-semibold">
                          {isLoading ? 'Finalisation en cours...' : 'Profil complété ! Redirection...'}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

// Fonction debounce simple (si lodash n'est pas disponible)
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout
  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}
