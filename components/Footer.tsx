import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "./icons/Instagram";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-full-sm.png"
                alt="The Groom Lab logo"
                width={40}
                height={40}
                className="rounded-full border border-gold-soft/40"
              />
              <span className="font-display text-xl">{site.name}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              Luxury mobile dog grooming, right at your door. Serving{" "}
              {site.region} and surrounding communities for dogs up to{" "}
              {site.maxWeightLbs}lbs.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-soft"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Contact
            </p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-soft"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-soft"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-soft"
            >
              <MapPin className="h-4 w-4" />
              Serving {site.region}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Explore
            </p>
            <a href="#about" className="text-sm text-cream/80 transition-colors hover:text-gold-soft">
              About
            </a>
            <a href="#services" className="text-sm text-cream/80 transition-colors hover:text-gold-soft">
              Services
            </a>
            <a href="#area" className="text-sm text-cream/80 transition-colors hover:text-gold-soft">
              Service Area
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gold-soft"
            >
              Book Now →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Mobile dog grooming for {site.region} &amp; surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
