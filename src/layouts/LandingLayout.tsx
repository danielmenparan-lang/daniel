import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type LandingPayload = {
  socialProof?: { users: string; rating: number; companies: number }
  features?: string[]
}

export function LandingLayout({ demo, mock }: LayoutProps) {
  const data = mock.api.payload as LandingPayload
  const proof = data.socialProof

  return (
    <DemoChrome demo={demo} mock={mock}>
      <section className="lay-landing">
        <div className="lay-landing-copy">
          <p className="eyebrow">{demo.categoryHe}</p>
          <h1>{demo.name}</h1>
          <p className="lead">{demo.tagline}</p>
          <p className="subhe">{demo.nameHe}</p>
          {proof ? (
            <p className="mock-proof">
              {proof.users} users · {proof.rating}★ · {proof.companies} teams · from{' '}
              <code>GET /marketing/metrics</code>
            </p>
          ) : null}
          <div className="cta-row">
            <button type="button" className="btn-primary" onClick={mock.refresh}>
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
        {(data.features ?? demo.features).map((f) => (
          <article key={f}>
            <h3>{f}</h3>
            <p>Loaded from mock fixtures for {demo.slug}.</p>
          </article>
        ))}
      </section>
    </DemoChrome>
  )
}
