import React from "react";
import Carousel from "../components/Carousel";

const Projects = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] overflow-auto flex flex-col justify-center p-2"
    >
      <h1 className="bg-blue-600 rounded-xl text-white p-3 w-full md:w-fit h-fit mb-4 text-2xl font-bold">
        Projects
      </h1>

      {/* Carousel */}
      <div className="flex flex-col md:flex-row gap-5 overflow-x-scroll">
        <div className="w-full md:min-w-[385px] md:min-h-[500px] md:w-1/3">
          <Carousel>
            {slides.map((s) => (
              <img src={s} className="w-[100%] h-full" />
            ))}
          </Carousel>
        </div>
        <div className="w-full md:min-w-[385px] md:min-h-[500px] md:w-1/3">
          <Carousel>
            {slides.map((s) => (
              <img src={s} className="w-[100%] h-full" />
            ))}
          </Carousel>
        </div>
        <div className="w-full md:min-w-[385px] md:min-h-[500px] md:w-1/3">
          <Carousel>
            {slides.map((s) => (
              <img src={s} className="w-[100%] h-full" />
            ))}
          </Carousel>
        </div>
        <div className="w-full md:min-w-[385px] md:min-h-[500px] md:w-1/3">
          <Carousel>
            {slides.map((s) => (
              <img src={s} className="w-[100%] h-full" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
