"use client";
import React from "react";

interface Props {
  data: any;
  onBack: () => void;
  onPay: () => void;
}

const Step3Confirmation: React.FC<Props> = ({ data, onBack, onPay }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-4">Review & Confirm</h2>
      <p className="text-gray-600 mb-8">Please review your information before proceeding to payment.</p>

      <div className="space-y-3 mb-10">
        <p><strong>Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <hr className="my-4" />
        <p><strong>Card Number:</strong> **** **** **** {data.cardNumber?.slice(-4)}</p>
      </div>

      <button
        onClick={onPay}
        className="w-full py-3 bg-[#2E6458] text-white rounded-lg font-medium hover:bg-[#245347] transition"
      >
        Confirm & Pay
      </button>

      <div className="mt-4 text-center">
        <button onClick={onBack} className="text-sm text-[#2E6458] hover:underline">
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default Step3Confirmation;
