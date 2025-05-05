// app/about-us/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";

const differenceItems = [
  {
    title: "Excellence in Service",
    image: "Excellence-in-Service",
    text:
      "Our skilled tax professionals stay up‑to‑date with evolving Canadian tax laws to provide accurate advice and seamless solutions.",
  },
  {
    title: "Client‑First Approach",
    image: "1",
    text:
      "We prioritize your needs by delivering personalized services that maximize savings, minimize liabilities, and ensure compliance.",
  },
  {
    title: "Year‑Round Support",
    image: "2",
    text:
      "Tax needs don’t stop after the season ends. We offer expert assistance throughout the year, ensuring you have reliable support whenever you need it.",
  },
  {
    title: "Your Privacy Matters",
    image: "3",
    text:
      "We handle your personal data with the utmost care and follow rigorous confidentiality measures.",
  },
  {
    title: "Adapting to Change",
    image: "4",
    text:
      "The tax landscape evolves, and so do we. Continuous learning ensures we’re always ready to meet your needs with compliant solutions.",
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

  // Parallax for clock image
  const { scrollY } = useViewportScroll();
  const clockY = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/banner-bg.mp4"
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* NAV */}
        <nav className="absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center z-20 text-white">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="C-Note Tax"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </Link>
          {/* desktop */}
          <div className="hidden lg:flex items-center space-x-8">
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
          {/* mobile hamburger */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </nav>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-[64px] left-0 w-full bg-black bg-opacity-90 py-4 space-y-2 z-20">
            {["Home", "About Us", "File Your Tax"].map((t, i) => (
              <Link
                key={i}
                href={t === "Home" ? "/" : t === "About Us" ? "#about" : "/file-your-tax"}
                className="block px-6 py-2 text-white hover:bg-white hover:text-black"
              >
                {t}
              </Link>
            ))}
            <button
              className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link href="/income-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black">Income Tax Services</Link>
                <Link href="/business-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black">Business Tax Services</Link>
                <Link href="/gst-tax-services" className="block px-4 py-2 text-white hover:bg-white hover:text-black">GST Tax Services</Link>
                <Link href="/gst-number-registration" className="block px-4 py-2 text-white hover:bg-white hover:text-black">GST Number Registration</Link>
              </div>
            )}
            <Link href="#contact" className="block px-6 py-2 text-white hover:bg-white hover:text-black">Contact Us</Link>
          </div>
        )}

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our story, vision & mission behind C‑Note Tax Solutions.
          </motion.p>
        </div>

        {/* Parallax Clock */}
        <motion.div
          style={{ y: clockY }}
          className="hidden md:block absolute top-0 right-0 w-1/3 h-full"
        >
          <img
            src="/clocks.png"
            alt="Clock Illustration"
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
        </motion.div>
      </section>

      <main className="space-y-16">
        {/* About Us Text */}
        <section id="about" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-700">
              We proudly serve Canadians nationwide, making tax filing simple, no matter where you are.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="text-gray-700">
                Become Canada’s trusted tax firm, making tax filing simple and stress-free.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">Mission</h3>
              <p className="text-gray-700">
                Provide reliable, hassle-free tax solutions with expert guidance for every Canadian.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Company */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h3 className="text-2xl font-semibold">Our Company</h3>
            <p className="text-gray-700">
              For over nine years, C‑Note Tax Solutions Inc. has been more than just a tax firm—we’ve been a trusted partner to Canadians across the country.
            </p>
            <p className="text-gray-700">
              It’s about building trust, fostering relationships, and supporting you through every stage of your tax journey.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center mb-8">What Makes Us Different</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differenceItems.map(({ title, image, text }) => (
                <div key={title} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={`/${image}.jpg`}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center">
                    <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
                    <p className="text-white text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h3 className="text-2xl font-semibold">Our Clients</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Uber / Lyft / Truck Drivers",
                "Employed Individuals",
                "Small Business Corporations",
                "Other Sales Professionals",
              ].map((label, i) => (
                <div key={i} className="p-4 bg-gray-100 rounded-lg">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Footer */}
        <section id="contact" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-2">
            <p>Unit 213, 1085 Bellamy Rd North, Scarborough, ON M1H 3C7</p>
            <p>
              <a href="tel:+14163033600" className="text-blue-600 hover:underline">+1 416 303 3600</a>{" • "}
              <a href="mailto:contact@cnotetax.ca" className="text-blue-600 hover:underline">contact@cnotetax.ca</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
