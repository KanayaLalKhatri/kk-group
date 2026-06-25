import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { process } from "@/data/company";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="How We Work" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-3xl font-bold gradient-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
