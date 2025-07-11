'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@/hooks/useAuth'
import { ChevronRightIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline'

// Types pour le Smart Onboarding
interface OnboardingData {
  initialInfo: {
    fieldOfStudy: string
    academicLevel: string
  }
  skillAssessment: {
    answers: Record<string, string>
    skillLevel: 'beginner' | 'intermediate' | 'advanced'
  }
}

// Schémas de validation
const initialInfoSchema = z.object({
  fieldOfStudy: z.string().min(1, 'Sélectionne ton domaine d\'études'),
  academicLevel: z.string().min(1, 'Sélectionne ton niveau académique')
})

// Domaines d'études disponibles
const FIELDS_OF_STUDY = [
  { id: 'computer-science', label: 'Informatique', icon: '💻' },
  { id: 'economics', label: 'Économie', icon: '📊' },
  { id: 'law', label: 'Droit', icon: '⚖️' },
  { id: 'medicine', label: 'Médecine', icon: '🏥' },
  { id: 'engineering', label: 'Ingénierie', icon: '⚙️' },
  { id: 'business', label: 'Commerce', icon: '💼' },
  { id: 'humanities', label: 'Sciences Humaines', icon: '📚' },
  { id: 'sciences', label: 'Sciences', icon: '🔬' },
  { id: 'arts', label: 'Arts', icon: '🎨' },
  { id: 'other', label: 'Autre', icon: '🎯' }
]

// Niveaux académiques
const ACADEMIC_LEVELS = [
  { id: 'l1', label: 'Licence 1 (L1)', description: 'Première année' },
  { id: 'l2', label: 'Licence 2 (L2)', description: 'Deuxième année' },
  { id: 'l3', label: 'Licence 3 (L3)', description: 'Troisième année' },
  { id: 'master1', label: 'Master 1 (M1)', description: 'Première année master' },
  { id: 'master2', label: 'Master 2 (M2)', description: 'Deuxième année master' },
  { id: 'engineering', label: 'École d\'Ingénieur', description: 'Équivalent master' },
  { id: 'phd', label: 'Doctorat', description: 'Études doctorales' }
]

// Questions dynamiques par domaine
const SKILL_QUESTIONS: Record<string, Array<{id: string, question: string, options: string[], correctAnswer: string, difficulty: 'easy' | 'medium' | 'hard'}>> = {
  'computer-science': [
    {
      id: 'cs1',
      question: 'Qu\'est-ce qu\'un algorithme ?',
      options: ['Une séquence d\'instructions', 'Un langage de programmation', 'Un type de données', 'Un système d\'exploitation'],
      correctAnswer: 'Une séquence d\'instructions',
      difficulty: 'easy'
    },
    {
      id: 'cs2', 
      question: 'Quelle est la complexité temporelle d\'une recherche binaire ?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 'O(log n)',
      difficulty: 'medium'
    },
    {
      id: 'cs3',
      question: 'Quel design pattern découple l\'interface de l\'implémentation ?',
      options: ['Singleton', 'Observer', 'Strategy', 'Bridge'],
      correctAnswer: 'Bridge',
      difficulty: 'hard'
    }
  ],
  'economics': [
    {
      id: 'econ1',
      question: 'Qu\'est-ce que l\'offre et la demande ?',
      options: ['Forces du marché', 'Types de monnaie', 'Indicateurs économiques', 'Politiques fiscales'],
      correctAnswer: 'Forces du marché',
      difficulty: 'easy'
    },
    {
      id: 'econ2',
      question: 'Que mesure le PIB ?',
      options: ['La richesse totale', 'La production économique', 'L\'inflation', 'Le chômage'],
      correctAnswer: 'La production économique',
      difficulty: 'medium'
    }
  ],
  'default': [
    {
      id: 'gen1',
      question: 'Comment préfères-tu apprendre de nouveaux concepts ?',
      options: ['En pratiquant', 'En lisant', 'En écoutant', 'En discutant'],
      correctAnswer: 'En pratiquant',
      difficulty: 'easy'
    }
  ]
}

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({})
  const [questions, setQuestions] = useState<typeof SKILL_QUESTIONS['computer-science']>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  
  const router = useRouter()
  const { updateProfile } = useAuth()

  // Form pour les informations initiales
  const initialInfoForm = useForm({
    resolver: zodResolver(initialInfoSchema),
    defaultValues: {
      fieldOfStudy: '',
      academicLevel: ''
    }
  })

  // Générer les questions en fonction du domaine d'études
  const generateQuestions = (fieldOfStudy: string, academicLevel: string) => {
    const baseQuestions = SKILL_QUESTIONS[fieldOfStudy] || SKILL_QUESTIONS['default']
    
    // Adapter les questions selon le niveau académique
    let filteredQuestions = baseQuestions
    
    if (['l1', 'l2'].includes(academicLevel)) {
      // Étudiants débutants: questions faciles et moyennes
      filteredQuestions = baseQuestions.filter(q => q.difficulty === 'easy' || q.difficulty === 'medium')
    } else if (['l3', 'master1'].includes(academicLevel)) {
      // Étudiants intermédiaires: toutes les questions
      filteredQuestions = baseQuestions
    } else {
      // Étudiants avancés: questions moyennes et difficiles
      filteredQuestions = baseQuestions.filter(q => q.difficulty === 'medium' || q.difficulty === 'hard')
    }
    
    return filteredQuestions.slice(0, Math.min(5, filteredQuestions.length)) // Maximum 5 questions
  }

  // Calculer le niveau de compétence basé sur les réponses
  const calculateSkillLevel = (answers: Record<string, string>) => {
    let correctAnswers = 0
    let totalQuestions = 0
    
    questions.forEach(question => {
      if (answers[question.id]) {
        totalQuestions++
        if (answers[question.id] === question.correctAnswer) {
          correctAnswers++
        }
      }
    })
    
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0
    
    if (percentage >= 80) return 'advanced'
    if (percentage >= 60) return 'intermediate'
    return 'beginner'
  }

  // Soumettre les informations initiales
  const handleInitialInfoSubmit = async (data: any) => {
    setIsLoading(true)
    
    try {
      // Générer les questions pour l'évaluation des compétences
      const generatedQuestions = generateQuestions(data.fieldOfStudy, data.academicLevel)
      setQuestions(generatedQuestions)
      
      // Sauvegarder les données
      setOnboardingData(prev => ({
        ...prev,
        initialInfo: data
      }))
      
      setCurrentStep(2)
    } catch (error) {
      console.error('Erreur lors de l\'envoi des informations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Répondre à une question
  const handleAnswerQuestion = (questionId: string, answer: string) => {
    const newAnswers = { ...userAnswers, [questionId]: answer }
    setUserAnswers(newAnswers)
    
    // Passer à la question suivante ou terminer
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 500)
    } else {
      // Calculer le niveau de compétence
      const calculatedLevel = calculateSkillLevel(newAnswers)
      
      // Terminer l'onboarding
      setTimeout(() => {
        handleCompleteOnboarding(newAnswers, calculatedLevel)
      }, 500)
    }
  }

  // Terminer l'onboarding
  const handleCompleteOnboarding = async (answers: Record<string, string>, level: string) => {
    setIsLoading(true)
    
    try {
      const completeData: OnboardingData = {
        initialInfo: onboardingData.initialInfo!,
        skillAssessment: {
          answers,
          skillLevel: level as 'beginner' | 'intermediate' | 'advanced'
        }
      }
      
      // Mettre à jour le profil utilisateur
      await updateProfile({
        learning_domains: [completeData.initialInfo.fieldOfStudy],
        level: completeData.initialInfo.academicLevel,
        learning_style: completeData.skillAssessment.skillLevel,
        onboarding_completed: true
      })
      
      // Rediriger vers le dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Erreur lors de la finalisation de l\'onboarding:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 text-white text-2xl font-bold mb-4"
          >
            ∑
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue sur ∑tude.ai !
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aidons-nous à personnaliser ton expérience d'apprentissage pour maximiser tes résultats
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step === 1 ? <AcademicCapIcon className="w-5 h-5" /> : <BeakerIcon className="w-5 h-5" />}
                </div>
                {step < 2 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-colors ${
                      step < currentStep ? 'bg-gradient-to-r from-blue-600 to-green-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentStep === 1 ? 'Informations personnelles' : 'Évaluation des compétences'}
            </span>
          </div>
        </div>

        {/* Steps Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  📚 Parle-nous de toi
                </h2>
                <p className="text-gray-600">
                  Nous devons comprendre ton niveau et tes intérêts pour te proposer le meilleur parcours
                </p>
              </div>

              <form onSubmit={initialInfoForm.handleSubmit(handleInitialInfoSubmit)} className="space-y-8">
                {/* Domaine d'études */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Quel est ton domaine d'études ?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {FIELDS_OF_STUDY.map((field) => (
                      <label
                        key={field.id}
                        className={`relative cursor-pointer rounded-xl border-2 p-4 text-center transition-all hover:shadow-md ${
                          initialInfoForm.watch('fieldOfStudy') === field.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={field.id}
                          {...initialInfoForm.register('fieldOfStudy')}
                          className="sr-only"
                        />
                        <div className="text-2xl mb-2">{field.icon}</div>
                        <div className="text-sm font-medium">{field.label}</div>
                      </label>
                    ))}
                  </div>
                  {initialInfoForm.formState.errors.fieldOfStudy && (
                    <p className="mt-2 text-sm text-red-600">
                      {initialInfoForm.formState.errors.fieldOfStudy.message}
                    </p>
                  )}
                </div>

                {/* Niveau académique */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Quel est ton niveau académique ?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ACADEMIC_LEVELS.map((level) => (
                      <label
                        key={level.id}
                        className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                          initialInfoForm.watch('academicLevel') === level.id
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={level.id}
                          {...initialInfoForm.register('academicLevel')}
                          className="sr-only"
                        />
                        <div className="font-medium">{level.label}</div>
                        <div className="text-sm text-gray-500">{level.description}</div>
                      </label>
                    ))}
                  </div>
                  {initialInfoForm.formState.errors.academicLevel && (
                    <p className="mt-2 text-sm text-red-600">
                      {initialInfoForm.formState.errors.academicLevel.message}
                    </p>
                  )}
                </div>

                {/* Bouton suivant */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 mr-2" />
                    )}
                    Continuer
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {currentStep === 2 && questions.length > 0 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  🧠 Évaluation des compétences
                </h2>
                <p className="text-gray-600">
                  Quelques questions pour évaluer ton niveau actuel
                </p>
                <div className="mt-4 bg-gray-100 rounded-full h-2 max-w-xs mx-auto">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Question {currentQuestionIndex + 1} sur {questions.length}
                </p>
              </div>

              {questions[currentQuestionIndex] && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      {questions[currentQuestionIndex].question}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerQuestion(questions[currentQuestionIndex].id, option)}
                        className={`p-4 text-left rounded-xl border-2 transition-all hover:shadow-md ${
                          userAnswers[questions[currentQuestionIndex].id] === option
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                        disabled={isLoading}
                      >
                        <div className="font-medium">{option}</div>
                      </button>
                    ))}
                  </div>
                  
                  {isLoading && (
                    <div className="text-center">
                      <div className="inline-flex items-center text-blue-600">
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2" />
                        Finalisation de ton profil...
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
