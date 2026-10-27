"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { DetailPage as DetailData } from "@/data/types";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTABand from "./CTABand";
import { ArrowIcon, CheckIcon, TargetIcon, SparkIcon, GearIcon } from "./icons";

export default function DetailPage({ data, kicker }: { data: DetailData; kicker: string }) {
  const t = useTranslations("detail");

  return (
    <>
      <PageHero kicker={kicker} title={data.title} description={data.description} image={data.heroImage}>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-gold">
            {t("cta")}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </PageHero>

      {data.stages.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <Reveal>
              <p className="kicker">{t("stagesKicker")}</p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.stages.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.08} className="h-full">
                  <div className="card-hover relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6">
                    <span className="text-5xl font-bold tracking-tight text-brand-100">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-bold text-navy">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-body">{s.d}</p>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-gold transition-transform duration-500 hover:scale-x-100 rtl:origin-right" />
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
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{data.challengeTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.challenges.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.07} className="h-full">
                  <div className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-brand-700">
                      <TargetIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold text-navy">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-body">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.approach.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="kicker">{t("approachKicker")}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{data.approachTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {data.approach.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.07} className="h-full">
                  <div className="card-hover flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <SparkIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{a.t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-body">{a.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.images.length > 0 && (
        <section className="bg-white pb-16 sm:pb-20">
          <div className="container-x grid gap-5 sm:grid-cols-2">
            {data.images.slice(0, 2).map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="img-zoom overflow-hidden rounded-3xl border border-line shadow-lg shadow-brand-900/5">
                  <Image src={src} alt="" width={900} height={560} className="aspect-[16/10] w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {data.cases.length > 0 && (
        <section className="section-dark relative overflow-hidden py-16 sm:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="container-x relative z-10">
            <Reveal className="max-w-2xl">
              <p className="kicker kicker--on-dark">{t("casesKicker")}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{data.casesTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.cases.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-gold/40">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <GearIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold text-white">{c.t}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-blue-100/75">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.benefits.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="kicker">{t("benefitsKicker")}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{data.benefitTitle}</h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {data.benefits.map((b, i) => (
                <Reveal key={b.t} delay={i * 0.06} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-line bg-mist/60 p-6">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{b.t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-body">{b.d}</p>
                    </div>
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
