import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Highlights } from "@/components/Highlights";
import { ServiceArea } from "@/components/ServiceArea";
import { BookingBanner } from "@/components/BookingBanner";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Luxury mobile dog grooming bringing professional grooming and personalized care to your doorstep.",
  image: `${site.url}/opengraph-image`,
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.url,
  areaServed: site.serviceCities.map((city) => ({
    "@type": "City",
    name: `${city}, OH`,
  })),
  sameAs: [site.instagramUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Highlights />
        <ServiceArea />
        <BookingBanner />
      </main>
      <Footer />
    </>
  );
}
