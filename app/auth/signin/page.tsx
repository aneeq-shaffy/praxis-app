'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Lock, Crown, Sparkles } from 'lucide-react'

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
      // Route based on email domain for demo
      if (email.includes('student')) {
        router.push('/dashboard/student')
      } else if (email.includes('company')) {
        router.push('/dashboard/company')
      } else if (email.includes('admin')) {
        router.push('/dashboard/admin')
      } else {
        router.push('/dashboard/mentor')
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian via-gunmetal to-charcoal flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-metallic-pattern opacity-10"></div>
      
      <div className="max-w-md w-full space-y-8 relative">
        <div className="metallic-card p-8 rounded-xl shadow-metallic shimmer-effect">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-6 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to ΠΡΑΞΙΣ
            </Link>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 gold-card rounded-full flex items-center justify-center shadow-gold animate-glow">
                <span className="text-obsidian font-bold text-lg">Π</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold gold-text text-shadow-gold">ΠΡΑΞΙΣ</span>
                <span className="text-xs text-silver font-medium tracking-wider">PRAXIS</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-obsidian mb-2">
              Welcome Back, Scholar
            </h2>
            <p className="text-charcoal">
              Continue your journey of excellence
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-obsidian mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-silver/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-platinum shadow-inset-metallic"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-obsidian mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-silver/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-platinum shadow-inset-metallic"
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
                  className="h-4 w-4 text-gold focus:ring-gold border-silver/30 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-charcoal">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="text-gold hover:text-gold-light transition-colors font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full metallic-button text-obsidian py-3 px-4 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entering ΠΡΑΞΙΣ...' : 'Enter ΠΡΑΞΙΣ'}
            </button>

            <div className="text-center">
              <p className="text-charcoal">
                New to our community?{' '}
                <Link href="/auth/signup" className="text-gold hover:text-gold-light transition-colors font-semibold">
                  Begin your journey
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-charcoal dark-metallic-card p-4 rounded-lg border border-gold/20">
            <div className="flex items-center justify-center mb-2">
              <Crown className="w-4 h-4 mr-2 text-gold" />
              <span className="font-semibold text-gold">Demo Credentials</span>
            </div>
            <p className="text-silver">student@praxis.com • company@praxis.com • mentor@praxis.com • admin@praxis.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}