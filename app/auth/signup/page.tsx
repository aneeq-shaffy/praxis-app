'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Mail, Lock, User, Building2, GraduationCap, Users, AlertCircle } from 'lucide-react'

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
                
                <h1 className="swiss-heading-lg mb-2">Join the Academy</h1>
                <p className="swiss-text">Begin your journey of practical excellence</p>
              </div>

              {/* User Type Selection */}
              <div className="mb-8">
                <label className="swiss-label mb-3">
                  Choose your path
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setUserType('student')}
                    className={`p-4 border-2 text-center transition-all ${
                      userType === 'student' 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    <GraduationCap className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Student</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('company')}
                    className={`p-4 border-2 text-center transition-all ${
                      userType === 'company' 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    <Building2 className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Company</span>
                  </button>
                </div>
                
                {/* Mentor Notice */}
                <div className="mt-4 border border-gray-300 p-3">
                  <div className="flex items-start space-x-2">
                    <Users className="w-4 h-4 mt-0.5" />
                    <div className="swiss-text-small">
                      <span className="font-semibold">Mentors:</span> Assigned by companies to guide students through projects
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="swiss-label">
                    {userType === 'company' ? 'Company Name' : 'Full Name'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="swiss-input pl-10"
                      placeholder={userType === 'company' ? 'Enter company name' : 'Enter your full name'}
                    />
                  </div>
                </div>

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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="swiss-input pl-10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {userType === 'student' && (
                  <div>
                    <label htmlFor="organization" className="swiss-label">
                      School/University
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="swiss-input"
                      placeholder="Enter your school or university"
                    />
                  </div>
                )}

                {userType === 'company' && (
                  <>
                    <div>
                      <label htmlFor="industry" className="swiss-label">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="swiss-input"
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
                      <label htmlFor="companySize" className="swiss-label">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="swiss-input"
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
                  <label htmlFor="skills" className="swiss-label">
                    {userType === 'student' ? 'Skills/Interests' : 'Focus Areas'}
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="swiss-input"
                    placeholder={
                      userType === 'student' 
                        ? 'e.g., Web Development, Design, Data Science'
                        : 'e.g., Software Engineering, Product Management, Design'
                    }
                  />
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
                      value={formData.password}
                      onChange={handleInputChange}
                      className="swiss-input pl-10"
                      placeholder="Create a password"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="swiss-label">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="swiss-input pl-10"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                {userType === 'company' && (
                  <div className="border border-gray-300 p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 mt-0.5" />
                      <div className="swiss-text-small">
                        <span className="font-semibold">Company applications require approval.</span> You'll receive an email once your account is reviewed and activated.
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="swiss-btn swiss-btn-primary w-full"
                >
                  {isLoading 
                    ? 'Creating Account...' 
                    : `Join ΠΡΑΞΙΣ as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`
                  }
                </button>

                <div className="text-center">
                  <p className="swiss-text">
                    Already part of our community?{' '}
                    <Link href="/auth/signin" className="font-medium hover:text-black">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}