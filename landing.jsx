// Landing.jsx — Компонент Studio (purple glass)

const { useState, useEffect, useRef } = React;

// ───── Cursor ─────
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    let rx = innerWidth/2, ry = innerHeight/2, dx = rx, dy = ry, raf;
    const onMove = (e) => { rx = e.clientX; ry = e.clientY; if (dotRef.current) dotRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`; };
    const tick = () => { dx += (rx-dx)*0.18; dy += (ry-dy)*0.18; if (ringRef.current) ringRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`; raf = requestAnimationFrame(tick); };
    const onOver = (e) => setHover(!!e.target.closest('a, button, .kmp-magnetic, .kmp-project-card, .kmp-faq-q, .kmp-service'));
    addEventListener('mousemove', onMove); addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener('mousemove', onMove); removeEventListener('mouseover', onOver); cancelAnimationFrame(raf); };
  }, []);
  return (<>
    <div ref={dotRef} className={`kmp-cursor ${hover ? 'is-hover' : ''}`}></div>
    <div ref={ringRef} className="kmp-cursor-ring"></div>
  </>);
}

// ───── Magnetic ─────
function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove); el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [strength]);
  return <span ref={ref} className={`kmp-magnetic ${className}`} style={{ display: 'inline-block', transition: 'transform .25s cubic-bezier(.2,.8,.2,1)', willChange: 'transform' }}>{children}</span>;
}

// ───── Floating glass shapes with parallax (icons inside) ─────
const SHAPES = [
  { x: '4%',  y: '8%',  w: 240, h: 240, r: 36, depth: 0.04, rot: -12, op: 0.9,  icon: 'spark' },
  { x: '12%', y: '40%', w: 180, h: 180, r: 28, depth: 0.06, rot: 8,   op: 0.8,  icon: 'grid' },
  { x: '78%', y: '10%', w: 280, h: 280, r: 40, depth: 0.05, rot: 14,  op: 0.7,  icon: 'arrow' },
  { x: '83%', y: '52%', w: 200, h: 200, r: 32, depth: 0.08, rot: -6,  op: 0.85, icon: 'orbit' },
  { x: '34%', y: '78%', w: 160, h: 160, r: 24, depth: 0.1,  rot: 22,  op: 0.7,  icon: 'plus' },
  { x: '62%', y: '82%', w: 220, h: 220, r: 36, depth: 0.07, rot: -16, op: 0.75, icon: 'serif' },
  { x: '46%', y: '12%', w: 140, h: 140, r: 22, depth: 0.12, rot: 6,   op: 0.6,  icon: 'wave' },
];

// ───── Icons rendered inside hero shapes ─────
function ShapeIcon({ kind, size }) {
  const s = Math.round(size * 0.46);
  const stroke = 'rgba(255,255,255,0.85)';
  const sw = Math.max(1.5, size * 0.012);
  if (kind === 'spark') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M16 3 C16 11, 18 16, 29 16 C18 16, 16 21, 16 29 C16 21, 14 16, 3 16 C14 16, 16 11, 16 3 Z"
            fill={stroke} />
    </svg>
  );
  if (kind === 'grid') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth={sw} />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth={sw} />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke={stroke} strokeWidth={sw} />
      <rect x="18" y="18" width="10" height="10" rx="2" fill={stroke} />
    </svg>
  );
  if (kind === 'arrow') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M8 24 L24 8" stroke={stroke} strokeWidth={sw * 1.3} strokeLinecap="round" />
      <path d="M12 8 L24 8 L24 20" stroke={stroke} strokeWidth={sw * 1.3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (kind === 'orbit') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="16" rx="13" ry="6" stroke={stroke} strokeWidth={sw} transform="rotate(-25 16 16)" />
      <circle cx="16" cy="16" r="4" fill={stroke} />
    </svg>
  );
  if (kind === 'plus') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M16 4 V28 M4 16 H28" stroke={stroke} strokeWidth={sw * 1.6} strokeLinecap="round" />
    </svg>
  );
  if (kind === 'serif') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <text x="16" y="25" fontFamily="Georgia, serif" fontStyle="italic" fontSize="26" fill={stroke} textAnchor="middle" fontWeight="500">К</text>
    </svg>
  );
  if (kind === 'wave') return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <path d="M3 16 Q9 8, 16 16 T29 16" stroke={stroke} strokeWidth={sw * 1.3} fill="none" strokeLinecap="round" />
    </svg>
  );
  return null;
}

function Shapes() {
  const refs = useRef([]);
  useEffect(() => {
    let mx = 0, my = 0, raf;
    const onMove = (e) => { mx = (e.clientX / innerWidth - 0.5) * 2; my = (e.clientY / innerHeight - 0.5) * 2; };
    const tick = () => {
      refs.current.forEach((el, i) => {
        if (!el) return;
        const s = SHAPES[i];
        const tx = mx * 30 * s.depth * 8;
        const ty = my * 20 * s.depth * 8;
        el.style.transform = `translate(${tx}px, ${ty}px) rotate(${s.rot}deg)`;
      });
      raf = requestAnimationFrame(tick);
    };
    addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="kmp-shapes">
      {SHAPES.map((s, i) => (
        <div key={i}
          ref={(el) => refs.current[i] = el}
          className="kmp-shape"
          style={{
            left: s.x, top: s.y,
            width: s.w, height: s.h,
            borderRadius: s.r,
            opacity: s.op,
            transform: `rotate(${s.rot}deg)`,
            transition: 'transform .35s cubic-bezier(.2,.8,.25,1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
          <div className="kmp-shape-icon" style={{ transform: `rotate(${-s.rot}deg)` }}>
            <ShapeIcon kind={s.icon} size={s.w} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ───── Logo mark ─────
function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <g fill="rgba(255,255,255,0.95)">
        <rect x="12.5" y="2.5" width="7" height="7" rx="1" transform="rotate(45 16 6)"/>
        <rect x="2.5" y="12.5" width="7" height="7" rx="1" transform="rotate(45 6 16)"/>
        <rect x="22.5" y="12.5" width="7" height="7" rx="1" transform="rotate(45 26 16)"/>
        <rect x="12.5" y="22.5" width="7" height="7" rx="1" transform="rotate(45 16 26)"/>
      </g>
    </svg>
  );
}

// ───── Lang switcher ─────
function FlagSVG({ code }) {
  // Small rounded flag pills, viewBox 18x12
  if (code === 'ru') return (
    <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true">
      <rect width="18" height="12" fill="#fff"/>
      <rect y="4" width="18" height="4" fill="#0039A6"/>
      <rect y="8" width="18" height="4" fill="#D52B1E"/>
    </svg>
  );
  if (code === 'en') return (
    <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true">
      <rect width="18" height="12" fill="#012169"/>
      <path d="M0,0 L18,12 M18,0 L0,12" stroke="#fff" strokeWidth="2.4"/>
      <path d="M0,0 L18,12" stroke="#C8102E" strokeWidth="0.9" transform="translate(-0.5 0.4)"/>
      <path d="M18,0 L0,12" stroke="#C8102E" strokeWidth="0.9" transform="translate(0.5 0.4)"/>
      <path d="M9,0 V12 M0,6 H18" stroke="#fff" strokeWidth="3.4"/>
      <path d="M9,0 V12 M0,6 H18" stroke="#C8102E" strokeWidth="2"/>
    </svg>
  );
  if (code === 'es') return (
    <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true">
      <rect width="18" height="12" fill="#AA151B"/>
      <rect y="3" width="18" height="6" fill="#F1BF00"/>
    </svg>
  );
  return null;
}

function LangSwitch() {
  const { lang, setLang } = window.useT();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const current = window.LANGS.find(l => l.id === lang) || window.LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={`kmp-lang ${open ? 'is-open' : ''}`} ref={wrapRef}>
      <button
        type="button"
        className="kmp-lang-trigger"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="kmp-lang-flag"><FlagSVG code={current.id} /></span>
        <span className="kmp-lang-label">{current.label}</span>
        <svg className="kmp-lang-caret" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
          <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="kmp-lang-menu" role="listbox">
        {window.LANGS.map(l => (
          <button
            key={l.id}
            type="button"
            role="option"
            aria-selected={lang === l.id}
            className={`kmp-lang-option ${lang === l.id ? 'is-active' : ''}`}
            onClick={() => { setLang(l.id); setOpen(false); }}
          >
            <span className="kmp-lang-flag"><FlagSVG code={l.id} /></span>
            <span className="kmp-lang-label">{l.label}</span>
            {lang === l.id && (
              <svg className="kmp-lang-check" viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
                <path d="M3 7.5 L6 10.5 L11 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ───── Nav ─────
function Nav() {
  const { t } = window.useT();
  return (
    <nav className="kmp-nav">
      <a href="#top" className="kmp-nav-logo" aria-label="Component Studio">
        <img src="assets/Logo.svg" alt="Компонент — Студия дизайна" className="kmp-nav-logo-img" />
      </a>
      <div className="kmp-nav-pill">
        <a href="#works">{t('nav.projects')}</a>
        <a href="#services">{t('nav.services')}</a>
        <a href="#process">{t('nav.process')}</a>
        <a href="#faq">{t('nav.faq')}</a>
      </div>
      <div className="kmp-nav-right">
        <LangSwitch />
        <Magnetic strength={0.35}><a href="#contact" className="kmp-nav-cta">{t('nav.cta')}</a></Magnetic>
      </div>
    </nav>
  );
}

// ───── Hero ─────
function Hero() {
  const { t, dict } = window.useT();
  return (
    <section className="kmp-hero" id="top">
      <Shapes />
      <div className="kmp-hero-content">
        <h1 className="kmp-hero-title">
          <span className="row"><span>{t('hero.titleL1')}</span></span>
          <span className="row"><span>{t('hero.titleL2')}</span></span>
        </h1>
        <p className="kmp-hero-sub">{t('hero.sub')}</p>
        <div className="kmp-hero-actions">
          <Magnetic strength={0.3}>
            <a href="#contact" className="kmp-btn-primary">
              {t('hero.ctaStart')}
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

// ───── Marquee ─────
function Marquee() {
  const { dict } = window.useT();
  const items = dict.marquee.map((label, i) => ({ t: label, o: i % 2 === 1 }));
  const repeat = [...items, ...items, ...items];
  return (
    <div className="kmp-marquee">
      <div className="kmp-marquee-track">
        {repeat.map((it, i) => <span key={i} className={`kmp-marquee-item ${it.o ? 'outline' : ''}`}>{it.t}</span>)}
      </div>
    </div>
  );
}

// ───── Projects ─────
const PROJECTS = [
  { id: 'phodo',      name: 'Phodo',                     cover: 'cases/phodo.webp',           cats: ['uxui', 'presentations'],     year: '2025', shape: 'wide',   swatch: '#7B5BFF' },
  { id: 'kovry',      name: 'Сибирские ковры',           cover: 'cases/sibirskie-kovry.webp', cats: ['landings'],                  year: '2025', shape: 'square', swatch: '#C8412B' },
  { id: 'lamoda',     name: 'Lamoda · Продавец',         cover: 'cases/lamoda.png',           cats: ['uxui', 'presentations'],     year: '2025', shape: 'square', swatch: '#FF4F1F' },
  { id: 'colorforce', name: 'ColorForce',                cover: 'cases/colorforce.png',       cats: ['landings'],                  year: '2025', shape: 'wide',   swatch: '#7FA8FF' },
  { id: 'misis',      name: 'МИСИС · Mini App',          cover: 'cases/misis.png',            cats: ['uxui', 'presentations'],     year: '2025', shape: 'full',   swatch: '#2B5AE0' },
  { id: 'innovators', name: 'Академия инноваторов',      cover: 'cases/innovators.png',       cats: ['identity', 'presentations'], year: '2025', shape: 'wide',   swatch: '#8FD9E0' },
  { id: 'mpit',       name: 'МПИТ',                      cover: 'cases/mpit.png',             cats: ['identity', 'presentations'], year: '2025', shape: 'square', swatch: '#7B5BFF' },
  { id: 'course',     name: 'Онлайн-курс',               cover: 'cases/online-course.png',    cats: ['identity', 'presentations'], year: '2025', shape: 'square', swatch: '#5B3CE0' },
  { id: 'quantum',    name: 'Samarkand Quantum Centre',  cover: 'cases/quantum.png',          cats: ['identity'],                  year: '2025', shape: 'square', swatch: '#8B6BFF' },
  { id: 'easysale',   name: 'EasySale',                  cover: 'cases/easysale.png',         cats: ['presentations'],             year: '2025', shape: 'square', swatch: '#32C766' },
];

const PROJECT_FILTER_IDS = ['all', 'uxui', 'landings', 'identity', 'presentations'];

function Projects({ density }) {
  const { t, dict } = window.useT();
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  useEffect(() => { setShowAll(false); }, [filter]);
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));
  return (
    <section className="kmp-section" id="works">
      <div className="kmp-sec-head">
        <h2>{t('projects.titleA')} <span>{t('projects.titleB')}</span></h2>
      </div>
      <div className="kmp-proj-filters">
        {PROJECT_FILTER_IDS.map(id => {
          const count = id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cats.includes(id)).length;
          return (
            <button
              key={id}
              className={`kmp-proj-filter ${filter === id ? 'is-active' : ''}`}
              onClick={() => setFilter(id)}
            >
              <span>{dict.projects.filters[id]}</span>
              <sup>{String(count).padStart(2,'0')}</sup>
            </button>
          );
        })}
      </div>
      <div className={`kmp-projects-grid is-bento ${density === 'compact' ? 'is-compact' : ''} ${showAll ? 'is-expanded' : 'is-collapsed'}`}>
        {list.map(p => (
          <a key={p.id} href={`Case.html?id=${p.id}`} className={`kmp-project-card shape-${p.shape}`}>
            <div className="stripe" style={{ '--swatch': p.swatch }}></div>
            <div className="cover" style={{ backgroundImage: `url(${p.cover})` }}></div>
            <div className="scrim"></div>
            <div className="label">
              <div className="label-l">
                <span className="tag">{p.cats.map(c => dict.projects.cats[c]).join(' · ')} · {p.year}</span>
                <span className="name">{dict.projects.names[p.id] || p.name}</span>
              </div>
              <div className="label-r">→</div>
            </div>
          </a>
        ))}
      </div>
      {!showAll && list.length > 3 && (
        <button type="button" className="kmp-projects-more" onClick={() => setShowAll(true)}>
          {dict.projects.showMore}
        </button>
      )}
    </section>
  );
}

// ───── Services ─────
const SERVICE_META = [
  { num: '01', glyph: 'asterisk', preview: 'identity' },
  { num: '02', glyph: 'square',   preview: 'web' },
  { num: '03', glyph: 'ui',       preview: 'uxui' },
  { num: '04', glyph: 'code',     preview: 'dev' },
  { num: '05', glyph: 'chat',     preview: 'smm' },
  { num: '06', glyph: 'link',     preview: 'outsource' },
  { num: '07', glyph: 'sparkle',  preview: 'ai' },
];
function Glyph({ kind }) {
  const stroke = 'currentColor';
  if (kind === 'asterisk') return <svg width="28" height="28" viewBox="0 0 32 32"><g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round"><line x1="16" y1="4" x2="16" y2="28"/><line x1="4" y1="16" x2="28" y2="16"/><line x1="7.5" y1="7.5" x2="24.5" y2="24.5"/><line x1="7.5" y1="24.5" x2="24.5" y2="7.5"/></g></svg>;
  if (kind === 'square') return <svg width="28" height="28" viewBox="0 0 32 32"><rect x="5" y="5" width="22" height="22" rx="3" stroke={stroke} strokeWidth="2" fill="none"/><rect x="11" y="11" width="10" height="10" rx="1.5" fill={stroke}/></svg>;
  if (kind === 'ui') return <svg width="28" height="28" viewBox="0 0 32 32"><g stroke={stroke} strokeWidth="2" fill="none"><rect x="5" y="5" width="22" height="22" rx="3"/><line x1="5" y1="11" x2="27" y2="11"/></g><rect x="8.5" y="14.5" width="7" height="3" rx="1" fill={stroke}/><rect x="8.5" y="20" width="11" height="2" rx="1" fill={stroke} opacity="0.6"/></svg>;
  if (kind === 'code') return <svg width="28" height="28" viewBox="0 0 32 32"><g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="11,10 5,16 11,22"/><polyline points="21,10 27,16 21,22"/><line x1="18" y1="7" x2="14" y2="25"/></g></svg>;
  if (kind === 'chat') return <svg width="28" height="28" viewBox="0 0 32 32"><path d="M5 8 a3 3 0 0 1 3 -3 h16 a3 3 0 0 1 3 3 v12 a3 3 0 0 1 -3 3 h-10 l-6 5 v-5 h-0 a3 3 0 0 1 -3 -3 z" stroke={stroke} strokeWidth="2" fill="none" strokeLinejoin="round"/><circle cx="12" cy="14" r="1.5" fill={stroke}/><circle cx="16" cy="14" r="1.5" fill={stroke}/><circle cx="20" cy="14" r="1.5" fill={stroke}/></svg>;
  if (kind === 'link') return <svg width="28" height="28" viewBox="0 0 32 32"><g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round"><path d="M13 10 h-3 a6 6 0 0 0 0 12 h3"/><path d="M19 22 h3 a6 6 0 0 0 0 -12 h-3"/><line x1="11" y1="16" x2="21" y2="16"/></g></svg>;
  if (kind === 'sparkle') return <svg width="28" height="28" viewBox="0 0 32 32"><g fill={stroke}><path d="M16 3 C16 11, 18 16, 29 16 C18 16, 16 21, 16 29 C16 21, 14 16, 3 16 C14 16, 16 11, 16 3 Z"/><circle cx="25" cy="7" r="1.5" opacity="0.7"/><circle cx="7" cy="26" r="1.2" opacity="0.6"/></g></svg>;
}

// Stylized preview "photos" — small mockups demonstrating each discipline
function ServicePreview({ kind }) {
  if (kind === 'identity') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="idBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1340"/><stop offset="1" stopColor="#3b2a8a"/>
        </linearGradient>
        <linearGradient id="idCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f0ff"/><stop offset="1" stopColor="#dcd2ff"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#idBg)"/>
      {/* faint grid */}
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <line x1="0" y1="55" x2="320" y2="55"/><line x1="0" y1="110" x2="320" y2="110"/>
        <line x1="0" y1="165" x2="320" y2="165"/><line x1="80" y1="0" x2="80" y2="220"/>
        <line x1="160" y1="0" x2="160" y2="220"/><line x1="240" y1="0" x2="240" y2="220"/>
      </g>
      {/* back business card */}
      <g transform="translate(165 38) rotate(8)">
        <rect width="130" height="80" rx="6" fill="#0c0826" stroke="rgba(255,255,255,0.2)"/>
        <g stroke="#b39bff" strokeWidth="1.4" fill="none" strokeLinecap="round" transform="translate(14 22)">
          <line x1="0" y1="18" x2="36" y2="18"/><line x1="18" y1="0" x2="18" y2="36"/>
          <line x1="5" y1="5" x2="31" y2="31"/><line x1="5" y1="31" x2="31" y2="5"/>
        </g>
        <rect x="64" y="28" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.5)"/>
        <rect x="64" y="36" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>
        <rect x="64" y="50" width="54" height="2" rx="1" fill="rgba(255,255,255,0.25)"/>
      </g>
      {/* front business card */}
      <g transform="translate(28 92) rotate(-5)">
        <rect width="160" height="100" rx="7" fill="url(#idCard)"/>
        <g stroke="#2a1a6a" strokeWidth="2" fill="none" strokeLinecap="round" transform="translate(18 24)">
          <line x1="0" y1="22" x2="44" y2="22"/><line x1="22" y1="0" x2="22" y2="44"/>
          <line x1="6" y1="6" x2="38" y2="38"/><line x1="6" y1="38" x2="38" y2="6"/>
        </g>
        <text x="74" y="38" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#1a0f4a">Компонент</text>
        <rect x="74" y="48" width="60" height="2.5" rx="1" fill="#5a48a8"/>
        <rect x="74" y="64" width="46" height="2" rx="1" fill="#5a48a8" opacity="0.6"/>
        <rect x="74" y="72" width="56" height="2" rx="1" fill="#5a48a8" opacity="0.6"/>
        <rect x="74" y="80" width="40" height="2" rx="1" fill="#5a48a8" opacity="0.6"/>
      </g>
      <text x="14" y="208" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">IDENTITY · LOGOMARK · STATIONERY</text>
    </svg>
  );
  if (kind === 'web') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="webBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#241656"/><stop offset="1" stopColor="#4a2e9e"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#webBg)"/>
      {/* browser chrome */}
      <g transform="translate(22 24)">
        <rect width="276" height="172" rx="10" fill="#0e0a2a" stroke="rgba(255,255,255,0.18)"/>
        <rect width="276" height="22" rx="10" fill="#1a1244"/>
        <rect y="12" width="276" height="10" fill="#1a1244"/>
        <circle cx="12" cy="11" r="3" fill="#ff6f7a"/>
        <circle cx="24" cy="11" r="3" fill="#ffcc66"/>
        <circle cx="36" cy="11" r="3" fill="#7cdc8f"/>
        <rect x="60" y="6" width="170" height="10" rx="5" fill="rgba(255,255,255,0.08)"/>
        <rect x="68" y="9" width="60" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
        {/* page content */}
        <g transform="translate(16 38)">
          <rect width="120" height="9" rx="2" fill="rgba(255,255,255,0.9)"/>
          <rect y="14" width="100" height="9" rx="2" fill="rgba(255,255,255,0.9)"/>
          <rect y="28" width="80" height="9" rx="2" fill="#b39bff"/>
          <rect y="50" width="160" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
          <rect y="58" width="140" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
          <rect y="66" width="150" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
          <rect y="82" width="64" height="20" rx="10" fill="#b39bff"/>
          <rect x="72" y="82" width="64" height="20" rx="10" fill="none" stroke="rgba(255,255,255,0.3)"/>
        </g>
        {/* hero panel */}
        <g transform="translate(176 38)">
          <rect width="84" height="110" rx="6" fill="rgba(179,155,255,0.18)" stroke="rgba(179,155,255,0.4)"/>
          <circle cx="42" cy="44" r="22" fill="none" stroke="#b39bff" strokeWidth="1.5"/>
          <circle cx="42" cy="44" r="8" fill="#b39bff"/>
          <rect x="14" y="78" width="56" height="3" rx="1.5" fill="rgba(255,255,255,0.6)"/>
          <rect x="20" y="86" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.4)"/>
        </g>
      </g>
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">WEB · UI · PRODUCT DESIGN</text>
    </svg>
  );
  if (kind === 'type') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="typeBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f0ff"/><stop offset="1" stopColor="#dcd2ff"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#typeBg)"/>
      {/* baseline guides */}
      <g stroke="#7a5ed8" strokeWidth="0.5" opacity="0.35">
        <line x1="0" y1="40" x2="320" y2="40"/>
        <line x1="0" y1="180" x2="320" y2="180" strokeDasharray="2 3"/>
        <line x1="0" y1="60" x2="320" y2="60" strokeDasharray="2 3"/>
      </g>
      {/* big Aa */}
      <text x="20" y="178" fontFamily="Georgia, 'Times New Roman', serif" fontSize="170" fontWeight="700" fill="#1a0f4a" fontStyle="italic">Aa</text>
      {/* tick marks */}
      <g fill="#5a48a8">
        <rect x="14" y="38" width="6" height="1.2"/><rect x="14" y="58" width="6" height="1.2"/>
        <rect x="14" y="178" width="6" height="1.2"/>
      </g>
      {/* specimen lines */}
      <g fontFamily="Georgia, serif" fill="#3a2680">
        <text x="195" y="58" fontSize="11" fontWeight="600">Komponent Serif</text>
        <text x="195" y="74" fontSize="9" opacity="0.7">Display · 12 styles</text>
        <text x="195" y="100" fontSize="14">Quick brown</text>
        <text x="195" y="118" fontSize="10" fontStyle="italic" opacity="0.85">fox jumps over</text>
        <text x="195" y="134" fontSize="9" opacity="0.65">the lazy dog —</text>
      </g>
      <g fontFamily="ui-monospace, monospace" fill="#5a48a8" fontSize="8" opacity="0.7">
        <text x="195" y="158">a b c d e f g h i j</text>
        <text x="195" y="170">0 1 2 3 4 5 6 7 8 9</text>
      </g>
      <text x="14" y="210" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5a48a8" letterSpacing="0.1em" opacity="0.7">TYPE · LETTERING · TYPESETTING</text>
    </svg>
  );
  if (kind === 'motion') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="motionBg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#3b2a8a"/><stop offset="1" stopColor="#0e0828"/>
        </radialGradient>
      </defs>
      <rect width="320" height="220" fill="url(#motionBg)"/>
      {/* timeline at bottom */}
      <g transform="translate(0 178)">
        <rect x="20" y="14" width="280" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
        <rect x="20" y="14" width="160" height="3" rx="1.5" fill="#b39bff"/>
        <circle cx="180" cy="15.5" r="5" fill="#fff"/>
        <g fill="rgba(255,255,255,0.4)" fontFamily="ui-monospace, monospace" fontSize="8">
          <text x="20" y="32">00:00</text><text x="280" y="32">00:12</text>
        </g>
      </g>
      {/* concentric pulses */}
      <g transform="translate(160 92)" fill="none" stroke="#b39bff">
        <circle r="60" opacity="0.15" strokeWidth="1"/>
        <circle r="44" opacity="0.3" strokeWidth="1"/>
        <circle r="30" opacity="0.55" strokeWidth="1.5"/>
        <circle r="18" opacity="0.85" strokeWidth="2"/>
      </g>
      <circle cx="160" cy="92" r="8" fill="#fff"/>
      {/* motion trail dots */}
      <g fill="#fff">
        <circle cx="50" cy="60" r="2.5" opacity="0.2"/>
        <circle cx="72" cy="58" r="2.8" opacity="0.35"/>
        <circle cx="94" cy="62" r="3" opacity="0.55"/>
        <circle cx="116" cy="72" r="3.2" opacity="0.75"/>
        <circle cx="138" cy="84" r="3.4" opacity="0.95"/>
      </g>
      {/* easing curve */}
      <path d="M 30 150 C 110 150, 110 50, 280 50" stroke="rgba(179,155,255,0.5)" strokeWidth="1.2" fill="none" strokeDasharray="3 3"/>
      <text x="14" y="210" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">MOTION · KINETIC · MICRO-INTERACTIONS</text>
    </svg>
  );
  if (kind === 'uxui') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="uxBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f1450"/><stop offset="1" stopColor="#3d2a8f"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#uxBg)"/>
      {/* wireframe phones */}
      <g transform="translate(28 22)">
        <rect width="100" height="176" rx="14" fill="#0e0a2a" stroke="rgba(255,255,255,0.2)"/>
        <rect x="38" y="6" width="24" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
        <rect x="10" y="22" width="80" height="10" rx="2" fill="rgba(255,255,255,0.85)"/>
        <rect x="10" y="38" width="56" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
        <rect x="10" y="48" width="40" height="4" rx="2" fill="rgba(255,255,255,0.35)"/>
        <rect x="10" y="64" width="80" height="46" rx="6" fill="rgba(179,155,255,0.25)" stroke="rgba(179,155,255,0.5)"/>
        <circle cx="26" cy="87" r="9" fill="#b39bff"/>
        <rect x="42" y="78" width="40" height="3.5" rx="1.5" fill="rgba(255,255,255,0.7)"/>
        <rect x="42" y="86" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.45)"/>
        <rect x="42" y="94" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.35)"/>
        <rect x="10" y="120" width="38" height="14" rx="7" fill="#b39bff"/>
        <rect x="52" y="120" width="38" height="14" rx="7" fill="none" stroke="rgba(255,255,255,0.3)"/>
        <rect x="10" y="146" width="80" height="18" rx="9" fill="rgba(255,255,255,0.08)"/>
        <rect x="18" y="152" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.5)"/>
        <rect x="18" y="158" width="28" height="2.5" rx="1" fill="rgba(255,255,255,0.3)"/>
      </g>
      {/* annotations panel */}
      <g transform="translate(148 30)">
        <rect width="148" height="160" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)"/>
        <text x="12" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.1em">FLOW · 03/12</text>
        <g stroke="#b39bff" strokeWidth="1.2" fill="none">
          <rect x="12" y="34" width="36" height="22" rx="3"/>
          <rect x="56" y="34" width="36" height="22" rx="3"/>
          <rect x="100" y="34" width="36" height="22" rx="3"/>
          <line x1="48" y1="45" x2="56" y2="45" markerEnd="url(#arr)"/>
          <line x1="92" y1="45" x2="100" y2="45" markerEnd="url(#arr)"/>
        </g>
        <defs>
          <marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <polygon points="0,0 5,2.5 0,5" fill="#b39bff"/>
          </marker>
        </defs>
        <rect x="12" y="72" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.6)"/>
        <rect x="12" y="80" width="100" height="2.5" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="12" y="86" width="86" height="2.5" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="12" y="92" width="72" height="2.5" rx="1" fill="rgba(255,255,255,0.3)"/>
        <g transform="translate(12 108)">
          <circle cx="6" cy="6" r="5" fill="#b39bff"/>
          <circle cx="22" cy="6" r="5" fill="rgba(255,255,255,0.35)"/>
          <circle cx="38" cy="6" r="5" fill="rgba(255,255,255,0.18)"/>
          <circle cx="54" cy="6" r="5" fill="rgba(255,255,255,0.18)"/>
        </g>
        <rect x="12" y="128" width="124" height="18" rx="4" fill="rgba(179,155,255,0.18)"/>
        <rect x="20" y="134" width="60" height="2.5" rx="1" fill="rgba(255,255,255,0.55)"/>
        <rect x="20" y="140" width="40" height="2.5" rx="1" fill="rgba(255,255,255,0.35)"/>
      </g>
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">UX/UI · FLOWS · PROTOTYPES</text>
    </svg>
  );
  if (kind === 'dev') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="devBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e0a2a"/><stop offset="1" stopColor="#241656"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#devBg)"/>
      {/* editor */}
      <g transform="translate(20 22)">
        <rect width="280" height="176" rx="10" fill="#0a0820" stroke="rgba(255,255,255,0.18)"/>
        <rect width="280" height="22" rx="10" fill="#13102e"/>
        <rect y="12" width="280" height="10" fill="#13102e"/>
        <g transform="translate(10 8)">
          <circle cx="0" cy="3" r="3" fill="#ff6f7a"/>
          <circle cx="12" cy="3" r="3" fill="#ffcc66"/>
          <circle cx="24" cy="3" r="3" fill="#7cdc8f"/>
        </g>
        <text x="124" y="14" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">app.tsx</text>
        {/* gutter */}
        <rect x="0" y="22" width="22" height="154" fill="rgba(0,0,0,0.25)"/>
        <g fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="end">
          <text x="17" y="38">1</text><text x="17" y="50">2</text><text x="17" y="62">3</text>
          <text x="17" y="74">4</text><text x="17" y="86">5</text><text x="17" y="98">6</text>
          <text x="17" y="110">7</text><text x="17" y="122">8</text><text x="17" y="134">9</text>
        </g>
        {/* code lines */}
        <g transform="translate(30 30)">
          <rect width="42" height="6" rx="1" fill="#c084fc"/><rect x="48" width="36" height="6" rx="1" fill="#7cdc8f"/><rect x="88" width="20" height="6" rx="1" fill="#ffcc66"/>
          <rect y="12" x="10" width="60" height="6" rx="1" fill="#7da7ff"/><rect y="12" x="74" width="44" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
          <rect y="24" x="20" width="80" height="6" rx="1" fill="#c084fc"/><rect y="24" x="104" width="24" height="6" rx="1" fill="#ffcc66"/>
          <rect y="36" x="30" width="50" height="6" rx="1" fill="#7cdc8f"/><rect y="36" x="84" width="40" height="6" rx="1" fill="rgba(255,255,255,0.4)"/>
          <rect y="48" x="20" width="36" height="6" rx="1" fill="#7da7ff"/><rect y="48" x="60" width="56" height="6" rx="1" fill="rgba(255,255,255,0.4)"/>
          <rect y="60" x="10" width="44" height="6" rx="1" fill="#c084fc"/>
          <rect y="72" width="60" height="6" rx="1" fill="#7cdc8f"/><rect y="72" x="66" width="36" height="6" rx="1" fill="#ffcc66"/>
          <rect y="84" x="10" width="80" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
          <rect y="96" x="20" width="56" height="6" rx="1" fill="#7da7ff"/><rect y="96" x="80" width="24" height="6" rx="1" fill="#c084fc"/>
        </g>
        {/* terminal */}
        <rect x="0" y="138" width="280" height="38" fill="rgba(0,0,0,0.3)"/>
        <text x="32" y="152" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7cdc8f">$ npm run build</text>
        <text x="32" y="164" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">✓ compiled in 1.24s</text>
      </g>
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">CODE · BUILD · SHIP</text>
    </svg>
  );
  if (kind === 'smm') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="smmBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1a6a"/><stop offset="1" stopColor="#4a2ea8"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#smmBg)"/>
      {/* phone with feed */}
      <g transform="translate(28 14) rotate(-4)">
        <rect width="108" height="192" rx="16" fill="#0e0a2a" stroke="rgba(255,255,255,0.22)"/>
        <rect x="40" y="6" width="28" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        {/* story bar */}
        <g transform="translate(10 18)">
          <circle cx="10" cy="10" r="10" fill="none" stroke="#b39bff" strokeWidth="1.5"/>
          <circle cx="10" cy="10" r="7" fill="rgba(179,155,255,0.4)"/>
          <circle cx="32" cy="10" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
          <circle cx="54" cy="10" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
          <circle cx="76" cy="10" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
        </g>
        {/* post */}
        <g transform="translate(8 42)">
          <rect width="92" height="62" rx="6" fill="rgba(179,155,255,0.25)" stroke="rgba(179,155,255,0.4)"/>
          <circle cx="20" cy="32" r="11" fill="#b39bff"/>
          <rect x="38" y="22" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.85)"/>
          <rect x="38" y="30" width="32" height="2.5" rx="1" fill="rgba(255,255,255,0.5)"/>
          <rect x="38" y="38" width="46" height="2.5" rx="1" fill="rgba(255,255,255,0.5)"/>
        </g>
        <g transform="translate(8 112)">
          <rect width="92" height="48" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)"/>
          <rect x="8" y="8" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.85)"/>
          <rect x="8" y="16" width="60" height="2.5" rx="1" fill="rgba(255,255,255,0.5)"/>
          <rect x="8" y="22" width="50" height="2.5" rx="1" fill="rgba(255,255,255,0.5)"/>
          <g transform="translate(8 30)" fill="rgba(255,255,255,0.7)" fontFamily="ui-monospace, monospace" fontSize="7">
            <text>♥ 2.4k</text><text x="32">💬 184</text><text x="62">↗ 56</text>
          </g>
        </g>
      </g>
      {/* analytics card */}
      <g transform="translate(160 36)">
        <rect width="136" height="148" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)"/>
        <text x="12" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.1em">REACH · 7 DAYS</text>
        <text x="12" y="48" fontFamily="Onest, sans-serif" fontSize="28" fontWeight="700" fill="#fff">+248K</text>
        <text x="12" y="62" fontFamily="ui-monospace, monospace" fontSize="9" fill="#7cdc8f">▲ 32% vs last</text>
        {/* bar chart */}
        <g transform="translate(12 78)">
          <rect x="0"  y="28" width="10" height="22" rx="2" fill="rgba(179,155,255,0.4)"/>
          <rect x="14" y="20" width="10" height="30" rx="2" fill="rgba(179,155,255,0.55)"/>
          <rect x="28" y="24" width="10" height="26" rx="2" fill="rgba(179,155,255,0.5)"/>
          <rect x="42" y="14" width="10" height="36" rx="2" fill="rgba(179,155,255,0.65)"/>
          <rect x="56" y="8"  width="10" height="42" rx="2" fill="#b39bff"/>
          <rect x="70" y="18" width="10" height="32" rx="2" fill="rgba(179,155,255,0.55)"/>
          <rect x="84" y="6"  width="10" height="44" rx="2" fill="#fff"/>
          <rect x="98" y="12" width="10" height="38" rx="2" fill="rgba(179,155,255,0.6)"/>
        </g>
      </g>
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">SMM · CONTENT · GROWTH</text>
    </svg>
  );
  if (kind === 'outsource') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="outBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1340"/><stop offset="1" stopColor="#3a2680"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#outBg)"/>
      {/* team avatars + connection lines */}
      <g stroke="rgba(179,155,255,0.45)" strokeWidth="1.2" strokeDasharray="3 3" fill="none">
        <line x1="160" y1="105" x2="74" y2="56"/>
        <line x1="160" y1="105" x2="246" y2="56"/>
        <line x1="160" y1="105" x2="60" y2="160"/>
        <line x1="160" y1="105" x2="260" y2="160"/>
        <line x1="160" y1="105" x2="160" y2="178"/>
      </g>
      {/* central node = client */}
      <g transform="translate(160 105)">
        <circle r="36" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)"/>
        <circle r="22" fill="#b39bff"/>
        <text y="3" fontFamily="Onest, sans-serif" fontSize="11" fontWeight="700" fill="#1a0f4a" textAnchor="middle">YOU</text>
      </g>
      {/* role cards */}
      {[
        { x: 50, y: 36, role: 'Designer', dot: '#b39bff' },
        { x: 222, y: 36, role: 'Developer', dot: '#7cdc8f' },
        { x: 36, y: 140, role: 'Producer', dot: '#ffcc66' },
        { x: 236, y: 140, role: 'Strategist', dot: '#7da7ff' },
        { x: 136, y: 174, role: 'Motion', dot: '#ff7dcc' },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <rect width="50" height="22" rx="11" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)"/>
          <circle cx="11" cy="11" r="4" fill={p.dot}/>
          <text x="20" y="14.5" fontFamily="ui-monospace, monospace" fontSize="8" fill="#fff">{p.role}</text>
        </g>
      ))}
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">OUTSOURCING · SPRINTS · INTEGRATION</text>
    </svg>
  );
  if (kind === 'ai') return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="aiBg" cx="0.5" cy="0.4" r="0.8">
          <stop offset="0" stopColor="#5a3dc6"/><stop offset="1" stopColor="#0e0828"/>
        </radialGradient>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b39bff"/>
          <stop offset="0.5" stopColor="#ff7dcc"/>
          <stop offset="1" stopColor="#7da7ff"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill="url(#aiBg)"/>
      {/* generative noise dots */}
      <g fill="rgba(255,255,255,0.18)">
        {Array.from({ length: 30 }).map((_, i) => {
          const x = (i * 47) % 320;
          const y = (i * 31) % 220;
          const r = (i % 3) * 0.5 + 0.4;
          return <circle key={i} cx={x} cy={y} r={r}/>;
        })}
      </g>
      {/* video frame mock */}
      <g transform="translate(20 28)">
        <rect width="178" height="100" rx="8" fill="#0e0a2a" stroke="rgba(255,255,255,0.18)"/>
        {/* generative avatar silhouette */}
        <defs>
          <linearGradient id="aiAv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff7dcc"/><stop offset="1" stopColor="#7da7ff"/>
          </linearGradient>
        </defs>
        <circle cx="56" cy="42" r="22" fill="url(#aiAv)" opacity="0.85"/>
        <path d="M 28 92 Q 56 70 84 92 Z" fill="url(#aiAv)" opacity="0.85"/>
        {/* scan lines */}
        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          <line x1="0" y1="22" x2="178" y2="22"/>
          <line x1="0" y1="44" x2="178" y2="44"/>
          <line x1="0" y1="66" x2="178" y2="66"/>
          <line x1="0" y1="88" x2="178" y2="88"/>
        </g>
        <rect x="100" y="20" width="64" height="4" rx="2" fill="rgba(255,255,255,0.6)"/>
        <rect x="100" y="30" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.4)"/>
        <rect x="100" y="38" width="44" height="3" rx="1.5" fill="rgba(255,255,255,0.4)"/>
        <rect x="100" y="74" width="34" height="14" rx="7" fill="url(#aiGrad)"/>
        {/* play */}
        <circle cx="89" cy="52" r="14" fill="rgba(0,0,0,0.4)" stroke="#fff"/>
        <polygon points="84,46 84,58 96,52" fill="#fff"/>
        {/* REC dot */}
        <circle cx="12" cy="12" r="3" fill="#ff5577"/>
        <text x="20" y="15" fontFamily="ui-monospace, monospace" fontSize="8" fill="#ff5577" letterSpacing="0.1em">REC · GEN</text>
      </g>
      {/* prompt strip */}
      <g transform="translate(20 140)">
        <rect width="280" height="38" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)"/>
        <text x="14" y="16" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(255,255,255,0.5)" letterSpacing="0.08em">PROMPT</text>
        <text x="14" y="30" fontFamily="ui-monospace, monospace" fontSize="9" fill="#fff">a luminous brand spot, dusk light, slow dolly…</text>
        <circle cx="260" cy="19" r="10" fill="url(#aiGrad)"/>
        <path d="M 256 19 L 264 19 M 260 15 L 260 23" stroke="#fff" strokeWidth="1.4"/>
      </g>
      {/* sparkle */}
      <g transform="translate(216 56)" fill="url(#aiGrad)">
        <path d="M0 -16 C0 -8, 2 -2, 16 0 C2 0, 0 6, 0 16 C0 6, -2 0, -16 0 C-2 0, 0 -8, 0 -16 Z"/>
      </g>
      <text x="14" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">AI · GENERATIVE VIDEO · ADS</text>
    </svg>
  );
  return null;
}

function Services() {
  const { dict } = window.useT();
  const wrapRef = useRef(null);
  const previewRef = useRef(null);
  const [active, setActive] = useState(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    const tick = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;
      if (previewRef.current) {
        previewRef.current.style.setProperty('--px', posRef.current.x + 'px');
        previewRef.current.style.setProperty('--py', posRef.current.y + 'px');
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e, i) => {
    const rect = wrapRef.current.getBoundingClientRect();
    targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (active !== i) {
      posRef.current = { ...targetRef.current };
      setActive(i);
    }
  };

  return (
    <section className="kmp-section" id="services">
      <div className="kmp-sec-head">
        <h2>{dict.services.titleA} <span>{dict.services.titleB}</span></h2>
      </div>
      <div
        className="kmp-services"
        ref={wrapRef}
        onMouseLeave={() => setActive(null)}
      >
        {SERVICE_META.map((s, i) => {
          const item = dict.services.items[i];
          return (
            <div
              className="kmp-service"
              key={s.num}
              onMouseMove={(e) => handleMove(e, i)}
            >
              <span className="kmp-service-num">{s.num}</span>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <div className="kmp-service-glyph"><Glyph kind={s.glyph} /></div>
                <div className="kmp-service-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="kmp-service-arrow">→</div>
            </div>
          );
        })}
        <div
          ref={previewRef}
          className={`kmp-service-preview ${active !== null ? 'is-on' : ''}`}
          aria-hidden="true"
        >
          {SERVICE_META.map((s, i) => (
            <div
              key={s.num}
              className={`kmp-service-preview-tile ${active === i ? 'is-on' : ''}`}
            >
              <ServicePreview kind={s.preview} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───── About ─────
function About() {
  const { dict } = window.useT();
  return (
    <section className="kmp-section" id="about">
      <div className="kmp-sec-head">
        <h2>{dict.about.titleA} <span>{dict.about.titleB}</span></h2>
      </div>
      <div className="kmp-about">
        <div className="kmp-about-card">
          <p className="kmp-about-statement" dangerouslySetInnerHTML={{ __html: dict.about.statement }} />
          <div className="kmp-about-meta">
            {dict.about.meta.map((m, i) => (
              <div className="kmp-about-meta-item" key={i}>
                <div className="lbl">{m.lbl}</div>
                <div className="val">{m.val}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="kmp-about-stack">
          {dict.about.stats.map((s, i) => (
            <div className="kmp-about-stat" key={i}>
              <span className="num">{s.num}</span>
              <span className="lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───── Process ─────
const STEP_NUMS = ['01','02','03','04','05','06','07'];

// Color progression: bar nodes/fill go white → green; cards go red-orange → green.
const STEP_START = '#ffffff';
const CARD_START = '#ff5c1a';
const STEP_END   = '#22c55e';
function _hex(h) { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
function _toHex(rgb) { return '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join(''); }
function mixHex(a, b, t) {
  const A = _hex(a), B = _hex(b);
  return _toHex([A[0] + (B[0]-A[0])*t, A[1] + (B[1]-A[1])*t, A[2] + (B[2]-A[2])*t]);
}
function stepProgress(i, n) { return n > 1 ? i / (n - 1) : 0; }

function Process() {
  const { dict } = window.useT();
  const steps = dict.process.steps;
  const [active, setActive] = useState(0);
  const scrollerRef = useRef(null);

  // Mobile carousel: advance active when the active card's midpoint
  // scrolls past the viewport's left edge.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const mql = window.matchMedia('(max-width: 720px)');
    let rafId = 0;
    const onScroll = () => {
      if (!mql.matches) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cards = el.querySelectorAll('.kmp-process-step');
        const scrollLeft = el.scrollLeft;
        for (let i = 0; i < cards.length; i++) {
          const cardLeft = cards[i].offsetLeft;
          const cardWidth = cards[i].offsetWidth;
          // active while card midpoint is still right of the viewport's left edge
          if (cardLeft + cardWidth / 2 > scrollLeft) {
            setActive(i);
            return;
          }
        }
        setActive(cards.length - 1);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const fillPct = ((active + 1) / steps.length) * 100;
  return (
    <section className="kmp-section" id="process">
      <div className="kmp-sec-head">
        <h2>{dict.process.titleA} <span>{dict.process.titleB}</span></h2>
      </div>

      <div className="kmp-process-bar">
        <div className="kmp-process-bar-track">
          <div
            className="kmp-process-bar-fill"
            style={{ clipPath: `inset(0 ${100 - fillPct}% 0 0 round 999px)` }}
          ></div>
          {steps.map((s, i) => {
            const stepCol = mixHex(STEP_START, STEP_END, stepProgress(i, steps.length));
            return (
              <button
                key={i}
                className={`kmp-process-bar-node ${i <= active ? 'is-done' : ''} ${i === active ? 'is-active' : ''}`}
                style={{ left: `${(i / (steps.length - 1)) * 100}%`, '--step-color': stepCol }}
                onClick={() => setActive(i)}
                aria-label={s.t}
              >
                <span className="dot"></span>
                <span className="cap">{STEP_NUMS[i]}</span>
              </button>
            );
          })}
        </div>
        <div className="kmp-process-bar-meta">
          <span>{dict.process.stepLabel} {String(active + 1).padStart(2,'0')} / {String(steps.length).padStart(2,'0')}</span>
          <span>{Math.round(fillPct)}%</span>
        </div>
      </div>

      <div className="kmp-process" ref={scrollerRef}>
        {steps.map((s, i) => {
          const cardCol = mixHex(CARD_START, STEP_END, stepProgress(i, steps.length));
          return (
            <div
              className={`kmp-process-step ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
              key={i}
              style={{ '--card-color': cardCol }}
              onMouseEnter={() => setActive(i)}
            >
              <div className="step-row">
                <div className="step-num">{STEP_NUMS[i]}</div>
                <div className="step-dur">{s.dur}</div>
              </div>
              <h4>{s.t}</h4>
              <p dangerouslySetInnerHTML={{ __html: s.d }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ───── FAQ ─────
function FAQ() {
  const { dict } = window.useT();
  const items = dict.faq.items;
  const [open, setOpen] = useState(0);
  return (
    <section className="kmp-section" id="faq">
      <div className="kmp-sec-head">
        <h2>{dict.faq.titleA} <span>{dict.faq.titleB}</span></h2>
      </div>
      <div className="kmp-faq-list">
        {items.map((f, i) => (
          <div className={`kmp-faq-item ${open === i ? 'open' : ''}`} key={i}>
            <button className="kmp-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="num">{String(i+1).padStart(2,'0')}</span>
              <span dangerouslySetInnerHTML={{ __html: f.q }} />
              <span className="ico"></span>
            </button>
            <div className="kmp-faq-a"><div className="kmp-faq-a-inner"><p dangerouslySetInnerHTML={{ __html: f.a }} /></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ───── Contact ─────
function Contact() {
  const { dict } = window.useT();
  return (
    <section className="kmp-section kmp-contact-section" id="contact">
      <div className="kmp-footer-card kmp-contact">
        <h2 className="kmp-contact-title">{dict.contact.title}</h2>
        <p className="kmp-contact-sub" dangerouslySetInnerHTML={{ __html: dict.contact.sub }} />
        <form className="kmp-contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder={dict.contact.fields.email} />
          <input type="text" placeholder={dict.contact.fields.name} />
          <input type="text" placeholder={dict.contact.fields.promo} />
          <textarea rows="4" placeholder={dict.contact.fields.descr}></textarea>
          <button type="submit" className="kmp-contact-submit">{dict.contact.submit}</button>
          <p className="kmp-contact-legal" dangerouslySetInnerHTML={{ __html: dict.contact.legal }} />
        </form>
      </div>
    </section>
  );
}

// ───── Footer ─────
function Footer() {
  const { t, dict } = window.useT();
  return (
    <footer className="kmp-footer">
      <div className="kmp-footer-grid">
        <div className="kmp-footer-col kmp-footer-contact">
          <h5>{dict.footer.contact.title}</h5>
          {dict.footer.contact.rows.map((row, i) => (
            <div key={i} className="kmp-footer-contact-row">
              <span className="kmp-footer-contact-label">{row.label}</span>
              <a className="kmp-footer-contact-email" href={`mailto:${row.email}`}>{row.email}</a>
            </div>
          ))}
        </div>
        <div className="kmp-footer-col">
          <h5>{dict.footer.studio.title}</h5>
          <div className="kmp-footer-studio-block">
            {dict.footer.studio.lines.map((line, i) => (
              <p key={i} className="kmp-footer-studio-line">{line}</p>
            ))}
          </div>
          <div className="kmp-footer-studio-legal">
            {dict.footer.studio.legal.map((line, i) => (
              <p key={i} className="kmp-footer-studio-line">{line}</p>
            ))}
            {dict.footer.studio.privacy && (
              <a className="kmp-footer-privacy" href={dict.footer.studio.privacy.href}>
                {dict.footer.studio.privacy.label}
              </a>
            )}
          </div>
        </div>
        <div className="kmp-footer-col">
          <h5>{dict.footer.social.title}</h5>
          {dict.footer.social.links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
          ))}
        </div>
        <div className="kmp-footer-col">
          <h5>{dict.footer.navTitle}</h5>
          <a href="#works">{t('nav.projects')}</a>
          <a href="#services">{t('nav.services')}</a>
          <a href="#process">{t('nav.process')}</a>
        </div>
      </div>
      <div className="kmp-footer-bot">
        <span>{dict.footer.copyright}</span>
        <span>{dict.footer.madeIn}</span>
      </div>
    </footer>
  );
}

// ───── Cookie Banner ─────
function CookieBanner() {
  const { dict } = window.useT();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem('kmp-cookie-consent')) setVisible(true);
    } catch (e) { setVisible(true); }
  }, []);
  const dismiss = (choice) => {
    try { localStorage.setItem('kmp-cookie-consent', choice); } catch (e) {}
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className={`kmp-cookie ${visible ? 'is-in' : ''}`} role="dialog" aria-live="polite">
      <p className="kmp-cookie-text">{dict.cookies.text}</p>
      <div className="kmp-cookie-actions">
        <button type="button" className="kmp-cookie-btn kmp-cookie-btn-ghost" onClick={() => dismiss('declined')}>
          {dict.cookies.decline}
        </button>
        <button type="button" className="kmp-cookie-btn kmp-cookie-btn-primary" onClick={() => dismiss('accepted')}>
          {dict.cookies.accept}
        </button>
      </div>
    </div>
  );
}

// ───── App ─────
const ACCENTS = [
  { id: 'violet', val: { bg1: '#1a0d4a', bg2: '#4a1ea8', bg3: '#7a3dd6', glow: '#a87dff' } },
  { id: 'indigo', val: { bg1: '#0d1340', bg2: '#1e3da8', bg3: '#3d7ad6', glow: '#7da7ff' } },
  { id: 'magenta', val: { bg1: '#3d0d4a', bg2: '#a01e8c', bg3: '#d63d9c', glow: '#ff7dcc' } },
  { id: 'teal', val: { bg1: '#0d3a4a', bg2: '#1e8a8a', bg3: '#3dc6b8', glow: '#7df0d8' } },
  { id: 'midnight', val: { bg1: '#0a0a2a', bg2: '#2a2a5a', bg3: '#4a4a8a', glow: '#7d8dff' } },
];

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "violet",
  "density": "spacious"
}/*EDITMODE-END*/;

function App() {
  const { dict, lang, setLang } = window.useT();
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(DEFAULTS) : [DEFAULTS, () => {}];
  const accent = ACCENTS.find(a => a.id === tweaks.accent) || ACCENTS[0];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-1', accent.val.bg1);
    root.style.setProperty('--bg-2', accent.val.bg2);
    root.style.setProperty('--bg-3', accent.val.bg3);
    root.style.setProperty('--bg-glow', accent.val.glow);
    document.querySelector('.kmp-root').style.background = `
      radial-gradient(ellipse 80% 60% at 70% 30%, ${accent.val.glow}88, transparent 60%),
      radial-gradient(ellipse 70% 50% at 20% 80%, ${accent.val.bg3}80, transparent 60%),
      linear-gradient(180deg, ${accent.val.bg2} 0%, ${accent.val.bg1} 50%, #0d0530 100%)
    `;
  }, [accent]);

  const TP = window.TweaksPanel;
  const TS = window.TweakSection;
  const TR = window.TweakRadio;

  return (
    <div className="kmp-root">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Projects density={tweaks.density} />
      <Services />
      <Process />
      <Contact />
      <FAQ />
      <Footer />
      <CookieBanner />
      {TP && (
        <TP title="Tweaks">
          <TS title={dict.tweaks.lang}>
            <div style={{ display: 'flex', gap: 6 }}>
              {window.LANGS.map(l => (
                <button key={l.id} onClick={() => setLang(l.id)} style={{
                  flex: 1, height: 32, borderRadius: 6, cursor: 'pointer',
                  border: lang === l.id ? '1.5px solid #fff' : '1px solid rgba(255,255,255,0.15)',
                  background: lang === l.id ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.04)',
                  color: '#fff', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em',
                }}>{l.label}</button>
              ))}
            </div>
          </TS>
          <TS title={dict.tweaks.accent}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
              {ACCENTS.map(a => (
                <button key={a.id} onClick={() => setTweak('accent', a.id)} title={dict.tweaks.colors[a.id]} style={{
                  height: 36, borderRadius: 8,
                  border: tweaks.accent === a.id ? '2px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                  background: `linear-gradient(135deg, ${a.val.bg2}, ${a.val.glow})`,
                  cursor: 'pointer'
                }} />
              ))}
            </div>
            <p style={{ marginTop: 10, fontSize: 11, color: '#888' }}>{dict.tweaks.colors[accent.id]}</p>
          </TS>
          {TR && (
            <TS title={dict.tweaks.density}>
              <TR value={tweaks.density} onChange={(v) => setTweak('density', v)} options={[
                { value: 'spacious', label: dict.tweaks.spacious },
                { value: 'compact', label: dict.tweaks.compact },
              ]} />
            </TS>
          )}
        </TP>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
