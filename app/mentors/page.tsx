'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter,
  Building2,
  Star,
  MessageSquare,
  Calendar,
  Target,
  Award,
  Users,
  BookOpen,
  Zap,
  Crown
} from 'lucide-react'

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      avatar: 'SJ',
      rating: 4.9,
      totalMentees: 24,
      completedProjects: 18,
      expertise: ['React', 'TypeScript', 'UI/UX Design', 'Next.js'],
      bio: 'Passionate about creating exceptional user experiences and mentoring the next generation of developers. 8+ years in frontend development.',
      availability: 'Available',
      responseTime: '< 2 hours',
      languages: ['English', 'Spanish'],
      achievements: ['Top Mentor 2024', 'Excellence in Teaching']
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Full Stack Engineer',
      company: 'DataFlow Analytics',
      avatar: 'MC',
      rating: 4.8,
      totalMentees: 19,
      completedProjects: 15,
      expertise: ['Python', 'React', 'PostgreSQL', 'Machine Learning'],
      bio: 'Full-stack developer with expertise in data analytics and machine learning. Love helping students bridge theory and practice.',
      availability: 'Available',
      responseTime: '< 4 hours',
      languages: ['English', 'Mandarin'],
      achievements: ['Innovation Award', 'Student Favorite']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Mobile Development Lead',
      company: 'StartupXYZ',
      avatar: 'ER',
      rating: 4.9,
      totalMentees: 16,
      completedProjects: 12,
      expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
      bio: 'Mobile development specialist with a passion for creating seamless cross-platform experiences. Mentor since 2020.',
      availability: 'Limited',
      responseTime: '< 6 hours',
      languages: ['English', 'Spanish', 'Portuguese'],
      achievements: ['Mobile Excellence', 'Mentor of the Year']
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'AI/ML Engineer',
      company: 'InnovateTech',
      avatar: 'DK',
      rating: 4.7,
      totalMentees: 12,
      completedProjects: 9,
      expertise: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      bio: 'AI researcher and engineer focused on practical applications of machine learning. Enjoy teaching complex concepts simply.',
      availability: 'Available',
      responseTime: '< 3 hours',
      languages: ['English', 'Korean'],
      achievements: ['Research Excellence', 'Innovation Leader']
    }
  ]

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'bg-green-100 text-green-800 border-green-200'
      case 'Limited': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Busy': return 'bg-red-100 text-red-800 border-red-200'
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
              <span className="text-gold font-medium">Mentor Directory</span>
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
            Expert Mentors
          </h1>
          <p className="text-silver">
            Connect with industry professionals who will guide your journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver w-5 h-5" />
            <input
              type="text"
              placeholder="Search mentors by name, company, or expertise..."
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
              <option value="all">All Mentors</option>
              <option value="available">Available</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mobile">Mobile</option>
              <option value="ai">AI/ML</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-3 border border-silver/30 rounded-lg hover:bg-charcoal/30 transition-colors text-silver">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="metallic-card p-6 rounded-xl hover:shadow-metallic transition-all duration-300 shimmer-effect">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 gold-card rounded-full flex items-center justify-center shadow-gold text-xl font-bold text-obsidian">
                  {mentor.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-xl font-semibold text-obsidian">{mentor.name}</h3>
                    {mentor.achievements.includes('Top Mentor 2024') && (
                      <Crown className="w-5 h-5 text-gold" />
                    )}
                  </div>
                  <p className="text-charcoal font-medium mb-1">{mentor.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-charcoal">
                    <Building2 className="w-4 h-4" />
                    <span>{mentor.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(mentor.availability)}`}>
                    {mentor.availability}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-charcoal mb-4 leading-relaxed">{mentor.bio}</p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-obsidian mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gold/20 text-obsidian text-xs rounded-full border border-gold/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="text-sm font-bold text-obsidian ml-1">{mentor.rating}</span>
                  </div>
                  <p className="text-xs text-charcoal">Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-obsidian" />
                    <span className="text-sm font-bold text-obsidian ml-1">{mentor.totalMentees}</span>
                  </div>
                  <p className="text-xs text-charcoal">Mentees</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Target className="w-4 h-4 text-obsidian" />
                    <span className="text-sm font-bold text-obsidian ml-1">{mentor.completedProjects}</span>
                  </div>
                  <p className="text-xs text-charcoal">Projects</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="silver-card rounded-lg p-3 mb-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-charcoal">Response Time:</span>
                    <span className="text-obsidian font-medium ml-1">{mentor.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-charcoal">Languages:</span>
                    <span className="text-obsidian font-medium ml-1">{mentor.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {mentor.achievements.map((achievement) => (
                    <span key={achievement} className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20 flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold/10 transition-colors flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message</span>
                </button>
                <button className="flex-1 metallic-button text-obsidian px-4 py-2 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Request Mentorship</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="metallic-button text-obsidian px-8 py-3 rounded-lg font-semibold shadow-gold hover:shadow-metallic transform hover:-translate-y-1 transition-all duration-300">
            Load More Mentors
          </button>
        </div>
      </div>
    </div>
  )
}