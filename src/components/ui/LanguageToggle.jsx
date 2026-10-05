import { useLanguage } from "../../hooks/useLanguage";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
