import botanical from "@/assets/botanical-hero.jpg";
import room from "@/assets/therapy-room.jpg";
import { Calendar, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
      <img
        src={botanical}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-primary">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Now Welcoming Clients
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary">
            <span className="font-script text-gold text-6xl sm:text-7xl lg:text-8xl block leading-none">
              We Are Now Open
            </span>
            <span className="block mt-3">A space to talk, heal &amp; grow.</span>
          </h1>

          <p className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed">
            A safe, confidential and non-judgmental space where you can openly share
            your feelings and rediscover balance, calm, and clarity.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/book-appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium shadow-soft hover:bg-gold hover:text-primary transition-all hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book a Session
            </Link>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-primary/20 px-7 py-3.5 font-medium text-primary hover:bg-card transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-serif text-2xl text-primary">100%</div>
              Confidential
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-primary">1:1</div>
              Personalized
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-primary">Care</div>
              with Compassion
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-6 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative rounded-[2rem] overflow-hidden shadow-lift border border-card">
            <img
              src={room}
              alt="Warm, calming therapy room interior"
              width={1024}
              height={1024}
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-background/85 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-script text-xl">
                ♥
              </span>
              <div>
                <p className="text-sm font-medium text-primary">You are not alone.</p>
                <p className="text-xs text-muted-foreground">
                  Healing begins with one conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
