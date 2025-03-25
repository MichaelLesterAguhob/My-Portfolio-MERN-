import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";


const Projects = () => {
  // const slides = [
  //   "https://i.ibb.co/ncrXc2V/1.png",
  //   "https://i.ibb.co/B3s7v4h/2.png",
  //   "https://i.ibb.co/XXR8kzF/3.png",
  //   "https://i.ibb.co/yg7BSdM/4.png",
  //   "https://talkshop.ph/blog/wp-content/uploads/2014/06/happy-people-group-fb.jpg",
  //   "https://cdn.stocksnap.io/img-thumbs/280h/business-people_VIEC4IZZRI.jpg",
  // ];
  const API_BASE_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL_DEV : process.env.REACT_APP_API_BASE_URL; 
  const [projects, setProjects] = useState();

  const getProjects = async() => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/`);
      const respo = await response.json();

      // setProjects(respo.projects.map((proj, i) => {
      //   return proj;
      // }))

      setProjects(respo.projects)

      console.log(projects);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <div
      id="projects"
      className="min-h-[100vh] flex flex-col justify-center items-center p-2"
    >
      <div className="flex justify-center items-center">
        <h1 className="bg-blue-600 rounded-xl text-white p-3 w-full md:w-fit h-fit mb-4 text-2xl font-bold text-center">
          Projects
        </h1>
      </div>
        <h3 className="mb-5 text-red-500">Below is under development </h3>

      {/* Carousel */}
      <div className="flex flex-col md:flex-row gap-5 overflow-x-scroll w-[95%]">

        <div className="w-fit md:min-w-[385px] max-w-[420px]  md:w-1/3 bg-slate-600">
          {/* <Carousel>
            {slides.map((s, index) => (
              <img src={s} className="w-[100%] h-[100%] my-auto mx-auto" key={index}/>
            ))}
          </Carousel> */}
        </div>
       
      </div>
    </div>
  );
};

export default Projects;
