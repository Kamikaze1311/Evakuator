import type { Translations } from '@/i18n/translations';

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-label">{t.hero_badge}</div>
          <h1>
            {t.hero_title1}
            <br />
            <span className="gold">{t.hero_title2}</span>
          </h1>
          <p className="hero-text">{t.hero_text}</p>
          <div className="hero-cta">
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
              <span>{t.cta_call}</span>
            </a>
            <a href="#services" className="btn btn-ghost">
              {t.cta_services}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">15K+</div>
              <div className="stat-label">{t.stat_orders}</div>
            </div>
            <div className="stat">
              <div className="stat-value">24/7</div>
              <div className="stat-label">{t.stat_work}</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                15<span style={{ fontSize: '0.6em' }}> min</span>
              </div>
              <div className="stat-label">{t.stat_time}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
