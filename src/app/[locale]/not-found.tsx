"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="section-dark relative flex min-h-[80svh] items-center justify-center overflow-hidden px-5 pt-24">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="absolute -top-32 start-1/3 h-96 w-96 rounded-full bg-brand-600/25 blur-[130px]" />
      <div className="relative text-center">
        <p className="text-gradient-gold text-[7rem] font-bold leading-none sm:text-[10rem]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{t("title")}</h1>
        <p className="mx-auto mt-4 max-w-md text-blue-100/80">{t("desc")}</p>
        <Link href="/" className="btn btn-gold mt-9">
          {t("back")}
          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
        </Link>
      </div>
    </section>
  );
}
