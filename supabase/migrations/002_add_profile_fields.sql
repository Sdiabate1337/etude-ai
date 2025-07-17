-- Add new profile fields
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS level TEXT,
ADD COLUMN IF NOT EXISTS learning_domains TEXT[];

-- Add comments for clarity
COMMENT ON COLUMN user_profiles.level IS 'User''s self-reported skill level';
COMMENT ON COLUMN user_profiles.learning_domains IS 'Array of learning domains selected by user';
