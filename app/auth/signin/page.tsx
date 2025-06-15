'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Lock, Crown } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-baby-powder to-celeste/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-classical-pattern opacity-10"></div>
      
      <div className="max-w-md w-full space-y-8 relative">
        <div className="neoclassical-card p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-persian-indigo hover:text-bright-pink transition-colors mb-6 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to ΠΡΑΞΙΣ
            </Link>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center shadow-lg">
                <span className="text-baby-powder font-bold text-lg">Π</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-persian-indigo">ΠΡΑΞΙΣ</span>
                <span className="text-xs text-eggplant font-medium tracking-wider">PRAXIS</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-persian-indigo mb-2">
              Welcome Back, Scholar
            </h2>
            <p className="text-eggplant">
              Continue your journey of excellence
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-persian-indigo mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eggplant w-5 h-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-persian-indigo mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eggplant w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
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
                  className="h-4 w-4 text-bright-pink focus:ring-bright-pink border-eggplant/30 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-eggplant">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="text-persian-indigo hover:text-bright-pink transition-colors font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-persian-indigo to-bright-pink text-baby-powder py-3 px-4 rounded-lg hover:from-bright-pink hover:to-persian-indigo focus:outline-none focus:ring-2 focus:ring-bright-pink focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl"
            >
              {isLoading ? 'Entering ΠΡΑΞΙΣ...' : 'Enter ΠΡΑΞΙΣ'}
            </button>

            <div className="text-center">
              <p className="text-eggplant">
                New to our community?{' '}
                <Link href="/auth/signup" className="text-persian-indigo hover:text-bright-pink transition-colors font-semibold">
                  Begin your journey
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-eggplant bg-celeste/20 p-4 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Crown className="w-4 h-4 mr-2 text-bright-pink" />
              <span className="font-semibold">Demo Credentials</span>
            </div>
            <p>student@praxis.com • company@praxis.com • mentor@praxis.com • admin@praxis.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}