"use client";

import Image from "next/image";
import { Phone, PawPrint, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Parallax } from "./Parallax";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso pt-24"
    >
      {/* Layer 1 — deepest: slow-drifting gold bloom */}
      <Parallax speed={40} className="pointer-events-none absolute inset-0">
        <div
          className="hero-bloom absolute -left-1/4 top-[-20%] h-[70vh] w-[70vh] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(184,146,90,0.55) 0%, rgba(184,146,90,0) 70%)",
          }}
        />
        <div
          className="hero-bloom-2 absolute -right-1/4 bottom-[-25%] h-[80vh] w-[80vh] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(62,110,100,0.5) 0%, rgba(62,110,100,0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,33,24,0)_0%,rgba(30,23,17,0.85)_100%)]" />
      </Parallax>

      {/* Layer 2 — mid depth: drifting paw prints */}
      <Parallax speed={90} className="pointer-events-none absolute inset-0 hidden sm:block">
        <PawField />
      </Parallax>

      {/* Layer 3 — foreground content */}
      <Parallax speed={-16} className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8 py-16">
          <div
            className="rise-in flex items-center gap-2 rounded-full border border-gold-soft/40 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur-sm"
            style={{ animationDelay: "0s" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Now Accepting New Clients in {site.region}
          </div>

          <h1
            className="rise-in font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Luxury Dog Grooming,
            <br />
            <span className="text-gold-soft">Delivered to Your Door.</span>
          </h1>

          <p
            className="rise-in max-w-xl text-lg text-cream/80"
            style={{ animationDelay: "0.2s" }}
          >
            {site.name} brings a calm, cage-free grooming experience straight
            to your driveway — so your pup can look and feel their best
            without ever leaving home. Serving {site.region} and surrounding
            communities.
          </p>

          <div
            className="rise-in flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-espresso shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Book Now
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/60"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>

          <div
            className="rise-in flex items-center gap-3 pt-2 text-sm text-cream/60"
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/images/logo-full-sm.png"
              alt="The Groom Lab logo"
              width={28}
              height={28}
              className="rounded-full border border-gold-soft/40"
            />
            Up to {site.maxWeightLbs}lbs · Cage-Free · Book Online
          </div>
        </div>
      </Parallax>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}

function PawField() {
  const paws = [
    { top: "18%", left: "72%", size: 28, delay: 0, duration: 22 },
    { top: "62%", left: "84%", size: 20, delay: 3, duration: 26 },
    { top: "38%", left: "58%", size: 16, delay: 6, duration: 20 },
    { top: "75%", left: "64%", size: 24, delay: 2, duration: 28 },
    { top: "12%", left: "40%", size: 18, delay: 5, duration: 24 },
  ];

  return (
    <>
      {paws.map((paw, i) => (
        <span
          key={i}
          className="paw-drift absolute text-gold-soft/25"
          style={{
            top: paw.top,
            left: paw.left,
            animationDelay: `${paw.delay}s`,
            animationDuration: `${paw.duration}s`,
          }}
        >
          <PawPrint width={paw.size} height={paw.size} />
        </span>
      ))}
    </>
  );
}
