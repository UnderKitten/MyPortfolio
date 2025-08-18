import { useLocation, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchProjects } from "../utils/contentful";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ErrorMessage from "../Components/ErrorMessage";

const ProjectDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const { project: passedProject } = location.state || {};
  const { data: projects } = useSWR("projects", fetchProjects);

  const project = passedProject || projects?.find((p) => p.id === id);

  if (!project) return <ErrorMessage />;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center mt-8 mx-auto max-w-7xl rounded-xl bg-white/5 border border-fuchsia-700/40 shadow-lg backdrop-blur-xl p-8">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-md w-full max-w-md object-contain"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-2">
          {project.title}
        </h2>
        <div className="text-white/90 text-lg mb-4 [&_p]:mb-4 [&_ul]:mb-4 [&_ol]:mb-4">
          {documentToReactComponents(project.description)}
        </div>
        <div className="flex gap-4 mt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-fuchsia-600/80 hover:bg-fuchsia-700 text-white font-semibold shadow transition"
            >
              <FaExternalLinkAlt /> View Project
            </a>
          )}
          {project.gitLink && (
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-gray-900/80 hover:bg-gray-800 text-white font-semibold shadow transition"
            >
              <FaGithub /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
