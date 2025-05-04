// app/file-your-tax/page.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function FileYourTaxPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Nav bar */}
      <nav className="w-full bg-white shadow px-6 md:px-16 py-4 flex justify-between items-center z-10">
        <Link href="/">
          <img
            src="/Blue Minimalist Financial Consulting Agency Logo.png"
            alt="Logo"
            className="h-16 md:h-20 object-contain drop-shadow-lg"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-8 text-gray-700">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="#about" className="hover:text-green-600">About Us</Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-green-600">Services ▾</button>
            {servicesOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                <li>
                  <Link href="#personal" className="block px-4 py-2 hover:bg-gray-100">
                    Personal Tax
                  </Link>
                </li>
                <li>
                  <Link href="#business" className="block px-4 py-2 hover:bg-gray-100">
                    Business Tax
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="/file-your-tax" className="font-medium text-green-600">
            File Your Tax
          </Link>
          <Link href="#contact" className="hover:text-green-600">Contact Us</Link>
        </div>
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow w-full px-4 py-4 space-y-2">
          <Link href="/" className="block hover:text-green-600">Home</Link>
          <Link href="#about" className="block hover:text-green-600">About Us</Link>
          <button
            className="w-full text-left hover:text-green-600"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾
          </button>
          {servicesOpen && (
            <div className="pl-4">
              <Link href="#personal" className="block hover:text-green-600">Personal Tax</Link>
              <Link href="#business" className="block hover:text-green-600">Business Tax</Link>
            </div>
          )}
          <Link href="/file-your-tax" className="block font-medium text-green-600">File Your Tax</Link>
          <Link href="#contact" className="block hover:text-green-600">Contact Us</Link>
        </div>
      )}

      {/* Page Hero Banner */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          File Your Tax
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Fill out this form and we’ll take care of the rest.
        </p>
      </div>

      {/* Embedded Google Form */}
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
    </div>
  );
}
