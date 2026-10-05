import Section from "../layout/Section";
import { useLanguage } from "../../hooks/useLanguage";
import { Code, FolderKanban, Layers } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Code size={24} className="text-accent-500" />,
      value: t("about.experienceYears"),
      label: t("about.experienceLabel"),
    },
    {
      icon: <FolderKanban size={24} className="text-accent-500" />,
      value: t("about.projectsCount"),
      label: t("about.projectsLabel"),
    },
    {
      icon: <Layers size={24} className="text-accent-500" />,
      value: t("about.technologiesCount"),
      label: t("about.technologiesLabel"),
    },
  ];

  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
        {t("about.heading")}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
            {"</>"}
          </div>
        </div>

        <div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {t("about.bio")}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
