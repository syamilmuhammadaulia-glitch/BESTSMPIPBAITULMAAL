"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, MapPin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

// Komponen ikon SVG khusus untuk TikTok karena lucide-react default tidak memiliki icon TikTok
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  // State untuk membuka/menutup menu bantuan
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#0f172a] text-slate-300 mt-20 relative border-t-4 border-blue-600 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* 1. BRANDING & LOGO (Lebar 4 Kolom) */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-xl p-1.5 flex-shrink-0 shadow-lg">
                  <img
                    src="/logo.jpeg"
                    alt="Logo BEST"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase text-base tracking-widest leading-tight">
                    BEST OSIS
                  </h3>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    SMPIP Baitul Maal
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed text-slate-400 mt-4 pr-4">
                Bersatu untuk tumbuh berkembang kuat dan kebersamaan. Wadah
                resmi aspirasi dan kreativitas siswa/i SMPIP Baitul Maal.
              </p>
            </div>

            {/* 2. NAVIGASI (Lebar 4 Kolom) */}
            <div className="md:col-span-4">
              <h4 className="text-white font-bold uppercase text-sm mb-6 tracking-widest">
                Navigasi
              </h4>
              {/* Dibuat 2 kolom agar rapi seperti di header */}
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium">
                <li>
                  <Link
                    href="#beranda"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#struktur"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Struktur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tentang"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#statistik"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Statistik
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aspirasi"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Aspirasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#berita"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Berita
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pendaftaran"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Pendaftaran
                  </Link>
                </li>
                <li>
                  <Link
                    href="#berita"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Proker
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. KONTAK & SOSIAL MEDIA (Lebar 4 Kolom) */}
            <div className="md:col-span-4">
              <div className="mb-8">
                <h4 className="text-white font-bold uppercase text-sm mb-6 tracking-widest">
                  Kontak
                </h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex gap-3 items-start">
                    <MapPin
                      size={18}
                      className="text-blue-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">
                      Jl. Pesantren No.62, RT.1/RW.3, Jurang Manggu Tim., Kec.
                      Pd. Aren, Kota Tangerang Selatan, Banten 15222
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail size={18} className="text-blue-400 flex-shrink-0" />
                    <a
                      href="mailto:bestsmpipbaitulmaal@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      bestsmpipbaitulmaal@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-widest">
                  Ikuti Kami
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/bestsmpipbm_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-all shadow-lg hover:-translate-y-1"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://tiktok.com/@bestsmpipbm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-black text-white flex items-center justify-center transition-all shadow-lg hover:-translate-y-1"
                  >
                    <TikTokIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-slate-800 bg-[#0b1120]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wider text-slate-400">
            <p>&copy; 2026 BEST OSIS SMPIP Baitul Maal. All Right Reserved.</p>
            <p>
              Website Oleh Seksi Bidang{" "}
              <span className="text-white font-bold">BPH, HUMAS, IPTEK</span>.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON (WHATSAPP) */}
      <div className="fixed bottom-10 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3">
        {/* MENU PILIHAN WHATSAPP (Akan muncul saat tombol diklik) */}
        <AnimatePresence>
          {isHelpOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-2 origin-bottom-right"
            >
              {/* Opsi 1: Ketua OSIS */}
              <a
                href="https://wa.me/6287861071813?text=Halo%20Ketua%20OSIS,%20saya%20ingin%20bertanya%20tentang%20BEST..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-slate-50 hover:bg-emerald-50 rounded-2xl text-slate-700 hover:text-emerald-700 transition-all group"
              >
                <MessageCircle
                  size={18}
                  className="text-slate-400 group-hover:text-emerald-500 group-hover:fill-emerald-100 transition-colors"
                />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                    Ketua OSIS
                  </p>
                  <p className="text-[11px] font-bold text-slate-500">
                    0878-6107-1813
                  </p>
                </div>
              </a>

              {/* Opsi 2: Sekretaris OSIS */}
              <a
                href="https://wa.me/6281210430101?text=Halo%20Sekretaris%20OSIS,%20saya%20ingin%20bertanya%20tentang%20BEST..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-slate-50 hover:bg-emerald-50 rounded-2xl text-slate-700 hover:text-emerald-700 transition-all group"
              >
                <MessageCircle
                  size={18}
                  className="text-slate-400 group-hover:text-emerald-500 group-hover:fill-emerald-100 transition-colors"
                />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                    Sekretaris OSIS
                  </p>
                  <p className="text-[11px] font-bold text-slate-500">
                    0812-1043-0101
                  </p>
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TOMBOL UTAMA */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsHelpOpen(!isHelpOpen)}
          className="bg-emerald-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center gap-3 border border-emerald-400 outline-none"
        >
          <MessageCircle
            size={22}
            fill="currentColor"
            className="text-emerald-100"
          />
          <span className="font-black text-xs uppercase tracking-widest">
            {isHelpOpen ? "Tutup" : "Bantuan"}
          </span>
        </motion.button>
      </div>
    </>
  );
}
