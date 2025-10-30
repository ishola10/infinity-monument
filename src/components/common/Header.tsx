"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    // { href: "/pricing", label: "Pricing" },
    { href: "/create-vault", label: "Create a Vault" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-[#FDFCF9]/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-full mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Infinity Monument Logo"
            width={110}
            height={50}
            className="w-12  md:w-16 h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[#1C1B18] text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition ${
                pathname === href
                  ? "text-[#C9A14A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#C9A14A] after:rounded-full"
                  : "hover:text-[#C9A14A]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className={`text-sm font-medium transition ${
              pathname === "/login"
                ? "text-[#C9A14A]"
                : "text-[#1C1B18] hover:text-[#C9A14A]"
            }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`text-sm font-medium px-4 py-1.5 rounded-full shadow transition ${
              pathname === "/signup"
                ? "bg-[#d4af4a] text-white"
                : "bg-[#C9A14A] text-white hover:bg-[#d4af4a]/90"
            }`}
          >
            Sign Up
          </Link>
        </div> */}

        <button
          className="md:hidden text-[#1C1B18]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-[#FDFCF9] z-40 shadow-lg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <Image className="w-12  md:w-16 h-auto" src="/icons/logo.png" alt="Logo" width={100} height={40} />
              <button onClick={toggleMenu}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-[#1C1B18]">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className={`text-base font-medium ${
                    pathname === href
                      ? "text-[#C9A14A]"
                      : "hover:text-[#C9A14A]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* <div className="mt-8 border-t border-[#E0DDD4] pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={toggleMenu}
                className={`text-sm font-medium ${
                  pathname === "/login"
                    ? "text-[#C9A14A]"
                    : "text-[#1C1B18] hover:text-[#C9A14A]"
                }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={toggleMenu}
                className={`text-sm font-medium px-4 py-2 rounded-full shadow transition w-fit ${
                  pathname === "/signup"
                    ? "bg-[#d4af4a] text-white"
                    : "bg-[#C9A14A] text-white hover:bg-[#d4af4a]/90"
                }`}
              >
                Sign Up
              </Link>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
