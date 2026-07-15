// ===== Despega LLC — Interacciones =====

// Endpoint opcional para capturar leads (ej. tu CRM: https://tu-crm.com/api/leads).
// Si queda vacío, el formulario abre el correo del cliente con los datos prellenados.
const LEAD_ENDPOINT = "";
const CONTACT_EMAIL = "contacto@despegallc.com";

// ===== Idiomas (ES / EN) =====
const I18N = {
  es: {
    pageTitle: "Despega LLC — Aperturas, Taxes, Crédito y Consultoría en Orem, UT",
    metaDesc:
      "Despega Centro de Negocios: registro de LLC, preparación de taxes, reparación de crédito y consultoría de negocios en Orem, Utah. Más de 15 años ayudando a la comunidad hispana a emprender.",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Centro de Negocios · Orem, Utah",
    "hero.title": 'Tu idea de negocio<br /><span class="text-gold">despega aquí.</span>',
    "hero.sub":
      "Convertimos tu idea en una entidad legal sólida. Más de <strong>15 años de trayectoria</strong> ayudando a la comunidad hispana a emprender y prosperar — sin complicaciones fiscales ni legales.",
    "hero.cta1": "Agenda una Asesoría Gratuita",
    "hero.cta2": "Llámanos ahora",
    "hero.stat1": "Años de experiencia",
    "hero.stat2": "Pilares de servicio",
    "hero.stat3": "Atención en español",
    "svc.eyebrow": "Nuestros servicios",
    "svc.title": "Los 4 pilares para hacer crecer tu negocio",
    "svc.sub": "Todo lo que necesitas para abrir, formalizar y expandir tu empresa — en un solo lugar.",
    "svc1.title": "Aperturas",
    "svc1.text":
      "Registro de LLC, obtención de EIN y estructura corporativa en tiempo récord, diseñada para proteger tu patrimonio desde el día uno.",
    "svc1.link": 'Abrir mi empresa <span aria-hidden="true">→</span>',
    "svc2.title": "Taxes",
    "svc2.text":
      "Preparación de impuestos individuales y de negocios con más de 15 años de experiencia, optimizando tus finanzas en cada declaración.",
    "svc2.link": 'Optimizar mis taxes <span aria-hidden="true">→</span>',
    "svc3.title": "Crédito",
    "svc3.text":
      "Consultoría y reparación de crédito para impulsar el financiamiento de tu negocio y abrir las puertas que tu empresa necesita.",
    "svc3.link": 'Mejorar mi crédito <span aria-hidden="true">→</span>',
    "svc4.title": "Consultoría",
    "svc4.text":
      "Consultoría profesional de negocios y marketing estratégico para emprendedores y empresas que quieren llegar más lejos.",
    "svc4.link": 'Asesorar mi negocio <span aria-hidden="true">→</span>',
    "about.eyebrow": "Sobre nosotros",
    "about.title": "Más de 15 años impulsando a la comunidad hispana",
    "about.p1":
      "En <strong>Despega Centro de Negocios</strong> creemos que emprender no debería ser complicado. Por eso acompañamos a cada cliente en todo el camino: desde el registro de su LLC hasta la estrategia de crecimiento.",
    "about.p2":
      "Nuestro equipo combina experiencia fiscal, legal y de negocios para que tú te concentres en lo que mejor sabes hacer — y nosotros nos encargamos del resto.",
    "about.li1": "Estructura corporativa que protege tu patrimonio",
    "about.li2": "Declaraciones de impuestos precisas y optimizadas",
    "about.li3": "Estrategias de crédito que abren financiamiento",
    "about.li4": "Acompañamiento cercano, en tu idioma",
    "about.cta": "Comienza hoy mismo",
    "about.card1": "años de trayectoria profesional en taxes y negocios",
    "about.card2": "áreas integradas: Aperturas, Taxes, Crédito y Consultoría",
    "about.quote":
      '"Convertimos tu idea en una entidad legal sólida — sin complicaciones fiscales ni legales."',
    "contact.eyebrow": "Contacto",
    "contact.title": "Agenda tu asesoría gratuita",
    "contact.sub": "Cuéntanos sobre tu proyecto y un asesor te contactará el mismo día hábil.",
    "contact.hours": "Lunes a Viernes<br />9:00 AM – 5:00 PM",
    "contact.map": "Ver en Google Maps →",
    "form.name": "Nombre completo *",
    "form.phone": "Teléfono *",
    "form.email": "Correo electrónico",
    "form.service": "¿Qué servicio te interesa? *",
    "form.message": "Cuéntanos sobre tu proyecto",
    "form.submit": "Enviar solicitud",
    "ph.name": "Tu nombre",
    "ph.email": "tu@correo.com",
    "ph.message": "Ej.: Quiero abrir una LLC para mi negocio de construcción...",
    "opt.placeholder": "Selecciona una opción",
    "opt.aperturas": "Apertura de LLC / EIN",
    "opt.taxes": "Preparación de Taxes",
    "opt.credito": "Reparación de Crédito",
    "opt.consultoria": "Consultoría de Negocios",
    "opt.otro": "Otro",
    "footer.tagline":
      "Centro de Negocios para la comunidad hispana. Aperturas, Taxes, Crédito y Consultoría en Orem, Utah.",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.s1": "Apertura de LLC",
    "footer.s2": "Preparación de Taxes",
    "footer.s3": "Reparación de Crédito",
    "footer.s4": "Consultoría de Negocios",
    "footer.hours": "Lun – Vie · 9:00 AM – 5:00 PM",
    "footer.rights": "Todos los derechos reservados.",
    "status.mailto": "Se abrió tu correo para enviar la solicitud. ¡Gracias!",
    "status.sending": "Enviando...",
    "status.ok": "¡Solicitud enviada! Te contactaremos el mismo día hábil.",
    "status.error": "No pudimos enviar el formulario. Llámanos al (801) 900-1729.",
  },
  en: {
    pageTitle: "Despega LLC — Business Formation, Taxes, Credit & Consulting in Orem, UT",
    metaDesc:
      "Despega Business Center: LLC registration, tax preparation, credit repair, and business consulting in Orem, Utah. Over 15 years helping the Hispanic community start and grow businesses.",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "hero.eyebrow": "Business Center · Orem, Utah",
    "hero.title": 'Your business idea<br /><span class="text-gold">takes off here.</span>',
    "hero.sub":
      "We turn your idea into a solid legal entity. Over <strong>15 years of experience</strong> helping the Hispanic community start and thrive — without tax or legal headaches.",
    "hero.cta1": "Book a Free Consultation",
    "hero.cta2": "Call us now",
    "hero.stat1": "Years of experience",
    "hero.stat2": "Service pillars",
    "hero.stat3": "Bilingual service",
    "svc.eyebrow": "Our services",
    "svc.title": "The 4 pillars to grow your business",
    "svc.sub": "Everything you need to open, formalize, and expand your company — all in one place.",
    "svc1.title": "Business Formation",
    "svc1.text":
      "LLC registration, EIN, and corporate structure in record time — designed to protect your assets from day one.",
    "svc1.link": 'Start my business <span aria-hidden="true">→</span>',
    "svc2.title": "Taxes",
    "svc2.text":
      "Individual and business tax preparation backed by 15+ years of experience, optimizing your finances on every return.",
    "svc2.link": 'Optimize my taxes <span aria-hidden="true">→</span>',
    "svc3.title": "Credit",
    "svc3.text":
      "Credit consulting and repair to unlock business financing and open the doors your company needs.",
    "svc3.link": 'Improve my credit <span aria-hidden="true">→</span>',
    "svc4.title": "Consulting",
    "svc4.text":
      "Professional business consulting and strategic marketing for entrepreneurs and companies aiming higher.",
    "svc4.link": 'Grow my business <span aria-hidden="true">→</span>',
    "about.eyebrow": "About us",
    "about.title": "Over 15 years empowering the Hispanic community",
    "about.p1":
      "At <strong>Despega Business Center</strong> we believe starting a business shouldn't be complicated. That's why we walk with every client the whole way: from registering their LLC to their growth strategy.",
    "about.p2":
      "Our team combines tax, legal, and business expertise so you can focus on what you do best — and we take care of the rest.",
    "about.li1": "Corporate structure that protects your assets",
    "about.li2": "Accurate, optimized tax returns",
    "about.li3": "Credit strategies that unlock financing",
    "about.li4": "Personal guidance, in your language",
    "about.cta": "Get started today",
    "about.card1": "years of professional experience in taxes and business",
    "about.card2": "integrated areas: Formation, Taxes, Credit & Consulting",
    "about.quote":
      '"We turn your idea into a solid legal entity — without tax or legal complications."',
    "contact.eyebrow": "Contact",
    "contact.title": "Book your free consultation",
    "contact.sub": "Tell us about your project and an advisor will contact you the same business day.",
    "contact.hours": "Monday to Friday<br />9:00 AM – 5:00 PM",
    "contact.map": "View on Google Maps →",
    "form.name": "Full name *",
    "form.phone": "Phone *",
    "form.email": "Email address",
    "form.service": "Which service are you interested in? *",
    "form.message": "Tell us about your project",
    "form.submit": "Send request",
    "ph.name": "Your name",
    "ph.email": "you@email.com",
    "ph.message": "E.g.: I want to open an LLC for my construction business...",
    "opt.placeholder": "Select an option",
    "opt.aperturas": "LLC / EIN Formation",
    "opt.taxes": "Tax Preparation",
    "opt.credito": "Credit Repair",
    "opt.consultoria": "Business Consulting",
    "opt.otro": "Other",
    "footer.tagline":
      "Business Center for the Hispanic community. Formation, Taxes, Credit & Consulting in Orem, Utah.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.s1": "LLC Formation",
    "footer.s2": "Tax Preparation",
    "footer.s3": "Credit Repair",
    "footer.s4": "Business Consulting",
    "footer.hours": "Mon – Fri · 9:00 AM – 5:00 PM",
    "footer.rights": "All rights reserved.",
    "status.mailto": "Your email app was opened to send the request. Thank you!",
    "status.sending": "Sending...",
    "status.ok": "Request sent! We'll contact you the same business day.",
    "status.error": "We couldn't send the form. Call us at (801) 900-1729.",
  },
};

const langToggle = document.getElementById("langToggle");
let lang = localStorage.getItem("despega-lang") || "es";

function t(key) {
  return I18N[lang][key] || I18N.es[key] || "";
}

function applyLang(next) {
  lang = next;
  localStorage.setItem("despega-lang", next);
  document.documentElement.lang = next;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value) el.placeholder = value;
  });

  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').setAttribute("content", t("metaDesc"));

  // El botón muestra el idioma al que se puede cambiar.
  langToggle.textContent = next === "es" ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    next === "es" ? "Switch to English" : "Cambiar a español"
  );
}

langToggle.addEventListener("click", () => applyLang(lang === "es" ? "en" : "es"));
if (lang !== "es") applyLang(lang);

// --- Navbar: fondo al hacer scroll ---
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// --- Menú móvil ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// --- Animaciones de scroll (reveal) ---
// Los elementos solo se ocultan cuando html tiene la clase "js";
// si IntersectionObserver no está disponible, el contenido queda visible.
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Red de seguridad: si por cualquier motivo el observer no dispara
  // (renderers sin frames, navegadores raros), mostrar todo.
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 1500);
}

// --- Año dinámico en footer ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Formulario de contacto ---
const form = document.getElementById("leadForm");
const statusEl = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.className = "form-status";
  statusEl.textContent = "";

  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());

  if (!LEAD_ENDPOINT) {
    // Sin backend configurado: abrir el cliente de correo con los datos.
    const body = [
      `Nombre / Name: ${data.name}`,
      `Teléfono / Phone: ${data.phone}`,
      `Email: ${data.email || "-"}`,
      `Servicio / Service: ${data.service}`,
      "",
      data.message || "",
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Nueva solicitud de asesoría — " + data.name
    )}&body=${encodeURIComponent(body)}`;
    statusEl.textContent = t("status.mailto");
    statusEl.classList.add("ok");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = t("status.sending");

  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        source: "web",
        notes: `Servicio: ${data.service}. ${data.message || ""}`.trim(),
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    form.reset();
    statusEl.textContent = t("status.ok");
    statusEl.classList.add("ok");
  } catch {
    statusEl.textContent = t("status.error");
    statusEl.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t("form.submit");
  }
});
