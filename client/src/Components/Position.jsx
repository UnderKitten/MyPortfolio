import Typewriter from "typewriter-effect";

const Position = ({ positions }) => {
  return (
    <Typewriter 
      options={{
        strings: positions || [
          "Software Developer",
          "Product Software Engineer",
          "Interactive Developer",
          "Unity Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
};

export default Position;
