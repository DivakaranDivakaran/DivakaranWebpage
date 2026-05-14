import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrate() {
    console.log('Starting migration...');

    // 1. Profile
    const { error: profileErr } = await supabase.from('profiles').upsert({
        full_name: 'Divakaran D',
        title: 'Assistant Professor',
        bio: 'I am working at Azim Premji University. Currently, my main focus is undergraduate education. I strive to build effective pedagogy and relationships with students. My research interests are in the field of geometry and topology (both pure and applied). I have broadly worked in metric geometry, structure of function spaces between products of Riemann surfaces, and Monte-Carlo integration.',
        email: 'divakaran.d@apu.edu.in',
        twitter_url: 'https://twitter.com/pdivakarand',
        google_scholar_url: 'https://scholar.google.co.in/citations?user=rQBBm2gAAAAJ&hl',
        linkedin_url: 'https://www.linkedin.com/in/divakaran-d-194116131/',
        youtube_url: 'https://www.youtube.com/channel/UCi7vZVZ_O6AVKpRGarxiLUg'
    });
    if (profileErr) console.error('Profile migration error:', profileErr);
    else console.log('Profile migrated.');

    // 2. Experience
    const experience = [
        { role: 'Assistant Professor', organization: 'Azim Premji University', start_date: '2019', end_date: 'Present', location: 'Bangalore', sort_order: 1 },
        { role: 'Research Associate', organization: 'University of Edinburgh', start_date: '2018', end_date: '2019', location: 'Edinburgh', sort_order: 2 },
        { role: 'Post-doctoral Fellow', organization: 'IISER Bhopal', start_date: '2017', end_date: '2018', location: 'Bhopal', sort_order: 3 },
        { role: 'Post-doctoral Fellow', organization: 'IMSc Chennai', start_date: '2015', end_date: '2017', location: 'Chennai', sort_order: 4 },
        { role: 'Research Associate', organization: 'IISc Bangalore', start_date: '2014', end_date: '2015', location: 'Bangalore', sort_order: 5 }
    ];
    const { error: expErr } = await supabase.from('experience').insert(experience);
    if (expErr) console.error('Experience migration error:', expErr);
    else console.log('Experience migrated.');

    // 3. Publications
    const publications = [
        { title: 'Jittering Samples using a kd-Tree Stratification', authors: 'Alexandros Keros, Divakaran D, Kartic Subr', venue: 'Arxiv', year: 2020, pdf_url: 'https://arxiv.org/pdf/2002.07002.pdf' },
        { title: 'Proper holomorphic mappings onto symmetric products of a Riemann surface', authors: 'Gautam Bharali, Indranil Biswas, Divakaran D, Jaikrishnan Janardhanan', venue: 'Doc. Math. 23, 1291-1311', year: 2018, pdf_url: 'https://arxiv.org/pdf/1802.08231.pdf', doi_url: 'https://doi.org/10.25537/dm.2018v23.1291-1311' },
        { title: 'Finiteness theorems for holomorphic mapping from products of hyperbolic Riemann surfaces', authors: 'Divakaran D, Jaikrishnan Janardhanan', venue: 'Int. J. Math. Vol. 28, No. 07', year: 2017, pdf_url: 'https://arxiv.org/pdf/1701.05692.pdf', doi_url: 'https://doi.org/10.1142/S0129167X17500604' },
        { title: 'Compactness theorems for the spaces of distance measure spaces and Riemann surface laminations', authors: 'Divakaran D, Siddhartha Gadgil', venue: 'Arxiv', year: 2015, pdf_url: 'https://arxiv.org/pdf/1510.05777.pdf' }
    ];
    const { error: pubErr } = await supabase.from('publications').insert(publications);
    if (pubErr) console.error('Publications migration error:', pubErr);
    else console.log('Publications migrated.');

    // 4. Courses
    const courses = [
        { title: 'Calculus of Several Variables', semester: 'Spring 2021', institution: 'Azim Premji University', resources_url: 'https://youtube.com/playlist?list=PLOkV2I2YHKCQ9bWdB_DjY0RLUPZf-h6Du' },
        { title: 'Calculus 1', semester: 'Winter 2021', institution: 'Azim Premji University', resources_url: './courses/calculus1.html' },
        { title: 'Mathematical Thinking 1', semester: 'Fall 2020', institution: 'Azim Premji University', resources_url: './courses/intro1in2020.html' },
        { title: 'Mathematical Thinking 1', semester: 'Fall 2021', institution: 'Azim Premji University', resources_url: './courses/intro1in2021.html' },
        { title: 'Programming for mathematicians', semester: 'Spring 2020', institution: 'Azim Premji University', resources_url: './courses/programming.html' },
        { title: 'Linear Algebra', semester: 'Monsoon 2019', institution: 'Azim Premji University', resources_url: './courses/linearalgebra.html' },
        { title: 'Calculus 1', semester: '2017-18', institution: 'IISER Bhopal', resources_url: './courses/iiser.html' },
        { title: 'Real Analysis', semester: '2017-18', institution: 'IISER Bhopal', resources_url: './courses/analysis.html' },
        { title: 'Mathematical thinking', semester: '2014-15', institution: 'IISc Bangalore', resources_url: './courses/iisc.html' }
    ];
    const { error: courseErr } = await supabase.from('courses').insert(courses);
    if (courseErr) console.error('Courses migration error:', courseErr);
    else console.log('Courses migrated.');

    // 5. Talks
    const talks = [
        { title: 'Constancy of the ratio of circumference to diameter', date: 'July 19, 2021', location: 'Online', description: 'In this talk, I discuss an intuitive proof of the fact that the ratio of circumference to diameter is independent of the circle.', video_url: 'https://www.youtube.com/watch?v=tyH1o6pVWrY' }
    ];
    const { error: talkErr } = await supabase.from('talks').insert(talks);
    if (talkErr) console.error('Talks migration error:', talkErr);
    else console.log('Talks migrated.');

    console.log('Migration complete!');
}

migrate();
