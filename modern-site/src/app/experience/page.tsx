import { supabase } from '@/lib/supabase';

export default async function Experience() {
  const { data: experience } = await supabase
    .from('experience')
    .select('*')
    .order('sort_order', { ascending: true });

  return (
    <div>
      <h1 className="section-title">Professional Experience</h1>
      <div className="space-y-8">
        {experience?.map((item) => (
          <div key={item.id} className="flex justify-between items-start border-b border-stone-200 pb-6 last:border-0">
            <div>
              <h3 className="text-xl font-bold text-stone-800">{item.role}</h3>
              <p className="text-lg text-stone-600">{item.organization}</p>
              <p className="text-sm text-stone-500 mt-1">{item.location}</p>
            </div>
            <div className="text-right text-stone-500 font-medium">
              {item.start_date} — {item.end_date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
