import { Link } from "react-router-dom";

const NotFound = ({
  title = "Page not found",
  message = "The page you're looking for doesn't exist or has moved.",
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-16">
      <h1 className="text-3xl sm:text-5xl font-bold text-fuchsia-400">{title}</h1>
      <p className="text-lg sm:text-xl text-white/90">{message}</p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link
          to="/projects"
          className="px-4 py-2 rounded bg-fuchsia-600/80 hover:bg-fuchsia-700 text-white font-semibold shadow transition"
        >
          View projects
        </Link>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold shadow transition"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
