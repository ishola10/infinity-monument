"use client";

import { motion } from "framer-motion";
import {
  Star,
  Infinity,
  Users2,
} from "lucide-react"; // icons

export default function About() {
  const stats = [
    {
      value: "6",
      label: "Total Galaxies",
      description: "Distinct celestial realms preserving memories across generations.",
      icon: Star,
    },
    {
      value: "1",
      label: "Stars Preserved",
      description: "Each star represents a soul, shining eternally in remembrance.",
      icon: Star,
    },
    {
      value: "999,999",
      label: "Stars Remaining",
      description: "Still countless spaces among the stars awaiting new stories.",
      icon: Infinity,
    },
    {
      value: "2+",
      label: "Families Served",
      description: "Families united in honoring legacies that transcend time.",
      icon: Users2,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#EAE3D5] to-[#FDFCF9] text-[#1C1B18] overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-6 text-[#1C1B18]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-[#C9A14A] font-bold">Infinity Monument</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-[#7A756B] text-base md:text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A timeless digital sanctuary celebrating love, memory, and legacy. 
          Each preserved star represents a cherished life, shining eternally in our celestial network of remembrance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md py-10 px-6 hover:shadow-lg transition flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <div className="mb-4 bg-[#C9A14A]/10 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-[#C9A14A]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#C9A14A] mb-2">
                  {item.value}
                </h3>
                <p className="text-[#1C1B18] font-medium mb-2">{item.label}</p>
                <p className="text-[#7A756B] text-sm leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
