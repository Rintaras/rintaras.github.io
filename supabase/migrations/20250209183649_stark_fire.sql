/*
  # Update storage policies for profile images
  
  1. Changes
    - Allow anonymous uploads to profile-images bucket
    - Keep public read access
    - Remove authenticated-only restrictions
    
  2. Security
    - Public read access maintained
    - Anonymous upload allowed but restricted to profile folder
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users Can Upload" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users Can Update" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users Can Delete" ON storage.objects;

-- Allow public read access to all files in the bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'profile-images');

-- Allow anyone to upload files to the profile folder
CREATE POLICY "Anyone Can Upload Profile Images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'profile-images' AND
  (storage.foldername(name))[1] = 'profile'
);

-- Allow anyone to update profile images
CREATE POLICY "Anyone Can Update Profile Images"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'profile-images')
WITH CHECK (bucket_id = 'profile-images');

-- Allow anyone to delete profile images
CREATE POLICY "Anyone Can Delete Profile Images"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'profile-images');