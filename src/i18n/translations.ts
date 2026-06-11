export type Locale = 'ru' | 'uz';

export interface Translations {
  cta_call: string;
  cta_services: string;
  cta_button: string;
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_text: string;
  stat_orders: string;
  stat_work: string;
  stat_time: string;
  features_label: string;
  features_title: string;
  f1_title: string;
  f1_text: string;
  f2_title: string;
  f2_text: string;
  f3_title: string;
  f3_text: string;
  f4_title: string;
  f4_text: string;
  services_label: string;
  services_title: string;
  services_subtitle: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  steps_label: string;
  steps_title: string;
  step1_title: string;
  step1_text: string;
  step2_title: string;
  step2_text: string;
  step3_title: string;
  step3_text: string;
  step4_title: string;
  step4_text: string;
  cta_label: string;
  cta_title: string;
  reviews_label: string;
  reviews_title: string;
  r1_text: string;
  r1_name: string;
  r1_date: string;
  r2_text: string;
  r2_name: string;
  r2_date: string;
  r3_text: string;
  r3_name: string;
  r3_date: string;
  footer_copy: string;
  meta_title: string;
  meta_description: string;
}

const translations: Record<Locale, Translations> = {
  ru: {
    cta_call: 'Позвонить',
    cta_services: 'Услуги',
    cta_button: 'Вызвать эвакуатор',
    hero_badge: 'Работаем сейчас — 24/7',
    hero_title1: 'Эвакуатор',
    hero_title2: 'за 15 минут',
    hero_text: 'Профессиональная эвакуация по Ташкенту и республике. Цены от 100 000 сум. Бережная погрузка.',
    stat_orders: 'Заказов',
    stat_work: 'Работаем',
    stat_time: 'Приезд',
    features_label: 'Преимущества',
    features_title: 'Почему мы',
    f1_title: '15 минут',
    f1_text: 'Быстрый приезд в любую точку Ташкента. Свой автопарк по всему городу.',
    f2_title: 'Бережно',
    f2_text: 'Современное оборудование и опытные водители. Гарантия сохранности.',
    f3_title: 'Любая оплата',
    f3_text: 'Наличные, карта, Click, Payme. Платите после выполнения работы.',
    f4_title: '24/7',
    f4_text: 'Диспетчер на связи круглосуточно. Ответим мгновенно в любое время.',
    services_label: 'Услуги',
    services_title: 'Эвакуируем',
    services_subtitle: 'От мотоцикла до грузовика. Цены от 100 000 сум.',
    s1: 'Легковые авто',
    s2: 'Внедорожники',
    s3: 'Микроавтобусы',
    s4: 'Мотоциклы',
    s5: 'После ДТП',
    s6: 'Межгород',
    steps_label: 'Процесс',
    steps_title: 'Как работаем',
    step1_title: 'Звоните',
    step1_text: 'Позвоните нам — диспетчер ответит мгновенно',
    step2_title: 'Адрес',
    step2_text: 'Скажите где машина и куда доставить',
    step3_title: 'Ждёте',
    step3_text: 'Эвакуатор приедет через 15-20 минут',
    step4_title: 'Оплата',
    step4_text: 'Платите после доставки любым способом',
    cta_label: 'Нужна помощь?',
    cta_title: 'Звоните сейчас',
    reviews_label: 'Отзывы',
    reviews_title: 'Клиенты о нас',
    r1_text: '«Машина сломалась ночью на Чиланзаре. Приехали за 15 минут, всё сделали аккуратно. Рекомендую!»',
    r1_name: 'Азиз',
    r1_date: '2 недели назад',
    r2_text: '«После ДТП ребята всё взяли на себя. Быстро, чётко, помогли с документами. Огромное спасибо!»',
    r2_name: 'Дильшод',
    r2_date: '1 месяц назад',
    r3_text: '«Вызывала для мужа когда не завелась машина. Очень быстро, очень вежливые. Теперь только к вам!»',
    r3_name: 'Нигора',
    r3_date: '3 недели назад',
    footer_copy: '© 2026 Эвакуатор 725. Ташкент.',
    meta_title: 'Эвакуатор 725 — Ташкент 24/7',
    meta_description: 'Эвакуатор в Ташкенте за 15 минут. Круглосуточно.',
  },
  uz: {
    cta_call: "Qo'ng'iroq",
    cta_services: 'Xizmatlar',
    cta_button: 'Evakuator chaqirish',
    hero_badge: 'Hozir ishlaymiz — 24/7',
    hero_title1: 'Evakuator',
    hero_title2: '15 daqiqada',
    hero_text: "Toshkent va respublika bo'ylab professional evakuatsiya. Narxlar 100 000 so'mdan. Ehtiyotkorlik bilan yuklash.",
    stat_orders: 'Buyurtmalar',
    stat_work: 'Ishlaymiz',
    stat_time: 'Kelish',
    features_label: 'Afzalliklar',
    features_title: 'Nega biz',
    f1_title: '15 daqiqa',
    f1_text: "Toshkentning istalgan nuqtasiga tez yetib borish. Butun shahar bo'ylab o'z avtoparkimiz.",
    f2_title: 'Ehtiyotkorlik',
    f2_text: 'Zamonaviy jihozlar va tajribali haydovchilar. Xavfsizlik kafolati.',
    f3_title: "Istalgan to'lov",
    f3_text: "Naqd, karta, Click, Payme. Ish tugagandan keyin to'laysiz.",
    f4_title: '24/7',
    f4_text: 'Dispetcher kechayu kunduz aloqada. Istalgan vaqtda javob beramiz.',
    services_label: 'Xizmatlar',
    services_title: 'Evakuatsiya',
    services_subtitle: "Mototsikldan yuk mashinasigacha. Narxlar 100 000 so'mdan.",
    s1: 'Yengil avtomobillar',
    s2: "Yo'l tanlamas",
    s3: 'Mikroavtobuslar',
    s4: 'Mototsikllar',
    s5: 'YTH dan keyin',
    s6: 'Shaharlararo',
    steps_label: 'Jarayon',
    steps_title: 'Qanday ishlaymiz',
    step1_title: "Qo'ng'iroq",
    step1_text: "Bizga qo'ng'iroq qiling — dispetcher darhol javob beradi",
    step2_title: 'Manzil',
    step2_text: 'Mashina qayerda va qayerga yetkazish kerakligini ayting',
    step3_title: 'Kutasiz',
    step3_text: 'Evakuator 15-20 daqiqada yetib keladi',
    step4_title: "To'lov",
    step4_text: "Yetkazib berilgandan keyin istalgan usulda to'laysiz",
    cta_label: 'Yordam kerakmi?',
    cta_title: "Hozir qo'ng'iroq qiling",
    reviews_label: 'Sharhlar',
    reviews_title: 'Mijozlar fikri',
    r1_text: "«Mashina kechasi Chilonzorda buzildi. 15 daqiqada yetib kelishdi, hammasini ehtiyotkorlik bilan qilishdi. Tavsiya qilaman!»",
    r1_name: 'Aziz',
    r1_date: '2 hafta oldin',
    r2_text: "«YTH dan keyin yigitlar hamma narsani o'z zimmalariga olishdi. Tez, aniq, hujjatlar bilan yordam berishdi. Katta rahmat!»",
    r2_name: 'Dilshod',
    r2_date: '1 oy oldin',
    r3_text: "«Erim uchun chaqirdim, mashina yonmadi. Juda tez, juda xushmuomala. Endi faqat sizlarga!»",
    r3_name: 'Nigora',
    r3_date: '3 hafta oldin',
    footer_copy: '© 2026 Evakuator 725. Toshkent.',
    meta_title: 'Evakuator 725 — Toshkent 24/7',
    meta_description: 'Toshkentda evakuator 15 daqiqada. Kechayu kunduz.',
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.ru;
}
