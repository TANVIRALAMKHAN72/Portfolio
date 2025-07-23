import React from "react";
import { Fade } from "react-awesome-reveal";
import ImageSlider from "./ImageSlider";

const FeatureSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <div className="container mx-auto space-y-8">
        <Fade direction="down">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-500 text-center">
            My Projects
          </h1>
        </Fade>

        <Fade direction="up">
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="md:w-1/3 w-full">
              <ImageSlider
                images={[
                  "https://i.ibb.co/Cs3K4tfj/recipe1.png",
                  "https://i.ibb.co/tpPDckQf/recipe2.png",
                  "https://i.ibb.co/LdX1HJSC/recipe3.png",
                ]}
              />
            </div>

            <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                Recipe Book
              </h2>
              <p className="text-gray-300 mb-4">
                Recipe Book App is a full-stack MERN (MongoDB, Express.js,
                React, Node.js) based recipe management platform where users can
                explore, create, edit, and delete recipes. Users can also like
                and add recipes to their wishlist for future reference.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://relaxed-cranachan-31b3c8.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Live Link
                </a>

                <a
                  href="https://github.com/TANVIRALAMKHAN72/-Recipe-Book-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Client Repository
                </a>

                <a
                  href="https://github.com/TANVIRALAMKHAN72/Recipe-Book-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Server Repository
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="up">
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="md:w-1/3 w-full">
              <ImageSlider
                images={[
                  "https://i.ibb.co/9P5NjH7/share1.png",
                  "https://i.ibb.co/0yc45QvR/share2.png",
                  "https://i.ibb.co/RpPpM5fh/share3.png",
                ]}
              />
            </div>

            <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                Share Meal
              </h2>
              <p className="text-gray-300 mb-4">
                Share Meal is a full-stack web application that enables users to
                share, manage, and explore food donations easily. The platform
                connects donors with people in need, encouraging
                community-driven food sharing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://storied-clafoutis-db7e09.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Live Link
                </a>

                <a
                  href="https://github.com/TANVIRALAMKHAN72/Share-Meal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Client Repository
                </a>

                <a
                  href="https://github.com/TANVIRALAMKHAN72/Share-Meal-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Server Repository
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="up">
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="md:w-1/3 w-full">
              <ImageSlider
                images={[
                  "https://i.ibb.co/JRTms49P/job1.png",
                  "https://i.ibb.co/8DLdSm4s/job2.png",
                  "https://i.ibb.co/qMf2jdKq/job3.png",
                ]}
              />
            </div>

            <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                Job Bridge
              </h2>
              <p className="text-gray-300 mb-4">
                Job Bridge is a modern, responsive Single Page Application (SPA)
                built with React and Firebase Authentication. It helps job
                seekers explore and apply for jobs across multiple companies
                with ease.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://job-bridge-project.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Live Link
                </a>

                <a
                  href="https://github.com/TANVIRALAMKHAN72/Job-Bridge-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block text-center"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FeatureSection;
