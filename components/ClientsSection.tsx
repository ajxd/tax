// components/ClientsSection.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import LeavesFalling from "./LeavesFalling";

const metrics = [
  { label: "Years", end: 9, suffix: "+" },
  { label: "Clients", end: 15, suffix: "K+" },
  { label: "Files", end: 20, suffix: "K+" },
  { label: "Rating", end: 4.9, decimals: 1, suffix: " Reviews" },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative bg-gray-50 overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Falling leaves */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <LeavesFalling />
      </div>
      {/* Dot‑pattern overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-8">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map(({ label, end, suffix, decimals = 0 }) => (
            <div key={label} className="text-center">
              <CountUp
                start={0}
                end={end}
                suffix={suffix}
                decimals={decimals}
                duration={2}
                className="text-3xl sm:text-4xl font-extrabold text-gray-800"
              />
              <p className="mt-1 sm:mt-2 text-lg sm:text-xl text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
