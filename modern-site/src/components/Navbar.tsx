import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-[#8c1515]">
          Divakaran D
        </Link>
        <nav>
          <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            <li><Link href="/" className="hover:text-[#8c1515] transition-colors">About</Link></li>
            <li><Link href="/experience" className="hover:text-[#8c1515] transition-colors">Experience</Link></li>
            <li><Link href="/publications" className="hover:text-[#8c1515] transition-colors">Publications</Link></li>
            <li><Link href="/courses" className="hover:text-[#8c1515] transition-colors">Courses</Link></li>
            <li><Link href="/talks" className="hover:text-[#8c1515] transition-colors">Talks</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
