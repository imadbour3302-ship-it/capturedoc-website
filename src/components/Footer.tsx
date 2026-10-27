import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/data";
import { LinkedinIcon, PhoneIcon, MailIcon, PinIcon, ArrowIcon } from "./icons";

const INDUSTRY_SLUGS = ["bancaire", "assurance", "telecom", "gouvernement", "transport-logistique", "sante"];
const SERVICE_SLUGS = ["services-professionnels", "support-maintenance", "conseil-expertise"];

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const content = getContent(locale);
  const year = new Date().getFullYear();

  const linkCls =
    "group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-blue-100/75 transition-colors duration-200 hover:text-gold";

  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-x relative z-10 pb-8 pt-14 sm:pt-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_2.6fr] lg:gap-16">
          <div className="space-y-5">
            <Link href="/" aria-label={t("backHome")} className="inline-block">
              <Image src="/logo.webp" alt="CaptureDoc logo" width={170} height={50} className="h-12 w-auto object-contain" />
            </Link>
            <p className="max-w-xs text-[15px] font-medium italic leading-relaxed text-blue-100/80">
              “{t("tagline")}”
            </p>
            <a
              href="https://www.linkedin.com/company/capturedocgroup/about/"
              target="_blank"
              rel="noreferrer"
              aria-label={t("linkedin")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition-all hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-gold">{t("nav")}</h3>
              <ul className="space-y-2.5">
                <li><Link href="/" className={linkCls}>{t("home")}</Link></li>
                <li><Link href="/a-propos" className={linkCls}>{t("about")}</Link></li>
                <li><Link href="/contact" className={linkCls}>{t("contact")}</Link></li>
              </ul>
              <h3 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.14em] text-gold">{t("services")}</h3>
              <ul className="space-y-2.5">
                {SERVICE_SLUGS.map((s) => (
                  <li key={s}>
                    <Link href={`/services/${s}` as never} className={linkCls}>
                      {tn(`serviceItems.${s}.label`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-gold">{t("solutions")}</h3>
              <ul className="space-y-2.5">
                {INDUSTRY_SLUGS.map((s) => (
                  <li key={s}>
                    <Link href={`/solutions/${s}` as never} className={linkCls}>
                      {tn(`industries.${s}.label`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-gold">{t("expertises")}</h3>
              <ul className="space-y-2.5">
                {content.home.expertiseCards.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/expertises/${c.slug}` as never} className={linkCls}>
                      {c.t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-gold">{t("contactTitle")}</h3>
              <ul className="space-y-3 text-[13.5px] font-medium text-blue-100/75">
                <li className="flex items-start gap-2.5">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=CAPTUREDOC%20Cheraga"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    187 lot Bouchadou 2, N°32, Chéraga 16084, Alger
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href="tel:+213551319751" dir="ltr" className="transition-colors hover:text-gold">
                    +213 551 31 97 51
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href="mailto:info@capturedoc.com" className="transition-colors hover:text-gold">
                    info@capturedoc.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs font-medium text-blue-100/60">© {year} {t("rights")}.</p>
          <div className="flex items-center gap-6">
            <Link href="/conditions-generales" className={linkCls}>
              {t("terms")}
            </Link>
            <Link href="/politique-confidentialite" className={linkCls}>
              {t("privacy")}
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-1.5 text-xs font-bold text-gold">
              {tn("cta")}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
