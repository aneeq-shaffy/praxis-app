'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { AuthService } from '../../../lib/auth/authService'
import TechCard from '../../../components/ui/TechCard'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const { role } = await AuthService.signIn({ email, password })
      
      // Route based on role
      switch (role) {
        case 'student':
          router.push('/dashboard/student')
          break
        case 'company':
          router.push('/dashboard/company')
          break
        case 'mentor':
          router.push('/dashboard/mentor')
          break
        case 'admin':
          router.push('/dashboard/admin')
          break
        default:
          router.push('/dashboard/student')
      }
    } catch (error) {
      // Error handled by AuthService
    } finally {
      setIsLoading(false)
    }
  }

  const demoCredentials = [
    { email: 'student@praxis.com', role: 'Student' },
    { email: 'company@praxis.com', role: 'Company' },
    { email: 'mentor@praxis.com', role: 'Mentor' },
    { email: 'admin@praxis.com', role: 'Admin' }
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Navigation */}
      <nav className="tech-nav">
        <div className="tech-nav-content">
          <Link href="/" className="tech-logo">
            ΠΡΑΞΙΣ
          </Link>
        </div>
      </nav>

      <div className="tech-section relative z-10">
        <div className="tech-container">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TechCard>
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Link href="/" className="tech-nav-link inline-flex items-center mb-6">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Return to ΠΡΑΞΙΣ
                    </Link>
                  </motion.div>
                  
                  <motion.h1 
                    className="tech-heading-lg mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Welcome Back
                  </motion.h1>
                  <motion.p 
                    className="tech-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Continue your journey of excellence
                  </motion.p>
                </div>

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <label htmlFor="email" className="tech-label">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chrome w-5 h-5" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="tech-input pl-10"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="tech-label">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chrome w-5 h-5" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="tech-input pl-10 pr-10"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chrome hover:text-black transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-black focus:ring-black border-silver rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 tech-text-small">
                        Remember me
                      </label>
                    </div>

                    <Link href="#" className="tech-text-small hover:text-black transition-colors">
                      Forgot password?
                    </Link>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <LoadingSpinner size="sm" className="mr-2" />
                        Signing In...
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </motion.button>

                  <div className="text-center">
                    <p className="tech-text">
                      New to our community?{' '}
                      <Link href="/auth/signup" className="font-medium hover:text-black transition-colors">
                        Begin your journey
                      </Link>
                    </p>
                  </div>
                </motion.form>

                <motion.div 
                  className="mt-8 tech-card-dark p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="font-semibold mb-3 text-silver">Demo Credentials</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {demoCredentials.map((cred) => (
                      <motion.button
                        key={cred.email}
                        onClick={() => {
                          setEmail(cred.email)
                          setPassword('demo123')
                        }}
                        className="text-xs p-2 bg-silver/20 hover:bg-silver/30 rounded transition-colors text-silver"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {cred.role}
                      </motion.button>
                    ))}
                  </div>
                  <p className="tech-text-small text-silver/70 mt-2">
                    Password: demo123
                  </p>
                </motion.div>
              </TechCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}