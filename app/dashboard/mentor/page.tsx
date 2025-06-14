'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  Clock,
  Search,
  Filter,
  Star,
  ArrowRight,
  User,
  Building2,
  GraduationCap,
  CheckCircle
} from 'lucide-react'

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const mentorships = [
    {
      id: 1,
      studentName: 'John Smith',
      university: 'MIT',
      projectTitle: 'E-commerce Website Redesign',
      company: 'TechCorp Solutions',
      status: 'Active',
      progress: 65,
      nextSession: '2025-01-15 14:00',
      skills: ['React', 'UI/UX', 'TypeScript'],
      avatar: 'JS'
    },
    {
      id: 2,
      studentName: 'Emily Davis',
      university: 'Stanford',
      projectTitle: 'Mobile App Development',
      company: 'StartupXYZ',
      status: 'Active',
      progress: 40,
      nextSession: '2025-01-16 10:00',
      skills: ['React Native', 'JavaScript', 'Firebase'],
      avatar: 'ED'
    }
  ]

  const availableProjects = [
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      company: 'DataFlow Inc',
      description: 'Guide a student in building a comprehensive analytics dashboard',
      skills: ['Python', 'React', 'D3.js'],
      duration: '8 weeks',
      commitment: '3-4 hours/week',
      studentsApplied: 5
    },
    {
      id: 4,
      title: 'Social Media Campaign Tool',
      company: 'Marketing Pro',
      description: 'Mentor a student developing a social media management tool',
      skills: ['Vue.js', 'Node.js', 'PostgreSQL'],
      duration: '6 weeks',
      commitment: '2-3 hours/week',
      studentsApplied: 3
    }
  ]

  const sessions = [
    {
      id: 1,
      studentName: 'John Smith',
      projectTitle: 'E-commerce Website Redesign',
      date: '2025-01-15',
      time: '14:00',
      type: 'Progress Review',
      status: 'Scheduled'
    },
    {
      id: 2,
      studentName: 'Emily Davis',
      projectTitle: 'Mobile App Development',
      date: '2025-01-16',
      time: '10:00',
      type: 'Technical Guidance',
      status: 'Scheduled'
    },
    {
      id: 3,
      studentName: 'Alex Johnson',
      projectTitle: 'Web Development',
      date: '2025-01-14',
      time: '16:00',
      type: 'Code Review',
      status: 'Completed'
    }
  ]

  return (
    <div className="min-h-screen bg-marble-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-greek-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Π</span>
                </div>
                <span className="text-2xl font-serif font-bold text-greek-blue">PRAXIS</span>
              </Link>
              <span className="text-stone-gray">|</span>
              <span className="text-greek-gold font-medium">Mentor Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-gray hover:text-greek-blue transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-greek-gold rounded-full flex items-center justify-center">
                <span className="text-greek-blue font-bold text-sm">SJ</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-greek-blue mb-2">
            Welcome back, Sarah!
          </h1>
          <p className="text-stone-gray">
            Guide the next generation of professionals through meaningful mentorship
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Active Mentorships</p>
                <p className="text-2xl font-bold text-greek-gold">4</p>
              </div>
              <Users className="w-8 h-8 text-greek-gold" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Projects Completed</p>
                <p className="text-2xl font-bold text-greek-blue">12</p>
              </div>
              <Target className="w-8 h-8 text-greek-blue" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Mentor Rating</p>
                <p className="text-2xl font-bold text-olive-green">4.9</p>
              </div>
              <Star className="w-8 h-8 text-olive-green" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Impact Score</p>
                <p className="text-2xl font-bold text-purple-600">95</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'mentorships', label: 'My Mentorships' },
              { id: 'sessions', label: 'Sessions' },
              { id: 'opportunities', label: 'Opportunities' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-greek-gold text-greek-gold'
                    : 'border-transparent text-stone-gray hover:text-greek-gold hover:border-gray-300'
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
            {/* Active Mentorships */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-serif font-bold text-greek-blue mb-4">Active Mentorships</h2>
              <div className="space-y-4">
                {mentorships.map((mentorship) => (
                  <div key={mentorship.id} className="marble-card p-6 rounded-xl">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-greek-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{mentorship.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-greek-blue">{mentorship.studentName}</h3>
                        <div className="flex items-center space-x-2 text-stone-gray text-sm">
                          <GraduationCap className="w-4 h-4" />
                          <span>{mentorship.university}</span>
                        </div>
                        <p className="text-stone-gray text-sm mt-1">{mentorship.projectTitle}</p>
                        <div className="flex items-center space-x-2 text-stone-gray text-sm">
                          <Building2 className="w-4 h-4" />
                          <span>{mentorship.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {mentorship.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-gray">Progress</span>
                        <span className="text-greek-gold font-medium">{mentorship.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-greek-gold h-2 rounded-full transition-all"
                          style={{ width: `${mentorship.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-stone-gray">
                        <Calendar className="w-4 h-4 mr-1" />
                        Next session: {mentorship.nextSession}
                      </div>
                      <button className="text-greek-gold hover:text-yellow-600 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Sessions */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Upcoming Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greek-gold rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Progress Review - John</p>
                      <p className="text-xs text-stone-gray">Today, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greek-blue rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Technical Guidance - Emily</p>
                      <p className="text-xs text-stone-gray">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor Impact */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Your Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-gray text-sm">Students Mentored</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-gray text-sm">Projects Completed</span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-gray text-sm">Success Rate</span>
                    <span className="font-medium text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-gray text-sm">Avg. Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-greek-gold" />
                      <span className="text-sm">Schedule Session</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-4 h-4 text-greek-blue" />
                      <span className="text-sm">Message Students</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Target className="w-4 h-4 text-olive-green" />
                      <span className="text-sm">Browse Projects</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mentorships' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">My Mentorships</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search mentorships..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-gold focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid gap-6">
              {mentorships.map((mentorship) => (
                <div key={mentorship.id} className="marble-card p-6 rounded-xl">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-greek-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{mentorship.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-greek-blue mb-1">{mentorship.studentName}</h3>
                      <div className="flex items-center space-x-4 text-stone-gray text-sm mb-2">
                        <span className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {mentorship.university}
                        </span>
                        <span className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {mentorship.company}
                        </span>
                      </div>
                      <p className="text-stone-gray mb-3">{mentorship.projectTitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {mentorship.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {mentorship.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-gray">Project Progress</span>
                      <span className="text-greek-gold font-medium">{mentorship.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-greek-gold h-3 rounded-full transition-all"
                        style={{ width: `${mentorship.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-stone-gray">
                      <Calendar className="w-4 h-4 mr-1" />
                      Next session: {mentorship.nextSession}
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-greek-gold text-greek-gold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors">
                        Schedule Session
                      </button>
                      <button className="bg-greek-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">Sessions</h2>
              <button className="bg-greek-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                Schedule New Session
              </button>
            </div>
            
            <div className="grid gap-4">
              {sessions.map((session) => (
                <div key={session.id} className="marble-card p-6 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-greek-blue">{session.studentName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          session.status === 'Scheduled' 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {session.status}
                        </span>
                      </div>
                      <p className="text-stone-gray text-sm mb-1">{session.projectTitle}</p>
                      <p className="text-stone-gray text-sm mb-2">Session Type: {session.type}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {session.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {session.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {session.status === 'Scheduled' ? (
                        <>
                          <button className="border border-gray-300 text-stone-gray px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
                            Reschedule
                          </button>
                          <button className="bg-greek-gold text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-colors">
                            Join Session
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span className="text-sm">Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">Mentorship Opportunities</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search opportunities..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-gold focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            
            <div className="grid gap-6">
              {availableProjects.map((project) => (
                <div key={project.id} className="marble-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-greek-blue mb-2">{project.title}</h3>
                      <p className="text-stone-gray mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray mb-3">
                        <span className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {project.commitment}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-stone-gray">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.studentsApplied} students applied
                      </span>
                    </div>
                    <button className="bg-greek-gold text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                      Apply to Mentor
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