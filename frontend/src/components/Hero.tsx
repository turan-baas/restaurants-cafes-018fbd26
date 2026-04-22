export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Layered gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 85% 20%, rgba(184,134,11,0.18), transparent 60%)," +
            "radial-gradient(900px 600px at 15% 85%, rgba(27,58,45,0.18), transparent 55%)," +
            "linear-gradient(180deg, #F5F0EB 0%, #EFE4D7 100%)",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(27,58,45,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[18%] right-[6%] w-[28rem] h-[28rem] rounded-full anim-drift"
          style={{
            background:
              "radial-gradient(circle, rgba(184,134,11,0.22), transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute bottom-[-8rem] left-[-6rem] w-[32rem] h-[32rem] rounded-full anim-drift-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(27,58,45,0.22), transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        {/* Decorative circle outlines */}
        <svg
          className="absolute top-24 right-24 anim-pulse opacity-60"
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
        >
          <circle cx="90" cy="90" r="88" stroke="#B8860B" strokeWidth="0.7" strokeDasharray="2 6" />
          <circle cx="90" cy="90" r="60" stroke="#1B3A2D" strokeWidth="0.7" strokeDasharray="2 4" />
        </svg>
        {/* Top thin rule */}
        <div className="absolute top-32 left-8 lg:left-16 flex items-center gap-3">
          <span className="w-10 h-px bg-[var(--color-accent)]" />
          <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[var(--color-text-muted)]">
            Est. 100. Yıl — Çankaya
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-12 gap-10 pt-28 pb-16 lg:pt-32 lg:pb-24 items-center">
        <div className="lg:col-span-8">
          <div className="anim-fadeup delay-100 flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--color-line)] text-[0.68rem] tracking-[0.22em] uppercase text-[var(--color-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] anim-pulse" />
              Şimdi Açık
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span className="ml-2">4.0 · Google</span>
            </span>
          </div>

          <h1
            className="anim-fadeup delay-200 font-[family-name:var(--font-playfair)] font-bold leading-[0.98]"
            style={{
              fontSize: "clamp(2.75rem, 9vw, 5.5rem)",
              letterSpacing: "-0.04em",
              color: "var(--color-primary)",
            }}
          >
            Çankaya&apos;nın
            <br />
            <span className="inline-block relative">
              lezzet durağı
              <svg
                className="absolute left-0 -bottom-3 w-full"
                height="14"
                viewBox="0 0 400 14"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 10 C 100 2, 200 14, 398 4"
                  stroke="#B8860B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="block mt-2 text-[var(--color-text)]">
              No.<span style={{ color: "var(--color-accent)" }}>36</span>
            </span>
          </h1>

          <p
            className="anim-fadeup delay-300 mt-10 max-w-xl text-[var(--color-text-muted)]"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            100. Yıl&apos;ın samimi köşesinde taze tabaklar, özenle demlenen
            kahveler ve sıcak bir atmosfer. Her saat başı yeni bir hikâye,
            her tabakta ev sıcaklığı.
          </p>

          <div className="anim-fadeup delay-400 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#rezervasyon"
              className="group inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Masa Ayırt
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
              style={{
                color: "var(--color-primary)",
                border: "1px solid var(--color-primary)",
              }}
            >
              Menüyü Gör
            </a>
            <a
              href="tel:+905444900636"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-[var(--color-text)] link-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.23a2 2 0 0 1 2.11-.45c.83.32 1.71.54 2.61.66A2 2 0 0 1 22 16.92z" />
              </svg>
              0544 490 0636
            </a>
          </div>
        </div>

        {/* Side card composition */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="anim-scalein delay-500 relative">
            {/* Card stack background */}
            <div
              className="absolute -top-6 -right-6 w-full h-full rounded-3xl"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <div
              className="absolute top-3 -left-6 w-full h-full rounded-3xl border"
              style={{ borderColor: "var(--color-accent)" }}
            />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl overflow-hidden">
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(184,134,11,0.28), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-6">
                  Bugünün Önerisi
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-[1.85rem] leading-tight text-[var(--color-primary)] mb-3">
                  Ev usulü Mantı
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8">
                  Elde açılan hamur, taze sarımsaklı yoğurt ve nar sosu ile.
                  Anneannemin tarifinden.
                </p>
                <div className="flex items-end justify-between pt-5 border-t border-[var(--color-line)]">
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-1">
                      Fiyat
                    </div>
                    <div className="font-[family-name:var(--font-playfair)] text-xl text-[var(--color-primary)]">
                      ₺ 180
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-1">
                      Servis
                    </div>
                    <div className="text-sm font-medium text-[var(--color-text)]">
                      12:00 – 22:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div
              className="anim-fadeup delay-700 absolute -bottom-6 -left-6 bg-[var(--color-primary)] text-white rounded-2xl px-5 py-4 shadow-2xl"
            >
              <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-accent-soft)] mb-0.5">
                Mutfak
              </div>
              <div className="text-sm font-medium">Mevsime göre hazırlanır</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] anim-fadein delay-700">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Keşfet</span>
        <span className="w-px h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#B8860B">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
