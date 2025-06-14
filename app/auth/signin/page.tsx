'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Lock } from 'lucide-react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication
    setTimeout(() => {
      // For demo purposes, redirect based on email domain
      if (email.includes('student')) {
        router.push('/dashboard/student')
      } else if (email.includes('company')) {
        router.push('/dashboard/company')
      } else {
        router.push('/dashboard/mentor')
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-marble-pattern flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="marble-card p-8 rounded-xl">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-greek-blue hover:text-greek-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-greek-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Π</span>
              </div>
              <span className="text-3xl font-serif font-bold text-greek-blue">PRAXIS</span>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-greek-blue mb-2">
              Welcome Back
            </h2>
            <p className="text-stone-gray">
              Sign in to continue your journey
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-gray mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-stone-gray mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-greek-blue focus:ring-greek-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-gray">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="text-greek-blue hover:text-greek-gold transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-greek-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-greek-blue focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="text-center">
              <p className="text-stone-gray">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-greek-blue hover:text-greek-gold transition-colors font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-stone-gray">
            <p>Demo credentials:</p>
            <p>student@example.com, company@example.com, or mentor@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}