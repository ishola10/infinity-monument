"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-[#fdfcfb] to-[#f4f1ee] overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,180,0.4),transparent_70%)]"></div>

      {/* Optional decorative image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Image
          src="/images/stars-bg.png"
          alt="Cosmic background"
          fill
          className="object-cover"
        />
      </div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          About <span className="text-[#d4af37]">Infinity Monument</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Preserving memories across galaxies — a place where every star holds a story,  
          and every vault connects us to those we cherish beyond time.
        </p>
      </motion.div>

      {/* Floating stars / subtle motion */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex gap-4"
      >
        <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-[#f8d57e] animate-pulse delay-200"></div>
        <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse delay-400"></div>
      </motion.div> */}
    </section>
  );
}
