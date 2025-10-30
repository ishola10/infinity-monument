"use client";

import { motion } from "framer-motion";
import { Telescope, Star, PenTool, Flower2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Explore the Galaxy",
      description:
        "Step into the vast digital cosmos of remembrance. Navigate through a galaxy of 1 million Star Vaults — each one representing a life beautifully remembered. Discover families, heritage, and untold stories glowing across the celestial map.",
      icon: Telescope,
    },
    {
      title: "2. Claim a Star Vault",
      description:
        "Choose your Star — a sacred vault that exists both digitally and physically. Every purchase comes with a unique certificate of custodianship stored on the blockchain, ensuring legacy that stands the test of time.",
      icon: Star,
    },
    {
      title: "3. Personalize the Legacy",
      description:
        "Bring the story to life. Upload treasured photos, write letters, record voice notes, and even generate AI-powered life stories that echo through eternity. Every detail turns into light — a living memory within Infinity’s constellation.",
      icon: PenTool,
    },
    {
      title: "4. Visit & Engage",
      description:
        "Revisit your Star anytime — light a digital candle, send flowers, or visit our physical gardens to honor your loved ones. Through Infinity, remembrance becomes eternal, graceful, and deeply connected.",
      icon: Flower2,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-r from-[#F7F3EA] to-[#ECE5D7] text-[#1C1B18] relative overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-16">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            How It <span className="text-[#C9A14A] font-bold">Works</span>
          </h2>
          <p className="text-[#7A756B] text-base md:text-lg leading-relaxed mb-8">
            Every journey in Infinity begins with a single Star. <br /> 
            From discovery to preservation, here’s how families around the world <br />
            build legacies that transcend generations.
          </p>
          <Button className="bg-[#C9A14A] hover:bg-[#d4af4a]/90 text-white px-8 py-3 rounded-full shadow-lg text-sm md:text-base">
            <Link href="/create-vault">Begin Your Journey</Link>
          </Button>
        </motion.div>

        <motion.div
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-start gap-4"
              >
                <div className="bg-[#C9A14A]/10 p-4 rounded-full flex-shrink-0">
                  <Icon className="w-8 h-8 text-[#C9A14A]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#1C1B18]">
                    {step.title}
                  </h3>
                  <p className="text-[#7A756B] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
