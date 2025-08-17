import Position from "../Components/Position";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="px-10">
      <div className="flex sm:flex-row flex-col-reverse text-[45px] justify-between items-center gap-1">
        <div>
          <h1>Hello there!</h1>
          <h1>
            My name is{" "}
            <strong className="text-fuchsia-500 uppercase">
              Maxim Churzin
            </strong>
          </h1>
          <div className="text-fuchsia-500 font-bold pt-5">
            <Position />
          </div>
        </div>
        <img
          className="rounded-full sm:h-100 h-50"
          src="../src/assets/profile.jpg"
          alt="Profile picture"
        />
      </div>

      <motion.div
        className="pt-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-[35px] uppercase">
          Let me <span className="text-fuchsia-500">introduce</span> myself
        </h2>
        <p className="text-[25px]">
          I’m an experienced software developer with over 5 years delivering
          2D/3D and VR/AR interactive applications using Unity and C#. Currently
          growing my expertise in back-end and full-stack development, focusing
          on ASP.NET Core and React. I thrive on solving complex challenges,
          building modern web apps, and learning new things along the way.
        </p>
      </motion.div>

      <motion.div
        className="pt-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2 className="text-[30px] uppercase">
          Beyond <span className="text-fuchsia-500">code</span>
        </h2>
        <p className="text-[25px]">
          When I’m not coding, you’ll find me playing soccer, cycling around the
          city, or enjoying video games. I also spend time learning guitar,
          experimenting with 3D printing, and exploring the world of flying
          drones. I love hands-on hobbies and am always up for discovering
          something new, whether it’s mastering a musical riff or piloting the
          latest drone.
        </p>
      </motion.div>

      <motion.div
        className="pt-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <h2 className="text-[35px] uppercase mb-4">
          Let's <span className="text-fuchsia-500">connect</span>
        </h2>
        <p className="mb-3 text-[25px]">You can find me on:</p>
        <ul className="flex gap-6 justify-start mb-4 text-2xl">
          <li>
            <a
              href="https://github.com/UnderKitten"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-fuchsia-500"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maximchurzin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-fuchsia-500"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p className="text-[20px]">mchurzin@outlook.com</p>
      </motion.div>
    </div>
  );
};

export default Home;
