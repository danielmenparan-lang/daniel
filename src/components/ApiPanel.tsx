import type { MockApiBundle, MockRequestLog } from '../mock/types'
import { summarizeApi } from '../mock/client'

function ConnDot({ state }: { state: MockApiBundle['connection'] }) {
  return <span className={`conn-dot conn-${state}`} aria-hidden />
}

function LogRow({ log }: { log: MockRequestLog }) {
  return (
    <li className={log.ok ? 'ok' : 'fail'}>
      <span className="log-method">{log.method}</span>
      <code className="log-path">{log.path}</code>
      <span className="log-meta">
        {log.status || 'ERR'} · {log.latencyMs}ms
      </span>
    </li>
  )
}

export function ApiPanel({
  api,
  loading,
  refreshing,
  error,
  lastRequest,
  onRefresh,
}: {
  api: MockApiBundle
  loading: boolean
  refreshing: boolean
  error: string | null
  lastRequest: MockRequestLog | null
  onRefresh: () => void
}) {
  const summary = summarizeApi(api)

  return (
    <aside className="api-panel" dir="ltr">
      <header className="api-panel-head">
        <div>
          <strong>Mock API</strong>
          <p>
            <ConnDot state={api.connection} />
            {api.connection}
            {loading ? ' · loading fixtures…' : ''}
            {refreshing ? ' · refreshing…' : ''}
          </p>
        </div>
        <button type="button" className="btn-ghost api-refresh" onClick={onRefresh} disabled={loading || refreshing}>
          Refresh
        </button>
      </header>

      <div className="api-kv">
        <div>
          <span>Base URL</span>
          <code>{api.baseUrl}</code>
        </div>
        <div>
          <span>API key</span>
          <code>{api.apiKeyHint}</code>
        </div>
        <div>
          <span>WebSocket</span>
          <code>{api.websocket}</code>
        </div>
        <div>
          <span>Endpoints</span>
          <code>
            {summary.endpointCount} · avg {summary.avgLatency}ms · {summary.ok} ok / {summary.fail} fail
          </code>
        </div>
      </div>

      {error ? <p className="api-error">{error}</p> : null}
      {lastRequest ? (
        <p className="api-last">
          Last call: <code>{lastRequest.method} {lastRequest.path}</code> → {lastRequest.status || 'ERR'} ({lastRequest.latencyMs}ms)
        </p>
      ) : null}

      <div className="api-columns">
        <section>
          <h4>Endpoints</h4>
          <ul className="api-endpoints">
            {api.endpoints.map((ep) => (
              <li key={ep.id}>
                <span className="log-method">{ep.method}</span>
                <code>{ep.path}</code>
                <small>{ep.description}</small>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>Recent requests</h4>
          <ul className="api-logs">
            {api.logs.map((log) => (
              <LogRow key={log.id + log.at} log={log} />
            ))}
          </ul>
        </section>
        <section>
          <h4>Payload preview</h4>
          <pre className="api-json">{JSON.stringify(api.payload, null, 2)}</pre>
        </section>
      </div>
    </aside>
  )
}

export function ApiStatusChip({
  connection,
  loading,
}: {
  connection: MockApiBundle['connection']
  loading?: boolean
}) {
  return (
    <span className="api-status-chip">
      <ConnDot state={connection} />
      {loading ? 'API…' : `API ${connection}`}
    </span>
  )
}
