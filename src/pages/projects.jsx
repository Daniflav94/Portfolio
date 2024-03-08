import { useState } from "react";

import { projects } from "../utils/mocks";
import { Project } from "../components/project";

export function Projects() {
  return (
    <section
      id="projects"
      className="md:h-fit h-fit md:bg-zinc-600 bg-midnight relative w-screen"
    >
      <div className="bg-midnight w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full hidden md:flex"
        >
          <path
            fill="#52525b"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="md:bg-zinc-600 w-screen h-fit flex flex-col md:justify-start justify-center items-center relative md:-top-20">
        <div className=" md:w-9/12 flex items-center mb-20 mt-8 md:mt-0 gap-5">
          <h2 className="text-zinc-50 font-medium text-4xl tracking-wider">
            <span className="text-lilac">#</span>projetos
          </h2>
          <div className="bg-lilac h-[2px] w-52 opacity-60 hidden md:flex"></div>
        </div>

        <div className="md:w-10/12 w-screen h-fit flex flex-wrap gap-10 justify-center">
          {projects?.map((item) => (
            <Project item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
