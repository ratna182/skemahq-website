"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  Clock,
  Download,
  Calendar,
  DollarSign,
} from "lucide-react";
import Container from "@/components/ui/container";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { contactFaqs } from "@/data/faqs";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Exhibition Booth",
    budget: "< 50 Juta IDR",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Send pre-formatted WhatsApp message for instant response option
    const text = `Halo Skema HQ,%0A%0ASaya ingin konsultasi project:%0A- Nama: ${encodeURIComponent(formData.name)}%0A- Perusahaan: ${encodeURIComponent(formData.company || "-")}%0A- Email: ${encodeURIComponent(formData.email)}%0A- Telepon: ${encodeURIComponent(formData.phone || "-")}%0A- Layanan: ${encodeURIComponent(formData.service)}%0A- Budget Range: ${encodeURIComponent(formData.budget)}%0A- Target Tanggal: ${encodeURIComponent(formData.eventDate || "Belum ditentukan")}%0A- Detail: ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/6287889527901?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-32 bg-white min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
              Get In Touch
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-7xl leading-[1.08]">
              Let&apos;s Build Your Next Brand Experience.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 text-xl leading-relaxed text-neutral-600 font-normal">
              Whether you need a custom exhibition booth, nationwide retail activation,
              or technical consultation, our production experts are ready to assist.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <FadeIn direction="right">
              <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/50 p-8 sm:p-10 space-y-8">
                <h2 className="text-2xl font-bold text-neutral-950">Contact Information</h2>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Headquarters & Workshop</p>
                      <p className="mt-1 text-neutral-600 leading-relaxed">
                        Jl. Sepakat V, RT.2/RW.1, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13870
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Email Inquiry</p>
                      <a href="mailto:firmanskema@gmail.com" className="mt-1 block text-neutral-600 hover:text-neutral-950 transition font-medium">
                        firmanskema@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Phone & WhatsApp</p>
                      <a href="https://wa.me/6287889527901" target="_blank" rel="noopener noreferrer" className="mt-1 block text-neutral-600 hover:text-neutral-950 transition font-medium">
                        +62 878-8952-7901
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Office Hours</p>
                      <p className="mt-1 text-neutral-600 leading-relaxed">
                        Senin – Jumat: 09.00 – 18.00 WIB<br />
                        Sabtu: 09.00 – 15.00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-6 border-t border-neutral-200/80 space-y-3">
                  <a
                    href="https://wa.me/6287889527901?text=Halo%20Skema%20HQ,%20saya%20ingin%20konsultasi%20mengenai%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-700 shadow-md"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>

                  <a
                    href="mailto:firmanskema@gmail.com?subject=Company%20Profile%20Request"
                    className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs font-bold text-neutral-808 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Request Company Credentials (PDF)</span>
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-neutral-200/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">Connect With Us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/skemahq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                      aria-label="Visit Skema HQ on Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com/company/skemahq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                      aria-label="Visit Skema HQ on LinkedIn"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left">
              <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-12 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-950">Inquiry Prepared!</h3>
                    <p className="mt-3 text-neutral-600 max-w-md mx-auto text-sm leading-relaxed">
                      Your project brief details have been compiled and sent via WhatsApp for instant communication with our technical team.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 transition"
                    >
                      Send Another Project Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-neutral-950">Send Us a Project Brief</h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+62 878-8952-7901"
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Brand Inc."
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Service Interested In
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition bg-white"
                        >
                          <option value="Exhibition Booth">Exhibition Booth Design & Build</option>
                          <option value="Event Activation">Event & Retail Activation</option>
                          <option value="Sales Promotion">Sales Promotion & POSM</option>
                          <option value="Creative Production">Creative Fabrication & Printing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1">
                          <DollarSign className="h-3 w-3 text-neutral-500" />
                          <span>Estimated Budget</span>
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition bg-white"
                        >
                          <option value="< 50 Juta IDR">&lt; Rp 50 Juta</option>
                          <option value="50 - 150 Juta IDR">Rp 50 - 150 Juta</option>
                          <option value="150 - 300 Juta IDR">Rp 150 - 300 Juta</option>
                          <option value="> 300 Juta IDR">&gt; Rp 300 Juta</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-neutral-500" />
                        <span>Target Event Date / Timeline</span>
                      </label>
                      <input
                        type="text"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        placeholder="e.g., September 2026 at ICE BSD"
                        className="w-full rounded-2xl border border-neutral-200 px-4 py-3.5 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Project Specifications & Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your booth dimensions, venue, design style, or target requirements..."
                        className="w-full rounded-2xl border border-neutral-200 p-4 text-sm outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 shadow-md active:scale-[0.99]"
                    >
                      <span>Submit & Chat via WhatsApp</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-28 border-t border-neutral-200/80 pt-20">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
                Location Map
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                Visit Our Office & Workshop
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Jl. Sepakat V, RT.2/RW.1, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13870
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-sm h-96 w-full">
              <iframe
                title="Skema HQ Office Location"
                src="https://maps.google.com/maps?q=Jl.%20Sepakat%20V,%20Cilangkap,%20Cipayung,%20Jakarta%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 transition duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </FadeIn>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 border-t border-neutral-200/80 pt-20 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 text-center">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 text-center">
              Everything You Need to Know
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-4">
            {contactFaqs.map((faq, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.05}>
                <div
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="cursor-pointer rounded-2xl border border-neutral-200/80 bg-neutral-50/40 p-6 transition duration-200 hover:border-neutral-400"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-bold text-neutral-950">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180 text-neutral-950" : ""
                      }`}
                    />
                  </div>
                  {openFaq === idx && (
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 pt-4 border-t border-neutral-200/60">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
