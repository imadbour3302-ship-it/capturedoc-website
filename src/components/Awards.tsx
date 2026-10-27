"use client";

import { useTranslations } from "next-intl";
import type { Award } from "@/data/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { AwardIcon } from "./icons";

const Laurel = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 60" className={`h-20 w-8 text-gold-deep ${flip ? "-scale-x-100" : ""}`} fill="none" aria-hidden="true">
    {[8, 16, 24, 32, 40, 48].map((y, i) => (
      <ellipse
        key={y}
        cx={12 - i * 0.8}
        cy={y}
        rx="7"
        ry="3.4"
        transform={`rotate(${-38 - i * 3} ${12 - i * 0.8} ${y})`}
        fill="currentColor"
        opacity={1 - i * 0.09}
      />
    ))}
  </svg>
);

export default function Awards({ awards }: { awards: Award[] }) {
  const t = useTranslations("home.awards");

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.12} className="h-full">
              <div className="card-hover relative flex h-full flex-col items-center rounded-3xl border border-line bg-white px-6 pb-8 pt-10 text-center">
                <div className="relative flex h-28 w-28 items-center justify-center">
                  <span className="absolute left-0"><Laurel /></span>
                  <span className="absolute right-0"><Laurel flip /></span>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy shadow-lg shadow-gold/30">
                    <AwardIcon className="h-8 w-8" />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-navy">{a.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-600">{a.provider}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{a.details}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
