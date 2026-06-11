import type { Translations } from '@/i18n/translations';

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Stars = () => (
  <div className="review-stars">
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
  </div>
);

export default function Reviews({ t }: { t: Translations }) {
  const reviews = [
    { text: t.r1_text, name: t.r1_name, date: t.r1_date },
    { text: t.r2_text, name: t.r2_name, date: t.r2_date },
    { text: t.r3_text, name: t.r3_name, date: t.r3_date },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.reviews_label}</div>
          <h2 className="section-title">{t.reviews_title}</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.name} className="review reveal">
              <Stars />
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="review-avatar">{review.name[0]}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
