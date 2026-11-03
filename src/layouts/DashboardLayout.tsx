import type { LayoutProps } from './types'
import { DemoChrome, FakeChart, StatCards } from './shared'

export function DashboardLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
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
              <p>{demo.tagline}</p>
            </div>
            <button type="button" className="btn-primary">
              Export
            </button>
          </header>
          <StatCards
            items={[
              { label: 'Active users', value: '12.4k', delta: '+8.2%' },
              { label: 'Conversion', value: '4.7%', delta: '+0.4%' },
              { label: 'MRR', value: '$48k', delta: '+12%' },
              { label: 'NPS', value: '62', delta: '+3' },
            ]}
          />
          <div className="dash-panels">
            <div className="panel">
              <h3>Trend</h3>
              <FakeChart />
            </div>
            <div className="panel">
              <h3>Activity</h3>
              <ul className="activity">
                {['New signup from Tel Aviv', 'Invoice paid · $1,240', 'Feature flag enabled', 'Weekly digest sent'].map(
                  (row) => (
                    <li key={row}>{row}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </DemoChrome>
  )
}
