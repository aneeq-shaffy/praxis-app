'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Mail, Lock, User, Building2, GraduationCap, Users, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { AuthService } from '../../../lib/auth/authService'
import TechCard from '../../../components/ui/TechCard'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'

export default function SignUpPage() {
  const [userType, setUserType] = useState<'student' | 'company'>('student')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    major: '',
    graduationYear: new Date().getFullYear() + 1,
    skills: '',
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
    
    try {
      const signUpData = {
        email: formData.email,
        password: formData.password,
        role: userType,
        ...(userType === 'student' ? {
          firstName: formData.firstName,
          lastName: formData.lastName,
          university: formData.university,
          major: formData.major,
          graduationYear: formData.graduationYear,
          skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean)
        } : {
          companyName: formData.companyName,
          industry: formData.industry,
          companySize: formData.companySize
        })
      }

      await AuthService.signUp(signUpData)
      
      if (userType === 'company') {
        router.push('/auth/company-pending')
      } else {
        router.push(`/dashboard/${userType}`)
      }
    } catch (error) {
      // Error handled by AuthService
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'graduationYear' ? parseInt(value) || new Date().getFullYear() + 1 : value
    }))
  }

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
                    Join the Academy
                  </motion.h1>
                  <motion.p 
                    className="tech-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Begin your journey of practical excellence
                  </motion.p>
                </div>

                {/* User Type Selection */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="tech-label mb-3">
                    Choose your path
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {(['student', 'company'] as const).map((type) => (
                      <motion.button
                        key={type}
                        type="button"
                        onClick={() => setUserType(type)}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          userType === type 
                            ? 'border-black bg-black text-white' 
                            : 'border-silver hover:border-black'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {type === 'student' ? (
                          <GraduationCap className="w-6 h-6 mx-auto mb-2" />
                        ) : (
                          <Building2 className="w-6 h-6 mx-auto mb-2" />
                        )}
                        <span className="text-sm font-medium capitalize">{type}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Mentor Notice */}
                  <motion.div 
                    className="mt-4 tech-card-dark p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 mt-0.5 text-silver" />
                      <div className="tech-text-small text-silver">
                        <span className="font-semibold">Mentors:</span> Assigned by companies to guide students through projects
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <AnimatePresence mode="wait">
                    {userType === 'student' ? (
                      <motion.div
                        key="student-fields"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="tech-label">
                              First Name
                            </label>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="tech-input"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="tech-label">
                              Last Name
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="tech-input"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="university" className="tech-label">
                            University
                          </label>
                          <input
                            id="university"
                            name="university"
                            type="text"
                            required
                            value={formData.university}
                            onChange={handleInputChange}
                            className="tech-input"
                            placeholder="MIT"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="major" className="tech-label">
                              Major
                            </label>
                            <input
                              id="major"
                              name="major"
                              type="text"
                              required
                              value={formData.major}
                              onChange={handleInputChange}
                              className="tech-input"
                              placeholder="Computer Science"
                            />
                          </div>
                          <div>
                            <label htmlFor="graduationYear" className="tech-label">
                              Graduation Year
                            </label>
                            <input
                              id="graduationYear"
                              name="graduationYear"
                              type="number"
                              required
                              min={new Date().getFullYear()}
                              max={new Date().getFullYear() + 10}
                              value={formData.graduationYear}
                              onChange={handleInputChange}
                              className="tech-input"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="skills" className="tech-label">
                            Skills (comma-separated)
                          </label>
                          <input
                            id="skills"
                            name="skills"
                            type="text"
                            value={formData.skills}
                            onChange={handleInputChange}
                            className="tech-input"
                            placeholder="React, TypeScript, Python"
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="company-fields"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="companyName" className="tech-label">
                            Company Name
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chrome w-5 h-5" />
                            <input
                              id="companyName"
                              name="companyName"
                              type="text"
                              required
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className="tech-input pl-10"
                              placeholder="TechCorp Solutions"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="industry" className="tech-label">
                            Industry
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="tech-input"
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
                          <label htmlFor="companySize" className="tech-label">
                            Company Size
                          </label>
                          <select
                            id="companySize"
                            name="companySize"
                            required
                            value={formData.companySize}
                            onChange={handleInputChange}
                            className="tech-input"
                          >
                            <option value="">Select size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
                        value={formData.email}
                        onChange={handleInputChange}
                        className="tech-input pl-10"
                        placeholder="john@example.com"
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
                        value={formData.password}
                        onChange={handleInputChange}
                        className="tech-input pl-10 pr-10"
                        placeholder="Create a password"
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

                  <div>
                    <label htmlFor="confirmPassword" className="tech-label">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chrome w-5 h-5" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="tech-input pl-10 pr-10"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chrome hover:text-black transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {userType === 'company' && (
                    <motion.div 
                      className="tech-card-dark p-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 text-silver" />
                        <div className="tech-text-small text-silver">
                          <span className="font-semibold">Company applications require approval.</span> You'll receive an email once your account is reviewed and activated.
                        </div>
                      </div>
                    </motion.div>
                  )}

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
                        Creating Account...
                      </div>
                    ) : (
                      `Join ΠΡΑΞΙΣ as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`
                    )}
                  </motion.button>

                  <div className="text-center">
                    <p className="tech-text">
                      Already part of our community?{' '}
                      <Link href="/auth/signin" className="font-medium hover:text-black transition-colors">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </motion.form>
              </TechCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}