// components/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="h-12 sm:h-16 md:h-20 lg:h-24">
          <img
            src="/Blue Minimalist Financial Consulting Agency Logo.png"
            alt="Company Logo"
            className="object-contain drop-shadow-lg w-auto h-full"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          <Link href="/" className="hover:text-blue-300">Home</Link>
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
                <li>
                  <Link href="/income-tax-services" className="block px-4 py-2 hover:bg-gray-100">
                    Income Tax Services
                  </Link>
                </li>
                <li>
                  <Link href="/business-tax-services" className="block px-4 py-2 hover:bg-gray-100">
                    Business Tax Services
                  </Link>
                </li>
                <li>
                  <Link href="/gst-tax-services" className="block px-4 py-2 hover:bg-gray-100">
                    GST Tax Services
                  </Link>
                </li>
                <li>
                  <Link href="/gst-number-registration" className="block px-4 py-2 hover:bg-gray-100">
                    GST Number Registration
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[64px] left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
          {/* Main links */}
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "File Your Tax", href: "/file-your-tax" },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block px-6 py-2 text-white hover:bg-white hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              {it.label}
            </Link>
          ))}

          {/* Services submenu toggle */}
          <button
            className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services ▾
          </button>

          {/* Submenu items */}
          {servicesOpen && (
            <div className="pl-6">
              {[
                { label: "Income Tax Services", href: "/income-tax-services" },
                { label: "Business Tax Services", href: "/business-tax-services" },
                { label: "GST Tax Services", href: "/gst-tax-services" },
                { label: "GST Number Registration", href: "/gst-number-registration" },
              ].map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="block px-6 py-2 text-white hover:bg-white hover:text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          )}

          {/* Contact link */}
          

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center h-full px-6 pt-24 md:pt-0">
        <motion.div
          className="w-full md:w-1/2 text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center md:text-left">
            Are you looking for{" "}
            <span className="text-blue-400">a hassle-free tax experience?</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            Let us simplify the process for you!
          </p>
          <div className="flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-8 py-4 rounded-md bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
            >
              Click Here for Help
            </a>
            <Link
              href="/file-your-tax"
              className="w-full md:w-auto text-center px-8 py-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
            >
              File Your Tax
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="w-3/4 h-48 mx-auto mt-8 md:w-full md:h-full md:mt-0"
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
    </section>
  );
}
