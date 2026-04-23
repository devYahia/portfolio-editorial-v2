import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

// Use nodejs runtime because getPostBySlug uses 'fs' and 'path'
export const runtime = "nodejs";

export const alt = "Blog Post Image";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;
    
    console.log("Generating OG for slug:", slug);
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
                        backgroundColor: "#000000",
                        color: "white",
                        fontSize: 48,
                        fontWeight: 700,
                    }}
                >
                    Post Not Found
                </div>
            ),
            { ...size },
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#040404",
                    color: "white",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background glow effects */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-20%",
                        width: "150%",
                        height: "150%",
                        background:
                            "radial-gradient(circle at 20% 0%, rgba(56, 189, 248, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)",
                        zIndex: 0,
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "64px",
                        width: "100%",
                        height: "100%",
                        zIndex: 10,
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <div
                            style={{
                                color: "#38bdf8",
                                fontSize: 24,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                fontWeight: 700,
                            }}
                        >
                            devYahia / Blog
                        </div>
                        <h1
                            style={{
                                fontSize: 56,
                                fontWeight: 700,
                                lineHeight: 1.1,
                                margin: 0,
                                paddingRight: "40px",
                                color: "#ffffff",
                            }}
                        >
                            {post.meta.title}
                        </h1>

                        <p
                            style={{
                                fontSize: 28,
                                color: "#a1a1aa", // muted/zinc-400
                                lineHeight: 1.4,
                                marginTop: "24px",
                                margin: 0,
                                paddingRight: "40px",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {post.meta.excerpt}
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            paddingTop: "40px",
                            marginTop: "auto",
                        }}
                    >
                        <div style={{ display: "flex", gap: "24px", color: "#a1a1aa", fontSize: 24 }}>
                            <span>{new Date(post.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            {post.meta.tags && post.meta.tags.length > 0 && (
                                <span style={{ display: "flex", gap: "12px" }}>
                                    <span>•</span>
                                    <span>{post.meta.tags[0].toUpperCase()}</span>
                                </span>
                            )}
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                            }}
                        >
                            <img
                                src="https://github.com/devYahia.png"
                                alt="devYahia"
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                }}
                            />
                            <span style={{ fontSize: 28, fontWeight: 600, color: "#fff" }}>
                                Yahia Youssef
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
