-- Publications table
CREATE TABLE IF NOT EXISTS publications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    venue TEXT,
    year INTEGER,
    pdf_url TEXT,
    doi_url TEXT,
    cite_bib_path TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    semester TEXT,
    institution TEXT,
    resources_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    role TEXT NOT NULL,
    organization TEXT NOT NULL,
    start_date TEXT,
    end_date TEXT,
    location TEXT,
    is_current BOOLEAN DEFAULT FALSE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Talks table
CREATE TABLE IF NOT EXISTS talks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT,
    location TEXT,
    description TEXT,
    video_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Profiles table for bio
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT,
    title TEXT,
    bio TEXT,
    avatar_url TEXT,
    email TEXT,
    twitter_url TEXT,
    google_scholar_url TEXT,
    linkedin_url TEXT,
    youtube_url TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
