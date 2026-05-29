// Claymorphic "photo" scenes for the Services hover previews.
// Matches the neumorphic clay style of the Identity / UX-UI photos:
// light-grey extruded panels, lime + purple accents, bold uppercase text.
const { useT: _sceneUseT } = window;

function Dot({ cls, s = 9 }) {
  return <span className={cls} style={{ width: s, height: s, borderRadius: '50%' }} />;
}

// 02 · Веб-дизайн — clay browser window
function WebScene() {
  return (
    <div className="kmp-service-scene">
      <div className="clay" style={{ width: 188, height: 150, borderRadius: 26, padding: 15, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Dot cls="clay-purple" />
          <Dot cls="clay-lime" />
          <Dot cls="clay-raise" />
          <div className="clay-inset" style={{ marginLeft: 6, flex: 1, height: 15, borderRadius: 8 }} />
        </div>
        <div style={{ display: 'flex', gap: 12, flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, justifyContent: 'center' }}>
            <div className="clay-bar" style={{ width: '85%', height: 10 }} />
            <div className="clay-bar" style={{ width: '60%', height: 10 }} />
            <div className="clay-lime" style={{ width: 66, height: 26, borderRadius: 13, marginTop: 4 }} />
          </div>
          <div className="clay-purple" style={{ width: 52, borderRadius: 16, display: 'grid', placeItems: 'center' }}>
            <div className="clay-knob" style={{ width: 22, height: 22, borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// 04 · Разработка — clay code editor
function DevScene() {
  const line = (w, cls) => <div className={cls} style={{ width: w, height: 8, borderRadius: 99 }} />;
  return (
    <div className="kmp-service-scene">
      <div className="clay" style={{ width: 190, height: 152, borderRadius: 26, padding: 15, display: 'flex', flexDirection: 'column', gap: 11 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Dot cls="clay-purple" s={8} />
          <Dot cls="clay-lime" s={8} />
          <Dot cls="clay-raise" s={8} />
          <span className="clay-lbl" style={{ marginLeft: 'auto', fontSize: 9, color: '#7c7c8a' }}>app.tsx</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 4 }}>
          <div style={{ display: 'flex', gap: 6 }}>{line(34, 'clay-purple')}{line(40, 'clay-bar')}</div>
          <div style={{ display: 'flex', gap: 6, paddingLeft: 14 }}>{line(52, 'clay-lime')}{line(26, 'clay-bar')}</div>
          <div style={{ display: 'flex', gap: 6, paddingLeft: 14 }}>{line(30, 'clay-bar')}{line(46, 'clay-purple')}</div>
          <div style={{ display: 'flex', gap: 6, paddingLeft: 28 }}>{line(44, 'clay-lime')}</div>
          <div style={{ display: 'flex', gap: 6 }}>{line(38, 'clay-purple')}{line(22, 'clay-bar')}</div>
        </div>
        <div className="clay-inset" style={{ marginTop: 'auto', height: 18, borderRadius: 8, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
          <span className="clay-lbl" style={{ fontSize: 8.5, color: '#8aa800', textTransform: 'none' }}>$ npm run build ✓</span>
        </div>
      </div>
    </div>
  );
}

// 05 · СММ — clay phone with feed
function SmmScene() {
  return (
    <div className="kmp-service-scene">
      <div className="clay" style={{ width: 116, height: 178, borderRadius: 28, padding: 12, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div className="clay-inset" style={{ width: 30, height: 5, borderRadius: 99, margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Dot cls="clay-lime" s={18} />
          <Dot cls="clay-raise" s={18} />
          <Dot cls="clay-raise" s={18} />
          <Dot cls="clay-raise" s={18} />
        </div>
        <div className="clay-purple" style={{ height: 50, borderRadius: 14, display: 'grid', placeItems: 'center' }}>
          <div className="clay-lime" style={{ width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
            <span style={{ fontSize: 15, lineHeight: 1 }}>♥</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="clay-bar" style={{ width: '80%', height: 7 }} />
          <div className="clay-bar" style={{ width: '55%', height: 7 }} />
        </div>
        <div className="clay-lime" style={{ marginTop: 'auto', height: 22, borderRadius: 11 }} />
      </div>
    </div>
  );
}

// 06 · Аутсорс — clay connected team nodes
function OutsourceScene() {
  const chips = [
    { x: 10, y: 14, cls: 'clay-lime' },
    { x: 132, y: 14, cls: 'clay-purple' },
    { x: 6, y: 122, cls: 'clay-purple' },
    { x: 138, y: 122, cls: 'clay-lime' },
  ];
  const lines = [
    { x: 52, y: 36, w: 46, r: -28 },
    { x: 142, y: 36, w: 46, r: 28 },
    { x: 50, y: 132, w: 48, r: 26 },
    { x: 140, y: 132, w: 48, r: -26 },
  ];
  return (
    <div className="kmp-service-scene">
      <div style={{ position: 'relative', width: 200, height: 170 }}>
        {lines.map((l, i) => (
          <div key={'l' + i} className="clay-inset" style={{ position: 'absolute', left: l.x, top: l.y, width: l.w, height: 6, borderRadius: 99, transform: `rotate(${l.r}deg)`, transformOrigin: 'center' }} />
        ))}
        <div className="clay-purple" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 64, height: 64, borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
          <span className="clay-lbl" style={{ color: '#fff', fontSize: 14 }}>ВЫ</span>
        </div>
        {chips.map((c, i) => (
          <div key={'c' + i} className="clay-raise" style={{ position: 'absolute', left: c.x, top: c.y, width: 54, height: 30, borderRadius: 15, display: 'grid', placeItems: 'center' }}>
            <div className={c.cls} style={{ width: 14, height: 14, borderRadius: '50%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 07 · AI-проекты — clay panel with gradient sparkle
function AiScene() {
  const star = "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)";
  return (
    <div className="kmp-service-scene">
      <div className="clay" style={{ width: 186, height: 150, borderRadius: 28, display: 'grid', placeItems: 'center', position: 'relative' }}>
        <div style={{ width: 92, height: 92, clipPath: star, background: 'linear-gradient(150deg, #8d70ff 0%, #b59bff 35%, #c9e24a 100%)', filter: 'drop-shadow(0 6px 10px rgba(60,40,160,0.45))' }} />
        <div className="clay-raise" style={{ position: 'absolute', right: 16, top: 16, width: 16, height: 16, borderRadius: '50%' }}>
          <div className="clay-lime" style={{ width: '100%', height: '100%', borderRadius: '50%', transform: 'scale(.55)' }} />
        </div>
        <span className="clay-lbl" style={{ position: 'absolute', bottom: 14, fontSize: 11, color: '#5e44d6' }}>AI · GEN</span>
      </div>
    </div>
  );
}

function ServiceScene({ kind }) {
  if (kind === 'web') return <WebScene />;
  if (kind === 'dev') return <DevScene />;
  if (kind === 'smm') return <SmmScene />;
  if (kind === 'outsource') return <OutsourceScene />;
  if (kind === 'ai') return <AiScene />;
  return null;
}

Object.assign(window, { ServiceScene });
