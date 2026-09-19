import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function BookingBanner() {
  return (
    <section className="relative bg-gold py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight text-espresso sm:text-5xl">
            Ready for grooming day?
          </h2>
          <p className="mt-4 text-lg text-espresso/80">
            Book online in minutes, or give us a call — we&apos;ll bring the
            spa to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full border border-espresso/30 px-8 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-espresso/60"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
