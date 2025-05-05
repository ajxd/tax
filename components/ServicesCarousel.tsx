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
  // initialize ref to null so TS is happy
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [len]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {services.map((svc, i) => (
        <motion.a
          key={svc.title}
          href={svc.href}
          className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={svc.image}
            alt={svc.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
          <p className="text-gray-600 text-center">{svc.description}</p>
        </motion.a>
      ))}

      {/* simple dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
