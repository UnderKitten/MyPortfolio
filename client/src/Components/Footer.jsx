import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800/50 px-10 py-4 grid sm:grid-cols-3 items-center grid-cols-1 text-center gap-2">
      <div>
        <p>Designed and Developed by Maxim Churzin</p>
      </div>
      <div className="justify-self-center">
        <p>Copyright &copy; {new Date().getFullYear()} MC</p>
      </div>
      <ul className="flex gap-3 justify-center">
        <li>
          <a
            href="https://github.com/UnderKitten"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maximchurzin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
