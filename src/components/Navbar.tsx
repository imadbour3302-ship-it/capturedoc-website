"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ExpertiseCard } from "@/data/types";
import {
  ChevronIcon, MenuIcon, XIcon, GlobeIcon, ArrowIcon,
  expertiseIcons, industryIcons, serviceIcons,
} from "./icons";

const INDUSTRY_SLUGS = ["bancaire", "assurance", "telecom", "transport-logistique", "gouvernement", "sante"];
const EXPERTISE_SLUGS = [
  "workflow-orchestration", "intelligent-document-processing", "signature-electronique", "rpa",
  "reconnaissance-faciale", "business-intelligence", "enterprise-content-management", "numerisation-archivage",
];
const SERVICE_SLUGS = ["conseil-expertise", "services-professionnels", "support-maintenance"];
const LOCALES = ["fr", "en", "ar"] as const;

export default function Navbar({ locale, expertiseCards }: { locale: string; expertiseCards: ExpertiseCard[] }) {
  const t = useTranslations("nav");
  const tl = useTranslations("lang");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const lastY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobile(false);
    setOpen(null);
    setLangOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  const localePath = (l: string) => {
    const rest = pathname.replace(/^\/(fr|en|ar)/, "") || "/";
    return `/${l}${rest === "/" ? "" : rest}`;
  };

  const menus = [
    {
      id: "solutions", label: t("solutions"), base: "/solutions",
      items: INDUSTRY_SLUGS.map((s) => ({
        slug: s,
        label: t(`industries.${s}.label`),
        desc: t(`industries.${s}.desc`),
        Icon: industryIcons[s],
      })),
    },
    {
      id: "expertises", label: t("expertises"), base: "/expertises",
      items: EXPERTISE_SLUGS.map((s) => ({
        slug: s,
        label: expertiseCards.find((c) => c.slug === s)?.t ?? s,
        desc: "",
        Icon: expertiseIcons[s],
      })),
    },
    {
      id: "services", label: t("services"), base: "/services",
      items: SERVICE_SLUGS.map((s) => ({
        slug: s,
        label: t(`serviceItems.${s}.label`),
        desc: t(`serviceItems.${s}.desc`),
        Icon: serviceIcons[s],
      })),
    },
  ];

  const isActive = (base: string) => pathname.includes(base);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${hidden && !mobile ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className={`mx-auto transition-all duration-500 ${scrolled ? "max-w-6xl px-3 pt-3" : "max-w-none px-0 pt-0"}`}>
        <nav
          className={`flex items-center justify-between gap-3 transition-all duration-500 ${
            scrolled
              ? "rounded-2xl border border-white/10 bg-navy/90 px-4 py-2.5 shadow-2xl shadow-navy/40 backdrop-blur-xl"
              : "border-b border-white/10 bg-navy/80 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-10"
          }`}
        >
          <Link href="/" aria-label={t("home")} className="group flex shrink-0 items-center">
            <span className="flex items-center rounded-xl bg-white/95 px-3.5 py-2 shadow-lg shadow-black/25 ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white group-hover:shadow-gold/20">
              <Image
                src="/logo-color.png"
                alt="CaptureDoc"
                width={150}
                height={44}
                priority
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-8"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex" dir="ltr">
            <Link
              href="/"
              className={`rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                pathname === `/${locale}` || pathname === `/${locale}/`
                  ? "bg-white/10 text-white"
                  : "text-blue-100/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span dir={locale === "ar" ? "rtl" : "ltr"}>{t("home")}</span>
            </Link>
            {menus.map((m) => (
              <div
                key={m.id}
                className="relative"
                onMouseEnter={() => setOpen(m.id)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === m.id ? null : m.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                    isActive(m.base) ? "text-white" : "text-blue-100/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span dir={locale === "ar" ? "rtl" : "ltr"}>{m.label}</span>
                  <ChevronIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${open === m.id ? "rotate-180 text-gold" : "text-blue-200/70"}`} />
                </button>
                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300 ${
                    open === m.id ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className={`w-[380px] rounded-2xl border border-white/12 bg-navy-800/98 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl ${m.id === "expertises" ? "max-h-[70vh] overflow-y-auto" : ""}`} dir={locale === "ar" ? "rtl" : "ltr"}>
                    {m.items.map((it) => (
                      <Link
                        key={it.slug}
                        href={`${m.base}/${it.slug}` as never}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/8"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gold transition-colors group-hover:border-gold/40 group-hover:bg-gold/10">
                          <it.Icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[13.5px] font-bold leading-snug text-white transition-colors group-hover:text-gold">
                            {it.label}
                          </span>
                          {it.desc && <span className="mt-0.5 block text-xs font-medium text-blue-200/70">{it.desc}</span>}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/a-propos"
              className={`rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                isActive("/a-propos") ? "bg-white/10 text-white" : "text-blue-100/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span dir={locale === "ar" ? "rtl" : "ltr"}>{t("about")}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-2 text-xs font-bold uppercase text-blue-100 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Language"
              >
                <GlobeIcon className="h-4 w-4 text-gold" />
                {locale}
                <ChevronIcon className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute end-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-white/12 bg-navy-800/98 shadow-2xl backdrop-blur-xl">
                  {LOCALES.map((l) => (
                    <a
                      key={l}
                      href={localePath(l)}
                      className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/8 ${
                        l === locale ? "text-gold" : "text-blue-100"
                      }`}
                    >
                      {tl(l)}
                      {l === locale && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="btn btn-gold hidden !px-4 !py-2 text-[13px] sm:inline-flex">
              {t("cta")}
            </Link>

            <button
              type="button"
              onClick={() => setMobile(!mobile)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
              aria-label="Menu"
            >
              {mobile ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-[-1] bg-navy/98 pt-20 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobile ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto px-5 pb-10 pt-4">
          <MobileLink href="/" label={t("home")} />
          {menus.map((m) => (
            <MobileGroup key={m.id} label={m.label}>
              {m.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`${m.base}/${it.slug}` as never}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-blue-100/90 transition-colors hover:bg-white/8 hover:text-white"
                >
                  <it.Icon className="h-4.5 w-4.5 text-gold" />
                  {it.label}
                </Link>
              ))}
            </MobileGroup>
          ))}
          <MobileLink href="/a-propos" label={t("about")} />
          <MobileLink href="/contact" label={t("contact")} />
          <div className="mt-6 flex gap-2 border-t border-white/10 pt-6">
            {LOCALES.map((l) => (
              <a
                key={l}
                href={localePath(l)}
                className={`flex-1 rounded-xl border px-3 py-2.5 text-center text-sm font-bold uppercase transition-colors ${
                  l === locale ? "border-gold bg-gold/10 text-gold" : "border-white/15 text-blue-100"
                }`}
              >
                {l}
              </a>
            ))}
          </div>
          <Link href="/contact" className="btn btn-gold mt-4 w-full">
            {t("cta")}
            <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href as never}
      className="block border-b border-white/8 py-3.5 text-lg font-bold text-white transition-colors hover:text-gold"
    >
      {label}
    </Link>
  );
}

function MobileGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3.5 text-lg font-bold text-white"
      >
        {label}
        <ChevronIcon className={`h-4 w-4 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-400 ${open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
