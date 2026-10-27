"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ExpertiseCard } from "@/data/types";
import { ArrowIcon, expertiseIcons } from "./icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ExpertiseCards({ cards }: { cards: ExpertiseCard[] }) {
  const t = useTranslations("home.expertise");
  return (
    <section className="relative bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker={t("kicker")} title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = expertiseIcons[c.slug];
            return (
              <Reveal key={c.slug} delay={(i % 4) * 0.08} className="h-full">
                <Link
                  href={`/expertises/${c.slug}` as never}
                  className="card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-gold transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-brand-700">
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{c.t}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-body">{c.d}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors group-hover:text-brand-700">
                    {t("cta")}
                    <motion.span
                      className="inline-flex"
                      initial={false}
                      animate={{}}
                    >
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </motion.span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
