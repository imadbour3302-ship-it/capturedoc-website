"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function CTABand() {
  const t = useTranslations("home.cta");
  return (
    <section className="section-dark relative overflow-hidden py-20 sm:py-24">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
      <div className="container-x relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100/85 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-gold !px-7 !py-3.5 text-base">
              {t("button")}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <a href="mailto:info@capturedoc.com" className="btn btn-outline-light !px-6 !py-3.5 text-base">
              <MailIcon className="h-4 w-4" />
              info@capturedoc.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
