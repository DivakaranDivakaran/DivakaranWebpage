import { supabase } from '@/lib/supabase';

export default async function Publications() {
  const { data: publications } = await supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false });

  return (
    <div>
      <h1 className="section-title">Publications</h1>
      <div className="space-y-12">
        {publications?.map((pub) => (
          <div key={pub.id} className="group border-b border-stone-100 pb-8 last:border-0">
            <h3 className="text-xl font-bold text-stone-800 group-hover:text-[#8c1515] transition-colors mb-1">
              {pub.title}
            </h3>
            <p className="text-stone-600 mb-2 leading-relaxed">{pub.authors}</p>
            <p className="text-sm text-stone-500 italic mb-4">
              {pub.venue}, {pub.year}
            </p>
            <div className="flex gap-4 text-sm font-medium">
              {pub.pdf_url && (
                <a href={pub.pdf_url} target="_blank" className="text-[#8c1515] hover:underline flex items-center gap-1">
                   [PDF]
                </a>
              )}
              {pub.doi_url && (
                <a href={pub.doi_url} target="_blank" className="text-[#8c1515] hover:underline flex items-center gap-1">
                   [DOI]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
