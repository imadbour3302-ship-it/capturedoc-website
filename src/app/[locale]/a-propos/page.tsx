import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContent } from "@/data";
import { partnerLogos } from "@/data/logos";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { TargetIcon, SparkIcon, ShieldIcon, TeamIcon } from "@/components/icons";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/a-propos">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return { title: t("heroTitle"), description: t("heroText") };
}

const pillarIcons = [TargetIcon, SparkIcon, ShieldIcon, TeamIcon];

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/a-propos">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const { about } = getContent(locale);

  return (
    <>
      <PageHero kicker="CaptureDoc" title={t("heroTitle")} description={t("heroText")} image="/images/event.jpg" />

      {/* Who we are */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="img-zoom overflow-hidden rounded-3xl border border-line shadow-xl shadow-brand-900/10">
              <Image
                src="/images/about.jpg"
                alt={t("whoImageAlt")}
                width={1100}
                height={760}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker">{t("whoKicker")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-navy sm:text-4xl">
                {t("whoTitle")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-body">{t("whoText")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {about.stats.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="kicker justify-center">{t("pillarsKicker")}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{t("pillarsTitle")}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.pillars.map((p, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <Reveal key={p.t} delay={i * 0.08} className="h-full">
                  <div className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold text-navy">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-body">{p.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{t("partnersTitle")}</h2>
          </Reveal>
        </div>
        <div
          className="mt-10 overflow-hidden"
          aria-label={t("partnersListLabel")}
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="marquee-track items-center" style={{ animationDuration: "46s" }}>
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="mx-8 flex h-16 w-44 shrink-0 items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Image src={p.src} alt={p.name} width={176} height={56} className="h-auto max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark relative overflow-hidden py-16 sm:py-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-x relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="kicker kicker--on-dark justify-center">{t("historyKicker")}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("historyTitle")}</h2>
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl">
            {about.timeline.map((tl, i) => (
              <Reveal key={tl.t} delay={i * 0.1}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy text-sm font-bold text-gold">
                      {i + 1}
                    </span>
                    {i < about.timeline.length - 1 && <span className="mt-2 w-px flex-1 bg-white/15" />}
                  </div>
                  <div className="pb-2 pt-2">
                    <h3 className="text-xl font-bold text-white">{tl.t}</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-blue-100/80">{tl.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
