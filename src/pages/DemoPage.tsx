import { Link, useParams } from 'react-router-dom'
import { demos, getDemo } from '../data/demos'
import { DemoRenderer } from '../layouts/DemoRenderer'

export function DemoPage() {
  const { slug } = useParams()
  const demo = slug ? getDemo(slug) : undefined

  if (!demo) {
    return (
      <div className="missing" dir="rtl">
        <h1>הדמו לא נמצא</h1>
        <Link to="/">חזרה לגלריה</Link>
      </div>
    )
  }

  const idx = demos.findIndex((d) => d.id === demo.id)
  const prev = demos[(idx - 1 + demos.length) % demos.length]
  const next = demos[(idx + 1) % demos.length]

  return (
    <div className="demo-page">
      <div className="demo-rail" dir="rtl">
        <Link to="/" className="back-link">
          ← כל הדמואים
        </Link>
        <div className="demo-rail-info">
          <strong>
            #{demo.id} {demo.name}
          </strong>
          <span>
            {demo.nameHe} · נבנה בסגנון {demo.builtWith}
          </span>
        </div>
        <div className="demo-rail-nav">
          <Link to={`/demo/${prev.slug}`}>הקודם</Link>
          <Link to={`/demo/${next.slug}`}>הבא</Link>
        </div>
      </div>
      <DemoRenderer demo={demo} />
    </div>
  )
}
