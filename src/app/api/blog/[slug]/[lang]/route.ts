import { NextRequest, NextResponse } from "next/server";
import { getPostBySlugAndLang } from "@/lib/blog";

interface Params {
    slug: string;
    lang: string;
}

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<Params> }
) {
    const { slug, lang } = await params;

    if (!["en", "ar"].includes(lang)) {
        return NextResponse.json(
            { error: "Unsupported language" },
            { status: 400 }
        );
    }

    const post = getPostBySlugAndLang(slug, lang);

    if (!post) {
        return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        meta: post.meta,
        content: post.content,
    });
}
