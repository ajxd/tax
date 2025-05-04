// components/ServicesSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesSection() {
  const services = [
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

  return (
    <section
      id="services"
      className="pt-4 pb-24 bg-white"
      style={{
        background:
          "url('/patterns/diagonal-lines.svg') center/cover, #fff",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={svc.href} className="block group">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-md service-card">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-64 object-cover transition-transform service-card-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/0 to-green-600/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiArrowRight className="text-white text-3xl" />
                  </div>
                </div>
                <div className="mt-5 text-center px-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 max-h-0 overflow-hidden group-hover:max-h-20 transition-all">
                    {svc.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: perspective(600px) rotateX(4deg) rotateY(-4deg)
            scale(1.03);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
