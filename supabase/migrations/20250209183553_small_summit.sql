/*
  # Configure storage bucket and policies for profile images
  
  1. Changes
    - Create storage bucket for profile images
    - Add policies for image upload and read access
    
  2. Security
    - Enable public read access for profile images
    - Allow authenticated users to upload/update/delete images
*/

-- Create bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policies are automatically created by Supabase when the bucket is created
-- We can add additional policies for more granular control

-- Allow public read access to all files in the bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'profile-images');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated Users Can Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'profile-images' AND
  (storage.foldername(name))[1] = 'profile'
);

-- Allow authenticated users to update their files
CREATE POLICY "Authenticated Users Can Update"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'profile-images')
WITH CHECK (bucket_id = 'profile-images');

-- Allow authenticated users to delete their files
CREATE POLICY "Authenticated Users Can Delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'profile-images');