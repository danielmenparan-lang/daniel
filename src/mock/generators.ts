import type { Demo, DemoLayout } from '../data/demos'
import { between, createSeed, intBetween, pick } from './seed'
import type { ConnectionState, MockApiBundle, MockEndpoint, MockRequestLog } from './types'

const cities = ['Tel Aviv', 'Jerusalem', 'Haifa', 'Berlin', 'Lisbon', 'Austin', 'Toronto', 'Singapore']
const people = ['Maya R.', 'Ori K.', 'Noa L.', 'Daniel M.', 'Yael S.', 'Tom H.', 'Lina P.', 'Amit B.']
const verbs = ['created', 'updated', 'approved', 'synced', 'exported', 'flagged', 'resolved', 'invited']

function endpointsFor(layout: DemoLayout, slug: string, rand: () => number): MockEndpoint[] {
  const base = `/v1/${slug}`
  const common: MockEndpoint[] = [
    {
      id: 'health',
      method: 'GET',
      path: `${base}/health`,
      description: 'Service health + dependency checks',
      status: 200,
      latencyMs: intBetween(rand, 18, 60),
    },
    {
      id: 'session',
      method: 'GET',
      path: `${base}/session`,
      description: 'Current demo session + scopes',
      status: 200,
      latencyMs: intBetween(rand, 40, 120),
    },
  ]

  const byLayout: Record<DemoLayout, MockEndpoint[]> = {
    landing: [
      { id: 'metrics', method: 'GET', path: `${base}/marketing/metrics`, description: 'Signup funnel metrics', status: 200, latencyMs: intBetween(rand, 80, 180) },
      { id: 'waitlist', method: 'POST', path: `${base}/waitlist`, description: 'Join waitlist (mock)', status: 201, latencyMs: intBetween(rand, 90, 220) },
    ],
    dashboard: [
      { id: 'kpis', method: 'GET', path: `${base}/metrics/kpis`, description: 'KPI cards payload', status: 200, latencyMs: intBetween(rand, 70, 160) },
      { id: 'series', method: 'GET', path: `${base}/metrics/timeseries?range=30d`, description: 'Trend series', status: 200, latencyMs: intBetween(rand, 110, 240) },
      { id: 'activity', method: 'GET', path: `${base}/activity?limit=8`, description: 'Recent activity feed', status: 200, latencyMs: intBetween(rand, 60, 140) },
    ],
    chat: [
      { id: 'threads', method: 'GET', path: `${base}/threads`, description: 'Support / AI threads', status: 200, latencyMs: intBetween(rand, 50, 130) },
      { id: 'messages', method: 'GET', path: `${base}/threads/t_01/messages`, description: 'Thread messages', status: 200, latencyMs: intBetween(rand, 70, 150) },
      { id: 'complete', method: 'POST', path: `${base}/ai/complete`, description: 'Mock model completion', status: 200, latencyMs: intBetween(rand, 220, 520) },
    ],
    marketplace: [
      { id: 'catalog', method: 'GET', path: `${base}/catalog?page=1`, description: 'Product catalog page', status: 200, latencyMs: intBetween(rand, 90, 200) },
      { id: 'cart', method: 'GET', path: `${base}/cart`, description: 'Active cart', status: 200, latencyMs: intBetween(rand, 40, 100) },
      { id: 'checkout', method: 'POST', path: `${base}/checkout/intent`, description: 'Create payment intent (mock)', status: 201, latencyMs: intBetween(rand, 120, 280) },
    ],
    kanban: [
      { id: 'board', method: 'GET', path: `${base}/boards/default`, description: 'Board columns + cards', status: 200, latencyMs: intBetween(rand, 80, 170) },
      { id: 'move', method: 'PATCH', path: `${base}/cards/{id}/move`, description: 'Move card between columns', status: 200, latencyMs: intBetween(rand, 50, 110) },
    ],
    calendar: [
      { id: 'events', method: 'GET', path: `${base}/events?month=current`, description: 'Calendar events', status: 200, latencyMs: intBetween(rand, 70, 160) },
      { id: 'availability', method: 'GET', path: `${base}/availability`, description: 'Open slots', status: 200, latencyMs: intBetween(rand, 60, 140) },
    ],
    analytics: [
      { id: 'overview', method: 'GET', path: `${base}/analytics/overview?range=30d`, description: 'Overview KPIs', status: 200, latencyMs: intBetween(rand, 90, 190) },
      { id: 'funnel', method: 'GET', path: `${base}/analytics/funnel`, description: 'Conversion funnel', status: 200, latencyMs: intBetween(rand, 100, 220) },
      { id: 'export', method: 'POST', path: `${base}/analytics/export`, description: 'Export CSV (mock job)', status: 202, latencyMs: intBetween(rand, 80, 160) },
    ],
    feed: [
      { id: 'feed', method: 'GET', path: `${base}/feed?cursor=`, description: 'Social feed page', status: 200, latencyMs: intBetween(rand, 70, 150) },
      { id: 'post', method: 'POST', path: `${base}/posts`, description: 'Create post (mock)', status: 201, latencyMs: intBetween(rand, 90, 180) },
    ],
    form: [
      { id: 'draft', method: 'GET', path: `${base}/forms/onboarding/draft`, description: 'Saved form draft', status: 200, latencyMs: intBetween(rand, 50, 120) },
      { id: 'validate', method: 'POST', path: `${base}/forms/onboarding/validate`, description: 'Field validation', status: 200, latencyMs: intBetween(rand, 40, 100) },
      { id: 'submit', method: 'POST', path: `${base}/forms/onboarding/submit`, description: 'Submit step', status: 200, latencyMs: intBetween(rand, 90, 200) },
    ],
    studio: [
      { id: 'project', method: 'GET', path: `${base}/projects/current`, description: 'Open studio project', status: 200, latencyMs: intBetween(rand, 80, 160) },
      { id: 'generate', method: 'POST', path: `${base}/ai/generate`, description: 'Generate layout block', status: 200, latencyMs: intBetween(rand, 250, 600) },
      { id: 'export', method: 'POST', path: `${base}/export`, description: 'Export assets', status: 202, latencyMs: intBetween(rand, 100, 220) },
    ],
  }

  return [...common, ...byLayout[layout]]
}

function connectionFor(rand: () => number): ConnectionState {
  const r = rand()
  if (r > 0.97) return 'offline'
  if (r > 0.9) return 'degraded'
  return 'online'
}

function logsFor(endpoints: MockEndpoint[], rand: () => number): MockRequestLog[] {
  const now = Date.now()
  return endpoints.slice(0, Math.min(5, endpoints.length)).map((ep, i) => {
    const fail = rand() > 0.93
    return {
      id: `req_${i + 1}`,
      at: new Date(now - intBetween(rand, 2, 90) * 1000).toISOString(),
      method: ep.method,
      path: ep.path,
      status: fail ? pick(rand, [429, 500, 503]) : ep.status,
      latencyMs: ep.latencyMs + intBetween(rand, -10, 40),
      ok: !fail,
    }
  })
}

function payloadFor(demo: Demo, rand: () => number): Record<string, unknown> {
  const series = Array.from({ length: 10 }, () => intBetween(rand, 28, 96))
  const kpis = [
    { label: 'Active users', value: `${(between(rand, 3.2, 48)).toFixed(1)}k`, delta: `+${between(rand, 1, 14).toFixed(1)}%` },
    { label: 'Conversion', value: `${between(rand, 1.8, 9.4).toFixed(1)}%`, delta: `${rand() > 0.4 ? '+' : '-'}${between(rand, 0.1, 1.8).toFixed(1)}%` },
    { label: 'MRR', value: `$${intBetween(rand, 12, 180)}k`, delta: `+${intBetween(rand, 2, 22)}%` },
    { label: 'NPS', value: `${intBetween(rand, 32, 78)}`, delta: `+${intBetween(rand, 1, 6)}` },
  ]

  const activity = Array.from({ length: 5 }, () => {
    const who = pick(rand, people)
    const verb = pick(rand, verbs)
    const city = pick(rand, cities)
    return `${who} ${verb} · ${city}`
  })

  const products = Array.from({ length: 6 }, (_, i) => ({
    id: `sku_${demo.id}_${i + 1}`,
    title: pick(rand, ['Aurora Set', 'Field Pack', 'Studio Kit', 'Night Bundle', 'Trail Mug', 'Canvas Tote', 'Orbit Cap', 'Signal Lamp']),
    price: `$${intBetween(rand, 18, 128)}`,
    stock: intBetween(rand, 2, 84),
    rating: Number(between(rand, 3.6, 5).toFixed(1)),
  }))

  const threads = [
    'Billing question',
    'Onboarding help',
    'API rate limits',
    'Feature request',
    'Webhook retries',
  ].slice(0, intBetween(rand, 3, 5))

  const messages = [
    { role: 'user', text: `Summarize last week's themes for ${demo.name}.` },
    {
      role: 'assistant',
      text: `Mock reply from ${demo.builtWith}: top themes are onboarding drop-off (${intBetween(rand, 18, 34)}%), billing confusion (${intBetween(rand, 12, 28)}%), and API timeouts (${intBetween(rand, 8, 22)}%).`,
    },
    { role: 'user', text: 'Draft a calm reply pack with concrete next steps.' },
  ]

  const columns = [
    { title: 'Backlog', cards: ['Write onboarding copy', 'Pricing experiment', 'Docs pass'] },
    { title: 'In progress', cards: [`${demo.name} polish`, 'Auth edge cases'] },
    { title: 'Review', cards: ['Mobile nav', 'API contract'] },
    { title: 'Done', cards: ['Palette tokens', 'Router wiring', 'Mock fixtures'] },
  ].map((col) => ({
    ...col,
    cards: col.cards.slice(0, intBetween(rand, 1, col.cards.length)),
  }))

  const events: Record<string, string> = {}
  for (let i = 0; i < 6; i++) {
    events[String(intBetween(rand, 1, 27))] = pick(rand, ['Kickoff', 'Design review', 'Customer call', 'Ship window', 'Retro', 'Demo day'])
  }

  const posts = Array.from({ length: 3 }, () => ({
    author: pick(rand, people),
    body: pick(rand, [
      `Shipped a quieter onboarding flow for ${demo.name} today.`,
      'Looking for feedback on this pricing structure before we A/B.',
      'AI draft → human edit worked well for support macros this week.',
      `Synced mock API fixtures for ${demo.layout} in under an hour.`,
    ]),
    likes: intBetween(rand, 2, 48),
    comments: intBetween(rand, 0, 12),
  }))

  const form = {
    step: intBetween(rand, 2, 4),
    steps: 4,
    company: pick(rand, ['Northwind Labs', 'Cedar Systems', 'Harbor Digital', 'Pulse Works']),
    useCase: demo.categoryHe,
    teamSize: pick(rand, ['1–10', '11–50', '51–200', '200+']),
  }

  const studio = {
    layers: ['Hero', 'Sidebar', 'Chart', 'CTA'],
    prompt: `Generate a ${demo.layout} block for ${demo.name}`,
    tokens: intBetween(rand, 420, 1800),
  }

  const socialProof = {
    users: `${intBetween(rand, 1, 28)}.${intBetween(rand, 1, 9)}k`,
    rating: Number(between(rand, 4.4, 4.9).toFixed(1)),
    companies: intBetween(rand, 40, 420),
  }

  switch (demo.layout) {
    case 'landing':
      return { socialProof, features: demo.features, series }
    case 'dashboard':
      return { kpis, series, activity }
    case 'chat':
      return { threads, messages, model: demo.builtWith, tokens: intBetween(rand, 180, 940) }
    case 'marketplace':
      return { products, cartCount: intBetween(rand, 0, 5) }
    case 'kanban':
      return { columns }
    case 'calendar':
      return { events, timezone: 'Asia/Jerusalem' }
    case 'analytics':
      return { kpis: kpis.slice(0, 3), series, funnel: ['Visit', 'Signup', 'Activate', 'Pay'] }
    case 'feed':
      return { posts }
    case 'form':
      return { form }
    case 'studio':
      return { studio, series }
    default:
      return { series }
  }
}

export function buildMockApi(demo: Demo): MockApiBundle {
  const rand = createSeed(demo.id * 97 + demo.slug.length * 13)
  const endpoints = endpointsFor(demo.layout, demo.slug, rand)
  const connection = connectionFor(createSeed(demo.id + 11))
  const logs = logsFor(endpoints, createSeed(demo.id + 23))

  return {
    baseUrl: `https://api.mock.${demo.slug}.demo`,
    apiKeyHint: `mk_live_${demo.slug.slice(0, 4)}${demo.id.toString(16)}••••`,
    websocket: `wss://realtime.mock.${demo.slug}.demo/socket`,
    connection,
    endpoints,
    logs,
    payload: payloadFor(demo, rand),
    layout: demo.layout,
  }
}
