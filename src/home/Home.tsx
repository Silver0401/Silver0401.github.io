import { CONTACT } from "../shared/content";
import { Footer, Intro, Isotipo, Nav, SocialLinks, usePrefs, useReveal, WhatsAppIcon } from "../shared/ui";

const BASE = import.meta.env.BASE_URL;

const STACK = ["TypeScript", "Next.js", "React", "Node.js", "FeathersJS", "MongoDB", "Three.js", "LLMs", "Whisper", "Stripe", "Electron"];

function ProductMark({ id }: { id: string }) {
  if (id === "cronos") return <img src={`${BASE}brand/cronos-icono-gradiente.svg`} alt="" width={44} height={44} />;
  if (id === "temis") return <img src={`${BASE}brand/temis-icono-naranja.svg`} alt="" width={44} height={44} />;
  // HermesMD aún no tiene logo: monograma con flechas de traslado.
  return (
    <svg viewBox="0 0 44 44" width={44} height={44} aria-hidden="true">
      <defs>
        <linearGradient id="hermes-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c3a6ff" />
          <stop offset="1" stopColor="#6d4dff" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hermes-g)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 9v26M31 9v26M13 22h18" />
        <path d="M5 15h5M5 15l2.5-2.5M5 15l2.5 2.5" />
        <path d="M39 29h-5M39 29l-2.5-2.5M39 29l-2.5 2.5" />
      </g>
    </svg>
  );
}

function StageMeter({ stage, labels }: { stage: number; labels: string[] }) {
  return (
    <ol className="stage" aria-label={labels[stage - 1]}>
      {labels.map((label, i) => (
        <li key={label} className={i < stage ? "done" : ""} title={label}>
          <span />
          <small>{label}</small>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const { t, lang } = usePrefs();
  useReveal([lang]);

  const links = [
    { href: "#productos", label: t.nav.products },
    { href: "#plataforma", label: t.nav.platform },
    { href: "#avance", label: t.nav.progress },
    { href: "#laboratorio", label: t.nav.lab },
    { href: `${BASE}fundador/`, label: t.nav.founder },
    { href: "#contacto", label: t.nav.contact },
  ];

  const [cronos, ...others] = t.products.list;

  return (
    <>
      <Intro />
      <Nav links={links} homeHref="#top" />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow reveal">{t.hero.eyebrow}</p>
              <h1 className="hero-title reveal">
                {t.hero.title1}
                <br />
                <span className="muted">{t.hero.title2}</span>
                <br />
                <span className="accent">{t.hero.title3}</span>
              </h1>
              <p className="lead reveal">{t.hero.lead}</p>
              <div className="hero-ctas reveal">
                <a className="btn btn--primary" href="#productos">
                  {t.hero.ctaProducts} →
                </a>
                <a className="btn btn--ghost" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> {t.hero.ctaTalk}
                </a>
              </div>
              <dl className="hero-stats reveal">
                {t.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero-mark reveal" aria-hidden="true">
              <div className="hero-orbit" />
              <Isotipo size={360} draw className="hero-iso" />
              <p className="hero-eq">
                I = MC<sup>2</sup>
              </p>
              <p className="hero-desc">MEDICAL TECHNOLOGIES</p>
            </div>
          </div>
        </section>

        {/* EL NOMBRE */}
        <section className="section section--tight">
          <div className="container">
            <p className="kicker reveal">{t.name.kicker}</p>
            <h2 className="h2 reveal">{t.name.title}</h2>
            <div className="name-grid">
              {t.name.items.map((it) => (
                <article key={it.title} className="card name-card reveal">
                  <p className="name-sym">{it.sym}</p>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </article>
              ))}
            </div>
            <p className="name-bonus reveal">{t.name.bonus}</p>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section className="section" id="productos">
          <div className="container">
            <p className="kicker reveal">{t.products.kicker}</p>
            <h2 className="h2 reveal">{t.products.title}</h2>
            <p className="lead reveal">{t.products.lead}</p>

            <article className={`product product--featured product--${cronos.id} reveal`}>
              <div className="product-body">
                <header className="product-head">
                  <ProductMark id={cronos.id} />
                  <div>
                    <h3>{cronos.name}</h3>
                    <p className="product-tagline">{cronos.tagline}</p>
                  </div>
                </header>
                <span className="badge">{cronos.status}</span>
                <p>{cronos.text}</p>
                <ul className="feature-list">
                  {cronos.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <dl className="product-meta">
                  <div>
                    <dt>{t.products.sectorLabel}</dt>
                    <dd>{cronos.sector}</dd>
                  </div>
                  <div>
                    <dt>{t.products.solvesLabel}</dt>
                    <dd>{cronos.solves}</dd>
                  </div>
                </dl>
                <StageMeter stage={cronos.stage} labels={t.products.stages} />
              </div>
              <div className="product-visual">
                <CronosVisual />
              </div>
            </article>

            <div className="product-pair">
              {others.map((p) => (
                <article key={p.id} className={`product product--${p.id} reveal`}>
                  <header className="product-head">
                    <ProductMark id={p.id} />
                    <div>
                      <h3>{p.name}</h3>
                      <p className="product-tagline">{p.tagline}</p>
                    </div>
                  </header>
                  <span className="badge">{p.status}</span>
                  <p>{p.text}</p>
                  <ul className="feature-list">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <dl className="product-meta">
                    <div>
                      <dt>{t.products.sectorLabel}</dt>
                      <dd>{p.sector}</dd>
                    </div>
                    <div>
                      <dt>{t.products.solvesLabel}</dt>
                      <dd>{p.solves}</dd>
                    </div>
                  </dl>
                  <StageMeter stage={p.stage} labels={t.products.stages} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PLATAFORMA */}
        <section className="section section--alt" id="plataforma">
          <div className="container">
            <p className="kicker reveal">{t.platform.kicker}</p>
            <h2 className="h2 reveal">{t.platform.title}</h2>
            <p className="lead reveal">{t.platform.lead}</p>

            <div className="flow reveal" role="img" aria-label={`${t.platform.flow.input} → ${t.platform.flow.core} → ${t.platform.flow.outputs.join(", ")}`}>
              <div className="flow-node">
                <strong>{t.platform.flow.input}</strong>
                <small>{t.platform.flow.inputSub}</small>
              </div>
              <div className="flow-wire" />
              <div className="flow-node flow-core">
                <Isotipo size={38} bold />
                <strong>{t.platform.flow.core}</strong>
                <small>{t.platform.flow.coreSub}</small>
              </div>
              <div className="flow-wire flow-wire--split" />
              <div className="flow-outs">
                {t.platform.flow.outputs.map((o, i) => (
                  <div key={o} className={`flow-node flow-out flow-out--${["cronos", "temis", "hermes"][i]}`}>
                    <strong>{o}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="pillars">
              {t.platform.pillars.map((p, i) => (
                <article key={p.title} className="pillar reveal">
                  <span className="pillar-n">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>

            <h3 className="stack-title reveal">{t.platform.stackTitle}</h3>
            <ul className="chips reveal">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* AVANCE */}
        <section className="section" id="avance">
          <div className="container">
            <p className="kicker reveal">{t.progress.kicker}</p>
            <h2 className="h2 reveal">{t.progress.title}</h2>
            <ol className="timeline">
              {t.progress.items.map((it, i) => (
                <li key={it.title} className={`reveal ${i === t.progress.items.length - 1 ? "timeline-next" : ""}`}>
                  <span className="timeline-year">{it.year}</span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* LABORATORIO */}
        <section className="section section--alt" id="laboratorio">
          <div className="container">
            <p className="kicker reveal">{t.lab.kicker}</p>
            <h2 className="h2 reveal">{t.lab.title}</h2>
            <p className="lead reveal">{t.lab.lead}</p>
            <div className="lab-grid">
              {t.lab.list.map((l) => (
                <article key={l.name} className="card lab-card reveal">
                  <h3>{l.name}</h3>
                  <p>{l.text}</p>
                  <span className="lab-tag">{l.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FUNDADOR */}
        <section className="section" id="fundador">
          <div className="container founder-teaser reveal">
            <div className="founder-monogram" aria-hidden="true">
              <span>IMC</span>
            </div>
            <div>
              <p className="kicker">{t.founderTeaser.kicker}</p>
              <h2 className="h2">{t.founderTeaser.title}</h2>
              <p className="founder-role">{t.founderTeaser.role}</p>
              <p className="lead">{t.founderTeaser.text}</p>
              <a className="btn btn--primary" href={`${BASE}fundador/`}>
                {t.founderTeaser.cta} →
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="section section--contact" id="contacto">
          <div className="container contact reveal">
            <p className="kicker">{t.contact.kicker}</p>
            <h2 className="h2">{t.contact.title}</h2>
            <p className="lead">{t.contact.text}</p>
            <SocialLinks />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/** Ilustración abstracta del expediente con réplica 3D (sin datos reales de pacientes). */
function CronosVisual() {
  return (
    <svg className="cronos-visual" viewBox="0 0 320 200" aria-hidden="true">
      <defs>
        <linearGradient id="cv-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#18d7ff" />
          <stop offset="1" stopColor="#2b6dff" />
        </linearGradient>
        <radialGradient id="cv-glow" cx="0.5" cy="0.45" r="0.5">
          <stop offset="0" stopColor="#18d7ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#18d7ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="318" height="198" rx="14" className="cv-frame" />
      <circle cx="110" cy="100" r="80" fill="url(#cv-glow)" />
      {/* silueta humana: mitad izquierda + su espejo */}
      <g className="cv-body">
        <g fill="url(#cv-g)" fillOpacity="0.14" stroke="url(#cv-g)" strokeWidth="1.6" strokeLinejoin="round">
          <circle cx="110" cy="38" r="12" />
          <path id="cv-half" d="M110 54 C102 54 97 55 94 58 C88 60 82 62 79 66 C75 70 74 76 73 84 L69 118 C68 123 73 125 75 120 L80 88 C81 85 83 86 83 89 L84 116 L85 172 C85 178 96 178 96 172 L104 124 L110 124" />
          <use href="#cv-half" transform="translate(220 0) scale(-1 1)" />
        </g>
        <ellipse cx="110" cy="182" rx="46" ry="6" fill="none" stroke="url(#cv-g)" strokeOpacity="0.35" />
        <rect x="64" y="30" width="92" height="2" fill="#18d7ff" opacity="0.55" className="cv-scan" />
      </g>
      <circle cx="100" cy="72" r="4.5" className="cv-pin" />
      <circle cx="119" cy="140" r="4.5" className="cv-pin cv-pin--2" />
      {/* tarjetas de contexto clínico */}
      <g className="cv-cards">
        <rect x="190" y="30" width="112" height="34" rx="8" />
        <rect x="190" y="74" width="112" height="34" rx="8" />
        <rect x="190" y="118" width="112" height="34" rx="8" />
        <path d="M202 42h52M202 52h80M202 86h64M202 96h44M202 130h72M202 140h56" className="cv-lines" />
      </g>
      <path d="M104 72 C150 72 160 47 190 47" className="cv-link" />
      <path d="M123 140 C160 140 160 135 190 135" className="cv-link" />
    </svg>
  );
}
