import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — AUXIDE AI" },
      {
        name: "description",
        content:
          "The terms governing use of the AUXIDE AI closed beta platform for deterministic infrastructure bid computation.",
      },
      { property: "og:title", content: "Terms of Service — AUXIDE AI" },
      {
        property: "og:description",
        content: "Terms governing use of the AUXIDE AI closed beta platform.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    heading: "Beta access",
    body: "Access to AUXIDE AI is granted at our discretion during the closed beta period and may be modified or withdrawn. Beta features are provided as-is while the platform continues to be calibrated.",
  },
  {
    heading: "Acceptable use",
    body: "You agree not to reverse engineer the platform, resell computed outputs as a standalone data product, or upload documents you are not authorized to process.",
  },
  {
    heading: "Outputs and responsibility",
    body: "AUXIDE AI produces computed cost stacks and bid bands from the rules and inputs supplied. Final bidding decisions, submissions, and contractual commitments remain the responsibility of your organization.",
  },
  {
    heading: "Intellectual property",
    body: "The rule store, calibration models, and platform software remain the property of AUXIDE AI. Your tender documents and company cost data remain yours.",
  },
];

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated 15 August 2026. These terms govern access to the AUXIDE AI platform during the closed beta."
      />
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
          <div className="border-t border-hairline">
            {sections.map((s, i) => (
              <article key={s.heading} className="border-b border-hairline py-8">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-semibold">{s.heading}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
