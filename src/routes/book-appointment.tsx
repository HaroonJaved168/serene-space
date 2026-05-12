import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, CalendarDays, MessageCircle, CheckCircle, ArrowLeft, Leaf } from "lucide-react";

// Doctor's WhatsApp Number (international format, no + or spaces)
const WHATSAPP_NUMBER = "923349219693";

const CONCERNS = [
  "Psychological Assessments",
  "Anxiety & Depression",
  "Relationship Counseling",
  "Emotional Disturbance & Sleep Difficulties",
  "Stress Management",
  "Personality Disorders",
  "Substance Abuse Disorder",
  "Trauma Therapy",
  "Child Psychology",
  "Autism Spectrum Disorder (ASD)",
  "ADHD",
  "Intellectual Disability",
  "Other / Not Listed",
];

export const Route = createFileRoute("/book-appointment")({
  component: BookAppointment,
  head: () => ({
    meta: [
      { title: "Book Appointment — Mental Health Well-Being Clinic" },
      {
        name: "description",
        content: "Schedule your confidential mental health session via WhatsApp.",
      },
    ],
  }),
});

function BookAppointment() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const concern = formData.get("concern") as string;

    const msg = encodeURIComponent(
      `Hello, I would like to book an appointment.\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📅 *Preferred Date:* ${date}\n` +
      `🧠 *Concern:* ${concern}\n\n` +
      `Please let me know the available time slots. Thank you!`
    );

    setSent(true);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar for Form Page */}
      <nav className="h-20 flex items-center px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft group-hover:scale-105 transition-transform">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg leading-tight hidden sm:block">
            <span className="block text-primary font-semibold">Mental Health</span>
            <span className="block text-xs tracking-[0.25em] text-gold uppercase">
              Well-Being Clinic
            </span>
          </span>
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary/60 hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-card rounded-[2.5rem] border border-border shadow-card p-8 sm:p-12 relative overflow-hidden">
            {/* Success Overlay for Page */}
            {sent ? (
              <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#25D366]/20">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="font-serif text-3xl text-primary mb-4">Opening WhatsApp…</h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Your details are ready. Just hit <strong>Send</strong> in the chat!
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-2xl w-full hover:opacity-90 transition-opacity"
                >
                  Return Home
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h1 className="text-4xl font-serif text-primary">Book Your Session</h1>
                  <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
                    Start your journey towards mental well-being. Fill in your details below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30" />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. John Doe"
                        required
                        className="appointment-page-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="03xx xxxxxxx"
                        required
                        className="appointment-page-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2.5">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 ml-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30" />
                        <input
                          type="date"
                          name="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="appointment-page-input"
                          onFocus={(e) => e.target.showPicker?.()}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 ml-1">
                        Concern
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30 pointer-events-none" />
                        <select
                          name="concern"
                          required
                          className="appointment-page-input appearance-none pr-10 cursor-pointer"
                        >
                          <option value="">Select concern</option>
                          {CONCERNS.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l border-primary/10 pl-3">
                           <svg className="h-4 w-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                           </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="appointment-page-btn-wa w-full mt-6 group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 transition-transform group-hover:scale-110">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Confirm via WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <style>{`
        .appointment-page-input {
          width: 100%;
          padding: 1rem 1.25rem 1rem 3.5rem;
          background: white;
          border: 1.5px solid oklch(0.88 0.02 82);
          border-radius: 1.25rem;
          color: var(--primary);
          font-size: 16px;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .appointment-page-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(27, 67, 50, 0.08);
          transform: translateY(-1px);
        }

        .appointment-page-btn-wa {
          background: #25D366;
          color: white;
          padding: 1.25rem;
          border-radius: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 30px -6px rgba(37, 211, 102, 0.3);
          border: none;
          cursor: pointer;
        }

        .appointment-page-btn-wa:hover {
          background: #22c35e;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 40px -8px rgba(37, 211, 102, 0.4);
        }

        .appointment-page-btn-wa:active {
          transform: translateY(-1px) scale(0.98);
        }
      `}</style>
    </div>
  );
}
