import {
  Brain,
  Wind,
  Sprout,
  Users,
  Sparkle,
} from "lucide-react";

const services = [
  { icon: Brain, label: "Anxiety & Depression Counseling" },
  { icon: Wind, label: "Stress Management" },
  { icon: Sprout, label: "Trauma & Emotional Healing" },
  { icon: Users, label: "Relationship & Personal Issues" },
  { icon: Sparkle, label: "Personal Growth & Self-Development" },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="inline-block rounded-full bg-primary text-primary-foreground px-7 py-2.5 text-sm tracking-[0.3em] uppercase shadow-soft">
            Our Services
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl text-primary">
            Compassionate Care, Tailored to You
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Every session is designed around your unique journey. Explore our
            supportive services below.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, label }, i) => (
            <article
              key={label}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500"
            >
              <span className="inline-grid place-items-center h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-soft group-hover:bg-gold group-hover:text-primary transition-colors">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-primary leading-snug">
                {label}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Gentle, evidence-based support to help you move forward with
                clarity and strength.
              </p>
              <div className="mt-6 h-px w-10 bg-gold group-hover:w-20 transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
