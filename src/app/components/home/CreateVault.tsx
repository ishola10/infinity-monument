"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateVaultSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F8F6F1] to-[#EDE8DD] overflow-hidden text-[#1C1B18]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Create Your Own{" "}
            <span className="text-[#C9A14A]">Star Vault</span>
          </h2>
          <p className="text-[#6F6B63] text-base md:text-lg leading-relaxed mb-8 ">
            Honor a loved one with a lasting legacy that shines forever.
            Personalize your vault with stories, photos, and cherished memories —
            a digital sanctuary connected to a real celestial resting place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#C9A14A] hover:bg-[#D4B04A]/90 text-white px-8 py-3 rounded-full shadow-lg text-sm md:text-base">
              <Link href="/create-vault">Begin Creation</Link>
            </Button>
            <Link
              href="/explore"
              className="text-[#C9A14A] underline hover:opacity-80 transition text-sm md:text-base self-center"
            >
              Explore Existing Vaults →
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            src="/videos/galaxy-preview.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* fallback image in case video isn't available */}
          <Image
            src="/vaults/star-vault.jpg"
            alt="Create Star Vault"
            fill
            className="object-cover hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDE8DD]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default CreateVaultSection;
