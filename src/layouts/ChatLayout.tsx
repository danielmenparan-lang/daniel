import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type ChatPayload = {
  threads?: string[]
  messages?: { role: string; text: string }[]
  model?: string
  tokens?: number
}

export function ChatLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as ChatPayload

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-chat">
        <aside>
          <h2>{demo.name}</h2>
          <p className="muted">
            {demo.nameHe} · {data.tokens ?? 0} tokens mocked
          </p>
          <ul>
            {(data.threads ?? []).map((t, i) => (
              <li key={t} className={i === 0 ? 'active' : ''}>
                {t}
              </li>
            ))}
          </ul>
        </aside>
        <section className="chat-main">
          <header>
            <strong>AI assistant</strong>
            <span>
              {data.model ?? demo.builtWith} · POST /ai/complete
            </span>
          </header>
          <div className="chat-stream">
            {(data.messages ?? []).map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="chat-compose">
            <input readOnly value="Ask about tickets, docs, or drafts…" />
            <button type="button" className="btn-primary" onClick={mock.refresh}>
              Send
            </button>
          </div>
          <div className="suggest-row">
            {demo.features.map((f) => (
              <button key={f} type="button">
                {f}
              </button>
            ))}
          </div>
        </section>
      </div>
    </DemoChrome>
  )
}
