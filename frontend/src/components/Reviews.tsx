const REVIEWS = [
  {
    quote:
      "Ankara'da gerçek ev yemeği bulmak kolay değil. No.36 bu anlamda bir istisna. Mantıları, limonatası ve dış mekân atmosferi muhteşemdi.",
    name: "Elif Kayacan",
    role: "Çankaya sakini",
  },
  {
    quote:
      "Öğle arasında iş yemeğine gittik, hem hızlı hem son derece özenli bir servis aldık. Espressoları bölgede bildiğim en iyi kahveler arasında.",
    name: "Mert Aydın",
    role: "Google Yorumu",
  },
  {
    quote:
      "Doğum günümüz için küçük bir grupla rezervasyon yaptık. Menüyü bizimle birlikte düzenlediler, servis akşam boyu nazik ve sıcaktı. Tekrar geleceğiz.",
    name: "Selin Aras",
    role: "Google Yorumu",
  },
];

export default function Reviews() {
  return (
    <section
      id="yorumlar"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] rounded-full anim-drift-slow opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(184,134,11,0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-[var(--color-accent)]">
              Misafirlerimiz Söylüyor
            </span>
            <span className="w-10 h-px bg-[var(--color-accent)]" />
          </div>

          <h2
            className="font-[family-name:var(--font-playfair)] leading-[1.05] text-[var(--color-primary)]"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            Küçük yorumlar,
            <br />
            büyük <em className="text-[var(--color-accent)] not-italic">teşekkürler.</em>
          </h2>
        </div>

        {/* Rating centerpiece */}
        <div className="mt-16 flex flex-col items-center reveal reveal-delay-1">
          <div
            className="font-[family-name:var(--font-playfair)] text-[var(--color-primary)]"
            style={{ fontSize: "6rem", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            4<span className="text-[var(--color-accent)]">.0</span>
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#B8860B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="mt-4 text-[0.75rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
            Onlarca Google Yorumu · Çankaya
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`reveal reveal-delay-${i + 1} relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-[var(--color-accent)]/40`}
            >
              <svg
                className="absolute top-6 right-6 opacity-15"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="var(--color-accent)"
              >
                <path d="M6.5 10.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.18 0 .35-.03.51-.07-.22.91-.93 1.72-1.95 2.3l.55.77c1.7-1 3.39-2.77 3.39-5.5 0-1.37-1.12-2.5-2.5-2.5zm8 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.18 0 .35-.03.51-.07-.22.91-.93 1.72-1.95 2.3l.55.77c1.7-1 3.39-2.77 3.39-5.5 0-1.37-1.12-2.5-2.5-2.5z" />
              </svg>

              <div className="flex items-center gap-1 mb-5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#B8860B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="italic text-[var(--color-text)] leading-relaxed mb-8 relative">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-[var(--color-line)] flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-playfair)] text-[var(--color-primary)] text-base"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-[var(--color-text)]">
                    {r.name}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] tracking-wide">
                    {r.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
