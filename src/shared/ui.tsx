import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { CONTENT, CONTACT, LEGAL_NAME, type Content, type Lang } from "./content";

// --- Preferencias (idioma y tema) -------------------------------------------
// localStorage puede no existir (modo privado): todo acceso va protegido.

function readPref(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePref(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* sin persistencia, no pasa nada */
  }
}

type Theme = "dark" | "light";

interface Prefs {
  lang: Lang;
  t: Content;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const PrefsContext = createContext<Prefs | null>(null);

function initialLang(): Lang {
  const saved = readPref("imc2-lang");
  if (saved === "es" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function PrefsProvider({ page, children }: { page: "home" | "founder"; children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(() => (readPref("imc2-theme") === "light" ? "light" : "dark"));
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = page === "home" ? t.meta.homeTitle : t.meta.founderTitle;
    writePref("imc2-lang", lang);
  }, [lang, page, t]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writePref("imc2-theme", theme);
  }, [theme]);

  const value: Prefs = {
    lang,
    t,
    toggleLang: () => setLang((l) => (l === "es" ? "en" : "es")),
    theme,
    toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")),
  };
  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs(): Prefs {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs fuera de PrefsProvider");
  return ctx;
}

// --- Marca -------------------------------------------------------------------

/** Isotipo IMC² reconstruido del master del vault. Hereda color vía currentColor.
 *  `bold` usa el trazo 28 que la guía pide debajo de ~120 px. */
export function Isotipo({ size = 40, bold = false, draw = false, className = "" }: { size?: number; bold?: boolean; draw?: boolean; className?: string }) {
  const stroke = bold ? 28 : 16;
  const dot = bold ? 30 : 24;
  return (
    <svg
      className={`isotipo ${draw ? "isotipo--draw" : ""} ${className}`}
      viewBox="105 57 526 446"
      width={size}
      height={(size * 446) / 526}
      role="img"
      aria-label="IMC²"
    >
      <g fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="butt" strokeLinejoin="miter">
        <path pathLength={1} d="M230 131.5 H184.5 A57.25 57.25 0 0 0 184.5 246 H310.5 V137 A57.5 57.5 0 0 1 425.5 137 V254" />
        <path pathLength={1} transform="rotate(180 368 280)" d="M230 131.5 H184.5 A57.25 57.25 0 0 0 184.5 246 H310.5 V137 A57.5 57.5 0 0 1 425.5 137 V254" />
      </g>
      <circle className="isotipo-dot" cx="230" cy="131.5" r={dot} fill="currentColor" />
      <circle className="isotipo-dot" cx="506" cy="428.5" r={dot} fill="currentColor" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <Isotipo size={30} bold />
      <span className="wordmark-text">
        IMC<sup>2</sup>
      </span>
    </span>
  );
}

// --- Animación de entrada ---------------------------------------------------

/** Marca con `.is-in` cada `.reveal` cuando entra en pantalla. */
export function useReveal(deps: unknown[] = []): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// --- Navegación ---------------------------------------------------------------

interface NavLink {
  href: string;
  label: string;
}

export function Nav({ links, homeHref }: { links: NavLink[]; homeHref: string }) {
  const { t, toggleLang, toggleTheme, theme } = usePrefs();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner container">
        <a href={homeHref} className="nav-brand" aria-label="IMC² Medical Technologies">
          <Wordmark />
        </a>
        <nav className="nav-links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleLang} aria-label={t.nav.langLabel}>
            {t.nav.langSwitch}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label={t.nav.themeLabel}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="icon-btn nav-burger" onClick={() => setOpen((o) => !o)} aria-label={t.nav.menu} aria-expanded={open}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

// --- Contacto y pie -------------------------------------------------------------

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.5-.3Z" />
    </svg>
  );
}

export function SocialLinks() {
  const { t } = usePrefs();
  return (
    <div className="social">
      <a className="btn btn--primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
        <WhatsAppIcon /> {t.contact.whatsapp}
      </a>
      <a className="btn btn--ghost" href={CONTACT.github} target="_blank" rel="noreferrer">
        {t.contact.github}
      </a>
      <a className="btn btn--ghost" href={CONTACT.instagram} target="_blank" rel="noreferrer">
        {t.contact.instagram}
      </a>
      <a className="btn btn--ghost" href={CONTACT.facebook} target="_blank" rel="noreferrer">
        {t.contact.facebook}
      </a>
    </div>
  );
}

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Wordmark />
        <p className="footer-legal">
          © {new Date().getFullYear()} {LEGAL_NAME} · {t.footer.rights}
        </p>
        <p className="footer-place">{t.footer.place} 🇲🇽</p>
      </div>
    </footer>
  );
}

/** Firma manuscrita del sitio original, ahora como intro breve que no bloquea. */
export function Intro() {
  const [gone, setGone] = useState(false);
  const seen = useRef(readPref("imc2-intro") === "1");
  useEffect(() => {
    if (seen.current) return;
    writePref("imc2-intro", "1");
    const id = setTimeout(() => setGone(true), 1900);
    return () => clearTimeout(id);
  }, []);
  if (seen.current || gone) return null;
  return (
    <div className="intro" aria-hidden="true" onClick={() => setGone(true)}>
      <Isotipo size={140} draw />
    </div>
  );
}
