'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Mail, Lock, User, Building2, GraduationCap, Users, Crown, AlertCircle } from 'lucide-react'

export default function SignUpPage() {
  const [userType, setUserType] = useState<'student' | 'company'>('student')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    skills: '',
    bio: '',
    industry: '',
    companySize: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const type = searchParams.get('type') as 'student' | 'company'
    if (type && ['student', 'company'].includes(type)) {
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
      if (userType === 'company') {
        // Companies need approval
        router.push('/auth/company-pending')
      } else {
        router.push(`/dashboard/${userType}`)
      }
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case 'student': return <GraduationCap className="w-5 h-5" />
      case 'company': return <Building2 className="w-5 h-5" />
      default: return <User className="w-5 h-5" />
    }
  }

  const getUserTypeGradient = (type: string, isActive: boolean) => {
    if (isActive) {
      switch (type) {
        case 'student': return 'bg-gradient-to-br from-persian-indigo to-bright-pink text-baby-powder'
        case 'company': return 'bg-gradient-to-br from-bright-pink to-celeste text-baby-powder'
        default: return 'bg-gradient-to-br from-celeste to-persian-indigo text-baby-powder'
      }
    }
    return 'border-2 border-eggplant/30 text-eggplant hover:border-bright-pink hover:text-persian-indigo'
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
              Join the Academy
            </h2>
            <p className="text-eggplant">
              Begin your journey of practical excellence
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mt-8 mb-6">
            <label className="block text-sm font-medium text-persian-indigo mb-3">
              Choose your path...
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['student', 'company'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`p-4 rounded-lg transition-all duration-300 ${getUserTypeGradient(type, userType === type)} shadow-lg hover:shadow-xl`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {getUserTypeIcon(type)}
                    <span className="text-sm font-semibold capitalize">{type}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Mentor Notice */}
            <div className="mt-4 bg-eggplant/10 border border-eggplant/20 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Users className="w-4 h-4 text-eggplant mt-0.5" />
                <div className="text-xs text-eggplant">
                  <span className="font-semibold">Mentors:</span> Assigned by companies to guide students through projects
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-persian-indigo mb-2">
                {userType === 'company' ? 'Company Name' : 'Full Name'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eggplant w-5 h-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  placeholder={userType === 'company' ? 'Enter company name' : 'Enter your full name'}
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {userType === 'student' && (
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-persian-indigo mb-2">
                  School/University
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  placeholder="Enter your school or university"
                />
              </div>
            )}

            {userType === 'company' && (
              <>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-persian-indigo mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-persian-indigo mb-2">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-persian-indigo mb-2">
                {userType === 'student' ? 'Skills/Interests' : 'Focus Areas'}
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                placeholder={
                  userType === 'student' 
                    ? 'e.g., Web Development, Design, Data Science'
                    : 'e.g., Software Engineering, Product Management, Design'
                }
              />
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
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-persian-indigo mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eggplant w-5 h-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 w-full px-3 py-3 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {userType === 'company' && (
              <div className="bg-bright-pink/10 border border-bright-pink/20 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-bright-pink mt-0.5" />
                  <div className="text-xs text-persian-indigo">
                    <span className="font-semibold">Company applications require approval.</span> You'll receive an email once your account is reviewed and activated.
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-baby-powder py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl ${
                userType === 'student' 
                  ? 'bg-gradient-to-r from-persian-indigo to-bright-pink hover:from-bright-pink hover:to-persian-indigo' 
                  : 'bg-gradient-to-r from-bright-pink to-celeste hover:from-celeste hover:to-bright-pink'
              }`}
            >
              {isLoading 
                ? 'Creating Account...' 
                : `Join ΠΡΑΞΙΣ as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`
              }
            </button>

            <div className="text-center">
              <p className="text-eggplant">
                Already part of our community?{' '}
                <Link href="/auth/signin" className="text-persian-indigo hover:text-bright-pink transition-colors font-semibold">
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