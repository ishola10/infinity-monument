"use client";
import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValue?: string;
}

const Step4Theme: React.FC<Props> = ({ onNext, onBack, onUpdate, defaultValue }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(defaultValue || null);

  useEffect(() => {
    if (selectedTheme) onUpdate({ theme: selectedTheme });
  }, [selectedTheme, onUpdate]);

  const themes = [
    { name: "Starry Night", color: "bg-gradient-to-r from-indigo-100 to-blue-200" },
    { name: "Golden Sunset", color: "bg-gradient-to-r from-amber-100 to-orange-200" },
    { name: "Serene Garden", color: "bg-gradient-to-r from-green-100 to-emerald-200" },
    { name: "Calm Ocean", color: "bg-gradient-to-r from-sky-100 to-cyan-200" },
    { name: "Majestic Mountains", color: "bg-gradient-to-r from-slate-100 to-gray-200" },
    { name: "Soft Rose", color: "bg-gradient-to-r from-rose-100 to-pink-200" },
  ];

  const isValid = !!selectedTheme;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Choose a Theme</h2>
      <p className="text-gray-600 mb-8">Select a visual theme for the vault’s background.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setSelectedTheme(theme.name)}
            className={`relative h-28 rounded-xl overflow-hidden border transition-all ${
              selectedTheme === theme.name
                ? "border-[#2E6458] ring-2 ring-[#2E6458]/40"
                : "border-gray-200 hover:border-[#2E6458]/50"
            }`}
          >
            <div className={`absolute inset-0 ${theme.color}`} />
            {selectedTheme === theme.name && (
              <div className="absolute top-2 right-2 bg-[#2E6458] text-white rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
            )}
            <span className="absolute bottom-3 left-4 text-gray-800 font-medium">
              {theme.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <button onClick={onBack} className="text-sm text-[#2E6458] hover:underline">
          &larr; Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-lg font-medium transition ${
            isValid
              ? "bg-[#2E6458] text-white hover:bg-[#245347]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step4Theme;
