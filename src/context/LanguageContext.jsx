import { createContext, useState } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

export const LanguageContext = createContext();

const translations = { es, en };

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  return navigator.language.startsWith("es") ? "es" : "en";
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key) => {
    const value = getNestedValue(translations[lang], key);
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
