import { supabase } from '@/lib/supabase';
import { FaYoutube } from 'react-icons/fa';

export default async function Talks() {
  const { data: talks } = await supabase
    .from('talks')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 className="section-title">Public Engagement</h1>
      <div className="space-y-12">
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
    </div>
  );
}
