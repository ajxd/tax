// components/ClientsSection.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import LeavesFalling from "./LeavesFalling";

const metrics = [
  { label: "Years", end: 0, suffix: "+" },
  { label: "Clients", end: 0, suffix: " K+" },
  { label: "Files", end: 0, suffix: " K+" },
  { label: "Rating", end: 0, suffix: " Reviews" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="relative bg-gray-50 overflow-hidden py-20">
      {/* Falling leaves behind everything in this section */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <LeavesFalling />
      </div>

      {/* Subtle circle‑dot overlay pattern */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map(({ label, end, suffix }) => (
            <div key={label} className="text-center">
              <CountUp
                start={0}
                end={end}
                suffix={suffix}
                duration={2}
                className="text-4xl font-extrabold text-gray-800"
              />
              <p className="mt-2 text-lg text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
