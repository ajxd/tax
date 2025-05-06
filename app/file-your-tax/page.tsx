// app/file-your-tax/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FileYourTaxPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-md px-6 md:px-16 py-4 flex justify-between items-center">
        <Link href="/">
          <img
            src="/Blue Minimalist Financial Consulting Agency Logo.png"
            alt="Parasuraman Auditing Firm Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-green-600">
            About Us
          </Link>
          <Link
            href="/file-your-tax"
            className="font-medium text-green-600 hover:text-green-700"
          >
            File Your Tax
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-green-600">Services ▾</button>
            {servicesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg">
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

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMobileOpen((o) => !o)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md w-full px-6 py-4 space-y-2">
          <Link href="/" className="block hover:text-green-600">
            Home
          </Link>
          <Link href="/about-us" className="block hover:text-green-600">
            About Us
          </Link>
          <Link
            href="/file-your-tax"
            className="block font-medium text-green-600 hover:text-green-700"
          >
            File Your Tax
          </Link>
          <button
            className="w-full text-left hover:text-green-600"
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services ▾
          </button>
          {servicesOpen && (
            <div className="pl-4">
              <Link
                href="/income-tax-services"
                className="block py-1 hover:text-green-600"
              >
                Income Tax Services
              </Link>
              <Link
                href="/business-tax-services"
                className="block py-1 hover:text-green-600"
              >
                Business Tax Services
              </Link>
              <Link
                href="/gst-tax-services"
                className="block py-1 hover:text-green-600"
              >
                GST Tax Services
              </Link>
              <Link
                href="/gst-number-registration"
                className="block py-1 hover:text-green-600"
              >
                GST Number Registration
              </Link>
            </div>
          )}
         
        </div>
      )}

      {/* HERO BANNER */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          File Your Tax
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Fill out this form and our experts will handle everything for you.
        </p>
      </div>

      {/* GOOGLE FORM */}
      <div className="flex-1 px-4 md:px-16 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScIxfBj5msAvkjRAxPinmurk_yddFPP5y3CMcd8xXz4JMOhbg/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            className="block"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* CONTACT ANCHOR */}
      <div id="contact" className="py-16 bg-white text-center">
        <p className="text-gray-700">
          <strong>Parasuraman Auditing Firm</strong>  
          <br />
          Unit – 213, 1085 Bellamy Rd North, Scarborough, ON M1H 3C7  
          <br />
          <a href="tel:+14163033600" className="text-green-600 hover:underline">
            +1 416 303 3600
          </a>{" "}
          •{" "}
          <a
            href="mailto:contact@parasuramanaudit.com"
            className="text-green-600 hover:underline"
          >
            contact@parasuramanaudit.com
          </a>
        </p>
      </div>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}
