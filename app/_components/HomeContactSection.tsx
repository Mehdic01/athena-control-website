"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/lib/data/brands/athenacontrol";

// ─── Types & validation ───────────────────────────────────────────────────────
type SubmitStatus = "idle" | "loading" | "success" | "error";
type Fields = "name" | "email" | "subject" | "message";
type FieldErrors  = Partial<Record<Fields, string>>;
type TouchedState = Partial<Record<Fields, boolean>>;

function validateAll(v: { name: string; email: string; subject: string; message: string }): FieldErrors {
  const e: FieldErrors = {};
  if (!v.name.trim())    e.name    = "Full name is required.";
  else if (v.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

  if (!v.email.trim())   e.email   = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Enter a valid email address (e.g. name@company.com).";

  if (!v.subject.trim()) e.subject = "Subject is required.";
  else if (v.subject.trim().length < 5) e.subject = "Subject must be at least 5 characters.";

  if (!v.message.trim()) e.message = "Message is required.";
  else if (v.message.trim().length < 20)
    e.message = `At least 20 characters required (${v.message.trim().length}/20).`;

  return e;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomeContactSection() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status,      setStatus]      = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState("");
  const [errors,      setErrors]      = useState<FieldErrors>({});
  const [touched,     setTouched]     = useState<TouchedState>({});
  const [submitted,   setSubmitted]   = useState(false);

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

  const fieldError = (field: Fields): string | undefined =>
    (touched[field] || submitted) ? errors[field] : undefined;

  const errClass = (field: Fields) =>
    fieldError(field) ? "border-destructive focus-visible:ring-destructive/30" : "";

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setServerError("");

    const errs = validateAll({ name, email, subject, message });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, subject, message }),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName(""); setEmail(""); setSubject(""); setMessage("");
      setErrors({}); setTouched({}); setSubmitted(false);
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section className="flex justify-center items-center py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl w-full">
        <ContactCard
          title="Get in Touch"
          description="Have a question about our products or need a quote? Our engineering team will get back to you within one business day."
          contactInfo={[
            { icon: MailIcon,     label: "Email",    value: contactInfo.email,    href: `mailto:${contactInfo.email}` },
            { icon: PhoneIcon,    label: "Phone",    value: contactInfo.phone,    href: `tel:${contactInfo.phone}` },
            { icon: MapPinIcon,   label: "Address",  value: "Bayraklı, İzmir, Türkiye" },
            { icon: LinkedInIcon, label: "LinkedIn", value: "Athena Control",     href: contactInfo.linkedIn },
          ]}
        >
          {status === "success" ? (
            <div className="w-full p-4 text-center space-y-3">
              <p className="font-medium text-sm">Message sent successfully.</p>
              <p className="text-muted-foreground text-sm">
                We&apos;ll get back to you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="w-full space-y-4">
              {status === "error" && serverError && (
                <p className="text-xs text-destructive">{serverError}</p>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="hc-name">Name</Label>
                <Input
                  id="hc-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); revalidate("name", e.target.value, { name: e.target.value, email, subject, message }); }}
                  onBlur={() => handleBlur("name")}
                  className={errClass("name")}
                />
                {fieldError("name") && <p className="text-xs text-destructive -mt-1">{fieldError("name")}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="hc-email">Email</Label>
                <Input
                  id="hc-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); revalidate("email", e.target.value, { name, email: e.target.value, subject, message }); }}
                  onBlur={() => handleBlur("email")}
                  className={errClass("email")}
                />
                {fieldError("email") && <p className="text-xs text-destructive -mt-1">{fieldError("email")}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="hc-subject">Subject</Label>
                <Input
                  id="hc-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => { setSubject(e.target.value); revalidate("subject", e.target.value, { name, email, subject: e.target.value, message }); }}
                  onBlur={() => handleBlur("subject")}
                  className={errClass("subject")}
                />
                {fieldError("subject") && <p className="text-xs text-destructive -mt-1">{fieldError("subject")}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="hc-message">Message</Label>
                <Textarea
                  id="hc-message"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); revalidate("message", e.target.value, { name, email, subject, message: e.target.value }); }}
                  onBlur={() => handleBlur("message")}
                  className={errClass("message")}
                />
                {fieldError("message") && <p className="text-xs text-destructive -mt-1">{fieldError("message")}</p>}
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Submit"}
              </Button>
            </form>
          )}
        </ContactCard>
      </div>
    </section>
  );
}
