"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ExpertiseCard } from "@/data/types";
import DocParticles from "./DocParticles";
import { ArrowIcon, CheckIcon, SparkIcon, ShieldIcon, expertiseIcons } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ cards }: { cards: ExpertiseCard[] }) {
  const t = useTranslations("home.hero");
  const reduced = useReducedMotion();
  const title = t("title");
  const accent = t("titleAccent");
  const parts = title.split(accent);

  return (
    <section className="section-dark relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <DocParticles className="absolute inset-0 h-full w-full opacity-90" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="container-x relative z-10 grid items-center gap-10 pb-24 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-36">
        <div className="text-center lg:text-start">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="kicker kicker--on-dark justify-center lg:justify-start"
          >
            {t("kicker")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="mx-auto mt-6 max-w-4xl text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:mx-0 lg:text-[4.2rem]"
          >
            {parts[0]}
            <span className="gold-underline text-gradient-gold">{accent}</span>
            {parts[1]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg lg:mx-0"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link href="/contact" className="btn btn-gold !px-7 !py-3.5 text-base">
              {t("cta")}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <div className="flex items-center gap-3 text-sm font-semibold text-blue-100/70">
              <span className="flex -space-x-2 rtl:space-x-reverse">
                {[CheckIcon, SparkIcon, ShieldIcon].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy bg-gradient-to-br from-brand-600 to-navy-800 text-gold"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </span>
              <span>{t("proof")}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative mx-auto hidden h-[360px] w-full max-w-md items-center justify-center lg:flex"
        >
          <ExpertiseCylinder cards={cards} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100/50"
      >
        <span className="flex flex-col items-center gap-2">
          {t("scroll")}
          <span className="h-8 w-px overflow-hidden bg-white/15">
            <motion.span
              className="block h-3 w-px bg-gold"
              animate={reduced ? {} : { y: [0, 22, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </span>
      </motion.div>
    </section>
  );
}

/**
 * 3D rotating drum — raw requestAnimationFrame writing transforms directly to
 * the DOM every frame. No React state, no CSS transitions: it cannot stall.
 */
function ExpertiseCylinder({ cards }: { cards: ExpertiseCard[] }) {
  const n = cards.length;
  const step = 360 / n;
  const radius = 150;
  const SPEED = 0.014; // deg/ms auto-rotation — one card front every ~3.2s

  const drumRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const angle = useRef(0); // eased — what is rendered
  const target = useRef(0); // where we want to be
  const paused = useRef(false);
  const wheelIdle = useRef(0); // auto-rotation resumes after this timestamp
  const touchY = useRef(0);

  const nudge = (d: number) => {
    target.current += d;
    wheelIdle.current = performance.now() + 1400;
  };

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      if (!paused.current && now > wheelIdle.current) target.current += SPEED * dt;
      // buttery easing toward target — wheel/click/touch all land softly
      angle.current += (target.current - angle.current) * Math.min(1, 0.0065 * dt);
      const a = angle.current;
      if (drumRef.current) {
        drumRef.current.style.transform = `translateZ(${-radius}px) rotateX(${a}deg)`;
      }
      const items = itemRefs.current;
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (!el) continue;
        // absolute angle of card i = drum angle − slot angle; front ⇔ ≈ 0
        const rel = ((((a - i * step) % 360) + 540) % 360) - 180;
        const depth = Math.cos((rel * Math.PI) / 180);
        const front = Math.abs(rel) < step / 2;
        // corner pieces dissolve completely long before the clip edge
        el.style.opacity = String(Math.max(0, Math.min(1, (depth - 0.5) / 0.45)));
        el.style.filter = depth < 0.7 ? `blur(${((0.7 - depth) * 4).toFixed(2)}px)` : "none";
        el.style.borderColor = front ? "rgba(255,198,0,0.7)" : "rgba(255,255,255,0.10)";
        el.style.background = front ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)";
        el.style.color = front ? "#ffffff" : "rgba(191,219,254,0.65)";
        el.style.boxShadow = front ? "0 8px 40px -8px rgba(255,198,0,0.35)" : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step]);

  // native wheel listener — React's onWheel is passive and cannot preventDefault
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      nudge(Math.max(-140, Math.min(140, e.deltaY)) * 0.4);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={zoneRef}
      className="relative h-full w-full"
      style={{ perspective: "900px" }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={(e) => (touchY.current = e.touches[0].clientY)}
      onTouchEnd={(e) => {
        const d = touchY.current - e.changedTouches[0].clientY;
        if (Math.abs(d) > 24) nudge(d > 0 ? step : -step);
      }}
    >
      {/* fade masks at drum edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-navy via-navy/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-navy via-navy/80 to-transparent" />

      <div
        ref={drumRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", transform: `translateZ(${-radius}px) rotateX(0deg)` }}
      >
        {cards.map((c, i) => {
          const Icon = expertiseIcons[c.slug];
          return (
            <button
              key={c.slug}
              type="button"
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onClick={() => {
                const rel = ((((angle.current - i * step) % 360) + 540) % 360) - 180;
                nudge(-rel);
              }}
              className="absolute left-0 right-0 top-1/2 flex cursor-pointer items-center gap-4 rounded-2xl border p-4 text-start backdrop-blur-md"
              style={{
                transform: `translateY(-50%) rotateX(${-i * step}deg) translateZ(${radius}px)`,
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.10)",
                backfaceVisibility: "hidden",
              }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold">
                {Icon && <Icon className="h-5 w-5" />}
              </span>
              <span className="min-w-0 flex-1 text-sm font-bold leading-snug">{c.t}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
