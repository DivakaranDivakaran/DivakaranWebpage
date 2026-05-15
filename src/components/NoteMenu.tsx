'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

interface Note {
  id: string;
  title: string;
  url: string;
}

interface NoteMenuProps {
  courseName: string;
  notes: Note[];
  currentSlug: string;
}

export default function NoteMenu({ courseName, notes, currentSlug }: NoteMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#8c1515] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-2 font-bold"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          <span className="hidden md:inline mr-1 text-sm uppercase tracking-widest">Chapters</span>
        </button>
      </div>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[51] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[52] transform transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">Course Chapters</h4>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-[#8c1515]">
              <HiX className="text-2xl" />
            </button>
          </div>
          
          <h3 className="text-xl font-bold text-stone-800 mb-6 border-b border-stone-100 pb-2">{courseName}</h3>
          
          <div className="space-y-2">
            {notes.map((note) => (
              <Link 
                key={note.id} 
                href={note.url}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm transition-all ${
                  note.url.endsWith(currentSlug) 
                  ? 'bg-[#8c1515] text-white font-bold shadow-md' 
                  : 'text-stone-600 hover:bg-stone-50 hover:text-[#8c1515]'
                }`}
              >
                {note.title.split(':').slice(1).join(':').trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
