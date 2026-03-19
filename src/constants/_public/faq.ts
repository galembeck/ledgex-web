export const faqs = [
  {
    question: "How does LedgeX detect anomalies?",
    answer:
      "Our AI models establish a baseline of your normal spending patterns — vendors, amounts, frequency, categories. When a transaction deviates significantly from this baseline, it's flagged with a risk score and explanation. No manual rules required.",
  },
  {
    question: "What financial accounts can I connect?",
    answer:
      "LedgeX integrates with 12,000+ financial institutions via Plaid. Connect bank accounts, credit cards, and payment processors. All connections are read-only and encrypted with AES-256.",
  },
  {
    question: "How accurate is the AI categorization?",
    answer:
      "Our models achieve 99.2% accuracy on transaction categorization. For edge cases, the system learns from your corrections and improves over time with feedback loops.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and all data is encrypted at rest and in transit. We never store bank credentials — we use tokenized access via Plaid.",
  },
  {
    question: "How fast can we get started?",
    answer:
      "Most teams are fully onboarded in under 15 minutes. Connect your accounts, and LedgeX starts analyzing immediately. Historical data is typically processed within 24 hours.",
  },
];
