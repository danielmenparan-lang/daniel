import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

export function StudioLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
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
            <div className="canvas-blocks">
              <div />
              <div />
              <div />
            </div>
          </div>
        </main>
        <aside className="studio-props">
          <strong>Inspector</strong>
          <p>{demo.nameHe}</p>
          <ul>
            {demo.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button type="button" className="btn-primary">
            Generate with {demo.builtWith}
          </button>
        </aside>
      </div>
    </DemoChrome>
  )
}
