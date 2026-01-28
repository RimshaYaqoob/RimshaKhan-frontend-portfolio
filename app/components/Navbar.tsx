"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section (desktop scroll)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(
          navItems[i].href.replace("#", "")
        );
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const scrollToSection = (href: string) => {
  const id = href.replace("#", "");
  const section = document.getElementById(id);
  if (!section) return;

  setActiveSection(id);
  setIsOpen(false);
  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};


  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-1 text-sm font-medium text-gray-700"
                whileHover={{ y: -2 }}
              >
                {item.name}

                {/* Desktop underline */}
                <motion.span
                  animate={{
                    scaleX: activeSection === id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 bottom-0 h-[2px] w-full origin-left bg-black"
                />
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden absolute right-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="relative text-base font-medium text-gray-800"
                  >
                    {item.name}

                    {/* ✅ MOBILE ACTIVE BORDER */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-full bg-black transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
