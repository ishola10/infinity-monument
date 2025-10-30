"use client";
import React from "react";

interface Props {
  data: {
    name: string;
    startYear: string;
    endYear: string;
    tribute: string;
    vaultType: string;
    theme: string;
    amount: number;
  };
  onPayment: () => void;
  onBack: () => void;
}

const Step5Review: React.FC<Props> = ({ data, onPayment, onBack }) => {
  // Map theme names to gradient background classes
  const themeGradients: Record<string, string> = {
    "Starry Night": "bg-gradient-to-r from-indigo-100 to-blue-200",
    "Golden Sunset": "bg-gradient-to-r from-amber-100 to-orange-200",
    "Serene Garden": "bg-gradient-to-r from-green-100 to-emerald-200",
    "Calm Ocean": "bg-gradient-to-r from-sky-100 to-cyan-200",
    "Majestic Mountains": "bg-gradient-to-r from-slate-100 to-gray-200",
    "Soft Rose": "bg-gradient-to-r from-rose-100 to-pink-200",
  };

  const gradientClass = themeGradients[data.theme] || "bg-gray-100";

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Review & Create</h2>
      <p className="text-gray-600 mb-8">
        This is a preview of your vault. Please review the details before proceeding to payment.
      </p>

      {/* Vault preview using gradient background */}
      <div className="border rounded-xl overflow-hidden mb-10">
        <div className={`relative text-[#1C1B18] p-10 ${gradientClass}`}>
          <p className="uppercase text-xs bg-white/40 px-3 py-1 rounded-full inline-block mb-3">
            {data.vaultType === "hybrid" ? "Hybrid Vault" : "Digital Vault"}
          </p>
          <h3 className="text-3xl font-bold mb-1">{data.name}</h3>
          <p className="text-lg opacity-80 mb-4">
            {data.startYear} — {data.endYear}
          </p>
          <p className="text-sm italic opacity-80 max-w-md">{data.tribute}</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-6">
        <h4 className="font-semibold text-lg mb-4">Order Summary</h4>
        <div className="flex items-center justify-between text-gray-700 mb-2">
          <span>Vault Type</span>
          <span className="capitalize">{data.vaultType} Vault</span>
        </div>
        <div className="flex items-center justify-between font-semibold text-[#1C1B18]">
          <span>Total Amount</span>
          <span>₦{data.amount.toLocaleString()}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <button
        onClick={onPayment}
        className="w-full mt-8 py-3 rounded-lg bg-[#C9A14A] text-white font-medium hover:bg-[#b58e3e] transition"
      >
        Proceed to Payment (₦{data.amount.toLocaleString()})
      </button>

      <div className="mt-4 text-center">
        <button onClick={onBack} className="text-sm text-[#2E6458] hover:underline">
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default Step5Review;
