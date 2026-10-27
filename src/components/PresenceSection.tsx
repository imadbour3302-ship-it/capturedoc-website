"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Country } from "@/data/types";
import CountryStack from "./CountryStack";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function PresenceSection({ countries, stats }: { countries: Country[]; stats: string[] }) {
  const t = useTranslations("home.about");
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-50 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="kicker">{t("kicker")}</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-[2.9rem]">
                {t("title")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-body sm:text-lg">{t("text")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {stats.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link href="/a-propos" className="btn btn-primary mt-8">
                {t("cta")}
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <CountryStack countries={countries} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
