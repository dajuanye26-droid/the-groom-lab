import { Check } from "lucide-react";
import { packages, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-cream-deep py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Services &amp; Packages
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Grooming packages for every coat.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Pricing is based on your dog&apos;s weight, up to {site.maxWeightLbs}
            lbs. Book online for exact availability in your area.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 shadow-soft transition-transform hover:-translate-y-1 ${
                  pkg.featured
                    ? "border-gold bg-espresso text-cream"
                    : "border-gold/20 bg-paper text-ink"
                }`}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-espresso">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl">{pkg.name}</h3>
                <p
                  className={`mt-1 text-sm font-medium uppercase tracking-wide ${
                    pkg.featured ? "text-gold-soft" : "text-gold-deep"
                  }`}
                >
                  {pkg.subtitle}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    pkg.featured ? "text-cream/75" : "text-ink-soft"
                  }`}
                >
                  {pkg.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {pkg.tiers.map((tier) => (
                    <li
                      key={tier.label}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${
                        pkg.featured
                          ? "border-cream/15 bg-cream/5"
                          : "border-gold/15 bg-cream/40"
                      }`}
                    >
                      <span>
                        <span className="font-semibold">{tier.label}</span>{" "}
                        <span
                          className={
                            pkg.featured ? "text-cream/60" : "text-ink-soft"
                          }
                        >
                          ({tier.weight})
                        </span>
                      </span>
                      <span className="font-display text-lg">
                        ${tier.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-6 flex items-center gap-2 text-sm ${
                    pkg.featured ? "text-cream/70" : "text-ink-soft"
                  }`}
                >
                  <Check className="h-4 w-4 shrink-0" />
                  Bath, brush-out, nail trim &amp; ear cleaning included
                </div>

                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    pkg.featured
                      ? "bg-gold text-espresso hover:bg-gold-soft"
                      : "bg-espresso text-cream hover:bg-ink"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
