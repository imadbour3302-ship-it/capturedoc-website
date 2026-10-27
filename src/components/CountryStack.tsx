"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { Country } from "@/data/types";
import { Flags } from "./Flags";

const VISIBLE = 4;

/**
 * Interactive 3D deck of country cards — like the live capturedoc.com:
 * the stack tilts toward the cursor, drag the front card to cycle,
 * click a back card to bring it forward, auto-advances when idle.
 */
export default function CountryStack({ countries }: { countries: Country[] }) {
  const n = countries.length;
  // order[0] = front card index … order[n-1] = back
  const [order, setOrder] = useState<number[]>(() => countries.map((_, i) => i));
  const [interacting, setInteracting] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(0);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 140, damping: 18 });

  const next = useCallback(
    (dir: 1 | -1) =>
      setOrder((o) => {
        const copy = [...o];
        if (dir === 1) copy.push(copy.shift()!);
        else copy.unshift(copy.pop()!);
        return copy;
      }),
    []
  );

  // auto-advance while idle
  useEffect(() => {
    if (interacting) return;
    const id = setInterval(() => next(1), 4000);
    return () => clearInterval(id);
  }, [interacting, next]);

  // native wheel listener — React's onWheel is passive and cannot preventDefault
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = performance.now();
      if (now - wheelLock.current < 350) return;
      wheelLock.current = now;
      next(e.deltaY > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [next]);

  const onMove = (e: React.PointerEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltY.set(px * 22);
    tiltX.set(-py * 16);
  };
  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setInteracting(false);
  };

  const depth = (i: number) => order.indexOf(i);

  return (
    <div
      ref={wrap}
      className="relative mx-auto h-[400px] w-full max-w-xl select-none sm:h-[430px]"
      style={{ perspective: "1200px" }}
      onPointerMove={onMove}
      onPointerEnter={() => setInteracting(true)}
      onPointerLeave={onLeave}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {countries.map((c, i) => {
          const d = depth(i);
          const hidden = d >= VISIBLE;
          const Flag = Flags[c.id];
          const front = d === 0;
          return (
            <motion.button
              key={c.id}
              type="button"
              drag={front ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next(1);
                else if (info.offset.x > 60) next(-1);
              }}
              onClick={() => {
                if (!front) {
                  setOrder((o) => {
                    const copy = [...o];
                    copy.splice(copy.indexOf(i), 1);
                    copy.unshift(i);
                    return copy;
                  });
                }
              }}
              className="absolute inset-x-4 top-1/2 cursor-grab rounded-3xl border border-line bg-white p-7 text-start shadow-xl active:cursor-grabbing sm:inset-x-8"
              initial={false}
              animate={{
                x: `${d * -5}%`,
                y: `calc(-50% + ${d * -14}px)`,
                z: -d * 90,
                rotateZ: d % 2 === 0 ? d * 1.6 : d * -1.4,
                scale: 1 - d * 0.045,
                opacity: hidden ? 0 : 1 - d * 0.12,
                filter: `brightness(${1 - d * 0.07})`,
              }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              style={{ zIndex: n - d, transformStyle: "preserve-3d" }}
              aria-label={c.name}
              aria-hidden={!front}
              tabIndex={front ? 0 : -1}
            >
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-8 w-12 items-center justify-center overflow-hidden rounded-md border border-line shadow-sm [&>svg]:h-full [&>svg]:w-full">
                  {Flag ? <Flag /> : null}
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-navy">{c.name}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">{c.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-body">{c.details}</p>
              <span className="mt-5 block h-1 w-full overflow-hidden rounded-full bg-mist">
                <span
                  className={`block h-full rounded-full bg-gradient-to-r from-brand-600 to-gold transition-all duration-500 ${
                    front ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
