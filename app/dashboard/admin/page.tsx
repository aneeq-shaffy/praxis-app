'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Shield, 
  Settings,
  Search,
  Filter,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  UserCheck,
  FileText,
  MessageSquare
} from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    totalUsers: 1247,
    companies: 89,
    students: 892,
    mentors: 266,
    activeProjects: 156,
    completedProjects: 234,
    pendingApprovals: 23
  }

  const recentActivity = [
    {
      id: 1,
      type: 'company_registration',
      message: 'TechCorp Solutions registered',
      timestamp: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'project_completion',
      message: 'E-commerce Website project completed',
      timestamp: '4 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'mentor_assignment',
      message: 'Sarah Johnson assigned as mentor',
      timestamp: '6 hours ago',
      status: 'active'
    }
  ]

  const pendingApprovals = [
    {
      id: 1,
      type: 'company',
      name: 'DataFlow Analytics',
      submittedBy: 'john.doe@dataflow.com',
      date: '2025-01-14',
      status: 'pending'
    },
    {
      id: 2,
      type: 'student',
      name: 'Emily Chen',
      submittedBy: 'emily.chen@stanford.edu',
      date: '2025-01-14',
      status: 'pending'
    }
  ]

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
              <span className="text-gold font-medium">Admin Control Center</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-silver hover:text-gold transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 gold-card rounded-full flex items-center justify-center shadow-gold">
                <span className="text-obsidian font-bold text-sm">AD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold gold-text text-shadow-gold mb-2">
            Platform Administration
          </h1>
          <p className="text-silver">
            Monitor and manage the ΠΡΑΞΙΣ mentorship ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="gold-card p-6 rounded-xl shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Total Users</p>
                <p className="text-2xl font-bold text-obsidian">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-obsidian" />
            </div>
          </div>
          
          <div className="silver-card p-6 rounded-xl shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Companies</p>
                <p className="text-2xl font-bold text-obsidian">{stats.companies}</p>
              </div>
              <Building2 className="w-8 h-8 text-obsidian" />
            </div>
          </div>
          
          <div className="dark-metallic-card p-6 rounded-xl shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-silver text-sm">Active Projects</p>
                <p className="text-2xl font-bold text-gold">{stats.activeProjects}</p>
              </div>
              <Target className="w-8 h-8 text-gold" />
            </div>
          </div>
          
          <div className="metallic-card p-6 rounded-xl shimmer-effect">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-charcoal text-sm">Pending Approvals</p>
                <p className="text-2xl font-bold text-gold">{stats.pendingApprovals}</p>
              </div>
              <Clock className="w-8 h-8 text-gold" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gold/20 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'users', label: 'User Management' },
              { id: 'approvals', label: 'Approvals' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'settings', label: 'Settings' }
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
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="metallic-card p-6 rounded-xl shimmer-effect">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.status === 'completed' ? 'bg-green-500' :
                          activity.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <p className="text-obsidian font-medium">{activity.message}</p>
                          <p className="text-charcoal text-sm">{activity.timestamp}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                        activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="dark-metallic-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-serif font-semibold text-gold mb-4">Platform Health</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-silver text-sm">System Status</span>
                    <span className="text-green-400 font-medium">Operational</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-silver text-sm">Uptime</span>
                    <span className="text-gold font-medium">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-silver text-sm">Active Sessions</span>
                    <span className="text-gold font-medium">342</span>
                  </div>
                </div>
              </div>

              <div className="gold-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-serif font-semibold text-obsidian mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-obsidian/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-4 h-4 text-obsidian" />
                      <span className="text-sm text-obsidian">Review Pending Users</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-obsidian/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-4 h-4 text-obsidian" />
                      <span className="text-sm text-obsidian">Generate Report</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-obsidian/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-4 h-4 text-obsidian" />
                      <span className="text-sm text-obsidian">System Settings</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold">Pending Approvals</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search approvals..."
                    className="pl-10 pr-4 py-2 bg-charcoal/50 border border-silver/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-silver"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-silver/30 rounded-lg hover:bg-charcoal/30 transition-colors text-silver">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            
            <div className="grid gap-6">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="metallic-card p-6 rounded-xl shimmer-effect">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        approval.type === 'company' ? 'silver-card' : 'gold-card'
                      }`}>
                        {approval.type === 'company' ? 
                          <Building2 className="w-6 h-6 text-obsidian" /> :
                          <GraduationCap className="w-6 h-6 text-obsidian" />
                        }
                      </div>
                      <div>
                        <h3 className="font-semibold text-obsidian mb-1">{approval.name}</h3>
                        <p className="text-charcoal text-sm mb-1">
                          {approval.type === 'company' ? 'Company Registration' : 'Student Registration'}
                        </p>
                        <p className="text-charcoal text-sm">Submitted by: {approval.submittedBy}</p>
                        <p className="text-charcoal text-sm">Date: {approval.date}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-xl font-serif font-bold gold-text text-shadow-gold">Platform Analytics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="metallic-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-semibold text-obsidian mb-4">User Growth</h3>
                <div className="h-64 bg-charcoal/20 rounded-lg flex items-center justify-center">
                  <p className="text-charcoal">Chart visualization would go here</p>
                </div>
              </div>
              
              <div className="dark-metallic-card p-6 rounded-xl shimmer-effect">
                <h3 className="font-semibold text-gold mb-4">Project Success Rate</h3>
                <div className="h-64 bg-obsidian/20 rounded-lg flex items-center justify-center">
                  <p className="text-silver">Chart visualization would go here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}