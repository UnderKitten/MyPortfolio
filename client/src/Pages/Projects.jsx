import ProjectCard from "../Components/ProjectCard";
import LoadingSpinner from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import { motion } from "framer-motion";
import { useAppData } from "../Contexts/AppDataProvider";

const Projects = () => {
  const { appData, error, isLoading } = useAppData();
  const projects = appData?.projects || [];

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),28rem))] auto-rows-fr justify-center gap-6">
      {projects.map((project, idx) => (
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
