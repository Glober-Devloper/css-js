/*
  # Create eBook Content Tables

  ## Overview
  This migration creates the database structure for storing comprehensive Web Technologies eBook content
  covering CSS (Unit II) and JavaScript (Unit III) with detailed theory notes and examples.

  ## New Tables
  
  ### `units`
  Stores the main unit information (Unit II: CSS, Unit III: JavaScript)
  - `id` (uuid, primary key) - Unique identifier for each unit
  - `unit_number` (text) - Unit number (e.g., "Unit II", "Unit III")
  - `title` (text) - Unit title
  - `duration` (text) - Duration in hours
  - `order_index` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp

  ### `topics`
  Stores individual topics within each unit
  - `id` (uuid, primary key) - Unique identifier for each topic
  - `unit_id` (uuid, foreign key) - Reference to parent unit
  - `title` (text) - Topic title
  - `order_index` (integer) - Order within the unit
  - `created_at` (timestamptz) - Creation timestamp

  ### `content_sections`
  Stores detailed content sections for each topic
  - `id` (uuid, primary key) - Unique identifier for each section
  - `topic_id` (uuid, foreign key) - Reference to parent topic
  - `heading` (text) - Section heading
  - `content` (text) - Detailed theory content
  - `syntax_example` (text, nullable) - Code syntax example
  - `explanation` (text, nullable) - Explanation of the example
  - `order_index` (integer) - Order within the topic
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (educational content)
*/

-- Create units table
CREATE TABLE IF NOT EXISTS units (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_number text NOT NULL,
  title text NOT NULL,
  duration text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create topics table
CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id uuid NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  title text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create content_sections table
CREATE TABLE IF NOT EXISTS content_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  heading text NOT NULL,
  content text NOT NULL,
  syntax_example text,
  explanation text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (educational content is public)
CREATE POLICY "Anyone can view units"
  ON units FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view topics"
  ON topics FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view content sections"
  ON content_sections FOR SELECT
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_topics_unit_id ON topics(unit_id);
CREATE INDEX IF NOT EXISTS idx_content_sections_topic_id ON content_sections(topic_id);
CREATE INDEX IF NOT EXISTS idx_units_order ON units(order_index);
CREATE INDEX IF NOT EXISTS idx_topics_order ON topics(order_index);
CREATE INDEX IF NOT EXISTS idx_content_sections_order ON content_sections(order_index);