import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const newPublications = [
  {
    title: 'Adventures of a Mathematician By Stanislaw Ulam (Review)',
    authors: 'Divakaran Divakaran',
    venue: 'At Right Angles',
    year: 2023,
    pdf_url: 'https://publications.azimpremjiuniversity.edu.in/5270/1/21%20ADVENTURES%20OF%20A%20MATHEMATICS_REVIEW.pdf'
  },
  {
    title: 'Inquiry-based learning in an Indian context',
    authors: 'Shantha Bhushan, Tulsi Srinivasan, Divakaran D',
    venue: 'Blackboard, Issue 4, MTA (I)',
    year: 2022,
    pdf_url: 'https://www.mtai.org.in/wp-content/uploads/2022/01/blackboard-issue4.pdf'
  }
];

async function addPublications() {
    console.log('Adding new publications...');
    const { error } = await supabase.from('publications').insert(newPublications);
    
    if (error) {
        console.error('Error adding publications:', error.message);
    } else {
        console.log('Publications added successfully!');
    }
}

addPublications();
