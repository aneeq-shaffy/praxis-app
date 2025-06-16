/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `project_id` (uuid, foreign key to projects)
      - `student_id` (uuid, foreign key to students)
      - `cover_letter` (text)
      - `status` (enum)
      - `applied_at` (timestamp)
      - `reviewed_at` (timestamp, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `applications` table
    - Add policies for students to manage their applications
    - Add policy for mentors and companies to review applications
*/

-- Create enum for application status
CREATE TYPE application_status AS ENUM ('pending', 'under_review', 'accepted', 'rejected');

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  cover_letter text,
  status application_status DEFAULT 'pending',
  applied_at timestamptz DEFAULT now(),
  reviewed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(project_id, student_id)
);

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Students can manage own applications"
  ON applications
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM students s
      WHERE s.id = student_id AND s.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Mentors and companies can review applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects p
      JOIN mentors m ON p.mentor_id = m.id
      WHERE p.id = project_id AND m.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM projects p
      JOIN companies c ON p.company_id = c.id
      WHERE p.id = project_id AND c.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Mentors and companies can update application status"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects p
      JOIN mentors m ON p.mentor_id = m.id
      WHERE p.id = project_id AND m.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM projects p
      JOIN companies c ON p.company_id = c.id
      WHERE p.id = project_id AND c.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create updated_at trigger
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();