import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { OfferBanner } from "@/components/site/OfferBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { AppointmentModal } from "@/components/site/AppointmentModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mental Health Well-Being Clinic — Talk, Heal & Grow" },
      {
        name: "description",
        content:
          "A safe, confidential and non-judgmental mental health clinic offering counseling, therapy and personal growth support. Now open — book your first session.",
      },
      { property: "og:title", content: "Mental Health Well-Being Clinic" },
      {
        property: "og:description",
        content:
          "A safe, confidential space to talk, heal and grow. Counseling for anxiety, depression, stress, trauma and more.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onBookClick={() => setIsModalOpen(true)} />
      <Hero onBookClick={() => setIsModalOpen(true)} />
      <About />
      <Services />
      <WhyUs />
      <OfferBanner />
      <Contact onBookClick={() => setIsModalOpen(true)} />
      <Footer />
      
      <AppointmentModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
