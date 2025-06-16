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
  Trophy
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

  const xpPercentage = (studentData.xp / studentData.nextLevelXP) * 100

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="swiss-nav">
        <div className="swiss-nav-content">
          <Link href="/" className="swiss-logo">
            ΠΡΑΞΙΣ
          </Link>
          <div className="swiss-nav-links">
            <span className="swiss-text-small">Student Academy</span>
            <div className="w-8 h-8 border border-black flex items-center justify-center">
              <span className="font-bold text-sm">JS</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="swiss-container py-8">
        {/* Header with XP System */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="swiss-heading-lg mb-2">
                Welcome back, {studentData.name}!
              </h1>
              <p className="swiss-text">
                Continue your journey of practical excellence
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">{studentData.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="swiss-text-small">{studentData.streak} day streak</span>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="swiss-card mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="swiss-text-small font-medium">Experience Points</span>
              <span className="swiss-text-small font-bold">{studentData.xp} / {studentData.nextLevelXP} XP</span>
            </div>
            <div className="swiss-progress">
              <div 
                className="swiss-progress-fill"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
            <p className="swiss-text-small mt-1">
              {studentData.nextLevelXP - studentData.xp} XP until Τεχνίτης (Craftsman)
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="swiss-card text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2" />
            <p className="swiss-text-small">Active Projects</p>
            <p className="text-2xl font-bold">{studentData.totalProjects}</p>
          </div>
          
          <div className="swiss-card text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <p className="swiss-text-small">Mentors</p>
            <p className="text-2xl font-bold">3</p>
          </div>
          
          <div className="swiss-card text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <p className="swiss-text-small">Achievements</p>
            <p className="text-2xl font-bold">{studentData.achievements}</p>
          </div>
          
          <div className="swiss-card text-center">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <p className="swiss-text-small">Total XP</p>
            <p className="text-2xl font-bold">{studentData.xp}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-black mb-8">
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
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="thirds-grid-2x3 gap-8">
            {/* Current Projects */}
            <div>
              <h2 className="swiss-heading-md mb-4">Current Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="swiss-card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold mb-1">{project.title}</h3>
                        <p className="swiss-text-small flex items-center mb-1">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </p>
                        <p className="swiss-text-small flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Mentor: {project.mentor}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`swiss-status ${
                          project.status === 'In Progress' ? 'swiss-status-active' : ''
                        }`}>
                          {project.status}
                        </span>
                        <div className="flex items-center mt-2 swiss-text-small">
                          <Zap className="w-3 h-3 mr-1" />
                          {project.xpReward} XP
                        </div>
                      </div>
                    </div>
                    
                    {project.status === 'In Progress' && (
                      <div className="mb-4">
                        <div className="flex justify-between swiss-text-small mb-1">
                          <span>Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="swiss-progress">
                          <div 
                            className="swiss-progress-fill"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center swiss-text-small">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due {project.deadline}
                      </div>
                      <button className="swiss-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Achievements */}
              <div className="swiss-card">
                <h3 className="swiss-heading-md mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-black flex items-center justify-center text-sm">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="swiss-text-small font-medium">{achievement.name}</p>
                        <p className="swiss-text-small text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="swiss-card">
                <h3 className="swiss-heading-md mb-4">Upcoming Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black"></div>
                    <div className="flex-1">
                      <p className="swiss-text-small font-medium">Mentor Check-in</p>
                      <p className="swiss-text-small text-gray-600">Today, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400"></div>
                    <div className="flex-1">
                      <p className="swiss-text-small font-medium">Project Review</p>
                      <p className="swiss-text-small text-gray-600">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="swiss-card">
                <h3 className="swiss-heading-md mb-4">Your Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="swiss-text-small">Projects Completed</span>
                    <span className="font-medium">{studentData.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="swiss-text-small">Success Rate</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="swiss-text-small">Mentor Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="font-medium">4.8</span>
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
              <h2 className="swiss-heading-lg mb-2">Hall of Achievements</h2>
              <p className="swiss-text">Your journey through the pantheon of excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`swiss-card text-center ${
                  achievement.earned ? '' : 'opacity-60'
                }`}>
                  <div className={`w-16 h-16 border-2 flex items-center justify-center mx-auto mb-4 text-2xl ${
                    achievement.earned ? 'border-black' : 'border-gray-300'
                  }`}>
                    {achievement.icon}
                  </div>
                  <h3 className="swiss-heading-md mb-2">
                    {achievement.name}
                  </h3>
                  <p className="swiss-text-small">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <div className="mt-3 flex items-center justify-center swiss-text-small">
                      <Award className="w-3 h-3 mr-1" />
                      Earned
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="swiss-heading-lg">My Projects</h2>
              <Link href="/projects" className="swiss-btn swiss-btn-primary">
                Apply to New Project
              </Link>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="swiss-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="swiss-heading-md mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 swiss-text-small">
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
                      <span className={`swiss-status ${
                        project.status === 'In Progress' ? 'swiss-status-active' : ''
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center mt-2 swiss-text-small">
                        <Zap className="w-3 h-3 mr-1" />
                        {project.xpReward} XP
                      </div>
                    </div>
                  </div>
                  
                  {project.status === 'In Progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between swiss-text-small mb-2">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="swiss-progress">
                        <div 
                          className="swiss-progress-fill"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="swiss-status">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="swiss-btn">
                      View Details
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