import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/data";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Vary": "Accept",
  "Cache-Control": "s-maxage=60, stale-while-revalidate=86400",
};

function get404Markdown(path: string): string {
  return `# 404 - Not Found

The requested resource \`${path}\` was not found on ${siteConfig.url}.

## Recovery & Navigation

If you are an AI agent or crawler, you can recover by exploring the following indexes:

- **Homepage**: ${siteConfig.url}/
- **About**: ${siteConfig.url}/#why-partner
- **Contact**: ${siteConfig.url}/contact
- **Privacy Policy**: ${siteConfig.url}/privacy
- **Projects Index**: ${siteConfig.url}/#projects
- **Blog Index**: ${siteConfig.url}/blog
- **Machine-Readable Summary**: ${siteConfig.url}/llms.txt
- **Full Machine-Readable Context**: ${siteConfig.url}/llms-full.txt
- **Agent Guidance & Instructions**: ${siteConfig.url}/agent-instructions.txt
- **XML Sitemap**: ${siteConfig.url}/sitemap.xml
`;
}

function getHomeMarkdown(): string {
  const featured = projects.filter((p) => p.featured);
  const posts = getAllPosts();

  return `# ${siteConfig.fullName} (${siteConfig.name})

> ${siteConfig.title}
> ${siteConfig.url}

## Summary

${siteConfig.description}

## Verified Trust Anchor Pages

- **About**: ${siteConfig.url}/#why-partner
- **Contact**: ${siteConfig.url}/contact
- **Privacy Policy**: ${siteConfig.url}/privacy
- **Blog**: ${siteConfig.url}/blog
- **Resume**: ${siteConfig.url}${siteConfig.links.resume}

## Machine-Readable Resources

- **Agent Summary**: ${siteConfig.url}/llms.txt
- **Full Context**: ${siteConfig.url}/llms-full.txt
- **Agent Instructions**: ${siteConfig.url}/agent-instructions.txt
- **Sitemap**: ${siteConfig.url}/sitemap.xml

## Featured Production Projects

${featured
  .map(
    (p) => `### ${p.title}
- **Role**: ${p.role}
- **Category**: ${p.category}
- **Summary**: ${p.shortDescription}
- **Case Study**: ${siteConfig.url}/projects/${p.id}
- **Tech Stack**: ${p.techStack.join(", ")}
${p.liveUrl ? `- **Live**: ${p.liveUrl}` : ""}
${p.githubUrl ? `- **Source**: ${p.githubUrl}` : ""}`
  )
  .join("\n\n")}

## Recent Technical Writings

${posts
  .slice(0, 5)
  .map(
    (post) => `- **${post.title}** (${post.date.slice(0, 10)}): ${siteConfig.url}/blog/${post.slug}
  ${post.excerpt}`
  )
  .join("\n")}

## Contact & Profiles

- **Email**: ${siteConfig.links.email}
- **GitHub**: ${siteConfig.links.github}
- **LinkedIn**: ${siteConfig.links.linkedin}
- **X**: ${siteConfig.links.twitter}
`;
}

function getAboutMarkdown(): string {
  return `# About Yahia Mohamed Zakaria Youssef (devYahia)

> Backend-Heavy Software Engineer based in Egypt
> Website: ${siteConfig.url} | Email: ${siteConfig.links.email}

## Professional Background

Yahia Mohamed Zakaria Youssef (also known as Yahia Zakaria or devYahia) is a Backend-Heavy Software Engineer who specializes in architecting and deploying resilient, scalable production backends, payment systems, and containerized cloud workloads.

He is currently finalizing his Bachelor of Science in Communication and Computer Engineering at Mansoura University, Egypt.

## Core Architectural Competencies

1. **Fintech & Payment Engines**: Multi-service ledger design, idempotent money-moving flows, webhook reconciliation, and automated payout pipelines.
2. **Container Orchestration & DevOps**: Decoupled registry-based deployments (GHCR), reverse proxy routing (Nginx, Caddy), on-demand Docker workload isolation, self-hosted VPS stacks using Coolify, and cloud console operations on GCP.
3. **API & System Design**: High-performance REST APIs using FastAPI, NestJS, and Express, backed by PostgreSQL, Redis caching, and message queues.
4. **Full-Stack Product Delivery**: End-to-end web applications with Next.js App Router, TypeScript, Tailwind CSS, and Telegram Mini Apps.

## Shipped Production Metrics

- **Stars Converter**: Co-founded and engineered a live Telegram commerce platform processing over 855,000 Telegram Stars ($11,100+ lifetime volume) across 2,580+ transactions for 650+ monthly active users.
- **Real World CTF**: Architected decoupled on-demand containerized lab execution platform for cybersecurity training, eliminating local image storage bottlenecks.
- **Interna Virtual (GDG Hackathon)**: Placed 14th out of 122 competing teams, delivering full backend and AI simulation pipelines on GCP in 72 hours.
- **First Word**: Scored 99/100 (A+) for graduation VR accessibility engineering connecting Meta Quest 3 hand tracking, sign language translation, and voice synthesis APIs.

## Education & Recognition

- **B.Sc. Communication & Computer Engineering**: Mansoura University
- **GDG Hackathon 2024**: Ranked 14th of 122 teams
- **Graduation Project Evaluation**: 99/100 (A+ Distinction)

## Quick Links

- Contact: ${siteConfig.url}/contact
- Projects: ${siteConfig.url}/#projects
- Blog: ${siteConfig.url}/blog
- Resume: ${siteConfig.url}${siteConfig.links.resume}
`;
}

function getContactMarkdown(): string {
  return `# Contact Yahia Zakaria (devYahia)

> Connect for backend engineering roles, system architecture consulting, and freelance projects.

## Direct Contact Channels

- **Primary Email**: [${siteConfig.links.email}](mailto:${siteConfig.links.email})
- **GitHub**: [${siteConfig.links.github}](${siteConfig.links.github})
- **LinkedIn**: [${siteConfig.links.linkedin}](${siteConfig.links.linkedin})
- **X (Twitter)**: [${siteConfig.links.twitter}](${siteConfig.links.twitter})
- **Telegram**: [@stars_converterbot](https://t.me/stars_converterbot)

## Location & Availability

- **Location**: Egypt (Timezone: UTC+2 / Eastern European Time)
- **Work Arrangements**: Remote full-time roles, contract engineering, and freelance backend architecture
- **Response Time**: Usually within 24 hours on business days

## How to Reach Out

For business inquiries, project proposals, or technical discussions, please include:
1. Scope of work or role description
2. Timeline and key milestones
3. Primary tech stack requirements
4. Budget range or engagement structure

Direct email to **${siteConfig.links.email}** is the fastest way to get in touch.
`;
}

function getPrivacyMarkdown(): string {
  return `# Privacy Policy

> Effective Date: January 1, 2026 | Last Updated: August 2026
> Website: ${siteConfig.url}

## Overview

This Privacy Policy explains how ${siteConfig.fullName} ("devYahia", "we", "us") handles information when you visit https://www.devyahia.me.

We are committed to user privacy. We do not sell, rent, or monetize your personal data.

## Information Collection

### 1. Direct Communications
When you contact us directly via email (${siteConfig.links.email}) or social channels, we receive the contact details and message contents you provide. This information is used solely to respond to your inquiry.

### 2. Automatically Collected Technical Data
When accessing the website, standard web server logs and edge analytics (via hosting providers such as Vercel) may temporarily record technical parameters including IP address, user-agent string, referrer, and timestamps to ensure security, prevent abuse, and maintain site performance.

### 3. Cookies and Tracking
This website does not use tracking cookies, advertising trackers, or third-party marketing beacons.

## Data Retention and Security

We retain direct correspondence only as long as necessary to fulfill the communication purpose or comply with legal obligations. We use modern TLS encryption for all traffic.

## Third-Party Services

- **Hosting & Infrastructure**: Vercel Inc. and Cloudflare (for edge delivery and security).
- **External Links**: Links to GitHub, LinkedIn, and X are subject to their respective privacy policies.

## Contact Information

For any questions regarding this privacy policy or your personal data rights, please contact:
- **Email**: ${siteConfig.links.email}
- **Website**: ${siteConfig.url}
`;
}

function getBlogIndexMarkdown(): string {
  const posts = getAllPosts();

  return `# Technical Blog & Deep Dives - ${siteConfig.fullName}

> Technical articles, fintech retrospectives, and production engineering notes.
> URL: ${siteConfig.url}/blog

## Published Articles

${posts
  .map(
    (post) => `### [${post.title}](${siteConfig.url}/blog/${post.slug})
- **Date**: ${post.date.slice(0, 10)}
- **Reading Time**: ${post.readingTime}
- **Tags**: ${post.tags.join(", ")}
- **Summary**: ${post.excerpt}
- **Full Article URL**: ${siteConfig.url}/blog/${post.slug}
`
  )
  .join("\n")}
`;
}

function getProjectMarkdown(projectId: string): string | null {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return `# Project: ${project.title}

> ${project.shortDescription}
> Case Study: ${siteConfig.url}/projects/${project.id}

## Overview

- **Role**: ${project.role}
- **Category**: ${project.category}
- **Tech Stack**: ${project.techStack.join(", ")}
${project.collaborator ? `- **Collaborator**: ${project.collaborator}` : ""}
${project.liveUrl ? `- **Live Demo/Product**: ${project.liveUrl}` : ""}
${project.githubUrl ? `- **Source Code**: ${project.githubUrl}` : ""}
${project.certificateUrl ? `- **Certificate**: ${siteConfig.url}${project.certificateUrl}` : ""}

## Context & Problem
${project.context}

## Architecture & Engineering
${project.architecture}

## Measurable Impact
${project.impact}

## Challenges Overcome
${project.challengesOvercome}

## Lessons Learned
${project.lessonsLearned}
`;
}

function getPostMarkdown(slug: string): string | null {
  const post = getPostBySlug(slug);
  if (!post) return null;

  return `# ${post.meta.title}

> Published: ${post.meta.date.slice(0, 10)} | Reading Time: ${post.meta.readingTime}
> Canonical URL: ${siteConfig.url}/blog/${slug}
> Tags: ${post.meta.tags.join(", ")}

${post.meta.excerpt ? `> **Summary**: ${post.meta.excerpt}\n\n` : ""}${post.content}
`;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const joinedPath = `/${slug.join("/")}`;

  // 1. Root / Home
  if (slug.length === 0) {
    return new Response(getHomeMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  const first = slug[0].toLowerCase();

  // 2. /about
  if (slug.length === 1 && first === "about") {
    return new Response(getAboutMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  // 3. /contact
  if (slug.length === 1 && first === "contact") {
    return new Response(getContactMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  // 4. /privacy
  if (slug.length === 1 && first === "privacy") {
    return new Response(getPrivacyMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  // 5. /blog (index)
  if (slug.length === 1 && first === "blog") {
    return new Response(getBlogIndexMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  // 6. /blog/[slug]
  if (slug.length === 2 && first === "blog") {
    const postMd = getPostMarkdown(slug[1]);
    if (postMd) {
      return new Response(postMd, { headers: MARKDOWN_HEADERS });
    }
  }

  // 7. /projects/[id]
  if (slug.length === 2 && first === "projects") {
    const projectMd = getProjectMarkdown(slug[1]);
    if (projectMd) {
      return new Response(projectMd, { headers: MARKDOWN_HEADERS });
    }
  }

  // 8. Not Found: Return 404 with recovery markdown
  return new Response(get404Markdown(joinedPath), {
    status: 404,
    headers: MARKDOWN_HEADERS,
  });
}
