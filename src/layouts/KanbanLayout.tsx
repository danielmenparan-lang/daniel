import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

const columns = [
  { title: 'Backlog', cards: ['Write onboarding copy', 'Pricing experiment'] },
  { title: 'In progress', cards: ['Demo gallery polish', 'Auth edge cases'] },
  { title: 'Review', cards: ['Mobile nav'] },
  { title: 'Done', cards: ['Palette tokens', 'Router wiring'] },
]

export function KanbanLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-kanban">
        <header>
          <h1>{demo.name}</h1>
          <p>
            {demo.nameHe} — {demo.tagline}
          </p>
        </header>
        <div className="kanban-board">
          {columns.map((col) => (
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
