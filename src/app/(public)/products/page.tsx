"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ChevronDown, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/common/Footer";

import {
  categories,
  filterOptions,
  sortOptions,
  sampleProducts,
} from "@/constants";

export default function Products() {
  const [selectedFilters, setSelectedFilters] = useState(["Guns", "Bag Packs"]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Price");
  const [selectedSort, setSelectedSort] = useState("Most Popular");

  return (
    <div>
      <section className="w-full min-h-screen  px-4 md:px-12 py-10 bg-gray-50">
        <div className="text-sm text-gray-600 mb-6 px-5">
          <span className="text-orange-500">Home</span> / Products
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-1/5 w-full bg-white md:bg-transparent p-5 rounded-xl shadow-sm">
            <div className="relative mb-5">
              <Search
                size={16}
                className="absolute left-2.5 top-2.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search items..."
                className="pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#EB5017]"
              />
            </div>

            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm hover:text-[#EB5017] py-2 border-b"
                >
                  <input type="checkbox" className="accent-[#EB5017]" />
                  {cat}
                </label>
              ))}
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center border-y border-gray-200 py-2 relative">
              <div className="flex flex-wrap items-center gap-2 relative">
                <span className="text-sm text-gray-500">Filters:</span>
                <div className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="text-xs flex items-center gap-1 border-gray-300"
                  >
                    {selectedFilter} <ChevronDown size={12} />
                  </Button>

                  {filterOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md w-36 z-20">
                      {filterOptions.map((option) => (
                        <div
                          key={option}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-orange-50 ${
                            selectedFilter === option
                              ? "text-[#EB5017] font-medium flex items-center gap-1"
                              : "text-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedFilter(option);
                            setFilterOpen(false);
                          }}
                        >
                          {selectedFilter === option && <Check size={14} />}{" "}
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative flex items-center gap-2 text-sm text-gray-600">
                <span>Sort by:</span>
                <button
                  className="font-medium text-[#EB5017] flex items-center gap-1"
                  onClick={() => setSortOpen(!sortOpen)}
                >
                  {selectedSort} <ChevronDown size={14} />
                </button>

                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-md w-48 z-20">
                    {sortOptions.map((option) => (
                      <div
                        key={option}
                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-orange-50 ${
                          selectedSort === option
                            ? "text-[#EB5017] font-medium flex items-center gap-1"
                            : "text-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedSort(option);
                          setSortOpen(false);
                        }}
                      >
                        {selectedSort === option && <Check size={14} />}{" "}
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-gray-200 py-2 mb-4">
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map((filter) => (
                  <span
                    key={filter}
                    className="bg-orange-100 text-orange-600 px-3 py-1 text-xs rounded-full font-medium"
                  >
                    {filter} ✕
                  </span>
                ))}
              </div>

              <div className="text-gray-500 text-sm">
                Showing 1–15 of 200 results
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProducts.map((product) => {
                const slug = product.name.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    href={`/products/${encodeURIComponent(slug)}`}
                    key={product.id}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition cursor-pointer"
                    >
                      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#EB5017] font-semibold text-sm mb-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star
                          size={14}
                          className="fill-orange-400 text-orange-400"
                        />
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <button className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                        Add to Cart
                      </button>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
