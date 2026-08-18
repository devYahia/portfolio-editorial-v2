'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlobalRedHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#09090b] overflow-hidden flex flex-col items-center justify-start">
      
      {/* 1. Global Background Effects */}
      {/* Deep Red Radial Glows */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-red-700/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-red-600/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Rounded Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='110' height='110' x='5' y='5' rx='16' ry='16' fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      {/* Vignette to blend the grid into the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#09090b_90%)] pointer-events-none" />


      {/* 3. Main Content Container */}
      <div className="relative z-30 w-full max-w-[90rem] px-6 mx-auto flex flex-col items-start justify-center pt-32 lg:pt-24 flex-1 pointer-events-none">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl xl:max-w-3xl z-40 pointer-events-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-white/80 leading-[1.05] tracking-tight mb-12">
            Building <span className="font-bold text-white">intelligent</span><br/>
            software solutions &<br/>
            scalable <span className="font-bold text-white">systems</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:mrzak051@gmail.com" className="bg-white text-black font-semibold px-10 py-4 rounded-xl hover:bg-neutral-200 transition-colors text-sm tracking-wide inline-flex items-center justify-center">
              Let's Talk
            </a>
            <a href="/Yahia-Zakaria-Resume.pdf" download="Yahia-Zakaria-Resume.pdf" className="bg-[#111111]/50 text-white border border-white/20 font-semibold px-10 py-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-3 text-sm tracking-wide backdrop-blur-sm">
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 17V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Portrait - v2 (Photoshop edge fixed) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-[-10%] lg:right-0 w-[95vw] lg:w-[65vw] h-[75vh] lg:h-[90vh] max-w-[1200px] pointer-events-none z-20 flex items-end justify-end"
      >
        <div className="relative w-full h-full" style={{ filter: 'drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.15))' }}>
          <Image 
            src="/images/v2.png" 
            alt="Yahia Zakaria"
            fill
            className="object-contain object-bottom lg:object-right-bottom"
            priority
            unoptimized
          />
        </div>
      </motion.div>

      {/* Overlapping Black Fog Layers (As requested, OVER the image) */}
      {/* 1. Bottom Fog: Covers the bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent pointer-events-none z-30" />
      
      {/* 2. Right Fog: Covers the right edge in case the image touches it */}
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none z-30" />

      {/* 4. Tech Stack Footer Row (Moving Marquee) */}
      <div className="relative w-full z-40 pb-6 pt-12 mt-auto overflow-hidden">
        {/* Subtle gradient to ensure the logos stand out on pure black, but not ruining the red glow */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none opacity-80" />
        
        <div className="relative w-full flex opacity-40 grayscale font-sans py-4">
          <motion.div 
            className="flex gap-16 md:gap-32 whitespace-nowrap px-8"
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {/* Set 1 */}
            <span className="text-2xl font-bold tracking-widest text-white">node.js</span>
            <span className="text-2xl font-bold text-white tracking-tight">redis</span>
            <span className="text-2xl font-black tracking-tighter text-white">NEXT<span className="font-light">.js</span></span>
            <span className="text-2xl font-bold text-white italic">aws</span>
            <span className="text-2xl font-medium text-white tracking-wide">GraphQL</span>
            <span className="text-2xl font-semibold text-white">TypeScript</span>
            <span className="text-2xl font-medium text-white tracking-tight">PostgreSQL</span>
            
            {/* Set 2 (Duplicate for seamless loop) */}
            <span className="text-2xl font-bold tracking-widest text-white">node.js</span>
            <span className="text-2xl font-bold text-white tracking-tight">redis</span>
            <span className="text-2xl font-black tracking-tighter text-white">NEXT<span className="font-light">.js</span></span>
            <span className="text-2xl font-bold text-white italic">aws</span>
            <span className="text-2xl font-medium text-white tracking-wide">GraphQL</span>
            <span className="text-2xl font-semibold text-white">TypeScript</span>
            <span className="text-2xl font-medium text-white tracking-tight">PostgreSQL</span>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
