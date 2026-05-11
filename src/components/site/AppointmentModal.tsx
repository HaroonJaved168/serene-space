import { useState, useEffect, useRef } from "react";
import { X, User, Phone, CalendarDays, MessageCircle, Send, CheckCircle } from "lucide-react";

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

interface Props {
  open: boolean;
  onClose: () => void;
}

export function AppointmentModal({ open, onClose }: Props) {
  // Use only a single state for success screen - Rule 3 & 4
  const [sent, setSent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // IMPORTANT: No document.body.style.overflow = "hidden" here - Rule 1

  // Reset success state when modal closes
  useEffect(() => {
    if (!open) {
      setSent(false);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Rule 2: Fully UNCONTROLLED inputs - Read values only on submit
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

    // Rule 3: No API calls, just open WhatsApp link
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }, 1200);
  };

  if (!open) return null;

  return (
    <>
      <div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose()}
        className="appointment-overlay"
        role="dialog"
        aria-modal="true"
      >
        <div className="appointment-card">
          <button onClick={onClose} className="appointment-close" aria-label="Close">
            <X className="h-5 w-5" />
          </button>

          {sent ? (
            <div className="appointment-success">
              <div className="appointment-success-icon">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-primary">WhatsApp is opening…</h3>
              <p className="mt-2 text-muted-foreground">Your details are pre-filled. Just hit <strong>Send</strong>!</p>
              <button
                onClick={onClose}
                className="mt-8 bg-primary text-white font-semibold py-4 px-6 rounded-2xl w-full hover:opacity-90 transition-opacity"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-primary">Book an Appointment</h2>
                <p className="text-muted-foreground mt-2">Fill in your details to schedule a session.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Rule 2: Uncontrolled Inputs (no value/onChange) */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      required
                      className="appointment-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="03xx xxxxxxx"
                      required
                      className="appointment-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Preferred Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                    <input
                      type="date"
                      name="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="appointment-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Mental Health Concern</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
                    <select
                      name="concern"
                      required
                      className="appointment-input appearance-none"
                    >
                      <option value="">Select your concern</option>
                      {CONCERNS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="submit" className="appointment-btn-wa w-full mt-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Book via WhatsApp</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        .appointment-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(250, 247, 242, 0.85);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto; /* Rule 5: Overlay scrolls */
        }

        .appointment-card {
          background: #FAF7F2;
          border: 1px solid oklch(0.88 0.02 82);
          border-radius: 2rem;
          padding: 3rem 2.25rem;
          width: 100%;
          max-width: 480px;
          position: relative;
          box-shadow: 0 10px 40px -10px rgba(27, 67, 50, 0.15);
          animation: modalScale 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: auto;
          margin-bottom: auto;
        }

        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .appointment-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--primary);
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        .appointment-close:hover { opacity: 1; }

        .appointment-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 3.25rem;
          background: white;
          border: 1.5px solid oklch(0.88 0.02 82);
          border-radius: 1.25rem;
          color: var(--primary);
          /* Rule 4: Font size minimum 16px to prevent iOS zoom */
          font-size: max(16px, 0.95rem);
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }

        .appointment-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(27, 67, 50, 0.08);
        }

        .appointment-btn-wa {
          background: #25D366;
          color: white;
          padding: 1.1rem;
          border-radius: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: transform 0.2s, background 0.2s;
          box-shadow: 0 8px 20px -6px rgba(37, 211, 102, 0.4);
          border: none;
          cursor: pointer;
        }

        .appointment-btn-wa:hover {
          background: #22c35e;
          transform: translateY(-2px);
        }

        .appointment-success {
          text-align: center;
          padding: 1rem 0;
        }

        .appointment-success-icon {
          width: 72px;
          height: 72px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .appointment-card {
            padding: 2.5rem 1.5rem;
            border-radius: 1.5rem;
          }
          .appointment-overlay {
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
