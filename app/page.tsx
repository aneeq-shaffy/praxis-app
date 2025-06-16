'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Users, Building2, GraduationCap, Target, Shield, Zap, Star, Award, BookOpen } from 'lucide-react'
import AnimatedBackground from '../components/ui/AnimatedBackground'
import TechCard from '../components/ui/TechCard'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="tech-nav">
        <div className="tech-nav-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="tech-logo">
              ΠΡΑΞΙΣ
            </Link>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex tech-nav-links"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="#features" className="tech-nav-link">
              Features
            </Link>
            <Link href="#how-it-works" className="tech-nav-link">
              How It Works
            </Link>
            <Link href="#about" className="tech-nav-link">
              About
            </Link>
            <Link href="/auth/signin" className="tech-nav-link font-medium">
              Sign In
            </Link>
            <Link href="/auth/signup" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="tech-section relative z-10" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="tech-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="tech-heading-xl mb-6"
                style={{ y }}
              >
                Where Classical Wisdom<br />
                Meets Modern Innovation
              </motion.h1>
              
              <motion.p 
                className="text-xl text-chrome mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect students with industry mentors for transformative real-world experience. 
                Bridge the eternal gap between theoretical knowledge and practical mastery.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/auth/signup" className="btn-primary group">
                  Begin Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#how-it-works" className="btn-ghost">
                  Discover More
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="w-80 h-80 tech-card flex items-center justify-center floating-element"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-6xl font-mono font-bold bg-gradient-metallic bg-clip-text text-transparent">
                  Π
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="tech-section bg-platinum relative z-10">
        <div className="tech-container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="tech-heading-lg mb-4">
              Three Pillars of Excellence
            </h2>
            <div className="w-16 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="tech-text max-w-3xl mx-auto text-lg">
              Whether you seek wisdom as a student, offer opportunities as a company, 
              or share knowledge as a mentor, ΠΡΑΞΙΣ unites you in the pursuit of excellence.
            </p>
          </motion.div>
          
          <div className="tech-grid tech-grid-3">
            {/* Students */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TechCard className="text-center h-full">
                <motion.div 
                  className="w-16 h-16 tech-card flex items-center justify-center mx-auto mb-6 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="w-8 h-8" />
                </motion.div>
                <h3 className="tech-heading-md">Students</h3>
                <p className="tech-text mb-6">
                  Embark on a transformative journey of practical learning. Build your portfolio 
                  while gaining invaluable mentorship from industry leaders.
                </p>
                <div className="tech-card-dark p-4 mb-6 text-left">
                  <ul className="space-y-2 text-sm text-silver">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-silver" />
                      Gamified Learning Experience
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-silver" />
                      Achievement System
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-silver" />
                      Expert Mentorship
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-silver" />
                      Real Project Portfolio
                    </li>
                  </ul>
                </div>
                <Link href="/auth/signup?type=student" className="btn-metallic w-full">
                  Join as Student
                </Link>
              </TechCard>
            </motion.div>

            {/* Companies */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TechCard dark className="text-center h-full">
                <motion.div 
                  className="w-16 h-16 tech-card flex items-center justify-center mx-auto mb-6 glow-effect"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Building2 className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="tech-heading-md text-white">Companies</h3>
                <p className="text-silver mb-6">
                  Discover exceptional talent while providing meaningful opportunities. 
                  Build your future workforce through strategic mentorship programs.
                </p>
                <div className="tech-card p-4 mb-6 text-left">
                  <ul className="space-y-2 text-sm text-black">
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-black" />
                      Talent Pipeline
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-black" />
                      Project-Based Collaboration
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-black" />
                      Brand Enhancement
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-black" />
                      Recruitment Intelligence
                    </li>
                  </ul>
                </div>
                <Link href="/auth/signup?type=company" className="btn-primary w-full">
                  Join as Company
                </Link>
              </TechCard>
            </motion.div>

            {/* Mentors */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TechCard className="text-center h-full">
                <motion.div 
                  className="w-16 h-16 tech-card-dark flex items-center justify-center mx-auto mb-6 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-8 h-8 text-silver" />
                </motion.div>
                <h3 className="tech-heading-md">Mentors</h3>
                <p className="tech-text mb-6">
                  Share your wisdom and shape the next generation of professionals. 
                  Create lasting impact while expanding your professional network.
                </p>
                <div className="tech-card p-4 mb-6 text-left">
                  <ul className="space-y-2 text-sm text-black">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-black" />
                      Expert Recognition
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-black" />
                      Student Guidance
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-black" />
                      Network Expansion
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-black" />
                      Legacy Building
                    </li>
                  </ul>
                </div>
                <div className="tech-card-dark p-3 text-center text-sm text-silver">
                  Assigned by Companies
                </div>
              </TechCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="tech-section relative z-10">
        <div className="tech-container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="tech-heading-lg mb-4">
              The ΠΡΑΞΙΣ Method
            </h2>
            <div className="w-16 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="tech-text max-w-3xl mx-auto text-lg">
              Our platform orchestrates meaningful connections through a time-tested approach 
              that honors both classical wisdom and modern innovation.
            </p>
          </motion.div>

          <div className="tech-grid tech-grid-4">
            {[
              { number: '1', title: 'Initiation', description: 'Create your profile and define your path in the ΠΡΑΞΙΣ ecosystem' },
              { number: '2', title: 'Synthesis', description: 'Our intelligent system creates perfect matches based on skills and aspirations' },
              { number: '3', title: 'Collaboration', description: 'Engage in meaningful projects with expert guidance and peer support' },
              { number: '4', title: 'Mastery', description: 'Achieve excellence through continuous learning and professional growth' }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 tech-card flex items-center justify-center mx-auto mb-6 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="font-bold text-xl font-mono">{step.number}</span>
                </motion.div>
                <h3 className="tech-heading-md">{step.title}</h3>
                <p className="tech-text">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="tech-section bg-platinum relative z-10">
        <div className="tech-container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="tech-heading-lg mb-4">
              Platform Excellence
            </h2>
            <div className="w-16 h-1 bg-gradient-metallic mx-auto rounded-full mb-6"></div>
            <p className="tech-text max-w-3xl mx-auto text-lg">
              Crafted with the precision of classical architecture and the innovation of modern technology
            </p>
          </motion.div>

          <div className="tech-grid tech-grid-3">
            {[
              { icon: Target, title: 'Intelligent Matching', description: 'Advanced algorithms create perfect synergies between students, mentors, and projects based on skills, goals, and compatibility.' },
              { icon: Shield, title: 'Fortress Security', description: 'Enterprise-grade security architecture protects all interactions, data, and intellectual property with unwavering vigilance.' },
              { icon: Zap, title: 'Live Collaboration', description: 'Real-time project management, communication tools, and progress tracking keep all participants perfectly synchronized.' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TechCard>
                  <motion.div 
                    className="w-12 h-12 tech-card-dark flex items-center justify-center mb-6 glow-effect"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-silver" />
                  </motion.div>
                  <h3 className="tech-heading-md">{feature.title}</h3>
                  <p className="tech-text">{feature.description}</p>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-silver py-16 relative z-10">
        <div className="tech-container">
          <div className="tech-grid tech-grid-4">
            <div>
              <div className="tech-logo mb-6">ΠΡΑΞΙΣ</div>
              <p className="tech-text-small">
                Bridging the eternal gap between theoretical knowledge and practical mastery 
                through the wisdom of mentorship.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 tech-text-small">
                <li><Link href="#" className="hover:text-black transition-colors">For Students</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">For Companies</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">For Mentors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 tech-text-small">
                <li><Link href="#" className="hover:text-black transition-colors">Knowledge Center</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Insights</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 tech-text-small">
                <li><Link href="#" className="hover:text-black transition-colors">About ΠΡΑΞΙΣ</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-silver mt-12 pt-8 text-center tech-text-small">
            <p>&copy; 2025 ΠΡΑΞΙΣ. All rights reserved. Crafted with classical wisdom and modern innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}