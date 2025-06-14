import Link from 'next/link'
import { ArrowRight, Users, Building2, GraduationCap, Target, Shield, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-greek-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Π</span>
              </div>
              <span className="text-2xl font-serif font-bold text-greek-blue">PRAXIS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-stone-gray hover:text-greek-blue transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-stone-gray hover:text-greek-blue transition-colors">
                How It Works
              </Link>
              <Link href="#about" className="text-stone-gray hover:text-greek-blue transition-colors">
                About
              </Link>
              <Link href="/auth/signin" className="text-greek-blue hover:text-greek-gold transition-colors font-medium">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-greek-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-greek-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-float">
              ΠΡΑΞΙΣ
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Where Theory Meets Practice
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
              Connect students with industry mentors for real-world experience. 
              Bridge the gap between academic learning and professional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-greek-gold text-greek-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-greek-blue transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-marble-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-greek-blue mb-4">
              Three Paths to Excellence
            </h2>
            <p className="text-xl text-stone-gray max-w-3xl mx-auto">
              Whether you're a student seeking experience, a company offering opportunities, 
              or a mentor sharing wisdom, PRAXIS connects you with the right community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="marble-card p-8 rounded-xl text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-greek-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-greek-gold transition-colors">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-greek-blue mb-4">Students</h3>
              <p className="text-stone-gray mb-6">
                Gain real-world experience through mentorship and hands-on projects. 
                Build your portfolio while learning from industry professionals.
              </p>
              <ul className="text-left text-stone-gray space-y-2 mb-6">
                <li>• Access to industry mentors</li>
                <li>• Real project experience</li>
                <li>• Portfolio development</li>
                <li>• Career guidance</li>
              </ul>
              <Link href="/auth/signup?type=student" className="bg-greek-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
                Join as Student
              </Link>
            </div>

            {/* Companies */}
            <div className="marble-card p-8 rounded-xl text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-greek-gold transition-colors">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-greek-blue mb-4">Companies</h3>
              <p className="text-stone-gray mb-6">
                Connect with talented students and provide meaningful project opportunities. 
                Build your talent pipeline while giving back to the community.
              </p>
              <ul className="text-left text-stone-gray space-y-2 mb-6">
                <li>• Access to student talent</li>
                <li>• Project-based collaboration</li>
                <li>• Brand visibility</li>
                <li>• Future recruitment</li>
              </ul>
              <Link href="/auth/signup?type=company" className="bg-olive-green text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block">
                Join as Company
              </Link>
            </div>

            {/* Mentors */}
            <div className="marble-card p-8 rounded-xl text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-greek-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-greek-blue transition-colors">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-greek-blue mb-4">Mentors</h3>
              <p className="text-stone-gray mb-6">
                Share your expertise and guide the next generation of professionals. 
                Make a meaningful impact while expanding your network.
              </p>
              <ul className="text-left text-stone-gray space-y-2 mb-6">
                <li>• Share your expertise</li>
                <li>• Guide student projects</li>
                <li>• Expand your network</li>
                <li>• Give back to community</li>
              </ul>
              <Link href="/auth/signup?type=mentor" className="bg-greek-gold text-greek-blue px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors inline-block">
                Join as Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-greek-blue mb-4">
              How PRAXIS Works
            </h2>
            <p className="text-xl text-stone-gray max-w-3xl mx-auto">
              Our platform facilitates meaningful connections between students, companies, and mentors 
              through a structured approach to experiential learning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-greek-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Sign Up</h3>
              <p className="text-stone-gray">Create your profile and specify your role and interests</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-olive-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Match</h3>
              <p className="text-stone-gray">Our algorithm connects you with compatible partners</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-greek-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-greek-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Collaborate</h3>
              <p className="text-stone-gray">Work together on real projects with mentor guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-greek-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Grow</h3>
              <p className="text-stone-gray">Build skills, portfolio, and professional network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-marble-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-greek-blue mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-stone-gray max-w-3xl mx-auto">
              Designed with the wisdom of ancient Greek philosophy and modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="marble-card p-6 rounded-xl">
              <Target className="w-12 h-12 text-greek-blue mb-4" />
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Smart Matching</h3>
              <p className="text-stone-gray">Advanced algorithms match students with mentors and projects based on skills, interests, and goals.</p>
            </div>
            
            <div className="marble-card p-6 rounded-xl">
              <Shield className="w-12 h-12 text-olive-green mb-4" />
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Secure Platform</h3>
              <p className="text-stone-gray">Enterprise-grade security ensures safe collaboration and protects all user data and communications.</p>
            </div>
            
            <div className="marble-card p-6 rounded-xl">
              <Zap className="w-12 h-12 text-greek-gold mb-4" />
              <h3 className="text-xl font-serif font-bold text-greek-blue mb-2">Real-time Collaboration</h3>
              <p className="text-stone-gray">Built-in tools for project management, communication, and progress tracking keep everyone aligned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-greek-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-greek-gold rounded-full flex items-center justify-center">
                  <span className="text-greek-blue font-bold text-sm">Π</span>
                </div>
                <span className="text-2xl font-serif font-bold">PRAXIS</span>
              </div>
              <p className="text-blue-200">
                Bridging the gap between academic learning and professional practice.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="#" className="hover:text-white transition-colors">For Students</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">For Companies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">For Mentors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 PRAXIS. All rights reserved. Built with wisdom and modern technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}