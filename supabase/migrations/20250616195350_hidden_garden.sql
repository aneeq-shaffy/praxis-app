/*
  # Create achievements and student achievements tables

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `icon` (text)
      - `xp_reward` (integer)
      - `criteria` (jsonb)
      - `created_at` (timestamp)

    - `student_achievements`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key to students)
      - `achievement_id` (uuid, foreign key to achievements)
      - `earned_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add appropriate policies for students and admins
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  xp_reward integer DEFAULT 0,
  criteria jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS student_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  achievement_id uuid REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at timestamptz DEFAULT now(),
  UNIQUE(student_id, achievement_id)
);

-- Enable RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_achievements ENABLE ROW LEVEL SECURITY;

-- Create policies for achievements
CREATE POLICY "Anyone can view achievements"
  ON achievements
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage achievements"
  ON achievements
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create policies for student_achievements
CREATE POLICY "Students can view own achievements"
  ON student_achievements
  FOR SELECT
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

CREATE POLICY "System can award achievements"
  ON student_achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Insert default achievements
INSERT INTO achievements (name, description, icon, xp_reward, criteria) VALUES
('Νέος Αρχιτέκτων', 'First Project Completed', '🏛️', 100, '{"projects_completed": 1}'),
('Ζεύς Κεραυνός', 'Lightning Fast Learner', '⚡', 150, '{"quick_completion": true}'),
('Αθηνά Σοφία', 'Wisdom Seeker', '🦉', 200, '{"mentor_rating": 4.5}'),
('Ήφαιστος Τεχνίτης', 'Master Craftsman', '🔨', 300, '{"projects_completed": 5}'),
('Ερμής Αγγελιαφόρος', 'Great Communicator', '📨', 150, '{"communication_score": 4.5}');