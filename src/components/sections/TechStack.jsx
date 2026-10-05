import Section from "../layout/Section";
import { useLanguage } from "../../hooks/useLanguage";
import {
  SiReact,
  SiHtml5,
  SiKotlin,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiUnity,
  SiUnrealengine,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiWordpress,
  SiJavascript,
  SiCss,
  SiPhp,
  SiLaravel,
  SiClaude,
  SiAnthropic,
  SiScrumalliance,
  SiOpenjdk,
} from "@icons-pack/react-simple-icons";
import { OracleIcon, AwsIcon } from "../ui/Icons";
import { Database, GitBranch, Kanban, Plug } from "lucide-react";

const TECH_CATEGORIES = [
  {
    key: "frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    key: "mobile",
    items: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "API REST", icon: Plug, color: "#14b8a6", isLucide: true },
    ],
  },
  {
    key: "gameDev",
    items: [
      { name: "Unity", icon: SiUnity, color: "#000000" },
      { name: "Unreal Engine", icon: SiUnrealengine, color: "#0E1128" },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle", customIcon: OracleIcon, color: "#F80000" },
      { name: "SQL Server", icon: Database, color: "#CC2927", isLucide: true },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "AWS", customIcon: AwsIcon, color: "#FF9900" },
      { name: "Azure DevOps", icon: GitBranch, color: "#0078D7", isLucide: true },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "Claude Code", icon: SiClaude, color: "#D97757" },
      { name: "Anthropic", icon: SiAnthropic, color: "#191919" },
    ],
  },
  {
    key: "methodologies",
    items: [
      { name: "Scrum", icon: SiScrumalliance, color: "#009FDA" },
      { name: "Kanban", icon: Kanban, color: "#14b8a6", isLucide: true },
    ],
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <Section id="tech-stack" className="bg-slate-50 dark:bg-dark-surface/30">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
        {t("techStack.heading")}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-12">
        {t("techStack.subtitle")}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TECH_CATEGORIES.map((category) => (
          <div key={category.key}>
            <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-4">
              {t(`techStack.categories.${category.key}`)}
            </h3>
            <div className="space-y-3">
              {category.items.map((tech) => {
                if (tech.customIcon) {
                  const CustomIcon = tech.customIcon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-accent-300 dark:hover:border-accent-700 transition-colors"
                    >
                      <CustomIcon size={24} color={tech.color} />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {tech.name}
                      </span>
                    </div>
                  );
                }

                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-accent-300 dark:hover:border-accent-700 transition-colors"
                  >
                    <Icon size={24} color={tech.color} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
