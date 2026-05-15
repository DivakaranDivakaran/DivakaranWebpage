import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const coursesData = [
  { year: '2025, 2026', title: 'Discrete Mathematics', institution: 'Azim Premji University, Bangalore' },
  { year: '2026', title: 'Discrete Structures', institution: 'Azim Premji University, Bangalore' },
  { year: '2025', title: 'Probability', institution: 'Azim Premji University, Bangalore' },
  { year: '2025', title: 'Introduction to Mathematical Thinking', institution: 'Azim Premji University, Bangalore' },
  { year: '2025', title: 'Algorithms', institution: 'Azim Premji University, Bangalore' },
  { year: '2024', title: 'Differential equations', institution: 'Azim Premji University, Bangalore' },
  { year: '2023, 2024', title: 'Complex Analysis', institution: 'Azim Premji University, Bangalore' },
  { year: '2021, 2022, 2024', title: 'Introduction to Programming (Python)', institution: 'Azim Premji University, Bangalore' },
  { year: '2020, 2023, 2024', title: 'Linear Algebra', institution: 'Azim Premji University, Bangalore' },
  { year: '2023', title: 'Basic quantitative methods and reasoning', institution: 'Azim Premji University, Bangalore' },
  { year: '2023', title: 'Exploration in Mathematics 1', institution: 'Azim Premji University, Bangalore' },
  { year: '2022', title: 'Introduction to mathematical thinking 2 (taught only the final unit introducing group theory through permutation groups)', institution: 'Azim Premji University, Bangalore' },
  { year: '2022', title: 'Experimental methods and mathematics (origametry - the mathematics behind origami, dynamics)', institution: 'Azim Premji University, Bangalore' },
  { year: '2022', title: 'Numerical methods', institution: 'Azim Premji University, Bangalore' },
  { year: '2021', title: 'Calculus 1 (taught using inquiry based learning with a focus on understanding the role of the structure of the real line in results of calculus)', institution: 'Azim Premji University, Bangalore' },
  { year: '2020, 2021', title: 'Introduction to Mathematical thinking 1 (taught using inquiry based learning with a focus on counting problems)', institution: 'Azim Premji University, Bangalore' },
  { year: '2021', title: 'Calculus of Several variables', institution: 'Azim Premji University, Bangalore' },
  { year: '2020', title: 'Analysis', institution: 'Azim Premji University, Bangalore' },
  { year: '2017', title: 'Real analysis II (MTH 403)', institution: 'Indian Institute of Science Education and Research, Bhopal' },
  { year: '2015', title: 'Algebraic topology (MA 332)', institution: 'Indian Institute of Science' },
];

async function updateCourses() {
    console.log('Clearing old courses...');
    // Clear the table completely
    const { error: deleteError } = await supabase.from('courses').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (deleteError) {
        console.error('Failed to clear courses:', deleteError.message);
        // Supabase JS REST doesn't let us easily change schema, so we just clear and insert, 
        // relying on the user running the SQL command to alter the schema.
    } else {
        console.log('Inserting consolidated courses...');
        const { error: insertError } = await supabase.from('courses').insert(coursesData);
        if (insertError) {
            console.error('Insert error:', insertError.message);
        } else {
            console.log('Courses updated successfully!');
        }
    }
}

updateCourses();
