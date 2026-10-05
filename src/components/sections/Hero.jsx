import { Mail, ArrowDown } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "../ui/Icons";
import Button from "../ui/Button";
import { useLanguage } from "../../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="max-container text-center">
        <p className="text-accent-500 font-mono text-sm mb-4">
          {t("hero.greeting")}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
          {t("hero.title")}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent-500 mb-6">
          {t("hero.subtitle")}
        </p>

        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          {t("hero.tagline")}
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          {/*<a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all"
            aria-label="GitHub"
          >
            <SiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>*/}
          <a
            href="mailto:fernando.hernandez951013@gmail.com"
            className="p-3 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <Button href="#projects">
          {t("hero.cta")}
          <ArrowDown size={18} />
        </Button>
      </div>
    </section>
  );
}
