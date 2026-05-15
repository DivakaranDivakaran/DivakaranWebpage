'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-[#8c1515]">
          Divakaran D
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-stone-600 hover:text-[#8c1515] transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            <li><Link href="/" className="hover:text-[#8c1515] transition-colors">About</Link></li>
            <li><Link href="/publications" className="hover:text-[#8c1515] transition-colors">Publications</Link></li>
            <li><Link href="/teaching" className="hover:text-[#8c1515] transition-colors">Teaching</Link></li>
            <li><Link href="/public-engagement" className="hover:text-[#8c1515] transition-colors">Public Engagement</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-stone-200 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col py-4 px-6 space-y-4 text-sm font-medium uppercase tracking-wider text-stone-600">
            <li>
              <Link 
                href="/" 
                className="block hover:text-[#8c1515] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/publications" 
                className="block hover:text-[#8c1515] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link 
                href="/teaching" 
                className="block hover:text-[#8c1515] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Teaching
              </Link>
            </li>
            <li>
              <Link 
                href="/public-engagement" 
                className="block hover:text-[#8c1515] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Public Engagement
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
