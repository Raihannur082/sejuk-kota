import React, { useState } from 'react';

export default function Home() {
  const [reportCount, setReportCount] = useState(0);
  const [notice, setNotice] = useState('');
  
  // State untuk form laporan
  const [area, setArea] = useState('');
  const [condition, setCondition] = useState('');
  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');

  // State untuk Resep Sejuk
  const [placeType, setPlaceType] = useState('home');
  const [budget, setBudget] = useState('simple');

  // State untuk Modal Fitur
  const [modalData, setModalData] = useState<{ title: string; body: string; list: string[]; href: string } | null>(null);

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCount = reportCount + 1;
    setReportCount(newCount);
    setNotice(`Laporan demo #${newCount} untuk kawasan “${area}” berhasil ditambahkan pada tampilan sesi ini. Kondisi: ${condition}. Waktu: ${time}.${temp !== '' ? ' Suhu terukur: ' + temp + ' °C.' : ''} Data belum dikirim ke server.`);
    setArea('');
    setCondition('');
    setTemp('');
    setTime('');
    setDetails('');
  };

  const featureModals: Record<string, { title: string; body: string; list: string[]; href: string }> = {
    map: {
      title: 'Peta Panas',
      body: 'Peta Panas membantu mengenali pola suhu permukaan dan kondisi vegetasi. Data satelit tidak sama dengan suhu udara yang dirasakan manusia.',
      list: ['Gunakan citra satelit dan pengolahan spasial yang tervalidasi.', 'Tampilkan waktu perekaman dan sumber data.', 'Verifikasi kondisi di lapangan sebelum menentukan intervensi.'],
      href: '#pantauan'
    },
    report: {
      title: 'Lapor Suhu',
      body: 'Laporan warga memberi konteks kondisi nyata di suatu lokasi. Pengukuran suhu sebaiknya mencantumkan alat dan cara pengukuran.',
      list: ['Catat lokasi, waktu, kondisi, dan alat ukur jika ada.', 'Hindari mengisi angka suhu berdasarkan perkiraan.', 'Pada implementasi nyata, laporan perlu moderasi dan perlindungan data pribadi.'],
      href: '#laporan'
    },
    recipe: {
      title: 'Resep Sejuk',
      body: 'Rekomendasi disesuaikan dengan tipe bangunan atau kawasan, kemampuan biaya, dan kelayakan penerapan.',
      list: ['Langkah sederhana: hidrasi, tempat teduh, dan pengaturan aktivitas.', 'Langkah kawasan: penanaman pohon dan penambahan peneduh yang sesuai.', 'Intervensi bangunan perlu mempertimbangkan struktur, biaya, dan perawatan.'],
      href: '#rekomendasi'
    },
    alert: {
      title: 'Siaga Panas',
      body: 'Fitur ini dirancang untuk menyampaikan kewaspadaan saat parameter panas terpenuhi. Prototipe ini belum terhubung ke sistem notifikasi atau data resmi.',
      list: ['Ambang peringatan harus ditetapkan bersama ahli dan instansi terkait.', 'Sertakan langkah perlindungan yang mudah dipahami.', 'Informasi aplikasi melengkapi, bukan menggantikan, peringatan resmi.'],
      href: '#rekomendasi'
    },
    priority: {
      title: 'Prioritas Sejuk',
      body: 'Prioritas Sejuk membantu mengurutkan kawasan yang perlu diperiksa atau ditangani lebih dahulu dengan mempertimbangkan beberapa indikator.',
      list: ['Pertimbangkan indikasi panas, vegetasi, paparan, dan laporan warga.', 'Jangan abaikan kebutuhan wilayah yang datanya masih terbatas.', 'Evaluasi hasil setelah tindakan dilakukan.'],
      href: '#pantauan'
    }
  };

  const recipesData: Record<string, Record<string, [string, string, string][]>> = {
    home: {
      simple: [
        ['💧', 'Jaga hidrasi', 'Sediakan air minum dan minum berkala saat cuaca panas.'],
        ['🪟', 'Optimalkan ventilasi', 'Buka aliran udara saat kondisi luar mendukung dan gunakan peneduh.'],
        ['🪴', 'Tambah vegetasi', 'Pilih tanaman yang sesuai ruang, akses air, dan perawatan.']
      ],
      medium: [
        ['🌳', 'Peneduh halaman', 'Tanam pohon yang sesuai lokasi dan jarak aman dari bangunan.'],
        ['🏠', 'Evaluasi atap', 'Pertimbangkan pelapis atau material yang mengurangi penyerapan panas.'],
        ['🪟', 'Perbaiki sirkulasi', 'Evaluasi ventilasi dan penghalang sinar matahari langsung.']
      ],
      area: [
        ['🌿', 'Ruang hijau bersama', 'Koordinasikan penanaman dan perawatan dengan warga.'],
        ['🧱', 'Audit lingkungan', 'Petakan permukaan keras dan lokasi yang minim naungan.'],
        ['🤝', 'Rencana lingkungan', 'Tentukan tindakan yang sesuai kondisi setempat.']
      ]
    },
    school: {
      simple: [
        ['💧', 'Titik air minum', 'Pastikan akses air minum dan jeda istirahat tersedia.'],
        ['⛱️', 'Atur jadwal luar ruang', 'Hindari kegiatan berat saat kondisi paling panas.'],
        ['🌳', 'Manfaatkan teduh', 'Gunakan area teduh untuk waktu istirahat.']
      ],
      medium: [
        ['🌳', 'Koridor teduh', 'Tambah peneduh di jalur siswa dengan pertimbangan keselamatan.'],
        ['🏫', 'Ruang sejuk', 'Sediakan ruang istirahat berventilasi baik.'],
        ['📋', 'Prosedur cuaca panas', 'Susun prosedur kegiatan luar ruang dan komunikasi orang tua.']
      ],
      area: [
        ['🗺️', 'Peta halaman sekolah', 'Identifikasi area panas dan rute teduh.'],
        ['🤝', 'Koordinasi sekolah', 'Libatkan pengelola, orang tua, dan layanan kesehatan setempat.'],
        ['🌱', 'Program penghijauan', 'Rencanakan penanaman dan perawatan jangka panjang.']
      ]
    },
    street: {
      simple: [
        ['🧢', 'Lindungi diri', 'Gunakan pelindung dari matahari dan cari tempat teduh.'],
        ['💧', 'Akses air', 'Kenali lokasi air minum dan tempat istirahat terdekat.'],
        ['🚶', 'Pilih waktu', 'Jika memungkinkan, lakukan perjalanan pada waktu yang lebih sejuk.']
      ],
      medium: [
        ['⛱️', 'Tambahkan naungan', 'Identifikasi halte atau halte tunggu yang memerlukan peneduh.'],
        ['🌳', 'Pohon jalan', 'Pilih jenis dan lokasi pohon sesuai utilitas serta keselamatan.'],
        ['🪑', 'Tempat istirahat', 'Sediakan titik istirahat di lokasi ramai bila memungkinkan.']
      ],
      area: [
        ['🗺️', 'Audit rute pejalan kaki', 'Petakan jalur tanpa naungan dan titik aktivitas tinggi.'],
        ['🏙️', 'Rencana ruang publik', 'Koordinasikan peneduh dengan pengelola kawasan.'],
        ['📊', 'Pantau perubahan', 'Tinjau kondisi sebelum dan setelah intervensi.']
      ]
    },
    market: {
      simple: [
        ['💧', 'Air minum', 'Pastikan pedagang dan pengunjung mudah mengakses air minum.'],
        ['⛱️', 'Gunakan naungan', 'Atur area tunggu dan aktivitas agar terlindung dari matahari.'],
        ['🕒', 'Atur jeda', 'Beri jeda istirahat saat panas meningkat.']
      ],
      medium: [
        ['🌬️', 'Perbaiki sirkulasi', 'Pastikan jalur udara tidak terhalang dan ruang tetap aman.'],
        ['🌳', 'Naungi area terbuka', 'Pertimbangkan kanopi atau vegetasi yang sesuai.'],
        ['📣', 'Edukasi pedagang', 'Bagikan informasi perlindungan panas yang mudah dipahami.']
      ],
      area: [
        ['🗺️', 'Pemetaan titik panas', 'Identifikasi area bongkar muat, parkir, dan antrean.'],
        ['🤝', 'Koordinasi pengelola', 'Susun rencana peneduh dan akses air bersama pedagang.'],
        ['📈', 'Evaluasi rutin', 'Tinjau keluhan dan kondisi lapangan secara berkala.']
      ]
    },
    work: {
      simple: [
        ['💧', 'Hidrasi berkala', 'Sediakan air minum dan dorong pekerja minum secara teratur.'],
        ['🧢', 'Perlindungan matahari', 'Gunakan pelindung yang sesuai dan cari tempat teduh saat jeda.'],
        ['🕒', 'Jeda kerja', 'Sesuaikan ritme kerja dan istirahat dengan kondisi panas.']
      ],
      medium: [
        ['⛱️', 'Titik istirahat teduh', 'Sediakan tempat istirahat yang aman dan berventilasi baik.'],
        ['📋', 'Pantau kondisi', 'Kenali gejala gangguan akibat panas dan prosedur respons.'],
        ['🗓️', 'Atur jadwal', 'Jika memungkinkan, hindari pekerjaan berat pada waktu terpanas.']
      ],
      area: [
        ['🧑‍⚕️', 'Prosedur keselamatan', 'Koordinasikan penilaian risiko dan rencana respons dengan petugas K3.'],
        ['🌡️', 'Pengukuran yang tepat', 'Gunakan alat dan metode yang sesuai untuk konteks kerja.'],
        ['🤝', 'Evaluasi risiko', 'Libatkan pekerja dan pengelola untuk meninjau perbaikan.']
      ]
    }
  };

  const currentRecipes = recipesData[placeType]?.[budget] || [];

  return (
    <main id="beranda" className="max-w-[1220px] mx-auto px-[28px]">
      {/* Hero Section */}
      <section className="py-[64px] pb-[48px] grid md:grid-cols-[1.05fr_.95fr] gap-[45px] items-center">
        <div>
          <div className="inline-flex items-center gap-[8px] border border-[#cbe9d8] bg-[#f0fbf4] text-[#287557] px-[12px] py-[8px] rounded-full text-[12px] font-extrabold tracking-[0.35px]">
            <span className="w-[7px] h-[7px] bg-[#3aaf78] rounded-full shadow-[0_0_0_4px_#3aaf781b]"></span> 
            INOVASI MITIGASI PANAS PERKOTAAN
          </div>
          <h1 className="text-[clamp(40px,5vw,66px)] leading-[1.04] tracking-[-3px] my-[22px] max-w-[650px]">
            Kota lebih sejuk, dimulai dari <span className="text-[#176b58]">data.</span>
          </h1>
          <p className="text-[16px] leading-[1.8] text-[#657a75] max-w-[565px] mb-[25px]">
            Kenali kawasan yang berisiko panas, bagikan kondisi lingkungan, dan temukan langkah sederhana untuk membuat kota lebih nyaman bagi semua.
          </p>
          <div className="flex gap-[12px] flex-wrap">
            <a className="border-0 rounded-[12px] bg-[#176b58] text-white font-bold px-[17px] py-[12px] shadow-[0_7px_16px_#176b5824] no-underline" href="#pantauan">
              Lihat pantauan panas ↗
            </a>
            <a className="border border-[#cbded4] bg-white text-[#143b35] rounded-[12px] px-[17px] py-[12px] font-bold no-underline" href="#laporan">
              ＋ Laporkan kondisi
            </a>
          </div>
          <div className="flex gap-[18px] items-center mt-[25px] text-[#6a7d76] text-[12px] flex-wrap">
            <span>✦ <strong className="text-[#143b35]">Berbasis data</strong> lingkungan</span>
            <span>♧ <strong className="text-[#143b35]">Partisipatif</strong> bersama warga</span>
            <span>⌁ <strong className="text-[#143b35]">Berorientasi aksi</strong></span>
          </div>
        </div>
        <div className="relative min-h-[390px] bg-gradient-to-br from-[#e4f6ed] to-[#e7f1fa] border border-[#d8eae1] rounded-[30px] p-[18px] overflow-hidden shadow-[0_12px_35px_#173c2d0d]">
          <div className="flex justify-between items-center relative z-10">
            <b className="text-[13px]">Gambaran kawasan perkotaan</b>
            <span className="text-[10px] font-extrabold bg-white text-[#57746a] px-[10px] py-[7px] rounded-full">ILUSTRASI DEMO</span>
          </div>
          <svg className="absolute inset-[55px_10px_8px] w-[calc(100%-20px)] h-[calc(100%-63px)]" viewBox="0 0 520 330" role="img" aria-label="Ilustrasi peta kawasan dengan area panas dan vegetasi">
            <defs>
              <linearGradient id="heat" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f3d77a" stopOpacity=".75"/>
                <stop offset=".55" stopColor="#ef9b64" stopOpacity=".75"/>
                <stop offset="1" stopColor="#db6a50" stopOpacity=".58"/>
              </linearGradient>
            </defs>
            <path d="M-20 50 L120 0 190 40 275 5 365 55 530 18 540 115 450 150 470 245 350 290 250 250 150 310 40 240 -10 160Z" fill="#d4e8d6"/>
            <path d="M-10 85 L100 125 175 90 250 130 325 85 410 110 530 70" fill="none" stroke="#fff" strokeWidth="13"/>
            <path d="M60 -10 L90 80 75 155 125 235 130 350 M220 -5 L235 70 205 145 260 205 245 340 M380 -5 L355 70 395 145 365 220 405 335 M-5 205 L115 190 210 220 320 190 430 215 535 180" fill="none" stroke="#fff" strokeWidth="10"/>
            <path d="M100 28 L180 54 207 96 170 140 103 125 80 80Z" fill="#8ecb9e"/>
            <path d="M270 30 L345 50 365 95 325 126 250 106 238 65Z" fill="#8fc89a"/>
            <path d="M140 135 L220 115 280 150 275 210 205 235 150 195Z" fill="url(#heat)"/>
            <path d="M305 132 L385 115 435 155 415 210 355 220 315 185Z" fill="url(#heat)"/>
            <path d="M180 245 L240 220 295 245 310 295 240 325 180 290Z" fill="#b5dcb6"/>
            <path d="M420 30 L490 40 510 85 470 105 425 85Z" fill="#c6e2c5"/>
            <g fill="#fff" stroke="#d7e5d9" strokeWidth="1.5">
              <rect x="112" y="62" width="27" height="18" rx="3"/><rect x="151" y="73" width="23" height="16" rx="3"/><rect x="294" y="55" width="28" height="19" rx="3"/><rect x="330" y="64" width="19" height="16" rx="3"/><rect x="190" y="157" width="28" height="20" rx="3"/><rect x="230" y="170" width="22" height="18" rx="3"/><rect x="340" y="150" width="28" height="20" rx="3"/><rect x="380" y="167" width="23" height="16" rx="3"/><rect x="205" y="263" width="24" height="16" rx="3"/>
            </g>
            <g>
              <circle cx="225" cy="146" r="9" fill="#d75c48" stroke="#fff" strokeWidth="3"/>
              <circle cx="368" cy="142" r="9" fill="#d75c48" stroke="#fff" strokeWidth="3"/>
              <circle cx="298" cy="225" r="7" fill="#e9a04f" stroke="#fff" strokeWidth="3"/>
            </g>
            <g fill="#3b7259">
              <circle cx="62" cy="90" r="9"/><circle cx="73" cy="102" r="7"/><circle cx="154" cy="252" r="9"/><circle cx="167" cy="263" r="7"/><circle cx="438" cy="250" r="10"/><circle cx="453" cy="262" r="8"/><circle cx="460" cy="54" r="8"/>
            </g>
          </svg>
          <div className="absolute z-30 bg-white border border-[#e0ebe4] rounded-[15px] p-[13px_15px] shadow-[0_12px_28px_#143b3512] left-[24px] bottom-[26px]">
            <small className="text-[#73847e] text-[10px] block mb-[5px]">Area terindikasi panas</small>
            <strong className="text-[22px] tracking-[-0.5px]">Perlu perhatian</strong>
            <div className="flex gap-[4px] mt-[8px] items-end h-[23px]">
              <span className="block w-[7px] rounded-[4px_4px_1px_1px] bg-[#e5a36a] h-[9px]"></span>
              <span className="block w-[7px] rounded-[4px_4px_1px_1px] bg-[#e5a36a] h-[14px]"></span>
              <span className="block w-[7px] rounded-[4px_4px_1px_1px] bg-[#e5a36a] h-[11px]"></span>
              <span className="block w-[7px] rounded-[4px_4px_1px_1px] bg-[#e5a36a] h-[20px]"></span>
              <span className="block w-[7px] rounded-[4px_4px_1px_1px] bg-[#e5a36a] h-[16px]"></span>
            </div>
          </div>
          <div className="absolute z-30 bg-white border border-[#e0ebe4] rounded-[15px] p-[13px_15px] shadow-[0_12px_28px_#143b3512] right-[22px] top-[104px]">
            <small className="text-[#73847e] text-[10px] block mb-[5px]">🌿 Tutupan vegetasi</small>
            <strong className="text-[16px] tracking-[-0.5px]">Amati & tingkatkan</strong>
          </div>
        </div>
      </section>

      {/* Pantauan Section */}
      <section className="py-[43px]" id="pantauan">
        <div className="flex justify-between gap-[20px] items-end mb-[22px] md:flex-row flex-col">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">Ringkasan pemantauan</div>
            <h2 className="text-[clamp(26px,3vw,36px)] tracking-[-1.2px] my-[8px]">Lihat lingkungan dari sudut berbeda.</h2>
          </div>
          <p className="text-[#657a75] max-w-[480px] leading-[1.65] text-[13px] m-0">Contoh dashboard untuk memahami pola panas, laporan warga, dan kebutuhan tindak lanjut. Angka serta peta di bawah adalah data ilustrasi, bukan pengukuran waktu nyata.</p>
        </div>
        <div className="grid md:grid-cols-[1.35fr_.85fr] gap-[18px]">
          <div className="bg-white border border-[#e0ebe5] rounded-[22px] p-[22px] shadow-[0_12px_35px_#173c2d0d]">
            <div className="flex justify-between items-center gap-[12px] mb-[16px]">
              <div>
                <h3 className="text-[16px] m-0">Peta Panas</h3>
                <p className="text-[11px] text-[#657a75] mt-[5px] mb-0">Ilustrasi suhu permukaan & vegetasi</p>
              </div>
              <span className="text-[10px] p-[6px_9px] bg-[#f0f7f2] rounded-full text-[#42765f] font-extrabold">DEMO</span>
            </div>
            <div className="h-[285px] relative rounded-[16px] overflow-hidden bg-[#edf5ed] border border-[#e1ece4]">
              <svg viewBox="0 0 600 330" preserveAspectRatio="xMidYMid slice" aria-label="Peta panas ilustratif" className="w-full h-full block">
                <rect width="600" height="330" fill="#edf4e9"/>
                <path d="M0 60 L90 15 180 50 260 0 340 55 450 20 600 55 600 130 510 155 530 235 420 300 310 250 200 310 90 250 0 180Z" fill="#d2e7d2"/>
                <g stroke="#fff" strokeWidth="13" fill="none">
                  <path d="M-20 100 L130 135 230 105 350 140 460 95 620 125"/>
                  <path d="M90 -20 L115 70 100 155 150 230 140 350"/>
                  <path d="M280 -10 L270 70 305 140 280 210 300 350"/>
                  <path d="M460 -10 L425 80 460 160 420 240 460 350"/>
                  <path d="M0 245 L140 210 270 245 390 210 510 240 620 210"/>
                </g>
                <path d="M165 100 L240 80 300 120 280 180 210 200 160 160Z" fill="#f3c66e" opacity=".9"/>
                <path d="M350 105 L425 95 475 140 450 195 390 205 350 165Z" fill="#e98b56" opacity=".85"/>
                <path d="M200 220 L270 195 330 235 320 285 250 305 195 270Z" fill="#a7d7a8"/>
                <g fill="#fff" stroke="#cbdccc" strokeWidth="1">
                  <rect x="135" y="65" width="30" height="20" rx="3"/><rect x="180" y="75" width="22" height="18" rx="3"/><rect x="235" y="120" width="27" height="18" rx="3"/><rect x="370" y="120" width="30" height="18" rx="3"/><rect x="415" y="145" width="23" height="18" rx="3"/><rect x="230" y="240" width="28" height="18" rx="3"/>
                </g>
                <g>
                  <circle cx="224" cy="119" r="10" fill="#d55b4a" stroke="white" strokeWidth="3"/>
                  <circle cx="410" cy="130" r="10" fill="#d55b4a" stroke="white" strokeWidth="3"/>
                  <circle cx="300" cy="218" r="8" fill="#e8a24d" stroke="white" strokeWidth="3"/>
                </g>
              </svg>
              <div className="absolute bottom-[12px] left-[12px] bg-[#ffffffed] p-[10px_12px] rounded-[11px] text-[10px] shadow-[0_5px_15px_#173c2d0c]">
                <b>Indikasi relatif</b>
                <div className="h-[6px] w-[130px] rounded-[9px] bg-gradient-to-r from-[#6dbd8b] via-[#f1cf73] to-[#e9804b] my-[6px]"></div>
                <div className="flex justify-between"><span>Lebih rendah</span><span>Lebih tinggi</span></div>
              </div>
            </div>
            <div className="text-[10px] text-[#7a8983] mt-[10px] leading-[1.5]">ⓘ Peta konsep untuk demonstrasi antarmuka. Penerapan nyata memerlukan data satelit, pengolahan spasial, dan verifikasi lapangan.</div>
          </div>
          
          <div className="bg-white border border-[#e0ebe5] rounded-[22px] p-[22px] shadow-[0_12px_35px_#173c2d0d]">
            <div className="flex justify-between items-center gap-[12px] mb-[16px]">
              <div>
                <h3 className="text-[16px] m-0">Ikhtisar kawasan</h3>
                <p className="text-[11px] text-[#657a75] mt-[5px] mb-0">Contoh indikator dashboard</p>
              </div>
              <span className="text-[10px] p-[6px_9px] bg-[#f0f7f2] rounded-full text-[#42765f] font-extrabold">SIMULASI</span>
            </div>
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="border border-[#e0ebe5] rounded-[16px] p-[16px] bg-[#fcfefd]">
                <div className="w-[35px] h-[35px] rounded-[11px] grid place-items-center bg-[#fff0df] text-[17px] mb-[13px]">☀</div>
                <strong className="text-[25px] tracking-[-1px] block">3 zona</strong>
                <span className="text-[11px] text-[#657a75] block mt-[5px] leading-[1.4]">contoh area untuk ditinjau</span>
              </div>
              <div className="border border-[#e0ebe5] rounded-[16px] p-[16px] bg-[#fcfefd]">
                <div className="w-[35px] h-[35px] rounded-[11px] grid place-items-center bg-[#e8f6ed] text-[17px] mb-[13px]">🌿</div>
                <strong className="text-[25px] tracking-[-1px] block">Rendah</strong>
                <span className="text-[11px] text-[#657a75] block mt-[5px] leading-[1.4]">contoh tutupan vegetasi di area prioritas</span>
              </div>
              <div className="border border-[#e0ebe5] rounded-[16px] p-[16px] bg-[#fcfefd]">
                <div className="w-[35px] h-[35px] rounded-[11px] grid place-items-center bg-[#e8f6ed] text-[17px] mb-[13px]">♧</div>
                <strong className="text-[25px] tracking-[-1px] block">{reportCount}</strong>
                <span className="text-[11px] text-[#657a75] block mt-[5px] leading-[1.4]">laporan suhu yang kamu kirim pada sesi ini</span>
              </div>
              <div className="border border-[#e0ebe5] rounded-[16px] p-[16px] bg-[#fcfefd]">
                <div className="w-[35px] h-[35px] rounded-[11px] grid place-items-center bg-[#e8f6ed] text-[17px] mb-[13px]">⌁</div>
                <strong className="text-[25px] tracking-[-1px] block">5 fitur</strong>
                <span className="text-[11px] text-[#657a75] block mt-[5px] leading-[1.4]">pemantauan hingga rekomendasi aksi</span>
              </div>
            </div>
            <div className="mt-[14px] bg-[#f5faf7] rounded-[13px] p-[13px] flex gap-[10px] text-[11px] leading-[1.5] text-[#60756d]">
              <span>●</span>
              <div><b className="text-[#143b35]">Langkah berikutnya</b><br />Verifikasi kondisi di lapangan, lalu tentukan tindakan sesuai kebutuhan kawasan.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-[43px]" id="fitur">
        <div className="flex justify-between gap-[20px] items-end mb-[22px] md:flex-row flex-col">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">Satu platform, lima fungsi</div>
            <h2 className="text-[clamp(26px,3vw,36px)] tracking-[-1.2px] my-[8px]">Dari informasi menjadi aksi.</h2>
          </div>
          <p className="text-[#657a75] max-w-[480px] leading-[1.65] text-[13px] m-0">Setiap fitur dirancang saling melengkapi agar data panas dapat dipahami dan digunakan untuk menentukan tindakan.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[13px]">
          {[
            { id: 'map', icon: '🗺️', title: 'Peta Panas', desc: 'Kenali pola suhu permukaan dan vegetasi dari data spasial.', bg: 'bg-[#e8f6ed]' },
            { id: 'report', icon: '📍', title: 'Lapor Suhu', desc: 'Tambahkan informasi kondisi lingkungan dari pengamatan warga.', bg: 'bg-[#e9f3fc]' },
            { id: 'recipe', icon: '🌱', title: 'Resep Sejuk', desc: 'Temukan langkah perlindungan dan adaptasi yang realistis.', bg: 'bg-[#fff3df]' },
            { id: 'alert', icon: '🔔', title: 'Siaga Panas', desc: 'Pahami peringatan dan langkah aman saat kondisi panas meningkat.', bg: 'bg-[#ffebe8]' },
            { id: 'priority', icon: '🎯', title: 'Prioritas Sejuk', desc: 'Bantu mengurutkan kawasan untuk diverifikasi dan ditangani.', bg: 'bg-[#f0eafb]' },
          ].map((f) => (
            <article 
              key={f.id} 
              onClick={() => setModalData(featureModals[f.id])}
              className="bg-white border border-[#e0ebe5] rounded-[19px] p-[18px_16px] min-h-[205px] transition hover:-translate-y-[4px] hover:shadow-[0_12px_35px_#173c2d0d] hover:border-[#b7ddc8] cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className={`w-[43px] h-[43px] rounded-[14px] ${f.bg} grid place-items-center text-[21px] mb-[17px]`}>{f.icon}</div>
                <h3 className="text-[14px] font-bold mb-[8px] m-0">{f.title}</h3>
                <p className="text-[11px] leading-[1.65] text-[#657a75] m-0">{f.desc}</p>
              </div>
              <span className="inline-block text-[11px] font-extrabold text-[#176b58] mt-[15px]">Pelajari fitur ↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* Laporan & Rekomendasi Section */}
      <section className="py-[43px]" id="laporan">
        <div className="flex justify-between gap-[20px] items-end mb-[22px] md:flex-row flex-col">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">Partisipasi masyarakat</div>
            <h2 className="text-[clamp(26px,3vw,36px)] tracking-[-1.2px] my-[8px]">Kondisi di lapangan berarti.</h2>
          </div>
          <p className="text-[#657a75] max-w-[480px] leading-[1.65] text-[13px] m-0">Pengamatan warga dapat melengkapi informasi spasial. Isi laporan berdasarkan alat ukur yang sesuai jika tersedia; jangan menebak angka suhu.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-[18px]">
          <div className="bg-white border border-[#e0ebe5] rounded-[22px] p-[24px] shadow-[0_12px_35px_#173c2d0d]">
            <h3 className="m-0 mb-[7px] text-[19px]">＋ Kirim laporan kondisi</h3>
            <p className="text-[12px] leading-[1.6] text-[#657a75] m-0 mb-[19px]">Formulir demo ini menyimpan laporan hanya di tampilan sesi ini. Belum mengirim data ke server.</p>
            <form onSubmit={handleReportSubmit}>
              <div className="grid md:grid-cols-2 gap-[13px]">
                <div className="flex flex-col gap-[7px] mb-[13px]">
                  <label htmlFor="area" className="text-[11px] font-bold text-[#456158]">Nama kawasan</label>
                  <input id="area" required value={area} onChange={(e) => setArea(e.target.value)} placeholder="Contoh: sekitar sekolah" className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]" />
                </div>
                <div className="flex flex-col gap-[7px] mb-[13px]">
                  <label htmlFor="condition" className="text-[11px] font-bold text-[#456158]">Kondisi yang diamati</label>
                  <select id="condition" required value={condition} onChange={(e) => setCondition(e.target.value)} className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]">
                    <option value="">Pilih kondisi</option>
                    <option>Terasa sangat panas</option>
                    <option>Minim pohon atau peneduh</option>
                    <option>Area terbuka tanpa naungan</option>
                    <option>Ada tempat teduh yang tersedia</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[7px] mb-[13px]">
                  <label htmlFor="temp" className="text-[11px] font-bold text-[#456158]">Suhu terukur (°C, opsional)</label>
                  <input id="temp" type="number" min="-10" max="65" step="0.1" value={temp} onChange={(e) => setTemp(e.target.value)} placeholder="Isi jika memakai alat ukur" className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]" />
                </div>
                <div className="flex flex-col gap-[7px] mb-[13px]">
                  <label htmlFor="time" className="text-[11px] font-bold text-[#456158]">Waktu pengamatan</label>
                  <select id="time" required value={time} onChange={(e) => setTime(e.target.value)} className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]">
                    <option value="">Pilih waktu</option>
                    <option>Pagi (05.00–10.00)</option>
                    <option>Siang (10.00–15.00)</option>
                    <option>Sore (15.00–18.00)</option>
                    <option>Malam (18.00–05.00)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[7px] mb-[13px] md:col-span-2">
                  <label htmlFor="details" className="text-[11px] font-bold text-[#456158]">Catatan tambahan (opsional)</label>
                  <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Misalnya: area ramai pejalan kaki, sedikit pohon, atau tempat teduh terdekat." className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px] resize-vertical min-h-[82px]"></textarea>
                </div>
              </div>
              <button className="w-full border-0 bg-[#176b58] text-white rounded-[11px] p-[12px] font-extrabold text-[12px] cursor-pointer" type="submit">Simpan laporan demo →</button>
              {notice && <div className="mt-[12px] bg-[#e9f8ef] text-[#236b4b] p-[12px] rounded-[10px] text-[12px] leading-[1.5]">{notice}</div>}
            </form>
          </div>

          <div className="bg-white border border-[#e0ebe5] rounded-[22px] p-[24px] shadow-[0_12px_35px_#173c2d0d]" id="rekomendasi">
            <h3 className="m-0 mb-[7px] text-[19px]">🌿 Resep Sejuk untukmu</h3>
            <p className="text-[12px] leading-[1.6] text-[#657a75] m-0 mb-[19px]">Pilih konteks kawasan untuk melihat saran awal yang dapat disesuaikan.</p>
            <div className="flex flex-col gap-[7px] mb-[13px]">
              <label htmlFor="placeType" className="text-[11px] font-bold text-[#456158]">Jenis kawasan</label>
              <select id="placeType" value={placeType} onChange={(e) => setPlaceType(e.target.value)} className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]">
                <option value="home">Rumah / permukiman</option>
                <option value="school">Sekolah / kampus</option>
                <option value="street">Jalan / halte / ruang publik</option>
                <option value="market">Pasar / kawasan usaha</option>
                <option value="work">Kawasan kerja luar ruang</option>
              </select>
            </div>
            <div className="flex flex-col gap-[7px] mb-[13px]">
              <label htmlFor="budget" className="text-[11px] font-bold text-[#456158]">Kapasitas penerapan</label>
              <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} className="border border-[#dce8e1] rounded-[10px] bg-[#fcfefd] p-[11px_12px] outline-none text-[12px]">
                <option value="simple">Sederhana / biaya rendah</option>
                <option value="medium">Menengah</option>
                <option value="area">Perlu koordinasi kawasan</option>
              </select>
            </div>
            <div className="grid gap-[10px] my-[14px]">
              {currentRecipes.map((r, i) => (
                <div key={i} className="flex gap-[12px] items-start p-[13px] border border-[#e0ebe5] rounded-[13px]">
                  <div className="w-[34px] h-[34px] flex-shrink-0 rounded-[11px] bg-[#eaf6ed] grid place-items-center">{r[0]}</div>
                  <div>
                    <b className="text-[12px] block mb-[4px]">{r[1]}</b>
                    <span className="text-[11px] text-[#657a75] leading-[1.5] block">{r[2]}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[14px] bg-[#fff7e9] border border-[#f4dfb9] rounded-[13px] p-[13px]">
              <b className="text-[12px]">Catatan keselamatan</b>
              <p className="text-[11px] text-[#7d6a4d] leading-[1.55] m-[5px_0_0]">Jika seseorang mengalami kebingungan, pingsan, atau gejala berat saat kepanasan, segera cari pertolongan medis. Rekomendasi aplikasi bukan pengganti layanan kesehatan atau peringatan resmi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-[43px]">
        <div className="bg-[#143f37] text-white rounded-[23px] p-[27px_30px] flex md:flex-row flex-col justify-between gap-[24px] items-center relative overflow-hidden">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#9ee2ba] uppercase">SIAGA PANAS</div>
            <h2 className="text-[25px] tracking-[-0.7px] my-[8px]">Waspada panas. Lindungi diri dan sekitar.</h2>
            <p className="text-[12px] leading-[1.65] text-[#c5ded5] max-w-[610px] m-0">Kurangi aktivitas berat pada waktu terpanas, cari tempat teduh, minum air secara berkala, dan perhatikan anak-anak, lansia, serta orang yang bekerja di luar ruangan. Periksa informasi cuaca dan peringatan resmi dari BMKG atau instansi berwenang.</p>
          </div>
          <a className="border-0 bg-[#e5f6eb] text-[#174e40] rounded-[12px] px-[17px] py-[12px] font-bold text-[13px] whitespace-nowrap no-underline relative z-10" href="https://www.bmkg.go.id/" target="_blank" rel="noopener">Kunjungi BMKG ↗</a>
        </div>
      </section>

      {/* Tentang Section */}
      <section className="py-[43px]" id="tentang">
        <div className="flex justify-between gap-[20px] items-end mb-[22px] md:flex-row flex-col">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">Tentang Sejuk Kota</div>
            <h2 className="text-[clamp(26px,3vw,36px)] tracking-[-1.2px] my-[8px]">Teknologi yang membantu kota bertindak.</h2>
          </div>
          <p className="text-[#657a75] max-w-[480px] leading-[1.65] text-[13px] m-0">Sejuk Kota adalah konsep platform pendukung keputusan mitigasi panas perkotaan berbasis citra satelit, data cuaca, dan partisipasi masyarakat.</p>
        </div>
        <div className="bg-white border border-[#e0ebe5] rounded-[22px] p-[22px] shadow-[0_12px_35px_#173c2d0d] grid md:grid-cols-3 gap-[22px]">
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">01 / KUMPULKAN</div>
            <h3 className="text-[15px] font-bold mt-[6px] mb-[4px]">Gabungkan sumber data</h3>
            <p className="text-[12px] text-[#657a75] leading-[1.7] m-0">Citra satelit, indikator vegetasi, informasi cuaca, dan laporan lapangan memberi konteks yang saling melengkapi.</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">02 / TENTUKAN</div>
            <h3 className="text-[15px] font-bold mt-[6px] mb-[4px]">Verifikasi prioritas</h3>
            <p className="text-[12px] text-[#657a75] leading-[1.7] m-0">Kawasan dengan indikasi panas dan minim vegetasi dapat ditinjau bersama pihak terkait sebelum tindakan dipilih.</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[1.7px] font-extrabold text-[#328365] uppercase">03 / EVALUASI</div>
            <h3 className="text-[15px] font-bold mt-[6px] mb-[4px]">Ukur, bertindak, ukur kembali</h3>
            <p className="text-[12px] text-[#657a75] leading-[1.7] m-0">Pantau perubahan indikator dan penerapan rekomendasi tanpa mengklaim dampak yang belum diuji.</p>
          </div>
        </div>
      </section>

      {/* Modal Pop-up untuk Fitur */}
      {modalData && (
        <div className="fixed inset-0 bg-[#0c2823a6] z-50 flex items-center justify-center p-[20px]" onClick={() => setModalData(null)}>
          <div className="max-w-[520px] w-full bg-white rounded-[22px] p-[25px] shadow-[0_20px_70px_#0003" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-[12px]">
              <h3 className="m-0 text-[18px] font-bold">{modalData.title}</h3>
              <button className="border-0 bg-[#eff5f1] rounded-[9px] p-[8px_11px] cursor-pointer" onClick={() => setModalData(null)}>✕</button>
            </div>
            <p className="text-[#657a75] text-[13px] leading-[1.7] mb-[15px]">{modalData.body}</p>
            <ul className="text-[#657a75] text-[12px] leading-[1.9] pl-[20px] mb-[20px]">
              {modalData.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a 
              href={modalData.href} 
              onClick={() => setModalData(null)}
              className="block text-center w-full border-0 bg-[#176b58] text-white rounded-[11px] p-[12px] font-extrabold text-[12px] no-underline"
            >
              Coba fitur
            </a>
          </div>
        </div>
      )}
    </main>
  );
}