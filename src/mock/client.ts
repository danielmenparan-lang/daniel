import type { Demo } from '../data/demos'
import { buildMockApi } from './generators'
import type { MockApiBundle, MockEndpoint, MockRequestLog } from './types'

const cache = new Map<string, MockApiBundle>()

export function getMockApi(demo: Demo): MockApiBundle {
  const hit = cache.get(demo.slug)
  if (hit) return hit
  const bundle = buildMockApi(demo)
  cache.set(demo.slug, bundle)
  return bundle
}

export type MockFetchResult<T = unknown> = {
  ok: boolean
  status: number
  latencyMs: number
  data: T
  endpoint: MockEndpoint
  request: MockRequestLog
}

/** Simulates a network call against the demo's mock API. */
export async function mockFetch<T = unknown>(
  demo: Demo,
  endpointId: string,
  options?: { forceFail?: boolean },
): Promise<MockFetchResult<T>> {
  const api = getMockApi(demo)
  const endpoint = api.endpoints.find((e) => e.id === endpointId) ?? api.endpoints[0]!
  const started = performance.now()

  const jitter = Math.floor(Math.random() * 40)
  const delay = Math.max(40, endpoint.latencyMs + jitter)
  await new Promise((r) => setTimeout(r, delay))

  const offline = api.connection === 'offline'
  const degradedFail = api.connection === 'degraded' && Math.random() > 0.7
  const fail = options?.forceFail || offline || degradedFail

  const status = fail ? (offline ? 0 : 503) : endpoint.status
  const latencyMs = Math.round(performance.now() - started)
  const request: MockRequestLog = {
    id: `live_${Date.now().toString(36)}`,
    at: new Date().toISOString(),
    method: endpoint.method,
    path: endpoint.path,
    status: status || 503,
    latencyMs,
    ok: !fail,
  }

  api.logs = [request, ...api.logs].slice(0, 8)

  if (fail) {
    return {
      ok: false,
      status: status || 503,
      latencyMs,
      data: { error: offline ? 'NETWORK_OFFLINE' : 'UPSTREAM_UNAVAILABLE', mock: true } as T,
      endpoint,
      request,
    }
  }

  return {
    ok: true,
    status,
    latencyMs,
    data: api.payload as T,
    endpoint,
    request,
  }
}

export function summarizeApi(api: MockApiBundle) {
  const ok = api.logs.filter((l) => l.ok).length
  const fail = api.logs.length - ok
  const avgLatency = api.logs.length
    ? Math.round(api.logs.reduce((s, l) => s + l.latencyMs, 0) / api.logs.length)
    : 0
  return { ok, fail, avgLatency, endpointCount: api.endpoints.length }
}
