import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

type FormPayload = {
  form?: {
    step: number
    steps: number
    company: string
    useCase: string
    teamSize: string
  }
}

export function FormLayout({ demo, mock }: LayoutProps) {
  const form = (mock.api.payload as FormPayload).form

  return (
    <DemoChrome demo={demo} mock={mock}>
      <div className="lay-form">
        <div className="form-card panel">
          <div className="progress">
            {Array.from({ length: form?.steps ?? 4 }, (_, i) => (
              <span
                key={i}
                className={
                  i + 1 < (form?.step ?? 1) ? 'done' : i + 1 === (form?.step ?? 1) ? 'current' : ''
                }
              />
            ))}
          </div>
          <p className="eyebrow">
            Step {form?.step ?? 1} of {form?.steps ?? 4} · <code>GET /forms/…/draft</code>
          </p>
          <h1>{demo.name}</h1>
          <p className="lead">
            {demo.tagline}. {demo.nameHe}
          </p>
          <label>
            Company name
            <input readOnly value={form?.company ?? ''} />
          </label>
          <label>
            Primary use case
            <input readOnly value={form?.useCase ?? demo.categoryHe} />
          </label>
          <label>
            Team size
            <input readOnly value={form?.teamSize ?? ''} />
          </label>
          <div className="cta-row">
            <button type="button" className="btn-ghost">
              Back
            </button>
            <button type="button" className="btn-primary" onClick={mock.refresh}>
              Continue · validate
            </button>
          </div>
        </div>
      </div>
    </DemoChrome>
  )
}
