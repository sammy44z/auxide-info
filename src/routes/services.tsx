import { createFileRoute } from "@tanstack/react-router";
import { BentoCell, CtaButton, Eyebrow, Index, PageHeader } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Your Unfair Advantage — AUXIDE AI" },
      {
        name: "description",
        content:
          "AUXIDE protects your margins across every contract. Direct-tender dominance, subcontractor margin protection, and enterprise EPC scaling.",
      },
      { property: "og:title", content: "Your Unfair Advantage — AUXIDE AI" },
      {
        property: "og:description",
        content:
          "Whether you are bidding directly to the government or negotiating with a prime contractor, AUXIDE protects your margins.",
      },
    ],
  }),
  component: Services,
});

const offerings = [
  {
    index: "01",
    title: "Direct-Tender Dominance",
    body: "Stop flying blind against government estimates. Know your exact survivable bid band before your competitors even finish their paperwork.",
    tag: "For Class A, B & C Contractors",
  },
  {
    index: "02",
    title: "Subcontractor Margin Protection",
    body: "Offered a fixed rate by a prime contractor? AUXIDE evaluates the prime's rate instantly, ensuring you never take on a subcontract that bleeds cash.",
    tag: "Rate Viability",
  },
  {
    index: "03",
    title: "Enterprise EPC Scaling",
    body: "Supercharge your commercial estimation teams. Automate repetitive rate analysis with absolute precision, allowing your teams to bid on more projects with zero margin for error.",
    tag: "EPC Scale",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Your Unfair Advantage Across Every Contract."
        subtitle="Whether you are bidding directly to the government or negotiating with a prime contractor, AUXIDE protects your margins."
      />

      <section className="grid-paper border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Eyebrow>Service Offerings</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Computation, mapped to how you actually win work.
          </h2>
          <div className="mt-12 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
            {offerings.map((o) => (
              <BentoCell key={o.index}>
                <div className="flex items-center justify-between">
                  <Index value={o.index} />
                  <span className="label-tech text-muted-foreground">{o.tag}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{o.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </BentoCell>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-start gap-4 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg font-medium">
              See the engine run against your own tender documents.
            </p>
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
