"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Bell,
  Star,
  Info,
  ChevronDown,
} from "lucide-react";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- DATA PROKER OSIS ---
  const dataProker = [
    {
      dept: "BPH",
      proker: [
        {
          nama: "Official Look Project",
          desc: "Pembuatan blazer dan ID card resmi anggota setelah pelantikan.",
          status: "Completed",
        },
        {
          nama: "First Gathering",
          desc: "Kegiatan kebersamaan anggota osis dan presentasi proker saat berbuka puasa serta bermain games untuk melatih kekompakan.",
          status: "Completed",
        },
        {
          nama: "BestPay",
          desc: "Pembayaran kas bulanan untuk kebutuhan kegiatan OSIS.",
          status: "Completed",
        },
        {
          nama: "Monthly Eval",
          desc: "Evaluasi rutin untuk membahas permasalahan dan solusi yang terjadi di setiap bulannya.",
          status: "On Going",
        },
        {
          nama: "Baitul Maal Frequency",
          desc: "Podcast OSIS bersama guest star dari alumni maupun siswa berprestasi untuk meningkatkan pemahaman dan wawasan siswa.",
          status: "Upcoming",
        },
        {
          nama: "Workshop BEST OSIS",
          desc: "Workshop pengembangan diri untuk anggota OSIS yang membahas tentang passion dan public speaking.",
          status: "Completed",
        },
        {
          nama: "BEST on Vlog",
          desc: "Vlog dokumentasi persiapan kegiatan OSIS.",
          status: "Upcoming",
        },
        {
          nama: "Interest Club",
          desc: "Klub minat bakat dengan pameran karya di akhir semester.",
          status: "Upcoming",
        },
        {
          nama: "Berbuka Puasa Bersama",
          desc: "Kegiatan buka puasa dan kebersamaan.",
          status: "Upcoming",
        },
        {
          nama: "MPLS",
          desc: "Partisipasi OSIS dalam Masa Pengenalan Lingkungan Sekolah.",
          status: "Upcoming",
        },
        {
          nama: "BEST of The Month",
          desc: "Apresiasi bulanan bagi anggota terbaik.",
          status: "Upcoming",
        },
      ],
    },
    {
      dept: "Departemen Agama",
      proker: [
        {
          nama: "Jadwal KSP & Shalat Kelas",
          desc: "Pembuatan dan pengingat jadwal KSP serta shalat tiap kelas.",
          status: "On Going",
        },
        {
          nama: "Langkah Kecil, Pahala Besar",
          desc: "Penempelan doa harian di area strategis sekolah.",
          status: "Upcoming",
        },
        {
          nama: "SENJA",
          desc: "Sehatnya Nikmat Jumat Ceria. Berbagi makanan sehat kepada warga sekitar. (Kolaborasi dengan Humas).",
          status: "Upcoming",
        },
        {
          nama: "SABI",
          desc: "Syiar Agama Berita Islami. Publikasi dan peringatan Hari Besar Islam.",
          status: "Completed",
        },
      ],
    },
    {
      dept: "Departemen SABDA",
      proker: [
        {
          nama: "BIZ (Baitul Maal Quiz)",
          desc: "Program kuis interaktif tentang pengetahuan umum secara menyenangkan dan edukatif.",
          status: "On Going",
        },
        {
          nama: "BaiMalPedia",
          desc: "Memberikan poster edukatif yang nantinya akan dibuat quiz (BIZ) yang akan bermanfaat bagi pengetahuan siswa/i.",
          status: "On Going",
        },
        {
          nama: "Sharing Bakmi",
          desc: "Membacakan berita menarik dan memutar lagu di jam makan siang setiap hari rabu untuk menambah wawasan dengan cara asik.",
          status: "On Going",
        },
        {
          nama: "BEST Gathering",
          desc: "Kegiatan kebersamaan untuk mempererat solidaritas dan kekompakan pengurus di akhir masa jabatan.",
          status: "Upcoming",
        },
        {
          nama: "Unleash Your Talent",
          desc: "Ajang perlombaan akademik dan non-akademik untuk mengembangkan potensi siswa.",
          status: "Upcoming",
        },
        {
          nama: "Membuat Poster",
          desc: "Pembuatan poster edukatif untuk memperingati hari nasional.",
          status: "On Going",
        },
      ],
    },
    {
      dept: "Departemen Disorkes",
      proker: [
        {
          nama: "Sarapan Sehat",
          desc: "Sarapan bersama setiap Jumat untuk membiasakan hidup sehat.",
          status: "On Going",
        },
        {
          nama: "KBT (Kegiatan Bada Tes)",
          desc: "Lomba olahraga antar kelas untuk mengembangkan bakat dan kekompakan.",
          status: "Completed",
        },
        {
          nama: "Fisik Motorik",
          desc: "Olahraga rutin untuk melatih kemampuan fisik siswa.",
          status: "On Going",
        },
        {
          nama: "CEPAK",
          desc: "Pemeriksaan kerapian pakaian dan alas kaki.",
          status: "On Going",
        },
        {
          nama: "Discipline in Action",
          desc: "Poster & video edukasi tentang disiplin, kesehatan, dan anti-bullying.",
          status: "On Going",
        },
        {
          nama: "Unleash Your Talent!",
          desc: "Lomba akademik & non-akademik bersama SABDA.",
          status: "Upcoming",
        },
      ],
    },
    {
      dept: "Departemen Humas",
      proker: [
        {
          nama: "G2G (Give To Glow)",
          desc: "Penggalangan donasi untuk yang membutuhkan. (3 bulan sekali / opsional).",
          status: "Completed",
        },
        {
          nama: "GAV (Gerak Aksi Visual)",
          desc: "Konten sosial berbentuk poster/video. (Kolaborasi dengan IPTEK).",
          status: "Upcoming",
        },
        {
          nama: "SENJA",
          desc: "Berbagi makanan sehat. (Kolaborasi dengan Agama).",
          status: "Upcoming",
        },
      ],
    },
    {
      dept: "Departemen IPTEK",
      proker: [
        {
          nama: "Konten OSIS",
          desc: "Publikasi kegiatan seluruh departemen.",
          status: "On Going",
        },
        {
          nama: "GAV",
          desc: "Publikasi konten sosial bersama Humas.",
          status: "Upcoming",
        },
        {
          nama: "BIZ (Baitul Maal Quiz)",
          desc: "Kuis interaktif bersama SABDA.",
          status: "On Going",
        },
        {
          nama: "BaiMalPedia",
          desc: "Konten literasi dan ensiklopedia sekolah.",
          status: "On Going",
        },
        {
          nama: "BEST on Vlog",
          desc: "Dokumentasi kegiatan bersama BPH.",
          status: "Upcoming",
        },
        {
          nama: "Podcast OSIS",
          desc: "Program diskusi inspiratif bersama BPH.",
          status: "Upcoming",
        },
      ],
    },
    {
      dept: "Departemen Lingkup",
      proker: [
        {
          nama: "Karya Tulis Lingkungan",
          desc: "Pembuatan karya tulis tentang isu lingkungan untuk meningkatkan wawasan dan kesadaran siswa akan pentingnya menjaga lingkungan.",
          status: "Upcoming",
        },
        {
          nama: "Be a Smart Talk",
          desc: "Pembuatan poster mengenai isu-isu lingkungan yang dipublikasikan di mading dan setiap kelas.",
          status: "On Going",
        },
        {
          nama: "Bersih-Bersih Lapangan & Vertical Garden ",
          desc: "Kegiatan rutin setiap departemen untuk membersihkan lapangan dan vertical garden secara bergilir.",
          status: "Upcoming",
        },
        {
          nama: "Lomba Kelas Terbersih",
          desc: "Kompetisi kebersihan antar kelas untuk menumbuhkan kesadaran dan tanggung jawab menjaga lingkungan sekolah.",
          status: "Upcoming",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 text-slate-900"
    >
      <div id="home" className="min-h-screen">
        {/* --- HERO SECTION --- */}
        <section
          id="beranda"
          className="pt-32 pb-20 relative overflow-hidden bg-white"
        >
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
                src="/logo.jpeg"
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
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <Target size={30} />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight text-slate-900">
              Visi
            </h3>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Mewujudkan OSIS yang berlandaskan budi pekerti luhur serta menjadi
              teladan bagi seluruh siswa/i. OSIS hadir sebagai wadah aktif untuk
              menampung aspirasi, pendapat, dan mengembangkan minat bakat
              melalui berbagai kegiatan kreatif & bermanfaat.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <Award size={30} />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight text-slate-900">
              Misi
            </h3>
            <ul className="text-slate-600 space-y-4 font-semibold text-lg">
              {[
                "Membangun budaya organisasi yang menjunjung akhlak mulia & kepemimpinan yang menginspirasi.",
                "Menjadikan anggota OSIS sebagai contoh dalam disiplin, etika, & tanggung jawab.",
                "Menyediakan ruang komunikasi aktif untuk menyalurkan aspirasi dan pendapat siswa.",
                "Menjadi wadah kreatif untuk menampung minat, bakat, & ide positif siswa/i SMPIP.",
                "Meningkatkan partisipasi aktif dalam kegiatan sekolah maupun masyarakat.",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="text-3xl font-black mb-16 uppercase tracking-[0.2em] text-blue-400">
              BEST dalam Angka
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { n: "7", t: "Seksi Departemen" },
                { n: "34", t: "Pengurus OSIS BEST" },
                { n: "20+", t: "Program Kerja" },
                { n: "200+", t: "Siswa Terlibat" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-6xl font-black mb-3 text-white">
                    {stat.n}
                  </p>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                    {stat.t}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- BERITA & PROKER (DIPERBAIKI LAYOUTNYA) --- */}
        <section
          id="berita"
          className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-24"
        >
          {/* KOLOM KIRI: UPDATE PENGUMUMAN (Lebar 4 kolom) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3 text-slate-900">
              <Bell className="text-blue-600" size={32} /> UPDATE
            </h3>

            <div className="grid grid-cols-1 gap-6 sticky top-32">
              {/* LINK KE PENDAFTARAN */}
              <Link href="/pendaftaran" className="block group">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:border-blue-500 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    PENGUMUMAN
                  </span>
                  <h4 className="text-xl font-bold mt-4 group-hover:text-blue-600 leading-tight text-slate-800">
                    Open Recruitment BEST Baru Akan Segera Dibuka!
                  </h4>
                  <p className="text-slate-500 mt-3 font-medium text-sm">
                    Klik di sini untuk melihat syarat dan pendaftaran online.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-xs">
                    LIHAT DETAIL <ArrowRight size={14} />
                  </div>
                </div>
              </Link>

              {/* LINK KE ASPIRASI */}
              <Link href="/aspirasi" className="block group">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:border-emerald-500 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    ASPIRASI
                  </span>
                  <h4 className="text-xl font-bold mt-4 group-hover:text-emerald-600 leading-tight text-slate-800">
                    Sampaikan Aspirasimu Lewat Kotak Suara Online!
                  </h4>
                  <p className="text-slate-500 mt-3 font-medium text-sm">
                    Punya ide kegiatan atau saran untuk sekolah?
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    KIRIM SUARA <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* KOLOM KANAN: LIST PROGRAM KERJA (Lebar 8 kolom, Lebih Lega) */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3 text-slate-900">
              <Star className="text-yellow-500" size={32} /> PROGRAM KERJA
            </h3>

            {/* Box tanpa scroll, memanjang natural ke bawah */}
            <div className="space-y-6">
              {dataProker.map((dept, index) => (
                <details
                  key={index}
                  className="group bg-white border border-slate-200 shadow-sm rounded-[2rem] p-6 md:p-8 cursor-pointer hover:shadow-md transition-all overflow-hidden"
                >
                  <summary className="font-black text-slate-800 text-lg md:text-xl uppercase tracking-widest list-none flex justify-between items-center outline-none">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                      {dept.dept}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform border border-slate-100">
                      <ChevronDown size={20} className="text-slate-500" />
                    </div>
                  </summary>

                  <div className="mt-8 space-y-4 pt-6 border-t border-slate-100 cursor-default">
                    {dept.proker.map((p, idx) => {
                      let statusStyle = "";
                      let dotStyle = "";
                      if (p.status === "Completed") {
                        statusStyle =
                          "bg-emerald-50 text-emerald-700 border-emerald-100";
                        dotStyle = "bg-emerald-500";
                      } else if (p.status === "On Going") {
                        statusStyle =
                          "bg-blue-50 text-blue-700 border-blue-100";
                        dotStyle = "bg-blue-500 animate-pulse";
                      } else {
                        statusStyle =
                          "bg-amber-50 text-amber-700 border-amber-100";
                        dotStyle = "bg-amber-500";
                      }

                      return (
                        <div
                          key={idx}
                          className="flex flex-col md:flex-row md:items-start justify-between gap-4 p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
                        >
                          <div className="flex-1 pr-4">
                            <h5 className="font-bold text-slate-800 mb-2 text-base">
                              {p.nama}
                            </h5>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                          <div
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest shrink-0 w-fit ${statusStyle}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${dotStyle}`}
                            ></span>
                            {p.status}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- STRUKTUR ORGANISASI --- */}
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

            {/* SEMUA DEPARTEMEN */}
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
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
                  a: "Alur pendaftaran meliputi pengisian formulir online melalui portal ini, seleksi berkas, serta tes wawancara.",
                },
                {
                  q: "Apa saja keuntungan bergabung di OSIS?",
                  a: "Kamu akan belajar public speaking, manajemen waktu, cara mengelola event besar, hingga memperluas jaringan pertemanan.",
                },
                {
                  q: "Apakah OSIS mengganggu akademik?",
                  a: "Tidak. kegiatan OSIS dirancang seimbang dan tetap mengutamakan tanggung jawab akademik. Pengurus diajarkan untuk mengatur waktu dengan baik agar prestasi tetap terjaga.",
                },
                {
                  q: "Bagaimana cara menyampaikan aspirasi ke OSIS?",
                  a: "Siswa dapat menyampaikan aspirasi melalui form aspirasi di website, media sosial resmi OSIS, atau secara langsung kepada pengurus. Semua aspirasi akan ditampung dan ditindaklanjuti secara profesional.",
                },
                {
                  q: "Apakah OSIS akan mendapatkan sertifikat?",
                  a: "Ya! pengurus yang menyelesaikan masa jabatan dengan baik akan mendapatkan sertifikat sebagai bentuk apresiasi atas kontribusinya.",
                },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-3xl p-6 cursor-pointer hover:shadow-lg transition-all overflow-hidden"
                >
                  <summary className="text-slate-900 font-black text-sm uppercase tracking-tight list-none flex justify-between items-center outline-none">
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
