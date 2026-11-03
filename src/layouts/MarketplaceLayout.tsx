import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type MarketPayload = {
  products?: { id: string; title: string; price: string; stock: number; rating: number }[]
  cartCount?: number
}

export function MarketplaceLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as MarketPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-market">
        <header>
          <div>
            <h1>{demo.name}</h1>
            <p>
              {demo.tagline} · {demo.nameHe} · <code>GET /catalog</code>
            </p>
          </div>
          <div className="market-actions">
            <input readOnly placeholder="Search catalog" />
            <button type="button" className="btn-primary" onClick={mock.refresh}>
              Cart · {data.cartCount ?? 0}
            </button>
          </div>
        </header>
        <div className="market-grid">
          {(data.products ?? []).map((item, i) => (
            <article key={item.id}>
              <div className={`thumb t${(i % 6) + 1}`} aria-hidden />
              <h3>{item.title}</h3>
              <p>
                {item.price} · ★{item.rating} · stock {item.stock}
              </p>
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
