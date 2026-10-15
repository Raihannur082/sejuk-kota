import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[76px] bg-white/90 backdrop-blur-md border-b border-[#e0ebe5] px-6 lg:px-12 flex items-center justify-between">
      {/* Brand / Logo (Sisi Kiri) */}
      <Link to="/" className="flex items-center gap-2 text-[#143b35] font-extrabold text-xl tracking-tight no-underline">
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1c8069] to-[#9dd9ad] grid place-items-center text-white text-xl shadow-sm">
          ♧
        </span>
        <span className="text-xl font-black">
          sejuk<span className="text-[#34836a]">kota</span>
        </span>
      </Link>

      {/* Tombol Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center bg-white border border-[#e0ebe5] rounded-lg px-3 py-1.5 text-[#143b35] font-bold text-lg cursor-pointer"
        aria-label="Buka navigasi"
      >
        ☰
      </button>

      {/* Navigasi Menu (Sisi Kanan) */}
      <nav
        className={`md:flex items-center gap-6 absolute md:static top-[76px] left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-[#e0ebe5] p-6 md:p-0 shadow-lg md:shadow-none transition-all ${
          isOpen ? 'flex flex-col items-start gap-4' : 'hidden'
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58] transition-colors"
        >
          Pantauan
        </Link>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58] transition-colors"
        >
          Fitur
        </Link>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58] transition-colors"
        >
          Lapor Suhu
        </Link>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[#526b64] no-underline text-sm font-semibold hover:text-[#176b58] transition-colors"
        >
          Rekomendasi
        </Link>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="rounded-xl bg-[#176b58] hover:bg-[#135747] text-white font-bold px-4 py-2.5 shadow-md shadow-[#176b58]/20 no-underline text-sm transition-all block text-center"
        >
          Jelajahi dashboard ↗
        </Link>
      </nav>
    </header>
  );
}