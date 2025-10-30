"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3ED] text-[#1C1B18] py-14 px-6 md:px-16 border-t border-[#E5E1D6]">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#C9A14A]">
            INFINITY MONUMENT
          </h3>
          <p className="text-[#6F6B63] mt-3 text-sm leading-relaxed">
            Preserving the brilliance of every star — forever.  
            A digital and physical sanctuary for remembrance, legacy, and love.
          </p>
          <p className="mt-4 text-sm text-[#8E8A7F]">
            272 Akin Adesola Street, Victoria Island, Lagos  
            <br />
            <span className="text-[#C9A14A]">Legacy@infinitymonument.com</span>  
            <br />
            +234 809 910 0000
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-[#C9A14A] mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-[#6F6B63] text-sm">
            <li>
              <Link href="/" className="hover:text-[#C9A14A] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#C9A14A] transition">
                About
              </Link>
            </li>
            {/* <li>
              <Link href="/vaults" className="hover:text-[#C9A14A] transition">
                Star Vaults
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-[#C9A14A] transition">
                Explore Galaxy
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className="hover:text-[#C9A14A] transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 3: Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h4 className="text-lg font-semibold text-[#C9A14A] mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="p-2 rounded-full border border-[#D4C8A8] hover:bg-[#C9A14A] hover:text-white transition"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                className="p-2 rounded-full border border-[#D4C8A8] hover:bg-[#C9A14A] hover:text-white transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 rounded-full border border-[#D4C8A8] hover:bg-[#C9A14A] hover:text-white transition"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-full border border-[#D4C8A8] hover:bg-[#C9A14A] hover:text-white transition"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <p className="text-xs text-[#8E8A7F] mt-8 md:mt-0">
            © {new Date().getFullYear()} Infinity Monument. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
