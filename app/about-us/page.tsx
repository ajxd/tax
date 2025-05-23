// app/about-us/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FiUsers, FiGlobe, FiShield, FiPhone } from "react-icons/fi";
import Footer from "@/components/Footer";

const differenceItems = [
  {
    title: "Excellence in Service",
    image: "Excellence-in-Service",
    text:
      "Our skilled tax professionals stay up‑to‑date with evolving Indian Income Tax and GST regulations to provide accurate advice and seamless solutions.",
  },
  {
    title: "Client‑First Approach",
    image: "1",
    text:
      "We prioritise your needs by delivering personalised services that maximise savings, minimise liabilities, and ensure full compliance.",
  },
  {
    title: "Year‑Round Support",
    image: "2",
    text:
      "Tax isn’t just seasonal. We offer expert assistance throughout the year, so you have reliable support whenever you need it.",
  },
  {
    title: "Your Privacy Matters",
    image: "3",
    text:
      "We treat your personal data with the utmost care, following strict confidentiality and security protocols.",
  },
  {
    title: "Adapting to Change",
    image: "4",
    text:
      "The Indian tax landscape evolves—and so do we. Continuous learning ensures we’re always ready with compliant, up‑to‑date solutions.",
  },
  {
    title: "Giving Back",
    image: "5",
    text:
      "We proudly support our community through charitable initiatives, striving to make a positive impact beyond tax services.",
  },
];

export default function AboutUsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useViewportScroll();
  const clockY = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-x-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/banner-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 pointer-events-none" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center z-30 text-white">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <Link href="#about" className="hover:text-green-400">
              About Us
            </Link>
            <Link href="/file-your-tax" className="hover:text-green-400">
              File Your Tax
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="hover:text-green-400">Services ▾</button>
              {servicesOpen && (
                <ul className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                  {[
                    ["Income Tax Services", "/income-tax-services"],
                    ["Business Tax Services", "/business-tax-services"],
                    ["GST Tax Services", "/gst-tax-services"],
                    ["GST Registration", "/gst-number-registration"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* MOBILE MENU (now above hero text) */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[64px] left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-40">
            {/* Primary Links */}
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "#about" },
              { label: "File Your Tax", href: "/file-your-tax" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block px-6 py-2 text-white hover:bg-white hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Services Toggle */}
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
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-6 py-2 text-white hover:bg-white hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {/* Contact */}
            
          </div>
        )}

        {/* HERO TEXT */}
        <div className="relative z-20 flex flex-col justify-center h-full max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover the story, vision & mission behind Parasuraman Auditing Firm.
          </motion.p>
        </div>

        {/* PARALLAX CLOCK */}
        <motion.div
          style={{ y: clockY }}
          className="hidden md:block absolute top-0 right-0 w-1/3 h-full opacity-40"
        >
          <img src="/clocks.png" alt="" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="space-y-20 py-16 bg-gray-50">
        {/* ABOUT STATEMENT */}
        <section id="about" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.p
              className="text-gray-700 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              We proudly serve clients across India, making tax filing simple
              and stress‑free, no matter where you are.
            </motion.p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <FiUsers className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-700">
                To be India’s most trusted auditing and tax advisory firm,
                empowering individuals and businesses with clarity and peace
                of mind.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiGlobe className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-700">
                Deliver reliable, hassle‑free auditing and tax solutions with
                expert guidance for every Indian client.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OUR JOURNEY */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h3 className="text-2xl font-semibold text-center">Our Journey</h3>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                "For over fourteen years, Parasuraman Auditing Firm has been more than just a number‑cruncher—we’ve been a trusted partner to businesses, professionals, and individuals across India.",
                "It’s about building trust, fostering lasting relationships, and guiding you through every step of your financial journey.",
              ].map((txt, idx) => (
                <motion.p
                  key={idx}
                  className="text-gray-700"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {txt}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center mb-8">
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differenceItems.map(({ title, image, text }) => (
                <motion.div
                  key={title}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={`/${image}.jpg`}
                    alt={title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* CONTACT */}
       
      </main>

      <Footer />
    </>
  );
}
