// components/ServicesCarousel.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDollarSign,
  FiBriefcase,
  FiPercent,
  FiClipboard,
} from "react-icons/fi";

export default function ServicesCarousel() {
  const services = [
    {
      title: "Income Tax Services",
      image: "/services/income-tax.jpg",
      href: "#income-tax-services",
      icon: <FiDollarSign size={20} className="text-white" />,
    },
    {
      title: "Business Tax Services",
      image: "/services/business-tax.jpeg",
      href: "#business-tax-services",
      icon: <FiBriefcase size={20} className="text-white" />,
    },
    {
      title: "GST Tax Services",
      image: "/services/gst-services.jpg",
      href: "#gst-tax-services",
      icon: <FiPercent size={20} className="text-white" />,
    },
    {
      title: "GST Number Registration",
      image: "/services/gst-registration.jpeg",
      href: "#gst-number-registration",
      icon: <FiClipboard size={20} className="text-white" />,
    },
  ];

  const [index, setIndex] = useState(0);
  const len = services.length;
  const intervalRef = useRef<NodeJS.Timeout>();

  // Auto‑advance every 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % (len - 1));
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [len]);

  const goPrev = () => {
    clearInterval(intervalRef.current);
    setIndex((i) => (i === 0 ? len - 2 : i - 1));
  };
  const goNext = () => {
    clearInterval(intervalRef.current);
    setIndex((i) => (i + 1) % (len - 1));
  };

  return (
    <section id="services-carousel" className="pt-20 pb-0 bg-white">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-extrabold text-center">Our Services</h2>
      </div>

      {/* Full‑width carousel */}
      <div className="relative overflow-hidden">
        {/* Track: no horizontal padding */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {services.map((svc, i) => (
            <Link key={i} href={svc.href} className="flex-shrink-0 w-1/2">
              <div className="relative group aspect-[602/645] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {/* Semi‑opaque overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Icon + title box */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 px-3 py-1 rounded">
                  {svc.icon}
                  <span className="text-white text-sm font-semibold">
                    {svc.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl z-10"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl z-10"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
