import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContent } from "@/data";
import DetailPage from "@/components/DetailPage";

export function generateStaticParams() {
  const slugs = Object.keys(getContent("fr").expertises);
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/expertises/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getContent(locale).expertises[slug];
  if (!page) return {};
  return { title: page.seoTitle, description: page.seoDescription };
}

export default async function ExpertisePage({
  params,
}: PageProps<"/[locale]/expertises/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getContent(locale).expertises[slug];
  if (!page) notFound();
  const t = await getTranslations({ locale, namespace: "detail" });
  return <DetailPage data={page} kicker={t("expertisesKicker")} />;
}
