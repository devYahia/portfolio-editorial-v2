import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Send,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Yahia Zakaria",
  description: "Get in touch with Yahia Zakaria for backend engineering opportunities.",
};

const channels = [
  {
    name: "GitHub",
    value: "github.com/devYahia",
    href: siteConfig.links.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yahiamzakaria",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    name: "Phone",
    value: "+20 111 643 3434",
    href: "tel:+201116433434",
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd type="website" />
      <Navbar />
      <main className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-red-900/50 pt-32 pb-24 overflow-hidden">
        
        {/* Background Effects (Red Theme) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none z-[1]" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[min(80vw,700px)] h-[min(80vw,700px)] bg-red-600/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="mb-16">
            <p className="text-red-500/80 text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-red-500/50" />
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Let&apos;s build something.
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed font-light">
              Open to backend software engineering roles and consulting. 
              Reach out if you have a complex system that needs to be built right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.name}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-6 rounded-[24px] bg-[#111113]/80 backdrop-blur-sm border border-white/5 hover:border-red-500/20 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-red-500/10 group-hover:text-red-400 group-hover:border-red-500/20 transition-colors duration-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                    </div>
                    <h2 className="text-sm font-semibold text-white/90 mb-1">
                      {ch.name}
                    </h2>
                    <p className="text-xs font-mono text-white/50 group-hover:text-white/80 transition-colors truncate">
                      {ch.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="p-6 rounded-[24px] bg-[#111113]/80 backdrop-blur-sm border border-white/5 flex flex-col justify-between">
              <div>
                 <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                      <MapPin className="w-5 h-5" />
                    </div>
                 </div>
                 <h2 className="text-sm font-semibold text-white/90 mb-1">
                   Location
                 </h2>
                 <p className="text-xs text-white/50">
                   Egypt (Remote)
                 </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="w-full relative bg-[#111113]/80 backdrop-blur-md border border-white/5 rounded-[32px] p-8 sm:p-12 overflow-hidden group hover:border-red-500/20 transition-colors duration-700">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-red-600/15 transition-colors duration-1000" />
             
             <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
               <div>
                  <h3 className="text-2xl font-serif text-white mb-2">Ready to talk?</h3>
                  <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                    Drop an email directly to discuss engineering roles, architecture consulting, or freelance projects.
                  </p>
               </div>
               <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-sm tracking-wide"
               >
                  <Send className="w-4 h-4" />
                  Send Email
               </a>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
