import { ImageResponse } from "next/og";

export const alt = "The Groom Lab — Luxury Mobile Dog Grooming in Columbus, OH";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#2c2118",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(184,146,90,0.45) 0%, rgba(184,146,90,0) 55%), radial-gradient(circle at 10% 90%, rgba(62,110,100,0.4) 0%, rgba(62,110,100,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "2px solid #d9b98a",
              backgroundColor: "#fbf5ec",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#211a14",
            }}
          >
            GL
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#d9b98a",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            The Groom Lab
          </div>
        </div>
        <div
          style={{
            fontSize: 68,
            color: "#fbf5ec",
            lineHeight: 1.1,
            fontWeight: 600,
            display: "flex",
            maxWidth: 900,
          }}
        >
          Luxury Dog Grooming, Delivered to Your Door.
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(251,245,236,0.75)",
            marginTop: 28,
            display: "flex",
          }}
        >
          Mobile grooming for Columbus, OH &amp; surrounding areas
        </div>
      </div>
    ),
    { ...size }
  );
}
