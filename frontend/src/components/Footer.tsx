const LINKS = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#menu", label: "Menü" },
  { href: "#rezervasyon", label: "Rezervasyon" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-deep)", color: "white" }}
    >
      <div
        className="absolute -top-32 right-10 w-96 h-96 rounded-full opacity-40 anim-drift pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,11,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full opacity-30 anim-drift-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(156,163,139,0.18), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-3xl leading-none">
              No.<span style={{ color: "var(--color-accent)" }}>36</span>
            </div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-accent-soft)] mt-2 mb-6">
              Cafe · Restaurant
            </div>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Çankaya&apos;nın kalbinde, taze tabaklar ve sıcak sohbetler için
              bir sofra. Kapımız her gün sabah sekizden geç saatlere kadar açık.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: "https://wa.me/905444900636",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.1-.4-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "Telefon",
                  href: "tel:+905444900636",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-[var(--color-primary-deep)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:scale-110 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-accent-soft)] mb-6">
              Sayfalar
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-[var(--color-accent-soft)] transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-accent-soft)] mb-6">
              İletişim
            </div>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5 text-[var(--color-accent-soft)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  100. Yıl, Bağlar Cd. No:194
                  <br />
                  06700 Çankaya / Ankara
                </span>
              </li>
              <li>
                <a href="tel:+905444900636" className="flex items-center gap-3 hover:text-[var(--color-accent-soft)] transition-colors">
                  <svg className="text-[var(--color-accent-soft)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0544 490 0636
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="text-[var(--color-accent-soft)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Her gün 08:00 – 23:30
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 tracking-wide">
            © 2026 No.36 Cafe Restaurant Ankara — Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/40 tracking-[0.2em] uppercase">
            Çankaya · Ankara · Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
