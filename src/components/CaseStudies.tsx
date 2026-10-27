"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { CaseStudy } from "@/data/types";
import { ChevronIcon, DownloadIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CaseStudies({ cases }: { cases: CaseStudy[] }) {
  const t = useTranslations("home.cases");
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const n = cases.length;

  const go = useCallback((d: number) => setIdx((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    if (paused || reduced || n < 2) return;
    const id = setInterval(() => go(1), 8000);
    return () => clearInterval(id);
  }, [paused, reduced, go, n]);

  const cs = cases[idx];

  return (
    <section
      className="section-dark relative overflow-hidden py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="container-x relative z-10">
        <SectionHeading dark kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} />

        <div className="relative mx-auto mt-14 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, x: reduced ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduced ? 0 : -40 }}
              transition={{ duration: 0.6, ease }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
            >
              <div className="grid md:grid-cols-[1.25fr_0.75fr]">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-24 items-center justify-center rounded-xl bg-white p-2">
                      <Image src={cs.logo} alt="" width={96} height={40} className="max-h-9 w-auto object-contain" />
                    </span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                      {cs.badge}
                    </span>
                  </div>
                  <blockquote className="mt-6 text-lg font-medium leading-relaxed text-blue-50 sm:text-xl">
                    “{cs.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10 text-base font-bold text-gold">
                      {cs.person.split(" ").map((w) => w[0]).join("")}
                    </span>
                    <div>
                      <p className="font-bold text-white">{cs.person}</p>
                      <p className="text-sm text-blue-100/70">{cs.personTitle}</p>
                    </div>
                    {cs.pdf && (
                      <a
                        href={cs.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light ms-auto !px-4 !py-2 text-xs"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        {t("readMore")}
                      </a>
                    )}
                  </figcaption>
                </div>
                <div className="grid grid-rows-3 divide-y divide-white/10 border-t border-white/10 md:border-s md:border-t-0">
                  {cs.stats.map((s) => (
                    <div key={s.l} className="flex flex-col justify-center px-8 py-5">
                      <p className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">{s.v}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-blue-100/70">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-gold/60 hover:bg-gold/10 hover:text-gold rtl:-scale-x-100"
            >
              <ChevronIcon className="h-5 w-5 rotate-90" />
            </button>
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === idx ? "w-8 bg-gold" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t("next")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-gold/60 hover:bg-gold/10 hover:text-gold rtl:-scale-x-100"
            >
              <ChevronIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
