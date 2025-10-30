"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleProducts } from "@/constants";
import SimilarProducts from "./components/SimilarProducts";
import { images } from "@/assets/images";
import Footer from "@/components/common/Footer";

export default function ProductDetailPage() {
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(37);

  const formattedName = decodeURIComponent(productName as string)
    .replace(/-/g, " ")
    .toLowerCase();

  const product = sampleProducts.find(
    (p) => p.name.toLowerCase() === formattedName
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div>
      <section className="w-full min-h-screen max-w-7xl mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <div className="relative w-full h-[350px] bg-white rounded-xl overflow-hidden shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border border-gray-200"
                >
                  <Image
                    src={img}
                    alt="thumbnail"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-2xl font-semibold mb-2 text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {product.description ||
                "High-quality tactical gear designed for durability and performance in the field."}
            </p>

            <div className="flex items-center gap-1 mb-3">
              <Star size={14} className="fill-orange-400 text-orange-400" />
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews})
              </span>
            </div>

            <p className="text-2xl font-bold text-gray-800 mb-2">
              ₦{product.price.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Bulk Supply & Government Contracts
            </p>

            <div className="mb-6">
              <span className="text-sm font-medium text-gray-700 block mb-2">
                Quantity
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-gray-700 hover:text-orange-500"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-gray-700 hover:text-orange-500"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p className="text-xs text-orange-600 font-medium">
                  Only {product.stock || 12} Items Left! Don’t miss it.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full"
              >
                Add to Cart
              </Button>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Truck size={18} className="text-orange-500" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <button className="text-orange-500 text-xs hover:underline">
                    Enter your Postal Code for Delivery Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SimilarProducts />
        </div>
      </section>

      <Footer />
    </div>
  );
}
