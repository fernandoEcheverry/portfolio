import { useState } from "react";
import Section from "../layout/Section";
import FilterBar from "../ui/FilterBar";
import Modal from "../ui/Modal";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { useLanguage } from "../../hooks/useLanguage";
import { projects, projectCategories } from "../../data/projects";

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
        {t("projects.heading")}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
        {t("projects.subtitle")}
      </p>

      <FilterBar
        categories={projectCategories}
        active={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </Section>
  );
}
