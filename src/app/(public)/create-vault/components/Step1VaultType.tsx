"use client";
import React, { useState, useEffect } from "react";
import { Star, Sparkles } from "lucide-react";

interface Props {
  onNext: () => void;
  onUpdate: (data: any) => void;
  defaultValue?: string;
}

const Step1VaultType: React.FC<Props> = ({ onNext, onUpdate, defaultValue }) => {
  const [selectedVault, setSelectedVault] = useState<string | null>(defaultValue || null);

  useEffect(() => {
    if (selectedVault) onUpdate({ vaultType: selectedVault });
  }, [selectedVault, onUpdate]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Choose Your Memorial Type</h2>
      <p className="text-gray-600 mb-10">
        Select the type of vault you wish to create. You can always upgrade later.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => setSelectedVault("digital")}
          className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
            selectedVault === "digital"
              ? "border-[#2E6458] bg-[#2E6458]/5"
              : "border-gray-200 hover:border-[#2E6458]/50"
          }`}
        >
          <Star
            className={`w-8 h-8 mx-auto mb-3 ${
              selectedVault === "digital" ? "text-[#2E6458]" : "text-gray-400"
            }`}
          />
          <h3 className="text-lg font-semibold mb-2 text-[#1C1B18]">Digital Vault</h3>
          <p className="text-gray-600 text-sm">
            A secure, timeless digital space for memories and tributes.
          </p>
        </div>

        <div
          onClick={() => setSelectedVault("hybrid")}
          className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
            selectedVault === "hybrid"
              ? "border-[#C9A14A] bg-[#C9A14A]/5"
              : "border-gray-200 hover:border-[#C9A14A]/50"
          }`}
        >
          <Sparkles
            className={`w-8 h-8 mx-auto mb-3 ${
              selectedVault === "hybrid" ? "text-[#C9A14A]" : "text-gray-400"
            }`}
          />
          <h3 className="text-lg font-semibold mb-2 text-[#1C1B18]">
            Digital + Physical Vault
          </h3>
          <p className="text-gray-600 text-sm">
            A physical monument linked to a rich digital experience.
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!selectedVault}
        className={`w-full mt-10 py-3 rounded-lg font-medium transition ${
          selectedVault
            ? "bg-[#2E6458] text-white hover:bg-[#245347]"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default Step1VaultType;
