"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function FeaturedVaults() {
  const vaults = [
    {
      name: "Amina Bello",
      image: "/vaults/amina.jpg",
      message:
        "A guiding light whose kindness shaped generations. Her Star glows forever within Galaxy VI.",
      starId: "Star #042103",
    },
    {
      name: "James Okonkwo",
      image: "/vaults/james.jpg",
      message:
        "An innovator, father, and dreamer. His Star represents a journey through love and legacy.",
      starId: "Star #009872",
    },
    {
      name: "Eleanor Grace",
      image: "/vaults/eleanor.jpg",
      message:
        "A lifetime of compassion and wisdom preserved in the Infinite Garden of Remembrance.",
      starId: "Star #017564",
    },
    {
      name: "Bola Adeyemi",
      image: "/vaults/bola.jpg",
      message:
        "Her laughter was a melody that still echoes across time. A brilliant soul among the stars.",
      starId: "Star #051922",
    },
    {
      name: "Lucas Rivera",
      image: "/vaults/lucas.jpg",
      message:
        "An explorer and creator. His energy now illuminates Infinity’s endless horizon.",
      starId: "Star #083120",
    },
    {
      name: "Sophia Zhang",
      image: "/vaults/sophia.jpg",
      message:
        "A lover of the skies who now lives among them, guiding her family through every sunrise.",
      starId: "Star #110094",
    },
  ];

  const [current, setCurrent] = useState(0);
  const cardsPerPage = 4;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % vaults.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + vaults.length) % vaults.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FDFCF9] to-[#EAE3D5] text-[#1C1B18] overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 justify-between w-auto items-center mb-16">
          <motion.div
            className="md:w-11/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#C9A14A] mb-2">
              Featured Legacy
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#1C1B18]">
              <span className="text-[#C9A14A] font-bold">Stars Preserved</span>{" "}
              Across Infinity
            </h2>
            <p className="text-[#7A756B] mt-4 text-base md:text-lg">
              Discover the brilliance of souls immortalized among Infinity’s
              constellations. Every Star Vault tells a story of love, memory,
              and legacy.
            </p>
          </motion.div>

          <motion.div
            className="md:w-11/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#7A756B] text-base md:text-lg leading-relaxed">
              Within our celestial archive lies the heritage of humanity —
              beautifully preserved in golden constellations. Explore the vaults
              of those who now shine forever in the digital cosmos.
            </p>
          </motion.div>
        </div>

        <div className="relative mb-20">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-[#C9A14A]/80 rounded-full p-3 shadow-lg transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#1C1B18]" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(current * 100) / cardsPerPage}%)`,
              }}
            >
              {vaults.map((vault, index) => (
                <div key={index} className="min-w-[25%] flex-shrink-0 px-3">
                  <div className="bg-white/80 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all">
                    <div className="relative w-full h-52 md:h-64">
                      <Image
                        src={vault.image}
                        alt={vault.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <div className="flex items-center gap-2 text-[#C9A14A] mb-1">
                        <Star className="w-4 h-4" />
                        <p className="text-xs font-medium">{vault.starId}</p>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-[#1C1B18]">
                        {vault.name}
                      </h3>
                      <p className="text-[#7A756B] text-sm leading-relaxed mb-3 line-clamp-3">
                        {vault.message}
                      </p>
                      <Link
                        href="/explore"
                        className="text-[#C9A14A] text-xs font-medium underline hover:opacity-80 transition"
                      >
                        View Star →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-[#C9A14A]/80 rounded-full p-3 shadow-lg transition"
          >
            <ChevronRight className="w-5 h-5 text-[#1C1B18]" />
          </button>
        </div>

        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[400px] object-cover"
          >
            <source src="/videos/infinity-preview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="mt-16 text-center">
          <Button className="bg-[#C9A14A] hover:bg-[#d4af4a]/90 text-white px-10 py-4 rounded-full shadow-lg text-sm md:text-base">
            <Link href="/explore">Explore the Full Galaxy</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
