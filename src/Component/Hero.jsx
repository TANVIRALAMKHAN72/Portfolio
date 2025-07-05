import React from "react";
import profilePic from "../assets/WhatsApp Image 2025-06-25 at 12.32.36_d489e2fb.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import ShinyText from "../Shared/ShinyText";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <ShinyText>Hi, I'm Tanvir Alam Khan</ShinyText>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">
            Full Stack MERN Developer
          </h2>
          <p className="mb-6">
            I build responsive, fast, and modern web applications using MongoDB,
            Express, React, and Node.js.
          </p>

          <a
            href="https://drive.google.com/file/d/179-LO4N4MbU0h5womlP90zepqoZ4xWR0/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md transition"
          >
            View Resume
          </a>

          <div className="flex gap-4 mt-6 mb-6 justify-center md:justify-start">
            <a
              href="https://github.com/TANVIRALAMKHAN72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanvir-alam-khan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="hover:text-blue-400 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/tanviralamkhan.tanvir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={28}
                className="hover:text-blue-400 transition"
              />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Tanvir Alam Khan"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
