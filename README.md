# מאה דמואים · AI Systems Gallery

גלריה של **100 דמואי מערכות** שנראים כאילו נבנו בכלי AI (Claude, Cursor, GPT, Gemini, v0, Bolt, Lovable, Copilot).

## מה יש כאן

- עמוד גלריה עם חיפוש וסינון לפי קטגוריה / כלי AI
- 100 דמואים ייחודיים (שם, תיאור בעברית, פלטה, ופריסת ממשק)
- 10 תבניות ממשק: landing, dashboard, chat, marketplace, kanban, calendar, analytics, feed, form, studio
- תגית "Built with …" בכל דמו

## הרצה מקומית

```bash
npm install
npm run dev
```

בנייה לפרודקשן:

```bash
npm run build
npm run preview
```

## מבנה

- `src/data/demos.ts` — רשימת 100 הדמואים
- `src/layouts/*` — תבניות הממשק
- `src/pages/GalleryPage.tsx` — הגלריה
- `src/pages/DemoPage.tsx` — צפייה בדמו בודד
