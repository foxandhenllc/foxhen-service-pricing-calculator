export type ItemStatus = "backlog" | "active" | "blocked" | "ready" | "done";

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  status: ItemStatus;
  priority: number;
  effort: number;
  friction: number;
  value: number;
  due: string;
  notes: string;
};

export type QualityCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
};

export const sample: {
  repoName: string;
  title: string;
  subtitle: string;
  serviceLine: string;
  description: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  theme: { accent: string; accent2: string; ink: string; soft: string; warm: string };
  items: WorkItem[];
  checks: QualityCheck[];
  deliverables: string[];
} = {
  "repoName": "foxhen-service-pricing-calculator",
  "title": "Service Pricing Calculator",
  "subtitle": "quote configurator",
  "serviceLine": "Pricing and quote design",
  "description": "Configure fixed-fee service packages with complexity, turnaround, add-ons, and acceptance criteria.",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-service-pricing-calculator",
  "liveDemoUrl": "https://freetoolsforpeople.com/service-pricing-calculator",
  "theme": {
    "accent": "#654834",
    "accent2": "#65b88c",
    "ink": "#150d07",
    "soft": "#f7efe7",
    "warm": "#e7fff2"
  },
  "items": [
    {
      "id": "ser-1",
      "title": "Base package",
      "category": "Intake",
      "owner": "Chris",
      "status": "active",
      "priority": 5,
      "effort": 2,
      "friction": 1,
      "value": 5,
      "due": "Today",
      "notes": "Sample quote configurator work item for pricing and quote design."
    },
    {
      "id": "ser-2",
      "title": "Rush option",
      "category": "Build",
      "owner": "Fox & Hen",
      "status": "backlog",
      "priority": 4,
      "effort": 4,
      "friction": 2,
      "value": 4,
      "due": "24h",
      "notes": "Sample quote configurator work item for pricing and quote design."
    },
    {
      "id": "ser-3",
      "title": "Addon rule",
      "category": "Review",
      "owner": "Buyer",
      "status": "blocked",
      "priority": 3,
      "effort": 3,
      "friction": 4,
      "value": 4,
      "due": "48h",
      "notes": "Sample quote configurator work item for pricing and quote design."
    },
    {
      "id": "ser-4",
      "title": "Complexity tier",
      "category": "Export",
      "owner": "Automation",
      "status": "ready",
      "priority": 4,
      "effort": 2,
      "friction": 2,
      "value": 3,
      "due": "This week",
      "notes": "Sample quote configurator work item for pricing and quote design."
    },
    {
      "id": "ser-5",
      "title": "Margin check",
      "category": "Intake",
      "owner": "QA",
      "status": "backlog",
      "priority": 2,
      "effort": 1,
      "friction": 1,
      "value": 3,
      "due": "Waiting",
      "notes": "Sample quote configurator work item for pricing and quote design."
    },
    {
      "id": "ser-6",
      "title": "Quote memo",
      "category": "Build",
      "owner": "Chris",
      "status": "done",
      "priority": 5,
      "effort": 5,
      "friction": 3,
      "value": 5,
      "due": "Next pass",
      "notes": "Sample quote configurator work item for pricing and quote design."
    }
  ],
  "checks": [
    {
      "id": "payer",
      "label": "Payer or owner is clear",
      "passed": true,
      "weight": 18
    },
    {
      "id": "deliverable",
      "label": "Deliverable has acceptance criteria",
      "passed": true,
      "weight": 18
    },
    {
      "id": "friction",
      "label": "Account/access friction is documented",
      "passed": false,
      "weight": 14
    },
    {
      "id": "handoff",
      "label": "Handoff package is generated",
      "passed": false,
      "weight": 16
    },
    {
      "id": "reuse",
      "label": "Repeatable pipeline note exists",
      "passed": true,
      "weight": 12
    }
  ],
  "deliverables": [
    "Ranked board",
    "Editable item inspector",
    "Readiness checklist",
    "Exportable handoff report"
  ]
};
