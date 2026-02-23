"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi Scroll Halus untuk Landing Page
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    // Jika sedang di halaman lain (seperti /aspirasi), pindah ke Home dulu baru scroll
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // Tutup menu mobile setelah klik
    }
  };

  const navLinks = [
    { name: "Beranda", id: "beranda" },
    { name: "Tentang", id: "tentang" },
    { name: "Statistik", id: "statistik" },
    { name: "Berita", id: "berita" },
    { name: "Proker", id: "proker" },
    { name: "Struktur", id: "struktur" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-black text-slate-900 tracking-tighter text-xl uppercase">
            BEST
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`/#${link.id}`}
              whileHover={{ y: -2 }}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}

          {/* LINK ASPIRASI (PINDAH HALAMAN) */}
          <Link
            href="/aspirasi"
            className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Aspirasi
          </Link>

          {/* DROPDOWN PENDAFTARAN */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest outline-none">
              Pendaftaran{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden py-2"
                >
                  <Link
                    href="/pendaftaran"
                    className="block px-4 py-3 text-[10px] font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors uppercase"
                  >
                    Info Pendaftaran
                  </Link>
                  <Link
                    href="/pengumuman"
                    className="block px-4 py-3 text-[10px] font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors uppercase"
                  >
                    Hasil Pengumuman
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 p-6 space-y-5 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="block text-sm font-black text-slate-600 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}

            {/* LINK ASPIRASI MOBILE */}
            <Link
              href="/aspirasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-black text-blue-600 uppercase tracking-widest pt-2 border-t border-slate-50"
            >
              Aspirasi
            </Link>

            {/* PENDAFTARAN MOBILE */}
            <div className="space-y-4 pt-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Pendaftaran
              </p>
              <Link
                href="/pendaftaran"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-black text-slate-600 uppercase tracking-widest pl-4"
              >
                Info Pendaftaran
              </Link>
              <Link
                href="/pengumuman"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-black text-slate-600 uppercase tracking-widest pl-4"
              >
                Hasil Pengumuman
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
