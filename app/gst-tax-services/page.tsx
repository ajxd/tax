// app/gst-tax-services/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiClock, FiDollarSign, FiShield, FiUsers, FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";

export default function GstTaxServicesPage() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help with GST Tax Services.");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const features = [
    "GST Registration & Amendments",
    "GST Return Filing",
    "Input Tax Credit Management",
    "E‑Invoicing Support",
    "GST Advisory & Compliance",
    "GST Audit Representation",
  ];

  const whyChoose = [
    {
      icon: <FiClock size={32} />,
      title: "Timely Filing",
      desc: "Never miss a GST deadline with our automated reminders & filings.",
    },
    {
      icon: <FiDollarSign size={32} />,
      title: "Max Credits",
      desc: "We ensure you claim every input tax credit you’re entitled to.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Fully Compliant",
      desc: "Stay audit‑ready with our rigorous review process.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Dedicated Team",
      desc: "GST specialists guide you through complex regulations.",
    },
  ];

  const [turnover, setTurnover] = useState(100000);
  const estimatedCredit = turnover * 0.18;

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
        <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain drop-shadow-lg"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="#about" className="hover:text-blue-300">About Us</Link>
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
                    { href: "/income-tax-services", label: "Income Tax Services" },
                    { href: "/business-tax-services", label: "Business Tax Services" },
                    { href: "/gst-tax-services", label: "GST Tax Services" },
                    { href: "/gst-number-registration", label: "GST Number Registration" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block px-4 py-2 hover:bg-gray-100">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link href="#contact" className="hover:text-blue-300">Contact Us</Link>
          </div>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "/file-your-tax", label: "File Your Tax" },
            ].map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="block px-6 py-2 text-white hover:bg-white hover:text-black"
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
              <div className="bg-black bg-opacity-90">
                {[
                  { href: "/income-tax-services", label: "Income Tax Services" },
                  { href: "/business-tax-services", label: "Business Tax Services" },
                  { href: "/gst-tax-services", label: "GST Tax Services" },
                  { href: "/gst-number-registration", label: "GST Number Registration" },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-8 py-2 text-white hover:bg-white hover:text-black"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="#contact"
              className="block px-6 py-2 text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
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
            GST Tax Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive GST solutions—registration, filing, credit management & compliance.
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
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* PARALLAX IMAGE */}
        <motion.div
          style={{ y: parallax }}
          className="hidden md:block absolute top-0 right-0 w-1/2 h-full"
        >
          <img
            src="/banner.png"
            alt="GST Illustration"
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Choose Us
            </h2>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition"
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

        {/* CREDIT ESTIMATOR */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Estimate Your Input Tax Credit
            </h2>
            <p className="text-gray-600">
              Drag the slider to enter your turnover and see your potential credit.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-700 font-medium">$0</span>
              <input
                type="range"
                min={0}
                max={1000000}
                step={50000}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-gray-700 font-medium">$1M+</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              <CountUp end={estimatedCredit} duration={1.5} prefix="$" decimals={0} /> estimated credit
            </div>
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

        {/* TALK TO EXPERT */}
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
              <h2 className="text-2xl sm:text-3xl font-extrabold">Talk to an Expert</h2>
              <p className="text-gray-700">
                Our GST specialists are on standby to handle all your queries.
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

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
