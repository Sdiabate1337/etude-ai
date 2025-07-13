'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { FieldOfStudy, AcademicLevel, OnboardingData } from '@/types/supabase';

const FIELDS_OF_STUDY: { value: FieldOfStudy; label: string }[] = [
  { value: 'computer_science', label: 'Informatique' },
  { value: 'economics', label: 'Économie' },
  { value: 'law', label: 'Droit' },
  { value: 'medicine', label: 'Médecine' },
  { value: 'humanities', label: 'Sciences Humaines' },
  { value: 'engineering', label: 'Ingénierie' },
  { value: 'business', label: 'Commerce/Gestion' },
  { value: 'sciences', label: 'Sciences' },
  { value: 'other', label: 'Autre' },
];

const ACADEMIC_LEVELS: { value: AcademicLevel; label: string }[] = [
  { value: 'l1', label: 'Année 1 (Bachelor / L1)' },
  { value: 'l2', label: 'Année 2 (L2)' },
  { value: 'l3', label: 'Année 3 (L3)' },
  { value: 'm1', label: 'Master 1' },
  { value: 'm2', label: 'Master 2' },
  { value: 'engineering', label: 'École d\'Ingénieur / Équivalent' },
  { value: 'other', label: 'Autre' },
];

export default function OnboardingPage() {
  const { user, updateProfile } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<OnboardingData>({
    field_of_study: 'computer_science',
    academic_level: 'l1',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await updateProfile({
        field_of_study: formData.field_of_study,
        academic_level: formData.academic_level,
        onboarding_completed: true,
      });
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Error completing onboarding:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                ∑
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Bienvenue sur ∑tude.ai !
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Pour personnaliser votre expérience d'apprentissage, nous avons besoin de quelques informations sur vous.
          </p>
        </div>

        {/* Onboarding Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-green-50/30 rounded-3xl" />
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Field of Study */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  🎓 Quel est votre domaine d'étude ?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FIELDS_OF_STUDY.map((field) => (
                    <label
                      key={field.value}
                      className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.field_of_study === field.value
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="field_of_study"
                        value={field.value}
                        checked={formData.field_of_study === field.value}
                        onChange={(e) =>
                          setFormData({ ...formData, field_of_study: e.target.value as FieldOfStudy })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          formData.field_of_study === field.value
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.field_of_study === field.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-medium text-gray-900">{field.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Academic Level */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  📚 Quel est votre niveau académique actuel ?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {ACADEMIC_LEVELS.map((level) => (
                    <label
                      key={level.value}
                      className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.academic_level === level.value
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="academic_level"
                        value={level.value}
                        checked={formData.academic_level === level.value}
                        onChange={(e) =>
                          setFormData({ ...formData, academic_level: e.target.value as AcademicLevel })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          formData.academic_level === level.value
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.academic_level === level.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-medium text-gray-900">{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Configuration en cours...
                    </div>
                  ) : (
                    'Commencer mon parcours ∑tude.ai 🚀'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Ces informations nous aident à personnaliser votre expérience d'apprentissage
          </p>
        </div>
      </div>
    </div>
  );
}
