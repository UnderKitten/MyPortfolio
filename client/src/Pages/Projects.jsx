import ProjectCard from "../Components/ProjectCard";
import useSWR from "swr";
import { fetchProjects } from "../utils/contentful";
import LoadingSpinner from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";

const Projects = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR("projects", fetchProjects);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

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
