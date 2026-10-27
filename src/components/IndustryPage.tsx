"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { IndustryPage as IndustryData } from "@/data/types";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTABand from "./CTABand";
import { ArrowIcon, TargetIcon, SparkIcon, DownloadIcon } from "./icons";

export default function IndustryPage({ data, kicker }: { data: IndustryData; kicker: string }) {
  const t = useTranslations("detail");

  return (
    <>
      <PageHero kicker={kicker} title={data.title} description={data.description} image={data.images[0]}>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-gold">
            {t("cta")}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
          {data.caseStudy && (
            <a href={data.caseStudy} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              <DownloadIcon className="h-4 w-4" />
              {t("caseStudyCta")}
            </a>
          )}
        </div>
      </PageHero>

      {data.hero.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.map((h, i) => (
                <Reveal key={h.t} delay={i * 0.08} className="h-full">
                  <div className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{h.s}</span>
                    <h3 className="mt-2.5 font-bold leading-snug text-navy">{h.t}</h3>
                    {h.d && <p className="mt-2 text-sm leading-relaxed text-slate-body">{h.d}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.challenges.length > 0 && (
        <section className="bg-mist py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="kicker">{t("challengesKicker")}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{data.innovationTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.challenges.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.07} className="h-full">
                  <div className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-brand-700">
                      <TargetIcon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-600">{c.s}</p>
                    <h3 className="mt-1.5 font-bold text-navy">{c.t}</h3>
                    {c.d && <p className="mt-2 text-sm leading-relaxed text-slate-body">{c.d}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.images.length > 1 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x grid gap-5 sm:grid-cols-2">
            {data.images.slice(1, 3).map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="img-zoom overflow-hidden rounded-3xl border border-line shadow-lg shadow-brand-900/5">
                  <Image src={src} alt="" width={900} height={560} className="aspect-[16/10] w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {data.useCases.length > 0 && (
        <section className="section-dark relative overflow-hidden py-16 sm:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="container-x relative z-10">
            <Reveal className="max-w-2xl">
              <p className="kicker kicker--on-dark">{t("casesKicker")}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{data.useCasesTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.useCases.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-gold/40">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <SparkIcon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-gold/90">{c.s}</p>
                    <h3 className="mt-1.5 font-bold text-white">{c.t}</h3>
                    {c.d && <p className="mt-2 flex-1 text-sm leading-relaxed text-blue-100/75">{c.d}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
