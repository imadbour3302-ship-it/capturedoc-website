import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContent } from "@/data";
import IndustryPage from "@/components/IndustryPage";

export function generateStaticParams() {
  const slugs = Object.keys(getContent("fr").industries);
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/solutions/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getContent(locale).industries[slug];
  if (!page) return {};
  return { title: page.seoTitle, description: page.seoDescription };
}

export default async function SolutionPage({
  params,
}: PageProps<"/[locale]/solutions/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getContent(locale).industries[slug];
  if (!page) notFound();
  const t = await getTranslations({ locale, namespace: "detail" });
  return <IndustryPage data={page} kicker={t("solutionsKicker")} />;
}
