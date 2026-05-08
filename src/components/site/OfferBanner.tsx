import { Heart } from "lucide-react";

export function OfferBanner() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="reveal relative bg-gradient-to-br from-card to-background rounded-[2rem] border border-border shadow-card overflow-hidden p-10 sm:p-14 flex flex-col md:flex-row items-center gap-10">
          <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative shrink-0">
            <div className="h-44 w-44 rounded-full bg-primary text-primary-foreground grid place-items-center text-center p-5 shadow-lift border-4 border-gold">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
                  Opening Offer
                </div>
                <div className="font-serif text-lg leading-tight mt-2">
                  Special Discount on First Session!
                </div>
              </div>
            </div>
            <span className="absolute -inset-1 rounded-full border border-dashed border-gold/40 animate-[spin_30s_linear_infinite]" />
          </div>

          <div className="relative flex-1 text-center md:text-left">
            <p className="font-script text-5xl sm:text-6xl text-primary leading-none">
              You are not alone.
            </p>
            <p className="mt-4 text-foreground/75 max-w-lg mx-auto md:mx-0">
              Take the first gentle step toward feeling lighter, clearer and
              more in control. We'll walk it with you.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-gold">
              <Heart className="h-5 w-5 fill-gold" />
              <span className="text-sm tracking-wider uppercase">
                With care, always
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
