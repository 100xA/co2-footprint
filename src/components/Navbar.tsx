// NavigationBar.tsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              className="h-8 w-8"
              src="https://th.bing.com/th/id/OIG2.0WimXLWz7KIoITujeDyU?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="Logo"
            />
            <span className="text-xl font-semibold whitespace-nowrap text-white">
              {t("app")}
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              {t("navbar.services")}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              {t("navbar.pricing")}
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              {t("navbar.contact")}
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("navbar.services")}
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("navbar.pricing")}
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
