import { supabase } from '@/lib/supabase';

export default async function Courses() {
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 className="section-title">Teaching History</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr>
              <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Course Title</th>
              <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Semester</th>
              <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Institution</th>
              <th className="text-left px-6 py-4 font-serif text-[#8c1515] font-bold">Resources</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {courses?.map((course) => (
              <tr key={course.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-medium text-stone-800">{course.title}</td>
                <td className="px-6 py-4 text-stone-600">{course.semester}</td>
                <td className="px-6 py-4 text-stone-600">{course.institution}</td>
                <td className="px-6 py-4">
                  {course.resources_url && (
                    <a href={course.resources_url} target="_blank" className="text-[#8c1515] hover:underline font-medium">
                      Link
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
