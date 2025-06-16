import Link from 'next/link'
import { ArrowRight, Users, Building2, GraduationCap, Target, Shield, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Swiss Navigation */}
      <nav className="swiss-nav">
        <div className="swiss-nav-content">
          <Link href="/" className="swiss-logo">
            ΠΡΑΞΙΣ
          </Link>
          <div className="hidden md:flex swiss-nav-links">
            <Link href="#features" className="swiss-nav-link">
              Features
            </Link>
            <Link href="#how-it-works" className="swiss-nav-link">
              How It Works
            </Link>
            <Link href="#about" className="swiss-nav-link">
              About
            </Link>
            <Link href="/auth/signin" className="swiss-nav-link font-medium">
              Sign In
            </Link>
            <Link href="/auth/signup" className="swiss-btn swiss-btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Rule of Thirds Layout */}
      <section className="swiss-section" style={{ paddingTop: '110px', paddingBottom: '110px' }}>
        <div className="swiss-container">
          <div className="thirds-grid-2x3 items-center">
            <div>
              <h1 className="swiss-heading-xl mb-8">
                Where Classical Wisdom<br />
                Meets Modern Innovation
              </h1>
              <p className="swiss-text mb-6 text-xl leading-relaxed">
                Connect students with industry mentors for transformative real-world experience. 
                Bridge the eternal gap between theoretical knowledge and practical mastery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup" className="swiss-btn swiss-btn-primary inline-flex items-center justify-center">
                  Begin Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="#how-it-works" className="swiss-btn">
                  Discover More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 border-2 border-black flex items-center justify-center">
                <span className="text-6xl font-serif">Π</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-container">
          <div className="text-center swiss-whitespace-xl">
            <h2 className="swiss-heading-lg mb-4">
              Three Pillars of Excellence
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="swiss-text max-w-3xl mx-auto">
              Whether you seek wisdom as a student, offer opportunities as a company, 
              or share knowledge as a mentor, ΠΡΑΞΙΣ unites you in the pursuit of excellence.
            </p>
          </div>
          
          <div className="thirds-grid">
            {/* Students */}
            <div className="swiss-card text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="swiss-heading-md">Students</h3>
              <p className="swiss-text mb-6">
                Embark on a transformative journey of practical learning. Build your portfolio 
                while gaining invaluable mentorship from industry leaders.
              </p>
              <div className="border border-gray-300 p-4 mb-6 text-left">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Gamified Learning Experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Achievement System
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Expert Mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Real Project Portfolio
                  </li>
                </ul>
              </div>
              <Link href="/auth/signup?type=student" className="swiss-btn w-full">
                Join as Student
              </Link>
            </div>

            {/* Companies */}
            <div className="swiss-card text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="swiss-heading-md">Companies</h3>
              <p className="swiss-text mb-6">
                Discover exceptional talent while providing meaningful opportunities. 
                Build your future workforce through strategic mentorship programs.
              </p>
              <div className="border border-gray-300 p-4 mb-6 text-left">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Talent Pipeline
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Project-Based Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Brand Enhancement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Recruitment Intelligence
                  </li>
                </ul>
              </div>
              <Link href="/auth/signup?type=company" className="swiss-btn w-full">
                Join as Company
              </Link>
            </div>

            {/* Mentors */}
            <div className="swiss-card text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="swiss-heading-md">Mentors</h3>
              <p className="swiss-text mb-6">
                Share your wisdom and shape the next generation of professionals. 
                Create lasting impact while expanding your professional network.
              </p>
              <div className="border border-gray-300 p-4 mb-6 text-left">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Expert Recognition
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Student Guidance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Network Expansion
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    Legacy Building
                  </li>
                </ul>
              </div>
              <div className="border border-gray-300 p-3 text-center text-sm text-gray-600">
                Assigned by Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="swiss-section">
        <div className="swiss-container">
          <div className="text-center swiss-whitespace-xl">
            <h2 className="swiss-heading-lg mb-4">
              The ΠΡΑΞΙΣ Method
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="swiss-text max-w-3xl mx-auto">
              Our platform orchestrates meaningful connections through a time-tested approach 
              that honors both classical wisdom and modern innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="swiss-heading-md">Initiation</h3>
              <p className="swiss-text">Create your profile and define your path in the ΠΡΑΞΙΣ ecosystem</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="swiss-heading-md">Synthesis</h3>
              <p className="swiss-text">Our intelligent system creates perfect matches based on skills and aspirations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="swiss-heading-md">Collaboration</h3>
              <p className="swiss-text">Engage in meaningful projects with expert guidance and peer support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-xl">4</span>
              </div>
              <h3 className="swiss-heading-md">Mastery</h3>
              <p className="swiss-text">Achieve excellence through continuous learning and professional growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="swiss-section bg-gray-50">
        <div className="swiss-container">
          <div className="text-center swiss-whitespace-xl">
            <h2 className="swiss-heading-lg mb-4">
              Platform Excellence
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="swiss-text max-w-3xl mx-auto">
              Crafted with the precision of classical architecture and the innovation of modern technology
            </p>
          </div>

          <div className="thirds-grid">
            <div className="swiss-card">
              <div className="w-12 h-12 border border-black flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="swiss-heading-md">Intelligent Matching</h3>
              <p className="swiss-text">Advanced algorithms create perfect synergies between students, mentors, and projects based on skills, goals, and compatibility.</p>
            </div>
            
            <div className="swiss-card">
              <div className="w-12 h-12 border border-black flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="swiss-heading-md">Fortress Security</h3>
              <p className="swiss-text">Enterprise-grade security architecture protects all interactions, data, and intellectual property with unwavering vigilance.</p>
            </div>
            
            <div className="swiss-card">
              <div className="w-12 h-12 border border-black flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="swiss-heading-md">Live Collaboration</h3>
              <p className="swiss-text">Real-time project management, communication tools, and progress tracking keep all participants perfectly synchronized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black py-16">
        <div className="swiss-container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="swiss-logo mb-6">ΠΡΑΞΙΣ</div>
              <p className="swiss-text-small">
                Bridging the eternal gap between theoretical knowledge and practical mastery 
                through the wisdom of mentorship.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-black transition-colors">For Students</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">For Companies</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">For Mentors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-black transition-colors">Knowledge Center</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Insights</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-black transition-colors">About ΠΡΑΞΙΣ</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 ΠΡΑΞΙΣ. All rights reserved. Crafted with classical wisdom and modern innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}