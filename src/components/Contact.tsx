import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { company } from "@/data/company";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="mb-3 font-mono text-sm text-accent">05. Let&apos;s Work Together</p>
        <h2 className="text-3xl font-bold sm:text-5xl">
          Have a project in mind? <span className="gradient-text">Let&apos;s build it.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
          Whether you need a mobile app, a website, or a complete digital product —
          KK Group is ready to help. Tell us about your idea and we&apos;ll get back to you.
        </p>

        <a
          href={`mailto:${company.email}`}
          className="mt-10 inline-block rounded-md bg-accent px-8 py-4 font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          Start a Project
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-accent">
            <Mail size={18} /> {company.email}
          </a>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-accent">
            <Phone size={18} /> {company.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={18} /> {company.location}
          </span>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href={company.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <FaGithub size={18} /> GitHub
          </a>
        </div>
      </Reveal>

      <footer className="mt-24 border-t border-border pt-8 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {company.name} · Mobile App & Website Studio
      </footer>
    </section>
  );
}
