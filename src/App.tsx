import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#143b35] scroll-smooth">
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
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* 1. SECTION PANTAUAN */}
      <section id="pantauan" className="pt-4 scroll-mt-28">
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
          <a href="#pantauan" className="bg-[#176b58] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#135747] transition-all">
            Lihat pantauan panas ↗
          </a>
          <a href="#laporan" className="border border-[#e0ebe5] bg-white px-6 py-3 rounded-xl font-bold text-[#143b35] hover:bg-gray-50 transition-all">
            + Laporkan kondisi
          </a>
        </div>
      </section>

      {/* 2. SECTION FITUR */}
      <section id="fitur" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Fitur Utama Sejuk_kota</h2>
        <p className="text-[#526b64] max-w-2xl mb-6">
          Sistem informasi lingkungan interaktif berbasis partisipasi warga untuk pemantauan suhu dan mikroiklim daerah perkotaan.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <h3 className="font-bold text-lg mb-2">Pemetaaan Suhu Real-time</h3>
            <p className="text-sm text-[#526b64]">Melihat area pulau panas perkotaan (*urban heat island*) secara visual.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <h3 className="font-bold text-lg mb-2">Pelaporan Warga</h3>
            <p className="text-sm text-[#526b64]">Masyarakat dapat mengunggah laporan suhu lingkungan sekitar secara langsung.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <h3 className="font-bold text-lg mb-2">Rekomendasi Hijau</h3>
            <p className="text-sm text-[#526b64]">Solusi penanaman pohon dan penataan vegetasi kawasan lokal.</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION LAPOR SUHU */}
      <section id="laporan" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Lapor Suhu Lingkungan</h2>
        <p className="text-[#526b64] max-w-2xl mb-6">
          Bagikan kondisi suhu di sekitar tempat tinggalmu untuk membantu pendataan kawasan lingkungan.
        </p>
        <div className="p-8 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm max-w-xl">
          <p className="font-semibold text-sm mb-4">Formulir partisipasi warga siap digunakan.</p>
          <a href="#laporan" className="inline-block bg-[#176b58] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#135747]">
            Buat Laporan Baru +
          </a>
        </div>
      </section>

      {/* 4. SECTION REKOMENDASI */}
      <section id="rekomendasi" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Rekomendasi Aksi Awal</h2>
        <p className="text-[#526b64] max-w-2xl mb-6">
          Langkah mudah meredam panas di lingkungan sekitar kawasan perkotaan.
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#526b64]">
          <li>Menambah tutupan vegetasi atau pot tanaman di area terbuka.</li>
          <li>Menggunakan material atap atau cat yang memantulkan panas.</li>
          <li>Memperbanyak area resapan air hujan.</li>
        </ul>
      </section>
    </div>
  );
}