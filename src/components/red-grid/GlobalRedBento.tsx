'use client';
import { motion } from 'framer-motion';

const techGroups = [
  { label: 'Languages', value: 'TypeScript, Python, JavaScript, SQL, Dart' },
  { label: 'Backend & APIs', value: 'NestJS, Express, FastAPI, Prisma, BullMQ, REST, Webhooks' },
  { label: 'Data & Storage', value: 'PostgreSQL, MongoDB, Redis, Supabase, Cloudflare R2, AWS S3' },
  { label: 'Cloud & DevOps', value: 'Docker, GCP, Coolify, Vercel, Nginx, GHCR, Caddy' },
  { label: 'Blockchain & Fintech', value: 'TON SDK, USDT Jettons, wallet integrations' },
  { label: 'AI, Frontend & More', value: 'Gemini AI, Next.js, React, Unity, Flutter, Telegram Bots & Mini Apps' },
];

const valuePoints = [
  {
    title: 'For Engineering Teams',
    body: 'Delivering clean, scalable code with strict MVC layering, centralized error handling, and robust schema validation.',
    accent: true,
  },
  {
    title: 'For Business Clients',
    body: 'Architecting secure REST APIs and full-stack solutions tailored to exact business requirements and traffic loads.',
    accent: false,
  },
];

const cardClass =
  'relative bg-[#111113]/80 backdrop-blur-sm border border-white/5 rounded-2xl sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 group hover:border-red-500/20 transition-colors duration-700 overflow-hidden';

export default function GlobalRedBento() {
  return (
    <section
      id="why-partner"
      className="relative w-full bg-[#09090b] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="text-red-500/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-8 h-[1px] bg-red-500/50" />
            About The Engineer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white max-w-2xl leading-[1.1] tracking-tight">
            Who Am I
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cardClass}
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute top-0 right-0 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] bg-red-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-red-600/15 transition-colors duration-1000" />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">Brief Overview</h3>

              <p className="text-white/60 text-[15px] sm:text-base md:text-lg leading-relaxed font-light mb-6">
                I am a{' '}
                <span className="text-white font-medium">Backend-Heavy Software Engineer</span>{' '}
                focused on building resilient, scalable systems for complex business needs. From 
                payment pipelines to queue-driven APIs and self-hosted infrastructure, I prioritize 
                correctness, performance, and long-term maintainability.
              </p>

              <div className="pt-2">
                <a href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                  Read Full Engineering Dossier <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={cardClass}
            >
              <div className="absolute bottom-0 left-0 w-[240px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[400px] bg-red-600/10 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/3 group-hover:bg-red-600/15 transition-colors duration-1000" />

              <h3 className="text-xl sm:text-2xl font-serif text-white mb-5 sm:mb-6 relative z-10">
                Technical Arsenal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6 relative z-10">
                {techGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1.5 sm:mb-2">
                      {group.label}
                    </p>
                    <p className="text-white/80 text-sm sm:text-[15px] font-medium leading-relaxed">
                      {group.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={cardClass}
            >
              <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[260px] lg:w-[300px] h-[200px] sm:h-[260px] lg:h-[300px] bg-red-600/5 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2 group-hover:bg-red-600/15 transition-colors duration-1000" />

              <h3 className="text-xl sm:text-2xl font-serif text-white mb-5 sm:mb-6 relative z-10">
                Value Delivered
              </h3>

              <div className="space-y-4 sm:space-y-5 relative z-10">
                {valuePoints.map((point) => (
                  <div key={point.title} className="flex gap-3 sm:gap-4 items-start">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        point.accent
                          ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                          : 'bg-white/30 group-hover:bg-red-400 transition-colors'
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-white font-medium mb-1 text-sm sm:text-base">{point.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
