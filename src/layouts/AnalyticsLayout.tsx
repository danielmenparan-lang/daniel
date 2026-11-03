import type { LayoutProps } from './types'
import { DemoChrome, FakeChart, StatCards } from './shared'

export function AnalyticsLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-analytics">
        <header>
          <div>
            <h1>{demo.name} Analytics</h1>
            <p>
              {demo.nameHe} — {demo.tagline}
            </p>
          </div>
          <div className="pill-row">
            {['7d', '30d', '90d'].map((r, i) => (
              <button key={r} type="button" className={i === 1 ? 'active' : ''}>
                {r}
              </button>
            ))}
          </div>
        </header>
        <StatCards
          items={[
            { label: 'Sessions', value: '84.2k', delta: '+6%' },
            { label: 'Bounce', value: '31%', delta: '-2%' },
            { label: 'Activation', value: '18%', delta: '+1.1%' },
          ]}
        />
        <div className="panel tall">
          <h3>Funnel</h3>
          <FakeChart />
          <div className="funnel-labels">
            {['Visit', 'Signup', 'Activate', 'Pay'].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    </DemoChrome>
  )
}
