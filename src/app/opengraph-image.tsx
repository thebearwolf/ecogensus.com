import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ecogensus | Advanced Materials Science & Technology Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          ECOGENSUS
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Advanced Materials Science & Technology Platform
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8b949e",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Pioneering constructive thermochemistry • 100+ patents
        </div>
      </div>
    ),
    { ...size }
  );
}
