"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  half?: boolean;
};

const fields: Field[] = [
  { id: "name",     label: "Full name",       type: "text",  placeholder: "Your full name",          required: true,  half: true },
  { id: "phone",    label: "Phone number",    type: "tel",   placeholder: "e.g. 0803 000 0000",      required: false, half: true },
  { id: "email",    label: "Email address",   type: "email", placeholder: "your@email.com",          required: true },
  { id: "subject",  label: "Subject",         type: "text",  placeholder: "What is this about?",     required: true },
  { id: "message",  label: "Message",         type: "textarea", placeholder: "Tell us what you'd like to know, what programme interests you or any other question.", required: true },
];

const programmes = [
  "Catering and Culinary",
  "Pastry and Baking",
  "Events and Catering",
  "Fashion Design",
  "Tailoring",
  "Garment Construction",
  "Millinery",
  "Hairdressing",
  "General enquiry",
];

/**
 * Static contact form — no server action wired yet.
 * TODO: Connect to an email service (Resend, Formspree, etc.) before launch.
 * Currently shows a success state on submit for UI demonstration.
 */
export function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({
    name: "", phone: "", email: "", subject: "", message: "", programme: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace this timeout with a real form submission (Resend / Formspree / API route)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-brand-50 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-700">
          <CheckCircle2 className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-[22px] font-bold tracking-tight text-ink-900">
          Message sent.
        </h3>
        <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.7] text-ink-600">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setValues({ name: "", phone: "", email: "", subject: "", message: "", programme: "" }); }}
          className="link-arrow mt-8 inline-flex"
        >
          Send another message
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name + Phone side by side */}
        {fields.filter((f) => f.half).map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-[13px] font-semibold text-ink-900 mb-2">
              {field.label}
              {field.required && <span className="ml-1 text-brand-700" aria-hidden="true">*</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </div>
        ))}

        {/* Email, Subject, Programme full width */}
        {fields.filter((f) => !f.half).map((field) => (
          <div key={field.id} className="sm:col-span-2">
            <label htmlFor={field.id} className="block text-[13px] font-semibold text-ink-900 mb-2">
              {field.label}
              {field.required && <span className="ml-1 text-brand-700" aria-hidden="true">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                value={values[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={values[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
              />
            )}
          </div>
        ))}

        {/* Programme of interest */}
        <div className="sm:col-span-2">
          <label htmlFor="programme" className="block text-[13px] font-semibold text-ink-900 mb-2">
            Programme of interest
          </label>
          <select
            id="programme"
            name="programme"
            value={values.programme}
            onChange={(e) => handleChange("programme", e.target.value)}
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink-900 transition-colors focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100 appearance-none"
          >
            <option value="">Select a programme (optional)</option>
            {programmes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
          <p className="mt-3 text-[13px] text-ink-400 text-center">
            We typically respond within one business day.
          </p>
        </div>
      </div>
    </form>
  );
}
