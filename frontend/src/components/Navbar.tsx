"use client";

import { useCallback, useEffect, useState } from "react";

const LINKS = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#menu", label: "Menü" },
  { href: "#rezervasyon", label: "Rezervasyon" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[var(--color-bg)]/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(27,58,45,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
        aria-label="Ana menü"
      >
        <a
          href="#anasayfa"
          onClick={(e) => onClick(e, "#anasayfa")}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]/15 scale-0 group-hover:scale-110 transition-transform duration-500" />
            <span
              className="font-[family-name:var(--font-playfair)] text-2xl leading-none"
              style={{ color: "var(--color-primary)" }}
            >
              N
              <span style={{ color: "var(--color-accent)" }}>o.</span>
              36
            </span>
          </span>
          <span
            className={`hidden sm:block text-[0.7rem] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${
              scrolled || open ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-muted)]"
            }`}
          >
            Cafe · Restaurant
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.slice(0, -1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => onClick(e, l.href)}
                className="nav-link text-[0.78rem] uppercase tracking-[0.18em] font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#iletisim"
            onClick={(e) => onClick(e, "#iletisim")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] font-medium text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
            </svg>
            İletişim
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden hamburger relative z-[60] ${open ? "open" : ""} text-[var(--color-text)]`}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(180deg, #0F2419 0%, #1B3A2D 100%)",
        }}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full anim-drift"
            style={{
              background: "radial-gradient(circle, rgba(184,134,11,0.25), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full anim-drift-slow"
            style={{
              background: "radial-gradient(circle, rgba(156,163,139,0.18), transparent 70%)",
            }}
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <ul className="flex flex-col items-center gap-7">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => onClick(e, l.href)}
                  className="overlay-link font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-white hover:text-[var(--color-accent-soft)] transition-colors"
                  style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="overlay-link mt-14 text-center text-white/70"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="gold-rule mx-auto mb-5" />
            <a
              href="tel:+905444900636"
              className="block text-sm tracking-[0.22em] uppercase text-[var(--color-accent-soft)] mb-1"
            >
              +90 544 490 0636
            </a>
            <span className="text-xs tracking-[0.18em] uppercase">
              100. Yıl · Çankaya · Ankara
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
