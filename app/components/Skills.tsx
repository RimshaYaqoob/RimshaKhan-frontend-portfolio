"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E44D26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-12 scroll-mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          Skills 
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
