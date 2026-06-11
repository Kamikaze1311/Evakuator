import type { Translations, Locale } from '@/i18n/translations';

export default function Header({ locale, t }: { locale: Locale; t: Translations }) {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <div className="logo">725</div>
          <div className="header-right">
            <div className="lang-switch">
              <a
                href="/ru/"
                className={`lang-btn${locale === 'ru' ? ' active' : ''}`}
              >
                RU
              </a>
              <a
                href="/uz/"
                className={`lang-btn${locale === 'uz' ? ' active' : ''}`}
              >
                UZ
              </a>
            </div>
            <a href="tel:+998997727777" className="header-phone">
              +998 99 772 77 77
            </a>
            <a href="tel:+998997727777" className="btn">
              {t.cta_call}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
