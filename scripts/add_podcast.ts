import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const newTalk = {
  title: 'It’s a Math Math Math World with Divakaran \u0026 Shraddha',
  date: '2023 - Present',
  location: 'Radio Azim Premji University',
  description: 'A podcast series where Prof. Divakaran serves as a tour guide to mathematics for the "average student" Shraddha, exploring the beauty and accessibility of the subject.',
  video_url: 'https://youtube.com/playlist?list=PLo3VipWSCallUnHcL_vT0h7VomrALFO4A'
};

async function addTalk() {
    console.log('Adding new podcast to talks...');
    const { error } = await supabase.from('talks').insert([newTalk]);
    
    if (error) {
        console.error('Error adding talk:', error.message);
    } else {
        console.log('Podcast added successfully!');
    }
}

addTalk();
