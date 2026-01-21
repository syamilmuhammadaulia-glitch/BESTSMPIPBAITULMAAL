import React from "react";
import "./globals.css"; // <--- WAJIB ADA DI BARIS PALING ATAS
import Navbar from "../components/Navbar"; // Pastikan path file Navbar sudah benar
import Footer from "../components/Footer"; // Pastikan path file Footer sudah benar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <title>Website Resmi OSIS</title>
      </head>
      <body className="antialiased">
        {/* Navigasi Global (Fixed di atas) */}
        <Navbar />

        {/* Main Content 
            pt-20 agar konten tidak tertutup navbar (h-20)
        */}
        <main className="min-h-screen pt-20">{children}</main>

        {/* Footer Global */}
        <Footer />
      </body>
    </html>
  );
}
