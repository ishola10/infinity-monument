"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValue: any;
}

const Step2PaymentDetails: React.FC<Props> = ({ onNext, onBack, onUpdate, defaultValue }) => {
  const [form, setForm] = useState(defaultValue);

  useEffect(() => {
    onUpdate(form);
  }, [form, onUpdate]);

  const isValid = form.cardNumber && form.expiry && form.cvv;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Payment Details</h2>
      <p className="text-gray-600 mb-8">Enter your card information to proceed.</p>

      <div className="space-y-6 mb-10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
            value={form.cardNumber || ""}
            onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
              value={form.expiry || ""}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
            <input
              type="password"
              placeholder="123"
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
              value={form.cvv || ""}
              onChange={(e) => setForm({ ...form, cvv: e.target.value })}
            />
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className={`w-full py-3 rounded-lg font-medium transition ${
          isValid
            ? "bg-[#2E6458] text-white hover:bg-[#245347]"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

      <div className="mt-4 text-center">
        <button onClick={onBack} className="text-sm text-[#2E6458] hover:underline">
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default Step2PaymentDetails;
