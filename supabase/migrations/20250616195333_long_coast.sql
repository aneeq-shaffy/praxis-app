/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `requirements` (text)
      - `skills_required` (text array)
      - `difficulty` (enum)
      - `duration` (text)
      - `xp_reward` (integer)
      - `status` (enum)
      - `progress` (integer, default 0)
      - `deadline` (date)
      - `student_id` (uuid, optional foreign key to students)
      - `mentor_id` (uuid, foreign key to mentors)
      - `company_id` (uuid, foreign key to companies)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `projects` table
    - Add policies for project participants to access their projects
    - Add policy for companies to manage their projects
*/

-- Create enums
CREATE TYPE project_difficulty AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE project_status AS ENUM ('open', 'in_progress', 'completed', 'cancelled');

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  requirements text,
  skills_required text[] DEFAULT '{}',
  difficulty project_difficulty NOT NULL DEFAULT 'intermediate',
  duration text NOT NULL,
  xp_reward integer DEFAULT 0,
  status project_status DEFAULT 'open',
  progress integer DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  deadline date,
  student_id uuid REFERENCES students(id) ON DELETE SET NULL,
  mentor_id uuid REFERENCES mentors(id) ON DELETE CASCADE,
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Project participants can access projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM students s
      WHERE s.id = student_id AND s.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM mentors m
      WHERE m.id = mentor_id AND m.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM companies c
      WHERE c.id = company_id AND c.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Students can view open projects"
  ON projects
  FOR SELECT
  TO authenticated
  USING (
    status = 'open' OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('student', 'mentor', 'company', 'admin')
    )
  );

-- Create updated_at trigger
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();