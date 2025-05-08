// app/income-tax-services/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiClock, FiDollarSign, FiShield, FiUsers, FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function IncomeTaxServicesPage() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help with Income Tax Services.");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const features = [
    "ITR‑1 & ITR‑2 E‑Filing",
    "TDS Return Filing (Form 26Q)",
    "Form 16 & 16A Verification",
    "Section 80C & 80D Investments",
    "Capital Gains Reporting",
    "Revised Return (ITR‑V) Processing",
  ];

  const whyChoose = [
    {
      icon: <FiClock size={32} />,
      title: "Quick Filing",
      desc: "E‑file your ITR swiftly via the official Income Tax portal.",
    },
    {
      icon: <FiDollarSign size={32} />,
      title: "Max Deductions",
      desc: "Optimize savings under Sections 80C, 80D, 24(b), and more.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Secure & Confidential",
      desc: "Your data is protected with bank‑grade encryption.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Expert Advisors",
      desc: "Experienced Chartered Accountants guiding you every step.",
    },
  ];

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
            {/* now correctly points to /about-us */}
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
                  {[
                    ["Income Tax Services", "/income-tax-services"],
                    ["Business Tax Services", "/business-tax-services"],
                    ["GST Tax Services", "/gst-tax-services"],
                    ["GST Registration", "/gst-number-registration"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="block px-6 py-2 hover:bg-gray-100">
                        {label}
                      </Link>
                    </li>
                  ))}
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
              // fixed here too
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Income Tax Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simplify your ITR filing—fast, accurate, and fully compliant.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/file-your-tax"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition text-center"
            >
              File Your Tax
            </Link>
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

        {/* Parallax Image on md+ */}
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

      <main className="flex flex-col">
        {/* FEATURES */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="mt-1 text-green-600 text-2xl">✔</span>
                <p className="text-gray-700">{feat}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 rounded-full shadow-lg text-white animate-bounce"
        >
          <FiPhone size={24} />
        </a>

        {/* TALK TO AN EXPERT */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/expert.jpg"
                alt="Talk to an Expert"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Talk to an Expert
              </h2>
              <p className="text-gray-700">
                Have questions? Our Chartered Accountants are here to guide you.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg shadow hover:opacity-90 transition"
              >
                Connect on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
