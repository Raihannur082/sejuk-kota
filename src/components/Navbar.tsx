import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi scroll presisi untuk semua tombol navbar
  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (id === 'pantauan') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[76px] bg-white/90 backdrop-blur-md border-b border-[#e0ebe5] px-6 lg:px-12 flex items-center justify-between">
      {/* Brand / Logo */}
      <Link 
        to="/" 
        onClick={() => handleScroll('pantauan')}
        className="flex items-center gap-2 text-[#143b35] font-extrabold text-xl tracking-tight no-underline"
      >
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

      {/* Navigasi Menu */}
      <nav
        className={`md:flex items-center gap-6 absolute md:static top-[76px] left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-[#e0ebe5] p-6 md:p-0 shadow-lg md:shadow-none transition-all ${
          isOpen ? 'flex flex-col items-start gap-4' : 'hidden'
        }`}
      >
        <button
          type="button"
          onClick={() => handleScroll('pantauan')}
          className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          Pantauan
        </button>
        <button
          type="button"
          onClick={() => handleScroll('fitur')}
          className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          Fitur
        </button>
        <button
          type="button"
          onClick={() => handleScroll('laporan')}
          className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          Lapor Suhu
        </button>
        <button
          type="button"
          onClick={() => handleScroll('rekomendasi')}
          className="text-[#526b64] hover:text-[#176b58] font-semibold text-sm transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          Rekomendasi
        </button>
        <button
          type="button"
          onClick={() => handleScroll('dashboard')}
          className="rounded-xl bg-[#176b58] hover:bg-[#135747] text-white font-bold px-4 py-2.5 shadow-md shadow-[#176b58]/20 text-sm transition-all block text-center cursor-pointer border-0"
        >
          Jelajahi dashboard ↗
        </button>
      </nav>
    </header>
  );
}