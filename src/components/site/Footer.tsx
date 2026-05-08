export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 text-center reveal">
        <span className="font-serif text-7xl text-gold leading-none block">“</span>
        <p className="font-serif text-3xl sm:text-4xl leading-snug italic -mt-4">
          Taking care of your mental health is not a luxury, it's a necessity.
        </p>
        <span className="font-serif text-7xl text-gold leading-none block mt-2">”</span>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-[0.2em] uppercase text-primary-foreground/75">
          <p>Mental Health Matters</p>
          <p>Your Well-being, Our Priority</p>
          <p>© {new Date().getFullYear()} Well-Being Clinic</p>
        </div>
      </div>
    </footer>
  );
}
