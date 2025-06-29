import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <section className=" bg-gray-900 text-white px-6 py-10 ">
      <div className="container mx-auto max-w-4xl">
        <Slide direction="down">
          <h1 className="text-4xl font-extrabold mb-12 text-blue-500 text-center">
            Educational Qualification
          </h1>
        </Slide>

        <Fade direction="up">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              Diploma in Computer Science and Technology
            </h2>
            <p className="italic mb-1">
              Running 4-year Diploma in CST
            </p>

            <p>
              I pursued a 4-year Diploma in Computer Science and Technology,
              gaining solid foundational knowledge in programming, networking,
              database management, and hardware.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Education;
