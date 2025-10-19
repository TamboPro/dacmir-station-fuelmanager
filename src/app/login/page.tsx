// app/login/page.tsx
"use client";

import { Eye, EyeOff, Mail, Lock, Home } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { LoadingButton } from '@/components/ui/LoadingButton';
import { CustomCheckbox } from '@/components/ui/CustomCheckbox';
import { FormHeader } from '@/components/ui/FormHeader';
import { ImageSection } from '@/components/layout/ImageSection';

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (email !== 'admin@remodash.pro' || password !== 'Admin@123!*') {
      setError('Identifiants incorrects');
      setIsLoading(false);
      return;
    }
    
    setTimeout(() => {
      if (rememberMe) {
        localStorage.setItem('remodash_token', 'simulated_token');
      }
      router.push('/dashboard/admin');
    }, 5000);
  };

  const homeIcon = (
    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      <ImageSection
        src="https://images.unsplash.com/photo-1601003225693-b9c157c17a6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Station service moderne"
        title="Bienvenue sur Diletta"
        description="Votre plateforme de gestion de station service tout-en-un"
        credit="by NYAMSI LAWO Ruben"
      />

      {/* Section Login avec la couleur #1C4668 */}
      <div className="w-full md:w-1/4 bg-[#1C4668] flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <FormHeader
            icon={homeIcon}
            title="Diletta"
            subtitle="Connectez-vous à votre espace"
          />

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Adresse email
              </label>
              <InputWithIcon
                icon={Mail}
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={setEmail}
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Mot de passe
              </label>
              <InputWithIcon
                icon={Lock}
                type="password"
                placeholder="Votre mot de passe"
                value={password}
                onChange={setPassword}
                required
                autoComplete="current-password"
                showPasswordToggle
              />
            </div>

            <div className="flex items-center justify-between">
              <CustomCheckbox
                id="remember-me"
                label="Se souvenir de moi"
                checked={rememberMe}
                onChange={setRememberMe}
              />
              <div className="text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Mot de passe oublié?
                </a>
              </div>
            </div>

            <div>
              <LoadingButton isLoading={isLoading}>
                Se connecter
              </LoadingButton>
              {error && (
                <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-200 text-center">{error}</p>
                </div>
              )}
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-blue-600/30">
            <p className="text-sm text-blue-200 text-center">
              Pas encore de compte?{' '}
              <a href="#" className="text-white hover:text-blue-100 font-medium transition-colors">
                Contacter l&apos;administrateur
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}