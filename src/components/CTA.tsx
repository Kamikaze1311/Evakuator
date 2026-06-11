import type { Translations } from '@/i18n/translations';

export default function CTA({ t }: { t: Translations }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-content">
            <div className="section-label">{t.cta_label}</div>
            <h2 className="section-title">{t.cta_title}</h2>
            <a href="tel:+998997727777" className="cta-phone">
              +998 99 772 77 77
            </a>
            <a href="tel:+998997727777" className="btn">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{t.cta_button}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
