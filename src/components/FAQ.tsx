"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PlusIcon } from "./icons";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const t = useTranslations("home.faq");
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker={t("kicker")} title={t("title")} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-brand-200 bg-brand-50/50" : "border-line bg-white hover:border-brand-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  >
                    <span className="font-bold text-navy">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen ? "border-gold/50 bg-gold/15 text-brand-700" : "border-line text-slate-body"
                      }`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-body">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
