import { Check } from "lucide-react";

const points = [
  "Confidential & Safe Environment",
  "One-on-One Personalized Sessions",
  "Evidence-Based Therapy",
  "Compassionate & Professional Care",
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 bg-card/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary leading-tight">
            A trusted space, built on care &amp; integrity.
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            We bring warmth, expertise, and complete discretion to every session
            so you can focus on what matters most: you.
          </p>
        </div>

        <ul className="space-y-4 reveal">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 bg-background rounded-2xl p-5 border border-border shadow-soft hover:shadow-card transition-shadow"
            >
              <span className="mt-0.5 inline-grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground shrink-0">
                <Check className="h-5 w-5" />
              </span>
              <span className="font-serif text-xl text-primary">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
