/*
  # Create search history table

  ## Purpose
  Store user's weather search history to provide quick access to previously searched cities

  ## Tables Created
  
  ### `search_history`
  - `id` (uuid, primary key) - Unique identifier for each search
  - `city_name` (text, not null) - Full city name with country
  - `latitude` (numeric, not null) - City latitude coordinate
  - `longitude` (numeric, not null) - City longitude coordinate
  - `search_count` (integer, default 1) - Number of times this city was searched
  - `last_searched_at` (timestamptz, default now()) - Timestamp of last search
  - `created_at` (timestamptz, default now()) - Timestamp of first search

  ## Indexes
  - Index on `last_searched_at` for efficient sorting by recent searches
  - Index on `city_name` for quick lookups

  ## Security
  - No RLS needed as this is a public app feature
  - Anyone can view and add search history
*/

CREATE TABLE IF NOT EXISTS search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_name text NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  search_count integer DEFAULT 1,
  last_searched_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_search_history_last_searched 
  ON search_history(last_searched_at DESC);

CREATE INDEX IF NOT EXISTS idx_search_history_city_name 
  ON search_history(city_name);
