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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="swiss-nav">
        <div className="swiss-nav-content">
          <Link href="/" className="swiss-logo">
            ΠΡΑΞΙΣ
          </Link>
        </div>
      </nav>

      <div className="swiss-section">
        <div className="swiss-container">
          <div className="max-w-md mx-auto">
            <div className="swiss-card">
              <div className="text-center mb-8">
                <Link href="/" className="swiss-nav-link inline-flex items-center mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to ΠΡΑΞΙΣ
                </Link>
                
                <h1 className="swiss-heading-lg mb-2">Welcome Back</h1>
                <p className="swiss-text">Continue your journey of excellence</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="swiss-label">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="swiss-input pl-10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="swiss-label">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="swiss-input pl-10"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4"
                    />
                    <label htmlFor="remember-me" className="ml-2 swiss-text-small">
                      Remember me
                    </label>
                  </div>

                  <Link href="#" className="swiss-text-small hover:text-black">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="swiss-btn swiss-btn-primary w-full"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>

                <div className="text-center">
                  <p className="swiss-text">
                    New to our community?{' '}
                    <Link href="/auth/signup" className="font-medium hover:text-black">
                      Begin your journey
                    </Link>
                  </p>
                </div>
              </form>

              <div className="mt-8 border border-gray-300 p-4 text-center">
                <h4 className="font-semibold mb-2">Demo Credentials</h4>
                <p className="swiss-text-small">
                  student@praxis.com • company@praxis.com • mentor@praxis.com • admin@praxis.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}