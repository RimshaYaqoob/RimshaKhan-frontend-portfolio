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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Simplified Scroll Function
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    
    if (section) {
      setIsOpen(false); 
      setActiveSection(id); 

      // Mobile devices par smooth scroll trigger karne ka best tareeqa
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };





useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", 
    threshold: 0, 
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Sabhi sections ko observe karna shuru karein
  navItems.forEach((item) => {
    const sectionId = item.href.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) observer.observe(section);
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
    observer.disconnect();
  };
}, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center  justify-end md:justify-center">
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative px-3 py-1 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <motion.span 
                  layoutId="underline" 
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-black" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-xl overflow-hidden md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col items-center py-10 space-y-6">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xl font-medium transition-colors ${
                      isActive ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="mobileUnderline" 
                        className="h-[2px] bg-black w-full" 
                      />
                    )}
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