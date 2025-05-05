// components/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // WhatsApp deep link
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help filing my ITR.");

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/banner-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 w-full px-6 md:px-16 py-6 flex justify-between items-center z-20">
        <Link href="/" className="h-20 md:h-24 lg:h-28">
          <img
            src="/Blue Minimalist Financial Consulting Agency Logo.png"
            alt="Company Logo"
            className="object-contain drop-shadow-lg w-auto h-full"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-8 text-white">
          <Link href="/about-us" className="hover:text-blue-300">About Us</Link>
          <Link href="/file-your-tax" className="hover:text-blue-300">File Your Tax</Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-blue-300">Services ▾</button>
            {servicesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li><Link href="/income-tax-services" className="block px-4 py-2 hover:bg-gray-100">Income Tax Services</Link></li>
                <li><Link href="/business-tax-services" className="block px-4 py-2 hover:bg-gray-100">Business Tax Services</Link></li>
                <li><Link href="/gst-tax-services" className="block px-4 py-2 hover:bg-gray-100">GST Tax Services</Link></li>
                <li><Link href="/gst-number-registration" className="block px-4 py-2 hover:bg-gray-100">GST Number Registration</Link></li>
              </ul>
            )}
          </div>
          <Link href="#contact" className="hover:text-blue-300">Contact Us</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-black bg-opacity-80 py-4 z-20">
          <Link href="/about-us" className="block px-6 py-2 text-white hover:bg-white hover:text-black">About Us</Link>
          <Link href="/file-your-tax" className="block px-6 py-2 text-white hover:bg-white hover:text-black">File Your Tax</Link>
          <button
            className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾
          </button>
          {servicesOpen && (
            <div className="bg-black bg-opacity-90">
              <Link href="/income-tax-services" className="block px-8 py-2 text-white hover:bg-white hover:text-black">Income Tax Services</Link>
              <Link href="/business-tax-services" className="block px-8 py-2 text-white hover:bg-white hover:text-black">Business Tax Services</Link>
              <Link href="/gst-tax-services" className="block px-8 py-2 text-white hover:bg-white hover:text-black">GST Tax Services</Link>
              <Link href="/gst-number-registration" className="block px-8 py-2 text-white hover:bg-white hover:text-black">GST Number Registration</Link>
            </div>
          )}
          <Link href="#contact" className="block px-6 py-2 text-white hover:bg-white hover:text-black">Contact Us</Link>
        </div>
      )}

      {/* Hero content + image */}
      <div className="relative z-10 flex flex-col md:flex-row items-center h-full px-6">
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Are you looking for{" "}
            <span className="text-blue-400">a hassle-free tax experience?</span>
          </h1>
          <p className="text-2xl md:text-3xl">Let us simplify the process for you!</p>
          <div className="flex flex-wrap gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-md bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
            >
              Click Here for Help
            </a>
            <Link
              href="/file-your-tax"
              className="px-8 py-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
            >
              File Your Tax
            </Link>
          </div>
        </motion.div>

        {/* Image (always visible) */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 h-64 md:h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/two-people.png"
            alt="Two people talking"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-heading, .animate-subheading, .animate-buttons a {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-heading { animation-delay: 0.5s; }
        .animate-subheading { animation-delay: 0.8s; }
        .animate-buttons a:nth-child(1) { animation-delay: 1.1s; }
        .animate-buttons a:nth-child(2) { animation-delay: 1.3s; }
      `}</style>
    </section>
  );
}
