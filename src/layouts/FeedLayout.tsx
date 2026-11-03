import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

const posts = [
  ['Maya R.', 'Shipped a quieter onboarding flow today — fewer fields, more completion.'],
  ['Ori K.', 'Looking for feedback on this pricing page structure before we A/B.'],
  ['Noa L.', 'AI draft → human edit worked well for our support macros this week.'],
]

export function FeedLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-feed">
        <header>
          <h1>{demo.name}</h1>
          <p>
            {demo.nameHe} · {demo.tagline}
          </p>
        </header>
        <div className="compose panel">
          <textarea readOnly value="Share an update with the community…" />
          <button type="button" className="btn-primary">
            Post
          </button>
        </div>
        <div className="feed-list">
          {posts.map(([who, body]) => (
            <article key={who} className="panel">
              <strong>{who}</strong>
              <p>{body}</p>
              <div className="react-row">
                <button type="button">Appreciate</button>
                <button type="button">Reply</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </DemoChrome>
  )
}
