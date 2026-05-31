// Projects.html — full project index with the same tag filtering as the landing.
// Self-contained: does not load landing.jsx (which auto-mounts the whole site).
const { useState, useEffect } = React;

function PageLangSwitch() {
  const { lang, setLang } = window.useT();
  const [open, setOpen] = useState(false);
  const langs = window.LANGS || [{ id: 'ru', label: 'RU' }, { id: 'en', label: 'EN' }, { id: 'es', label: 'ES' }];
  const cur = langs.find(l => l.id === lang) || langs[0];
  return (
    <div className={`kmp-lang ${open ? 'is-open' : ''}`} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="kmp-lang-trigger" onClick={() => setOpen(o => !o)}>
        <span className="kmp-lang-label">{cur.label}</span>
        <svg className="kmp-lang-caret" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
          <path d="M3 4.5 L6 7.5 L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="kmp-lang-menu">
        {langs.map(l => (
          <button
            key={l.id}
            className={`kmp-lang-option ${lang === l.id ? 'is-active' : ''}`}
            onClick={() => { setLang(l.id); setOpen(false); }}
          ><span className="kmp-lang-label">{l.label}</span></button>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const { t, dict } = window.useT();
  const all = window.PROJECTS;
  const ids = window.PROJECT_FILTER_IDS;

  // Initial filter from ?filter= (validated against known ids)
  const initial = (() => {
    const p = new URLSearchParams(location.search).get('filter');
    return p && ids.includes(p) ? p : 'all';
  })();
  const [filter, setFilter] = useState(initial);

  // Keep the URL in sync so the view is shareable / survives reload
  useEffect(() => {
    const url = new URL(location.href);
    if (filter === 'all') url.searchParams.delete('filter');
    else url.searchParams.set('filter', filter);
    history.replaceState(null, '', url);
  }, [filter]);

  const list = filter === 'all' ? all : all.filter(p => p.cats.includes(filter));

  return (
    <div className="kmp-root">
      <div className="kpp-wrap">
        <nav className="kmp-nav kpp-nav">
          <a href="Landing.html" className="kpp-back">
            <span className="kpp-back-arrow">←</span>{dict.projects.home}
          </a>
          <a href="Landing.html" className="kmp-nav-logo" aria-label="Component Studio">
            <img src="assets/Logo.svg" alt="Компонент — Студия дизайна" className="kmp-nav-logo-img" />
          </a>
          <div className="kmp-nav-right">
            <PageLangSwitch />
            <a href="Landing.html#contact" className="kmp-nav-cta">{t('nav.cta')}</a>
          </div>
        </nav>

        <header className="kpp-head">
          <h1 className="kpp-title">{dict.projects.allTitleA} <span>{dict.projects.allTitleB}</span></h1>
        </header>

        <div className="kmp-proj-filters kpp-filters">
          {ids.map(id => {
            const count = id === 'all' ? all.length : all.filter(p => p.cats.includes(id)).length;
            return (
              <button
                key={id}
                className={`kmp-proj-filter ${filter === id ? 'is-active' : ''}`}
                onClick={() => setFilter(id)}
              >
                <span>{dict.projects.filters[id]}</span>
                <sup>{String(count).padStart(2, '0')}</sup>
              </button>
            );
          })}
        </div>

        <div className="kmp-projects-grid is-bento kpp-grid">
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
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProjectsPage />);
