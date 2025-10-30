"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Users, PenLine } from "lucide-react";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/bg.jpg"
        alt="Infinity Monument Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative z-10 px-6 text-[#1C1B18]">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Preserve a Legacy, Forever
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[#5B554C] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Infinity Monument redefines remembrance. Create a sacred digital space
          for your loved <br /> ones—a timeless vault of memories, stories, and
          love that transcends generations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white/70 rounded-xl shadow-md py-6 px-8 mx-auto w-fit backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="flex items-center gap-4 px-6  text-[#1C1B18]">
            <Eye className="w-6 h-6 text-[#2E6458] mb-1" />
            <div className="text-left">
              <p className="text-2xl md:text-4xl font-semibold">0</p>
              <p className="text-sm uppercase tracking-widest text-[#5B554C]">
                Visitors
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 border-l-4  text-[#1C1B18]">
            <Users className="w-6 h-6 text-[#2E6458] mb-1" />
            <div className="text-left">
              <p className="text-2xl md:text-4xl font-semibold">0</p>
              <p className="text-sm uppercase tracking-widest text-[#5B554C]">
                Infinity Families
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 border-l-4  text-[#1C1B18]">
            <PenLine className="w-6 h-6 text-[#2E6458] mb-1" />
            <div className="text-left">
              <p className="text-2xl md:text-4xl font-semibold">0</p>
              <p className="text-sm uppercase tracking-widest text-[#5B554C]">
                Tributes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
