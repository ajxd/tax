// components/ServicesCarousel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  image: string;
  href: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Income Tax Services",
    image: "/services/income-tax.jpg",
    href: "#income-tax-services",
    description: "Maximize your refund with expert filing & deductions.",
  },
  {
    title: "Business Tax Services",
    image: "/services/business-tax.jpeg",
    href: "#business-tax-services",
    description: "Corporate returns, advisory, and tax planning.",
  },
  {
    title: "GST Tax Services",
    image: "/services/gst-services.jpg",
    href: "#gst-tax-services",
    description: "GST filing, input credits, and compliance.",
  },
  {
    title: "GST Number Registration",
    image: "/services/gst-registration.jpeg",
    href: "#gst-number-registration",
    description: "Fast setup of your GST/HST account and filings.",
  },
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const len = services.length;
  // initialize ref with null
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // auto‑advance every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [len]);

  return (
    <div className="relative w-full overflow-hidden px-4 py-8 md:py-12">
      {/* Slides container */}
      <div className="relative h-64 md:h-96">
        {services.map((svc, i) => (
          <motion.a
            key={svc.title}
            href={svc.href}
            className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="w-full h-32 md:h-40 overflow-hidden rounded-md mb-4">
              <img
                src={svc.image}
                alt={svc.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
              {svc.title}
            </h3>
            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 text-center">
              {svc.description}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
