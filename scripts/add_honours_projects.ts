import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const projectsData = [
  { 
    year: '2025', 
    project_title: 'Characterizing continuous function: using topological properties of its graph', 
    student_name: 'Tanvi Chaubey',
    description: '' 
  },
  { 
    year: '2024', 
    project_title: 'Fomalising Mathematics in Lean: Gaussian Elimination', 
    student_name: 'Maria Joseph',
    description: '' 
  },
  { 
    year: '2023', 
    project_title: 'Integer Multiplication with time O(n log n)', 
    student_name: 'Vignesh Iyer',
    description: '' 
  },
  { 
    year: '2023', 
    project_title: 'Topological Data Analysis', 
    student_name: 'Madhuleka Iyer',
    description: '' 
  },
  { 
    year: '2023', 
    project_title: "Godel's First Incompleteness Theorem", 
    student_name: 'Tanu Prasad',
    description: '' 
  }
];

async function addProjects() {
    console.log('Adding honours projects...');
    const { error } = await supabase.from('honours_projects').insert(projectsData);
    
    if (error) {
        console.error('Error adding projects:', error.message);
    } else {
        console.log('Projects added successfully!');
    }
}

addProjects();
