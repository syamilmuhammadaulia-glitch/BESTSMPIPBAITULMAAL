"use client";
import { motion, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Bell,
  Calendar,
  Star,
  Info,
  ChevronDown,
} from "lucide-react";

interface LandingProps {
  onEnterPortal?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function LandingPage({ onEnterPortal }: LandingProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-slate-900"
    >
      <div id="home" className="min-h-screen">
        {/* --- HERO SECTION --- */}
        <section id="beranda" className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-70"></div>
          </div>

          <header className="py-20 px-6 text-center bg-transparent relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8 relative"
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-xl"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-slate-900"
            >
              BEST <br />{" "}
              <span className="text-blue-600 uppercase text-3xl md:text-5xl block mt-2">
                SMPIP BAITUL MAAL
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10 text-center px-4">
              Organisasi Siswa Intra Sekolah (OSIS) adalah wadah resmi untuk
              menyalurkan ide, minat, dan aspirasi siswa. Melalui OSIS, kamu
              belajar kepemimpinan, kerja sama, dan tanggung jawab secara
              langsung.
            </p>
          </header>
        </section>

        {/* --- TENTANG SECTION --- */}
        <motion.section
          id="tentang"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 px-6 max-w-5xl mx-auto scroll-mt-24"
        >
          <div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <Info size={32} /> TENTANG BEST OSIS
              </h2>
              <p className="text-blue-50 leading-relaxed text-lg md:text-xl font-medium opacity-90">
                Badan Eksekutif Siswa Terpadu (BEST) OSIS adalah tim pengurus
                siswa yang merencanakan, melaksanakan, dan mengawasi program
                kerja siswa agar berjalan tertib dan sejalan dengan tujuan
                sekolah.
              </p>
            </div>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="absolute -right-10 -bottom-10 opacity-10 transition-transform pointer-events-none"
            >
              <Users size={350} />
            </motion.div>
          </div>
        </motion.section>

        {/* --- VISI & MISI --- */}
        <section className="py-10 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <Target size={30} />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Visi
            </h3>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Mewujudkan OSIS yang berlandaskan budi pekerti luhur serta menjadi
              teladan bagi seluruh siswa/i melalui kegiatan kreatif &
              bermanfaat.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <Award size={30} />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Misi
            </h3>
            <ul className="text-slate-600 space-y-4 font-semibold text-lg">
              {[
                "Membangun budaya akhlak mulia.",
                "Menjadi contoh disiplin & etika.",
                "Ruang komunikasi aktif.",
                "Wadah kreatif ide positif.",
                "Partisipasi aktif masyarakat.",
                "Membangun kerja sama tim.",
              ].map((misi, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-blue-500 font-black">{i + 1}.</span>{" "}
                  {misi}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* --- STATISTIK --- */}
        <section
          id="statistik"
          className="py-24 my-10 bg-slate-900 text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="text-3xl font-black mb-16 uppercase tracking-[0.2em] text-blue-400">
              BEST dalam Angka
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { n: "7", t: "Seksi Departemen" },
                { n: "34", t: "Pengurus OSIS BEST" },
                { n: "15+", t: "Program Kerja" },
                { n: "250+", t: "Siswa Terlibat" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <p className="text-6xl font-black mb-3 text-white">
                    {stat.n}
                  </p>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                    {stat.t}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- BERITA & PROKER (BAGIAN NAVIGASI PENTING) --- */}
        <section
          id="berita"
          className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 scroll-mt-24"
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Bell className="text-blue-600" size={32} /> BERITA TERBARU
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LINK KE PENDAFTARAN */}
              <Link href="/pendaftaran" className="block group">
                <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:border-blue-500 group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    PENGUMUMAN
                  </span>
                  <h4 className="text-xl font-bold mt-4 group-hover:text-blue-600 leading-tight">
                    Open Recruitment BEST Baru Telah Dibuka!
                  </h4>
                  <p className="text-slate-500 mt-3 font-medium">
                    Klik di sini untuk melihat syarat dan cara pendaftaran
                    online.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-xs">
                    LIHAT DETAIL <ArrowRight size={14} />
                  </div>
                </div>
              </Link>

              {/* LINK KE ASPIRASI */}
              <Link href="/aspirasi" className="block group">
                <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:border-emerald-500 group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    ASPIRASI
                  </span>
                  <h4 className="text-xl font-bold mt-4 group-hover:text-emerald-600 leading-tight">
                    Sampaikan Aspirasimu Lewat Kotak Suara Online!
                  </h4>
                  <p className="text-slate-500 mt-3 font-medium">
                    Punya ide kegiatan atau saran untuk sekolah? Kirim langsung
                    di sini.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    KIRIM SUARA <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Star className="text-yellow-500" size={32} /> PROKER UNGGULAN
            </h3>
            <div className="p-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
              <h4 className="text-2xl font-black uppercase italic mb-2">
                BM CUP 2026
              </h4>
              <p className="text-orange-50 font-medium leading-relaxed">
                Turnamen akbar olahraga dan seni antar sekolah se-Tangerang
                Selatan.
              </p>
              <Star
                size={100}
                className="absolute -right-5 -bottom-5 text-white/20 rotate-12"
              />
            </div>
          </motion.div>
        </section>

        {/* --- STRUKTUR ORGANISASI (LENGKAP SEMUA NAMA) --- */}
        <section
          id="struktur"
          className="py-24 bg-white scroll-mt-24 border-t border-slate-100"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                {" "}
                Struktur Organisasi{" "}
              </h2>
              <p className="text-blue-600 font-bold mt-4 uppercase tracking-[0.3em] text-sm">
                {" "}
                Periode 2025/2026{" "}
              </p>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* PRESIDEN */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-20"
            >
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl w-full max-w-sm text-center relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  {" "}
                  Presiden BEST OSIS{" "}
                </div>
                <h3 className="font-bold text-2xl leading-tight mt-2">
                  {" "}
                  Asykar Munadhil Syabib Irnowo{" "}
                </h3>
              </div>
            </motion.div>

            {/* BPH UTAMA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
              {[
                { title: "Wakil Presiden", name: "Ikhsan Ramadhan Kusnadi" },
                { title: "Sekretaris", name: "Hafidzah Bequina Aghniya A." },
                { title: "Bendahara", name: "Lulu Fatin Nabila" },
              ].map((bph, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm text-center hover:border-blue-500 hover:shadow-xl transition-all"
                >
                  <p className="text-[10px] uppercase font-black text-blue-500 mb-3 tracking-widest">
                    {" "}
                    {bph.title}{" "}
                  </p>
                  <h3 className="font-bold text-xl text-slate-800 leading-tight">
                    {" "}
                    {bph.name}{" "}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* SEMUA DEPARTEMEN TANPA DIKURANGI */}
            <div className="space-y-24">
              {[
                {
                  namaDept: "Humas",
                  anggota: [
                    {
                      nama: "Kayla Azka Shazia Wibowo",
                      kelas: "8B2",
                      jab: "Mentri",
                    },
                    {
                      nama: "Athaya Zahratus Silmi",
                      kelas: "8B1",
                      jab: "Wakil Mentri",
                    },
                    {
                      nama: "Kayyasa Syalabiyyah P.",
                      kelas: "8B1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Alleira Aydina Nadifa S.",
                      kelas: "7B2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Tsabita Nur Azizah",
                      kelas: "7B2",
                      jab: "Anggota",
                    },
                  ],
                },
                {
                  namaDept: "Disorkes",
                  anggota: [
                    { nama: "Kirania Maiza", kelas: "8B1", jab: "Mentri" },
                    {
                      nama: "Muhammad Razka Thariq A.",
                      kelas: "8A1",
                      jab: "Wakil Mentri",
                    },
                    {
                      nama: "Shakila Hana Azzahra",
                      kelas: "8B2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Almira Qanita Farzani W.",
                      kelas: "8B2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Dimarsyah Daanish Hafiz",
                      kelas: "7A1",
                      jab: "Anggota",
                    },
                  ],
                },
                {
                  namaDept: "SABDA",
                  anggota: [
                    {
                      nama: "Muhammad Ichigo Ararie P.",
                      kelas: "8A2",
                      jab: "Mentri",
                    },
                    { nama: "Alya Ulfa", kelas: "8B2", jab: "Wakil Mentri" },
                    {
                      nama: "Sahla Abira Syufie",
                      kelas: "8B1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Aruni Khaira Sabila",
                      kelas: "8B1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Dastian Al Qassimy",
                      kelas: "7A2",
                      jab: "Anggota",
                    },
                  ],
                },
                {
                  namaDept: "Agama",
                  anggota: [
                    {
                      nama: "Muhammad Roffiq Musaffa",
                      kelas: "8A1",
                      jab: "Mentri",
                    },
                    {
                      nama: "Mazaya Nairuwa A.",
                      kelas: "8B2",
                      jab: "Wakil Mentri",
                    },
                    {
                      nama: "Hafy Aydin Ramaputra",
                      kelas: "7A1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Arkaan Raffaizaz A.",
                      kelas: "7A2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Arfa Syazia Bisyri",
                      kelas: "8B1",
                      jab: "Anggota",
                    },
                  ],
                },
                {
                  namaDept: "Lingkup",
                  anggota: [
                    {
                      nama: "Muhammad Zuhair Asyraf",
                      kelas: "8A2",
                      jab: "Mentri",
                    },
                    {
                      nama: "Atiqah Fauziyah Rahma",
                      kelas: "8B1",
                      jab: "Wakil Mentri",
                    },
                    {
                      nama: "Arvina Andya Putri",
                      kelas: "8B1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Annisa Mutmainah Arifin",
                      kelas: "7B2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Ibamez Arsyad Zamzami",
                      kelas: "7A1",
                      jab: "Anggota",
                    },
                  ],
                },
                {
                  namaDept: "IPTEK",
                  anggota: [
                    {
                      nama: "Almarzuq Ramadhan Q.",
                      kelas: "8A1",
                      jab: "Mentri",
                    },
                    {
                      nama: "Fairuz Azzahra M",
                      kelas: "8B1",
                      jab: "Wakil Mentri",
                    },
                    {
                      nama: "Devdan Abyaz Rasyad",
                      kelas: "7A1",
                      jab: "Anggota",
                    },
                    {
                      nama: "Intan Fitri Mahrizal",
                      kelas: "8B2",
                      jab: "Anggota",
                    },
                    {
                      nama: "Safira Azkadina A.",
                      kelas: "7B2",
                      jab: "Anggota",
                    },
                  ],
                },
              ].map((dept, index) => (
                <div key={index}>
                  <div className="flex items-center gap-6 mb-12">
                    <div className="h-[2px] bg-slate-100 flex-grow"></div>
                    <h4 className="font-black text-blue-600 uppercase text-xs tracking-[0.4em]">
                      {" "}
                      DEPARTEMEN {dept.namaDept}{" "}
                    </h4>
                    <div className="h-[2px] bg-slate-100 flex-grow"></div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {dept.anggota.map((person, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={`p-6 rounded-2xl border transition-all duration-300 ${
                          person.jab.includes("Mentri")
                            ? "bg-blue-50 border-blue-200 shadow-md"
                            : "bg-white border-slate-100 shadow-sm"
                        }`}
                      >
                        <p className="text-[9px] font-black text-blue-500 uppercase mb-2 italic tracking-wider">
                          {" "}
                          {person.jab}{" "}
                        </p>
                        <p className="text-sm font-bold text-slate-800 leading-tight mb-4 min-h-[2.5rem] flex items-center">
                          {" "}
                          {person.nama}{" "}
                        </p>
                        <div className="inline-block text-[9px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                          {" "}
                          {person.kelas}{" "}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section
          id="faq"
          className="py-24 bg-slate-50 px-6 border-t border-slate-200"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tight">
              {" "}
              Tanya <span className="text-blue-600">Jawab</span>{" "}
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Apa itu OSIS BEST?",
                  a: "BEST (Badan Eksekutif Siswa Terpadu) adalah organisasi siswa resmi di SMP Islam Plus Baitul Maal yang menjadi wadah aspirasi, pengembangan kepemimpinan, dan penyelenggara kegiatan kesiswaan.",
                },
                {
                  q: "Siapa saja yang boleh mendaftar menjadi pengurus?",
                  a: "Seluruh siswa kelas 7 dan 8 yang memiliki semangat belajar, integritas tinggi, dan ingin berkontribusi bagi kemajuan sekolah.",
                },
                {
                  q: "Bagaimana alur pendaftaran anggota baru?",
                  a: "Alur pendaftaran meliputi pengisian formulir online melalui portal ini, seleksi berkas, tes tertulis, serta tes wawancara.",
                },
                {
                  q: "Apa saja keuntungan bergabung di OSIS?",
                  a: "Kamu akan belajar public speaking, manajemen waktu, cara mengelola event besar, hingga memperluas jaringan pertemanan.",
                },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-3xl p-6 cursor-pointer hover:shadow-lg transition-all overflow-hidden"
                >
                  <summary className="font-black text-sm uppercase tracking-tight list-none flex justify-between items-center outline-none">
                    <span className="pr-4">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                      <ChevronDown size={18} className="text-blue-600" />
                    </div>
                  </summary>
                  <div className="mt-6 pt-6 border-t border-slate-100 text-slate-600 font-medium leading-relaxed">
                    {" "}
                    {faq.a}{" "}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
