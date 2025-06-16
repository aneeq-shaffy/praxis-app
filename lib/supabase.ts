import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  role: 'student' | 'company' | 'mentor' | 'admin'
  created_at: string
  updated_at: string
  is_verified: boolean
}

export interface Company {
  id: string
  name: string
  description: string
  website?: string
  industry: string
  location: string
  logo_url?: string
  user_id: string
  created_at: string
}

export interface Student {
  id: string
  first_name: string
  last_name: string
  university: string
  major: string
  graduation_year: number
  skills: string[]
  cv_url?: string
  user_id: string
  created_at: string
}

export interface Mentor {
  id: string
  first_name: string
  last_name: string
  title: string
  expertise: string[]
  bio: string
  availability: 'available' | 'limited' | 'busy'
  company_id: string
  user_id: string
  created_at: string
}

export interface Project {
  id: string
  title: string
  description: string
  requirements: string
  skills_required: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  xp_reward: number
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
  deadline: string
  student_id?: string
  mentor_id: string
  company_id: string
  created_at: string
}

export interface Proposal {
  id: string
  project_description: string
  skills_required: string[]
  timeline: string
  status: 'pending' | 'approved' | 'rejected'
  student_id: string
  mentor_id: string
  created_at: string
}