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

      {/* Nav */}
      <nav className="absolute top-0 left-0 w-full px-4 md:px-16 py-4 flex items-center z-20">
        {/* Logo (center on mobile, left on desktop) */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/" className="h-16 md:h-16 lg:h-20">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Company Logo"
              className="object-contain drop-shadow-lg w-auto h-full"
            />
          </Link>
        </div>

        {/* Desktop nav (unchanged) */}
        <div className="hidden lg:flex items-center space-x-8 text-white">
          <Link href="/about-us" className="hover:text-blue-300">
            About Us
          </Link>
          <Link href="/file-your-tax" className="hover:text-blue-300">
            File Your Tax
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-blue-300">Services ▾</button>
            {servicesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <li>
                  <Link
                    href="/income-tax-services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Income Tax Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-tax-services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Business Tax Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gst-tax-services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GST Tax Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gst-number-registration"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
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

      {/* Mobile slide‑in menu */}
      <div
        className={`fixed inset-0 bg-black/90 z-30 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col pt-20 items-center space-y-6`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <Link
          href="/about-us"
          className="text-2xl text-white hover:text-blue-300"
          onClick={() => setMobileOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/file-your-tax"
          className="text-2xl text-white hover:text-blue-300"
          onClick={() => setMobileOpen(false)}
        >
          File Your Tax
        </Link>
        <div className="w-full px-6">
          <button
            className="w-full flex justify-between text-2xl text-white hover:text-blue-300"
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services ▾
          </button>
          {servicesOpen && (
            <div className="mt-4 space-y-4 pl-4">
              <Link
                href="/income-tax-services"
                className="block text-xl text-white hover:text-blue-300"
                onClick={() => setMobileOpen(false)}
              >
                Income Tax Services
              </Link>
              <Link
                href="/business-tax-services"
                className="block text-xl text-white hover:text-blue-300"
                onClick={() => setMobileOpen(false)}
              >
                Business Tax Services
              </Link>
              <Link
                href="/gst-tax-services"
                className="block text-xl text-white hover:text-blue-300"
                onClick={() => setMobileOpen(false)}
              >
                GST Tax Services
              </Link>
              <Link
                href="/gst-number-registration"
                className="block text-xl text-white hover:text-blue-300"
                onClick={() => setMobileOpen(false)}
              >
                GST Number Registration
              </Link>
            </div>
          )}
        </div>
       
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center h-full px-6 pt-24 md:pt-0">
        {/* Text */}
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

        {/* Image */}
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
