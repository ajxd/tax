// components/FaqSection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "What is e-Filing of income tax returns?",
    answer: `E-filing of Income-tax returns is the process of filing Income-tax online. As per the income tax department, income tax returns can be filed through the online method only. However, the super senior citizens filing ITR using Form 1 or Form 4 are allowed to use the offline or paper mode.

E-filing of Income‑tax returns can be done easily and quickly in the comfort of your home or office in just 4 minutes with Tax2win. Or you can simply visit the Income Tax e‑filing portal. You can learn both processes here.`,
  },
  {
    question: "Who should file an Income Tax Return?",
    answer: `Every Individual, including an NRI, must file an Income tax return where Gross Total Income exceeds the basic exemption limit. For old tax regimes, this basic exemption limit is ₹2.5 lakh and for new tax regime, this basic exemption limit is ₹3 lakh for the individual filing income tax return. Senior citizens (aged 60–79) and super senior citizens (80+) must file if gross income exceeds ₹3 lakh and ₹5 lakh respectively.

ITR filing is also required if, in a financial year:
• Deposited over ₹1 crore in current accounts.  
• Spent over ₹2 lakh on foreign travel.  
• Spent over ₹1 lakh on electricity.  
• Business turnover exceeds ₹60 lakh.  
• Professional receipts exceed ₹10 lakh.  
• TDS/TCS exceeds ₹25 000 (₹50 000 for seniors).  
• Savings account deposits exceed ₹50 lakh.`,
  },
  {
    question: "Where can I file an Income Tax Return in India?",
    answer: `Taxpayers can file their ITR via the Income Tax e‑filing portal: https://www.incometax.gov.in/iec/foportal/.  
You can also file with Tax2win’s e‑filing portal in under 4 minutes. Its user‑friendly interface and expert assistance make it quick and easy. The due date for FY 2024‑25 (AY 2025‑26) is 31 July 2025.`,
  },
  {
    question: "What if I miss the due date of filing the Income Tax Return?",
    answer: `If you miss the due date, you can file a belated return by 31 December of the assessment year (unless extended).  
A late fee under Section 234F applies, subject to conditions.`,
  },
  {
    question: "How to file an Income Tax Return online?",
    answer: `Step 1: Visit Tax2win and click “File ITR Now.”  
Step 2: Select your income source and continue.  
Step 3: Upload Form 16 (or skip if unavailable).  
Step 4: Enter financial year, PAN, Aadhaar, employment, deductions, and bank details.  
Step 5: Review your computation and click “File My ITR.”  

You can also engage our expert CAs to file for you. Tax2win’s eCA service ensures accurate returns, maximum deductions, and maximum refunds.`,
  },
  {
    question: "How to e-file ITR with Form 16?",
    answer: `Step 1: On Tax2win, click “File It Yourself” and upload Form 16.  
Step 2: The software auto‑fills Form 16 data.  
Step 3: Verify and edit if needed.  
Step 4: Click “FILE MY RETURN” and you’re done!`,
  },
  {
    question: "Can I e-file ITR without Form 16?",
    answer: `Yes. You can file using salary slips, Form 26AS, and AIS/TIS documents if Form 16 isn’t available.`,
  },
  {
    question: "What are the penalties for not filing Income Tax Return in India?",
    answer: `• Late filing fee up to ₹10 000 (₹5 000 if filed before 31 Dec).  
• Interest at 1% per month on outstanding tax from the due date.  
• Loss of carry‑forward losses and other benefits.  
• Potential prosecution under Section 276CC (fine/imprisonment).`,
  },
  {
    question: "What will be the next steps after e-filing of Income Tax Return?",
    answer: `1. Check your email for the ITR‑V acknowledgement.  
2. File a revised return only after verifying the original.  
3. Verify your return within 30 days via the e‑filing portal.  
4. Track your refund status; refunds typically arrive within a few days.`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-12 pb-24 bg-[#F1EFED]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          FAQ's on ITR
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === i ? (
                  <FiChevronUp className="text-2xl" />
                ) : (
                  <FiChevronDown className="text-2xl" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-700"
                  >
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
