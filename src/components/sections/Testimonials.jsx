import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Section from "../layout/Section";
import { useLanguage } from "../../hooks/useLanguage";

const testimonials = [
  {
    name: "Daniel Hernández López",
    role: { es: "Lider Tecnico", en: "Tech Lead" },
    company: { es: "Sector belleza y cosmeticos", en: "Beauty & Cosmetics Sector" },
    text: {
      es: "Heredo un proyecto sin documentacion y con codigo desorganizado, y en lugar de solo parcharlo, tomo la decision de reestructurarlo desde la base. Gracias a eso entregamos el sistema un mes antes de lo planeado y funciona sin problemas hasta hoy.",
      en: "He inherited a project with no documentation and messy code, and instead of just patching it, he made the decision to restructure it from the ground up. Thanks to that, we delivered the system a month ahead of schedule and it still runs smoothly today.",
    },
  },
  {
    name: "Héctor Ayala",
    role: { es: "Director de Operaciones", en: "Operations Director" },
    company: { es: "Sector señalizacion digital", en: "Digital Signage Sector" },
    text: {
      es: "Cada vez que le planteamos un reto tecnico nuevo, desde integraciones con APIs hasta etiquetas digitales con hardware IoT, siempre encontro la manera de resolverlo. Trabaja con autonomia y entrega resultados en plazos muy cortos.",
      en: "Every time we presented a new technical challenge, from API integrations to digital labels with IoT hardware, he always found a way to solve it. He works independently and delivers results in very tight deadlines.",
    },
  },
  {
    name: "Gerardo G. M.",
    role: { es: "Jefe del Proyecto", en: "Project Manager" },
    company: { es: "Sector entretenimiento / gaming", en: "Entertainment / Gaming Sector" },
    text: {
      es: "Entro al equipo sin experiencia en desarrollo de videojuegos y en pocos meses ya estaba programando mecanicas de juego en Unity como si llevara años haciendolo. Su capacidad de aprendizaje y adaptacion es impresionante.",
      en: "He joined the team with no game development experience and within a few months was programming game mechanics in Unity as if he'd been doing it for years. His ability to learn and adapt is impressive.",
    },
  },
  {
    name: "Sr. Leonardo",
    role: { es: "Cliente", en: "Client" },
    company: { es: "Sector belleza y cosmeticos", en: "Beauty & Cosmetics Sector" },
    text: {
      es: "Necesitabamos controlar el inventario de todas nuestras sucursales y no teniamos nada digital. El tomo un proyecto que estaba a medias y sin documentacion, lo reestructuro por completo y nos entrego un sistema funcional antes de tiempo. Ahora tenemos visibilidad total de nuestro stock.",
      en: "We needed to control inventory across all our branches and had nothing digital. He took a half-finished project with no documentation, restructured it completely, and delivered a working system ahead of schedule. Now we have full visibility of our stock.",
    },
  },
  {
    name: "Yazmín Hernández García",
    role: { es: "Contadora", en: "Accountant" },
    company: { es: "Empresa naturista", en: "Natural Products Company" },
    text: {
      es: "No teniamos presencia en internet y necesitabamos que nuestros clientes conocieran nuestros productos. Nos creo paginas informativas muy profesionales para la empresa y nuestros productos. Fue muy atento, entendio lo que necesitabamos desde el principio y el resultado supero nuestras expectativas.",
      en: "We had no online presence and needed our customers to learn about our products. He created very professional informational pages for our company and products. He was very attentive, understood what we needed from the start, and the result exceeded our expectations.",
    },
  },
];

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <Section
      id="testimonials"
      className="bg-slate-50 dark:bg-dark-surface/30"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
        {t("testimonials.heading")}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-12">
        {t("testimonials.subtitle")}
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative bg-white dark:bg-dark-surface rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-dark-border shadow-sm">
          <Quote
            size={40}
            className="text-accent-200 dark:text-accent-800 absolute top-6 left-6"
          />

          <div className="relative z-10">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].text[lang]}&rdquo;
            </p>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {testimonials[current].role[lang]} ·{" "}
                {testimonials[current].company[lang]}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-accent-300 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-accent-500 w-6"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-accent-300 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
}
