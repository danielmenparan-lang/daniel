import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type StudioPayload = {
  studio?: { layers: string[]; prompt: string; tokens: number }
}

export function StudioLayout({ demo, mock }: LayoutProps) {
  const studio = (mock.api.payload as StudioPayload).studio

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-studio">
        <aside className="studio-tools">
          <strong>Tools</strong>
          {['Select', 'Frame', 'Text', 'AI fill'].map((t) => (
            <button key={t} type="button">
              {t}
            </button>
          ))}
        </aside>
        <main className="studio-canvas">
          <div className="canvas-frame">
            <h1>{demo.name}</h1>
            <p>{demo.tagline}</p>
            <p className="mock-proof">
              Prompt: {studio?.prompt ?? '—'} · {studio?.tokens ?? 0} tokens
            </p>
            <div className="canvas-blocks">
              {(studio?.layers ?? demo.features).slice(0, 3).map((layer) => (
                <div key={layer} title={layer} />
              ))}
            </div>
          </div>
        </main>
        <aside className="studio-props">
          <strong>Inspector</strong>
          <p>{demo.nameHe}</p>
          <ul>
            {(studio?.layers ?? demo.features).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button type="button" className="btn-primary" onClick={mock.refresh}>
            Generate · POST /ai/generate
          </button>
        </aside>
      </div>
    </DemoChrome>
  )
}
