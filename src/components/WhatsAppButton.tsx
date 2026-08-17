"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/company";

const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg shadow-[#25D366]/30"
    >
      <FaWhatsapp size={26} />
      <span className="hidden text-sm sm:inline">Chat with us</span>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}
