"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdate: (data: any) => void;
  defaultValue: any;
}

const Step2BasicInfo: React.FC<Props> = ({ onNext, onBack, onUpdate, defaultValue }) => {
  const [form, setForm] = useState(defaultValue);

  useEffect(() => {
    onUpdate(form);
  }, [form, onUpdate]);

  const isValid =
    form.firstName && form.lastName && form.birthYear && form.passingYear && form.gender;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#1C1B18] mb-2">Basic Information</h2>
      <p className="text-gray-600 mb-8">Enter the core details of the person being remembered.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {["firstName", "middleName", "lastName", "birthYear", "passingYear"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              placeholder={`Enter ${field}`}
              className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#2E6458]"
              value={form[field] || ""}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
          </div>
        ))}
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
        <div className="flex items-center gap-6">
          {["male", "female"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              {g[0].toUpperCase() + g.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, photo: e.target.files?.[0] ?? null })}
          className="border border-dashed border-gray-300 rounded-md px-4 py-3 text-sm text-gray-500 w-full focus:outline-none"
        />
      </div>

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

export default Step2BasicInfo;
