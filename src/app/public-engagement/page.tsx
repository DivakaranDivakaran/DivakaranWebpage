import { supabase } from '@/lib/supabase';
import { FaYoutube } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';
import fs from 'fs';
import path from 'path';

interface OutreachItem {
  id: string;
  title: string;
  date: string;
  rawDate: Date;
  description: string;
  pdfUrl: string;
}

export default async function Talks() {
  const { data: talks } = await supabase
    .from('talks')
    .select('*')
    .order('created_at', { ascending: false });

  const outreachDir = path.join(process.cwd(), 'public', 'engagement');
  const outreachItems: OutreachItem[] = [];

  try {
    if (fs.existsSync(outreachDir)) {
      const folders = fs.readdirSync(outreachDir);
      for (const folder of folders) {
        const folderPath = path.join(outreachDir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
          const txtFile = path.join(folderPath, `${folder}.txt`);
          const pdfFile = `${folder}.pdf`;
          if (fs.existsSync(txtFile)) {
            const txtContent = fs.readFileSync(txtFile, 'utf-8');
            let title = folder.replace(/_/g, ' ');
            let date = '';
            let description = '';

            for (const line of txtContent.split('\n')) {
              if (line.startsWith('Title:')) title = line.replace('Title:', '').trim();
              if (line.startsWith('Date:')) date = line.replace('Date:', '').trim();
              if (line.startsWith('Description:')) description = line.replace('Description:', '').trim();
            }

            // Parse date for sorting (format DD/MM/YYYY)
            let rawDate = new Date(0);
            if (date) {
              const parts = date.split('/');
              if (parts.length === 3) {
                rawDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
              }
            }

            outreachItems.push({
              id: folder,
              title,
              date,
              rawDate,
              description,
              pdfUrl: `/engagement/${folder}/${pdfFile}`
            });
          }
        }
      }
    }
  } catch (err) {
    console.error("Error reading engagement directory:", err);
  }

  outreachItems.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());

  return (
    <div className="space-y-16">
      <h1 className="section-title">Public Engagement & Outreach</h1>

      {/* Section 1: Articles & Expository Notes */}
      {outreachItems.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">
            Articles & Expository Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outreachItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#8c1515]/30 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-stone-800 group-hover:text-[#8c1515] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-stone-100 text-stone-600 rounded-full flex-shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a 
                  href={item.pdfUrl}
                  download
                  className="flex items-center gap-2 self-start px-4 py-2 bg-[#8c1515]/10 text-[#8c1515] rounded-xl text-sm font-bold hover:bg-[#8c1515] hover:text-white transition-all"
                >
                  <HiDocumentDownload className="text-lg flex-shrink-0" />
                  <span>Download Article (PDF)</span>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Talks & Lectures */}
      <section>
        <h2 className="text-3xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2">
          Recorded Talks & Public Lectures
        </h2>
        <div className="space-y-8">
          {talks?.map((talk) => (
            <div key={talk.id} className="card">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">{talk.title}</h3>
              <div className="flex gap-4 text-sm text-stone-500 mb-4">
                <span>{talk.date}</span>
                <span>•</span>
                <span>{talk.location}</span>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {talk.description}
              </p>
              {talk.video_url && (
                <a 
                  href={talk.video_url} 
                  target="_blank" 
                  className="flex items-center justify-center sm:inline-flex sm:justify-start gap-2 text-[#8c1515] hover:text-[#b31b1b] font-bold transition-colors border border-[#8c1515] sm:border-0 p-3 sm:p-0 rounded-lg sm:rounded-none"
                >
                  <FaYoutube className="text-xl" /> Watch on YouTube
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
