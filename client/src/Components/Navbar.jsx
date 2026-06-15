import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
  ];

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="fixed w-full p-4 bg-gray-900/80 backdrop-blur-lg border-b border-fuchsia-600/40 shadow-lg z-50">
  <div className="flex flex-row items-center justify-between px-8">
    <Link
      to="/"
      preventScrollReset
      className="text-fuchsia-500 text-[28px] font-extrabold tracking-wider drop-shadow-md"
    >
      MC.
    </Link>
    <nav className="hidden sm:flex justify-between items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="text-white/90 hover:text-fuchsia-400 transition-colors duration-300 font-semibold tracking-wide text-base sm:text-lg"
        >
          {item.name}
        </Link>
      ))}
    </nav>
    <button
      onClick={toggleMenu}
      className="sm:hidden text-fuchsia-500 hover:text-fuchsia-400 transition-colors duration-300"
      aria-label="Toggle menu"
    >
      {showMenu ? <GrClose size={28} /> : <GiHamburgerMenu size={28} />}
    </button>
  </div>

  {showMenu && (
    <nav className="sm:hidden flex flex-col items-center gap-2 text-center mt-4 backdrop-blur-md rounded-md shadow-lg p-4 mx-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          onClick={closeMenu}
          className="text-white hover:text-fuchsia-400 w-full py-2 font-medium transition-colors duration-300 rounded"
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
