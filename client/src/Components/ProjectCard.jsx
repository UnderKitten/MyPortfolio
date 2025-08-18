import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="relative mx-auto w-full max-w-md sm:h-[500px] h-[450px] rounded-xl bg-white/5 border border-fuchsia-700/40 shadow-lg backdrop-blur-xl p-6 flex flex-col items-center space-y-4">
      <img
        src={props.image}
        alt={props.alt}
        className="w-44 h-44 mx-auto mb-4 rounded-lg shadow-md border border-fuchsia-400/30 object-cover"
      />

      <h2 className="text-xl sm:text-3xl font-bold text-fuchsia-400 mb-2 text-center">{props.title}</h2>
      <h3 className="text-lg sm:text-3xl font-bold text-fuchsia-400 mb-2 text-center">{props.technologies}</h3>

      <p className="text-base sm:text-xl text-white/90 mb-4 text-center">
        {props.shortDescription}
      </p>
      <div className="flex gap-10">
        <Link to={`/projects/${props.id}`} state={{ props }} className="flex items-center gap-2 px-4 py-2 rounded bg-fuchsia-600/70 hover:bg-fuchsia-800 text-white font-semibold shadow transition">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
