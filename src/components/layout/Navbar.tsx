'use client';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/lib/constants';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        initial="visible"
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6"
      >
        <nav className="w-full max-w-[90rem] flex justify-between items-center gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 px-2 py-1.5 bg-black/40 border border-white/10 rounded-full backdrop-blur-md group hover:bg-black/60 transition-colors min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-black font-bold flex items-center justify-center rounded-full text-[10px] sm:text-xs shrink-0">
              YZ
            </div>
            <span className="text-white font-medium pr-2 sm:pr-4 text-xs sm:text-sm tracking-wide truncate">
              Yahia Zakaria
            </span>
          </Link>

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

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-black/40 border border-white/10 rounded-full backdrop-blur-md text-white hover:bg-black/60 transition-colors"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>

            <a
              href="mailto:mrzak051@gmail.com"
              className="bg-white text-black font-semibold px-4 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-neutral-200 transition-colors text-xs sm:text-sm shadow-lg shadow-white/10 whitespace-nowrap"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[4.5rem] left-4 right-4 z-50 md:hidden bg-[#111113]/95 border border-white/10 rounded-2xl backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-white/80 hover:text-white hover:bg-white/5 transition-colors px-4 py-3 rounded-xl text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
