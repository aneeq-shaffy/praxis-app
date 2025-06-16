/*
  # Create students table

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `university` (text)
      - `major` (text)
      - `graduation_year` (integer)
      - `skills` (text array)
      - `cv_url` (text, optional)
      - `xp_points` (integer, default 0)
      - `level` (text, default 'Μαθητής')
      - `user_id` (uuid, foreign key to users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `students` table
    - Add policies for students to manage their own data
    - Add policy for mentors and companies to view student profiles
*/

CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  university text NOT NULL,
  major text NOT NULL,
  graduation_year integer NOT NULL,
  skills text[] DEFAULT '{}',
  cv_url text,
  xp_points integer DEFAULT 0,
  level text DEFAULT 'Μαθητής',
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Students can manage own data"
  ON students
  FOR ALL
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('admin', 'mentor', 'company')
    )
  );

CREATE POLICY "Mentors and companies can view students"
  ON students
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role IN ('mentor', 'company', 'admin')
    )
  );

-- Create updated_at trigger
CREATE TRIGGER update_students_updated_at
  BEFORE UPDATE ON students
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();