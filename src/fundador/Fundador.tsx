import { lazy, Suspense, useEffect, useState } from "react";
import { CONTACT } from "../shared/content";
import { Footer, Nav, SocialLinks, usePrefs, useReveal } from "../shared/ui";
import Signature from "./Signature";

const ModelViewer = lazy(() => import("./ModelViewer"));

const BASE = import.meta.env.BASE_URL;

// Todas las imágenes de resources/, indexadas por nombre de archivo sin extensión.
const files = import.meta.glob<string>("../resources/**/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const IMG: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  IMG[name] = url;
}

const MED_IMGS = ["cardio", "biocel", "genetica", "endocrino", "inmuno", "neuro", "histo", "nefro", "gasto", "micro", "embrio"];
const LANG_IMGS = [
  ["mex", "español1", "español3"],
  ["americana1", "americana2", "americana3"],
  ["aleman1", "aleman2", "aleman3"],
];
const PROJECT_LOGOS: Record<string, string> = { smort: "SmortLogo", preventis: "preventisLogo", voades: "voadesLogo", mery: "meryLogo" };

const STACK_NOW = ["TypeScript", "Next.js", "React", "Node.js", "FeathersJS", "Express", "MongoDB", "Three.js / R3F", "Electron", "Stripe", "Claude / OpenAI APIs", "Whisper"];
const LANGS = [
  ["TypeScript", "ts", 85],
  ["JavaScript", "js", 90],
  ["Python", "python", 90],
  ["React", "react", 90],
  ["React Native", "reactNative", 80],
  ["Node.js", "node", 85],
  ["HTML", "html", 90],
  ["CSS", "css", 90],
  ["Sass", "sass", 90],
  ["Java", "java", 75],
  ["MySQL", "mySQL", 80],
] as const;
const SOFT = [
  ["Figma", "figma", 80],
  ["VS Code", "vsLogo", 90],
  ["Xcode", "xcLogo", 85],
  ["Android Studio", "asLogo", 80],
  ["Blender", "blendLogo", 75],
  ["SolidWorks", "swLogo", 75],
  ["Terminal", "clLogo", 90],
  ["Sublime Text", "stLogo", 90],
  ["Excel", "meLogo", 75],
  ["Word", "mwLogo", 90],
  ["PowerPoint", "mpLogo", 90],
  ["iMovie", "imLogo", 90],
  ["GIMP", "gimpLogo", 75],
] as const;

interface Shot {
  src: string;
  caption: string;
}

function Lightbox({ shot, onClose, closeLabel }: { shot: Shot | null; onClose: () => void; closeLabel: string }) {
  useEffect(() => {
    if (!shot) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shot, onClose]);
  if (!shot) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.caption} />
        <figcaption>{shot.caption}</figcaption>
        <button className="icon-btn lightbox-close" onClick={onClose} aria-label={closeLabel}>
          ✕
        </button>
      </figure>
    </div>
  );
}

function Roles({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, [roles.length]);
  return (
    <p className="roles" aria-live="polite">
      <span key={i}>{roles[i]}</span>
    </p>
  );
}

export default function Fundador() {
  const { t, lang } = usePrefs();
  const f = t.founder;
  const [tab, setTab] = useState<"xp" | "edu">("xp");
  const [shot, setShot] = useState<Shot | null>(null);
  const [viewer, setViewer] = useState(false);
  useReveal([lang, tab]);

  const links = [
    { href: "#trayectoria", label: f.sections.path },
    { href: "#proyectos", label: f.sections.projects },
    { href: "#habilidades", label: f.sections.skills },
    { href: "#medicina", label: f.sections.med },
    { href: "#contacto", label: t.nav.contact },
    { href: BASE, label: t.nav.company },
  ];

  const path = tab === "xp" ? f.xp : f.edu;

  return (
    <>
      <Nav links={links} homeHref={BASE} />
      <main>
        {/* HERO */}
        <section className="hero hero--founder">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container founder-hero">
            <div>
              <a className="back-link reveal" href={BASE}>
                ← {f.back}
              </a>
              <p className="eyebrow reveal">{f.hello}</p>
              <h1 className="hero-title reveal">{f.name}</h1>
              <Roles roles={f.roles} />
              <p className="lead reveal">{f.lead}</p>
              <blockquote className="motto reveal">“{f.motto}”</blockquote>
              <div className="hero-ctas reveal">
                <a className="btn btn--primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  {f.ctaTalk}
                </a>
                <a className="btn btn--ghost" href={`${BASE}#productos`}>
                  {f.closeCompany} →
                </a>
              </div>
            </div>
            <div className="founder-sign reveal">
              <Signature />
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section className="section" id="trayectoria">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.path}</h2>
            <div className="tabs reveal" role="tablist">
              {(["xp", "edu"] as const).map((k) => (
                <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>
                  {f.pathTabs[k]}
                </button>
              ))}
            </div>
            <ol className="timeline timeline--rich">
              {path.map((it) => (
                <li key={it.title} className="reveal">
                  <span className="timeline-dot" />
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                    {it.imgs.length > 0 && (
                      <div className="thumbs">
                        {it.imgs.map((name) =>
                          IMG[name] ? (
                            <button key={name} onClick={() => setShot({ src: IMG[name], caption: it.title })}>
                              <img src={IMG[name]} alt={it.title} loading="lazy" />
                            </button>
                          ) : null,
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRIMEROS PROYECTOS */}
        <section className="section section--alt" id="proyectos">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.projects}</h2>
            <p className="lead reveal">{f.projectsLead}</p>
            <div className="project-grid">
              {f.projects.map((p) => (
                <article key={p.name} className="card project reveal">
                  <div className="project-logo">
                    <img src={IMG[PROJECT_LOGOS[p.logo]]} alt={p.name} loading="lazy" />
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Repo ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="section" id="habilidades">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.skills}</h2>
            <p className="lead reveal">{f.skillsLead}</p>
            <h3 className="group-title reveal">{f.skillGroups.now}</h3>
            <ul className="chips chips--accent reveal">
              {STACK_NOW.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="skill-cols">
              {[
                [f.skillGroups.langs, LANGS],
                [f.skillGroups.soft, SOFT],
              ].map(([title, list]) => (
                <div key={title as string} className="reveal">
                  <h3 className="group-title">{title as string}</h3>
                  <ul className="skills">
                    {(list as typeof LANGS | typeof SOFT).map(([name, icon, pct]) => (
                      <li key={name}>
                        <img src={IMG[icon]} alt="" loading="lazy" />
                        <span>{name}</span>
                        <i style={{ ["--pct" as string]: `${pct}%` }} title={`${pct}%`} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEDICINA */}
        <section className="section section--alt" id="medicina">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.med}</h2>
            <p className="lead reveal">{f.medLead}</p>
            <div className="med-grid">
              {f.medAreas.map((area, i) => (
                <button key={area} className="med-tile reveal" onClick={() => setShot({ src: IMG[MED_IMGS[i]], caption: area })}>
                  <img src={IMG[MED_IMGS[i]]} alt="" loading="lazy" />
                  <span>{area}</span>
                </button>
              ))}
            </div>
            <a className="btn btn--ghost reveal" href={CONTACT.medNotes} target="_blank" rel="noreferrer">
              {f.medButton} ↗
            </a>
          </div>
        </section>

        {/* IDIOMAS */}
        <section className="section" id="idiomas">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.langs}</h2>
            <div className="lang-grid">
              {f.langs.map((l, i) => (
                <article key={l.name} className="card lang reveal">
                  <header>
                    <span className="lang-flag">{l.flag}</span>
                    <h3>{l.name}</h3>
                    <span className="badge">{l.level}</span>
                  </header>
                  <div className="meter">
                    <span style={{ width: `${l.pct}%` }} />
                  </div>
                  <p>{l.text}</p>
                  <div className="thumbs">
                    {LANG_IMGS[i].map((name) => (
                      <button key={name} onClick={() => setShot({ src: IMG[name], caption: l.name })}>
                        <img src={IMG[name]} alt={l.name} loading="lazy" />
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MODELADO 3D */}
        <section className="section section--alt" id="modelado">
          <div className="container modeling">
            <div className="reveal">
              <h2 className="h2">{f.sections.modeling}</h2>
              <p className="lead">{f.modelingText}</p>
              <p className="credit">
                {f.modelingCredit}{" "}
                <a href="https://sketchfab.com/3d-models/beck-kustoms-f132-027abdfa3145468c801fc07fb7b7aadd" target="_blank" rel="noreferrer">
                  “Beck Kustoms F132”
                </a>{" "}
                — Vyacheslav ·{" "}
                <a href="https://sketchfab.com/3d-models/microwave-xyz-school-homework-6e4cc39012504c99b7841314f2218e0e" target="_blank" rel="noreferrer">
                  “Microwave [XYZ School Homework]”
                </a>{" "}
                — Maria Savelyeva ·{" "}
                <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">
                  CC BY 4.0
                </a>
              </p>
            </div>
            <div className="viewer reveal">
              {viewer ? (
                <Suspense fallback={<div className="viewer-loading" />}>
                  <ModelViewer labels={f.modelingModels} hint={f.modelingHint} />
                </Suspense>
              ) : (
                <button className="viewer-cta" onClick={() => setViewer(true)}>
                  <span className="viewer-cube" aria-hidden="true" />
                  {f.modelingLoad}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* MÚSICA */}
        <section className="section" id="musica">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.music}</h2>
            <p className="lead reveal">{f.musicText}</p>
            <div className="music-grid">
              {["guitar1", "guitar2", "violin"].map((name, i) => (
                <button key={name} className="music-shot reveal" onClick={() => setShot({ src: IMG[name], caption: f.musicCaptions[i] })}>
                  <img src={IMG[name]} alt={f.musicCaptions[i]} loading="lazy" />
                  <span>{f.musicCaptions[i]}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJO */}
        <section className="section section--alt" id="como-trabajo">
          <div className="container">
            <h2 className="h2 reveal">{f.sections.how}</h2>
            <div className="pillars pillars--five">
              {f.how.map((h, i) => (
                <article key={h.title} className="pillar reveal">
                  <span className="pillar-n">0{i + 1}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="section section--contact" id="contacto">
          <div className="container contact reveal">
            <h2 className="h2">{f.close}</h2>
            <SocialLinks />
          </div>
        </section>
      </main>
      <Footer />
      <Lightbox shot={shot} onClose={() => setShot(null)} closeLabel={f.lightboxClose} />
    </>
  );
}
