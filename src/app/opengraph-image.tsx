import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${siteConfig.fullName} - Backend Software Engineer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    background: "#09090b",
                    color: "#fafafa",
                    fontFamily: "sans-serif",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(239,68,68,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.08) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "-120px",
                        right: "-80px",
                        width: "520px",
                        height: "520px",
                        borderRadius: "260px",
                        background: "radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 70%)",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "56px 64px",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "44px",
                                height: "44px",
                                borderRadius: "999px",
                                background: "#ffffff",
                                color: "#09090b",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            YZ
                        </div>
                        <span style={{ display: "flex", fontSize: 22, color: "#a1a1aa", fontWeight: 600 }}>
                            yahia.website
                        </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: 58,
                                fontWeight: 700,
                                lineHeight: 1.08,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            {siteConfig.fullName}
                        </div>
                        <div style={{ display: "flex", fontSize: 30, color: "#fca5a5", fontWeight: 600 }}>
                            Backend-Heavy Software Engineer
                        </div>
                        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", lineHeight: 1.45 }}>
                            Production APIs, payment systems, Docker infrastructure, Telegram commerce, and
                            full-stack delivery.
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            paddingTop: "24px",
                            fontSize: 20,
                            color: "#71717a",
                        }}
                    >
                        <span>Egypt · Open to roles and freelance work</span>
                        <span>Node.js · TypeScript · PostgreSQL · Docker · TON</span>
                    </div>
                </div>
            </div>
        ),
        size
    );
}
