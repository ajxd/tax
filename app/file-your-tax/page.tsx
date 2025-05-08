// app/file-your-tax/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function FileYourTaxPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need to file my tax.");

  const { scrollY } = useViewportScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/banner-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* NAV */}
        <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center text-white">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain drop-shadow-lg"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/about-us" className="hover:text-blue-300">About Us</Link>
            <Link href="/file-your-tax" className="font-medium text-green-500">
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
                    <Link href="/income-tax-services" className="block px-6 py-2 hover:bg-gray-100">
                      Income Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-tax-services" className="block px-6 py-2 hover:bg-gray-100">
                      Business Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/gst-tax-services" className="block px-6 py-2 hover:bg-gray-100">
                      GST Tax Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/gst-number-registration" className="block px-6 py-2 hover:bg-gray-100">
                      GST Registration
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[64px] left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
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
            <button
              className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="pl-6">
                {[
                  { label: "Income Tax Services", href: "/income-tax-services" },
                  { label: "Business Tax Services", href: "/business-tax-services" },
                  { label: "GST Tax Services", href: "/gst-tax-services" },
                  { label: "GST Registration", href: "/gst-number-registration" },
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
          </div>
        )}

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-0">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            File Your Tax
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fill out this form and our experts will handle everything for you.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#form"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition text-center"
            >
              Fill the Form
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:opacity-90 transition text-center"
            >
              Get Help on WhatsApp
            </a>
          </div>
        </div>

        {/* Parallax Image */}
        <motion.div
          style={{ y: parallax }}
          className="hidden md:block absolute top-0 right-0 w-1/2 h-full"
        >
          <img
            src="/banner.png"
            alt="Illustration"
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
        </motion.div>
      </section>

      <main className="flex-1 bg-gray-50">
        {/* GOOGLE FORM */}
        <section
          id="form"
          className="px-4 md:px-16 py-12 flex justify-center"
        >
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/MQGE94ZvzZZtmeqo6/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              className="block"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
