import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white/90 backdrop-blur-md border-b border-[#e0ebe5] px-6 lg:px-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-[#143b35] font-extrabold text-xl no-underline">
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1c8069] to-[#9dd9ad] grid place-items-center text-white text-xl shadow-sm">
          ♧
        </span>
        <span>sejuk<span className="text-[#34836a]">kota</span></span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden border border-[#e0ebe5] rounded-lg px-3 py-1 text-[#143b35]"
      >
        ☰
      </button>

      <nav className={`md:flex items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 ${isOpen ? 'flex flex-col' : 'hidden'}`}>
        <a href="#pantauan" className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm">Pantauan</a>
        <a href="#fitur" className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm">Fitur</a>
        <a href="#laporan" className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm">Lapor Suhu</a>
        <a href="#rekomendasi" className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm">Rekomendasi</a>
        <a href="#pantauan" className="bg-[#176b58] text-white font-bold px-4 py-2 rounded-xl text-sm">Jelajahi dashboard ↗</a>
      </nav>
    </header>
  );
}