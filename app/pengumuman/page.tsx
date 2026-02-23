"use client";
import React from "react";
import { ArrowLeft, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PengumumanPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-6 flex flex-col items-center justify-center">
      <div className="max-w-md w-full relative">
        {/* Tombol Kembali */}
        <div className="absolute -top-16 left-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden"
        >
          {/* Dekorasi Latar */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"></div>

          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-inner rotate-3">
            <Megaphone size={36} className="-rotate-12" />
          </div>

          <h1 className="text-3xl font-black tracking-tight uppercase leading-none mb-4 text-slate-900">
            INFO <span className="text-blue-600">PENGUMUMAN</span>
          </h1>

          <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
            Untuk melihat hasil seleksi dan informasi pengumuman terbaru,
            silakan kunjungi langsung <b>Halaman Pendaftaran</b>.
          </p>

          <Link
            href="/pendaftaran"
            className="group w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            {/* Efek kilap pada tombol saat hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>

            <span className="relative z-20">Ke Halaman Pendaftaran</span>
            <ArrowRight
              size={18}
              className="relative z-20 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        <p className="text-center mt-12 text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">
          BEST DIGITAL MANAGEMENT SYSTEM
        </p>
      </div>
    </div>
  );
}
