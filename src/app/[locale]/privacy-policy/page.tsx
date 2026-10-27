import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PrivacyAlias({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  redirect(`/${locale}/politique-confidentialite`);
}
