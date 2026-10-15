import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-[50px] bg-[#edf5ef] border-t border-[#e0ebe5] py-[28px] px-[max(5vw,24px)] flex md:flex-row flex-col justify-between gap-[20px] items-center text-[#6b8077] text-[11px]">
      <div className="flex gap-[9px] items-center">
        <span className="w-[32px] h-[32px] rounded-[11px] bg-gradient-to-br from-[#1c8069] to-[#9dd9ad] grid place-items-center text-white text-[18px] shadow">♧</span>
        <span><b className="text-[#143b35]">Sejuk Kota</b><br />Data untuk kota yang lebih tangguh terhadap panas.</span>
      </div>
      <div className="text-center md:text-right">
        Prototipe konsep · 2026<br />Data peta dan indikator dashboard bersifat ilustratif.
      </div>
    </footer>
  );
}