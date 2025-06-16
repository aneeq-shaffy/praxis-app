import Link from 'next/link'
import { ArrowRight, Users, Building2, GraduationCap, Target, Shield, Zap, Crown, Award, BookOpen, Star, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Navigation */}
      <nav className="metallic-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gold-card rounded-full flex items-center justify-center shadow-gold animate-glow">
                <span className="text-obsidian font-bold text-lg">Π</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold gold-text text-shadow-gold">ΠΡΑΞΙΣ</span>
                <span className="text-xs text-silver font-medium tracking-wider">PRAXIS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-silver hover:text-gold transition-colors font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-silver hover:text-gold transition-colors font-medium">
                How It Works
              </Link>
              <Link href="#about" className="text-silver hover:text-gold transition-colors font-medium">
                About
              </Link>
              <Link href="/auth/signin" className="text-gold hover:text-gold-light transition-colors font-semibold">
                Sign In
              </Link>
              <Link href="/auth/signup" className="metallic-button text-obsidian px-6 py-2 rounded-lg font-semibold">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-metallic text-platinum py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-silver/20 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-float">
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-2 gold-text text-shadow-gold">
                ΠΡΑΞΙΣ
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-gold via-silver to-gold mx-auto rounded-full shimmer-effect"></div>
            </div>
            <p className="text-xl md:text-2xl mb-4 text-silver font-medium text-shadow-silver">
              Where Classical Wisdom Meets Modern Innovation
            </p>
            <p className="text-lg md:text-xl mb-8 text-chrome max-w-4xl mx-auto leading-relaxed">
              Connect students with industry mentors for transformative real-world experience. 
              Bridge the eternal gap between theoretical knowledge and practical mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="metallic-button text-obsidian px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="border-2 border-silver text-silver px-8 py-4 rounded-lg font-semibold hover:bg-silver hover:text-obsidian transition-all duration-300 shadow-silver">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-24 bg-gradient-to-br from-obsidian via-gunmetal to-charcoal relative">
        <div className="absolute inset-0 bg-metallic-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold gold-text mb-6 text-shadow-gold">
              Three Pillars of Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold via-silver to-gold mx-auto rounded-full mb-6 shimmer-effect"></div>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
              Whether you seek wisdom as a student, offer opportunities as a company, 
              or share knowledge as a mentor, ΠΡΑΞΙΣ unites you in the pursuit of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="metallic-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-metallic shimmer-effect">
              <div className="w-20 h-20 gold-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold animate-glow">
                <GraduationCap className="w-10 h-10 text-obsidian" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-obsidian mb-4">Students</h3>
              <p className="text-charcoal mb-6 leading-relaxed">
                Embark on a transformative journey of practical learning. Build your portfolio 
                while gaining invaluable mentorship from industry leaders.
              </p>
              <div className="silver-card rounded-lg p-4 mb-6">
                <ul className="text-left text-obsidian space-y-2 font-medium">
                  <li className="flex items-center"><Crown className="w-4 h-4 mr-2 text-gold" /> Gamified Learning Experience</li>
                  <li className="flex items-center"><Award className="w-4 h-4 mr-2 text-gold" /> Achievement System</li>
                  <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-gold" /> Expert Mentorship</li>
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-gold" /> Real Project Portfolio</li>
                </ul>
              </div>
              <Link href="/auth/signup?type=student" className="metallic-button text-obsidian px-6 py-3 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300 inline-block">
                Join as Student
              </Link>
            </div>

            {/* Companies */}
            <div className="dark-metallic-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-metallic shimmer-effect">
              <div className="w-20 h-20 silver-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-silver">
                <Building2 className="w-10 h-10 text-obsidian" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-platinum mb-4">Companies</h3>
              <p className="text-silver mb-6 leading-relaxed">
                Discover exceptional talent while providing meaningful opportunities. 
                Build your future workforce through strategic mentorship programs.
              </p>
              <div className="bg-gold/20 rounded-lg p-4 mb-6 border border-gold/30">
                <ul className="text-left text-platinum space-y-2 font-medium">
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-gold" /> Talent Pipeline</li>
                  <li className="flex items-center"><BookOpen className="w-4 h-4 mr-2 text-gold" /> Project-Based Collaboration</li>
                  <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-gold" /> Brand Enhancement</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-gold" /> Recruitment Intelligence</li>
                </ul>
              </div>
              <Link href="/auth/signup?type=company" className="bg-gradient-to-r from-silver to-chrome text-obsidian px-6 py-3 rounded-lg font-semibold shadow-silver hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300 inline-block">
                Join as Company
              </Link>
            </div>

            {/* Mentors */}
            <div className="gold-card p-8 rounded-xl text-center group hover:scale-105 transition-all duration-500 hover:shadow-metallic shimmer-effect">
              <div className="w-20 h-20 dark-metallic-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <Users className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-obsidian mb-4">Mentors</h3>
              <p className="text-charcoal mb-6 leading-relaxed">
                Share your wisdom and shape the next generation of professionals. 
                Create lasting impact while expanding your professional network.
              </p>
              <div className="bg-obsidian/20 rounded-lg p-4 mb-6 border border-obsidian/30">
                <ul className="text-left text-obsidian space-y-2 font-medium">
                  <li className="flex items-center"><Crown className="w-4 h-4 mr-2 text-obsidian" /> Expert Recognition</li>
                  <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-obsidian" /> Student Guidance</li>
                  <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-obsidian" /> Network Expansion</li>
                  <li className="flex items-center"><Award className="w-4 h-4 mr-2 text-obsidian" /> Legacy Building</li>
                </ul>
              </div>
              <div className="bg-charcoal/80 text-silver px-6 py-3 rounded-lg font-semibold border border-silver/30">
                Assigned by Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-charcoal via-gunmetal to-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold gold-text mb-6 text-shadow-gold">
              The ΠΡΑΞΙΣ Method
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold via-silver to-gold mx-auto rounded-full mb-6 shimmer-effect"></div>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
              Our platform orchestrates meaningful connections through a time-tested approach 
              that honors both classical wisdom and modern innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 gold-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold animate-glow">
                <span className="text-obsidian font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gold mb-3">Initiation</h3>
              <p className="text-silver leading-relaxed">Create your profile and define your path in the ΠΡΑΞΙΣ ecosystem</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 silver-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-silver">
                <span className="text-obsidian font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-silver mb-3">Synthesis</h3>
              <p className="text-silver leading-relaxed">Our intelligent system creates perfect matches based on skills and aspirations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-bronze to-copper rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <span className="text-platinum font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-bronze mb-3">Collaboration</h3>
              <p className="text-silver leading-relaxed">Engage in meaningful projects with expert guidance and peer support</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 gold-card rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold animate-glow">
                <span className="text-obsidian font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gold mb-3">Mastery</h3>
              <p className="text-silver leading-relaxed">Achieve excellence through continuous learning and professional growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-obsidian relative">
        <div className="absolute inset-0 bg-steel-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold gold-text mb-6 text-shadow-gold">
              Platform Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold via-silver to-gold mx-auto rounded-full mb-6 shimmer-effect"></div>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
              Crafted with the precision of classical architecture and the innovation of modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="metallic-card p-8 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
              <div className="w-16 h-16 gold-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <Target className="w-8 h-8 text-obsidian" />
              </div>
              <h3 className="text-xl font-serif font-bold text-obsidian mb-3">Intelligent Matching</h3>
              <p className="text-charcoal leading-relaxed">Advanced algorithms create perfect synergies between students, mentors, and projects based on skills, goals, and compatibility.</p>
            </div>
            
            <div className="dark-metallic-card p-8 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
              <div className="w-16 h-16 silver-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-silver">
                <Shield className="w-8 h-8 text-obsidian" />
              </div>
              <h3 className="text-xl font-serif font-bold text-platinum mb-3">Fortress Security</h3>
              <p className="text-silver leading-relaxed">Enterprise-grade security architecture protects all interactions, data, and intellectual property with unwavering vigilance.</p>
            </div>
            
            <div className="gold-card p-8 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
              <div className="w-16 h-16 dark-metallic-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                <Zap className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-obsidian mb-3">Live Collaboration</h3>
              <p className="text-charcoal leading-relaxed">Real-time project management, communication tools, and progress tracking keep all participants perfectly synchronized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-obsidian via-gunmetal to-charcoal text-platinum py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 gold-card rounded-full flex items-center justify-center shadow-gold animate-glow">
                  <span className="text-obsidian font-bold text-lg">Π</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold gold-text text-shadow-gold">ΠΡΑΞΙΣ</span>
                  <span className="text-xs text-silver font-medium tracking-wider">PRAXIS</span>
                </div>
              </div>
              <p className="text-silver/80 leading-relaxed">
                Bridging the eternal gap between theoretical knowledge and practical mastery 
                through the wisdom of mentorship.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg text-gold">Platform</h4>
              <ul className="space-y-3 text-silver/80">
                <li><Link href="#" className="hover:text-gold transition-colors">For Students</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">For Companies</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">For Mentors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg text-gold">Resources</h4>
              <ul className="space-y-3 text-silver/80">
                <li><Link href="#" className="hover:text-gold transition-colors">Knowledge Center</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Insights</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4 text-lg text-gold">Company</h4>
              <ul className="space-y-3 text-silver/80">
                <li><Link href="#" className="hover:text-gold transition-colors">About ΠΡΑΞΙΣ</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-gold transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-silver/60">
            <p>&copy; 2025 ΠΡΑΞΙΣ. All rights reserved. Crafted with classical wisdom and modern innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}