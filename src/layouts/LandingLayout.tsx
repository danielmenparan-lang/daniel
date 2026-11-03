import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

export function LandingLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <section className="lay-landing">
        <div className="lay-landing-copy">
          <p className="eyebrow">{demo.categoryHe}</p>
          <h1>{demo.name}</h1>
          <p className="lead">{demo.tagline}</p>
          <p className="subhe">{demo.nameHe}</p>
          <div className="cta-row">
            <button type="button" className="btn-primary">
              Start free
            </button>
            <button type="button" className="btn-ghost">
              View demo
            </button>
          </div>
        </div>
        <div className="lay-landing-visual" aria-hidden>
          <div className="hero-panel">
            <div className="hero-row">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-body">
              <div className="hero-side" />
              <div className="hero-main">
                <div className="hero-line wide" />
                <div className="hero-line" />
                <div className="hero-blocks">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-strip">
        {demo.features.map((f) => (
          <article key={f}>
            <h3>{f}</h3>
            <p>Polished AI-scaffolded block ready to customize.</p>
          </article>
        ))}
      </section>
    </DemoChrome>
  )
}
