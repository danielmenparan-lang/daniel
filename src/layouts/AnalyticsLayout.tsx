import type { LayoutProps } from './types'
import { DemoChrome, FakeChart, StatCards } from './shared'

type AnalyticsPayload = {
  kpis?: { label: string; value: string; delta?: string }[]
  series?: number[]
  funnel?: string[]
}

export function AnalyticsLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as AnalyticsPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-analytics">
        <header>
          <div>
            <h1>{demo.name} Analytics</h1>
            <p>
              {demo.nameHe} — {demo.tagline} · <code>GET /analytics/overview</code>
            </p>
          </div>
          <div className="pill-row">
            {['7d', '30d', '90d'].map((r, i) => (
              <button key={r} type="button" className={i === 1 ? 'active' : ''} onClick={mock.refresh}>
                {r}
              </button>
            ))}
          </div>
        </header>
        <StatCards items={data.kpis ?? []} />
        <div className="panel tall">
          <h3>Funnel · /analytics/funnel</h3>
          <FakeChart values={data.series} />
          <div className="funnel-labels">
            {(data.funnel ?? []).map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    </DemoChrome>
  )
}
