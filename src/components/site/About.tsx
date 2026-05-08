import { HeartHandshake, Target, Quote } from "lucide-react";

export function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center reveal">
          <span className="inline-grid place-items-center h-14 w-14 rounded-full bg-primary text-primary-foreground mx-auto shadow-soft">
            <HeartHandshake className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl text-primary">About Us</h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />
          <p className="mt-7 text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Mental Health Well-Being Clinic provides a safe, confidential and
            non-judgmental space where you can openly share your feelings and
            concerns. Our goal is to support your emotional and psychological
            well-being — guiding you gently towards balance, self-understanding,
            and lasting growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center reveal">
          <span className="inline-grid place-items-center h-14 w-14 rounded-full bg-primary text-primary-foreground mx-auto shadow-soft">
            <Target className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl text-primary">Our Mission</h2>
          <div className="mt-3 mx-auto h-px w-16 bg-gold" />

          <div className="relative mt-10 bg-background rounded-3xl shadow-card p-10 sm:p-14 border border-border">
            <Quote className="absolute -top-5 left-8 h-10 w-10 text-gold bg-background rounded-full p-2 shadow-soft" />
            <p className="font-serif text-2xl sm:text-3xl text-primary leading-snug italic">
              “To value mental health as much as physical health and provide
              support, understanding and care to every individual.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
