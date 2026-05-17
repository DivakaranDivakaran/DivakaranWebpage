import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { FaEnvelope, FaGraduationCap, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default async function Home() {
  const { data: profile } = await supabase.from('profiles').select('*').single();
  const { data: experience } = await supabase
    .from('experience')
    .select('*')
    .order('sort_order', { ascending: true });

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="block">
      {/* Profile Image & Socials - Floating on Desktop */}
      <div className="w-full md:w-72 md:float-right md:ml-12 md:mb-8 mb-12">
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
          <Image 
            src="/avatar.jpg" 
            alt={profile.full_name} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mt-6 flex justify-center space-x-6 text-xl text-stone-600">
          <a href={`mailto:${profile.email}`} className="hover:text-[#8c1515] transition-colors"><FaEnvelope /></a>
          <a href={profile.google_scholar_url} target="_blank" className="hover:text-[#8c1515] transition-colors"><FaGraduationCap /></a>
          <a href={profile.linkedin_url} target="_blank" className="hover:text-[#8c1515] transition-colors"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@divakarand" target="_blank" className="hover:text-[#8c1515] transition-colors"><FaYoutube /></a>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="content-text">
        <h1 className="text-5xl font-bold text-[#8c1515] mb-2">{profile.full_name}</h1>
        <p className="text-xl text-stone-600 mb-8">{profile.title}</p>
        
        <div className="prose prose-stone max-w-none mb-16">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p className="text-lg leading-relaxed text-stone-700 whitespace-pre-wrap">
            {profile.bio}
          </p>
        </div>

        <div className="clear-none">
          <h2 className="text-2xl font-bold mb-8 text-stone-800 border-b border-stone-200 pb-2">Professional Experience</h2>
          <div className="space-y-8">
            {experience?.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:justify-between items-start border-b border-stone-100 pb-6 last:border-0">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl font-bold text-stone-800">{item.role}</h3>
                  <p className="text-lg text-stone-600">{item.organization}</p>
                  <p className="text-sm text-stone-500 mt-1">{item.location}</p>
                </div>
                <div className="text-stone-500 font-medium whitespace-nowrap">
                  {item.start_date} — {item.end_date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
