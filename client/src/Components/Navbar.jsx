import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="fixed w-full p-4 bg-gray-900/70 backdrop-blur-md border-b border-white/10 z-50">
      <div className="flex flex-row items-center justify-between px-8">
        <Link
          to="/"
          preventScrollReset
          className="text-fuchsia-500 text-[25px]"
        >
          MC.
        </Link>
        <nav className="hidden sm:flex justify-between items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-fuchsia-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button onClick={toggleMenu} className="sm:hidden">
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {showMenu && (
        <nav className="sm:hidden flex flex-col items-center gap-1 text-center mt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={closeMenu}
              className="hover:text-fuchsia-200 w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
