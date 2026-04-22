"use client";

import { useState } from "react";

const TIMES = ["12:00", "13:30", "15:00", "17:00", "18:30", "19:30", "20:30", "21:30"];
const PARTY = [2, 3, 4, 5, 6, 7, 8];

export default function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [party, setParty] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  return (
    <section
      id="rezervasyon"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-deep)" }}
    >
      {/* Ambient lighting */}
      <div
        className="absolute top-0 right-0 w-[40rem] h-[40rem] anim-drift pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,11,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40rem] h-[40rem] anim-drift-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(156,163,139,0.12), transparent 70%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[var(--color-accent)]" />
              <span className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-[var(--color-accent-soft)]">
                Rezervasyon
              </span>
            </div>

            <h2
              className="font-[family-name:var(--font-playfair)] leading-[1.05] text-white"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              Masanız hazır,
              <br />
              sizi <em className="text-[var(--color-accent)] not-italic">bekliyoruz.</em>
            </h2>

            <p className="mt-6 text-white/75 max-w-md">
              Hafta sonu akşamları için rezervasyonu önceden almanızı öneririz.
              Onayınızı WhatsApp üzerinden anında iletiyoruz. Yürüyerek gelenler
              de her zaman misafirimizdir.
            </p>

            <div className="mt-10 space-y-4">
              <Feature>Anlık WhatsApp onayı</Feature>
              <Feature>24 kişiye kadar grup rezervasyonu</Feature>
              <Feature>Özel gün & menü düzenlemeleri</Feature>
              <Feature>Dış mekân ve iç salon tercihi</Feature>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6 flex-wrap">
              <a
                href="tel:+905444900636"
                className="inline-flex items-center gap-2 text-white link-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
                </svg>
                0544 490 0636
              </a>
              <a
                href="https://wa.me/905444900636"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-accent-soft)] link-underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.1-.4-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                WhatsApp
              </a>
              <span className="text-[0.7rem] tracking-[0.22em] uppercase text-white/50">
                Her gün 08:00 – 23:30
              </span>
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-3xl opacity-60 blur-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent) 0%, transparent 60%)",
                }}
              />
              <div className="relative bg-[var(--color-bg)] rounded-3xl p-8 lg:p-12">
                {status === "success" ? (
                  <SuccessCard
                    onReset={() => {
                      setStatus("idle");
                      setName("");
                      setPhone("");
                      setNote("");
                    }}
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                      <div className="text-[0.68rem] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1.5">
                        Adım 1
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-primary)]">
                        Tarih ve saat seçin
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Tarih">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                        />
                      </Field>
                      <Field label="Kişi Sayısı">
                        <div className="flex gap-2 flex-wrap">
                          {PARTY.map((p) => (
                            <button
                              type="button"
                              key={p}
                              onClick={() => setParty(p)}
                              className={`w-11 h-11 rounded-full text-sm font-medium transition-all ${
                                party === p
                                  ? "bg-[var(--color-primary)] text-white scale-105 shadow-lg"
                                  : "bg-white border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-accent)]"
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </div>

                    <Field label="Saat">
                      <div className="flex gap-2 flex-wrap">
                        {TIMES.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTime(t)}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                              time === t
                                ? "bg-[var(--color-accent)] text-white shadow-lg"
                                : "bg-white border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-accent)]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </Field>

                    <div className="pt-4 border-t border-[var(--color-line)]">
                      <div className="text-[0.68rem] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1.5">
                        Adım 2
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--color-primary)]">
                        Sizi nasıl çağıralım?
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Ad Soyad">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Örn. Ayşe Yılmaz"
                          className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                        />
                      </Field>
                      <Field label="Telefon">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="0 5__ ___ __ __"
                          className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                        />
                      </Field>
                    </div>

                    <Field label="Özel isteğiniz (opsiyonel)">
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        placeholder="Örn. Doğum günü, pencere kenarı, alerji..."
                        className="w-full bg-white border border-[var(--color-line)] rounded-xl px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all resize-none"
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Gönderiliyor
                        </>
                      ) : (
                        <>
                          Rezervasyonu Tamamla
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-[var(--color-text-muted)]">
                      Onayı WhatsApp ile hemen iletiyoruz.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-white/85">
      <span
        className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </div>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-8 anim-scalein">
      <div
        className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[var(--color-primary)] mb-3">
        Rezervasyonunuz alındı
      </h3>
      <p className="text-[var(--color-text-muted)] max-w-sm mx-auto mb-8">
        Detayları WhatsApp üzerinden onaylamak için birazdan sizi arayacağız.
        Sizi ağırlamak için sabırsızlanıyoruz.
      </p>
      <button
        onClick={onReset}
        className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-accent)] link-underline"
      >
        Yeni bir rezervasyon
      </button>
    </div>
  );
}
