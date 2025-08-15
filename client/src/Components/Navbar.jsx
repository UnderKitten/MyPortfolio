import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [{ name: "name", href: "" }];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="p-4 bg-cyan-950 sm:bg-cyan-950/0">
      <div className="flex flex-row items-center justify-between sm:justify-between px-8">
        <Link to="/" preventScrollReset class="text-fuchsia-500 text-[25px]">
          MC.
        </Link>
        <nav className="hidden sm:flex justify-between items-center gap-4">
          <Link to="/" className="hover:text-fuchsia-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-fuchsia-200">
            About
          </Link>
          <Link to="/about" className="hover:text-fuchsia-200">
            Projects
          </Link>
          <Link to="/resume" className="hover:text-fuchsia-200">
            Resume
          </Link>
          <Link to="/resume" className="hover:text-fuchsia-200">
            Contact
          </Link>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav className="sm:hidden flex flex-col items-center gap-1">
        {showMenu && (
          <>
            <Link to="/" className="hover:text-fuchsia-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-fuchsia-200">
              About
            </Link>
            <Link to="/about" className="hover:text-fuchsia-200">
              Projects
            </Link>
            <Link to="/resume" className="hover:text-fuchsia-200">
              Resume
            </Link>
            <Link to="/resume" className="hover:text-fuchsia-200">
              Contact
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
