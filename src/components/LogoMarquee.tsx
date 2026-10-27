"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ClientLogo } from "@/data/types";

const rowA = (logos: ClientLogo[]) => logos.filter((_, i) => i % 2 === 0);
const rowB = (logos: ClientLogo[]) => logos.filter((_, i) => i % 2 === 1);

export default function LogoMarquee({ logos }: { logos: ClientLogo[] }) {
  const t = useTranslations("home.trust");
  const a = rowA(logos);
  const b = rowB(logos);

  return (
    <section className="relative border-b border-line bg-white py-14 sm:py-16">
      <div className="container-x">
        <h2 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          {t("title")}
        </h2>
      </div>
      <div className="mt-10 space-y-5">
        <MarqueeRow logos={a} duration={42} />
        <MarqueeRow logos={b} duration={50} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({ logos, duration, reverse = false }: { logos: ClientLogo[]; duration: number; reverse?: boolean }) {
  const items = [...logos, ...logos];
  return (
    <div
      className="group relative overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
    >
      <div
        className="marquee-track group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {items.map((l, i) => (
          <div
            key={`${l.name}-${i}`}
            className="mx-3 flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-line bg-white px-6 grayscale-[45%] transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 hover:grayscale-0 sm:h-[4.5rem] sm:w-48"
          >
            <Image src={l.src} alt={l.name} width={150} height={48} className="h-auto max-h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
