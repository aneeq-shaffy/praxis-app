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
  TrendingUp
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
    <div className="min-h-screen bg-baby-powder">
      {/* Navigation */}
      <nav className="bg-baby-powder/90 backdrop-blur-sm border-b border-eggplant/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-persian-indigo rounded-full flex items-center justify-center">
                  <span className="text-baby-powder font-bold text-sm">Π</span>
                </div>
                <span className="text-2xl font-serif font-bold text-persian-indigo">ΠΡΑΞΙΣ</span>
              </Link>
              <span className="text-eggplant">|</span>
              <span className="text-persian-indigo font-medium">Student Academy</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-eggplant hover:text-persian-indigo transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center">
                <span className="text-baby-powder font-bold text-sm">JS</span>
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
              <h1 className="text-3xl font-serif font-bold text-persian-indigo mb-2">
                Welcome back, {studentData.name}!
              </h1>
              <p className="text-eggplant">
                Continue your journey of practical excellence
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-5 h-5 text-bright-pink" />
                <span className="text-lg font-serif font-bold text-persian-indigo">{studentData.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-bright-pink" />
                <span className="text-sm text-eggplant">{studentData.streak} day streak</span>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="neoclassical-card p-4 rounded-xl mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-persian-indigo">Experience Points</span>
              <span className="text-sm font-bold text-bright-pink">{studentData.xp} / {studentData.nextLevelXP} XP</span>
            </div>
            <div className="w-full bg-eggplant/20 rounded-full h-3">
              <div 
                className="xp-bar h-3 rounded-full transition-all duration-500"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-eggplant mt-1">
              {studentData.nextLevelXP - studentData.xp} XP until Τεχνίτης (Craftsman)
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="marble-card p-6 rounded-xl group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-eggplant text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-persian-indigo">{studentData.totalProjects}</p>
              </div>
              <BookOpen className="w-8 h-8 text-persian-indigo group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-eggplant text-sm">Mentors</p>
                <p className="text-2xl font-bold text-bright-pink">3</p>
              </div>
              <Users className="w-8 h-8 text-bright-pink group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-eggplant text-sm">Achievements</p>
                <p className="text-2xl font-bold text-celeste">{studentData.achievements}</p>
              </div>
              <Trophy className="w-8 h-8 text-celeste group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-eggplant text-sm">Total XP</p>
                <p className="text-2xl font-bold text-bright-pink">{studentData.xp}</p>
              </div>
              <Zap className="w-8 h-8 text-bright-pink group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-eggplant/20 mb-8">
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
                    ? 'border-bright-pink text-bright-pink'
                    : 'border-transparent text-eggplant hover:text-persian-indigo hover:border-eggplant/30'
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
              <h2 className="text-xl font-serif font-bold text-persian-indigo mb-4">Current Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="neoclassical-card p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-persian-indigo mb-1">{project.title}</h3>
                        <p className="text-eggplant text-sm flex items-center mb-1">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </p>
                        <p className="text-eggplant text-sm flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Mentor: {project.mentor}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Progress' 
                            ? 'bg-celeste/20 text-persian-indigo'
                            : 'bg-bright-pink/20 text-bright-pink'
                        }`}>
                          {project.status}
                        </span>
                        <div className="flex items-center mt-2 text-xs text-bright-pink">
                          <Zap className="w-3 h-3 mr-1" />
                          {project.xpReward} XP
                        </div>
                      </div>
                    </div>
                    
                    {project.status === 'In Progress' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-eggplant">Progress</span>
                          <span className="text-persian-indigo font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-eggplant/20 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-persian-indigo to-bright-pink h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-eggplant">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due {project.deadline}
                      </div>
                      <button className="text-bright-pink hover:text-persian-indigo transition-colors">
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
              <div className="neoclassical-card p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-persian-indigo mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="achievement-badge w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-persian-indigo">{achievement.name}</p>
                        <p className="text-xs text-eggplant">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="neoclassical-card p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-persian-indigo mb-4">Upcoming Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bright-pink rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mentor Check-in</p>
                      <p className="text-xs text-eggplant">Today, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-celeste rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Project Review</p>
                      <p className="text-xs text-eggplant">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="neoclassical-card p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-persian-indigo mb-4">Your Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-eggplant text-sm">Projects Completed</span>
                    <span className="font-medium text-persian-indigo">{studentData.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-eggplant text-sm">Success Rate</span>
                    <span className="font-medium text-celeste">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-eggplant text-sm">Mentor Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-bright-pink fill-current" />
                      <span className="font-medium ml-1 text-persian-indigo">4.8</span>
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
              <h2 className="text-2xl font-serif font-bold text-persian-indigo mb-2">Hall of Achievements</h2>
              <p className="text-eggplant">Your journey through the pantheon of excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`neoclassical-card p-6 rounded-xl text-center transition-all duration-300 ${
                  achievement.earned 
                    ? 'hover:shadow-xl hover:scale-105' 
                    : 'opacity-60 grayscale'
                }`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl ${
                    achievement.earned 
                      ? 'achievement-badge' 
                      : 'bg-eggplant/20'
                  }`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-serif font-bold text-persian-indigo mb-2">{achievement.name}</h3>
                  <p className="text-sm text-eggplant">{achievement.description}</p>
                  {achievement.earned && (
                    <div className="mt-3 flex items-center justify-center text-xs text-bright-pink">
                      <Award className="w-3 h-3 mr-1" />
                      Earned
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs remain similar but with updated styling */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-persian-indigo">My Projects</h2>
              <button className="bg-gradient-to-r from-persian-indigo to-bright-pink text-baby-powder px-4 py-2 rounded-lg hover:from-bright-pink hover:to-persian-indigo transition-all duration-300 font-semibold shadow-lg">
                Apply to New Project
              </button>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="neoclassical-card p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-persian-indigo mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-eggplant">
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
                          ? 'bg-celeste/20 text-persian-indigo'
                          : 'bg-bright-pink/20 text-bright-pink'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center mt-2 text-xs text-bright-pink">
                        <Zap className="w-3 h-3 mr-1" />
                        {project.xpReward} XP
                      </div>
                    </div>
                  </div>
                  
                  {project.status === 'In Progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-eggplant">Progress</span>
                        <span className="text-persian-indigo font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-eggplant/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-persian-indigo to-bright-pink h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-persian-indigo/10 text-persian-indigo text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-persian-indigo to-bright-pink text-baby-powder px-4 py-2 rounded-lg hover:from-bright-pink hover:to-persian-indigo transition-all duration-300 font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-persian-indigo">My Mentors</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="neoclassical-card p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-persian-indigo to-bright-pink rounded-full flex items-center justify-center">
                      <span className="text-baby-powder font-bold">{mentor.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-persian-indigo">{mentor.name}</h3>
                      <p className="text-eggplant text-sm">{mentor.title}</p>
                      <p className="text-eggplant text-sm">{mentor.company}</p>
                      
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-bright-pink fill-current" />
                        <span className="text-sm text-eggplant ml-1">{mentor.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {mentor.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-celeste/20 text-persian-indigo text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <button className="bg-gradient-to-r from-persian-indigo to-bright-pink text-baby-powder px-3 py-1 rounded text-sm hover:from-bright-pink hover:to-persian-indigo transition-all duration-300 font-medium">
                          Message
                        </button>
                        <button className="border border-bright-pink text-bright-pink px-3 py-1 rounded text-sm hover:bg-bright-pink hover:text-baby-powder transition-all duration-300 font-medium">
                          Schedule Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'discover' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-persian-indigo">Discover Projects</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-eggplant w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 border border-eggplant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent bg-baby-powder"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-eggplant/30 rounded-lg hover:bg-persian-indigo/5 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            
            <div className="grid gap-6">
              {availableProjects.map((project) => (
                <div key={project.id} className="neoclassical-card p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-persian-indigo mb-2">{project.title}</h3>
                      <p className="text-eggplant mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-eggplant">
                        <span className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.difficulty === 'Beginner' 
                            ? 'bg-celeste/20 text-persian-indigo'
                            : 'bg-bright-pink/20 text-bright-pink'
                        }`}>
                          {project.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-bright-pink mb-2">
                        <Zap className="w-4 h-4 mr-1" />
                        {project.xpReward} XP
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-persian-indigo/10 text-persian-indigo text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="bg-gradient-to-r from-persian-indigo to-bright-pink text-baby-powder px-6 py-2 rounded-lg hover:from-bright-pink hover:to-persian-indigo transition-all duration-300 font-semibold shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}