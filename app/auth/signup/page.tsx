'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Mail, Lock, User, Building2, GraduationCap, Users } from 'lucide-react'

export default function SignUpPage() {
  const [userType, setUserType] = useState<'student' | 'company' | 'mentor'>('student')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    skills: '',
    bio: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const type = searchParams.get('type') as 'student' | 'company' | 'mentor'
    if (type && ['student', 'company', 'mentor'].includes(type)) {
      setUserType(type)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    setIsLoading(true)
    
    // Simulate registration
    setTimeout(() => {
      router.push(`/dashboard/${userType}`)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case 'student': return <GraduationCap className="w-5 h-5" />
      case 'company': return <Building2 className="w-5 h-5" />
      case 'mentor': return <Users className="w-5 h-5" />
      default: return <User className="w-5 h-5" />
    }
  }

  const getUserTypeColor = (type: string) => {
    switch (type) {
      case 'student': return 'bg-greek-blue'
      case 'company': return 'bg-olive-green'
      case 'mentor': return 'bg-greek-gold text-greek-blue'
      default: return 'bg-gray-500'
    }
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
              Join PRAXIS
            </h2>
            <p className="text-stone-gray">
              Start your journey of practical learning
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mt-8 mb-6">
            <label className="block text-sm font-medium text-stone-gray mb-3">
              I am a...
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['student', 'company', 'mentor'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    userType === type
                      ? `${getUserTypeColor(type)} text-white border-transparent`
                      : 'border-gray-300 text-stone-gray hover:border-greek-blue'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    {getUserTypeIcon(type)}
                    <span className="text-xs font-medium capitalize">{type}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-gray mb-2">
                {userType === 'company' ? 'Company Name' : 'Full Name'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-5 h-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder={userType === 'company' ? 'Enter company name' : 'Enter your full name'}
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {userType === 'student' && (
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-stone-gray mb-2">
                  School/University
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder="Enter your school or university"
                />
              </div>
            )}

            {userType === 'mentor' && (
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-stone-gray mb-2">
                  Current Company
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder="Enter your current company"
                />
              </div>
            )}

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-stone-gray mb-2">
                {userType === 'student' ? 'Skills/Interests' : userType === 'company' ? 'Industry' : 'Expertise Areas'}
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                placeholder={
                  userType === 'student' 
                    ? 'e.g., Web Development, Design, Marketing'
                    : userType === 'company'
                    ? 'e.g., Technology, Healthcare, Finance'
                    : 'e.g., Software Engineering, Product Management'
                }
              />
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
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-stone-gray mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-5 h-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${getUserTypeColor(userType)} hover:opacity-90`}
            >
              {isLoading ? 'Creating Account...' : `Join as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
            </button>

            <div className="text-center">
              <p className="text-stone-gray">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-greek-blue hover:text-greek-gold transition-colors font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}