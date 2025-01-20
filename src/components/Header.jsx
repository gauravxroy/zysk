import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import img from "../assets/logo.png";
import user from "../assets/blog-1user.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResoursedOpen, setIsResourcesOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="max-w-7xl mx-auto px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <a href="#" className="flex items-center">
              <img src={img} alt="img" className=" " />
            </a>

            <div className="hidden lg:flex items-center ml-8 space-x-8">
              <a href="#" className="text-[#E63F3A] font-medium">
                Home
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#E63F3A]"
                >
                  Products
                  <FaAngleDown className=" mt-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        DataBox
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        DevInSec
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Connecx
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResoursedOpen)}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#E63F3A]"
                >
                  Resources
                  <FaAngleDown className=" mt-1 h-4 w-4" />
                </button>
                {isResoursedOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Motivation
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        insight
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Coffe
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-600 hover:text-[#E63F3A]">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <img
              className="hidden lg:block w-8 h-8 rounded-full"
              src={user}
              alt="avatar"
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden ml-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="py-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-[#E63F3A] font-medium">
              Home
            </a>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-[#E63F3A]"
            >
              Services
              <FaAngleDown className="ml-1 h-4 w-4" />
            </button>
            {isProductsOpen && (
              <div className="pl-6 py-2 space-y-1 bg-gray-50">
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#E63F3A]"
                >
                  DataBox
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#E63F3A]"
                >
                  DevInSec
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#E63F3A]"
                >
                  Connecx
                </a>
              </div>
            )}
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:text-[#E63F3A]"
            >
              Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
