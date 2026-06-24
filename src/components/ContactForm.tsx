import { useState, type FormEvent } from "react";
import { INQUIRY_TYPES, WEB3FORMS_ACCESS_KEY } from "../config/contact";
import { ToastContainer, useToast } from "./Toast";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full rounded-lg border border-border bg-elevated px-3.5 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-dim focus:border-accent/50 focus:ring-1 focus:ring-accent/30";

const errorClass = "border-red-400/60 focus:border-red-400/60 focus:ring-red-400/20";

export default function ContactForm() {
  const { toasts, showToast } = useToast();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormFields, boolean>> = {};
    if (!fields.name.trim()) next.name = true;
    if (!fields.email.trim()) next.email = true;
    if (!fields.subject) next.subject = true;
    if (!fields.message.trim()) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          botcheck: "",
          name: fields.name.trim(),
          email: fields.email.trim(),
          subject: `${fields.subject} - Portfolio Contact from ${fields.name.trim()}`,
          message: fields.message.trim(),
          from_name: "Portfolio Notification",
        }),
      });

      if (res.ok) {
        showToast("Message sent successfully! I'll get back to you soon.", "success");
        setSent(true);
      } else {
        showToast("Failed to send. Please try again or email me directly.", "error");
      }
    } catch {
      showToast(
        "Network error. Please check your connection or email me directly.",
        "error"
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <>
        <ToastContainer toasts={toasts} />
        <div className="tech-card flex flex-col items-center py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-2xl text-accent">
            ✓
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">Message sent!</h3>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer toasts={toasts} />
      <form onSubmit={handleSubmit} className="tech-card">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Send a message
        </p>

        {/* Honeypot - hidden from users, catches bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fname" className="font-mono text-[10px] uppercase tracking-widest text-dim">
              Name
            </label>
            <input
              id="fname"
              type="text"
              value={fields.name}
              onChange={(e) => update("name", e.target.value)}
              className={`mt-1.5 ${inputClass} ${errors.name ? errorClass : ""}`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="femail" className="font-mono text-[10px] uppercase tracking-widest text-dim">
              Email
            </label>
            <input
              id="femail"
              type="email"
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              className={`mt-1.5 ${inputClass} ${errors.email ? errorClass : ""}`}
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="fsubject" className="font-mono text-[10px] uppercase tracking-widest text-dim">
            Inquiry type
          </label>
          <select
            id="fsubject"
            value={fields.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={`mt-1.5 ${inputClass} ${errors.subject ? errorClass : ""}`}
          >
            <option value="">Select a topic…</option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="fmessage" className="font-mono text-[10px] uppercase tracking-widest text-dim">
            Message
          </label>
          <textarea
            id="fmessage"
            rows={5}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
            className={`mt-1.5 resize-y ${inputClass} ${errors.message ? errorClass : ""}`}
            placeholder="Tell me about your project, role, or collaboration idea…"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-dim">
            Replies typically within 24 hours.
          </p>
          <button
            type="submit"
            disabled={sending}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
    </>
  );
}
