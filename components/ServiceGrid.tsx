// components/ServiceGrid.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { FiMapPin, FiGlobe, FiPhone, FiFileText } from "react-icons/fi";

interface Option {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const options: Option[] = [
  { icon: <FiMapPin size={32} />,   label: "In‑Person",     href: "https://calendly.com/cnotetax/appointment" },
  { icon: <FiGlobe size={32} />,    label: "Remotely",      href: "https://cnotetax.clientportal.com" },
  { icon: <FiPhone size={32} />,    label: "Over Phone",    href: "tel:+14163033600" },
  { icon: <FiFileText size={32} />, label: "Document Drop", href: "#contact" },
];

export default function ServiceGrid() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => {
        const size = 10 + Math.random() * 50;     // 10px–60px
        return {
          id: i,
          top: Math.random() * 100,               // 0%–100%
          left: Math.random() * 100,              // 0%–100%
          size,
          delay: -Math.random() * 12,             // -12s–0s
          duration: 8 + Math.random() * 8,        // 8s–16s
          direction: Math.random() < 0.5 ? "normal" : "reverse",
        };
      }),
    []
  );

  return (
    <section id="services" className="relative overflow-visible py-20 bg-[#FFFFFF]">
      {/* Floating cubes */}
      {cubes.map(({ id, top, left, size, delay, duration, direction }) => (
        <div
          key={id}
          className="cube"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            animationDirection: direction,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">How We File Your Taxes</h2>
        <p className="text-lg text-gray-700 mb-8">
          Ready to get started? Simply click below to file your taxes through our secure form.
        </p>
        <Link
          href="/file-your-tax"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-medium rounded-full shadow-lg hover:opacity-90 transition"
        >
          File Your Tax
        </Link>
      </div>

      {/* Cube animations */}
      <style jsx>{`
        .cube {
          position: absolute;
          border: solid 4px #a70000;
          transform-origin: top left;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation-name: cube;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
        }
        @keyframes cube {
          0% {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg) translate(-50%, -50%);
            opacity: 0.6;
          }
          100% {
            transform: scale(0) rotate(360deg) translate(-50%, -50%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
