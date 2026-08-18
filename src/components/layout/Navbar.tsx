'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/lib/constants';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Hide nav on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || '/';
    const hash = href.slice(hashIndex + 1);
    const onSamePage =
      window.location.pathname === path ||
      (path === '/' && window.location.pathname === '/');

    if (onSamePage && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-6"
    >
      <nav className="w-full max-w-[90rem] flex justify-between items-center">
        
        {/* Logo / Name - Liquid Glass */}
        <Link href="/" className="flex items-center gap-3 px-2 py-1.5 bg-black/40 border border-white/10 rounded-full backdrop-blur-md group hover:bg-black/60 transition-colors">
          <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center rounded-full text-xs">
            YZ
          </div>
          <span className="text-white font-medium pr-4 text-sm tracking-wide">Yahia Zakaria</span>
        </Link>
        
        {/* Desktop Nav Links - Liquid Glass */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-white/70 bg-black/40 border border-white/10 px-10 py-3.5 rounded-full backdrop-blur-md tracking-wide">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:mrzak051@gmail.com" 
          className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors text-sm shadow-lg shadow-white/10"
        >
          Let's Talk
        </a>
        
      </nav>
    </motion.header>
  );
}
