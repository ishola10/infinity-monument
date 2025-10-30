"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";

const similarItems = [
  {
    id: 1,
    name: "Vanguard Combat Set",
    price: 95.0,
    rating: 4.9,
    reviews: 91,
    image: images.wear3,  
  },
  {
    id: 2,
    name: "Bravo Combat Trousers",
    price: 95.0,
    rating: 4.8,
    reviews: 91,
    image: images.weapon2,
  },
  {
    id: 3,
    name: "Ranger Assault Coat",
    price: 95.0,
    rating: 4.8,
    reviews: 91,
    image: images.wear2,
  },
  {
    id: 4,
    name: "DeltaRanger Tactical Vest",
    price: 95.0,
    rating: 4.9,
    reviews: 91,
    image: images.wear1,
  },
];

export default function SimilarProducts() {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
        Similar Items You Might Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {similarItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition"
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {item.name}
            </h3>
            <p className="text-orange-500 font-semibold text-sm mb-2">
              ₦{item.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
              <Star size={12} className="fill-orange-400 text-orange-400" />
              <span>{item.rating}</span>
              <span>({item.reviews})</span>
            </div>
            <Button
              variant="outline"
              className="w-full text-xs border-gray-300 hover:bg-orange-500 hover:text-white transition"
            >
              Add to Cart
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
