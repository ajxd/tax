"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FiClock, FiDollarSign, FiShield, FiUsers, FiPhone } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";

export default function BusinessTaxServicesPage() {
  // WhatsApp deep link
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I need help with Business Tax Services.");

  // Navbar state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Features list
  const features = [
    "Corporate Returns & Advisory",
    "Tax Planning & Strategy",
    "GST Compliance & Filing",
    "Audit Support & Representation",
    "Year‑End Financial Reporting",
    "Small Business Consulting",
  ];

  // Why Choose Us items
  const whyChoose = [
    {
      icon: <FiClock size={32} />,
      title: "Fast Turnaround",
      desc: "Complete your filings quickly with our streamlined, business‑focused process.",
    },
    {
      icon: <FiDollarSign size={32} />,
      title: "Max Savings",
      desc: "We optimize deductions and credits to keep more money in your business.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Secure & Confidential",
      desc: "Your financials are protected with enterprise‑grade security.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Expert Support",
      desc: "Dedicated CAs specialize in corporate tax to guide you every step.",
    },
  ];

  // Refund Estimator state (demo for corporate refund scenario)
  const [income, setIncome] = useState(100000);
  const estimatedRefund = income * 0.2; // assume 20% savings

  // Parallax for banner image
  const { scrollY } = useViewportScroll();
  const parallax = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <>
      {/* HERO with NAV overlay */}
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

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-20 md:h-24 lg:h-28 object-contain drop-shadow-lg"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-8 text-white">
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
                  <li><Link href="/income-tax-services" className="block px-4 py-2 hover:bg-gray-100">Income Tax Services</Link></li>
                  <li><Link href="/business-tax-services" className="block px-4 py-2 hover:bg-gray-100">Business Tax Services</Link></li>
                  <li><Link href="/gst-tax-services" className="block px-4 py-2 hover:bg-gray-100">GST Tax Services</Link></li>
                  <li><Link href="/gst-number-registration" className="block px-4 py-2 hover:bg-gray-100">GST Number Registration</Link></li>
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-black bg-opacity-90 py-4 z-20">
            {["Home", "About Us", "File Your Tax"].map((text, i) => (
              <Link
                key={i}
                href={text === "Home" ? "/" : text === "File Your Tax" ? "/file-your-tax" : "#about"}
                className="block px-6 py-2 text-white hover:bg-white hover:text-black"
              >
                {text}
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
            <Link href="#contact" className="block px-6 py-2 text-white hover:bg-white hover:text-black">
              Contact Us
            </Link>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex items-center h-full px-6">
          <motion.div
            className="w-full md:w-1/2 text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
              Business Tax Services
            </h1>
            <p className="text-lg md:text-xl">
              Expert corporate & business tax filing—accurate, compliant, maximized savings.
            </p>
            <Link
              href="/file-your-tax"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition"
            >
              File Your Tax
            </Link>
          </motion.div>
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

      {/* MAIN CONTENT */}
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

        {/* REFUND ESTIMATOR */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl font-bold">Estimate Your Savings</h2>
            <p className="text-gray-700">
              Drag the slider to enter your business revenue and see estimated tax savings.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">$0</span>
              <input
                type="range"
                min={0}
                max={500000}
                step={10000}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-gray-700 font-medium">$500k+</span>
            </div>
            <div className="text-4xl font-extrabold text-blue-600">
              <CountUp end={estimatedRefund} duration={1.5} prefix="$" decimals={0} /> estimated savings
            </div>
          </div>
        </section>

        {/* STICKY WHATSAPP CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 rounded-full shadow-lg text-white animate-bounce"
        >
          <FiPhone size={24} />
        </a>

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
              <p className="text-gray-700">
                Our corporate tax specialists are ready to guide you every step of the way.
              </p>
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

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
