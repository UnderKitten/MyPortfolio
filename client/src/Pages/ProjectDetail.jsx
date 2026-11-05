import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ErrorMessage from "../Components/ErrorMessage";
import LoadingSpinner from "../Components/Loading";
import { useAppData } from "../Contexts/AppDataProvider";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { appData, error, isLoading } = useAppData();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  const project = appData?.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <NotFound
        title="Project not found"
        message="This project may have moved or been removed."
      />
    );
  }

  const backToProjects = (event) => {
    if (location.state?.fromProjects) {
      event.preventDefault();
      navigate(-1);
    }
  };

  return (
    <div className="mt-8 mx-auto max-w-7xl">
      <Link
        to="/projects"
        onClick={backToProjects}
        className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-fuchsia-400 font-semibold transition-colors"
      >
        <FaArrowLeft /> Back to projects
      </Link>
      <div className="flex flex-col lg:flex-row gap-8 items-center rounded-xl bg-white/5 border border-fuchsia-700/40 shadow-lg backdrop-blur-xl p-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={project.imageLarge || project.image}
            alt={project.title}
            className="rounded-lg shadow-md w-full max-w-md object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-2">
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
    </div>
  );
};

export default ProjectDetail;
