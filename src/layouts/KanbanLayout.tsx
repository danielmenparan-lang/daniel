import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type KanbanPayload = {
  columns?: { title: string; cards: string[] }[]
}

export function KanbanLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as KanbanPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-kanban">
        <header>
          <div>
            <h1>{demo.name}</h1>
            <p>
              {demo.nameHe} — {demo.tagline} · <code>GET /boards/default</code>
            </p>
          </div>
          <button type="button" className="btn-primary" onClick={mock.refresh}>
            Sync board
          </button>
        </header>
        <div className="kanban-board">
          {(data.columns ?? []).map((col) => (
            <section key={col.title}>
              <h2>
                {col.title} <span>{col.cards.length}</span>
              </h2>
              {col.cards.map((card) => (
                <article key={card}>{card}</article>
              ))}
            </section>
          ))}
        </div>
      </div>
    </DemoChrome>
  )
}
