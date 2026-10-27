"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Pair } from "@/data/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TeamIcon, SparkIcon, HeartIcon, CheckIcon } from "./icons";

const cardIcons = [TeamIcon, SparkIcon, HeartIcon];

export default function TeamImpact({ cards, stat }: { cards: Pair[]; stat: string }) {
  const t = useTranslations("home.team");
  return (
    <section className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              center={false}
              kicker={t("kicker")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
            <div className="mt-9 space-y-4">
              {cards.map((c, i) => {
                const Icon = cardIcons[i % cardIcons.length];
                return (
                  <Reveal key={c.t} delay={i * 0.1}>
                    <div className="card-hover flex gap-4 rounded-2xl border border-line bg-white p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-bold text-navy">{c.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-body">{c.d}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="img-zoom overflow-hidden rounded-3xl border border-line shadow-2xl shadow-brand-900/15">
                <Image
                  src="/images/team-meeting.jpg"
                  alt={t("imageAlt")}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -end-4 max-w-[240px] rounded-2xl border border-line bg-white p-5 shadow-xl sm:-end-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-brand-700">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <p className="text-2xl font-bold text-navy">{stat.split(" ")[0]}</p>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-body">{stat.split(" ").slice(1).join(" ")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
