import { Mail, ArrowUp } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "../ui/Icons";
import { useLanguage } from "../../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} · {t("footer.rights")}
          </p>

          <div className="flex items-center gap-4">
            {/*<a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-500 transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>*/}
            <a
              href="mailto:fernando.hernandez951013@gmail.com"
              className="text-slate-500 hover:text-accent-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#hero"
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-accent-500 transition-colors"
          >
            <ArrowUp size={16} />
            Top
          </a>
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
          {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}
