/* ==========================================================================
   Savana — English locale.
   Demonstrates how little it takes to add a language: only text.
   Anything omitted (images, prices, structure) falls back to ar.js, and the
   engine flips <html dir> to ltr automatically from meta.dir below.
   ========================================================================== */
window.SAVANA_I18N = window.SAVANA_I18N || { locales: {} };

window.SAVANA_I18N.locales.en = {
  meta: {
    lang: "en",
    dir: "ltr",
    label: "English",
    switchLabel: "EN",
  },

  strings: {
    "meta.title": "Savana — Restaurant & Caffe · Beit Jala, Bethlehem",
    "meta.description":
      "Savana — Restaurant & Caffe on the hilltop of Beit Jala: Levantine flame cooking, slow coffee and sunset views over the hills of Bethlehem.",

    "a11y.skip": "Skip to content",
    "brand.aria": "Savana — home",
    "brand.sub": "Restaurant & Caffe",
    "lang.toggle.aria": "Switch to Arabic",

    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "Our Story",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    "cta.reserve": "Reserve a Table",
    "cta.viewMenu": "View Menu",

    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "menuOverlay.address":
      "Ras Beit Jala · Arab Society Street<br><span dir=\"rtl\" lang=\"ar\">بيت لحم — الضفة الغربية</span>",

    "hero.aria": "Welcome to Savana",
    "hero.script": "The finest flavours",
    "hero.kicker": "Restaurant & Caffe",
    "hero.lede":
      "A hilltop table in Ras Beit Jala — Levantine flame cooking, slow coffee, and sunsets that stay for dessert.",

    "menu.eyebrow": "From the fire",
    "menu.title": "Signature Dishes",
    "menu.note": "A taste of the kitchen — the full menu lives at the table",

    "about.eyebrow": "Our story",
    "about.title": "A table on the ridge of Beit Jala",
    "about.p1":
      "Savana stands in a tower of golden Jerusalem stone at the top of Ras Beit Jala, where the streets end and the hills begin. In the evening the valley turns amber, our sign turns green, and the taboon fire is already glowing.",
    "about.p2":
      "We took our name from the acacia of the savanna — the tree that offers its shade to everyone who passes. That is the house we keep: bread from the stone oven, meat over olive-wood coals, coffee poured slowly, and a terrace where no one is in a hurry.",
    "about.stat.est": "Est.",
    "about.stat.estVal": "2018",
    "about.stat.seats": "Terrace seats",
    "about.stat.seatsVal": "120",
    "about.stat.view": "Sunset view",
    "about.stat.viewVal": "180°",
    "about.photoMain.alt": "Warmly lit dining room with wooden tables",
    "about.photoSmall.alt": "A fresh plate from the Savana kitchen",

    "gallery.eyebrow": "Moments",
    "gallery.title": "The Gallery",

    "testimonials.eyebrow": "Kind words",
    "testimonials.title": "From our guests",
    "testimonials.prev": "Previous testimonial",
    "testimonials.next": "Next testimonial",

    "contact.eyebrow": "Visit us",
    "contact.title": "Find us on the hilltop",
    "contact.address.label": "Address",
    "contact.address.value":
      "Arab Society Street, Beit Jala<br>Bethlehem, West Bank",
    "contact.hours.label": "Hours",
    "contact.hours.value":
      "Sunday – Thursday · 9:00 – 23:00<br>Friday – Saturday · 9:00 – 24:00",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.map.aria": "Map placeholder — Savana, Arab Society Street, Beit Jala",
    "contact.map.name": "Savana · Arab Society Street",
    "contact.map.soon": "Interactive map coming soon",

    "footer.tag": "Fire, stone & the last light.",
    "footer.brandAr": "سافانا — مطعم وكافيه · بيت جالا",
    "footer.logoAlt": "Savana — Restaurant & Caffe logo on marble",
    "footer.explore": "Explore",
    "footer.visit": "Visit",
    "footer.follow": "Follow",
    "footer.rights": "Savana Restaurant & Caffe · Beit Jala, Bethlehem",
    "footer.top": "Back to top ↑",
    "footer.credit": "Made with love by Mohammad Admiri",

    "social.instagram": "Instagram (coming soon)",
    "social.facebook": "Facebook (coming soon)",
    "social.whatsapp": "WhatsApp (coming soon)",
  },

  /* Text only — images & prices come from ar.js, in the same order. */
  dishes: [
    { tag: "To begin", name: "Mezze Sunset Board", desc: "Silked hummus, smoked baba ghanoush, olive tapenade and warm taboon bread from our stone oven.", alt: "Board of mezze with warm bread and olive oil" },
    { tag: "From the garden", name: "Hilltop Harvest", desc: "Wild greens, pomegranate, candied walnuts and labneh under a bright sumac vinaigrette.", alt: "Fresh green salad with pomegranate seeds" },
    { tag: "Over charcoal", name: "Savana Mixed Grill", desc: "Lamb kofta, chicken shish and rib-eye skewers with charred onion, grilled tomato and garlic toum.", alt: "Skewers of grilled meat over open flame" },
    { tag: "Slow-fired", name: "Smoked Short Ribs", desc: "Twelve hours over olive-wood smoke, finished with a date and carob glaze. For two.", alt: "Slow-cooked short ribs with a dark glaze" },
    { tag: "From the sea", name: "Ember-Grilled Salmon", desc: "Charcoal-kissed fillet, burnt lemon, green tahini and herbs from the terrace planters.", alt: "Grilled salmon fillet with herbs" },
    { tag: "Sweet ending", name: "Knafeh & Kahwa", desc: "Warm knafeh with crushed pistachio, poured with orange-blossom syrup and cardamom coffee.", alt: "Cup of cardamom coffee beside dessert" },
  ],

  gallery: [
    { caption: "The dining room" },
    { caption: "Chef's pass" },
    { caption: "Over the flame" },
    { caption: "Morning at the caffe" },
    { caption: "From the kitchen" },
    { caption: "The family table" },
    { caption: "Golden-hour desserts" },
    { caption: "Made to share" },
  ],

  testimonials: [
    { quote: "We came for the sunset and stayed until the candles. The mixed grill is the best I've had anywhere.", name: "Rania Khoury", place: "Bethlehem" },
    { quote: "Golden stone, green light, and knafeh straight from the fire. Savana feels like a celebration every time.", name: "Elias Handal", place: "Beit Jala" },
    { quote: "The finest place for a family evening — warm service, a breathtaking view, and Arabic coffee like no other.", name: "Nour Awad", place: "Beit Sahour" },
  ],
};
