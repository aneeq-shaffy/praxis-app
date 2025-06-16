/*
  # Create mentors table

  1. New Tables
    - `mentors`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `title` (text)
      - `expertise` (text array)
      - `bio` (text)
      - `availability` (enum)
      - `rating` (decimal, default 0)
      - `total_mentees` (integer, default 0)
      - `completed_projects` (integer, default 0)
      - `company_id` (uuid, foreign key to companies)
      - `user_id` (uuid, foreign key to users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `mentors` table
    - Add policies for mentors to manage their own data
    - Add policy for students and companies to view mentor profiles
*/

-- Create enum for mentor availability
CREATE TYPE mentor_availability AS ENUM ('available', 'limited', 'busy');

CREATE TABLE IF NOT EXISTS mentors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  title text NOT NULL,
  expertise text[] DEFAULT '{}',
  bio text,
  availability mentor_availability DEFAULT 'available',
  rating decimal(3,2) DEFAULT 0.0,
  total_mentees integer DEFAULT 0,
  completed_projects integer DEFAULT 0,
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Mentors can manage own data"
  ON mentors
  FOR ALL
  TO authenticated
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    ) OR
    EXISTS (
      SELECT 1 FROM companies c
      JOIN users u ON c.user_id = u.id
      WHERE c.id = company_id AND u.id = auth.uid()
    )
  );

CREATE POLICY "Students and companies can view mentors"
  ON mentors
  FOR SELECT
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_mentors_updated_at
  BEFORE UPDATE ON mentors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();