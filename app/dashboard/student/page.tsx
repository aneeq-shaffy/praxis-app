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
  Building2
} from 'lucide-react'

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      company: 'TechCorp Solutions',
      mentor: 'Sarah Johnson',
      status: 'In Progress',
      progress: 65,
      deadline: '2025-02-15',
      skills: ['React', 'UI/UX', 'TypeScript']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      company: 'StartupXYZ',
      mentor: 'Mike Chen',
      status: 'Applied',
      progress: 0,
      deadline: '2025-03-01',
      skills: ['React Native', 'JavaScript', 'API Integration']
    }
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
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Social Media Campaign Tool',
      company: 'Marketing Pro',
      description: 'Develop a tool for managing and analyzing social media campaigns',
      skills: ['Vue.js', 'Node.js', 'PostgreSQL'],
      duration: '6 weeks',
      difficulty: 'Beginner'
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
              <span className="text-greek-blue font-medium">Student Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-gray hover:text-greek-blue transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-greek-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-greek-blue mb-2">
            Welcome back, John!
          </h1>
          <p className="text-stone-gray">
            Continue your learning journey and build amazing projects
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-greek-blue">2</p>
              </div>
              <BookOpen className="w-8 h-8 text-greek-blue" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Mentors</p>
                <p className="text-2xl font-bold text-olive-green">3</p>
              </div>
              <Users className="w-8 h-8 text-olive-green" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Skills Learned</p>
                <p className="text-2xl font-bold text-greek-gold">12</p>
              </div>
              <Target className="w-8 h-8 text-greek-gold" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Achievements</p>
                <p className="text-2xl font-bold text-purple-600">5</p>
              </div>
              <Award className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'projects', label: 'My Projects' },
              { id: 'mentors', label: 'My Mentors' },
              { id: 'discover', label: 'Discover Projects' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-greek-blue text-greek-blue'
                    : 'border-transparent text-stone-gray hover:text-greek-blue hover:border-gray-300'
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
              <h2 className="text-xl font-serif font-bold text-greek-blue mb-4">Current Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="marble-card p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-greek-blue mb-1">{project.title}</h3>
                        <p className="text-stone-gray text-sm flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {project.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Progress' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-gray">Progress</span>
                        <span className="text-greek-blue font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-greek-blue h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-stone-gray">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due {project.deadline}
                      </div>
                      <button className="text-greek-blue hover:text-greek-gold transition-colors">
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
                    <div className="w-2 h-2 bg-greek-blue rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mentor Check-in</p>
                      <p className="text-xs text-stone-gray">Today, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-olive-green rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Project Review</p>
                      <p className="text-xs text-stone-gray">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Completed React fundamentals milestone</p>
                      <p className="text-xs text-stone-gray">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">New message from Sarah Johnson</p>
                      <p className="text-xs text-stone-gray">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">My Projects</h2>
              <button className="bg-greek-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply to New Project
              </button>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="marble-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-greek-blue mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray">
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Progress' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-gray">Progress</span>
                      <span className="text-greek-blue font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-greek-blue h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="bg-greek-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
            <h2 className="text-xl font-serif font-bold text-greek-blue">My Mentors</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="marble-card p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-greek-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{mentor.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-greek-blue">{mentor.name}</h3>
                      <p className="text-stone-gray text-sm">{mentor.title}</p>
                      <p className="text-stone-gray text-sm">{mentor.company}</p>
                      
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-stone-gray ml-1">{mentor.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {mentor.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <button className="bg-greek-blue text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                          Message
                        </button>
                        <button className="border border-greek-blue text-greek-blue px-3 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
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
              <h2 className="text-xl font-serif font-bold text-greek-blue">Discover Projects</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greek-blue focus:border-transparent"
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
                    <div>
                      <h3 className="text-lg font-semibold text-greek-blue mb-2">{project.title}</h3>
                      <p className="text-stone-gray mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray">
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
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="bg-greek-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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