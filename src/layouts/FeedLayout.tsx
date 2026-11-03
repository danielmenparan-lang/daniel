import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type FeedPayload = {
  posts?: { author: string; body: string; likes: number; comments: number }[]
}

export function FeedLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as FeedPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-feed">
        <header>
          <div>
            <h1>{demo.name}</h1>
            <p>
              {demo.nameHe} · {demo.tagline} · <code>GET /feed</code>
            </p>
          </div>
          <button type="button" className="btn-primary" onClick={mock.refresh}>
            Refresh feed
          </button>
        </header>
        <div className="compose panel">
          <textarea readOnly value="Share an update with the community…" />
          <button type="button" className="btn-primary">
            Post · mock POST /posts
          </button>
        </div>
        <div className="feed-list">
          {(data.posts ?? []).map((post) => (
            <article key={post.author + post.body} className="panel">
              <strong>{post.author}</strong>
              <p>{post.body}</p>
              <div className="react-row">
                <button type="button">Appreciate · {post.likes}</button>
                <button type="button">Reply · {post.comments}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </DemoChrome>
  )
}
