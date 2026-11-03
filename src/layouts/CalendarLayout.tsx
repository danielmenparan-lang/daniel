import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const events: Record<number, string> = {
  2: 'Kickoff',
  5: 'Design review',
  9: 'Customer call',
  12: 'Ship window',
  16: 'Retro',
}

export function CalendarLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-cal">
        <header>
          <h1>{demo.name}</h1>
          <p>
            {demo.nameHe} · {demo.tagline}
          </p>
        </header>
        <div className="cal-grid">
          {days.map((d) => (
            <div key={d} className="cal-head">
              {d}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => (
            <div key={i} className="cal-cell">
              <span>{i + 1}</span>
              {events[i] ? <em>{events[i]}</em> : null}
            </div>
          ))}
        </div>
      </div>
    </DemoChrome>
  )
}
