"use client";
import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValue: string;
}

const Step3Tribute: React.FC<Props> = ({ onNext, onBack, onUpdate, defaultValue }) => {
  const [tribute, setTribute] = useState(defaultValue || "");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => {
    onUpdate({ tribute });
  }, [tribute, onUpdate]);

  const tributeTemplates = [
    "Sister to Sister",
    "Friend to Friend",
    "Parent to Child",
    "Child to Parent",
    "Spouse to Spouse",
    "Colleague to Colleague",
    "Grandchild to Grandparent",
    "Mentor to Student",
  ];

  const handleTemplateClick = (template: string) => {
    setSelectedTemplate(template);
    setTribute(
      `A heartfelt ${template.toLowerCase()} tribute — celebrating love, memories, and the lasting impact of a beautiful soul.`
    );
  };

  const handleAIGenerate = () => {
    setTribute(
      "Generated Tribute: A life filled with kindness, laughter, and timeless memories that continue to shine in our hearts."
    );
  };

  const isValid = tribute.trim().length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Write a Tribute</h2>
      <p className="text-gray-600 mb-8">
        Share a story, a memory, or a heartfelt message. This will be the main tribute on
        the vault page.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {tributeTemplates.map((template) => (
          <button
            key={template}
            onClick={() => handleTemplateClick(template)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedTemplate === template
                ? "bg-[#2E6458] text-white border-[#2E6458]"
                : "border-gray-300 text-gray-700 hover:border-[#2E6458]"
            }`}
          >
            {template}
          </button>
        ))}

        <button
          onClick={handleAIGenerate}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-[#2E6458] text-[#2E6458] hover:bg-[#2E6458]/10 transition"
        >
          <Sparkles className="w-4 h-4" /> Generate with AI
        </button>
      </div>

      <textarea
        placeholder="Share their story..."
        rows={6}
        className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458] resize-none mb-10"
        value={tribute}
        onChange={(e) => setTribute(e.target.value)}
      />

      <button
        onClick={onNext}
        disabled={!isValid}
        className={`w-full mt-6 py-3 rounded-lg font-medium transition ${
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

export default Step3Tribute;
