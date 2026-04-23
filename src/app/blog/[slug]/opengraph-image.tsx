import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Blog Post Preview";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const interBold = readFileSync(
        join(process.cwd(), "public/fonts/inter/Inter-Bold.woff")
    );

    const post = getPostBySlug(slug);

    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        background: "#0a0a0a",
                        color: "#fff",
                        fontFamily: "Inter",
                        fontSize: 48,
                        fontWeight: 700,
                    }}
                >
                    Post Not Found
                </div>
            ),
            {
                ...size,
                fonts: [{ name: "Inter", data: interBold, weight: 700, style: "normal" as const }],
            }
        );
    }

    const formattedDate = new Date(post.meta.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const primaryTag = post.meta.tags?.[0]?.toUpperCase() || "ENGINEERING";

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    background: "#0a0a0a",
                    fontFamily: "Inter",
                    position: "relative",
                }}
            >
                {/* Subtle warm gradient top-right corner */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "-300px",
                        right: "-200px",
                        width: "700px",
                        height: "700px",
                        borderRadius: "350px",
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                    }}
                />

                {/* Left accent bar - pure white/gray gradient */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "3px",
                        height: "100%",
                        background:
                            "linear-gradient(180deg, transparent 10%, #ffffff 40%, #666666 70%, transparent 95%)",
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "52px 60px",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    {/* Top: brand + tag */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        {/* Brand: favicon-style monogram */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "8px",
                                    background: "#ffffff",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#0a0a0a",
                                }}
                            >
                                dY
                            </div>
                            <span
                                style={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: "#737373",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                devyahia.me
                            </span>
                        </div>

                        {/* Tag pill - monochrome */}
                        <div
                            style={{
                                display: "flex",
                                padding: "7px 18px",
                                borderRadius: "999px",
                                border: "1px solid rgba(255,255,255,0.15)",
                                background: "rgba(255,255,255,0.05)",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#a3a3a3",
                                letterSpacing: "0.1em",
                            }}
                        >
                            {primaryTag}
                        </div>
                    </div>

                    {/* Center: Title + excerpt */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            maxWidth: "950px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: 52,
                                fontWeight: 700,
                                color: "#fafafa",
                                lineHeight: 1.12,
                                letterSpacing: "-0.035em",
                            }}
                        >
                            {post.meta.title}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                fontSize: 20,
                                color: "#525252",
                                lineHeight: 1.5,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {post.meta.excerpt.length > 130
                                ? post.meta.excerpt.substring(0, 130) + "..."
                                : post.meta.excerpt}
                        </div>
                    </div>

                    {/* Bottom: author + date */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            paddingTop: "22px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                            }}
                        >
                            {/* Profile photo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://github.com/devYahia.png"
                                alt=""
                                width={42}
                                height={42}
                                style={{
                                    borderRadius: "21px",
                                    border: "2px solid rgba(255,255,255,0.12)",
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: "#d4d4d4",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Yahia Youssef
                                </span>
                                <span
                                    style={{
                                        fontSize: 13,
                                        color: "#525252",
                                        fontWeight: 500,
                                    }}
                                >
                                    Backend Engineer
                                </span>
                            </div>
                        </div>

                        <span
                            style={{
                                fontSize: 15,
                                color: "#525252",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {formattedDate}
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Inter",
                    data: interBold,
                    weight: 700,
                    style: "normal" as const,
                },
            ],
        }
    );
}
