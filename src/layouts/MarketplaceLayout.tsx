import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

const items = [
  ['Aurora Set', '$48'],
  ['Field Pack', '$72'],
  ['Studio Kit', '$96'],
  ['Night Bundle', '$64'],
  ['Trail Mug', '$28'],
  ['Canvas Tote', '$36'],
]

export function MarketplaceLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-market">
        <header>
          <div>
            <h1>{demo.name}</h1>
            <p>
              {demo.tagline} · {demo.nameHe}
            </p>
          </div>
          <div className="market-actions">
            <input readOnly placeholder="Search catalog" />
            <button type="button" className="btn-primary">
              Cart · 2
            </button>
          </div>
        </header>
        <div className="market-grid">
          {items.map(([title, price], i) => (
            <article key={title}>
              <div className={`thumb t${(i % 6) + 1}`} aria-hidden />
              <h3>{title}</h3>
              <p>{price}</p>
              <button type="button" className="btn-ghost">
                Add
              </button>
            </article>
          ))}
        </div>
      </div>
    </DemoChrome>
  )
}
