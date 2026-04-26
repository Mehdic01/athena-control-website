"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";
import { contactInfo } from "@/lib/data/brands/athenacontrol";
import ScrollFAQAccordion from "@/app/contact/_components/scroll-faqaccordion";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const contactMethods = [
    {
      icon: <Mail className="w-7 h-7" />,
      contact: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <Phone className="w-7 h-7" />,
      contact: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      contact: contactInfo.address,
      href: null,
    },
    {
      icon: <LinkedinIcon className="w-7 h-7" />,
      contact: "Athena Control",
      href: contactInfo.linkedIn,
    },
  ];

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: company || undefined,
          subject,
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setSubject("");
      setMessage("");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <main id="contact-form">
      <div className="lg:flex w-full">

          {/* ── Left: background image + contact info ───────────────────── */}
          <div className="relative lg:flex-[3] overflow-hidden bg-[#111111] lg:sticky lg:top-0 lg:h-screen">
            {/* Background photo */}
            <Image
              src="/images/contact/contact_page_bg.jpg"
              alt=""
              fill
              className="object-cover object-right"
              style={{ opacity: 0.2, filter: "brightness(0.9)", objectPosition: "right"}}
              priority
            />
            {/* Soft right-edge fade — blends into the dark form panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[90%] to-[#111111]" />

            {/* Content — white text sits on top of the overlays */}
            <div className="relative z-10 px-8 pt-36 pb-16 lg:px-14 lg:pt-52 lg:pb-20">
              <div className="space-y-12 lg:space-y-16">
                <p className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tighter leading-tight">
                  Let us know how we can help
                </p>
                <p className="text-white/70 text-base lg:text-lg xl:text-xl leading-relaxed max-w-md">
                  We&apos;re here to support your
                  industrial automation needs across Turkey.
                  Fill out the form or reach us directly.
                </p>
                <ul className="flex flex-col gap-y-4">

                  {contactMethods.map((item, idx) => (
                    
                    <li key={idx} className="flex items-start gap-x-3">
                      <div className="flex-none text-white/50 mt-0.4">
                        {item.icon}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`text-white/80 text-md hover:text-white transition-colors duration-150${item.href?.includes("linkedin") ? " mt-1.5" : ""}`}
                        >
                          {item.contact}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-white/80 text-md mt-0.8">
                          {item.contact}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Right: form ──────────────────────────────────────────────── */}
          <div className="lg:flex-[3] bg-[#111111] lg:min-h-screen">
            <div className="w-full px-8 pt-36 pb-16 lg:px-12 lg:pt-52 lg:pb-20">



              {status === "success" && (
                <div className="mb-6 p-4 bg-white/5 border border-white/10 text-white/80 rounded-lg text-sm">
                  Thank you for your message. We&apos;ll get back to you within 24 business hours.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-4xl  font-extrabold font-heading tracking-widest uppercase text-white/50">Full name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full  mt-2 px-4 py-3 text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="text-4xl  font-extrabold font-heading tracking-widest uppercase text-white/50">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 px-4 py-3 text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-4xl  font-extrabold font-heading tracking-widest uppercase text-white/50">Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full mt-2 px-4 py-3 text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-4xl  font-extrabold font-heading tracking-widest uppercase text-white/50">Subject</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full mt-2 px-4 py-3 text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-sm transition-colors duration-150 placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-4xl  font-extrabold font-heading tracking-widest uppercase text-white/50">Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-60 mt-2 h-36 px-4 py-3 resize-none text-white bg-white/5 border border-white/10 outline-none focus:border-white/40 rounded-lg text-xl transition-colors duration-150 placeholder:text-white/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-16 px-4 py-3 text-[#111111] font-heading text-3xl tracking-widest uppercase bg-white hover:bg-white/90 active:bg-white rounded-lg transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Submit"}
                </button>
              </form>
            </div>
          </div>

      </div>

      {/* ── FAQ section ──────────────────────────────────────────────── */}
      <div className="border-t border-[#E0E0E0]">
        <ScrollFAQAccordion />
      </div>
    </main>
  );
}
