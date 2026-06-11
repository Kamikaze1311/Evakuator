import type { Translations } from '@/i18n/translations';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Services({ t }: { t: Translations }) {
  const services = [
    { num: '01', title: t.s1 },
    { num: '02', title: t.s2 },
    { num: '03', title: t.s3 },
    { num: '04', title: t.s4 },
    { num: '05', title: t.s5 },
    { num: '06', title: t.s6 },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.services_label}</div>
          <h2 className="section-title">{t.services_title}</h2>
          <p className="section-subtitle">{t.services_subtitle}</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <a
              key={service.num}
              href="tel:+998997727777"
              className="service-row reveal"
            >
              <div className="service-left">
                <span className="service-num">{service.num}</span>
                <span className="service-title">{service.title}</span>
              </div>
              <div className="service-arrow">
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
