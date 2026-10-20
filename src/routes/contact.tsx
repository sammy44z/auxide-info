import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request Early Access — AUXIDE AI" },
      {
        name: "description",
        content:
          "AUXIDE AI is currently in an exclusive closed beta. Secure your spot to gain a massive competitive edge on your next tender.",
      },
      { property: "og:title", content: "Request Early Access — AUXIDE AI" },
      {
        property: "og:description",
        content:
          "AUXIDE AI is currently in an exclusive closed beta. Secure your spot to gain a massive competitive edge on your next tender.",
      },
    ],
  }),
  component: Contact,
});

const ticketSizes = [
  "Below ₹50 Lakh",
  "₹50 Lakh - ₹5 Cr",
  "₹5 Cr - ₹100 Cr",
  "Above ₹100 Cr",
];

const fieldClass =
  "mt-2 w-full border border-input bg-paper-raised px-4 py-3 text-sm outline-none transition-colors duration-150 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/25";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="grid-paper">
      <div className="mx-auto max-w-2xl px-5 py-20 lg:py-28">
        <div className="border border-hairline bg-paper-raised p-8 lg:p-12">
          {submitted ? (
            <div className="py-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center border border-foreground bg-accent">
                <Check className="h-6 w-6 text-accent-foreground" />
              </span>
              <h1 className="mt-8 text-3xl font-semibold">Thanks! We&apos;ll be in touch soon.</h1>
              <p className="mt-4 text-muted-foreground">
                Your request is queued for review. Our team typically responds within two business
                days.
              </p>
              <p className="label-tech mt-8 text-muted-foreground">Request ID · Pending</p>
            </div>
          ) : (
            <>
              <Eyebrow>Closed Beta</Eyebrow>
              <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Request Early Access</h1>
              <p className="mt-4 text-muted-foreground">
                AUXIDE AI is currently in an exclusive closed beta. Secure your spot to gain a
                massive competitive edge on your next tender.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div>
                  <label htmlFor="name" className="label-tech text-foreground">
                    Full Name *
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="label-tech text-foreground">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="label-tech text-foreground">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    className={fieldClass}
                    placeholder="Company Infrastructure Pvt. Ltd."
                  />
                </div>
                <div>
                  <label htmlFor="ticket" className="label-tech text-foreground">
                    Typical Project Ticket Size
                  </label>
                  <select id="ticket" name="ticket" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {ticketSizes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="label-tech text-foreground">
                    Message / Specific Pain Points
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Where does your current bidding process break down?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-foreground bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  Request Beta Access
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
