export default function About() {
  return (
    <section id="hakkimizda" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[var(--color-accent)]" />
              <span className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-[var(--color-accent)]">
                Hakkımızda
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
              Bir mahallede doğan,
              <br />
              misafirinde büyüyen <em className="text-[var(--color-accent)] not-italic">bir sofra.</em>
            </h2>

            <div className="mt-10 space-y-6 text-[var(--color-text-muted)]">
              <p>
                No.36, Ankara&apos;nın 100. Yıl&apos;ında — Bağlar Caddesi&apos;nin
                o iyi bilinen köşesinde — sabahları erken kalkan komşuların,
                öğlen molasına sıkışan dostların ve akşam keyfine oturan
                ailelerin ortak sofrası. İsmimiz o köşenin numarasından
                geliyor; mutfağımız ise Anadolu&apos;nun her yerinden.
              </p>
              <p>
                Her tabak elde hazırlanır. Ekmek her gün taze pişer, salçamız
                yaz sonu, turşumuz güz başıdır. Espressomuzu tek kaynaktan
                getirttiğimiz taze çekirdeklerle demliyoruz; çay her zaman
                demli, su her zaman soğuk. Burada hızlı olmak değil, iyi olmak
                önemlidir.
              </p>
              <p>
                Çankaya&apos;da bir kafe-restoran çok; ama No.36&apos;ya
                &quot;benim yerim&quot; diyenin sayısı her yıl biraz daha
                artıyor. Size de bir kahve ısmarlamayı çok isteriz.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <Stat value="12+" label="Yıllık tecrübe" />
              <Stat value="48" label="Oturma kapasitesi" />
              <Stat value="%100" label="Günlük taze" />
            </div>
          </div>

          {/* Decorative column */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Soft glow */}
              <div
                className="absolute -inset-10 rounded-full opacity-60 anim-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(184,134,11,0.18), transparent 65%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Offset frame */}
              <div
                className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl border-2"
                style={{ borderColor: "var(--color-accent)" }}
              />

              {/* Main card */}
              <div
                className="relative h-full w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center p-10"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-deep) 100%)",
                }}
              >
                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Big quotation */}
                <svg
                  className="absolute top-6 left-6 opacity-30"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="#B8860B"
                >
                  <path d="M6.5 10.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.18 0 .35-.03.51-.07-.22.91-.93 1.72-1.95 2.3l.55.77c1.7-1 3.39-2.77 3.39-5.5 0-1.37-1.12-2.5-2.5-2.5zm8 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.18 0 .35-.03.51-.07-.22.91-.93 1.72-1.95 2.3l.55.77c1.7-1 3.39-2.77 3.39-5.5 0-1.37-1.12-2.5-2.5-2.5z" />
                </svg>

                <div className="relative text-center">
                  <div className="text-[0.7rem] tracking-[0.35em] uppercase text-[var(--color-accent-soft)] mb-6">
                    Google Puanımız
                  </div>
                  <div
                    className="font-[family-name:var(--font-playfair)] text-white"
                    style={{
                      fontSize: "clamp(6rem, 14vw, 9rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    4<span className="text-[var(--color-accent)]">.0</span>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#B8860B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="font-[family-name:var(--font-playfair)] text-white/90 italic text-sm leading-relaxed max-w-[16rem] mx-auto">
                      &ldquo;Küçük bir kafe, koca bir sofra.&rdquo;
                    </div>
                    <div className="text-[0.65rem] tracking-[0.28em] uppercase text-[var(--color-sage)] mt-4">
                      — Misafirlerimiz
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <span className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 rounded-tr-2xl" style={{ borderColor: "var(--color-accent)" }} />
                <span className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 rounded-bl-2xl" style={{ borderColor: "var(--color-accent)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        className="font-[family-name:var(--font-playfair)] text-[var(--color-primary)]"
        style={{ fontSize: "2rem", lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="mt-2 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
        {label}
      </div>
    </div>
  );
}
