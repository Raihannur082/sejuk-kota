import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white/90 backdrop-blur-md border-b border-[#e0ebe5] px-6 lg:px-16 flex items-center justify-between">
      {/* Brand / Logo */}
      <Link to="/" className="flex items-center gap-3 text-[#143b35] font-extrabold text-xl tracking-tight no-underline">
        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1c8069] to-[#9dd9ad] grid place-items-center text-white text-xl shadow-md">
          ♧
        </span>
        <span>sejuk<span className="text-[#34836a]">kota</span></span>
      </Link>
      
      {/* Tombol Hamburger Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden flex items-center justify-center bg-white border border-[#e0ebe5] rounded-lg p-2 text-[#143b35] font-bold"
        aria-label="Buka navigasi"
      >
        ☰
      </button>

      {/* Navigasi Link */}
      <nav className={`md:flex items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-[#e0ebe5] p-6 md:p-0 transition-all ${isOpen ? 'flex flex-col items-start' : 'hidden'}`}>
        <a href="#pantauan" onClick={() => setIsOpen(false)} className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58]">Pantauan</a>
        <a href="#fitur" onClick={() => setIsOpen(false)} className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58]">Fitur</a>
        <a href="#laporan" onClick={() => setIsOpen(false)} className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58]">Lapor Suhu</a>
        <a href="#rekomendasi" onClick={() => setIsOpen(false)} className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58]">Rekomendasi</a>
        <a href="#pantauan" onClick={() => setIsOpen(false)} className="rounded-xl bg-[#176b58] hover:bg-[#135747] text-white font-bold px-5 py-2.5 shadow-md no-underline text-sm transition-all">Jelajahi dashboard ↗</a>
      </nav>
    </header>
  );
}