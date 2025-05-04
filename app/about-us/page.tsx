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

  // parallax for clock image
  const { scrollY } = useViewportScroll();
  const clockY = useTransform(scrollY, [0, 300], [0, 80]);

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
        <div className="absolute inset-0 bg-black/50" />

        {/* NAV OVERLAY */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <img
              src="/Blue Minimalist Financial Consulting Agency Logo.png"
              alt="Logo"
              className="h-16 md:h-20 lg:h-24 object-contain drop-shadow-lg"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-8 text-white">
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-300">
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
            <Link href="#contact" className="hover:text-blue-300">
              Contact Us
            </Link>
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
          <div className="lg:hidden absolute top-[72px] left-0 w-full bg-black bg-opacity-90 py-4 z-20">
            <Link
              href="/"
              className="block px-6 py-2 text-white hover:bg-white hover:text-black"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-6 py-2 text-white hover:bg-white hover:text-black"
            >
              About Us
            </Link>
            <Link
              href="/file-your-tax"
              className="block px-6 py-2 text-white hover:bg-white hover:text-black"
            >
              File Your Tax
            </Link>
            <button
              className="w-full text-left px-6 py-2 text-white hover:bg-white hover:text-black"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="bg-black bg-opacity-90">
                <Link
                  href="/income-tax-services"
                  className="block px-8 py-2 text-white hover:bg-white hover:text-black"
                >
                  Income Tax Services
                </Link>
                <Link
                  href="/business-tax-services"
                  className="block px-8 py-2 text-white hover:bg-white hover:text-black"
                >
                  Business Tax Services
                </Link>
                <Link
                  href="/gst-tax-services"
                  className="block px-8 py-2 text-white hover:bg-white hover:text-black"
                >
                  GST Tax Services
                </Link>
                <Link
                  href="/gst-number-registration"
                  className="block px-8 py-2 text-white hover:bg-white hover:text-black"
                >
                  GST Number Registration
                </Link>
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

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-6xl mx-auto flex items-center h-full px-6">
          <motion.div
            className="w-full md:w-1/2 text-white space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              Our story, vision & mission behind C‑Note Tax Solutions.
            </p>
          </motion.div>
        </div>

        {/* CLOCK IMAGE PARALLAX */}
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

      {/* MAIN CONTENT */}
      <main className="flex flex-col">
        {/* ABOUT US TEXT */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-gray-700">
              We proudly serve Canadians nationwide, making tax filing simple,
              no matter where you are.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-16 bg-[#F1EFED]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-700">
                Become Canada’s trusted tax firm, making tax filing simple and
                stress-free.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-700">
                Provide reliable, hassle-free tax solutions with expert
                guidance for every Canadian.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OUR COMPANY */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-4">Our Company</h3>
            <p className="text-gray-700 space-y-4">
              For over nine years, C‑Note Tax Solutions Inc. has been more
              than just a tax firm—we’ve been a trusted partner to Canadians
              across the country. From first-time filers to experienced
              business owners, we provide reliable, accurate, and personalized
              tax solutions, always prioritizing your best interests.
            </p>
            <p className="text-gray-700">
              It’s not just about taxes—it’s about building trust, fostering
              lasting relationships, and being an integral part of your journey.
              We are committed to supporting you through every stage of your tax
              journey, ensuring your peace of mind and well-being.
            </p>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="py-16 bg-[#F1EFED]" id="difference">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-center mb-8">
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differenceItems.map(({ title, image, text }) => (
                <div
                  key={title}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={`/${image}.jpg`}
                    alt={title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center">
                    <h4 className="text-white text-xl font-semibold mb-2">
                      {title}
                    </h4>
                    <p className="text-white text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR CLIENTS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Our Clients
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Uber / Lyft / Truck Drivers / Taxi / Limousine",
                "Employed Individuals",
                "Small Business Corporations",
                "Other Sales Professionals",
              ].map((label, i) => (
                <motion.div
                  key={label}
                  className="p-6 bg-[#F1EFED] rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-gray-800">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FILING OPTIONS */}
        <section id="comfort" className="py-16 bg-[#F1EFED]">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            {[
              {
                title: "In‑Person",
                desc: "Book an Appointment or Walk in for Personalized In‑Person Filing",
                href: "https://calendly.com/cnotetax/appointment",
                btn: "Get Started",
              },
              {
                title: "Remotely",
                desc: "File from the Comfort of Your Home – With expert’s review",
                href: "https://cnotetax.clientportal.com",
                btn: "Get Started",
              },
              {
                title: "Over the Phone",
                desc: "Get Expert Help and File Taxes Over the Phone",
                href:
                  "https://api.whatsapp.com/send?phone=919985554909&text=" +
                  encodeURIComponent("I need phone filing help"),
                btn: "Get Started",
              },
              {
                title: "Document Drop‑Off",
                desc: "Drop Off Your Documents, and Let Us Handle the Rest",
                href: "#contact",
                btn: "Get Started",
              },
            ].map((opt, i) => (
              <motion.div
                key={opt.title}
                className="p-6 bg-white rounded-lg shadow flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-xl mb-2">{opt.title}</h4>
                  <p className="text-gray-700">{opt.desc}</p>
                </div>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition"
                >
                  {opt.btn}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STEPS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Steps to File Taxes Online
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Register on our secure platform",
                "Log In",
                "Select Service",
                "Provide Information",
                "Upload Documents",
                "Submit Application",
                "Our expert will connect with you soon",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  className="p-6 bg-[#F1EFED] rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Wait?</h3>
          <p className="mb-6">
            Join us today & experience hassle-free tax solutions!
          </p>
          <Link
            href="https://calendly.com/cnotetax/appointment"
            target="_blank"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:opacity-90 transition"
          >
            Book an Appointment
          </Link>
        </section>

        {/* CONTACT & FOOTER */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
            <p>Unit – 213, 1085 Bellamy Rd North, Scarborough, ON M1H 3C7</p>
            <p>
              <a
                href="tel:+14163033600"
                className="text-blue-600 hover:underline"
              >
                +1 416 303 3600
              </a>{" "}
              •{" "}
              <a
                href="mailto:contact@cnotetax.ca"
                className="text-blue-600 hover:underline"
              >
                contact@cnotetax.ca
              </a>
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="hover:opacity-80"
              >
                FB
              </a>
              <a
                href="https://web.whatsapp.com/"
                aria-label="WhatsApp"
                className="hover:opacity-80"
              >
                WA
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                IG
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER COMPONENT */}
        <Footer />
      </main>
    </>
  );
}
