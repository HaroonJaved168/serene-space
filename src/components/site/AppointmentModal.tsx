import { useState, useEffect, useRef } from "react";
import { X, User, Phone, CalendarDays, MessageCircle, Send, CheckCircle } from "lucide-react";

// ─── Replace with the clinic's WhatsApp number (international format, no + or spaces) ───
const WHATSAPP_NUMBER = "923136349039";

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [concern, setConcern] = useState("");
  const [sent, setSent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) { setSent(false); setName(""); setPhone(""); setDate(""); setConcern(""); }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  if (!open) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose()}
        className="appointment-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Book an Appointment"
      >
        {/* ── Modal Card ── */}
        <div className="appointment-card">

          {/* Close button */}
          <button onClick={onClose} className="appointment-close" aria-label="Close">
            <X className="h-4 w-4" />
          </button>

          {/* ─── Success state ─── */}
          {sent ? (
            <div className="appointment-success">
              <div className="appointment-success-icon">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3>WhatsApp is Opening…</h3>
              <p>Your appointment details are pre-filled. Just hit <strong>Send</strong> in WhatsApp!</p>
              <button onClick={onClose} className="appointment-btn-primary" style={{ marginTop: "1.5rem" }}>
                Done
              </button>
            </div>
          ) : (
            <>
              {/* ─── Header ─── */}
              <div className="appointment-header">
                <div className="appointment-clinic-brand">
                  <span className="appointment-clinic-name">Mental Health</span>
                  <span className="appointment-clinic-sub">Well-Being Clinic</span>
                </div>
                <h2 className="appointment-title">Book Your Appointment</h2>
                <p className="appointment-sub">
                  Fill in your details and we'll open WhatsApp with your message ready to send.
                </p>
              </div>

              {/* ─── Form ─── */}
              <form onSubmit={handleSubmit} className="appointment-form">
                {/* Name */}
                <div className="appointment-field">
                  <label htmlFor="appt-name">Full Name</label>
                  <div className="appointment-input-wrap">
                    <User className="appointment-input-icon" />
                    <input
                      id="appt-name"
                      type="text"
                      placeholder="e.g. Ayesha Khan"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="appointment-field">
                  <label htmlFor="appt-phone">Phone Number</label>
                  <div className="appointment-input-wrap">
                    <Phone className="appointment-input-icon" />
                    <input
                      id="appt-phone"
                      type="tel"
                      placeholder="e.g. 0334-9219693"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="appointment-field">
                  <label htmlFor="appt-date">Preferred Date</label>
                  <div className="appointment-input-wrap">
                    <CalendarDays className="appointment-input-icon" />
                    <input
                      id="appt-date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Concern */}
                <div className="appointment-field">
                  <label htmlFor="appt-concern">Mental Health Concern</label>
                  <div className="appointment-input-wrap">
                    <MessageCircle className="appointment-input-icon" />
                    <select
                      id="appt-concern"
                      required
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                    >
                      <option value="">Select your concern…</option>
                      {CONCERNS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="appointment-btn-primary appointment-btn-wa">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <Send className="h-4 w-4" />
                  Send Appointment Request via WhatsApp
                </button>

                <p className="appointment-note">
                  🔒 Your information is private and only shared directly with the clinic via WhatsApp.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        .appointment-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: appt-fade-in 0.25s ease;
        }
        @keyframes appt-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .appointment-card {
          position: relative;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 1.75rem;
          padding: 2.25rem 2rem;
          width: 100%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 32px 80px rgba(0,0,0,0.35);
          animation: appt-slide-up 0.3s cubic-bezier(.22,1,.36,1);
        }
        @keyframes appt-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .appointment-close {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          background: var(--muted);
          border: none;
          cursor: pointer;
          display: grid;
          place-items: center;
          color: var(--foreground);
          transition: background 0.2s;
        }
        .appointment-close:hover { background: var(--border); }

        /* Header */
        .appointment-header { text-align: center; margin-bottom: 1.6rem; }
        .appointment-clinic-brand {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }
        .appointment-clinic-name {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.1;
          letter-spacing: 0.01em;
        }
        .appointment-clinic-sub {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold, #b8963e);
          margin-top: 0.15rem;
        }
        .appointment-title {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.65rem;
          color: var(--primary);
          margin: 0 0 0.45rem;
          line-height: 1.15;
        }
        .appointment-sub {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          line-height: 1.55;
          max-width: 340px;
          margin: 0 auto;
        }

        /* Form */
        .appointment-form { display: flex; flex-direction: column; gap: 1rem; }
        .appointment-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .appointment-field label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .appointment-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .appointment-input-icon {
          position: absolute;
          left: 0.95rem;
          height: 1rem;
          width: 1rem;
          color: var(--primary);
          pointer-events: none;
          opacity: 0.7;
        }
        .appointment-input-wrap input,
        .appointment-input-wrap select {
          width: 100%;
          padding: 0.75rem 0.9rem 0.75rem 2.6rem;
          border-radius: 0.85rem;
          border: 1.5px solid var(--border);
          background: var(--card);
          color: var(--foreground);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
        }
        .appointment-input-wrap input:focus,
        .appointment-input-wrap select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 15%, transparent);
        }

        /* CTA */
        .appointment-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          border: none;
          cursor: pointer;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.9rem 1.5rem;
          transition: transform 0.2s, filter 0.2s;
        }
        .appointment-btn-primary:hover { transform: translateY(-2px); filter: brightness(1.08); }

        .appointment-btn-wa {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #fff;
          box-shadow: 0 6px 24px rgba(37,211,102,0.35);
          margin-top: 0.4rem;
        }

        .appointment-note {
          text-align: center;
          font-size: 0.75rem;
          color: var(--muted-foreground);
          line-height: 1.5;
          margin-top: 0.25rem;
        }

        /* Success */
        .appointment-success {
          text-align: center;
          padding: 1.5rem 0;
        }
        .appointment-success-icon {
          display: inline-grid;
          place-items: center;
          height: 4.5rem;
          width: 4.5rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          margin: 0 auto 1.2rem;
          animation: appt-pop 0.4s cubic-bezier(.22,1,.36,1);
        }
        @keyframes appt-pop {
          from { transform: scale(0.5); opacity:0; }
          to   { transform: scale(1);   opacity:1; }
        }
        .appointment-success h3 {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 1.5rem;
          color: var(--primary);
          margin: 0 0 0.5rem;
        }
        .appointment-success p {
          color: var(--muted-foreground);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .appointment-success .appointment-btn-primary {
          background: var(--primary);
          color: var(--primary-foreground);
        }

        /* Scrollbar */
        .appointment-card::-webkit-scrollbar { width: 4px; }
        .appointment-card::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
      `}</style>
    </>
  );
}
