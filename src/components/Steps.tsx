import type { Translations } from '@/i18n/translations';

export default function Steps({ t }: { t: Translations }) {
  const steps = [
    { num: '01', title: t.step1_title, text: t.step1_text },
    { num: '02', title: t.step2_title, text: t.step2_text },
    { num: '03', title: t.step3_title, text: t.step3_text },
    { num: '04', title: t.step4_title, text: t.step4_text },
  ];

  return (
    <section className="steps">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.steps_label}</div>
          <h2 className="section-title">{t.steps_title}</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step reveal">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
