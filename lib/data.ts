export type Finding = {
  customer: string;
  initials: string;
  type: string;
  leak: number;
  confidence: number;
  sources: string[];
  status: "Open" | "Review" | "Monitoring";
  color: string;
};

export const findings: Finding[] = [
  { customer: "Cortex Labs", initials: "CL", type: "Unbilled usage", leak: 18420, confidence: 99, sources: ["Stripe", "Usage API", "Contract"], status: "Open", color: "#8b7cf6" },
  { customer: "Vertex AI", initials: "VA", type: "Expired discount", leak: 13800, confidence: 98, sources: ["Stripe", "Salesforce"], status: "Open", color: "#34d399" },
  { customer: "Nova Systems", initials: "NS", type: "Seat mismatch", leak: 11760, confidence: 96, sources: ["Stripe", "Product"], status: "Review", color: "#38bdf8" },
  { customer: "PolarStack", initials: "PS", type: "Missed uplift", leak: 7440, confidence: 97, sources: ["Contract", "Chargebee"], status: "Open", color: "#fbbf24" },
  { customer: "QuantaWorks", initials: "QW", type: "Meter gap", leak: 3280, confidence: 78, sources: ["Orb", "Warehouse"], status: "Review", color: "#fb7185" },
  { customer: "Helix Data", initials: "HD", type: "Tier mismatch", leak: 2140, confidence: 72, sources: ["Contract", "Stripe"], status: "Monitoring", color: "#2dd4bf" },
  { customer: "Northstar ML", initials: "NM", type: "Credit anomaly", leak: 1680, confidence: 64, sources: ["NetSuite", "Stripe"], status: "Review", color: "#a78bfa" },
];

export const primaryFindings = findings.slice(0, 4);

export const revenueTrend = [
  { month: "Apr", expected: 905, billed: 897 },
  { month: "May", expected: 944, billed: 931 },
  { month: "Jun", expected: 978, billed: 962 },
  { month: "Jul", expected: 1016, billed: 994 },
  { month: "Aug", expected: 1070, billed: 1042 },
  { month: "Sep", expected: 1131.42, billed: 1080 },
];

export const integrityTrend = [
  { month: "Apr", score: 99.1 }, { month: "May", score: 98.6 }, { month: "Jun", score: 98.4 },
  { month: "Jul", score: 97.8 }, { month: "Aug", score: 97.4 }, { month: "Sep", score: 95.5 },
];

export const contracts = [
  { customer: "Cortex Labs", value: "$384,000", model: "Subscription + usage", renewal: "Jan 1, 2027", discount: "—", allowance: "1M API calls", overage: "$0.0045 / call", uplift: "5%", confidence: 99 },
  { customer: "Vertex AI", value: "$828,000", model: "Enterprise commit", renewal: "Mar 15, 2027", discount: "20% · expired", allowance: "4B tokens", overage: "$0.08 / 1K", uplift: "8%", confidence: 98 },
  { customer: "Nova Systems", value: "$582,120", model: "Per-seat", renewal: "Nov 1, 2026", discount: "10%", allowance: "198 seats", overage: "$49 / seat", uplift: "5%", confidence: 97 },
  { customer: "PolarStack", value: "$1,275,420", model: "Annual platform", renewal: "Sep 1, 2026", discount: "—", allowance: "12K compute hrs", overage: "$1.80 / hr", uplift: "7%", confidence: 99 },
  { customer: "QuantaWorks", value: "$244,800", model: "Usage tiered", renewal: "Jun 30, 2027", discount: "5%", allowance: "500M events", overage: "Tiered", uplift: "3%", confidence: 91 },
];

export const invoices = [
  { customer: "Cortex Labs", invoice: "INV-02691", period: "Sep 1–30, 2026", expected: 50420, billed: 32000, status: "Paid", flag: true },
  { customer: "Vertex AI", invoice: "INV-02674", period: "Sep 1–30, 2026", expected: 69000, billed: 55200, status: "Paid", flag: true },
  { customer: "Nova Systems", invoice: "INV-02702", period: "Sep 1–30, 2026", expected: 11760, billed: 0, status: "Draft", flag: true },
  { customer: "PolarStack", invoice: "INV-02648", period: "Sep 1–30, 2026", expected: 113726, billed: 106286, status: "Paid", flag: true },
  { customer: "Helix Data", invoice: "INV-02659", period: "Sep 1–30, 2026", expected: 28420, billed: 28420, status: "Paid", flag: false },
  { customer: "Luma Cloud", invoice: "INV-02687", period: "Sep 1–30, 2026", expected: 22100, billed: 22100, status: "Paid", flag: false },
];

export const aiAnswers: Record<string, { intro: string; rows: typeof primaryFindings }> = {
  "Why is September revenue below expected?": { intro: "I identified four material discrepancies that explain the full September variance.", rows: primaryFindings },
  "Which customers are underbilled?": { intro: "Four accounts have high-confidence underbilling in the September close.", rows: primaryFindings },
  "Show expired discounts.": { intro: "One material expired promotion is still applied. Vertex AI’s 20% discount ended August 31.", rows: [primaryFindings[1]] },
  "Which invoices conflict with contracts?": { intro: "These invoices conflict with machine-readable pricing or entitlement rules extracted from signed contracts.", rows: primaryFindings },
  "Where are we losing the most revenue?": { intro: "Unbilled metered usage is the largest root cause, led by Cortex Labs at $18,420.", rows: primaryFindings },
  "What revenue can we recover this month?": { intro: "$41,280 is immediately recoverable at high confidence; $10,140 requires customer or finance review.", rows: primaryFindings.slice(0, 3) },
  "Why was Cortex Labs flagged?": { intro: "Cortex Labs used 4.09M calls above its allowance, but its Stripe invoice contains no overage line.", rows: [primaryFindings[0]] },
};
