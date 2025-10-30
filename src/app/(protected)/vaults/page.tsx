"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const themes = [
  { name: "Starry Night", color: "bg-gradient-to-r from-indigo-100 to-blue-200" },
  { name: "Golden Sunset", color: "bg-gradient-to-r from-amber-100 to-orange-200" },
  { name: "Serene Garden", color: "bg-gradient-to-r from-green-100 to-emerald-200" },
  { name: "Calm Ocean", color: "bg-gradient-to-r from-sky-100 to-cyan-200" },
  { name: "Majestic Mountains", color: "bg-gradient-to-r from-slate-100 to-gray-200" },
  { name: "Soft Rose", color: "bg-gradient-to-r from-rose-100 to-pink-200" },
];

export default function VaultListPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#1C1B18] mb-10"
      >
        My Vaults
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((vault, index) => (
          <Link key={vault.name} href={`/vaults/${index + 1}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${vault.color} relative rounded-2xl shadow-sm border border-white/40 cursor-pointer overflow-hidden transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
              <div className="relative p-8 h-48 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-[#1C1B18]">
                  {vault.name}
                </h2>
                <p className="text-sm text-[#7A756B]">
                  View cherished memories and tributes
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
