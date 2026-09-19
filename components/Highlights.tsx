import Image from "next/image";
import { CreditCard, Heart, House, Scale } from "lucide-react";
import { highlights } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";

const icons = [House, Heart, Scale, CreditCard];

export function Highlights() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32">
      <Parallax speed={30} className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(184,146,90,0.5) 0%, rgba(184,146,90,0) 70%)",
          }}
        />
      </Parallax>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Why Pet Parents Choose Us
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              A calmer way to groom.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {highlights.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div key={item.title} className="flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-soft/40 bg-cream/5">
                      <Icon className="h-5 w-5 text-gold-soft" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-cream/70">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Parallax speed={-18} className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border border-gold-soft/30 shadow-soft">
              <Image
                src="/images/pom-bowtie.webp"
                alt="A freshly groomed, bow-tied client relaxing after an appointment with The Groom Lab"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 380px, 80vw"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
