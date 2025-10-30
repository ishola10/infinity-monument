"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Mic, Plus, ChevronLeft, Copy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TimelineTab from "./components/TimelineTab";
import HeirsTab from "./components/HeirsTab";
import DonationsTab from "./components/DonationsTab";
import ServicesTab from "./components/ServicesTab";

export default function VaultDashboard() {
  const [voiceText, setVoiceText] = useState("Thank you for sharing life with us.");
  const [voiceStyle, setVoiceStyle] = useState("Warm & Gentle");
  const tabs = ["Timeline", "Heirs", "Donations", "Services"];
  const [activeTab, setActiveTab] = useState("Timeline");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="min-h-screen bg-[#FDFCF9] text-[#1C1B18] pb-20 mt-20">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-b-3xl shadow-md"
      >
        <div className="max-w-6xl mx-auto px-6 py-10 relative">
          <Link
            href="/vaults"
            className="flex items-center text-white/80 hover:text-white text-sm mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Vaults
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <motion.div
              className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/vaults/cross-people.jpg"
                alt="Vault Icon"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  Digital + Physical Vault
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  INF-1760318587215-P4CDISVE8
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                Tobilade Ada Adams
              </h1>
              <p className="text-white/90 mb-2 text-lg">1978 — 2025</p>
              <p className="text-white/80 text-sm mb-4">
                Thank you for sharing life with us.
              </p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="inline-flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 2a10 10 0 1 1-9.95 9H12z" />
                  </svg>
                  4 visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* DETAILS SECTION */}
      <div className="max-w-6xl mx-auto mt-10 px-6 grid md:grid-cols-2 gap-6">
        {/* Physical Vault */}
        <motion.div
          className="bg-white rounded-2xl p-5 shadow-sm border"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-orange-500 w-5 h-5" />
            <h3 className="font-semibold">Physical Vault Location</h3>
          </div>
          <p className="text-sm text-[#7A756B] mb-3">
            Infinity One – Section Memorial Suite
          </p>
          <div className="rounded-lg overflow-hidden h-44 bg-gray-200">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.37,6.52,3.39,6.53"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>

        {/* Blockchain Certificate */}
        <motion.div
          className="bg-white rounded-2xl p-5 shadow-sm border"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-orange-500 w-5 h-5" />
            <h3 className="font-semibold">Blockchain Certificate</h3>
          </div>
          <p className="text-sm text-[#7A756B] mb-3">
            Tamper-proof registration on the Infinity Continuum.
          </p>
          <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[#7A756B]">CERTIFICATE HASH</span>
              <button onClick={() => handleCopy("0xb0836q23jp7")}>
                <Copy className="w-4 h-4 text-gray-500 hover:text-black" />
              </button>
            </div>
            <p className="font-mono text-sm">0xb0836q23jp7</p>

            <div className="flex justify-between items-center">
              <span className="text-[#7A756B]">VERIFICATION CODE</span>
              <button onClick={() => handleCopy("VER-1760318628630-SQI7BJ8HZ")}>
                <Copy className="w-4 h-4 text-gray-500 hover:text-black" />
              </button>
            </div>
            <p className="font-mono text-sm">VER-1760318628630-SQI7BJ8HZ</p>

            <p className="text-[#7A756B] mt-3">
              Timestamp:{" "}
              <span className="text-black font-medium">
                Oct 13, 2025, 2:23:48 AM
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* AI VOICE TRIBUTE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-10 px-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-4">
            <Mic className="text-green-600 w-5 h-5" />
            <h3 className="font-semibold">AI Voice Tribute Creator</h3>
          </div>
          <p className="text-sm text-[#7A756B] mb-4">
            Generate a professional narration script.
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-[#7A756B]">Tribute Text</label>
              <textarea
                value={voiceText}
                onChange={(e) => setVoiceText(e.target.value)}
                className="w-full border rounded-lg mt-1 p-2 text-sm focus:ring-2 focus:ring-green-500"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm text-[#7A756B]">Voice Style</label>
              <select
                value={voiceStyle}
                onChange={(e) => setVoiceStyle(e.target.value)}
                className="w-full border rounded-lg mt-1 p-2 text-sm"
              >
                <option>Warm & Gentle</option>
                <option>Calm & Soothing</option>
                <option>Formal & Elegant</option>
              </select>
            </div>

            <div className="flex items-start gap-2 text-sm text-[#7A756B]">
              <Mic className="w-4 h-4 mt-0.5" />
              <p>
                The AI will create a professional voice tribute script that can
                be recorded or used with text-to-speech services.
              </p>
            </div>

            <Button className="bg-green-700 hover:bg-green-800 text-white w-full md:w-auto mt-3">
              Generate Voice Tribute
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-sm border"
      >
        {/* Tab Navigation */}
        <div className="flex justify-between items-center border-b px-6 py-3">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "text-green-700"
                    : "text-[#7A756B] hover:text-black"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-700 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <Button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white">
            <Plus className="w-4 h-4" /> Add Memory
          </Button>
        </div>

        {/* Active Tab Content */}
        <div className="p-8 min-h-[280px]">
          {activeTab === "Timeline" && <TimelineTab />}
          {activeTab === "Heirs" && <HeirsTab />}
          {activeTab === "Donations" && <DonationsTab />}
          {activeTab === "Services" && <ServicesTab />}
        </div>
      </motion.div>
    </section>
  );
}
