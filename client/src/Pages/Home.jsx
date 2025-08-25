import Position from "../Components/Position";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppData } from "../Contexts/AppDataProvider";
import LoadingSpinner from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";

const Home = () => {
  const { appData, error, isLoading } = useAppData();
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  if (!appData) return <LoadingSpinner />;


  return (
    <div className="px-10">
      <div className="flex sm:flex-row flex-col-reverse text-[45px] justify-between items-center gap-1">
        <div>
          <h1 className="text-[30px] sm:text-[45px]">Hello there!</h1>
          <h1 className="text-[30px] sm:text-[45px]">
            My name is{" "}
            <strong className="text-fuchsia-500 uppercase">
              Maxim Churzin
            </strong>
          </h1>
          <div className="text-fuchsia-500 font-bold pt-5 text-[30px] sm:text-[45px]">
            <Position />
          </div>
        </div>
        <img
          className="rounded-full sm:h-100 h-50"
          src="/assets/profile.jpg"
          alt="Profile picture"
        />
      </div>

      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="uppercase text-[25px] sm:text-[35px]">
          Let me <span className="text-fuchsia-500">introduce</span> myself
        </h2>
        <p className="text-[18px] sm:text-[25px]">
          {appData.introduction}
        </p>
      </motion.div>

      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="uppercase text-[25px] sm:text-[30px]">
          Beyond <span className="text-fuchsia-500">code</span>
        </h2>
        <p className="text-[18px] sm:text-[25px]">
         {appData.beyondCode}
        </p>
      </motion.div>

      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-[25px] sm:text-[35px] uppercase mb-4">
          Let's <span className="text-fuchsia-500">connect</span>
        </h2>
        <p className="mb-3 text-[18px] sm:text-[25px]">You can find me on:</p>
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
        <p className="text-[16px] sm:text-[20px]">mchurzin@outlook.com</p>
      </motion.div>
    </div>
  );
};

export default Home;
