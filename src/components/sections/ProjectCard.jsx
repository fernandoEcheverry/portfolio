import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { useLanguage } from "../../hooks/useLanguage";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  const { lang, t } = useLanguage();

  return (
    <Card onClick={onClick}>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.categories.map((cat) => (
          <Badge key={cat} variant="outline">
            {cat}
          </Badge>
        ))}
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
        {project.title[lang]}
      </h3>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
        {project.info.sector[lang]}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
        {project.shortDescription[lang]}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge variant="outline">+{project.technologies.length - 4}</Badge>
        )}
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors">
        {t("projects.viewCase")}
        <ArrowRight size={14} />
      </span>
    </Card>
  );
}
