import { MapPin, Phone, CalendarDays, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";

const items = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Gakhar Plaza, Simly Dam Road, Near Police Station Barakahu",
  },
  { icon: Phone, title: "Call", text: "0334-9219693" },
  { icon: CalendarDays, title: "Appointments", text: "By Appointment Only" },
  {
    icon: Lock,
    title: "Confidentiality",
    text: "Your privacy is our priority",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-primary">
            Ready when you are.
          </h2>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            Reach out to schedule your first confidential session.
          </p>
        </div>

        <div className="reveal mt-12 bg-card rounded-3xl border border-border shadow-card p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-background/70 border border-border hover:shadow-soft transition-shadow"
              >
                <span className="inline-grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold">
                    {title}
                  </p>
                  <p className="mt-1 text-foreground font-serif text-lg leading-snug">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium shadow-soft hover:bg-gold hover:text-primary transition-all hover:-translate-y-0.5"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
