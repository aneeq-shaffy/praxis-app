'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Users, 
  Target, 
  Award, 
  Calendar, 
  MessageSquare, 
  Search,
  Filter,
  Star,
  Clock,
  ArrowRight,
  User,
  Building2,
  Zap,
  Trophy,
  Crown,
  Flame,
  TrendingUp,
  Sparkles
} from 'lucide-react'

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Student XP and Level System
  const studentData = {
    name: 'John Smith',
    level: 'Μαθητής', // Student level in Greek
    xp: 2450,
    nextLevelXP: 3000,
    totalProjects: 3,
    completedProjects: 1,
    achievements: 5,
    streak: 12
  }

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      company: 'TechCorp Solutions',
      mentor: 'Sarah Johnson',
      status: 'In Progress',
      progress: 65,
      deadline: '2025-02-15',
      skills: ['React', 'UI/UX', 'TypeScript'],
      xpReward: 500
    },
    {
      id: 2,
      title: 'Mobile App Development',
      company: 'StartupXYZ',
      mentor: 'Mike Chen',
      status: 'Applied',
      progress: 0,
      deadline: '2025-03-01',
      skills: ['React Native', 'JavaScript', 'API Integration'],
      xpReward: 750
    }
  ]

  const achievements = [
    { id: 1, name: 'Νέος Αρχιτέκτων', description: 'First Project Completed', icon: '🏛️', earned: true },
    { id: 2, name: 'Ζεύς Κεραυνός', description: 'Lightning Fast Learner', icon: '⚡', earned: true },
    { id: 3, name: 'Αθηνά Σοφία', description: 'Wisdom Seeker', icon: '🦉', earned: true },
    { id: 4, name: 'Ήφαιστος Τεχνίτης', description: 'Master Craftsman', icon: '🔨', earned: false },
    { id: 5, name: 'Ερμής Αγγελιαφόρος', description: 'Great Communicator', icon: '📨', earned: true },
  ]

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      rating: 4.9,
      expertise: ['React', 'TypeScript', 'UI/UX'],
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      rating: 4.8,
      expertise: ['Node.js', 'React', 'MongoDB'],
      avatar: 'MC'
    }
  ]

  const availableProjects = [
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      company: 'DataFlow Inc',
      description: 'Build a comprehensive analytics dashboard for business intelligence',
      skills: ['Python', 'React', 'D3.js'],
      duration: '8 weeks',
      difficulty: 'Intermediate',
      xpReward: 800
    },
    {
      id: 4,
      title: 'Social Media Campaign Tool',
      company: 'Marketing Pro',
      description: 'Develop a tool for managing and analyzing social media campaigns',
      skills: ['Vue.js', 'Node.js', 'PostgreSQL'],
      duration: '6 weeks',
      difficulty: 'Beginner',
      xpReward: 600
    }
  ]

  const xpPercentage = (studentData.xp / studentData.nextLevelXP) * 100

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Navigation */}
      <nav className="metallic-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 gold-card rounded-full flex items-center justify-center shadow-gold animate-glow">
                  <span className="text-obsidian font-bold text-sm">Π</span>
                </div>
                <span className="text-2xl font-serif font-bold gold-text text-shadow-gold">ΠΡΑΞΙΣ</span>
              </Link>
              <span className="text-silver">|</span>
              <span className="text-gold font-medium">Student Academy</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-silver hover:text-gold transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 gold-card rounded-full flex items-center justify-center shadow-gold">
                <span className="text-obsidian font-bold text-sm">JS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with XP System */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-serif font-bold gold-text text-shadow-gold mb-2">
                Welcome back, {studentData.name}!
              </h1>
              <p className="text-silver">
                Continue your journey of practical excellence
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-5 h-5 text-gold" />
                <span className="text-lg font-serif font-bold gold-text text-shadow-gold">{studentData.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-gold animate-pulse-gold" />
                <span className="text-sm text-silver">{studentData.streak} day streak</span>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="metallic-card p-4 rounded-xl mb-6 shimmer-effect">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-obsidian">Experience Points</span>
              <span className="text-sm font-bold text-gold">{studentData.xp} / {studentData.nextLevelXP} XP</span>
            </div>
            <div className="w-full bg-charcoal/50 rounded-full h-3 shadow-inset-metallic">
              <div 
                className="xp-bar h-3 rounded-full transition-all duration-500 shimmer-effect"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-charcoal mt-1">
              {studentData.nextLevelXP - studentData.xp} XP until Τεχνίτης (Craftsman)
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="gold-card p-6 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-obsidian">{studentData.totalProjects}</p>
              </div>
              <BookOpen className="w-8 h-8 text-obsidian group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="silver-card p-6 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Mentors</p>
                <p className="text-2xl font-bold text-obsidian">3</p>
              </div>
              <Users className="w-8 h-8 text-obsidian group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="dark-metallic-card p-6 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-silver text-sm">Achievements</p>
                <p className="text-2xl font-bold text-gold">{studentData.achievements}</p>
              </div>
              <Trophy className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="metallic-card p-6 rounded-xl group hover:shadow-metallic transition-all duration-300 shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Total XP</p>
                <p className="text-2xl font-bold text-gold">{studentData.xp}</p>
              </div>
              <Zap className="w-8 h-8 text-gold group-hover:scale-110 transition-transform animate-pulse-gold" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gold/20 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'projects', label: 'My Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'mentors', label: 'My Mentors' },
              { id: 'discover', label: 'Discover Projects' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-silver hover:text-gold hover:border-gold/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Projects */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold mb-4">Current Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="metallic-card p-6 rounded-xl hover:shadow-metallic transition-all duration-300 shimmer-effect">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-obsidian mb-1">{project.title}</h3>
                        <p className="text-charcoal text-sm flex items-center mb-1">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </p>
                        <p className="text-charcoal text-sm flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Mentor: {project.mentor}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Progress' 
                            ? 'bg-gold/20 text-obsidian border border-gold/30'
                            : 'bg-silver/20 text-obsidian border border-silver/30'
                        }`}>
                          {project.status}
                        </span>
                        <div className="flex items-center mt-2 text-xs text-gold">
                          <Zap className="w-3 h-3 mr-1" />
                          {project.xpReward} XP
                        </div>
                      </div>
                    </div>
                    
                    {project.status === 'In Progress' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-charcoal">Progress</span>
                          <span className="text-gold font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-charcoal/30 rounded-full h-2 shadow-inset-metallic">
                          <div 
                            className="xp-bar h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-charcoal">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due {project.deadline}
                      </div>
                      <button className="text-gold hover:text-gold-light transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Achievements */}
              <div className="dark-metallic-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-serif font-semibold text-gold mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="achievement-badge w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gold">{achievement.name}</p>
                        <p className="text-xs text-silver">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="silver-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-serif font-semibold text-obsidian mb-4">Upcoming Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse-gold"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-obsidian">Mentor Check-in</p>
                      <p className="text-xs text-charcoal">Today, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-silver rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-obsidian">Project Review</p>
                      <p className="text-xs text-charcoal">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="gold-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-serif font-semibold text-obsidian mb-4">Your Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-charcoal text-sm">Projects Completed</span>
                    <span className="font-medium text-obsidian">{studentData.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal text-sm">Success Rate</span>
                    <span className="font-medium text-obsidian">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal text-sm">Mentor Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold fill-current" />
                      <span className="font-medium ml-1 text-obsidian">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold gold-text text-shadow-gold mb-2">Hall of Achievements</h2>
              <p className="text-silver">Your journey through the pantheon of excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`p-6 rounded-xl text-center transition-all duration-300 shimmer-effect ${
                  achievement.earned 
                    ? 'gold-card hover:shadow-metallic hover:scale-105' 
                    : 'dark-metallic-card opacity-60 grayscale'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl ${
                    achievement.earned 
                      ? 'achievement-badge' 
                      : 'bg-charcoal/50'
                  }`}>
                    {achievement.icon}
                  </div>
                  <h3 className={`font-serif font-bold mb-2 ${achievement.earned ? 'text-obsidian' : 'text-silver'}`}>
                    {achievement.name}
                  </h3>
                  <p className={`text-sm ${achievement.earned ? 'text-charcoal' : 'text-silver/70'}`}>
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <div className="mt-3 flex items-center justify-center text-xs text-gold">
                      <Award className="w-3 h-3 mr-1" />
                      Earned
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs with similar metallic styling... */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold">My Projects</h2>
              <button className="metallic-button text-obsidian px-4 py-2 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300">
                Apply to New Project
              </button>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="metallic-card p-6 rounded-xl hover:shadow-metallic transition-all duration-300 shimmer-effect">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-charcoal">
                        <span className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {project.mentor}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Due {project.deadline}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Progress' 
                          ? 'bg-gold/20 text-obsidian border border-gold/30'
                          : 'bg-silver/20 text-obsidian border border-silver/30'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center mt-2 text-xs text-gold">
                        <Zap className="w-3 h-3 mr-1" />
                        {project.xpReward} XP
                      </div>
                    </div>
                  </div>
                  
                  {project.status === 'In Progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-charcoal">Progress</span>
                        <span className="text-gold font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-charcoal/30 rounded-full h-2 shadow-inset-metallic">
                        <div 
                          className="xp-bar h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gold/20 text-obsidian text-xs rounded-full border border-gold/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="metallic-button text-obsidian px-4 py-2 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Continue with other tabs using similar metallic styling patterns... */}
      </div>
    </div>
  )
}