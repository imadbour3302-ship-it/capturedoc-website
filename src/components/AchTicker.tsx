"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const RE = /^(\D*)([\d,.]+)(.*)$/;

function AnimNum({ text, run }: { text: string; run: boolean }) {
  const m = text.match(RE);
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  const target = m ? parseFloat(m[2].replace(",", ".")) : 0;

  useEffect(() => {
    if (!run || reduced || !m) return;
    const t0 = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // text is a stable prop — m/target are derived from it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, reduced, text]);

  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      {reduced ? target : run ? n : 0}
      {m[3]}
    </>
  );
}

/** Horizontal ticker band of achievements (like the live site). */
export default function AchTicker({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.25 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-700 py-5"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="marquee-track items-center" style={{ animationDuration: "55s" }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 flex shrink-0 items-center gap-8 whitespace-nowrap">
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              <AnimNum text={it} run={inView} />
            </span>
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(255,198,0,0.8)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
