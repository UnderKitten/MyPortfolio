import ProjectCard from "../Components/ProjectCard";
import useSWR from "swr";
import { fetchProjects } from "../utils/contentful";
import LoadingSpinner from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import { motion } from "framer-motion";

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
      projects
        .slice()
        .sort((a, b) => {
          if (typeof a.projectId === "number" && typeof b.projectId === "number") {
            return a.projectId - b.projectId;
          }
          return a.projectId.toString().localeCompare(b.projectId.toString());
        })
        .map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: idx * 0.2,
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
  </div>
  );
};

export default Projects;
