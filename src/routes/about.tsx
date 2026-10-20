import { createFileRoute } from "@tanstack/react-router";
import { BentoCell, CtaButton, Eyebrow, PageHeader } from "@/components/site/primitives";
import shubhamPhoto from "@/assets/shubham-raj.jpg.asset.json";
import soumyaPhoto from "@/assets/soumya-bera.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Vision & Team — AUXIDE AI" },
      {
        name: "description",
        content:
          "AUXIDE AI is digitizing India's ₹17.8 lakh crore infrastructure market. Built on verified engineering rules and real-world execution data.",
      },
      { property: "og:title", content: "Vision & Team — AUXIDE AI" },
      {
        property: "og:description",
        content:
          "We are building the definitive commercial intelligence layer for the entire Indian infrastructure ecosystem.",
      },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Shubham Raj",
    initials: "SR",
    photo: shubhamPhoto.url,
    title: "Co-Founder — Infrastructure & Business",
    education: "IIM Ahmedabad, Hansraj College",
    bullets: [
      "4+ years across infrastructure, project operations, and business development.",
      "Director at an infrastructure company, with hands-on exposure to project execution, contractors, vendors, and government stakeholders.",
      "Experience across tendering, project coordination, commercial operations, and execution.",
      "Drove marketing, client acquisition, and growth initiatives as the Founder of multiple marketing agencies.",
    ],
  },
  {
    name: "Soumya Kanti Bera",
    initials: "SB",
    photo: soumyaPhoto.url,
    title: "Co-Founder — Technology & AI",
    education: "IIM Ahmedabad, IIT Bhubaneswar",
    bullets: [
      "5+ years of engineering experience spanning full-stack development, data infrastructure, and applied AI.",
      "Senior Software Engineer at top-tier AI companies including Automation Anywhere, Aisera, and Brane.",
      "Architected and deployed scalable software systems, robust data pipelines, and production-ready AI applications.",
      "Deep technical expertise in translating complex machine learning models and deterministic algorithms into enterprise-grade SaaS platforms.",
    ],
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Vision"
        title="Digitizing India's ₹17.8 Lakh Crore Infrastructure Market."
        subtitle="We aren't building just another estimation tool. We are building the definitive commercial intelligence layer for the entire Indian infrastructure ecosystem."
      />

      {/* Why We Win */}
      <section className="grid-dotted border-b border-hairline bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Eyebrow onInk>Why We Win</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">
            We know what it actually costs to build in India.
          </h2>
          <div className="mt-12 grid gap-px border border-ink-hairline bg-ink-hairline lg:grid-cols-1">
            <BentoCell onInk>
              <p className="text-lg leading-relaxed text-ink-foreground/90">
                Generalist software fails in construction because it doesn&apos;t understand local
                realities. We do. AUXIDE is built on a proprietary foundation of verified
                engineering rules, district-level material costs, and real-world execution data.
              </p>
            </BentoCell>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="grid-paper border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Eyebrow>The Team</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold sm:text-4xl">
            Technology built by founders. Infrastructure intelligence built from decades of
            execution.
          </h2>
          <div className="mt-12 grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
            {team.map((m) => (
              <BentoCell key={m.name}>
                <div className="flex items-start gap-5 border-b border-hairline pb-6">
                  <img
                    src={m.photo}
                    alt={`${m.name} — ${m.title}`}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 border border-foreground object-cover object-top"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.title}</p>
                    <p className="label-tech mt-3 text-muted-foreground">{m.education}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </BentoCell>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-start gap-4 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg font-medium">
              Join the closed beta and bid with computed certainty.
            </p>
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
