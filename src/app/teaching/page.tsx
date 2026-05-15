import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

interface Note {
  id: string;
  title: string;
  url: string;
  description: string;
}

export const revalidate = 0; // Force fresh data on every build

export default async function Teaching() {
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .order('year', { ascending: false });

  const { data: lectureNotes } = await supabase
    .from('lecture_notes')
    .select('title');

  const { data: honoursProjects } = await supabase
    .from('honours_projects')
    .select('*')
    .order('year', { ascending: false });

  // Get unique courses from notes with robust parsing
  const noteCourses = Array.from(new Set(
    (lectureNotes || [])
      .map(note => note.title.split(':')[0].trim())
      .filter(name => name.length > 0)
  )).sort();

  const formatCourseName = (name: string) => {
    // Add space before capital letters, but collapse existing spaces
    return name.replace(/([A-Z])/g, ' $1').replace(/\s+/g, ' ').trim();
  };

  return (
    <div className="space-y-16">
      <h1 className="section-title">Teaching</h1>

      {/* Section 1: Lecture Notes */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">Lecture Notes</h2>
        
        {/* Debug Info (Temporary) */}
        <div className="bg-stone-100 p-4 mb-8 rounded-lg text-xs font-mono text-stone-500">
          Total Notes Found: {lectureNotes?.length || 0} | 
          Raw Courses: {noteCourses.join(', ')}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {noteCourses.length > 0 ? (
            noteCourses.map((courseName) => (
              <Link 
                key={courseName} 
                href={`/teaching/notes/${courseName}`}
                className="group p-8 bg-white border border-stone-200 rounded-2xl hover:border-[#8c1515] transition-all hover:shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 group-hover:text-[#8c1515] transition-colors mb-2">
                    {formatCourseName(courseName)}
                  </h3>
                  <p className="text-stone-500 font-medium uppercase text-xs tracking-widest">View Course Chapters →</p>
                </div>
                <HiChevronRight className="text-2xl text-stone-300 group-hover:text-[#8c1515] transition-colors" />
              </Link>
            ))
          ) : (
            <p className="text-stone-500 italic">No lecture notes available yet.</p>
          )}
        </div>
      </section>

      {/* Section 2: Honours Projects Guided */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">Honours Projects Guided</h2>
        <div className="space-y-6">
          {honoursProjects && honoursProjects.length > 0 ? (
            honoursProjects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-800">{project.project_title}</h3>
                  <span className="text-stone-500 font-medium">{project.year}</span>
                </div>
                <p className="text-[#8c1515] font-semibold mb-2">Student: {project.student_name}</p>
                {project.description && <p className="text-stone-600 text-sm leading-relaxed">{project.description}</p>}
              </div>
            ))
          ) : (
            <p className="text-stone-500 italic">No projects listed yet.</p>
          )}
        </div>
      </section>

      {/* Section 3: Course History */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">Course History</h2>
        
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Course Title</th>
                <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Year</th>
                <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Institution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {courses?.map((course) => (
                <tr key={course.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-800">{course.title}</td>
                  <td className="px-6 py-4 text-stone-600">{course.year}</td>
                  <td className="px-6 py-4 text-stone-600">{course.institution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {courses?.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-stone-800 mb-2">{course.title}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                <div>
                  <p className="font-semibold text-stone-400 uppercase text-[10px] tracking-wider mb-1">Year</p>
                  <p>{course.year}</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-400 uppercase text-[10px] tracking-wider mb-1">Institution</p>
                  <p>{course.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
