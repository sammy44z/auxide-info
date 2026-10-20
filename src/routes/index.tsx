import { createFileRoute } from "@tanstack/react-router";
import { BentoCell, CtaButton, Eyebrow, Index } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AUXIDE AI — Bid to Win. Price to Survive." },
      {
        name: "description",
        content:
          "AUXIDE AI computes your exact break-even. The ultimate bidding operating system for Indian infrastructure contractors.",
      },
      {
        property: "og:title",
        content: "AUXIDE AI — Bid to Win. Price to Survive.",
      },
      {
        property: "og:description",
        content:
          "While competitors guess their margins, AUXIDE AI computes your exact break-even. The operating system for Indian infrastructure contractors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://auxide.ai/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://auxide.ai/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AUXIDE AI",
          url: "https://auxide.ai",
          logo: "https://auxide.ai/favicon.png",
          description:
            "Bidding operating system that computes exact break-even for Indian infrastructure contractors.",
          areaServed: "IN",
          founder: [
            { "@type": "Person", name: "Shubham Raj" },
            { "@type": "Person", name: "Soumya Kanti Bera" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const advantageColumns = [
  {
    index: "01",
    name: "Stop Guessing.",
    output:
      "Existing tools just aggregate tenders or give you generic estimates. We give you financial reality.",
    defensibility: "Advantage",
  },
  {
    index: "02",
    name: "Your Fleet. Your Capital.",
    output:
      "We don't use generic templates. AUXIDE calculates viability based strictly on your owned equipment and your cost of capital.",
    defensibility: "Personalized",
  },
  {
    index: "03",
    name: "Beat Payment Delays.",
    output:
      "Net-60 payment delays destroy cash flow. Our engine calculates the exact working capital you need to float the project safely before you ever submit a bid.",
    defensibility: "Protected",
  },
];

const standOutPoints = [
  {
    index: "01",
    title: "Verified Government Data",
    body: "Powered by a massive, proprietary database of officially mined Schedule of Rates (SOR) across India.",
    io: "SOR RULES",
  },
  {
    index: "02",
    title: "Traceable Line by Line",
    body: "Every output, every margin, and every risk buffer is one click away from the exact engineering formula that created it.",
    io: "FULL TRACEABILITY",
  },
  {
    index: "03",
    title: "Actionable Levers",
    body: "Don't just get a \"No-Go\" score. AUXIDE tells you exactly what to change—like switching to owned equipment—to turn a losing bid into a highly profitable win.",
    io: "PROFIT LEVERS",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-paper relative border-b border-hairline">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center lg:py-36">
          <div className="flex justify-center">
            <span className="label-tech border border-hairline bg-paper-raised px-3 py-2 text-muted-foreground">
              Closed Beta · Infrastructure Bidding OS
            </span>
          </div>
          <h1 className="mt-8 text-4xl leading-[1.03] font-semibold sm:text-5xl lg:text-[4rem]">
            Bid to Win. Price to Survive.
          </h1>
          <h2 className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            While competitors guess their margins, AUXIDE AI computes your exact break-even. The
            ultimate bidding operating system for Indian infrastructure contractors.
          </h2>
          <div className="mt-10 flex justify-center">
            <CtaButton />
          </div>
          <p className="mt-6 font-mono text-xs tracking-wide text-muted-foreground">
            1,500+ executed tenders form our validation dataset.
          </p>
        </div>
      </section>

      {/* The Problem — ink block */}
      <section className="grid-dotted bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Eyebrow onInk>The Winner&apos;s Curse Ends Here</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            The Winner&apos;s Curse Ends Here.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-muted">
            Bidding 15% below the government estimate might win the contract, but will it bankrupt
            your company?
          </p>

          <div className="mt-14 grid gap-px border border-ink-hairline bg-ink-hairline md:grid-cols-3">
            {advantageColumns.map((c) => (
              <BentoCell key={c.name} onInk>
                <div className="flex items-center justify-between">
                  <Index value={c.index} onInk />
                  <span className="label-tech text-ink-muted">AUXIDE</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{c.name}</h3>
                <dl className="mt-6 space-y-4 border-t border-ink-hairline pt-6">
                  <div>
                    <dt className="label-tech text-ink-muted">Outcome</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-foreground/90">
                      {c.output}
                    </dd>
                  </div>
                  <div>
                    <dt className="label-tech text-ink-muted">Status</dt>
                    <dd className="mt-2 font-mono text-sm text-accent">{c.defensibility}</dd>
                  </div>
                </dl>
              </BentoCell>
            ))}
          </div>

          <div className="mt-px border border-accent bg-accent/10 p-8 lg:p-10">
            <span className="label-tech text-accent">The AUXIDE Difference</span>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed sm:text-xl">
              We compute the bid economics. Built from official Schedule of Rates (SOR) rules,
              personalized to your fleet and capital costs, and traceable line by line.
            </p>
          </div>
        </div>
      </section>

      {/* How We Stand Out */}
      <section className="grid-paper border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Eyebrow>How We Stand Out</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            We don&apos;t guess. We compute.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            No subjective AI scores. No black-box magic. Just hard, deterministic math backed by
            over 1,500 executed tenders.
          </p>

          <div className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
            {standOutPoints.map((s) => (
              <BentoCell key={s.index}>
                <div className="flex items-center justify-between border-b border-hairline pb-5">
                  <Index value={`STEP ${s.index}`} />
                  <span className="font-mono text-[0.625rem] tracking-widest text-muted-foreground">
                    {s.io}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </BentoCell>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg font-medium">
              Ready to compute your next bid instead of guessing it?
            </p>
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
