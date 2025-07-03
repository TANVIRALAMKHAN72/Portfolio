import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 ">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Tanvir Alam Khan. All Rights
          Reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/TANVIRALAMKHAN72"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanvir-alam-khan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.facebook.com/tanviralamkhan.tanvir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
