"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
  onUpdate: (data: any) => void;
  defaultValue: any;
}

const Step1BillingInfo: React.FC<Props> = ({ onNext, onUpdate, defaultValue }) => {
  const [form, setForm] = useState(defaultValue);

  useEffect(() => {
    onUpdate(form);
  }, [form, onUpdate]);

  const isValid = form.fullName && form.email && form.phone && form.address;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Billing Information</h2>
      <p className="text-gray-600 mb-8">
        Enter your billing details. Your certificate and receipts will be sent to your registered email.
      </p>

      <div className="space-y-6 mb-10">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
            value={form.fullName || ""}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
            value={form.email || ""}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="+234 800 000 0000"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
            value={form.phone || ""}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
            value={form.address || ""}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
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
        Continue to Payment
      </button>
    </div>
  );
};

export default Step1BillingInfo;
