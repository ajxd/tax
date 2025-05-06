// app/gst-number-registration/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiClock, FiDollarSign, FiShield, FiUsers, FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const features = [
  "New GSTIN Registration",
  "Amendment of GSTIN Details",
  "Composition Scheme Registration",
  "Cancellation Processing",
  "Address & Contact Update",
  "Compliance Guidance",
];

const whyChoose = [
  {
    icon: <FiClock size={32} />,
    title: "Rapid Processing",
    desc: "Obtain your GSTIN within 24–48 hours via our streamlined e‑filing.",
  },
  {
    icon: <FiDollarSign size={32} />,
    title: "Zero Errors",
    desc: "Our experts ensure 100% accuracy on all application paperwork.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Fully Compliant",
    desc: "Stay updated with every GST rule change and amendment.",
  },
  {
    icon: <FiUsers size={32} />,
    title: "Dedicated CA Support",
    desc: "Chartered Accountants guide you at every step of registration.",
  },
];

export default function GstNumberRegistrationPage() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help with GST Number Registration.");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Parallax for desktop illustration
  const { scrollY } = useViewportScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Background video + overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/banner-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain drop-shadow-lg"
            />
          </Link>
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="#about" className="hover:text-blue-300">About Us</Link>
            {/* Updated to file-your-tax */}
            <Link href="/file-your-tax" className="hover:text-blue-300">File Your Tax</Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="hover:text-blue-300">Services ▾</button>
              {servicesOpen && (
                <ul className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg">
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
                      GST Registration
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
            <Link href="/" className="block px-6 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="#about" className="block px-6 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>About Us</Link>
            {/* Updated to file-your-tax */}
            <Link href="/file-your-tax" className="block px-6 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>File Your Tax</Link>
            <button
              className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link href="/income-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>
                  Income Tax Services
                </Link>
                <Link href="/business-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>
                  Business Tax Services
                </Link>
                <Link href="/gst-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>
                  GST Tax Services
                </Link>
                <Link href="/gst-number-registration" className="block px-4 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>
                  GST Registration
                </Link>
              </div>
            )}
            <Link href="#contact" className="block px-6 py-2 text-white hover:bg-white hover:text-black" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GST Number Registration
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Obtain your GSTIN quickly and accurately for your Indian business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Updated to file-your-tax */}
            <Link
              href="/file-your-tax"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:opacity-90 transition"
            >
              File Your Tax
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-lg text-center hover:opacity-90 transition"
            >
              <FiPhone className="inline-block mr-2" /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Parallax Image (only on md+) */}
        <motion.div
          style={{ y: parallax }}
          className="hidden md:block md:w-1/2 h-full"
        >
          <img
            src="/banner.png"
            alt="GST Registration Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="space-y-16">
        {/* ABOUT */}
        <section id="about" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why GST Registration Matters</h2>
            <p className="text-gray-700">
              A valid GSTIN lets you legally collect GST, claim input tax credits, and comply with India's GST laws. We manage the end‑to‑end registration process so you can focus on growing your business.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="font-semibold mb-2">{feat}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Get Your GSTIN?</h3>
          <p className="mb-6">Let's register your business swiftly and accurately.</p>
          <Link
            href="/file-your-tax"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <p>123, MG Road, Bengaluru, Karnataka 560001, India</p>
            <p>
              <a href="tel:+918012345678" className="text-blue-600 hover:underline">+91 80123 45678</a>
              {" • "}
              <a href="mailto:support@cnotein.com" className="text-blue-600 hover:underline">support@cnotein.com</a>
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
