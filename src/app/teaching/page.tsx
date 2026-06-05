import { HiDocumentDownload, HiCode, HiExternalLink } from 'react-icons/hi';
import fs from 'fs';
import path from 'path';
import coursesData from '@/data/courses.json';
import honoursProjectsData from '@/data/honours_projects.json';

interface CourseResource {
  name: string;
  type: 'pdf' | 'ipynb';
  downloadUrl: string;
  colabUrl?: string;
}

export default function Teaching() {
  const courses = coursesData;
  const honoursProjects = honoursProjectsData;

  const formatCourseName = (name: string) => {
    return name.replace(/([A-Z])/g, ' $1').replace(/\s+/g, ' ').trim();
  };

  const courseResources: CourseResource[] = [];

  // 1. Get available PDFs by scanning the public/pdfs directory
  const pdfsDir = path.join(process.cwd(), 'public', 'pdfs');
  try {
    if (fs.existsSync(pdfsDir)) {
      const folders = fs.readdirSync(pdfsDir);
      for (const folder of folders) {
        const folderPath = path.join(pdfsDir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
          const files = fs.readdirSync(folderPath);
          if (files.includes(`${folder}.pdf`)) {
            courseResources.push({
              name: formatCourseName(folder),
              type: 'pdf',
              downloadUrl: `/pdfs/${folder}/${folder}.pdf`
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error reading PDFs directory:", error);
  }

  // 2. Get available Notebooks by scanning the public/notebooks directory
  const notebooksDir = path.join(process.cwd(), 'public', 'notebooks');
  try {
    if (fs.existsSync(notebooksDir)) {
      const files = fs.readdirSync(notebooksDir);
      for (const file of files) {
        if (file.endsWith('.ipynb')) {
          const rawName = file.replace('.ipynb', '').replace(/_/g, ' ');
          courseResources.push({
            name: formatCourseName(rawName),
            type: 'ipynb',
            downloadUrl: `/notebooks/${file}`,
            colabUrl: `https://colab.research.google.com/github/DivakaranDivakaran/DivakaranWebpage/blob/main/public/notebooks/${file}`
          });
        }
      }
    }
  } catch (error) {
    console.error("Error reading notebooks directory:", error);
  }

  courseResources.sort((a, b) => a.name.localeCompare(b.name));

  // 3. Get available theses by scanning the public/theses directory
  const thesesDir = path.join(process.cwd(), 'public', 'theses');
  const availableTheses: string[] = [];
  try {
    if (fs.existsSync(thesesDir)) {
      const files = fs.readdirSync(thesesDir);
      availableTheses.push(...files.filter(f => f.endsWith('.pdf')));
    }
  } catch (error) {
    console.error("Error reading theses directory:", error);
  }

  return (
    <div className="space-y-16">
      <h1 className="section-title">Teaching</h1>

      {/* Section 1: Lecture Notes & Notebooks */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">Lecture Notes & Resources</h2>
        
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
          {courseResources.length > 0 ? (
            <div className="divide-y divide-stone-200">
              {courseResources.map((resource) => (
                <div 
                  key={resource.name} 
                  className="p-6 hover:bg-[#8c1515]/5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#8c1515]/10 rounded-lg text-[#8c1515]">
                      {resource.type === 'pdf' ? <HiDocumentDownload className="text-2xl" /> : <HiCode className="text-2xl" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-800">
                        {resource.name}
                      </h3>
                      <p className="text-stone-500 text-sm">
                        {resource.type === 'pdf' ? 'Full Lecture Notes (PDF)' : 'Interactive Jupyter Notebook'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    {resource.type === 'ipynb' && resource.colabUrl ? (
                      <>
                        <a 
                          href={resource.colabUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#8c1515] text-white rounded-xl text-sm font-bold hover:bg-[#8c1515]/90 shadow-sm transition-all"
                        >
                          <HiExternalLink className="text-lg" />
                          <span>Run in Colab</span>
                        </a>
                        <a 
                          href={resource.downloadUrl}
                          download
                          className="flex items-center gap-1.5 px-4 py-2 border border-stone-200 text-stone-600 rounded-xl text-sm font-bold hover:border-[#8c1515] hover:text-[#8c1515] transition-all"
                        >
                          <HiDocumentDownload className="text-lg" />
                          <span>Download .ipynb</span>
                        </a>
                      </>
                    ) : (
                      <a 
                        href={resource.downloadUrl}
                        download
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#8c1515]/10 text-[#8c1515] rounded-xl text-sm font-bold hover:bg-[#8c1515] hover:text-white transition-all"
                      >
                        <HiDocumentDownload className="text-lg" />
                        <span>Download PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-stone-500 italic">No course resources available yet.</div>
          )}
        </div>
      </section>

      {/* Section 2: Honours Projects Guided */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">Honours Projects Guided</h2>
        <div className="space-y-6">
          {honoursProjects && honoursProjects.length > 0 ? (
            honoursProjects.map((project) => {
              const studentFirstName = project.student_name.split(' ')[0];
              const thesisFilename = `${studentFirstName}.pdf`;
              const hasThesis = availableTheses.includes(thesisFilename);

              return (
                <div key={project.id} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-[#8c1515]/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-stone-800 mb-1">{project.project_title}</h3>
                      <p className="text-[#8c1515] font-semibold">Student: {project.student_name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold self-start md:self-auto">
                        {project.year}
                      </span>
                      {hasThesis && (
                        <a 
                          href={`/theses/${thesisFilename}`}
                          download
                          className="flex items-center gap-1.5 px-3 py-1 bg-[#8c1515]/10 text-[#8c1515] rounded-full text-xs font-bold hover:bg-[#8c1515] hover:text-white transition-colors"
                        >
                          <HiDocumentDownload className="text-base flex-shrink-0" />
                          <span>Thesis PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                  {project.description && <p className="text-stone-600 text-sm leading-relaxed">{project.description}</p>}
                </div>
              );
            })
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
