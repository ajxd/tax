// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-transparent z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo / Home */}
        <Link href="/" className="text-white text-2xl font-bold">
          C-Note Tax
        </Link>

        {/* Desktop nav */}
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
          <div className="relative group">
            <button className="hover:text-blue-300">Services ▾</button>
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
          </div>
          <Link href="https://cnotetax.ca/login" className="hover:text-blue-300">
            Login
          </Link>
          
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen((o) => !o)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 py-4">
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
            onClick={() => setMobileOpen((o) => !o)}
          >
            Services ▾
          </button>
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
          <Link
            href="https://cnotetax.ca/login"
            className="block px-6 py-2 text-white hover:bg-white hover:text-black"
          >
            Login
          </Link>
          <Link
            href="#contact"
            className="block px-6 py-2 text-white hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
