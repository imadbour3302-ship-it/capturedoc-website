"use client";

import { useTranslations } from "next-intl";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function LegalPage({ titleKey, sectionsKey }: { titleKey: string; sectionsKey: string }) {
  const t = useTranslations("legal");
  const sections = t.raw(sectionsKey) as { t: string; d: string }[];

  return (
    <>
      <PageHero kicker={t("kicker")} title={t(titleKey)} description={t("updated")} />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="border-b border-line py-8 first:pt-0 last:border-0">
                <h2 className="text-xl font-bold text-navy">{s.t}</h2>
                <p className="mt-3 leading-relaxed text-slate-body">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
