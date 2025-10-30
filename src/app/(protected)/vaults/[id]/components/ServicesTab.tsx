"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ServicesTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center text-[#7A756B]"
    >
      <Briefcase className="w-10 h-10 mb-3 text-green-700" />
      <h3 className="font-semibold text-lg text-[#1C1B18] mb-1">
        No Services Added
      </h3>
      <p className="text-sm">
        Add memorial or celebration services connected to this vault.
      </p>
    </motion.div>
  );
}
