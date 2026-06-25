"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  ShieldCheck,
  Cpu,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/company";

const icons: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Palette,
  ShieldCheck,
  Cpu,
  Wrench,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="What We Do" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Smartphone;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="project-card group flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                <Icon size={24} />
              </span>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs text-muted">
                    <span className="text-accent">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
