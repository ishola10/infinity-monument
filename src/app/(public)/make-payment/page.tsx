"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProgressSteps from "./components/ProgressSteps";
import Step1BillingInfo from "./components/Step1BillingInfo";
import Step2PaymentDetails from "./components/Step2PaymentDetails";
import Step3Confirmation from "./components/Step3Confirmation";
import { useRouter } from "next/navigation";

const CreatePaymentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleDataUpdate = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handlePayment = () => {
    router.push("/vaults");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-3xl mb-10 flex items-center justify-between">
        <button
          onClick={goBack}
          disabled={currentStep === 1}
          className="flex items-center gap-2 text-gray-600 hover:text-[#2E6458] transition disabled:opacity-40"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Vault
        </button>
        <h1 className="text-lg font-medium text-[#1C1B18]">Payment Flow</h1>
      </div>

      <ProgressSteps currentStep={currentStep} />

      <div className="w-full max-w-3xl">
        {currentStep === 1 && (
          <Step1BillingInfo
            onNext={goNext}
            onUpdate={handleDataUpdate}
            defaultValue={formData}
          />
        )}
        {currentStep === 2 && (
          <Step2PaymentDetails
            onNext={goNext}
            onBack={goBack}
            onUpdate={handleDataUpdate}
            defaultValue={formData}
          />
        )}
        {currentStep === 3 && (
          <Step3Confirmation
            data={formData}
            onBack={goBack}
            onPay={handlePayment}
          />
        )}
      </div>
    </div>
  );
};

export default CreatePaymentPage;
