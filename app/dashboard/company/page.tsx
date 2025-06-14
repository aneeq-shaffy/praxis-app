'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Building2, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  Plus,
  Search,
  Filter,
  Star,
  Clock,
  ArrowRight,
  User,
  GraduationCap,
  Eye
} from 'lucide-react'

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      description: 'Redesign our main e-commerce platform with modern UI/UX principles',
      status: 'Active',
      applicants: 12,
      selected: 'John Smith',
      mentor: 'Sarah Johnson',
      progress: 65,
      deadline: '2025-02-15',
      skills: ['React', 'UI/UX', 'TypeScript']
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Build a comprehensive analytics dashboard for business intelligence',
      status: 'Open',
      applicants: 8,
      selected: null,
      mentor: 'Mike Chen',
      progress: 0,
      deadline: '2025-03-01',
      skills: ['Python', 'React', 'D3.js']
    }
  ]

  const students = [
    {
      id: 1,
      name: 'John Smith',
      university: 'MIT',
      year: 'Senior',
      skills: ['React', 'TypeScript', 'Node.js'],
      rating: 4.8,
      projects: 3,
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Emily Davis',
      university: 'Stanford',
      year: 'Junior',
      skills: ['Python', 'Machine Learning', 'SQL'],
      rating: 4.9,
      projects: 2,
      avatar: 'ED'
    }
  ]

  const applications = [
    {
      id: 1,
      projectTitle: 'Mobile App Development',
      studentName: 'Alex Johnson',
      university: 'UC Berkeley',
      appliedDate: '2025-01-10',
      status: 'Pending',
      skills: ['React Native', 'JavaScript', 'Firebase'],
      coverLetter: 'I am excited to work on this mobile app project...'
    },
    {
      id: 2,
      projectTitle: 'Data Analytics Dashboard',
      studentName: 'Maria Garcia',
      university: 'Harvard',
      appliedDate: '2025-01-09',
      status: 'Under Review',
      skills: ['Python', 'Pandas', 'Visualization'],
      coverLetter: 'With my background in data science...'
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
              <span className="text-olive-green font-medium">Company Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-gray hover:text-greek-blue transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-olive-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-greek-blue mb-2">
            TechCorp Solutions
          </h1>
          <p className="text-stone-gray">
            Manage your projects and connect with talented students
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-olive-green">3</p>
              </div>
              <Target className="w-8 h-8 text-olive-green" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Students Working</p>
                <p className="text-2xl font-bold text-greek-blue">8</p>
              </div>
              <Users className="w-8 h-8 text-greek-blue" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Applications</p>
                <p className="text-2xl font-bold text-greek-gold">15</p>
              </div>
              <Building2 className="w-8 h-8 text-greek-gold" />
            </div>
          </div>
          
          <div className="marble-card p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-gray text-sm">Success Rate</p>
                <p className="text-2xl font-bold text-purple-600">92%</p>
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
              { id: 'projects', label: 'My Projects' },
              { id: 'applications', label: 'Applications' },
              { id: 'students', label: 'Students' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-olive-green text-olive-green'
                    : 'border-transparent text-stone-gray hover:text-olive-green hover:border-gray-300'
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
            {/* Active Projects */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-bold text-greek-blue">Active Projects</h2>
                <button className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>New Project</span>
                </button>
              </div>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="marble-card p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-greek-blue mb-1">{project.title}</h3>
                        <p className="text-stone-gray text-sm mb-2">{project.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-stone-gray">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.applicants} applicants
                          </span>
                          {project.selected && (
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {project.selected}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {project.status === 'Active' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-stone-gray">Progress</span>
                          <span className="text-olive-green font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-olive-green h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-stone-gray">
                        <Calendar className="w-4 h-4 mr-1" />
                        Due {project.deadline}
                      </div>
                      <button className="text-olive-green hover:text-green-700 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Applications */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Recent Applications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Alex Johnson</p>
                      <p className="text-xs text-stone-gray">Mobile App Development</p>
                    </div>
                    <button className="text-olive-green hover:text-green-700 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Maria Garcia</p>
                      <p className="text-xs text-stone-gray">Data Analytics Dashboard</p>
                    </div>
                    <button className="text-olive-green hover:text-green-700 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="marble-card p-6 rounded-xl">
                <h3 className="font-semibold text-greek-blue mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Plus className="w-4 h-4 text-olive-green" />
                      <span className="text-sm">Create New Project</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-greek-blue" />
                      <span className="text-sm">Browse Students</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-4 h-4 text-greek-gold" />
                      <span className="text-sm">Message Students</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">My Projects</h2>
              <button className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create Project</span>
              </button>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="marble-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-greek-blue mb-2">{project.title}</h3>
                      <p className="text-stone-gray mb-3">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.applicants} applicants
                        </span>
                        {project.selected && (
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            Selected: {project.selected}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Due {project.deadline}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {project.status === 'Active' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-stone-gray">Progress</span>
                        <span className="text-olive-green font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-olive-green h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-olive-green text-olive-green px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                        Edit
                      </button>
                      <button className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">Applications</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-green focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            
            <div className="grid gap-6">
              {applications.map((application) => (
                <div key={application.id} className="marble-card p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-greek-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {application.studentName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-greek-blue">{application.studentName}</h3>
                          <p className="text-stone-gray text-sm">{application.university}</p>
                        </div>
                      </div>
                      <p className="text-stone-gray mb-2">Applied for: <span className="font-medium">{application.projectTitle}</span></p>
                      <p className="text-stone-gray text-sm mb-3">{application.coverLetter}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-gray">
                        <span>Applied: {application.appliedDate}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      application.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {application.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                        Decline
                      </button>
                      <button className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold text-greek-blue">Students</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-green focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {students.map((student) => (
                <div key={student.id} className="marble-card p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-greek-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{student.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-greek-blue">{student.name}</h3>
                      <div className="flex items-center space-x-2 text-stone-gray text-sm">
                        <GraduationCap className="w-4 h-4" />
                        <span>{student.university} • {student.year}</span>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-stone-gray ml-1">{student.rating}</span>
                        <span className="text-stone-gray text-sm ml-3">{student.projects} projects completed</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {student.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <button className="bg-olive-green text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                          View Profile
                        </button>
                        <button className="border border-olive-green text-olive-green px-3 py-1 rounded text-sm hover:bg-green-50 transition-colors">
                          Message
                        </button>
                      </div>
                    </div>
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