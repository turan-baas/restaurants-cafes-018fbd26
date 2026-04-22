const SERVICES = [
  {
    title: "Her Güne Başlangıç",
    subtitle: "Serpme Kahvaltı",
    desc: "Açma, köy peynirleri, ev reçelleri, menemen ve taze çay. Hafta sonu saat 10:00–14:00 arasında serpme kahvaltımızı en sevdiğiniz köşede kurarız.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3H2v3z" />
        <path d="M2 16h20v0a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4z" />
        <path d="M6 8c0-1.5 1-2 1-3.5S6 3 6 1" />
        <path d="M10 8c0-1.5 1-2 1-3.5S10 3 10 1" />
        <path d="M14 8c0-1.5 1-2 1-3.5S14 3 14 1" />
      </svg>
    ),
  },
  {
    title: "Ev Usulü Sıcaklıklar",
    subtitle: "Ana Yemekler",
    desc: "Mantıdan karnıyarığa, köfteden tavuk sotelere — her tabak mutfakta elde hazırlanır. Mevsimine göre değişen öğle menüsü için bizi arayabilirsiniz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11h.01M11 15h.01M16 16h.01M2 16l3.5 3.5a2.5 2.5 0 0 0 3.5 0L14 15l-4-4-5 5a2.5 2.5 0 0 0 0 0z" />
        <path d="M14 15l5.5 5.5a1.5 1.5 0 1 0 2-2L16 13" />
        <path d="M13 7L8 2l-4 4 5 5" />
        <path d="M16 8l6-6" />
      </svg>
    ),
  },
  {
    title: "Üçüncü Dalga",
    subtitle: "Kahve & Tatlı",
    desc: "Taze çekilmiş tek kökenli çekirdekler, ev yapımı sufle ve mevsim tatlıları. Cam kavanozda limonatamız yaz günlerinde efsane olmuş durumda.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Keyifli Toplantılar",
    subtitle: "Özel Etkinlik",
    desc: "Doğum günü, küçük kutlama veya iş yemeği — 24 kişiye kadar özel grup rezervasyonu yapıyoruz. Menünüzü birlikte kurgulayabiliriz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Paket Servis",
    subtitle: "Al & Götür",
    desc: "Ofise, eve ya da parka — siparişinizi telefonla veya WhatsApp üzerinden alıyor, sıcaklığını koruyan paketlerle elinize ulaştırıyoruz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M8 21H3v-5" />
        <path d="M21 3l-7 7" />
        <path d="M3 21l7-7" />
      </svg>
    ),
  },
  {
    title: "Akşam Sofrası",
    subtitle: "Mezeler & Şarap",
    desc: "Akşam saatlerinde küçük meze çeşitleri ve özenle seçilmiş yerli şaraplarımız eşliğinde bir gece. Rezervasyon tavsiye edilir.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="M19 3H5l1 7a6 6 0 0 0 12 0l1-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="menu" className="relative py-28 lg:py-36">
      {/* subtle backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(240,224,214,0.45) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[var(--color-accent)]" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-[var(--color-accent)]">
              Menümüzden
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
            Sabahın serpme kahvaltısından
            <br />
            akşam mezesine — <em className="text-[var(--color-accent)] not-italic">hepsi el emeği.</em>
          </h2>
          <p className="mt-6 text-[var(--color-text-muted)] max-w-2xl">
            Her öğün için mevsimine göre hazırlanmış küçük bir liste. Tam
            menümüzü görmek için bize uğrayın ya da WhatsApp üzerinden isteyin.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative bg-white rounded-2xl p-8 lg:p-10 border border-[var(--color-line)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[var(--color-accent)]/60`}
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 font-[family-name:var(--font-playfair)] text-[var(--color-accent)]/30 text-2xl">
                0{i + 1}
              </div>

              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-7 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-primary)",
                }}
              >
                {s.icon}
              </div>

              <div className="text-[0.68rem] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">
                {s.subtitle}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl leading-tight text-[var(--color-primary)] mb-4">
                {s.title}
              </h3>
              <p className="text-[0.97rem] text-[var(--color-text-muted)] leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-[var(--color-line)] flex items-center justify-between">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
                  Her gün taze
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:w-20 overflow-hidden"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <svg
                    className="text-white flex-shrink-0"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Menümüzün tamamı veya özel grup siparişleri için bizi arayabilirsiniz.
          </p>
          <a
            href="#rezervasyon"
            className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Masa Ayırtmak İstiyorum
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
