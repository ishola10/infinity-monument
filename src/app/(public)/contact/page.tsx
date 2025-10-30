"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#fff] via-[#f9f7f5] to-[#f4f1ee] px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,180,0.25),transparent_70%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Contact <span className="text-[#d4af37]">Us</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you — whether you have a question, feedback, or
          simply want to say hello.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d4af37] outline-none transition-all resize-none"
              placeholder="Write your message..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#d4af37] text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-[#b9932f] transition-all"
          >
            Send Message
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            {/* <h3 className="text-2xl font-semibold text-[#C9A14A]">
                    INFINITY MONUMENT
                  </h3>
                  <p className="text-[#6F6B63] mt-3 text-sm leading-relaxed">
                    Preserving the brilliance of every star — forever.  
                    A digital and physical sanctuary for remembrance, legacy, and love.
                  </p> */}
            <p className="mt-4 text-sm text-[#8E8A7F]">
              272 Akin Adesola Street, Victoria Island, Lagos
              <br />
              <span className="text-[#C9A14A]">
                Legacy@infinitymonument.com
              </span>
              <br />
              +234 809 910 0000
            </p>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
