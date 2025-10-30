// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sora } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOSInitializer from "@/components/common/AOSInitializer";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Infinity Monument",
  description: "A timeless digital sanctuary celebrating love, memory, and legacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${sora.variable} ${figtree.variable}`}>
        <AOSInitializer />
        <Header />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
