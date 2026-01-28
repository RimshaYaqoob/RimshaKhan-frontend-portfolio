import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // LinkedIn & Email icons

const Footer = () => {
  return (
  <footer className="bg-gray-100 dark:bg-gray-900  py-2 border-t border-gray-300 dark:border-gray-700">
  <div className="container mx-auto px-4 flex flex-col items-center">
    <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">Let’s Connect!</p>
    <div className="flex space-x-6">
      <a
        href="https://www.linkedin.com/in/rimsha-khan-33785b21b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-black hover:text-black transition-transform transform hover:scale-110"
        aria-label="LinkedIn"
      >
        {/* Use a LinkedIn SVG or react-icons */}
        <FaLinkedin size={28} />
      </a>
      <a
        href="mailto:rimshakhan791@gmail.com"
        className="text-black dark:text-black-400 hover:text-black transition-transform transform hover:scale-110"
        aria-label="Email"
      >
        <FaEnvelope size={28} />
      </a>
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      &copy; 2023 Rimsha Khan Portfolio. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
