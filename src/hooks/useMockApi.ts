import { useCallback, useEffect, useState } from 'react'
import type { Demo } from '../data/demos'
import { getMockApi, mockFetch } from '../mock/client'
import type { MockApiBundle, MockRequestLog } from '../mock/types'

export type MockApiState = {
  loading: boolean
  refreshing: boolean
  error: string | null
  api: MockApiBundle
  lastRequest: MockRequestLog | null
  refresh: () => void
}

function primaryEndpoint(layout: Demo['layout']) {
  switch (layout) {
    case 'chat':
      return 'messages'
    case 'marketplace':
      return 'catalog'
    case 'kanban':
      return 'board'
    case 'calendar':
      return 'events'
    case 'analytics':
      return 'overview'
    case 'feed':
      return 'feed'
    case 'form':
      return 'draft'
    case 'studio':
      return 'project'
    case 'landing':
      return 'metrics'
    default:
      return 'kpis'
  }
}

export function useMockApi(demo: Demo): MockApiState {
  const [api, setApi] = useState<MockApiBundle>(() => getMockApi(demo))
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastRequest, setLastRequest] = useState<MockRequestLog | null>(null)

  const load = useCallback(async (target: Demo, isRefresh = false) => {
    if (isRefresh) setRefreshing(true)
    else setLoading(true)
    setError(null)

    const result = await mockFetch(target, primaryEndpoint(target.layout))
    setApi({ ...getMockApi(target) })
    setLastRequest(result.request)

    if (!result.ok) {
      setError(
        result.status === 0
          ? 'Mock API offline — reconnect to load demo fixtures'
          : `Mock API ${result.status}: upstream unavailable`,
      )
    }

    setLoading(false)
    setRefreshing(false)
  }, [])

  useEffect(() => {
    void load(demo, false)
  }, [demo, load])

  return {
    loading,
    refreshing,
    error,
    api,
    lastRequest,
    refresh: () => void load(demo, true),
  }
}
