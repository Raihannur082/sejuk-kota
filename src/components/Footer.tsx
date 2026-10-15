export default function Footer() {
  return (
    <footer className="w-full bg-[#143b35] text-white py-8 border-t border-[#1f524a] mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9dd9ad]">
        <p>© 2026 Sejuk_kota. Sistem Informasi Lingkungan Perkotaan.</p>
        <div className="flex gap-6">
          <a href="#pantauan" className="hover:underline">Pantauan</a>
          <a href="#fitur" className="hover:underline">Fitur</a>
          <a href="#laporan" className="hover:underline">Lapor Suhu</a>
        </div>
      </div>
    </footer>
  );
}