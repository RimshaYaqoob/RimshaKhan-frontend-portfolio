"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-12 scroll-mt-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-4"
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600 font-medium">MaxRemind Company</p>
            </div>
            <span className="text-sm text-gray-500 mt-2 md:mt-0">
              December 2023 – January 2026
            </span>
          </div>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Developed and maintained responsive user interfaces using React, Next.js, and Tailwind CSS.</li>
            <li>• Resolved complex UI bugs and performance issues to improve application stability.</li>
            <li>• Integrated REST APIs and handled dynamic data rendering across multiple modules.</li>
            <li>• Worked closely with backend developers and designers to ensure pixel-perfect UI implementation.</li>
            <li>• Optimized components for speed, reusability, and scalability.</li>
          </ul>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/resume/Rimsha.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-3 text-white bg-black rounded-full hover:bg-black transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
