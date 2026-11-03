import type { Demo } from '../data/demos'

export function AiBadge({ tool }: { tool: string }) {
  return (
    <span className="ai-badge" title={`Built with ${tool}`}>
      <span className="ai-badge-dot" />
      Built with {tool}
    </span>
  )
}

export function DemoChrome({
  demo,
  children,
}: {
  demo: Demo
  children: React.ReactNode
}) {
  const p = demo.palette
  return (
    <div
      className="demo-chrome"
      style={
        {
          '--d-bg': p.bg,
          '--d-surface': p.surface,
          '--d-text': p.text,
          '--d-muted': p.muted,
          '--d-accent': p.accent,
          '--d-accent2': p.accent2,
        } as React.CSSProperties
      }
    >
      <header className="demo-topbar">
        <div className="demo-brand">
          <span className="demo-mark" aria-hidden />
          <strong>{demo.name}</strong>
        </div>
        <nav className="demo-nav" aria-label="Demo nav">
          <span>Overview</span>
          <span>Product</span>
          <span>Pricing</span>
        </nav>
        <AiBadge tool={demo.builtWith} />
      </header>
      <div className="demo-stage">{children}</div>
      <footer className="demo-foot">
        <span>
          Demo #{demo.id} · {demo.layout} · AI-generated UI pattern
        </span>
        <span>{demo.features.join(' · ')}</span>
      </footer>
    </div>
  )
}

export function FakeChart() {
  const bars = [42, 68, 55, 80, 47, 72, 90, 63, 78, 85]
  return (
    <div className="fake-chart" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} style={{ height: `${h}%` }} />
      ))}
    </div>
  )
}

export function StatCards({
  items,
}: {
  items: { label: string; value: string; delta?: string }[]
}) {
  return (
    <div className="stat-grid">
      {items.map((s) => (
        <div key={s.label} className="stat-card">
          <span className="stat-label">{s.label}</span>
          <strong className="stat-value">{s.value}</strong>
          {s.delta ? <span className="stat-delta">{s.delta}</span> : null}
        </div>
      ))}
    </div>
  )
}
