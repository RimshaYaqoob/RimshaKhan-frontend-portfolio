"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6  relative"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I’m{" "}
            <span className="text-black font-medium">Rimsha Khan</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Frontend Developer <br />
            <span className="text-black font-medium">
              React & Next.js Specialist
            </span>
          </motion.h2>

          <motion.p
            className="text-base text-gray-600 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
          I help startups and businesses build fast, responsive, and scalable web apps that convert users into customers
          </motion.p>

   {/* BUTTONS */}
<motion.div
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.7 }}
>
  {/* Primary Button */}


  <motion.a
  href="#projects"
  aria-label="View Projects section"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}


              className="px-4 py-2 rounded-full border-1 border-gold  font-medium
       hover:text-black focus:outline-none focus:ring-2 focus:ring-gold-dark
             transition-colors duration-300"


  >
  Hire Me
</motion.a>

</motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/pic.jpg"
              alt="Rimsha Khan"
              width={260}
              height={260}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-7 h-7 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
