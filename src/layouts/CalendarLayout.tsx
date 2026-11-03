import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type CalPayload = {
  events?: Record<string, string>
  timezone?: string
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function CalendarLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as CalPayload
  const events = data.events ?? {}

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-cal">
        <header>
          <div>
            <h1>{demo.name}</h1>
            <p>
              {demo.nameHe} · {demo.tagline} · {data.timezone ?? 'UTC'} · <code>GET /events</code>
            </p>
          </div>
          <button type="button" className="btn-primary" onClick={mock.refresh}>
            Reload
          </button>
        </header>
        <div className="cal-grid">
          {days.map((d) => (
            <div key={d} className="cal-head">
              {d}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => {
            const day = String(i + 1)
            return (
              <div key={i} className="cal-cell">
                <span>{i + 1}</span>
                {events[day] ? <em>{events[day]}</em> : null}
              </div>
            )
          })}
        </div>
      </div>
    </DemoChrome>
  )
}
