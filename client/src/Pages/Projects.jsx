import ProjectCard from "../Components/ProjectCard";
import useSWR from "swr";
import { fetchProjects } from "../utils/contentful";

const Projects = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("projects", fetchProjects);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects.</div>;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  );
};

export default Projects;
