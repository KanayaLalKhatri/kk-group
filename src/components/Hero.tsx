"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { company } from "@/data/company";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="glow-bg relative flex min-h-screen items-center px-6 pt-24">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          variants={item}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted"
        >
          <Sparkles size={14} className="text-accent" /> Mobile App & Website Studio
        </motion.div>

        <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          We build <span className="gradient-text">mobile apps</span>
          <br className="hidden sm:block" /> & <span className="gradient-text">websites</span> that perform.
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {company.intro}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-accent px-7 py-3 font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="rounded-md border border-border px-7 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div variants={item} className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-x-12 gap-y-6 border-t border-border pt-10">
          {company.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
