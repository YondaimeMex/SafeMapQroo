import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { navbarLinks } from "../data/data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#611232] shadow-md border-b border-pink-800 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            className="w-28 h-auto"
            src="/src/assets/COEPROC-qqb0ndq3et1dbmhtmnkfpkpr29q8y7hl323ch5e59k.png"
            alt="Logo"
          />
          <p className="text-lg text-white">SafeMapQroo</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="px-2 py-2 text-lg rounded-lg text-white hover:underline hover:font-bold hover:text-white hover:shadow-md transition-all duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-900 shadow-md">
          <ul className="flex flex-col items-start gap-3 px-6 py-4">
            {navbarLinks.map((item) => (
              <li key={item.id} className="w-full">
                <a
                  className="block w-full text-left text-white font-semibold py-2 px-3 rounded-lg hover:bg-pink-800 hover:underline transition"
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