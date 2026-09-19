export const site = {
  name: "The Groom Lab",
  url: "https://the-groom-lab.vercel.app",
  tagline: "Luxury Mobile Dog Grooming",
  phoneDisplay: "(614) 930-5127",
  phoneHref: "tel:+16149305127",
  email: "thegroomlabllc@gmail.com",
  emailHref: "mailto:thegroomlabllc@gmail.com",
  instagramHandle: "@thegroomlabllc",
  instagramUrl: "https://www.instagram.com/thegroomlabllc/",
  bookingUrl: "https://booking.moego.pet/ol/landing?name=TheGroomLab",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Albany%2C+Ohio",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=New+Albany,+Ohio&z=10&output=embed",
  serviceCities: ["New Albany", "Reynoldsburg", "Pickerington"],
  region: "Columbus, OH",
  maxWeightLbs: 70,
} as const;

export const packages = [
  {
    id: "silver",
    name: "Silver Package",
    subtitle: "Bath",
    description:
      "Bath, blow-dry, brush-out, nail trim & ear cleaning — a full refresh for your pup's coat and hygiene.",
    featured: false,
    tiers: [
      { label: "Small", weight: "1–25 lbs", price: 90 },
      { label: "Medium", weight: "26–50 lbs", price: 115 },
      { label: "Large", weight: "51–70 lbs", price: 135 },
    ],
  },
  {
    id: "platinum",
    name: "Platinum Package",
    subtitle: "Full Groom",
    description:
      "Everything in Silver, plus a full haircut for a complete, polished grooming experience.",
    featured: true,
    tiers: [
      { label: "Small", weight: "1–25 lbs", price: 105 },
      { label: "Medium", weight: "26–50 lbs", price: 135 },
      { label: "Large", weight: "51–70 lbs", price: 155 },
    ],
  },
  {
    id: "platinum-plus",
    name: "Platinum Plus",
    subtitle: "Full Groom Complex",
    description:
      "Our most thorough groom — ideal for curly or double coats that need extra time and care.",
    featured: false,
    tiers: [
      { label: "Small", weight: "1–25 lbs", price: 125 },
      { label: "Medium", weight: "26–50 lbs", price: 150 },
      { label: "Large", weight: "51–70 lbs", price: 195 },
    ],
  },
] as const;

export const highlights = [
  {
    title: "We Come To You",
    description:
      "Skip the car ride and the waiting room — grooming happens right in your driveway.",
  },
  {
    title: "Cage-Free & Calm",
    description:
      "A quiet, one-on-one environment designed to keep your pup relaxed from start to finish.",
  },
  {
    title: `Up To ${70}lbs Welcome`,
    description: "From toy breeds to big, fluffy friends — all sizes up to 70lbs.",
  },
  {
    title: "Easy Payment",
    description: "Credit cards and Apple Pay accepted, right at your door.",
  },
] as const;
