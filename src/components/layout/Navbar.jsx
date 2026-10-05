import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useLanguage } from "../../hooks/useLanguage";

const NAV_LINKS = [
  { key: "about", href: "#about" },
  { key: "techStack", href: "#tech-stack" },
  { key: "projects", href: "#projects" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-xl font-bold text-slate-900 dark:text-white hover:text-accent-500 transition-colors"
          >
            {"<Dev />"}
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-base font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
