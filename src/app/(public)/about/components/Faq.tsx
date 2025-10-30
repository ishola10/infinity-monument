"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Infinity Monument?",
    answer:
      "Infinity Monument is a digital-physical memorial platform where families can create eternal Star Vaults to honor and preserve the memories of their loved ones. Each Star represents a life remembered — both in the digital universe and at our physical Infinity Centre.",
  },
  {
    question: "What is a Star Vault?",
    answer:
      "A Star Vault is both a digital profile and a physical resting space. It can contain biographies, images, videos, letters, and even AI-generated conversations preserving a person’s legacy.",
  },
  {
    question: "How do I create a Star Vault?",
    answer:
      "Simply click 'Create a Memorial' from the menu or homepage, choose your vault type (Standard, Premium, or Founders’), and personalize your loved one’s memorial with stories, media, and family connections.",
  },
  {
    question: "Can I visit the physical Infinity Centre?",
    answer:
      "Yes. Each digital Star Vault is linked to a real vault located at our physical address — 272 Akin Adesola Street, Victoria Island. Families can visit and pay their respects on-site.",
  },
  {
    question: "Are the memories secure and permanent?",
    answer:
      "Absolutely. Every Star Vault is stored with blockchain-linked custodianship, ensuring the data and ownership remain immutable and accessible for generations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F3ED] py-20 px-6 md:px-16 text-[#1C1B18]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#7A756B]">
          Find answers to some of the most common questions about the Infinity
          experience and our memorial system.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#E0DDD4] rounded-xl bg-white/80 shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center text-left px-5 py-4 font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-[#C9A14A]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-[#7A756B]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
