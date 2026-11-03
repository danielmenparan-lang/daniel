import type { LayoutProps } from './types'
import { DemoChrome } from './shared'

export function FormLayout({ demo }: LayoutProps) {
  return (
    <DemoChrome demo={demo}>
      <div className="lay-form">
        <div className="form-card panel">
          <div className="progress">
            <span className="done" />
            <span className="done" />
            <span className="current" />
            <span />
          </div>
          <p className="eyebrow">Step 3 of 4</p>
          <h1>{demo.name}</h1>
          <p className="lead">
            {demo.tagline}. {demo.nameHe}
          </p>
          <label>
            Company name
            <input readOnly defaultValue="Northwind Labs" />
          </label>
          <label>
            Primary use case
            <input readOnly defaultValue={demo.categoryHe} />
          </label>
          <label>
            Team size
            <input readOnly defaultValue="11–50" />
          </label>
          <div className="cta-row">
            <button type="button" className="btn-ghost">
              Back
            </button>
            <button type="button" className="btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
    </DemoChrome>
  )
}
