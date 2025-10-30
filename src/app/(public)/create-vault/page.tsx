"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProgressSteps from "../../../components/common/ProgressSteps";
import Step1VaultType from "./components/Step1VaultType";
import Step2BasicInfo from "./components/Step2BasicInfo";
import Step3Tribute from "./components/Step3Tribute";
import Step4Theme from "./components/Step4Theme";
import Step5Review from "./components/Step5Review";
import { useRouter } from "next/navigation";

const CreateVaultPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  // collected form data across steps
  const [formData, setFormData] = useState({
    vaultType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthYear: "",
    passingYear: "",
    gender: "",
    photo: null as File | null,
    tribute: "",
    theme: "",
    amount: 0,
  });

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleDataUpdate = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handlePayment = () => {
    router.push("/make-payment");
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
          Back
        </button>
        <h1 className="text-lg font-medium text-[#1C1B18]">Create Memorial Vault</h1>
      </div>

      <ProgressSteps currentStep={currentStep} />

      <div className="w-full max-w-3xl">
        {currentStep === 1 && (
          <Step1VaultType
            onNext={goNext}
            onUpdate={handleDataUpdate}
            defaultValue={formData.vaultType}
          />
        )}
        {currentStep === 2 && (
          <Step2BasicInfo
            onNext={goNext}
            onBack={goBack}
            onUpdate={handleDataUpdate}
            defaultValue={formData}
          />
        )}
        {currentStep === 3 && (
          <Step3Tribute
            onNext={goNext}
            onBack={goBack}
            onUpdate={handleDataUpdate}
            defaultValue={formData.tribute}
          />
        )}
        {currentStep === 4 && (
          <Step4Theme
            onNext={goNext}
            onBack={goBack}
            onUpdate={handleDataUpdate}
            defaultValue={formData.theme}
          />
        )}
        {currentStep === 5 && (
          <Step5Review
            data={{
              name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`,
              startYear: formData.birthYear,
              endYear: formData.passingYear,
              tribute: formData.tribute,
              vaultType: formData.vaultType,
              theme: formData.theme,
              amount:
                formData.vaultType === "hybrid"
                  ? 20000
                  : formData.vaultType === "digital"
                  ? 10000
                  : 0,
            }}
            onPayment={handlePayment}
            onBack={goBack}
          />
        )}
      </div>
    </div>
  );
};

export default CreateVaultPage;
