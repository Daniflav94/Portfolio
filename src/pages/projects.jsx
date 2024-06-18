import { useContext, useState } from "react";

import { projects } from "../utils/mocks";
import { Project } from "../components/project";
import { DarkModeContext } from "../context/darkModeContext";

export function Projects() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="projects"
      className="h-fit dark:md:bg-zinc-600 md:bg-zinc-200 dark:bg-midnight bg-zinc-100 relative"
    >
      <div className="dark:bg-midnight bg-zinc-100 w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full hidden md:flex"
        >
          <path
            fill={`${darkMode ? "#52525b" : "#e4e4e7"}`}
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="dark:md:bg-zinc-600 md:bg-zinc-200 w-screen h-fit flex flex-col md:justify-start justify-center items-center relative md:-top-20">
        <div className=" md:w-9/12 flex items-center mb-16 mt-16 md:mt-0 gap-5">
          <h2 className="dark:text-zinc-50 text-zinc-600 font-medium text-4xl tracking-wider">
            <span className="text-lilac">#</span>projetos
          </h2>
          <div className="bg-lilac h-[2px] w-52 opacity-60 hidden md:flex"></div>
        </div>

        <div className="md:w-10/12 w-11/12 md:h-fit flex flex-wrap md:gap-10 gap-3 justify-center items-center ">
          {projects?.map((item) => (
            <Project item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
