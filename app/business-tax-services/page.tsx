// app/business-tax-services/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiClock, FiDollarSign, FiShield, FiUsers, FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function BusinessTaxServicesPage() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help with Business Tax Services.");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const features = [
    "Corporate Tax Filing (ITR‑6)",
    "Partnership & Proprietorship Returns (ITR‑5/ITR‑4)",
    "GST Return Filing (GSTR‑1 & GSTR‑3B)",
    "GST Audit Support (GSTR‑9)",
    "Tax Planning under MAT (Section 115JB)",
    "Tax Advisory & Consultations",
  ];

  const whyChoose = [
    {
      icon: <FiClock size={32} />,
      title: "Timely Filings",
      desc: "We file all your returns before due dates, avoiding penalties.",
    },
    {
      icon: <FiDollarSign size={32} />,
      title: "Max Deductions",
      desc: "Optimize savings under Indian Income‑tax & GST laws.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Regulatory Compliance",
      desc: "Stay compliant with evolving corporate tax & GST regulations.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Dedicated CA Support",
      desc: "Expert Chartered Accountants guide you end‑to‑end.",
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
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-6 flex justify-between items-center text-white">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-20 md:h-24 lg:h-28 object-contain drop-shadow-lg"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/about-us" className="hover:text-blue-300">About Us</Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="hover:text-blue-300">Services ▾</button>
              {servicesOpen && (
                <ul className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg">
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
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
            {[{ href: "/", label: "Home" },  { label: "About Us", href: "/about-us" }].map((it) => (
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
                  { href: "/income-tax-services", label: "Income Tax Services" },
                  { href: "/business-tax-services", label: "Business Tax Services" },
                  { href: "/gst-tax-services", label: "GST Tax Services" },
                  { href: "/gst-number-registration", label: "GST Registration" },
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
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Business Tax Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive corporate & partnership tax solutions for Indian businesses.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
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

        {/* Parallax Banner Image */}
        <motion.div
          style={{ y: parallax }}
          className="hidden md:block absolute top-0 right-0 w-1/2 h-full"
        >
          <img
            src="/banner.png"
            alt="Business Tax Illustration"
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
        </motion.div>
      </section>

      <main className="flex flex-col min-h-screen">
        {/* FEATURES */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={feat}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="mt-1 text-green-600 text-2xl">✔</span>
                <p className="text-gray-700">{feat}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 bg-[#F1EFED]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TALK TO AN EXPERT */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              className="lg:w-1/2"
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
              className="lg:w-1/2 text-center lg:text-left space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold">Talk to an Expert</h2>
              <p className="text-gray-700">Our CA specialists are ready to answer any business‑tax query.</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg shadow hover:opacity-90 transition"
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
