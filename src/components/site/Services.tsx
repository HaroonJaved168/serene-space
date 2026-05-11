const services = [
  {
    title: "Psychological Assessments",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    description: "Professional diagnostic evaluations to understand cognitive, emotional, and behavioral patterns. We provide clear insights and recommendations to help you navigate your mental health journey with confidence."
  },
  {
    title: "Anxiety & Depression",
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=2070&auto=format&fit=crop",
    description: "Compassionate support for managing overwhelming thoughts and persistent low moods. Our therapeutic approach focuses on building resilience and finding light even in the most difficult seasons."
  },
  {
    title: "Relationship Counseling",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    description: "A safe space for couples and families to rebuild trust, improve communication, and strengthen bonds. Together, we work through conflicts to foster deeper understanding and lasting connection."
  },
  {
    title: "Emotional Disturbance & Sleep Difficulties",
    image: "https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=2070&auto=format&fit=crop",
    description: "Restoring balance to your emotional world and improving the quality of your rest. We help you address the root causes of restlessness and emotional turbulence for a more peaceful life."
  },
  {
    title: "Stress Management",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
    description: "Practical tools and mindfulness techniques to navigate life's pressures with ease. Learn to regulate your nervous system and regain a sense of calm in the midst of daily challenges."
  },
  {
    title: "Personality Disorders",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    description: "Long-term therapeutic support designed to help you understand yourself more deeply and develop healthy coping mechanisms. We focus on building stability, self-acceptance, and meaningful relationships."
  },
  {
    title: "Substance Abuse Disorder",
    image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?q=80&w=2070&auto=format&fit=crop",
    description: "Dedicated guidance on the path to recovery and healing from addiction. We provide a non-judgmental environment to help you regain control and build a fulfilling life of sobriety."
  },
  {
    title: "Trauma Therapy",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized care to process past experiences and find safety in the present. Our trauma-informed approach helps you heal deep wounds and reclaim your voice and sense of self."
  },
  {
    title: "Child Psychology",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop",
    description: "Gentle, play-based therapy tailored to help children navigate their emotions and development. We work closely with families to support your child's well-being and growth in a nurturing environment."
  },
  {
    title: "Autism Spectrum Disorder (ASD)",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop",
    description: "Neuro-affirming support focused on celebrating individual strengths while addressing specific challenges. We provide personalized strategies to enhance communication, social skills, and daily functioning."
  },
  {
    title: "ADHD",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    description: "Empowering individuals to harness their unique focus and manage executive functioning challenges. We offer practical organization skills and emotional support to help you thrive in all areas of life."
  },
  {
    title: "Intellectual Disability",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    description: "Comprehensive and compassionate care tailored to the unique needs of individuals with intellectual disabilities. Our focus is on fostering independence, dignity, and a high quality of life through dedicated support."
  }
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
          {services.map((service, i) => (
            <article
              key={service.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-10 bg-gold group-hover:w-20 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
