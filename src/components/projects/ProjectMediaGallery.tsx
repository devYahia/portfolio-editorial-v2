"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import type { Project } from "@/lib/data";

type GalleryItem = Project["gallery"][number];

interface ProjectMediaGalleryProps {
  items: GalleryItem[];
  title: string;
}

const MAX_HEIGHT_RATIO = 0.68;

function getDisplaySize(
  naturalW: number,
  naturalH: number,
  maxW: number,
  maxH: number
) {
  let width = naturalW;
  let height = naturalH;

  if (width > maxW) {
    width = maxW;
    height = width * (naturalH / naturalW);
  }
  if (height > maxH) {
    height = maxH;
    width = height * (naturalW / naturalH);
  }

  return {
    width: Math.round(width),
    height: Math.round(height),
  };
}

export function ProjectMediaGallery({ items, title }: ProjectMediaGalleryProps) {
  const [active, setActive] = useState(0);
  const [dims, setDims] = useState<Record<number, { w: number; h: number }>>({});
  const [bounds, setBounds] = useState({ maxWidth: 960, maxHeight: 560 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const current = items[active];

  const go = useCallback(
    (direction: -1 | 1) => {
      setActive((index) => (index + direction + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    items.forEach((item, index) => {
      const img = new window.Image();
      img.onload = () => {
        setDims((prev) => ({
          ...prev,
          [index]: { w: img.naturalWidth, h: img.naturalHeight },
        }));
      };
      img.src = item.src;
    });
  }, [items]);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const update = () => {
      setBounds({
        maxWidth: node.clientWidth,
        maxHeight: Math.round(window.innerHeight * MAX_HEIGHT_RATIO),
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (items.length < 2) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, items.length]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (items.length < 2) return;
    if (info.offset.x < -56 || info.velocity.x < -350) go(1);
    else if (info.offset.x > 56 || info.velocity.x > 350) go(-1);
  };

  if (!current) return null;

  const natural = dims[active];
  const size = natural
    ? getDisplaySize(
        natural.w,
        natural.h,
        bounds.maxWidth,
        bounds.maxHeight
      )
    : {
        width: bounds.maxWidth,
        height: Math.round(bounds.maxWidth * (9 / 16)),
      };

  const canSwipe = items.length > 1;

  return (
    <figure ref={wrapRef} className="w-full">
      <div className="flex w-full flex-col items-center">
        <motion.div
          drag={canSwipe ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={onDragEnd}
          animate={{ width: size.width, height: size.height }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 420, damping: 34 }
          }
          className={`relative overflow-hidden rounded-2xl md:rounded-[24px] border border-white/10 bg-[#0a0a0c] shadow-[0_20px_60px_rgba(0,0,0,0.4)] select-none ${
            canSwipe ? "cursor-grab active:cursor-grabbing touch-pan-y" : ""
          }`}
          aria-roledescription={canSwipe ? "carousel" : undefined}
          aria-label={canSwipe ? `${title} image gallery` : current.alt}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src}
              initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, x: -12 }
              }
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={size.width}
                height={size.height}
                priority={active === 0}
                sizes={`${size.width}px`}
                className="block h-full w-full"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <figcaption
          className="mt-2.5 flex w-full items-start justify-between gap-3"
          style={{ width: size.width }}
        >
          <p className="text-sm text-white/75 font-medium leading-snug tracking-tight">
            {current.caption}
          </p>
          {canSwipe ? (
            <span className="shrink-0 pt-0.5 text-[11px] font-mono text-white/35 tabular-nums">
              {active + 1}/{items.length}
            </span>
          ) : null}
        </figcaption>
      </div>

      {canSwipe ? (
        <div
          className="mx-auto mt-3 flex gap-2 overflow-x-auto pb-1"
          style={{ width: size.width, maxWidth: "100%" }}
          role="tablist"
          aria-label={`${title} thumbnails`}
        >
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={`${item.src}-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${index + 1}. ${item.caption}`}
                onClick={() => setActive(index)}
                className={`relative h-14 w-[4.75rem] shrink-0 overflow-hidden rounded-lg border bg-[#0a0a0c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-900/50 ${
                  isActive
                    ? "border-red-900/50 ring-1 ring-red-900/25"
                    : "border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={76}
                  height={56}
                  sizes="76px"
                  className="h-full w-full object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </figure>
  );
}
