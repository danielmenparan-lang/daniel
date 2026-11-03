import type { Demo } from '../data/demos'
import type { MockApiState } from '../hooks/useMockApi'
import { ApiPanel, ApiStatusChip } from '../components/ApiPanel'

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
  mock,
  children,
}: {
  demo: Demo
  mock: MockApiState
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
        <div className="topbar-badges">
          <ApiStatusChip connection={mock.api.connection} loading={mock.loading} />
          <AiBadge tool={demo.builtWith} />
        </div>
      </header>
      <div className={`demo-stage${mock.loading ? ' is-loading' : ''}`}>
        {mock.loading ? (
          <div className="demo-loading" role="status">
            Connecting to mock API…
            <code>{mock.api.baseUrl}</code>
          </div>
        ) : (
          children
        )}
      </div>
      <ApiPanel
        api={mock.api}
        loading={mock.loading}
        refreshing={mock.refreshing}
        error={mock.error}
        lastRequest={mock.lastRequest}
        onRefresh={mock.refresh}
      />
      <footer className="demo-foot">
        <span>
          Demo #{demo.id} · {demo.layout} · mock API {mock.api.connection}
        </span>
        <span>
          {mock.api.endpoints.length} endpoints · {demo.features.join(' · ')}
        </span>
      </footer>
    </div>
  )
}

export function FakeChart({ values }: { values?: number[] }) {
  const bars = values?.length ? values : [42, 68, 55, 80, 47, 72, 90, 63, 78, 85]
  return (
    <div className="fake-chart" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} style={{ height: `${Math.max(8, Math.min(100, h))}%` }} />
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
