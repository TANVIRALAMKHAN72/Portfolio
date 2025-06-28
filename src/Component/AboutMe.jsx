import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Lottie from "lottie-react";
import ShinyText from "../Shared/ShinyText";
import developerLottie from "../assets/developer.json";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        <div className="flex-1">
          <Lottie animationData={developerLottie} loop={true} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <Slide direction="down">
            <h1 className="text-4xl font-extrabold mb-6 text-blue-500">
              About Me
            </h1>
          </Slide>

          <Fade cascade damping={0.2}>
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-2">
                <ShinyText>Hi, I'm Tanvir Alam Khan</ShinyText>
              </h2>
              <p className="text-2xl text-blue-300">
                Full Stack MERN Developer
              </p>
            </div>
          </Fade>

          <Zoom cascade damping={0.2}>
            <p className="text-lg leading-relaxed mb-4">
              My programming journey began in 2024. I started out curious and a
              bit lost, watching tutorials and searching online without a clear
              direction. Later that year, I joined the Programming Hero
              Bootcamp, which gave me the structure and motivation I needed.
              Though I faced many errors and challenges, I never gave up. Day by
              day, I grew more confident and skilled, learning the full MERN
              stack and building real projects.
            </p>

            <p className="text-lg leading-relaxed">
              Outside of coding, I’m a big cricket fan and love playing whenever
              I get time. I also enjoy writing poetry in my free time. Poetry
              allows me to express my thoughts and emotions in a creative way
              beyond just coding. These hobbies keep me balanced, refreshed, and
              inspired to keep learning and creating.
            </p>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
