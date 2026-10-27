import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContent } from "@/data";
import { clientLogos } from "@/data/logos";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import PresenceSection from "@/components/PresenceSection";
import AchTicker from "@/components/AchTicker";
import ExpertiseCards from "@/components/ExpertiseCards";
import CaseStudies from "@/components/CaseStudies";
import Awards from "@/components/Awards";
import TeamImpact from "@/components/TeamImpact";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { home, about } = getContent(locale);

  return (
    <>
      <Hero cards={home.expertiseCards} />
      <LogoMarquee logos={clientLogos} />
      <PresenceSection countries={home.countries} stats={about.stats} />
      <AchTicker items={home.ticker} />
      <ExpertiseCards cards={home.expertiseCards} />
      <CaseStudies cases={home.cases} />
      <Awards awards={home.awards} />
      <TeamImpact cards={home.teamCards} stat={about.stats[2]} />
      <FAQ items={home.faq} />
      <CTABand />
    </>
  );
}
