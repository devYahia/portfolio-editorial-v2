'use client';
import { motion } from 'framer-motion';

export default function GlobalRedBento() {
  return (
    <section id="why-partner" className="relative w-full bg-[#09090b] py-24 px-6 z-10 overflow-hidden">
      
      {/* Subtle red grid background specifically for this section */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[90rem] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-red-500/80 text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            About The Engineer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white max-w-2xl leading-[1.1] tracking-tight">
            Who Am I
          </h2>
        </div>

        {/* Bento Grid: 3-Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-auto">
          
          {/* Card 1: The Biography (Left Large Box) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-[#111113]/80 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 lg:p-12 group hover:border-red-500/20 transition-colors duration-700 flex flex-col overflow-hidden"
          >
            {/* Card DOT Pattern - Very Faint */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '32px 32px' }} />
            
            {/* Soft Red Corner Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-red-600/15 transition-colors duration-1000" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-3xl font-serif text-white mb-6">Profile Overview</h3>
              
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                I am a <span className="text-white font-medium">Backend-Heavy Software Engineer</span> dedicated to architecting resilient, scalable solutions for complex business needs.
              </p>
              <div className="h-6" />
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                Rather than being limited to a single domain, my core strength lies in rapidly adapting to diverse technical environments and translating abstract business requirements into robust system architectures. Whether it's optimizing database queries, orchestrating containerized infrastructure, or building secure APIs, my focus is always on delivering high-performance, maintainable software from the ground up.
              </p>
              
              <div className="mt-10 rounded-2xl bg-white/[0.03] border border-white/5 px-6 py-5">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/35 mb-3">
                  Education
                </p>
                <p className="text-white/75 text-base md:text-lg leading-relaxed font-light">
                  Finalizing my{" "}
                  <span className="text-white font-medium">
                    B.Sc. in Communication and Computer Engineering
                  </span>
                  . My work is grounded in systems thinking — algorithms, network protocols, and
                  low-level behavior — so the solutions I ship stay fast and reliable under real load.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Card 2: The Technical Arsenal (Top Right Box) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="flex-1 relative bg-[#111113]/80 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 lg:p-12 group hover:border-red-500/20 transition-colors duration-700 overflow-hidden"
            >
              {/* Soft Red Corner Lighting */}
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/3 group-hover:bg-red-600/15 transition-colors duration-1000" />
              
              <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Technical Arsenal</h3>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Languages</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">TypeScript, Python, JavaScript, SQL, Dart</p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Backend & APIs</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">NestJS, Express, FastAPI, Prisma, BullMQ, REST, Webhooks</p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Data & Storage</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">PostgreSQL, MongoDB, Redis, Supabase, Cloudflare R2, AWS S3</p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Cloud & DevOps</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">Docker, GCP, Coolify, Vercel, Nginx, GHCR, Caddy</p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">Blockchain & Fintech</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">TON SDK, Telegram Stars, USDT Jettons, wallet integrations</p>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">AI, Frontend & More</p>
                  <p className="text-white/80 font-medium tracking-wide leading-relaxed">Gemini AI, Next.js, React, Unity, Flutter, Telegram Bots & Mini Apps</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: The Value Proposition (Bottom Right Box) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex-1 relative bg-[#111113]/80 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 lg:p-12 group hover:border-red-500/20 transition-colors duration-700 overflow-hidden"
            >
              {/* Soft Red Corner Lighting */}
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2 group-hover:bg-red-600/15 transition-colors duration-1000" />
              
              <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Value Delivered</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <div>
                    <p className="text-white font-medium mb-1">For Engineering Teams</p>
                    <p className="text-white/50 text-sm leading-relaxed">Delivering clean, scalable code with strict MVC layering, centralized error handling, and robust schema validation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0 group-hover:bg-red-400 transition-colors" />
                  <div>
                    <p className="text-white font-medium mb-1">For Business Clients</p>
                    <p className="text-white/50 text-sm leading-relaxed">Architecting secure REST APIs and full-stack solutions tailored to exact business requirements and traffic loads.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
