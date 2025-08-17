import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-fuchsia-800/80 via-gray-900/60 to-amber-700/70 backdrop-blur-md px-10 py-4 grid sm:grid-cols-3 items-center grid-cols-1 text-center gap-2 text-white border-t border-fuchsia-500/40">
      <div>
        <p>Designed and Developed by Maxim Churzin</p>
      </div>
      <div className="justify-self-center">
        <p>Copyright &copy; {new Date().getFullYear()} MC</p>
      </div>
      <ul className="flex gap-3 justify-center text-2xl">
        <li>
          <a
            href="https://github.com/UnderKitten"
            target="_blank"
            rel="noopener noreferrer"
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
            className="hover:text-fuchsia-500"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
