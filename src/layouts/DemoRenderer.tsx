import type { Demo } from '../data/demos'
import { LandingLayout } from './LandingLayout'
import { DashboardLayout } from './DashboardLayout'
import { ChatLayout } from './ChatLayout'
import { MarketplaceLayout } from './MarketplaceLayout'
import { KanbanLayout } from './KanbanLayout'
import { CalendarLayout } from './CalendarLayout'
import { AnalyticsLayout } from './AnalyticsLayout'
import { FeedLayout } from './FeedLayout'
import { FormLayout } from './FormLayout'
import { StudioLayout } from './StudioLayout'

const map = {
  landing: LandingLayout,
  dashboard: DashboardLayout,
  chat: ChatLayout,
  marketplace: MarketplaceLayout,
  kanban: KanbanLayout,
  calendar: CalendarLayout,
  analytics: AnalyticsLayout,
  feed: FeedLayout,
  form: FormLayout,
  studio: StudioLayout,
} as const

export function DemoRenderer({ demo }: { demo: Demo }) {
  const Layout = map[demo.layout]
  return <Layout demo={demo} />
}
