'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/lib/data';
import Link from 'next/link';

const featuredProjects = projects.filter((p) => p.featured);

export default function GlobalRedProjects() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.35'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    mass: 1.2,
    restDelta: 0.0005,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const headOpacity = useTransform(smoothProgress, [0, 0.04, 1], [0, 1, 1]);
  const headTop = useTransform(smoothProgress, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#09090b] pt-12 pb-20 sm:pb-32 px-4 sm:px-6 z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[min(80vw,700px)] h-[min(80vw,700px)] bg-red-600/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[min(60vw,500px)] h-[min(60vw,500px)] bg-red-900/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-10 sm:mb-16 text-center px-2">
          <p className="text-red-500/70 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-8 h-[1px] bg-red-500/40" />
            Selected Work
            <span className="w-6 sm:w-8 h-[1px] bg-red-500/40" />
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white leading-[1.1] tracking-tight">
            Projects shipped
            <br className="hidden sm:block" />
            in production
          </h2>
        </div>

        <div ref={timelineRef} className="max-w-5xl mx-auto space-y-10 sm:space-y-12 relative">
          <div className="absolute left-[23px] sm:left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.06]" />
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-red-500/90 via-red-500/50 to-red-400/20"
              style={{ scaleY: lineScale }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.95)] -translate-y-1/2"
              style={{
                top: headTop,
                opacity: headOpacity,
              }}
            />
          </div>

          {featuredProjects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div
                  initial={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#09090b', scale: 0.8, boxShadow: '0 0 10px rgba(239,68,68,0)' }}
                  whileInView={{ borderColor: 'rgba(239,68,68,0.9)', backgroundColor: 'rgba(239,68,68,1)', scale: 1, boxShadow: '0 0 15px rgba(239,68,68,0.8)' }}
                  viewport={{ once: false, margin: '-45% 0px -45% 0px' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute left-[23px] sm:left-[39px] md:left-1/2 top-8 sm:top-10 w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 rounded-full -translate-x-1/2 z-20"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-red-500"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0.6, 0], scale: [1, 2.5] }}
                    viewport={{ once: false, margin: '-45% 0px -45% 0px' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                </motion.div>

                <div className="flex-1 pl-14 sm:pl-20 md:pl-0 pt-2 sm:pt-4">
                  <div
                    className={`flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}
                  >
                    <p className="text-red-500 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2">
                      {project.role}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 sm:mb-4">
                      {project.title}
                    </h3>

                    <Link href={`/projects/${project.id}`} className="block w-full max-w-lg cursor-pointer">
                      <div className="w-full h-full bg-[#111113]/90 backdrop-blur-sm border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-red-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:-translate-y-1">
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '28px 28px' }} />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                          <p className="text-white/60 text-sm leading-relaxed mb-6">{project.context}</p>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">
                                Architecture
                              </h4>
                              <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                                {project.architecture}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex flex-wrap gap-2 pt-6 mb-4 ${isEven ? 'justify-start' : 'md:justify-end'}`}
                          >
                            {project.techStack.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div
                            className={`w-full flex ${isEven ? 'justify-start' : 'md:justify-end'} pt-4 border-t border-white/5 mt-4`}
                          >
                            <span className="text-red-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                              View Case Study <span className="text-lg">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
