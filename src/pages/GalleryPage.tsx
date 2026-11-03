import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, demos } from '../data/demos'

export function GalleryPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const [tool, setTool] = useState<string>('all')

  const tools = useMemo(
    () => Array.from(new Set(demos.map((d) => d.builtWith))).sort(),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return demos.filter((d) => {
      if (category !== 'all' && d.category !== category) return false
      if (tool !== 'all' && d.builtWith !== tool) return false
      if (!q) return true
      return (
        d.name.toLowerCase().includes(q) ||
        d.nameHe.includes(query.trim()) ||
        d.tagline.toLowerCase().includes(q) ||
        d.layout.includes(q) ||
        d.builtWith.toLowerCase().includes(q)
      )
    })
  }, [query, category, tool])

  return (
    <div className="gallery" dir="rtl">
      <header className="gallery-hero">
        <div className="gallery-hero-inner">
          <p className="gallery-kicker">AI Systems Showcase</p>
          <h1>מאה דמואים</h1>
          <p className="gallery-lead">
            גלריה של 100 מערכות דמו שנבנו בסגנון כלי AI — Claude, Cursor, GPT ועוד.
            לכל דמו יש נתוני דמה, חיבורי API מדומים, לוג בקשות ו־payload לדוגמה.
          </p>
          <div className="gallery-meta">
            <span>{demos.length} demos</span>
            <span>{categories.length} categories</span>
            <span>10 layout patterns</span>
            <span>Mock APIs</span>
          </div>
        </div>
        <div className="gallery-hero-glow" aria-hidden />
      </header>

      <section className="gallery-controls">
        <label className="search-wrap">
          <span className="sr-only">חיפוש</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="חפש לפי שם, כלי או סוג ממשק…"
          />
        </label>
        <div className="filter-row">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">כל הקטגוריות</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.he}
              </option>
            ))}
          </select>
          <select value={tool} onChange={(e) => setTool(e.target.value)}>
            <option value="all">כל כלי ה-AI</option>
            {tools.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span className="result-count">{filtered.length} תוצאות</span>
        </div>
      </section>

      <section className="gallery-grid">
        {filtered.map((demo, index) => (
          <Link
            key={demo.id}
            to={`/demo/${demo.slug}`}
            className="demo-card"
            style={
              {
                '--card-accent': demo.palette.accent,
                '--card-bg': demo.palette.bg,
                '--card-text': demo.palette.text,
                animationDelay: `${Math.min(index, 24) * 18}ms`,
              } as React.CSSProperties
            }
          >
            <div className="demo-card-preview" aria-hidden>
              <span className="preview-bar" />
              <span className="preview-block a" />
              <span className="preview-block b" />
              <span className="preview-block c" />
            </div>
            <div className="demo-card-body">
              <div className="demo-card-top">
                <strong>{demo.name}</strong>
                <span className="chip">{demo.builtWith}</span>
              </div>
              <p>{demo.nameHe}</p>
              <div className="demo-card-meta">
                <span>#{demo.id}</span>
                <span>{demo.layout}</span>
                <span>{demo.categoryHe}</span>
                <span>api.mock.{demo.slug}.demo</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filtered.length === 0 ? (
        <p className="empty-state">לא נמצאו דמואים לפי הסינון הנוכחי.</p>
      ) : null}
    </div>
  )
}
