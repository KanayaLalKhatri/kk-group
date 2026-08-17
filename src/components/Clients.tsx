import Reveal from "./Reveal";
import { clients } from "@/data/company";

export default function Clients() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
            Experience across brands like
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <span
                key={c}
                className="text-lg font-bold text-foreground/70 transition-colors hover:text-accent sm:text-xl"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
