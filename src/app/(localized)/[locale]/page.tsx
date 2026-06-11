import { getTranslations, type Locale } from '@/i18n/translations';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Steps from '@/components/Steps';
import CTA from '@/components/CTA';
import Reviews from '@/components/Reviews';

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <Hero t={t} />
      <Features t={t} />
      <Services t={t} />
      <Steps t={t} />
      <CTA t={t} />
      <Reviews t={t} />
    </>
  );
}
