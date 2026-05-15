import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv('.env.local')

SUPABASE_URL = os.getenv('NEXT_PUBLIC_SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_SERVICE_ROLE_KEY')

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Missing Supabase credentials")
    exit(1)

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
response = supabase.table('lecture_notes').select('*').execute()
print(f"Number of notes in DB: {len(response.data)}")
for note in response.data[:5]:
    print(f" - {note['title']}")
