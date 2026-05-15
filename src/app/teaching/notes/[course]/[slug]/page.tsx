import fs from 'fs';
import path from 'path';
import LatexContent from '@/components/LatexContent';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { supabase } from '@/lib/supabase';
import NoteMenu from '@/components/NoteMenu';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/notes');

interface Note {
  id: string;
  title: string;
  url: string;
  description: string;
}

interface PageProps {
  params: Promise<{
    course: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: { course: string; slug: string }[] = [];
  
  const getFiles = (dir: string, baseCourse: string = '') => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        getFiles(fullPath, baseCourse || item);
      } else if (item.endsWith('.md')) {
        const course = baseCourse;
        const slug = item.replace('.md', '');
        params.push({ course, slug });
      }
    });
  };

  if (fs.existsSync(CONTENT_DIR)) {
    getFiles(CONTENT_DIR);
  }
  
  return params;
}

export default async function NotePage({ params }: PageProps) {
  const { course, slug } = await params;
  
  // Fetch all notes for the sidebar and prev/next
  const { data: allNotes } = await supabase
    .from('lecture_notes')
    .select('*')
    .ilike('title', `${course}:%`);

  const formatCourseName = (name: string) => {
    return name.replace(/([A-Z])/g, ' $1').trim();
  };

  const sortedNotes = (allNotes as Note[])?.sort((a, b) => {
    const aNum = parseInt(a.url.match(/\d+/)?.toString() || '999');
    const bNum = parseInt(b.url.match(/\d+/)?.toString() || '999');
    return aNum - bNum;
  });

  const currentIndex = sortedNotes?.findIndex(n => n.url.endsWith(slug));
  const prevNote = currentIndex > 0 ? sortedNotes[currentIndex - 1] : null;
  const nextNote = sortedNotes && currentIndex < sortedNotes.length - 1 ? sortedNotes[currentIndex + 1] : null;

  // Find the file
  const findFile = (dir: string): string | null => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        const found = findFile(fullPath);
        if (found) return found;
      } else if (item === `${slug}.md`) {
        return fullPath;
      }
    }
    return null;
  };

  const courseDir = path.join(CONTENT_DIR, course);
  const filePath = findFile(courseDir);

  if (!filePath) return <div>Note not found</div>;

  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="w-full px-6 py-12">
      {/* Course Navigation Hamburger (Floating/Sticky) */}
      <NoteMenu 
        courseName={formatCourseName(course)}
        notes={sortedNotes || []}
        currentSlug={slug}
      />

      <div className="mb-8 flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest font-bold">
        <Link href="/teaching" className="hover:text-[#8c1515] transition-colors">Teaching</Link>
        <HiChevronRight />
        <Link href={`/teaching/notes/${course}`} className="hover:text-[#8c1515] transition-colors">{formatCourseName(course)}</Link>
      </div>
      
      <main>
        <article className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-sm border border-stone-100 min-h-[60vh] w-full">
          <LatexContent content={content} />
        </article>

        {/* Prev/Next Navigation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevNote ? (
            <Link href={prevNote.url} className="group p-6 bg-white border border-stone-200 rounded-2xl hover:border-[#8c1515] transition-all text-left">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-1">Previous</span>
              <span className="text-[#8c1515] font-serif font-bold group-hover:underline">{prevNote.title.split(':').slice(1).join(':').trim()}</span>
            </Link>
          ) : <div />}
          {nextNote ? (
            <Link href={nextNote.url} className="group p-6 bg-white border border-stone-200 rounded-2xl hover:border-[#8c1515] transition-all text-right">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-1">Next</span>
              <span className="text-[#8c1515] font-serif font-bold group-hover:underline">{nextNote.title.split(':').slice(1).join(':').trim()}</span>
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
