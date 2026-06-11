import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import { getTranslations, type Locale } from '@/i18n/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import ScrollReveal from '@/components/ScrollReveal';
import HeaderScroll from '@/components/HeaderScroll';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const locales: Locale[] = ['ru', 'uz'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return {
    title: t.meta_title,
    description: t.meta_description,
    alternates: {
      canonical: `https://725.uz/${locale}/`,
      languages: {
        ru: 'https://725.uz/ru/',
        uz: 'https://725.uz/uz/',
      },
    },
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      url: `https://725.uz/${locale}/`,
      siteName: 'Эвакуатор 725',
      locale: locale === 'ru' ? 'ru_RU' : 'uz_UZ',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17938283803"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17938283803');
          `}
        </Script>
      </head>
      <body>
        <div className={locale === 'uz' ? 'locale-uz' : 'locale-ru'}>
          <HeaderScroll />
          <Header locale={locale as Locale} t={t} />
          {children}
          <Footer t={t} />
          <MobileCTA t={t} />
          <ScrollReveal />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'Эвакуатор 725',
                description: t.meta_description,
                telephone: '+998997727777',
                url: 'https://725.uz',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Tashkent',
                  addressCountry: 'UZ',
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '00:00',
                  closes: '23:59',
                },
              }),
            }}
          />
        </div>
      </body>
    </html>
  );
}
