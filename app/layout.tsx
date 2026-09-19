import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Groom Lab | Luxury Mobile Dog Grooming in Columbus, OH",
  description:
    "The Groom Lab brings luxury mobile dog grooming to your doorstep in New Albany, Reynoldsburg, Pickerington & the greater Columbus, OH area. Cage-free, calm, and convenient — for dogs up to 70lbs. Book online today.",
  keywords: [
    "mobile dog grooming Columbus Ohio",
    "The Groom Lab",
    "mobile dog groomer New Albany",
    "dog grooming Reynoldsburg",
    "dog grooming Pickerington",
    "cage-free dog grooming",
    "luxury mobile pet spa",
  ],
  authors: [{ name: "The Groom Lab" }],
  openGraph: {
    title: "The Groom Lab | Luxury Mobile Dog Grooming",
    description:
      "Professional grooming and personalized care, right at your doorstep. Serving Columbus, OH & surrounding communities. Cage-free. Up to 70lbs. Book online.",
    url: siteUrl,
    siteName: "The Groom Lab",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Groom Lab | Luxury Mobile Dog Grooming",
    description:
      "Professional grooming and personalized care, right at your doorstep. Serving Columbus, OH & surrounding communities.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
