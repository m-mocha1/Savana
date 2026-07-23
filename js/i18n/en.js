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
      "A restaurant description for search engines here",

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
      "A short restaurant description here",

    "menu.eyebrow": "From the fire",
    "menu.title": "Signature Dishes",
    "menu.note": "A note about the menu here",

    "about.eyebrow": "Our story",
    "about.title": "A table on the ridge of Beit Jala",
    "about.p1":
      "First paragraph of the restaurant story here",
    "about.p2":
      "Second paragraph of the restaurant story here",
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

    "footer.tag": "A restaurant tagline here",
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
    { tag: "To begin", name: "Mezze Sunset Board", desc: "A dish description here", alt: "Board of mezze with warm bread and olive oil" },
    { tag: "From the garden", name: "Hilltop Harvest", desc: "A dish description here", alt: "Fresh green salad with pomegranate seeds" },
    { tag: "Over charcoal", name: "Savana Mixed Grill", desc: "A dish description here", alt: "Skewers of grilled meat over open flame" },
    { tag: "Slow-fired", name: "Smoked Short Ribs", desc: "A dish description here", alt: "Slow-cooked short ribs with a dark glaze" },
    { tag: "From the sea", name: "Ember-Grilled Salmon", desc: "A dish description here", alt: "Grilled salmon fillet with herbs" },
    { tag: "Sweet ending", name: "Knafeh & Kahwa", desc: "A dish description here", alt: "Cup of cardamom coffee beside dessert" },
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
    { quote: "A guest testimonial here", name: "Rania Khoury", place: "Bethlehem" },
    { quote: "A guest testimonial here", name: "Elias Handal", place: "Beit Jala" },
    { quote: "A guest testimonial here", name: "Nour Awad", place: "Beit Sahour" },
  ],
};
