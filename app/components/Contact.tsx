"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

type SnackbarProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const Snackbar = ({ message, type, onClose }: SnackbarProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000); // auto-hide after 4s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}

      className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-lg text-white z-50 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [snackbar, setSnackbar] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Validation
    if (!name || !email || !message) {
      setSnackbar({ message: "Please fill in all fields", type: "error" });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSnackbar({ message: "Please enter a valid email", type: "error" });
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm("service_jtbw1vw", "template_8hlp4ii", form.current, "G9u2fC4fs677_WfQw")
      .then(() => {
        setSnackbar({ message: "Message sent successfully!", type: "success" });
        form.current?.reset();
      })
      .catch(() => {
        setSnackbar({ message: "Something went wrong!", type: "error" });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="bg-gray-100 relative pb-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-5"
        >
        
        Have a project in mind? Let’s discuss your idea
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          {["name", "email"].map((field) => (
  <motion.input
    key={field}
    type={field === "email" ? "email" : "text"}
    name={field}
    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
    disabled={isSending}
    whileFocus={{ scale: 1.02 }}
    className="
      p-3
      border border-gray-300
      rounded-md
      focus:outline-none
      focus:ring-1 focus:ring-gray-400
      transition
    "
    required
  />
))}

<motion.textarea
  name="message"
  placeholder="Your Message"
  rows={5}
  disabled={isSending}
  whileFocus={{ scale: 1.02 }}
  className="
    p-3
    border border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-1 focus:ring-gray-400
    transition
  "
  required
/>


          <motion.button
            type="submit"
            disabled={isSending}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded text-white ${
              isSending ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-black"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      {/* Snackbar */}
      <AnimatePresence>
        {snackbar && (
          <Snackbar
            message={snackbar.message}
            type={snackbar.type}
            onClose={() => setSnackbar(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
