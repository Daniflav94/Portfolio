import imageProfile from "../assets/image/picture-lilac.png";
import curriculo from "../assets/files/Curriculo2.pdf";
import pontilhado from "../assets/image/pontilhado.png";
import pontilhadoBranco from "../assets/image/pontilhado-branco.png";

import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { ButtonDarkMode } from "../components/buttonDarkMode";
import { ContactsBottom } from "../components/contactsBottom";
import { projects } from "../utils/mocks";

export function Home() {
  const { darkMode } = useContext(DarkModeContext);

  let height = window.screen.height;

  return (
    <section
      id="home"
      className={`dark:bg-midnight bg-zinc-100 md:h-[95vh] relative ${height <= 770 ? "py-20 md:h-[105vh]" : "pt-12"}`}   
    >
      <ContactsBottom />

      <img
        src={`${darkMode ? pontilhado : pontilhadoBranco}`}
        className={`w-36 hidden md:flex md:absolute right-0 bottom-0 z-[99999]`}
        alt="quadrado pontilhado"
      />
      <div className="inline-block mx-10 my-10 md:mx-0 md:my-10 md:flex md:justify-center md:items-center w-screen md:h-screen">
        <div className="relative">
          <img
            src={imageProfile}
            className="md:w-[430px] w-[280px] ms-5 md:ms-0"
            alt="Profile"
          />
          <div className="rounded-full md:w-[385px] md:h-[385px] w-[270px] h-[260px] absolute overflow-hidden md:top-28 top-20 left-7 bg-transparent z-[999] ">
            <h1 className="absolute md:top-[45px] md:left-[240px] top-3 left-44 md:text-6xl text-4xl font-code font-regular tracking-widest dark:text-midnight text-zinc-50 ">
              Hello <br /> World!
            </h1>
          </div>
          <div className=" rounded-full  md:w-[385px] md:h-[385px] w-[270px] h-[260px] absolute md:top-28 top-20 left-7 bg-transparent z-2 ">
            <h1 className="absolute md:top-[45px] top-3 left-44 md:left-[240px] md:text-6xl text-4xl font-code font-regular tracking-widest dark:text-zinc-50 text-midnight">
              Hello <br /> World!
            </h1>
          </div>
        </div>

        <div className="md:border-s-2 md:w-auto w-72 h-32 border-gray md:mt-52 mt-16 md:mx-20 mx-5 md:ps-20 flex flex-col justify-center font-sans">
          <p className="dark:text-gray text-zinc-600 text-xl mb-6">
            Eu sou <span className="text-lilac">Daniele Almeida</span>, <br />{" "}
            Desenvolvedora Fullstack
          </p>
          <a
            href={curriculo}
            download="Currículo Daniele Almeida"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className=" bg-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md md:w-40 w-full before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 overflow-hidden"
            >
              <span className="relative z-10 dark:text-midnight text-zinc-50">
                Download CV
              </span>
            </motion.button>
          </a>
        </div>
      </div>
      <div className="hidden">
        {projects.map((item, key) => (
          <img src={item.video} key={key} />
        ))}
      </div>
    </section>
  );
}
