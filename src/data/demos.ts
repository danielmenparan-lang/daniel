export type DemoLayout =
  | 'landing'
  | 'dashboard'
  | 'chat'
  | 'marketplace'
  | 'kanban'
  | 'calendar'
  | 'analytics'
  | 'feed'
  | 'form'
  | 'studio';

export type DemoPalette = {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  accent2: string;
};

export type Demo = {
  id: number;
  slug: string;
  name: string;
  nameHe: string;
  tagline: string;
  category: string;
  categoryHe: string;
  layout: DemoLayout;
  builtWith: string;
  palette: DemoPalette;
  features: string[];
};

export const categories = [
  {
    "id": "saas",
    "he": "SaaS ודשבורדים",
    "en": "SaaS & Dashboards"
  },
  {
    "id": "ai",
    "he": "כלי AI וצ׳אט",
    "en": "AI & Chat"
  },
  {
    "id": "commerce",
    "he": "מסחר וחנויות",
    "en": "Commerce"
  },
  {
    "id": "health",
    "he": "בריאות וכושר",
    "en": "Health & Fitness"
  },
  {
    "id": "finance",
    "he": "פיננסים ובנקים",
    "en": "Finance"
  },
  {
    "id": "education",
    "he": "למידה וחינוך",
    "en": "Education"
  },
  {
    "id": "productivity",
    "he": "פרודוקטיביות",
    "en": "Productivity"
  },
  {
    "id": "social",
    "he": "חברתי ותוכן",
    "en": "Social & Content"
  },
  {
    "id": "travel",
    "he": "נסיעות ואירוח",
    "en": "Travel & Hospitality"
  },
  {
    "id": "ops",
    "he": "תפעול ולוגיסטיקה",
    "en": "Ops & Logistics"
  }
] as const;

export const demos: Demo[] = [
  {
    "id": 1,
    "slug": "novaboard",
    "name": "NovaBoard",
    "nameHe": "דשבורד אנליטיקה לצוותי מוצר",
    "tagline": "Track product KPIs in one calm workspace",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "Claude",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 2,
    "slug": "pulsecrm",
    "name": "PulseCRM",
    "nameHe": "CRM קליל לסטארטאפים",
    "tagline": "Close deals without spreadsheet chaos",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 3,
    "slug": "lumenchat",
    "name": "LumenChat",
    "nameHe": "עוזר AI לתמיכת לקוחות",
    "tagline": "Resolve tickets with grounded AI replies",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 4,
    "slug": "atlasops",
    "name": "AtlasOps",
    "nameHe": "ניהול תפעול יומיומי",
    "tagline": "Run daily ops with live status boards",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 5,
    "slug": "mintledger",
    "name": "MintLedger",
    "nameHe": "ספר חשבונות לעסקים קטנים",
    "tagline": "Simple books that stay accurate",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "v0",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 6,
    "slug": "orbitlearn",
    "name": "OrbitLearn",
    "nameHe": "פלטפורמת קורסים אינטראקטיבית",
    "tagline": "Learn by doing, not scrolling",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 7,
    "slug": "harborbook",
    "name": "HarborBook",
    "nameHe": "הזמנות למסעדות וברים",
    "tagline": "Fill tables with smarter reservations",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 8,
    "slug": "swiftcart",
    "name": "SwiftCart",
    "nameHe": "חנות אונליין מהירה",
    "tagline": "Launch a storefront in an afternoon",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 9,
    "slug": "echonotes",
    "name": "EchoNotes",
    "nameHe": "פתקים חכמים עם סיכומי AI",
    "tagline": "Capture thoughts, get instant summaries",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "Claude",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 10,
    "slug": "forgestudio",
    "name": "ForgeStudio",
    "nameHe": "סטודיו לעיצוב מוצר",
    "tagline": "Sketch interfaces with AI co-pilot",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 11,
    "slug": "beaconhealth",
    "name": "BeaconHealth",
    "nameHe": "מעקב בריאות אישי",
    "tagline": "See trends across sleep, mood, and steps",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 12,
    "slug": "cargoflow",
    "name": "CargoFlow",
    "nameHe": "מעקב משלוחים בזמן אמת",
    "tagline": "Know where every shipment sits",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 13,
    "slug": "pixelnest",
    "name": "PixelNest",
    "nameHe": "גלריית פורטפוליו ליוצרים",
    "tagline": "Show work that feels intentional",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "v0",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 14,
    "slug": "summithr",
    "name": "SummitHR",
    "nameHe": "פורטל HR לעובדים",
    "tagline": "Leave requests, pay stubs, one place",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 15,
    "slug": "driftmail",
    "name": "DriftMail",
    "nameHe": "כלי אימייל מרקטינג",
    "tagline": "Campaigns that read human",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 16,
    "slug": "corevault",
    "name": "CoreVault",
    "nameHe": "ניהול סיסמאות לצוותים",
    "tagline": "Share secrets without screenshots",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 17,
    "slug": "leafmeal",
    "name": "LeafMeal",
    "nameHe": "תכנון ארוחות שבועי",
    "tagline": "Plan meals that match your pantry",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Claude",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 18,
    "slug": "signaldesk",
    "name": "SignalDesk",
    "nameHe": "מוקד ניטור אירועים",
    "tagline": "Spot incidents before customers do",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 19,
    "slug": "quillpress",
    "name": "QuillPress",
    "nameHe": "עורך תוכן עם AI",
    "tagline": "Draft posts that keep your voice",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 20,
    "slug": "ridgefit",
    "name": "RidgeFit",
    "nameHe": "אפליקציית אימונים",
    "tagline": "Programs that adapt to your week",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 21,
    "slug": "nimbusdocs",
    "name": "NimbusDocs",
    "nameHe": "מסמכים שיתופיים",
    "tagline": "Docs that stay in sync with reality",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "v0",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 22,
    "slug": "amberpay",
    "name": "AmberPay",
    "nameHe": "תשלומים לעסקים מקומיים",
    "tagline": "Accept payments without the friction",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 23,
    "slug": "willowcare",
    "name": "WillowCare",
    "nameHe": "ניהול מרפאה קטנה",
    "tagline": "Appointments, notes, reminders",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 24,
    "slug": "prismads",
    "name": "PrismAds",
    "nameHe": "ניהול קמפיינים מרוכז",
    "tagline": "See ad spend and lift together",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 25,
    "slug": "tidetravel",
    "name": "TideTravel",
    "nameHe": "מתכנן טיולים חכם",
    "tagline": "Itineraries that survive real travel",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "Claude",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 26,
    "slug": "stackboard",
    "name": "StackBoard",
    "nameHe": "לוח משימות לצוותים",
    "tagline": "Kanban without the bloat",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 27,
    "slug": "aurorafx",
    "name": "AuroraFX",
    "nameHe": "מעקב מטבעות והשקעות",
    "tagline": "Markets, portfolios, calm charts",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 28,
    "slug": "hinttutor",
    "name": "HintTutor",
    "nameHe": "מורה פרטי AI",
    "tagline": "Explain until it clicks",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 29,
    "slug": "parcelhub",
    "name": "ParcelHub",
    "nameHe": "מרכז משלוחים לעסקים",
    "tagline": "Label, track, and resolve delays",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "v0",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 30,
    "slug": "mossgarden",
    "name": "MossGarden",
    "nameHe": "קהילה ליוצרים",
    "tagline": "Share process, not just polish",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 31,
    "slug": "voltdesk",
    "name": "VoltDesk",
    "nameHe": "דשבורד אנרגיה לבית חכם",
    "tagline": "See usage and cut waste",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 32,
    "slug": "papertrail",
    "name": "PaperTrail",
    "nameHe": "ניהול חוזים משפטיים",
    "tagline": "Contracts with clear next actions",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 33,
    "slug": "bloomshop",
    "name": "BloomShop",
    "nameHe": "בוטיק אופנה דיגיטלי",
    "tagline": "Curated looks, effortless checkout",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "Claude",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 34,
    "slug": "radarsales",
    "name": "RadarSales",
    "nameHe": "פייפליין מכירות ויזואלי",
    "tagline": "Forecast without guesswork",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 35,
    "slug": "softclinic",
    "name": "SoftClinic",
    "nameHe": "ניהול תורים למרפאות",
    "tagline": "Fewer no-shows, clearer days",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 36,
    "slug": "craftbrew",
    "name": "CraftBrew",
    "nameHe": "הזמנות למבשלות בוטיק",
    "tagline": "Orders, batches, and tasting notes",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 37,
    "slug": "northstar",
    "name": "NorthStar",
    "nameHe": "OKR לצוותים קטנים",
    "tagline": "Goals that stay visible",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "v0",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 38,
    "slug": "inkfolio",
    "name": "Inkfolio",
    "nameHe": "פורטפוליו לכותבים",
    "tagline": "Publish essays with quiet design",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 39,
    "slug": "fleetline",
    "name": "FleetLine",
    "nameHe": "ניהול צי רכב",
    "tagline": "Routes, maintenance, drivers",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 40,
    "slug": "glowskin",
    "name": "GlowSkin",
    "nameHe": "יומן טיפוח עור",
    "tagline": "Track routines and results",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 41,
    "slug": "bytebake",
    "name": "ByteBake",
    "nameHe": "הזמנות למאפייה",
    "tagline": "Pre-orders that protect margins",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "Claude",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 42,
    "slug": "clearclaim",
    "name": "ClearClaim",
    "nameHe": "מעקב תביעות ביטוח",
    "tagline": "Status updates customers understand",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 43,
    "slug": "spanbridge",
    "name": "SpanBridge",
    "nameHe": "ניהול פרויקטי בנייה",
    "tagline": "Milestones across sites",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 44,
    "slug": "museradio",
    "name": "MuseRadio",
    "nameHe": "פלייליסטים שיתופיים",
    "tagline": "Curate shows with friends",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 45,
    "slug": "anchorlegal",
    "name": "AnchorLegal",
    "nameHe": "פורטל לקוחות למשרד עו״ד",
    "tagline": "Case updates without phone tag",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "v0",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 46,
    "slug": "ripplepay",
    "name": "RipplePay",
    "nameHe": "העברות בין חברים",
    "tagline": "Split bills without awkwardness",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 47,
    "slug": "cedarlodge",
    "name": "CedarLodge",
    "nameHe": "ניהול צימרים",
    "tagline": "Bookings, cleanings, reviews",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 48,
    "slug": "focusring",
    "name": "FocusRing",
    "nameHe": "טיימר פומודורו לצוותים",
    "tagline": "Deep work, shared cadence",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 49,
    "slug": "brightpath",
    "name": "BrightPath",
    "nameHe": "מסלולי קריירה לעובדים",
    "tagline": "Skills maps that guide growth",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "Claude",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 50,
    "slug": "irongym",
    "name": "IronGym",
    "nameHe": "ניהול מנויים לחדר כושר",
    "tagline": "Check-ins, plans, renewals",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 51,
    "slug": "nesthome",
    "name": "NestHome",
    "nameHe": "לוח מודעות לבניין",
    "tagline": "Neighbors, notices, bookings",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 52,
    "slug": "sparkhire",
    "name": "SparkHire",
    "nameHe": "גיוס ראשוני לסטארטאפ",
    "tagline": "Scorecards that stay fair",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 53,
    "slug": "coralreef",
    "name": "CoralReef",
    "nameHe": "שוק דיגיטלי ליצירה",
    "tagline": "Sell digital goods cleanly",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "v0",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 54,
    "slug": "monotype",
    "name": "MonoType",
    "nameHe": "עורך פונטים פשוט",
    "tagline": "Tweak glyphs with AI hints",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 55,
    "slug": "lakeview",
    "name": "LakeView",
    "nameHe": "דשבורד נדל״ן",
    "tagline": "Listings, leads, showings",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 56,
    "slug": "honeypot",
    "name": "HoneyPot",
    "nameHe": "ניהול מלאי למכולת",
    "tagline": "Restock before shelves empty",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 57,
    "slug": "slidedeck",
    "name": "SlideDeck",
    "nameHe": "מצגות שנוצרות מתוכן",
    "tagline": "Turn notes into decks fast",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Claude",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 58,
    "slug": "quietroom",
    "name": "QuietRoom",
    "nameHe": "הזמנת חדרי ישיבות",
    "tagline": "Rooms that stay available",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 59,
    "slug": "trailmap",
    "name": "TrailMap",
    "nameHe": "מפות מסלולי הליכה",
    "tagline": "Routes with elevation and tips",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 60,
    "slug": "badgepass",
    "name": "BadgePass",
    "nameHe": "כרטיסים לאירועים",
    "tagline": "Check-in that feels instant",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 61,
    "slug": "copperwire",
    "name": "CopperWire",
    "nameHe": "מעקב תקציב פרויקט",
    "tagline": "Burn rate without surprises",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "v0",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 62,
    "slug": "softlaunch",
    "name": "SoftLaunch",
    "nameHe": "עמוד המתנה למוצרים",
    "tagline": "Collect emails that convert",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 63,
    "slug": "yardsale",
    "name": "YardSale",
    "nameHe": "שוק יד שנייה מקומי",
    "tagline": "List, chat, meetup",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 64,
    "slug": "pinecoach",
    "name": "PineCoach",
    "nameHe": "מאמן הרגלים יומי",
    "tagline": "Tiny habits, visible streaks",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 65,
    "slug": "gridlock",
    "name": "GridLock",
    "nameHe": "ניהול חניות לעיר",
    "tagline": "Spots, permits, payments",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "Claude",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 66,
    "slug": "echolab",
    "name": "EchoLab",
    "nameHe": "סטודיו פודקאסט",
    "tagline": "Record, edit, publish",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 67,
    "slug": "silverline",
    "name": "SilverLine",
    "nameHe": "בנקאות לעסקים קטנים",
    "tagline": "Cashflow you can read",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 68,
    "slug": "fieldnote",
    "name": "FieldNote",
    "nameHe": "יומן שטח לחוקרים",
    "tagline": "Capture observations offline",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 69,
    "slug": "warminbox",
    "name": "WarmInbox",
    "nameHe": "תיבת דואר חכמה",
    "tagline": "Triage mail with AI labels",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "v0",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 70,
    "slug": "brickbase",
    "name": "BrickBase",
    "nameHe": "CRM לקבלנים",
    "tagline": "Quotes, jobs, invoices",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 71,
    "slug": "skypilot",
    "name": "SkyPilot",
    "nameHe": "תכנון טיסות לחובבים",
    "tagline": "Weather, routes, checklists",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 72,
    "slug": "dosetrack",
    "name": "DoseTrack",
    "nameHe": "תזכורות תרופות",
    "tagline": "Never miss a dose again",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 73,
    "slug": "marketlane",
    "name": "MarketLane",
    "nameHe": "דוכנים בשוק איכרים",
    "tagline": "Stall schedules and sales",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "Claude",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 74,
    "slug": "blueprint",
    "name": "BluePrint",
    "nameHe": "שרטוטים שיתופיים",
    "tagline": "Comment on plans in context",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 75,
    "slug": "toastmenu",
    "name": "ToastMenu",
    "nameHe": "תפריט דיגיטלי למסעדה",
    "tagline": "QR menus that update live",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 76,
    "slug": "relaychat",
    "name": "RelayChat",
    "nameHe": "צ׳אט צוותי מהיר",
    "tagline": "Threads that stay searchable",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 77,
    "slug": "sandbox",
    "name": "SandBox",
    "nameHe": "סביבת ניסויים למוצר",
    "tagline": "Prototype with real data",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "v0",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 78,
    "slug": "oliveoil",
    "name": "OliveOil",
    "nameHe": "חנות מותג שמן זית",
    "tagline": "Origin stories and orders",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 79,
    "slug": "nightowl",
    "name": "NightOwl",
    "nameHe": "מעקב שינה עדין",
    "tagline": "Sleep insights without noise",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 80,
    "slug": "claimform",
    "name": "ClaimForm",
    "nameHe": "טפסי תביעה דיגיטליים",
    "tagline": "Guided forms that finish",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 81,
    "slug": "urbanfarm",
    "name": "UrbanFarm",
    "nameHe": "ניהול גינה קהילתית",
    "tagline": "Plots, harvests, volunteers",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "Claude",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 82,
    "slug": "ledgerlite",
    "name": "LedgerLite",
    "nameHe": "חשבוניות לבעלי מקצוע",
    "tagline": "Invoice, remind, get paid",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 83,
    "slug": "storyarc",
    "name": "StoryArc",
    "nameHe": "כתיבת תסריטים עם AI",
    "tagline": "Structure scenes that land",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 84,
    "slug": "peakcamp",
    "name": "PeakCamp",
    "nameHe": "הזמנות לקמפינג",
    "tagline": "Sites, gear, weather",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 85,
    "slug": "wireframe",
    "name": "Wireframe",
    "nameHe": "כלי wireframe מהיר",
    "tagline": "Boxes to flows in minutes",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "v0",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 86,
    "slug": "giftlist",
    "name": "GiftList",
    "nameHe": "רשימות מתנות משותפות",
    "tagline": "Wishlists friends actually use",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 87,
    "slug": "cliniclab",
    "name": "ClinicLab",
    "nameHe": "תוצאות מעבדה למטופלים",
    "tagline": "Results with plain language",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 88,
    "slug": "routewise",
    "name": "RouteWise",
    "nameHe": "אופטימיזציית מסלולי שליחים",
    "tagline": "Fewer miles, same stops",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 89,
    "slug": "brandkit",
    "name": "BrandKit",
    "nameHe": "מערכת מותג דיגיטלית",
    "tagline": "Colors, type, assets synced",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "Claude",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 90,
    "slug": "petnest",
    "name": "PetNest",
    "nameHe": "ניהול מרפאת חיות",
    "tagline": "Visits, vaccines, owners",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  },
  {
    "id": 91,
    "slug": "livescore",
    "name": "LiveScore",
    "nameHe": "לוח תוצאות ספורט מקומי",
    "tagline": "Games, brackets, updates",
    "category": "saas",
    "categoryHe": "SaaS ודשבורדים",
    "layout": "landing",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#0B1220",
      "surface": "#151E2E",
      "text": "#E8EEF7",
      "muted": "#8B9BB4",
      "accent": "#3DDC97",
      "accent2": "#FF6B4A"
    },
    "features": [
      "Hero",
      "Features",
      "CTA",
      "Social proof"
    ]
  },
  {
    "id": 92,
    "slug": "shelflife",
    "name": "ShelfLife",
    "nameHe": "מעקב תאריכי תפוגה",
    "tagline": "Waste less inventory",
    "category": "ai",
    "categoryHe": "כלי AI וצ׳אט",
    "layout": "dashboard",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#FAF7F2",
      "surface": "#FFFFFF",
      "text": "#1A1A1A",
      "muted": "#6B6560",
      "accent": "#0D7377",
      "accent2": "#D97706"
    },
    "features": [
      "KPI cards",
      "Charts",
      "Activity feed",
      "Filters"
    ]
  },
  {
    "id": 93,
    "slug": "mentormatch",
    "name": "MentorMatch",
    "nameHe": "חיבור מנטורים למתלמדים",
    "tagline": "Matches that stick",
    "category": "commerce",
    "categoryHe": "מסחר וחנויות",
    "layout": "chat",
    "builtWith": "v0",
    "palette": {
      "bg": "#111111",
      "surface": "#1C1C1C",
      "text": "#F5F5F5",
      "muted": "#A0A0A0",
      "accent": "#F4C430",
      "accent2": "#E85D04"
    },
    "features": [
      "Thread list",
      "Composer",
      "Suggestions",
      "Sources"
    ]
  },
  {
    "id": 94,
    "slug": "cloudpantry",
    "name": "CloudPantry",
    "nameHe": "מלאי מטבח ביתי",
    "tagline": "Know what you have",
    "category": "health",
    "categoryHe": "בריאות וכושר",
    "layout": "marketplace",
    "builtWith": "Bolt",
    "palette": {
      "bg": "#F0F4F8",
      "surface": "#FFFFFF",
      "text": "#0F172A",
      "muted": "#64748B",
      "accent": "#0284C7",
      "accent2": "#059669"
    },
    "features": [
      "Product grid",
      "Filters",
      "Cart",
      "Ratings"
    ]
  },
  {
    "id": 95,
    "slug": "stagelight",
    "name": "StageLight",
    "nameHe": "ניהול מופעים קטנים",
    "tagline": "Cue sheets and crew",
    "category": "finance",
    "categoryHe": "פיננסים ובנקים",
    "layout": "kanban",
    "builtWith": "Lovable",
    "palette": {
      "bg": "#1A0F0A",
      "surface": "#2A1A12",
      "text": "#FDE8D0",
      "muted": "#B8956C",
      "accent": "#E07A3D",
      "accent2": "#C4A35A"
    },
    "features": [
      "Columns",
      "Cards",
      "Drag affordance",
      "WIP limits"
    ]
  },
  {
    "id": 96,
    "slug": "taxease",
    "name": "TaxEase",
    "nameHe": "הכנה למס לעצמאים",
    "tagline": "Receipts sorted by season",
    "category": "education",
    "categoryHe": "למידה וחינוך",
    "layout": "calendar",
    "builtWith": "Copilot",
    "palette": {
      "bg": "#0A1628",
      "surface": "#122033",
      "text": "#E6F0FF",
      "muted": "#7A93B0",
      "accent": "#5B8DEF",
      "accent2": "#22D3EE"
    },
    "features": [
      "Week view",
      "Events",
      "Availability",
      "Reminders"
    ]
  },
  {
    "id": 97,
    "slug": "neighborly",
    "name": "Neighborly",
    "nameHe": "החלפת שירותים בשכונה",
    "tagline": "Trade skills nearby",
    "category": "productivity",
    "categoryHe": "פרודוקטיביות",
    "layout": "analytics",
    "builtWith": "Claude",
    "palette": {
      "bg": "#FFF8F0",
      "surface": "#FFFFFF",
      "text": "#2D1810",
      "muted": "#8A6A55",
      "accent": "#C45C26",
      "accent2": "#2F5D50"
    },
    "features": [
      "Funnel",
      "Cohorts",
      "Export",
      "Alerts"
    ]
  },
  {
    "id": 98,
    "slug": "filmreel",
    "name": "FilmReel",
    "nameHe": "ארכיון צילומים לצוותים",
    "tagline": "Find the shot, not the folder",
    "category": "social",
    "categoryHe": "חברתי ותוכן",
    "layout": "feed",
    "builtWith": "Cursor",
    "palette": {
      "bg": "#0D1117",
      "surface": "#161B22",
      "text": "#E6EDF3",
      "muted": "#8B949E",
      "accent": "#3FB950",
      "accent2": "#58A6FF"
    },
    "features": [
      "Posts",
      "Comments",
      "Reactions",
      "Compose"
    ]
  },
  {
    "id": 99,
    "slug": "aquapark",
    "name": "AquaPark",
    "nameHe": "כרטיסים לפארק מים",
    "tagline": "Capacity, passes, lines",
    "category": "travel",
    "categoryHe": "נסיעות ואירוח",
    "layout": "form",
    "builtWith": "GPT-4",
    "palette": {
      "bg": "#F5F0EB",
      "surface": "#FFFDF9",
      "text": "#1C1917",
      "muted": "#78716C",
      "accent": "#0F766E",
      "accent2": "#B45309"
    },
    "features": [
      "Multi-step",
      "Validation",
      "Progress",
      "Review"
    ]
  },
  {
    "id": 100,
    "slug": "buildlog",
    "name": "BuildLog",
    "nameHe": "יומן בנייה יומי",
    "tagline": "Photos and notes per day",
    "category": "ops",
    "categoryHe": "תפעול ולוגיסטיקה",
    "layout": "studio",
    "builtWith": "Gemini",
    "palette": {
      "bg": "#14121A",
      "surface": "#1E1B26",
      "text": "#F2EEF8",
      "muted": "#9B93A8",
      "accent": "#E879A9",
      "accent2": "#A78BFA"
    },
    "features": [
      "Canvas",
      "Layers",
      "AI assist",
      "Export"
    ]
  }
];

export function getDemo(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}
