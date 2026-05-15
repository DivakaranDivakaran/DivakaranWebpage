import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const CONTENT_DIR = 'src/content/notes';

async function syncNotes() {
    console.log('Syncing lecture notes with database...');
    
    // Clear existing notes
    await supabase.from('lecture_notes').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    const notes: any[] = [];

    const walkDir = (dir: string, courseName: string = '') => {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            if (fs.statSync(fullPath).isDirectory()) {
                walkDir(fullPath, courseName || item);
            } else if (item.endsWith('.md')) {
                const slug = item.replace('.md', '');
                const course = courseName;
                
                const content = fs.readFileSync(fullPath, 'utf-8');
                const titleMatch = content.match(/^#\s+(.*)/);
                const title = titleMatch ? titleMatch[1] : slug;

                // Extract number for sorting
                const numMatch = slug.match(/\d+/);
                const order = numMatch ? parseInt(numMatch[0]) : 999;

                notes.push({
                    title: `${course}: ${title}`,
                    description: `Lecture notes for ${course} - ${title}`,
                    url: `/teaching/notes/${course}/${slug}`,
                    created_at: new Date(2000, 0, order).toISOString() // Hack to use created_at for ordering if needed
                });
            }
        });
    };

    walkDir(CONTENT_DIR);

    console.log(`Found ${notes.length} lecture notes. Inserting into Supabase...`);

    if (notes.length > 0) {
        const { error } = await supabase.from('lecture_notes').insert(notes);
        if (error) {
            console.error('Error syncing notes:', error.message);
        } else {
            console.log('Successfully synced lecture notes!');
        }
    } else {
        console.log('No notes found to sync.');
    }
}

syncNotes();
