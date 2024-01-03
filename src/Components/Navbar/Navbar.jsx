import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className=" bg-[#292F36] lg:text-white  dark:bg-gray-800 py-4">
        <div className="max-w-[1350px] px-6 py-6 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img
                  className="w-20  sm:h-20"
                  src="https://i.postimg.cc/xdRy7ZRc/Untitled-design-5.png"
                  alt=""
                />
              </Link>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    style={{ display: isOpen ? "none" : "block" }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    style={{ display: isOpen ? "block" : "none" }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-white bg-gray-700 dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col  -mx-6 lg:flex-row lg:items-center lg:mx-8 bg-transparent ">
                <a
                  className="px-3 py-2 mx-3 mt-2 lg:text-white duration-300 hover:scale-105 transition-all transform rounded-md lg:mt-0 font-semibold hover:text-main"
                  href="#about"
                >
                  About Me
                </a>
                <a
                  className="px-3 py-2 mx-3 mt-2 lg:text-white hover:scale-105 transition-all  duration-300 transform rounded-md lg:mt-0 font-semibold hover:text-main"
                  href="#skills"
                >
                  My Skills
                </a>
                <a
                  className="px-3 py-2 mx-3 mt-2 lg:text-white hover:scale-105 transition-all duration-300 transform rounded-md lg:mt-0 font-semibold hover:text-main"
                  href="#projects"
                >
                  My Projects
                </a>
                <a
                  className="px-3 py-2 mx-3 mt-2 lg:text-white hover:scale-105 transition-all  duration-300 transform rounded-md lg:mt-0 font-semibold hover:text-main"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
