"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:6000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="iletisim" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info + form */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[var(--color-accent)]" />
              <span className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-[var(--color-accent)]">
                İletişim
              </span>
            </div>

            <h2
              className="font-[family-name:var(--font-playfair)] leading-[1.05] text-[var(--color-primary)]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              Bir kahve ısmarlamaya
              <br />
              <em className="text-[var(--color-accent)] not-italic">bekliyoruz.</em>
            </h2>

            <p className="mt-6 text-[var(--color-text-muted)] max-w-md">
              Sorularınız, özel gün istekleriniz ya da sadece bir selam için bize
              yazın. WhatsApp üzerinden genelde birkaç dakika içinde dönüyoruz.
            </p>

            <div className="mt-10 space-y-5">
              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Telefon"
              >
                <a href="tel:+905444900636" className="link-underline">
                  0544 490 0636
                </a>
              </InfoRow>

              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Adres"
              >
                <span>100. Yıl, Bağlar Cd. No:194, 06700 Çankaya / Ankara</span>
              </InfoRow>

              <InfoRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Çalışma Saatleri"
              >
                <span>Her gün · 08:00 – 23:30</span>
              </InfoRow>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=100.+Y%C4%B1l+Ba%C4%9Flar+Cd.+No%3A194+%C3%87ankaya+Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{
                border: "1px solid var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps&apos;te Aç
            </a>

            <div className="mt-14 pt-10 border-t border-[var(--color-line)]">
              {status === "success" ? (
                <div className="anim-scalein bg-white rounded-2xl p-10 text-center border border-[var(--color-line)]">
                  <div
                    className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-primary)] mb-2">
                    Mesajınız alındı
                  </h3>
                  <p className="text-[var(--color-text-muted)]">
                    En kısa sürede WhatsApp üzerinden size döneceğiz. Teşekkür ederiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-primary)] mb-2">
                    Bir mesaj bırakın
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input name="name" label="Ad Soyad" value={form.name} onChange={handleChange} required />
                    <Input name="email" label="E-posta" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <Input name="phone" label="Telefon" type="tel" value={form.phone} onChange={handleChange} required />

                  <label className="block">
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-2 block">
                      Mesaj
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      placeholder="Sizi dinliyoruz..."
                      className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all resize-none"
                    />
                  </label>

                  {status === "error" && (
                    <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm">
                      Mesajınız şu an iletilemedi. Lütfen birazdan tekrar deneyin veya bizi arayın.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Gönderiliyor
                      </>
                    ) : (
                      <>
                        Mesaj Gönder
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: stylized map */}
          <div className="reveal reveal-delay-2">
            <div className="relative lg:sticky lg:top-28">
              <div
                className="absolute -inset-4 rounded-3xl blur-xl opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
                }}
              />
              <div
                className="relative rounded-3xl overflow-hidden border-2"
                style={{
                  borderColor: "var(--color-accent)",
                  backgroundColor: "var(--color-primary-deep)",
                }}
              >
                <div
                  className="aspect-[4/5] relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(184,134,11,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.18) 1px, transparent 1px), radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.18), transparent 60%)",
                    backgroundSize: "40px 40px, 40px 40px, 100% 100%",
                  }}
                >
                  {/* Road lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 500" preserveAspectRatio="none">
                    <path d="M0 180 Q 120 200 220 160 T 400 220" stroke="#B8860B" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                    <path d="M80 0 Q 120 180 60 300 T 180 500" stroke="#B8860B" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M400 100 Q 280 200 340 320 T 200 500" stroke="#9CA38B" strokeWidth="1" fill="none" opacity="0.5" />
                  </svg>

                  {/* Compass */}
                  <div className="absolute top-6 right-6 text-[var(--color-accent-soft)] opacity-70">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="22" cy="22" r="20" />
                      <path d="M22 4 L26 22 L22 40 L18 22 Z" fill="currentColor" opacity="0.3" />
                      <text x="22" y="12" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif">N</text>
                    </svg>
                  </div>

                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full anim-pulse"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(184,134,11,0.6), transparent 70%)",
                      }}
                    />
                    <svg className="relative" width="56" height="56" viewBox="0 0 24 24" fill="#B8860B" stroke="#0F2419" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" fill="#0F2419" />
                    </svg>
                    <div className="mt-3 px-4 py-2 rounded-full bg-white/90 text-xs font-medium text-[var(--color-primary)] shadow-lg backdrop-blur-sm">
                      No.36
                    </div>
                  </div>
                </div>

                {/* Info bar */}
                <div className="relative bg-[var(--color-primary)] p-6 border-t-2" style={{ borderColor: "var(--color-accent)" }}>
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-accent-soft)] mb-2">
                    Konumumuz
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-white text-xl mb-1">
                    No.36 Cafe Restaurant
                  </div>
                  <div className="text-sm text-white/70 mb-5 leading-relaxed">
                    100. Yıl, Bağlar Cd. No:194
                    <br />
                    06700 Çankaya / Ankara
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=100.+Y%C4%B1l+Ba%C4%9Flar+Cd.+No%3A194+%C3%87ankaya+Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-accent-soft)] link-underline text-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-primary)",
        }}
      >
        {icon}
      </span>
      <div>
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-1">
          {label}
        </div>
        <div className="text-[var(--color-text)]">{children}</div>
      </div>
    </div>
  );
}

function Input({
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-2 block">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
      />
    </label>
  );
}
