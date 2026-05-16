"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";
import { contactInfo } from "@/lib/data/brands/athenacontrol";
import ScrollFAQAccordion from "@/app/contact/_components/scroll-faqaccordion";
import { isValidEmailFormat } from "@/lib/utils/email";

// ─── Types ────────────────────────────────────────────────────────────────────
type SubmitStatus = "idle" | "loading" | "success" | "error";

type Fields = "name" | "email" | "subject" | "message";

type FieldErrors = Partial<Record<Fields, string>>;
type TouchedState = Partial<Record<Fields, boolean>>;

// ─── Validation ───────────────────────────────────────────────────────────────
function validateAll(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FieldErrors {
  const e: FieldErrors = {};

  if (!values.name.trim())
    e.name = "Full name is required.";
  else if (values.name.trim().length < 2)
    e.name = "Name must be at least 2 characters.";

  if (!values.email.trim())
    e.email = "Email address is required.";
  else if (!isValidEmailFormat(values.email))
    e.email = "Enter a valid email address (e.g. name@company.com).";

  if (!values.subject.trim())
    e.subject = "Subject is required.";
  else if (values.subject.trim().length < 5)
    e.subject = "Subject must be at least 5 characters.";

  if (!values.message.trim())
    e.message = "Message is required.";
  else if (values.message.trim().length < 20)
    e.message = `At least 20 characters required (${values.message.trim().length}/20).`;

  return e;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status,       setStatus]       = useState<SubmitStatus>("idle");
  const [serverError,  setServerError]  = useState("");
  const [errors,       setErrors]       = useState<FieldErrors>({});
  const [touched,      setTouched]      = useState<TouchedState>({});
  const [submitted,    setSubmitted]    = useState(false); // true after first submit attempt

  // Recompute errors after every keystroke if the field has been touched
  const revalidate = (
    field: Fields,
    value: string,
    rest: { name: string; email: string; subject: string; message: string }
  ) => {
    if (!touched[field] && !submitted) return;
    setErrors(validateAll({ ...rest, [field]: value }));
  };

  const handleBlur = (field: Fields) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateAll({ name, email, subject, message }));
  };

  // Show a field's error only if the user has touched it or a submit was attempted
  const fieldError = (field: Fields): string | undefined =>
    (touched[field] || submitted) ? errors[field] : undefined;

  // Border class: red when there's a visible error, white-dim otherwise
  const borderClass = (field: Fields) =>
    fieldError(field)
      ? "border-red-500/50 focus:border-red-500/60"
      : "border-white/10 focus:border-white/40";

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setServerError("");

    const errs = validateAll({ name, email, subject, message });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return; // stop — let the user fix field errors

    setStatus("loading");
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name, email,
          company: company || undefined,
          subject, message,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName(""); setEmail(""); setCompany("");
      setSubject(""); setMessage("");
      setErrors({}); setTouched({}); setSubmitted(false);
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  const contactMethods = [
    { icon: <Mail    className="w-7 h-7" />, contact: contactInfo.email,   href: `mailto:${contactInfo.email}` },
    { icon: <Phone   className="w-7 h-7" />, contact: contactInfo.phone,   href: `tel:${contactInfo.phone}` },
    { icon: <MapPin  className="w-7 h-7" />, contact: contactInfo.address, href: null },
    { icon: <LinkedinIcon className="w-7 h-7" />, contact: "Athena Control", href: contactInfo.linkedIn },
  ];

  return (
    <main id="contact-form">
      <div className="lg:flex w-full">

        {/* ── Left: background image + contact info ─────────────────────────── */}
        <div className="relative lg:flex-[3] overflow-hidden bg-[#111111] lg:sticky lg:top-0">
          <Image
            src="/images/contact/contact_page_bg.jpg"
            alt=""
            fill
            className="object-cover object-right"
            style={{ opacity: 0.2, filter: "brightness(0.9)", objectPosition: "right" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[90%] to-[#111111]" />
          <div className="relative z-10 px-8 pt-36 pb-16 lg:px-14 lg:pt-52 lg:pb-20">
            <div className="space-y-12 lg:space-y-16">
              <p className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tighter leading-tight">
                Let us know how we can help
              </p>
              <p className="text-white/70 text-base lg:text-lg xl:text-xl leading-relaxed max-w-md">
                We&apos;re here to support your industrial automation needs across Turkey.
                Fill out the form or reach us directly.
              </p>
              <ul className="flex flex-col gap-y-4">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-x-3">
                    <div className="flex-none text-white/50 mt-0.5">{item.icon}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-white/80 hover:text-white transition-colors duration-150${item.href.includes("linkedin") ? " mt-1.5" : ""}`}
                      >
                        {item.contact}
                      </a>
                    ) : (
                      <p className="whitespace-pre-line text-white/80 mt-0.5">{item.contact}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Right: form ───────────────────────────────────────────────────── */}
        <div className="lg:flex-[3] bg-[#111111] lg:min-h-screen">
          <div className="w-full px-8 pt-36 pb-16 lg:px-12 lg:pt-52 lg:pb-20">

            {/* ── Success banner ── */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-white/5 border border-white/10 text-white/80 rounded-lg text-sm">
                Thank you — we&apos;ll get back to you within one business day.
              </div>
            )}

            {/* ── Server-level error banner (only shown if no field errors remain) ── */}
            {status === "error" && serverError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Full name */}
              <div>
                <label className="text-4xl font-extrabold font-heading tracking-widest uppercase text-white/50">
                  Full name
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    revalidate("name", e.target.value, { name: e.target.value, email, subject, message });
                  }}
                  onBlur={() => handleBlur("name")}
                  className={`w-full mt-2 px-4 py-3 text-white bg-white/5 border ${borderClass("name")} outline-none rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20`}
                />
                {fieldError("name") && (
                  <p className="mt-1.5 text-xs text-red-400">{fieldError("name")}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-4xl font-extrabold font-heading tracking-widest uppercase text-white/50">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    revalidate("email", e.target.value, { name, email: e.target.value, subject, message });
                  }}
                  onBlur={() => handleBlur("email")}
                  className={`w-full mt-2 px-4 py-3 text-white bg-white/5 border ${borderClass("email")} outline-none rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20`}
                />
                {fieldError("email") && (
                  <p className="mt-1.5 text-xs text-red-400">{fieldError("email")}</p>
                )}
              </div>

              {/* Company + Subject */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-4xl font-extrabold font-heading tracking-widest uppercase text-white/50">
                    Company
                  </label>
                  <input
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full mt-2 px-4 py-3 text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-4xl font-extrabold font-heading tracking-widest uppercase text-white/50">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      revalidate("subject", e.target.value, { name, email, subject: e.target.value, message });
                    }}
                    onBlur={() => handleBlur("subject")}
                    className={`w-full mt-2 px-4 py-3 text-white bg-white/5 border ${borderClass("subject")} outline-none rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20`}
                  />
                  {fieldError("subject") && (
                    <p className="mt-1.5 text-xs text-red-400">{fieldError("subject")}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <label className="text-4xl font-extrabold font-heading tracking-widest uppercase text-white/50">
                    Message
                  </label>
                  <span className={`text-xs tabular-nums transition-colors ${
                    message.trim().length >= 20
                      ? "text-white/30"
                      : message.trim().length > 0
                        ? "text-amber-400/70"
                        : "text-white/20"
                  }`}>
                    {message.trim().length}/20 min
                  </span>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    revalidate("message", e.target.value, { name, email, subject, message: e.target.value });
                  }}
                  onBlur={() => handleBlur("message")}
                  className={`w-full h-40 px-4 py-3 resize-none text-white bg-white/5 border ${borderClass("message")} outline-none rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20`}
                />
                {fieldError("message") && (
                  <p className="mt-1.5 text-xs text-red-400">{fieldError("message")}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-16 px-4 py-3 text-[#111111] font-heading text-3xl tracking-widest uppercase bg-white hover:bg-white/90 active:bg-white/80 rounded-lg transition-colors duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Submit"}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* ── FAQ section ───────────────────────────────────────────────────── */}
      <div className="border-t border-[#E0E0E0]">
        <ScrollFAQAccordion />
      </div>
    </main>
  );
}
