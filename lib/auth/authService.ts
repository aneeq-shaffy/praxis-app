import { supabase } from '../supabase'
import { toast } from 'react-hot-toast'

export interface SignUpData {
  email: string
  password: string
  role: 'student' | 'company' | 'mentor'
  firstName?: string
  lastName?: string
  companyName?: string
  university?: string
  major?: string
  graduationYear?: number
  skills?: string[]
  industry?: string
  companySize?: string
}

export interface SignInData {
  email: string
  password: string
}

export class AuthService {
  static async signUp(data: SignUpData) {
    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            role: data.role,
            first_name: data.firstName,
            last_name: data.lastName,
            company_name: data.companyName
          }
        }
      })

      if (authError) throw authError

      if (authData.user) {
        // Create user record
        const { error: userError } = await supabase
          .from('users')
          .insert([
            {
              id: authData.user.id,
              email: data.email,
              role: data.role,
              is_verified: true // Auto-verify for demo
            }
          ])

        if (userError) throw userError

        // Create role-specific record
        if (data.role === 'student' && data.firstName && data.lastName) {
          const { error: studentError } = await supabase
            .from('students')
            .insert([
              {
                user_id: authData.user.id,
                first_name: data.firstName,
                last_name: data.lastName,
                university: data.university || '',
                major: data.major || '',
                graduation_year: data.graduationYear || new Date().getFullYear() + 1,
                skills: data.skills || [],
                xp_points: 0,
                level: 'Μαθητής'
              }
            ])

          if (studentError) throw studentError
        } else if (data.role === 'company' && data.companyName) {
          const { error: companyError } = await supabase
            .from('companies')
            .insert([
              {
                user_id: authData.user.id,
                name: data.companyName,
                industry: data.industry || '',
                location: 'Remote', // Default for demo
                description: `${data.companyName} - Building the future through mentorship`
              }
            ])

          if (companyError) throw companyError
        }

        toast.success('Account created successfully!')
        return { user: authData.user, session: authData.session }
      }

      throw new Error('Failed to create user')
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account')
      throw error
    }
  }

  static async signIn(data: SignInData) {
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      })

      if (error) throw error

      if (authData.user) {
        // Get user role
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('role')
          .eq('id', authData.user.id)
          .single()

        if (userError) throw userError

        toast.success('Welcome back!')
        return { user: authData.user, session: authData.session, role: userData.role }
      }

      throw new Error('Failed to sign in')
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in')
      throw error
    }
  }

  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      toast.success('Signed out successfully')
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out')
      throw error
    }
  }

  static async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single()

        if (error) throw error
        return { user, role: userData.role }
      }

      return { user: null, role: null }
    } catch (error) {
      return { user: null, role: null }
    }
  }

  static async updateProfile(userId: string, updates: any) {
    try {
      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)

      if (error) throw error
      
      toast.success('Profile updated successfully')
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile')
      throw error
    }
  }
}