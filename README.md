# RevLeak AI

A polished, local-first prototype for AI-powered revenue forensics. RevLeak independently reconstructs expected revenue from customer contracts, product usage, pricing rules, CRM context, and invoice data, then presents evidence-backed discrepancies to finance teams.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build:

```bash
npm run build
npm start
```

## Product architecture

- `app/page.tsx` controls the transition between the public site and sample workspace.
- `components/marketing.tsx` contains the marketing experience and live-audit preview.
- `components/product-app.tsx` contains the interactive finance application, navigation, charts, evidence views, AI Investigator, and simulated integration flow.
- `lib/data.ts` is the deterministic synthetic data layer for findings, contracts, invoices, chart series, and AI answers.
- `app/globals.css` defines the responsive premium visual system and component states.

No API, database, credentials, or backend is required. All interactions and calculations run entirely in the browser.

## Demo scenario

The fictional company **Axiom AI** is a $12.8M ARR AI infrastructure business with 146 customers. Its September 2026 close contains a $51,420 variance between $1,131,420 in reconstructed expected revenue and $1,080,000 in billed revenue.

Four material findings explain the variance exactly:

| Customer | Finding | Leakage |
| --- | --- | ---: |
| Cortex Labs | Unbilled API overage | $18,420 |
| Vertex AI | Expired discount | $13,800 |
| Nova Systems | Seat mismatch | $11,760 |
| PolarStack | Missed annual uplift | $7,440 |

Start with **Explore live revenue audit**, review the mission in Overview, use suggested prompts in AI Investigator, and open Cortex Labs to trace its contract clause through usage and invoice evidence.

## Synthetic data

All names, contracts, usage records, invoices, findings, and integration states are fictional and deterministic. Lower-confidence secondary findings are included to create a credible review queue. “Run on your data” demonstrates the intended connection experience only; its integrations are explicitly simulated and do not collect information.
