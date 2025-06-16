import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { User } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}

export function useProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          companies (name, logo_url),
          mentors (first_name, last_name),
          students (first_name, last_name)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { projects, loading, error, refetch: fetchProjects }
}

export function useStudentData(userId?: string) {
  const [student, setStudent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (userId) {
      fetchStudentData(userId)
    }
  }, [userId])

  const fetchStudentData = async (id: string) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          student_achievements (
            achievement_id,
            earned_at,
            achievements (name, description, icon, xp_reward)
          )
        `)
        .eq('user_id', id)
        .single()

      if (error) throw error
      setStudent(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { student, loading, error, refetch: () => userId && fetchStudentData(userId) }
}

export function useMentors() {
  const [mentors, setMentors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMentors()
  }, [])

  const fetchMentors = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('mentors')
        .select(`
          *,
          companies (name, industry, logo_url)
        `)
        .order('rating', { ascending: false })

      if (error) throw error
      setMentors(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { mentors, loading, error, refetch: fetchMentors }
}

export function useApplications(studentId?: string) {
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (studentId) {
      fetchApplications(studentId)
    }
  }, [studentId])

  const fetchApplications = async (id: string) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          projects (
            title,
            companies (name),
            mentors (first_name, last_name)
          )
        `)
        .eq('student_id', id)
        .order('applied_at', { ascending: false })

      if (error) throw error
      setApplications(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { applications, loading, error, refetch: () => studentId && fetchApplications(studentId) }
}