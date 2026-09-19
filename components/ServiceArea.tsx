import { Clock, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ServiceArea() {
  return (
    <section id="area" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Service Area &amp; Hours
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Serving {site.region} and beyond.
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              {site.name} is based in New Albany and grooms throughout the
              greater {site.region} area, including {site.serviceCities.slice(1).join(" and ")}.
            </p>

            <div className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-paper p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="font-semibold text-ink">Where we groom</p>
                <p className="text-sm text-ink-soft">
                  {site.serviceCities.join(", ")} &amp; surrounding {site.region} communities
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-gold-deep underline decoration-gold/40 underline-offset-4 hover:text-espresso"
                >
                  View area on Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-paper p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="font-semibold text-ink">Appointments</p>
                <p className="text-sm text-ink-soft">
                  By appointment only — check live availability and book your
                  slot online.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-soft">
            <iframe
              title="The Groom Lab service area map"
              src={site.mapsEmbedUrl}
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0, display: "block" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
