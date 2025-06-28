import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-700 to-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto rounded-md cursor-pointer"
          />
        </ScrollLink>

        <ul className="hidden md:flex space-x-6">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-black px-4 py-4 space-y-3 shadow-md">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="block cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="block cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="block cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
              className="block cursor-pointer text-white hover:text-blue-400"
              offset={-70}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
