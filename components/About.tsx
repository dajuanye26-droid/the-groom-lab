import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";

const stats = [
  { label: "Cage-Free", value: "100%" },
  { label: "Max Weight", value: `${site.maxWeightLbs}lbs` },
  { label: "Comes To", value: "Your Door" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <Parallax speed={-14} className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-soft">
                <Image
                  src="/images/doodle-portrait.webp"
                  alt="A freshly groomed doodle client of The Groom Lab, sitting calmly after a full groom"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 420px, 80vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/30 bg-paper px-5 py-4 shadow-soft sm:block">
                <p className="font-display text-2xl text-espresso">70lbs</p>
                <p className="text-xs uppercase tracking-wide text-ink-soft">
                  and under welcome
                </p>
              </div>
            </Parallax>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              About Us
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Grooming built around your dog&apos;s comfort.
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              {site.name} is a luxury mobile dog spa bringing professional
              grooming and personalized care right to your doorstep. We make
              grooming day convenient, comfortable, and stress-free, so your
              pup can look and feel their best without ever leaving home.
            </p>
            <p className="text-lg leading-relaxed text-ink-soft">
              Every appointment happens one-on-one in our fully-equipped
              grooming van — no cages, no crowded waiting rooms, no other
              dogs to stress over. Just a calm, dedicated space for your
              pup, parked right outside your home.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gold/20 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-espresso sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
