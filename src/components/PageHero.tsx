"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  kicker,
  title,
  description,
  image,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="section-dark relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        </>
      )}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[110px]" />
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl"
        >
          {kicker && <p className="kicker kicker--on-dark">{kicker}</p>}
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-lg">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
