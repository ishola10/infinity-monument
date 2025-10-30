"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelineTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center text-[#7A756B]"
    >
      <FileText className="w-10 h-10 mb-3 text-green-700" />
      <h3 className="font-semibold text-lg text-[#1C1B18] mb-1">
        No Memories Yet
      </h3>
      <p className="text-sm mb-5">
        Start building a beautiful timeline of memories and tributes.
      </p>
      <Button className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2">
        <FileText className="w-4 h-4" /> Add First Memory
      </Button>
    </motion.div>
  );
}
