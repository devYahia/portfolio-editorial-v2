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
                        background: "#09090b",
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
                    background: "#09090b",
                    fontFamily: "Inter",
                    position: "relative",
                }}
            >
                {/* Ambient gradient - top right */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "-200px",
                        right: "-100px",
                        width: "600px",
                        height: "600px",
                        borderRadius: "300px",
                        background:
                            "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                    }}
                />

                {/* Ambient gradient - bottom left */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "-250px",
                        left: "-150px",
                        width: "700px",
                        height: "700px",
                        borderRadius: "350px",
                        background:
                            "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
                    }}
                />

                {/* Left accent bar */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: "4px",
                        height: "100%",
                        background:
                            "linear-gradient(180deg, transparent 0%, #6366f1 30%, #38bdf8 70%, transparent 100%)",
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
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                            }}
                        >
                            {/* Brand icon */}
                            <div
                                style={{
                                    display: "flex",
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "10px",
                                    background:
                                        "linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#fff",
                                }}
                            >
                                dY
                            </div>
                            <span
                                style={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: "#71717a",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                devyahia.me
                            </span>
                        </div>

                        {/* Tag pill */}
                        <div
                            style={{
                                display: "flex",
                                padding: "8px 20px",
                                borderRadius: "999px",
                                border: "1px solid rgba(99,102,241,0.35)",
                                background: "rgba(99,102,241,0.08)",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#a5b4fc",
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
                            gap: "16px",
                            maxWidth: "950px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: 50,
                                fontWeight: 700,
                                color: "#fafafa",
                                lineHeight: 1.15,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            {post.meta.title}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                fontSize: 21,
                                color: "#52525b",
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
                            borderTop: "1px solid rgba(255,255,255,0.06)",
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
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://github.com/devYahia.png"
                                alt=""
                                width={42}
                                height={42}
                                style={{
                                    borderRadius: "21px",
                                    border: "2px solid rgba(255,255,255,0.1)",
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
                                        color: "#d4d4d8",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Yahia Youssef
                                </span>
                                <span
                                    style={{
                                        fontSize: 13,
                                        color: "#3f3f46",
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
                                color: "#3f3f46",
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
