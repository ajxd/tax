// components/ClientsSection.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";

const metrics = [
  { label: "Years", end: 14, suffix: "+" },
  { label: "Clients", end: 0, suffix: "K+" },
  { label: "Files", end: 0, suffix: "K+" },
];

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, ease: "easeOut", duration: 0.5 },
  }),
};

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle diagonal‑stripe background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
          Our Impact Metrics
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={pillVariants}
              className="flex flex-col items-center"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold text-xl sm:text-2xl">
                <CountUp
                  start={0}
                  end={m.end}
                  suffix={m.suffix}
                  duration={2}
                />
              </div>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
