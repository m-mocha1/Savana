/* ==========================================================================
   Savana — Arabic locale (the canonical source of truth)
   All copy lives here, never inside the components. Adding a language later
   means dropping a sibling file (see en.js) — nothing in the markup changes.
   Written as natural, editorial Arabic — not machine translation.
   ========================================================================== */
window.SAVANA_I18N = window.SAVANA_I18N || { locales: {} };

window.SAVANA_I18N.locales.ar = {
  meta: {
    lang: "ar",
    dir: "rtl",
    label: "العربية",
    /* short label shown on the toggle when THIS language is the switch target */
    switchLabel: "ع",
  },

  strings: {
    "meta.title": "سافانا — مطعم وكافيه · بيت جالا، بيت لحم",
    "meta.description":
      "وصف المطعم لمحرّكات البحث هنا",

    "a11y.skip": "تخطَّ إلى المحتوى",
    "brand.aria": "سافانا — الصفحة الرئيسية",
    "brand.sub": "مطعم وكافيه",
    "lang.toggle.aria": "التبديل إلى اللغة الإنجليزية",

    "nav.home": "الرئيسية",
    "nav.menu": "القائمة",
    "nav.about": "قصّتنا",
    "nav.gallery": "المعرض",
    "nav.contact": "تواصل معنا",

    "cta.reserve": "احجز طاولتك",
    "cta.viewMenu": "تصفّح القائمة",

    "nav.open": "افتح القائمة",
    "nav.close": "أغلق القائمة",
    "menuOverlay.address":
      "رأس بيت جالا · شارع جمعية العرب<br><span dir=\"rtl\">بيت لحم — الضفة الغربية</span>",

    "hero.aria": "أهلاً بكم في سافانا",
    "hero.script": "ألذّ المذاقات",
    "hero.kicker": "مطعم وكافيه",
    "hero.lede":
      "وصف تعريفيّ مختصر للمطعم هنا",

    "menu.eyebrow": "من قلب النار",
    "menu.title": "أطباقنا المميّزة",
    "menu.note": "ملاحظة عن قائمة الطعام هنا",

    "about.eyebrow": "قصّتنا",
    "about.title": "طاولةٌ على حافة تلال بيت جالا",
    "about.p1":
      "الفقرة الأولى من قصّة المطعم هنا",
    "about.p2":
      "الفقرة الثانية من قصّة المطعم هنا",
    "about.stat.est": "التأسيس",
    "about.stat.estVal": "٢٠١٨",
    "about.stat.seats": "مقاعد الشرفة",
    "about.stat.seatsVal": "١٢٠",
    "about.stat.view": "إطلالة الغروب",
    "about.stat.viewVal": "°١٨٠",
    "about.photoMain.alt": "قاعة الطعام في سافانا بإضاءتها الدافئة وطاولاتها الخشبية",
    "about.photoSmall.alt": "طبقٌ طازج من مطبخ سافانا",

    "gallery.eyebrow": "لحظات",
    "gallery.title": "من أروقة سافانا",

    "testimonials.eyebrow": "كلماتٌ طيّبة",
    "testimonials.title": "بعيون ضيوفنا",
    "testimonials.prev": "الشهادة السابقة",
    "testimonials.next": "الشهادة التالية",

    "contact.eyebrow": "زورونا",
    "contact.title": "تجدوننا على القمّة",
    "contact.address.label": "العنوان",
    "contact.address.value":
      "شارع جمعية العرب، بيت جالا<br>بيت لحم، الضفة الغربية",
    "contact.hours.label": "ساعات العمل",
    "contact.hours.value":
      "الأحد – الخميس · ٩:٠٠ – ٢٣:٠٠<br>الجمعة – السبت · ٩:٠٠ – ٢٤:٠٠",
    "contact.phone.label": "الهاتف",
    "contact.email.label": "البريد الإلكتروني",
    "contact.map.aria": "خريطة تعريفية — سافانا، شارع جمعية العرب، بيت جالا",
    "contact.map.name": "سافانا · شارع جمعية العرب",
    "contact.map.soon": "الخريطة التفاعلية قريباً",

    "footer.tag": "شعار المطعم هنا",
    "footer.brandAr": "سافانا — مطعم وكافيه · بيت جالا",
    "footer.logoAlt": "شعار سافانا — مطعم وكافيه على خلفية رخام",
    "footer.explore": "تصفّح",
    "footer.visit": "زورونا",
    "footer.follow": "تابعونا",
    "footer.rights": "سافانا مطعم وكافيه · بيت جالا، بيت لحم",
    "footer.top": "العودة للأعلى ↑",
    "footer.credit": "صُنع بحبٍّ على يد محمد الأدميري",

    "social.instagram": "إنستغرام (قريباً)",
    "social.facebook": "فيسبوك (قريباً)",
    "social.whatsapp": "واتساب (قريباً)",
  },

  /* ---- Data-driven collections. Prices in Israeli Shekels (₪). ---- */
  dishes: [
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      tag: "للبداية",
      name: "طبق المزّة",
      desc: "وصف الطبق هنا",
      price: 38,
      alt: "طبق مزّة مع خبزٍ دافئ وزيت زيتون",
    },
    {
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
      tag: "من الحديقة",
      name: "سلطة القمّة",
      desc: "وصف الطبق هنا",
      price: 35,
      alt: "سلطة خضراء طازجة بحبّات الرمّان",
    },
    {
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
      tag: "على الفحم",
      name: "مشاوي سافانا المشكّلة",
      desc: "وصف الطبق هنا",
      price: 128,
      alt: "أسياخ لحمٍ مشويّة على اللهب",
    },
    {
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      tag: "على نارٍ هادئة",
      name: "ريش الغنم المدخّنة",
      desc: "وصف الطبق هنا",
      price: 149,
      alt: "ريش غنمٍ مطهوّة على نارٍ هادئة بصلصةٍ داكنة",
    },
    {
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
      tag: "من البحر",
      name: "سلمون على الجمر",
      desc: "وصف الطبق هنا",
      price: 95,
      alt: "شريحة سلمون مشويّة مع الأعشاب",
    },
    {
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      tag: "حلى الختام",
      name: "كنافة وقهوة",
      desc: "وصف الطبق هنا",
      price: 34,
      alt: "فنجان قهوةٍ بالهيل إلى جانب الحلوى",
    },
  ],

  gallery: [
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      caption: "قاعة الطعام",
      wide: true,
    },
    {
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      caption: "ممرّ الشيف",
    },
    {
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      caption: "على اللهب",
    },
    {
      img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
      caption: "صباحٌ في الكافيه",
    },
    {
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      caption: "من المطبخ",
    },
    {
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
      caption: "طاولة العائلة",
      wide: true,
    },
    {
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      caption: "حلويات الأصيل",
    },
    {
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      caption: "صُنعت لتُشارَك",
    },
  ],

  testimonials: [
    {
      quote:
        "رأي أحد الضيوف هنا",
      name: "رانيا خوري",
      place: "بيت لحم",
    },
    {
      quote:
        "رأي أحد الضيوف هنا",
      name: "إلياس حنضل",
      place: "بيت جالا",
    },
    {
      quote:
        "رأي أحد الضيوف هنا",
      name: "نور عوّاد",
      place: "بيت ساحور",
    },
  ],
};
