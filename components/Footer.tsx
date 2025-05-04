// components/Footer.tsx
"use client";

import Link from "next/link";
import { FiMail, FiLinkedin, FiPhone } from "react-icons/fi";

export default function Footer() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919985554909&text=" +
    encodeURIComponent("Hello, I have a query regarding my ITR filing.");

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <div className="flex items-center space-x-3 group">
            <FiMail className="text-2xl transition-transform transform group-hover:scale-110" />
            <a
              href="mailto:itreturnhyd@gmail.com"
              className="hover:text-white transition-colors"
            >
              itreturnhyd@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3 group">
            <FiPhone className="text-2xl transition-transform transform group-hover:scale-110 text-green-400" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              +91 99855 54909
            </a>
          </div>
        </div>

        {/* Company Bio or Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Parasuraman Auditing Firm</h3>
          <p className="text-gray-400">
            Expert ITR filing & tax advisory, making your life simpler one return at a time.
          </p>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <a
            href="https://www.linkedin.com/company/parasuraman-auditing-firm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 group"
          >
            <FiLinkedin className="text-2xl transition-transform transform group-hover:scale-110 text-blue-500" />
            <span className="hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Parasuraman Auditing Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
