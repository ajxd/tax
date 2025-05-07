// components/ServicesCarousel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, motion, Variants } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    href: "/income-tax-services",
    description: "Maximize your refund with expert filing & deductions.",
  },
  {
    title: "Business Tax Services",
    image: "/services/business-tax.jpeg",
    href: "/business-tax-services",
    description: "Corporate returns, advisory, and tax planning.",
  },
  {
    title: "GST Tax Services",
    image: "/services/gst-services.jpg",
    href: "/gst-tax-services",
    description: "GST filing, input credits, and compliance.",
  },
  {
    title: "GST Number Registration",
    image: "/services/gst-registration.jpeg",
    href: "/gst-number-registration",
    description: "Fast setup of your GST/HST account and filings.",
  },
];

// Tween for slide transitions
const trackVariants: Variants = {
  animate: {
    transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
  },
};

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const len = services.length;
  const hoverRef = useRef(false);

  // Auto‑advance every 5s, pause on hover
  useEffect(() => {
    const tid = setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i + 1) % len);
      }
    }, 5000);
    return () => clearInterval(tid);
  }, [len]);

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <LazyMotion features={domAnimation}>
        {/* Slides track */}
        <motion.div
          className="flex"
          variants={trackVariants}
          animate="animate"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="min-w-full flex-shrink-0 relative h-48 sm:h-64 md:h-80 lg:h-[500px]"
            >
              <Link href={svc.href} className="block w-full h-full">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 md:left-10 max-w-xs text-white">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base md:text-lg bg-black/50 inline-block px-3 py-1 rounded">
                    {svc.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </LazyMotion>

      {/* Prev / Next controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
