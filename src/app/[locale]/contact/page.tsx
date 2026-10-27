import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PhoneIcon, MailIcon, PinIcon, LinkedinIcon } from "@/components/icons";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  const cards = [
    {
      icon: PhoneIcon,
      title: t("callUs"),
      lines: ["+213 551 31 97 51", "+213 560 98 57 75"],
      href: "tel:+213551319751",
    },
    {
      icon: MailIcon,
      title: t("emailUs"),
      lines: ["info@capturedoc.com"],
      href: "mailto:info@capturedoc.com",
    },
    {
      icon: PinIcon,
      title: t("hq"),
      lines: [t("address")],
      href: "https://www.google.com/maps/search/?api=1&query=CAPTUREDOC%20Cheraga",
    },
  ];

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("title")} description={t("subtitle")} />

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <div className="space-y-4">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card-hover flex items-start gap-4 rounded-2xl border border-line bg-white p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{c.title}</h3>
                      {c.lines.map((l) => (
                        <p key={l} className="mt-1 text-sm text-slate-body" dir={l.startsWith("+") ? "ltr" : undefined}>
                          {l}
                        </p>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <a
                  href="https://www.linkedin.com/company/capturedocgroup/about/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <LinkedinIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-navy">LinkedIn</h3>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.35}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-line shadow-sm">
                <iframe
                  title="CaptureDoc — Chéraga, Alger"
                  src="https://www.google.com/maps?q=CAPTUREDOC%20Cheraga%20Alger&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
