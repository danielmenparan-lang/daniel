import type { DemoLayout } from '../data/demos'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type MockEndpoint = {
  id: string
  method: HttpMethod
  path: string
  description: string
  status: number
  latencyMs: number
}

export type MockRequestLog = {
  id: string
  at: string
  method: HttpMethod
  path: string
  status: number
  latencyMs: number
  ok: boolean
}

export type ConnectionState = 'connecting' | 'online' | 'degraded' | 'offline'

export type MockApiBundle = {
  baseUrl: string
  apiKeyHint: string
  websocket: string
  connection: ConnectionState
  endpoints: MockEndpoint[]
  logs: MockRequestLog[]
  payload: Record<string, unknown>
  layout: DemoLayout
}
