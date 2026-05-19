export const sample = {
  "repoName": "foxhen-service-pricing-calculator",
  "title": "Service Pricing Calculator",
  "subtitle": "Scope-to-quote configurator",
  "serviceLine": "Pricing and quote design",
  "heroTitle": "Configure a fixed-fee offer with visible tradeoffs.",
  "heroCopy": "A fictional pricing calculator that turns service scope, turnaround, complexity, and add-ons into a transparent estimate and delivery plan.",
  "primaryAction": "Calculate quote",
  "secondaryAction": "Compare tiers",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-service-pricing-calculator",
  "liveDemoUrl": "https://foxhen-service-pricing-calculator.vercel.app",
  "theme": {
    "accent": "#654834",
    "accent2": "#65b88c",
    "ink": "#150d07",
    "soft": "#f7efe7",
    "warm": "#e7fff2",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Quote scenarios",
      "value": "12",
      "note": "saved examples"
    },
    {
      "label": "Scope clarity",
      "value": "95%",
      "note": "+29 pts"
    },
    {
      "label": "Margin guardrail",
      "value": "Good",
      "note": "time boxed"
    }
  ],
  "stages": [
    {
      "label": "Scope",
      "detail": "Define desired outcome, assets available, complexity, and excluded work.",
      "status": "ready",
      "owner": "Sales",
      "index": 1
    },
    {
      "label": "Price",
      "detail": "Apply effort bands, rush factor, uncertainty, and fixed-fee floor.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Options",
      "detail": "Compare good, better, and best packages without scope creep.",
      "status": "waiting",
      "owner": "Buyer",
      "index": 3
    },
    {
      "label": "Handoff",
      "detail": "Create quote notes, assumptions, and acceptance criteria.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Base package",
      "detail": "One-day cleanup estimate",
      "status": "ready"
    },
    {
      "title": "Rush option",
      "detail": "48-hour build with handoff",
      "status": "active"
    },
    {
      "title": "Addon rules",
      "detail": "Waiting on service menu",
      "status": "waiting"
    },
    {
      "title": "Quote memo",
      "detail": "Queued for export",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Estimator",
      "detail": "Interactive knobs for size, complexity, speed, and add-ons."
    },
    {
      "title": "Tier comparison",
      "detail": "A clean view of what changes between packages."
    },
    {
      "title": "Quote memo",
      "detail": "Assumptions and acceptance checks that reduce disputes."
    }
  ],
  "timeline": [
    {
      "time": "0-1 hr",
      "detail": "Map offer components and effort bands"
    },
    {
      "time": "1-5 hrs",
      "detail": "Build calculator and tier logic"
    },
    {
      "time": "5-8 hrs",
      "detail": "QA edge cases and write handoff"
    }
  ],
  "proof": [
    "Useful for Fox & Hen service packaging and Upwork fixed-price offers.",
    "Shows business logic, not just UI polish.",
    "All pricing data is fictional sample material."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
