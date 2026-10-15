import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#143b35]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Komponen Halaman Utama (Home)
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section id="pantauan" className="mb-16">
        <span className="inline-block px-3 py-1 bg-[#dff4e9] text-[#176b58] text-xs font-bold rounded-full mb-4">
          ● INOVASI MITIGASI PANAS PERKOTAAN
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#143b35]">
          Kota lebih sejuk,<br />dimulai dari data.
        </h1>
        <p className="text-[#526b64] text-lg max-w-2xl mb-8">
          Kenali kawasan yang berisiko panas, bagikan kondisi lingkungan, dan temukan langkah sederhana untuk membuat kota lebih nyaman bagi semua.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#pantauan" className="bg-[#176b58] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#135747]">
            Lihat pantauan panas ↗
          </a>
          <a href="#laporan" className="border border-[#e0ebe5] bg-white px-6 py-3 rounded-xl font-bold text-[#143b35] hover:bg-gray-50">
            + Laporkan kondisi
          </a>
        </div>
      </section>
    </div>
  );
}