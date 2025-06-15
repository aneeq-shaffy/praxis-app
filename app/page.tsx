import Link from 'next/link'
import { ArrowRight, Users, Building2, GraduationCap, Target, Shield, Zap, Crown, Award, BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-baby-powder">
      {/* Navigation */}
      <nav className="bg-baby-powder/90 backdrop-blur-sm border-b border-eggplant/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-persian-indigo rounded-full flex items-center justify-center shadow-lg">
                <span className="text-baby-powder font-bold text-lg">Π</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-persian-indigo">ΠΡΑΞΙΣ</span>
                <span className="text-xs text-eggplant font-medium tracking-wider">PRAXIS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-eggplant hover:text-persian-indigo transition-colors font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-eggplant hover:text-persian-indigo transition-colors font-medium">
                How It Works
              </Link>
              <Link href="#about" className="text-eggplant hover:text-persian-indigo transition-colors font-medium">
                About
              </Link>
              <Link href="/auth/signin" className="text-persian-indigo hover:text-bright-pink transition-colors font-semibold">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-bright-pink text-baby-powder px-6 py-2 rounded-lg hover:bg-persian-indigo transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-baby-powder py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-classical-pattern opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-celeste/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-bright-pink/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8 animate-float">
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-2">
                ΠΡΑΞΙΣ
              </h1>
              <div className="w-32 h-1 bg-celeste mx-auto rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl mb-4 opacity-90 font-medium">
              Where Classical Wisdom Meets Modern Innovation
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-4xl mx-auto leading-relaxed">
              Connect students with industry mentors for transformative real-world experience. 
              Bridge the eternal gap between theoretical knowledge and practical mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-celeste text-persian-indigo px-8 py-4 rounded-lg font-bold hover:bg-baby-powder transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="border-2 border-baby-powder text-baby-powder px-8 py-4 rounded-lg font-semibold hover:bg-baby-powder hover:text-persian-indigo transition-all duration-300 shadow-lg">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-24 bg-baby-powder relative">
        <div className="absolute inset-0 bg-marble-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-persian-indigo mb-6">
              Three Pillars of Excellence
            </h2>
            <div className="w-24 h-1 bg-bright-pink mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-eggplant max-w-4xl mx-auto leading-relaxed">
              Whether you seek wisdom as a student, offer opportunities as a company, 
              or share knowledge as a mentor, ΠΡΑΞΙΣ unites you in the pursuit of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="neoclassical-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="w-10 h-10 text-baby-powder" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-persian-indigo mb-4">Students</h3>
              <p className="text-eggplant mb-6 leading-relaxed">
                Embark on a transformative journey of practical learning. Build your portfolio 
                while gaining invaluable mentorship from industry leaders.
              </p>
              <div className="bg-celeste/20 rounded-lg p-4 mb-6">
                <ul className="text-left text-persian-indigo space-y-2 font-medium">
                  <li className="flex items-center"><Crown className="w-4 h-4 mr-2 text-bright-pink" /> Gamified Learning Experience</li>
                  <li className="flex items-center"><Award className="w-4 h-4 mr-2 text-bright-pink" /> Achievement System</li>
                  <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-bright-pink" /> Expert Mentorship</li>
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-bright-pink" /> Real Project Portfolio</li>
                </ul>
              </div>
              <Link href="/auth/signup?type=student" className="bg-persian-indigo text-baby-powder px-6 py-3 rounded-lg hover:bg-bright-pink transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-xl">
                Join as Student
              </Link>
            </div>

            {/* Companies */}
            <div className="neoclassical-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-celeste rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building2 className="w-10 h-10 text-baby-powder" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-persian-indigo mb-4">Companies</h3>
              <p className="text-eggplant mb-6 leading-relaxed">
                Discover exceptional talent while providing meaningful opportunities. 
                Build your future workforce through strategic mentorship programs.
              </p>
              <div className="bg-bright-pink/10 rounded-lg p-4 mb-6">
                <ul className="text-left text-persian-indigo space-y-2 font-medium">
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-bright-pink" /> Talent Pipeline</li>
                  <li className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-bright-pink" /> Project-Based Collaboration</li>
                  <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-bright-pink" /> Brand Enhancement</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-bright-pink" /> Recruitment Intelligence</li>
                </ul>
              </div>
              <Link href="/auth/signup?type=company" className="bg-bright-pink text-baby-powder px-6 py-3 rounded-lg hover:bg-persian-indigo transition-all duration-300 inline-block font-semibold shadow-lg hover:shadow-xl">
                Join as Company
              </Link>
            </div>

            {/* Mentors */}
            <div className="neoclassical-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-celeste to-persian-indigo rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-baby-powder" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-persian-indigo mb-4">Mentors</h3>
              <p className="text-eggplant mb-6 leading-relaxed">
                Share your wisdom and shape the next generation of professionals. 
                Create lasting impact while expanding your professional network.
              </p>
              <div className="bg-persian-indigo/10 rounded-lg p-4 mb-6">
                <ul className="text-left text-persian-indigo space-y-2 font-medium">
                  <li className="flex items-center"><Crown className="w-4 h-4 mr-2 text-bright-pink" /> Expert Recognition</li>
                  <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-bright-pink" /> Student Guidance</li>
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-bright-pink" /> Network Expansion</li>
                  <li className="flex items-center"><Award className="w-4 h-4 mr-2 text-bright-pink" /> Legacy Building</li>
                </ul>
              </div>
              <div className="bg-eggplant/20 text-eggplant px-6 py-3 rounded-lg font-semibold">
                Assigned by Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-baby-powder to-celeste/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-persian-indigo mb-6">
              The ΠΡΑΞΙΣ Method
            </h2>
            <div className="w-24 h-1 bg-bright-pink mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-eggplant max-w-4xl mx-auto leading-relaxed">
              Our platform orchestrates meaningful connections through a time-tested approach 
              that honors both classical wisdom and modern innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-baby-powder font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Initiation</h3>
              <p className="text-eggplant leading-relaxed">Create your profile and define your path in the ΠΡΑΞΙΣ ecosystem</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-celeste rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-baby-powder font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Synthesis</h3>
              <p className="text-eggplant leading-relaxed">Our intelligent system creates perfect matches based on skills and aspirations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-celeste to-persian-indigo rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-baby-powder font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Collaboration</h3>
              <p className="text-eggplant leading-relaxed">Engage in meaningful projects with expert guidance and peer support</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-baby-powder font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Mastery</h3>
              <p className="text-eggplant leading-relaxed">Achieve excellence through continuous learning and professional growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-baby-powder relative">
        <div className="absolute inset-0 bg-classical-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-persian-indigo mb-6">
              Platform Excellence
            </h2>
            <div className="w-24 h-1 bg-bright-pink mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-eggplant max-w-4xl mx-auto leading-relaxed">
              Crafted with the precision of classical architecture and the innovation of modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="marble-card p-8 rounded-xl group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-baby-powder" />
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Intelligent Matching</h3>
              <p className="text-eggplant leading-relaxed">Advanced algorithms create perfect synergies between students, mentors, and projects based on skills, goals, and compatibility.</p>
            </div>
            
            <div className="marble-card p-8 rounded-xl group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-bright-pink to-celeste rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-baby-powder" />
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Fortress Security</h3>
              <p className="text-eggplant leading-relaxed">Enterprise-grade security architecture protects all interactions, data, and intellectual property with unwavering vigilance.</p>
            </div>
            
            <div className="marble-card p-8 rounded-xl group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-celeste to-persian-indigo rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-baby-powder" />
              </div>
              <h3 className="text-xl font-serif font-bold text-persian-indigo mb-3">Live Collaboration</h3>
              <p className="text-eggplant leading-relaxed">Real-time project management, communication tools, and progress tracking keep all participants perfectly synchronized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-persian-indigo text-baby-powder py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-bright-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-baby-powder font-bold text-lg">Π</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold">ΠΡΑΞΙΣ</span>
                  <span className="text-xs text-celeste font-medium tracking-wider">PRAXIS</span>
                </div>
              </div>
              <p className="text-celeste/80 leading-relaxed">
                Bridging the eternal gap between theoretical knowledge and practical mastery 
                through the wisdom of mentorship.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-celeste/80">
                <li><Link href="#" className="hover:text-bright-pink transition-colors">For Students</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">For Companies</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">For Mentors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-celeste/80">
                <li><Link href="#" className="hover:text-bright-pink transition-colors">Knowledge Center</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">Insights</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-celeste/80">
                <li><Link href="#" className="hover:text-bright-pink transition-colors">About ΠΡΑΞΙΣ</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-bright-pink transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-eggplant/30 mt-12 pt-8 text-center text-celeste/60">
            <p>&copy; 2025 ΠΡΑΞΙΣ. All rights reserved. Crafted with classical wisdom and modern innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}