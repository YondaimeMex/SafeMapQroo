import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { navbarLinks } from "../data/data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            className="w-28 h-auto"
            src="/src/assets/COEPROC-qqb0ndq3et1dbmhtmnkfpkpr29q8y7hl323ch5e59k.png"
            alt="Logo"
          />
          <p className="text-lg font-semibold text-red-800">SafeMapQroo</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-black">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <a
                className="inline-block hover:text-white hover:bg-red-800 rounded-lg px-3 py-1 transition"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-red-800"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start gap-3 px-6 py-4">
            {navbarLinks.map((item) => (
              <li key={item.id} className="w-full">
                <a
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-red-800 hover:text-white transition"
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;