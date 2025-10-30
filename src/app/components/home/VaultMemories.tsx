"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/vaults/vault1.jpg", size: "col-span-2 row-span-2" },
  { src: "/vaults/vault2.jpg", size: "row-span-1" },
  { src: "/vaults/vault3.jpg", size: "row-span-2" },
  { src: "/vaults/vault4.jpg", size: "row-span-1" },
  { src: "/vaults/vault5.jpg", size: "col-span-2 row-span-1" },
  { src: "/vaults/vault6.jpg", size: "row-span-2" },
  { src: "/vaults/vault7.jpg", size: "row-span-1" },
  { src: "/vaults/vault8.jpg", size: "col-span-2 row-span-2" },
];

const VaultMemories = () => {
  return (
    <section className="py-20 bg-[#F9F7F3] text-[#1C1B18]">
      <div className="text-center mb-12 px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-4 text-[#C9A14A]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stars Remembered
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-[#6F6B63] text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A celestial collection of eternal legacies — each vault a story, each
          memory a light that continues to shine across time and generations.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4 px-6 md:px-12">
        {galleryImages.map((item, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-500 ${item.size}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Image
              src={item.src}
              alt={`Vault memory ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VaultMemories;
