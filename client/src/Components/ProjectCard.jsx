import React from "react";

const ProjectCard = () => {
  return (
    <div className="relative mx-auto my-8 w-full max-w-xs rounded-xl bg-white/5 border border-fuchsia-700/40 shadow-lg backdrop-blur-xl p-6 flex flex-col items-center space-y-4">
      <img
        src="../src/assets/Portfolio.png"
        alt="Portfolio screenshot"
        className="w-45 mx-auto mb-4 rounded-lg shadow-md border border-fuchsia-400/30"
      />

      <h2 className="text-xl font-bold text-fuchsia-400 mb-2">Portfolio</h2>

      <p className="text-white/90 text-sm mb-4 text-center">
        Short description
      </p>
      <div className="flex gap-4">
        <a
          href=""
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded bg-fuchsia-600/70 hover:bg-fuchsia-800 text-white font-semibold shadow transition"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
