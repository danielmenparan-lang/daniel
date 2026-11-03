import type { LayoutProps } from './types'
import { DemoChrome, FakeChart, StatCards } from './shared'

type DashPayload = {
  kpis?: { label: string; value: string; delta?: string }[]
  series?: number[]
  activity?: string[]
}

export function DashboardLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as DashPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-dash">
        <aside className="dash-side">
          <strong>{demo.name}</strong>
          {['Overview', 'Reports', 'Team', 'Settings'].map((item) => (
            <button key={item} type="button" className={item === 'Overview' ? 'active' : ''}>
              {item}
            </button>
          ))}
        </aside>
        <main className="dash-main">
          <header>
            <div>
              <h1>{demo.nameHe}</h1>
              <p>
                {demo.tagline} · live mock from <code>{mock.api.baseUrl}</code>
              </p>
            </div>
            <button type="button" className="btn-primary" onClick={mock.refresh}>
              Refresh data
            </button>
          </header>
          <StatCards items={data.kpis ?? []} />
          <div className="dash-panels">
            <div className="panel">
              <h3>Trend · /metrics/timeseries</h3>
              <FakeChart values={data.series} />
            </div>
            <div className="panel">
              <h3>Activity · /activity</h3>
              <ul className="activity">
                {(data.activity ?? []).map((row) => (
                  <li key={row}>{row}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </DemoChrome>
  )
}
