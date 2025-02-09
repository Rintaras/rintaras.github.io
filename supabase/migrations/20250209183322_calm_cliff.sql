/*
  # Update contact messages table and policies

  1. Changes
    - Ensure contact_messages table exists with correct structure
    - Enable RLS
    - Add read policy for authenticated users
    - Add insert policy for anonymous users

  2. Security
    - Safe policy creation with existence checks
    - Maintain RLS enforcement
*/

-- Create table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'contact_messages'
  ) THEN
    CREATE TABLE contact_messages (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text NOT NULL,
      message text NOT NULL,
      created_at timestamptz DEFAULT now(),
      read boolean DEFAULT false
    );

    -- Enable RLS
    ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create policies if they don't exist
DO $$ 
BEGIN
  -- Check and create read policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Authenticated users can read messages'
  ) THEN
    CREATE POLICY "Authenticated users can read messages"
      ON contact_messages
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;

  -- Check and create insert policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Anyone can insert messages'
  ) THEN
    CREATE POLICY "Anyone can insert messages"
      ON contact_messages
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;