import Badge from "../ui/Badge";
import { useLanguage } from "../../hooks/useLanguage";

export default function ProjectDetail({ project }) {
  const { lang, t } = useLanguage();

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.categories.map((cat) => (
          <Badge key={cat} variant="outline">
            {cat}
          </Badge>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
        {project.title[lang]}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 mb-8">
        {[
          { label: t("projectDetail.type"), value: project.info.type[lang] },
          { label: t("projectDetail.sector"), value: project.info.sector[lang] },
          { label: t("projectDetail.role"), value: project.info.role[lang] },
          { label: t("projectDetail.team"), value: project.info.team[lang] },
          { label: t("projectDetail.duration"), value: project.info.duration[lang] },
          { label: t("projectDetail.techStack"), value: project.info.techStack },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1">
              {item.label}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {t("projectDetail.context")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.context[lang]}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {t("projectDetail.problem")}
          </h3>
          <ul className="space-y-2">
            {project.problem[lang].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
              >
                <span className="text-accent-500 mt-1.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {t("projectDetail.solution")}
          </h3>
          <ul className="space-y-2">
            {project.solution[lang].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
              >
                <span className="text-accent-500 mt-1.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {t("projectDetail.challenge")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.challenge[lang]}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {t("projectDetail.results")}
          </h3>
          <ul className="space-y-2">
            {project.results[lang].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
              >
                <span className="text-accent-500 mt-1.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border">
        <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-3">
          {t("projectDetail.technologies")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
