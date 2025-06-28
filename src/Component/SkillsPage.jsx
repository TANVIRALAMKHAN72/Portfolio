import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Fade, Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section className=" bg-gray-900 text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Slide direction="down">
          <h1 className="text-4xl font-extrabold mb-12 text-blue-500 text-center">
            My Skills
          </h1>
        </Slide>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade direction="left">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Frontend
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaHtml5 size={28} className="text-orange-500" /> HTML5
                </div>
                <div className="flex items-center gap-2">
                  <FaCss3Alt size={28} className="text-blue-500" /> CSS3
                </div>
                <div className="flex items-center gap-2">
                  <SiJavascript size={28} className="text-yellow-300" />{" "}
                  JavaScript
                </div>
                <div className="flex items-center gap-2">
                  <FaReact size={28} className="text-cyan-400" /> React.js
                </div>
                <div className="flex items-center gap-2">
                  <SiTailwindcss size={28} className="text-sky-400" /> Tailwind
                  CSS
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="up">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Backend</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaNodeJs size={28} className="text-green-500" /> Node.js
                </div>
                <div className="flex items-center gap-2">
                  <SiExpress size={28} className="text-gray-400" /> Express.js
                </div>
                <div className="flex items-center gap-2">
                  <SiMongodb size={28} className="text-green-400" /> MongoDB
                </div>
                <div className="flex items-center gap-2">
                  <SiFirebase size={28} className="text-yellow-400" /> Firebase
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Tools</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaGithub size={28} className="text-white" /> GitHub
                </div>
                <div className="flex items-center gap-2">
                  <VscCode size={28} className="text-blue-500" /> VS Code
                </div>
                <div className="flex items-center gap-2">
                  <FaFigma size={28} className="text-pink-500" /> Figma
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
