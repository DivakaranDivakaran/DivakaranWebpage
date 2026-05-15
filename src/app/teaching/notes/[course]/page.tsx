import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface Note {
  id: string;
  title: string;
  url: string;
  description: string;
}

interface PageProps {
  params: Promise<{
    course: string;
  }>;
}

export async function generateStaticParams() {
  const { data: lectureNotes } = await supabase
    .from('lecture_notes')
    .select('title');
    
  const courses = Array.from(new Set((lectureNotes || []).map(note => note.title.split(':')[0])));
  return courses.map(course => ({ course }));
}

export default async function CourseNotesPage({ params }: PageProps) {
  const { course: encodedCourse } = await params;
  const course = decodeURIComponent(encodedCourse);
  
  const { data: notes } = await supabase
    .from('lecture_notes')
    .select('*')
    .ilike('title', `${course}:%`);

  const formatCourseName = (name: string) => {
    return name.replace(/([A-Z])/g, ' $1').trim();
  };

  const sortedNotes = (notes as Note[])?.sort((a, b) => {
    const aNum = parseInt(a.url.match(/\d+/)?.toString() || '999');
    const bNum = parseInt(b.url.match(/\d+/)?.toString() || '999');
    return aNum - bNum;
  });

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-8 flex items-center gap-2 text-stone-500 text-sm uppercase tracking-wider font-bold">
        <Link href="/teaching" className="hover:text-[#8c1515] transition-colors">Teaching</Link>
        <HiChevronRight />
        <span className="text-stone-400">{formatCourseName(course)}</span>
      </div>

      <h1 className="text-4xl font-bold text-stone-800 mb-4">{formatCourseName(course)}</h1>
      <p className="text-stone-500 mb-12 italic">Collection of lecture notes and chapters for {formatCourseName(course)}.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedNotes?.map((note) => (
          <Link 
            key={note.id} 
            href={note.url}
            className="group p-6 bg-white border border-stone-200 rounded-xl hover:border-[#8c1515] transition-all hover:shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-stone-800 group-hover:text-[#8c1515] transition-colors">
                {note.title.split(':').slice(1).join(':').trim()}
              </h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Read Note →</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-stone-100">
        <Link 
          href="/teaching" 
          className="flex items-center gap-2 text-stone-500 hover:text-[#8c1515] transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <HiChevronLeft className="text-lg" /> Back to Teaching
        </Link>
      </div>
    </div>
  );
}
