import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

const threads = ['Billing question', 'Onboarding help', 'API rate limits', 'Feature request']
const messages = [
  { role: 'user', text: 'Can you summarize last week’s support themes?' },
  {
    role: 'assistant',
    text: 'Top themes: billing confusion (31%), onboarding drop-off (22%), API timeouts (18%). Want a draft reply pack?',
  },
  { role: 'user', text: 'Yes — keep the tone calm and concrete.' },
]

export function ChatLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-chat">
        <aside>
          <h2>{demo.name}</h2>
          <p className="muted">{demo.nameHe}</p>
          <ul>
            {threads.map((t, i) => (
              <li key={t} className={i === 0 ? 'active' : ''}>
                {t}
              </li>
            ))}
          </ul>
        </aside>
        <section className="chat-main">
          <header>
            <strong>AI assistant</strong>
            <span>Grounded · {demo.builtWith}</span>
          </header>
          <div className="chat-stream">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="chat-compose">
            <input readOnly value="Ask about tickets, docs, or drafts…" />
            <button type="button" className="btn-primary">
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
