import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Tipe Data Laporan Suhu Warga
interface LaporanSuhu {
  id: number;
  lokasi: string;
  suhu: string;
  kondisi: string;
  waktu: string;
}

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

function Home() {
  // State Laporan
  const [daftarLaporan, setDaftarLaporan] = useState<LaporanSuhu[]>([
    { id: 1, lokasi: 'Alun-Alun Kota', suhu: '33°C', kondisi: 'Panas Terik & Minim Pohon', waktu: '10 Menit lalu' },
    { id: 2, lokasi: 'Taman Kota Purwokerto', suhu: '28°C', kondisi: 'Sejuk, Banyak Vegetasi', waktu: '30 Menit lalu' },
  ]);

  // State Form Input
  const [lokasi, setLokasi] = useState('');
  const [suhu, setSuhu] = useState('');
  const [kondisi, setKondisi] = useState('Panas Terik & Gersang');
  const [pesanSukses, setPesanSukses] = useState('');

  // Fungsi Scroll Elemen
  const handleScroll = (id: string) => {
    if (id === 'pantauan') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handler Laporan
  const handleSubmitLaporan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lokasi || !suhu) return;

    const laporanBaru: LaporanSuhu = {
      id: Date.now(),
      lokasi,
      suhu: `${suhu}°C`,
      kondisi,
      waktu: 'Baru saja',
    };

    setDaftarLaporan([laporanBaru, ...daftarLaporan]);
    setLokasi('');
    setSuhu('');
    setPesanSukses('Terimakasih! Laporan suhu lingkungan Anda berhasil dikirim.');
    
    setTimeout(() => setPesanSukses(''), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* 1. HERO / PANTAUAN */}
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
          <button
            type="button"
            onClick={() => handleScroll('dashboard')}
            className="bg-[#176b58] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#135747] transition-all cursor-pointer border-0"
          >
            Lihat pantauan panas ↗
          </button>
          <button
            type="button"
            onClick={() => handleScroll('laporan')}
            className="border border-[#e0ebe5] bg-white px-6 py-3 rounded-xl font-bold text-[#143b35] hover:bg-gray-50 transition-all cursor-pointer"
          >
            + Laporkan kondisi
          </button>
        </div>
      </section>

      {/* 2. FITUR UTAMA */}
      <section id="fitur" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Fitur Utama Sejuk_kota</h2>
        <p className="text-[#526b64] max-w-2xl mb-8">
          Sistem informasi lingkungan interaktif berbasis partisipasi warga untuk pemantauan suhu dan mikroiklim daerah perkotaan.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <div className="text-2xl mb-2">🗺️</div>
            <h3 className="font-bold text-lg mb-2">Pemetaan Suhu Real-time</h3>
            <p className="text-sm text-[#526b64]">Melihat area pulau panas perkotaan (*urban heat island*) secara visual.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <div className="text-2xl mb-2">📢</div>
            <h3 className="font-bold text-lg mb-2">Pelaporan Warga</h3>
            <p className="text-sm text-[#526b64]">Masyarakat dapat mengunggah laporan suhu lingkungan sekitar secara langsung.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm">
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-bold text-lg mb-2">Rekomendasi Hijau</h3>
            <p className="text-sm text-[#526b64]">Solusi penanaman pohon dan penataan vegetasi kawasan lokal.</p>
          </div>
        </div>
      </section>

      {/* 3. DASHBOARD MONITORING */}
      <section id="dashboard" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Dashboard Suhu Kota</h2>
        <p className="text-[#526b64] mb-6">Ringkasan kondisi iklim mikro kawasan perkotaan terkini.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#176b58] text-white p-6 rounded-2xl shadow-sm">
            <p className="text-xs font-medium text-[#a3e2ca] mb-1">Rata-Rata Suhu Kota</p>
            <p className="text-3xl font-extrabold">31.2°C</p>
            <p className="text-xs text-[#d0f2e5] mt-2">↑ 1.5°C lebih tinggi dari rata-rata bulanan</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#e0ebe5] shadow-sm">
            <p className="text-xs font-medium text-[#526b64] mb-1">Kawasan Panas Tertinggi</p>
            <p className="text-2xl font-bold text-[#143b35]">Pusat Perdagangan</p>
            <p className="text-xs text-red-500 font-semibold mt-2">Suhu Muncak: 35.8°C</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#e0ebe5] shadow-sm">
            <p className="text-xs font-medium text-[#526b64] mb-1">Kawasan Tersejuk</p>
            <p className="text-2xl font-bold text-[#143b35]">Hutan Kota & Taman</p>
            <p className="text-xs text-emerald-600 font-semibold mt-2">Suhu Rata-rata: 26.5°C</p>
          </div>
        </div>
      </section>

      {/* 4. FORMULIR LAPOR SUHU */}
      <section id="laporan" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Formulir Lapor Suhu Warga</h2>
        <p className="text-[#526b64] max-w-2xl mb-8">
          Kirimkan data suhu di sekitar Anda untuk membantu pemetaan zona mikroiklim kota.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Input */}
          <form onSubmit={handleSubmitLaporan} className="p-8 bg-white rounded-2xl border border-[#e0ebe5] shadow-sm space-y-4">
            {pesanSukses && (
              <div className="p-3 bg-[#dff4e9] text-[#176b58] text-sm font-semibold rounded-xl">
                {pesanSukses}
              </div>
            )}
            <div>
              <label className="block text-sm font-bold mb-1 text-[#143b35]">Lokasi / Nama Kawasan</label>
              <input
                type="text"
                required
                placeholder="Contoh: Jl. Ahmad Yani / Depan Kampus"
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0ebe5] focus:outline-none focus:border-[#176b58] text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1 text-[#143b35]">Suhu Terukur (°C)</label>
              <input
                type="number"
                required
                placeholder="Contoh: 32"
                value={suhu}
                onChange={(e) => setSuhu(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0ebe5] focus:outline-none focus:border-[#176b58] text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1 text-[#143b35]">Kondisi Lingkungan</label>
              <select
                value={kondisi}
                onChange={(e) => setKondisi(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0ebe5] focus:outline-none focus:border-[#176b58] text-sm bg-white"
              >
                <option value="Panas Terik & Gersang">Panas Terik & Gersang</option>
                <option value="Panas Cukup Lembap">Panas Cukup Lembap</option>
                <option value="Cukup Adem (Banyak Pohon)">Cukup Adem (Banyak Pohon)</option>
                <option value="Sejuk & Teduh">Sejuk & Teduh</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#176b58] hover:bg-[#135747] text-white font-bold py-3 rounded-xl transition-all cursor-pointer border-0 text-sm shadow-md"
            >
              Kirim Laporan Warga 🚀
            </button>
          </form>

          {/* Daftar Laporan */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#143b35]">Laporan Warga Terbaru</h3>
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
              {daftarLaporan.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-xl border border-[#e0ebe5] flex justify-between items-center shadow-xs">
                  <div>
                    <h4 className="font-bold text-sm text-[#143b35]">{item.lokasi}</h4>
                    <p className="text-xs text-[#526b64]">{item.kondisi}</p>
                    <span className="text-[10px] text-gray-400">{item.waktu}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#f0f9f5] text-[#176b58] font-black text-sm rounded-lg border border-[#d2eadc]">
                    {item.suhu}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. REKOMENDASI */}
      <section id="rekomendasi" className="pt-8 border-t border-[#e0ebe5] scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Rekomendasi Aksi Awal</h2>
        <p className="text-[#526b64] max-w-2xl mb-6">
          Langkah mudah meredam panas di lingkungan sekitar kawasan perkotaan.
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#526b64] bg-white p-6 rounded-2xl border border-[#e0ebe5]">
          <li>Menambah tutupan vegetasi atau pot tanaman di area terbuka rumah & perkantoran.</li>
          <li>Menggunakan material atap atau cat berwarna terang yang memantulkan panas surya.</li>
          <li>Memperbanyak area resapan air hujan dan pembuatan lubang biopori.</li>
        </ul>
      </section>
    </div>
  );
}