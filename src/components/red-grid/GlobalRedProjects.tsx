'use client';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalRedProjects() {
  return (
    <section id="projects" className="relative w-full bg-[#09090b] pt-12 pb-32 px-6 z-10">
      
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white leading-[1.1] tracking-tight">
            Projects shipped<br/>in production
          </h2>
        </div>

        {/* Timeline / Project List */}
        <div className="max-w-5xl mx-auto space-y-12 relative">
          
          {/* Subtle vertical red timeline line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-red-900/50 via-red-500/20 to-transparent -translate-x-1/2 z-0" />

          {projects.filter(p => p.featured).map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[39px] md:left-1/2 top-10 w-3 h-3 bg-[#09090b] border-2 border-red-500 rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(239,68,68,0.8)] z-20" />

                {/* Project Info Card */}
                <div className="flex-1 pl-20 md:pl-0 pt-4">
                  <div className={`flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                    <p className="text-red-500 font-mono text-xs tracking-widest uppercase mb-2">{project.role}</p>
                    <h3 className="text-3xl font-semibold text-white mb-4">{project.title}</h3>
                    
                    <Link href={`/projects/${project.id}`} className="block w-full max-w-lg cursor-pointer">
                      <div className={`w-full h-full bg-[#111113] border border-white/5 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:-translate-y-1`}>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                          {project.context}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Architecture</h4>
                            <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{project.architecture}</p>
                          </div>
                        </div>

                        <div className={`flex flex-wrap gap-2 pt-6 mb-4 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                          {project.techStack.slice(0, 5).map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className={`w-full flex ${isEven ? 'justify-start' : 'md:justify-end'} pt-4 border-t border-white/5 mt-4`}>
                          <span className="text-red-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                            View Case Study <span className="text-lg">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Empty spacer for timeline layout */}
                <div className="hidden md:block flex-1" />

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
