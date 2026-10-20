import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AUXIDE AI" },
      {
        name: "description",
        content:
          "How AUXIDE AI collects, processes, and protects tender data and account information for infrastructure contractors.",
      },
      { property: "og:title", content: "Privacy Policy — AUXIDE AI" },
      {
        property: "og:description",
        content: "How AUXIDE AI collects, processes, and protects your data.",
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    heading: "Information we collect",
    body: "We collect the details you submit through the early access form — name, work email, company name, typical project ticket size, and any message you send us. Tender documents uploaded during a beta engagement are processed solely to compute bid economics for your organization.",
  },
  {
    heading: "How we use it",
    body: "Your information is used to evaluate beta eligibility, provision platform access, and communicate about the product. We do not sell personal data, and we do not share your tender documents with other customers.",
  },
  {
    heading: "Retention and security",
    body: "Data is retained only as long as needed to deliver the service or meet legal obligations. Access is restricted to personnel who require it, and documents are encrypted in transit and at rest.",
  },
  {
    heading: "Your choices",
    body: "You can request access to, correction of, or deletion of your information at any time by contacting us through the early access form.",
  },
];

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated 15 August 2026. This policy explains what AUXIDE AI collects and how that information is handled."
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
