"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { company } from "@/data/company";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-background">
            KK
          </span>
          <span className="text-foreground">{company.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Start a Project
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen((o) => !o)} className="text-accent md:hidden" aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-accent" />
            <span className="block h-0.5 w-6 bg-accent" />
            <span className="block h-0.5 w-4 bg-accent" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border bg-background/95 px-6 py-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background"
            >
              Start a Project
            </a>
          </li>
        </ul>
      )}
    </motion.header>
  );
}
