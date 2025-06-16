'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Plus,
  Building2,
  User,
  Calendar,
  Clock,
  Target,
  Star,
  ArrowRight,
  Zap,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('browse')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      company: 'TechCorp Solutions',
      mentor: 'Sarah Johnson',
      description: 'Redesign the user interface and improve user experience for our main e-commerce platform. Focus on mobile responsiveness and conversion optimization.',
      skills: ['React', 'TypeScript', 'UI/UX Design', 'Figma'],
      difficulty: 'Intermediate',
      duration: '8-10 weeks',
      xpReward: 850,
      applicants: 12,
      status: 'Open',
      deadline: '2025-03-15',
      companyLogo: 'TC'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      company: 'DataFlow Analytics',
      mentor: 'Michael Chen',
      description: 'Build a comprehensive analytics dashboard for business intelligence. Include data visualization, real-time updates, and export functionality.',
      skills: ['Python', 'React', 'D3.js', 'PostgreSQL'],
      difficulty: 'Advanced',
      duration: '10-12 weeks',
      xpReward: 1200,
      applicants: 8,
      status: 'Open',
      deadline: '2025-04-01',
      companyLogo: 'DF'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      company: 'StartupXYZ',
      mentor: 'Emily Rodriguez',
      description: 'Develop a cross-platform mobile application for task management and team collaboration. Include offline functionality and push notifications.',
      skills: ['React Native', 'JavaScript', 'Firebase', 'Node.js'],
      difficulty: 'Intermediate',
      duration: '6-8 weeks',
      xpReward: 750,
      applicants: 15,
      status: 'Open',
      deadline: '2025-02-28',
      companyLogo: 'SX'
    },
    {
      id: 4,
      title: 'AI Chatbot Integration',
      company: 'InnovateTech',
      mentor: 'David Kim',
      description: 'Integrate an AI-powered chatbot into existing customer service platform. Focus on natural language processing and customer satisfaction.',
      skills: ['Python', 'Machine Learning', 'NLP', 'API Integration'],
      difficulty: 'Advanced',
      duration: '8-10 weeks',
      xpReward: 1000,
      applicants: 6,
      status: 'Open',
      deadline: '2025-03-30',
      companyLogo: 'IT'
    }
  ]

  const myApplications = [
    {
      id: 1,
      projectTitle: 'E-commerce Platform Redesign',
      company: 'TechCorp Solutions',
      appliedDate: '2025-01-10',
      status: 'Under Review',
      mentor: 'Sarah Johnson'
    },
    {
      id: 2,
      projectTitle: 'Mobile App Development',
      company: 'StartupXYZ',
      appliedDate: '2025-01-08',
      status: 'Accepted',
      mentor: 'Emily Rodriguez'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800 border-green-200'
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Completed': return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Accepted': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Navigation */}
      <nav className="metallic-nav sticky top-0 z-50">
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
              <span className="text-gold font-medium">Project Marketplace</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/student" className="text-silver hover:text-gold transition-colors">
                Dashboard
              </Link>
              <div className="w-8 h-8 gold-card rounded-full flex items-center justify-center shadow-gold">
                <span className="text-obsidian font-bold text-sm">JS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold gold-text text-shadow-gold mb-2">
            Project Marketplace
          </h1>
          <p className="text-silver">
            Discover meaningful projects and gain real-world experience
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-charcoal/50 border border-silver/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-silver placeholder-silver/60"
            />
          </div>
          <div className="flex space-x-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-charcoal/50 border border-silver/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-silver"
            >
              <option value="all">All Projects</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-3 border border-silver/30 rounded-lg hover:bg-charcoal/30 transition-colors text-silver">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gold/20 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'browse', label: 'Browse Projects' },
              { id: 'applications', label: 'My Applications' },
              { id: 'active', label: 'Active Projects' }
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
        {activeTab === 'browse' && (
          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.id} className="metallic-card p-6 rounded-xl hover:shadow-metallic transition-all duration-300 shimmer-effect">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 silver-card rounded-lg flex items-center justify-center shadow-silver">
                      <span className="text-obsidian font-bold text-sm">{project.companyLogo}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-obsidian mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-charcoal mb-2">
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
                      <p className="text-charcoal mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gold/20 text-obsidian text-sm rounded-full border border-gold/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-6 text-sm text-charcoal">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.applicants} applicants
                    </span>
                    <span className="flex items-center text-gold">
                      <Zap className="w-4 h-4 mr-1" />
                      {project.xpReward} XP
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold/10 transition-colors">
                      View Details
                    </button>
                    <button className="metallic-button text-obsidian px-6 py-2 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold">My Applications</h2>
              <span className="text-silver text-sm">{myApplications.length} applications</span>
            </div>
            
            <div className="grid gap-4">
              {myApplications.map((application) => (
                <div key={application.id} className="dark-metallic-card p-6 rounded-xl shimmer-effect">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gold mb-1">{application.projectTitle}</h3>
                      <div className="flex items-center space-x-4 text-sm text-silver mb-2">
                        <span className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {application.company}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {application.mentor}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Applied {application.appliedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                        {application.status}
                      </span>
                      {application.status === 'Accepted' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {application.status === 'Under Review' && (
                        <Clock className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'active' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 gold-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
              <Target className="w-8 h-8 text-obsidian" />
            </div>
            <h3 className="text-xl font-serif font-bold gold-text text-shadow-gold mb-2">No Active Projects</h3>
            <p className="text-silver mb-6">You don't have any active projects yet. Browse available projects to get started!</p>
            <button 
              onClick={() => setActiveTab('browse')}
              className="metallic-button text-obsidian px-6 py-3 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300"
            >
              Browse Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}