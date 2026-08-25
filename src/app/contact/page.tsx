import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Yahia Zakaria",
  description: "Get in touch with Yahia Zakaria for backend engineering opportunities.",
};

const channels = [
  {
    name: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/devYahia",
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yahiamzakaria/",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Contact
            </h1>
            <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
              Open to backend software engineering roles and consulting. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={ch.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:text-red-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                    </div>
                    <h2 className="text-sm font-semibold text-zinc-200 mb-1">
                      {ch.name}
                    </h2>
                    <p className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors truncate">
                      {ch.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                 </div>
                 <h2 className="text-sm font-semibold text-zinc-200 mb-1">
                   Location
                 </h2>
                 <p className="text-sm text-zinc-400">
                   Egypt (Remote)
                 </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row gap-4 items-center justify-between">
             <p className="text-sm font-mono text-zinc-500">
               +20 111 643 3434
             </p>
             <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
             >
                View Resume
             </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
