import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "@/data/company";

const stack = [
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "Next.js / React",
  "Clean Architecture",
  "TensorFlow Lite",
  "REST / GraphQL",
  "CI/CD",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04" title="About KK Group" />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 leading-relaxed text-muted">
            {company.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-md bg-accent/5 px-3 py-1.5 text-sm text-foreground ring-1 ring-inset ring-border"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {company.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5 text-center">
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
