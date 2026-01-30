"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
  const ProjectCard = ({
  title,
  description,
  role,
  figmaLink,
  githubLink,
  image,
  video,
  DemoLink,
}: {
  title: string;
  [key: string]: any;
}) => {

  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[480px] group"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-semibold tracking-tight mb-3 px-5 pt-5"
      >
        {title}
      </motion.h3>

      {/* Image */}
      {image && (
        <div className="px-5">
          <div className="h-[180px] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                title === "Real Estate App" ? "scale-[0.25]" : "scale-100"
              }`}
            />
          </div>
        </div>
      )}

      {/* Video Preview */}
      {title === "Remote Patient Monitoring (RPM)" && (
        <div
          className="px-5 mt-3 relative cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="w-full h-[160px] rounded-lg object-cover"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg text-white text-4xl opacity-0 group-hover:opacity-100 transition">
            ▶
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-5 mt-4 space-y-3 flex-grow">
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
        <p className="text-gray-500 text-xs leading-relaxed">
          {role}
        </p>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-5 mt-auto flex gap-3">
        {DemoLink && (
          <a
            href={DemoLink}
            target="_blank"
            className="flex-1 text-center py-2 text-sm font-bold bg-black text-white rounded-l-full rounded-r-md hover:bg-gold hover:text-black transition-all duration-300"
          >
            Demo
          </a>
        )}

        {title !== "Remote Patient Monitoring (RPM)" && figmaLink && (
          <a
            href={figmaLink}
            target="_blank"
            className="flex-1 text-center py-2 text-sm font-bold bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300"
          >
            Figma
          </a>
        )}

        {title !== "Remote Patient Monitoring (RPM)" && githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="flex-1 text-center py-2 text-sm font-bold border border-gray-300 rounded-r-full rounded-l-md hover:bg-gray-100 transition-all duration-300"
          >
            GitHub
          </a>
        )}
      </div>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] max-w-4xl">
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <video
              src={video}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-xl"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
