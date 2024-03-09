import imageProfile from "../assets/image/picture-lilac.png";
import curriculo from "../assets/files/Curriculo.pdf";
import pontilhado from "../assets/image/pontilhado.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Whatsapp from "../assets/icons/Whatsapp.png";
import { motion } from "framer-motion";

export function Home() {
  return (
    <section id="home" className="pt-10 dark:bg-midnight w-screen md:h-screen">
      <div className="hidden fixed bottom-0 left-5 z-[99999] md:flex flex-col items-center gap-2">
        <a
          href=" https://wa.me/5511945567816"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="whatsapp" className="hover:scale-125 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniele-f-almeida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin" className="hover:scale-125" />
        </a>
        <a
          href="https://github.com/Daniflav94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github" className="hover:scale-125" />
        </a>

        <div className="bg-zinc-500 w-[2px] h-36 "></div>
      </div>

      <img
        src={pontilhado}
        className="w-36 hidden md:flex  md:absolute -right-2 -top-8 z-[9999999]"
        alt="quadrado pontilhado"
      />
      <div       
        className="inline-block mx-10 my-10 md:mx-0 md:my-0 md:flex md:justify-center md:items-center w-screen md:h-screen"
      >
        <div className="relative">
          <img
            src={imageProfile}
            className="md:w-[430px] w-[280px] "
            alt="Profile"
          />
          <div className="rounded-full md:w-[385px] md:h-[385px] w-[245px] h-[245px] absolute overflow-hidden md:top-28 top-20 left-7 bg-transparent z-[999] ">
            <h1 className="absolute md:top-[45px] md:left-[240px] top-3 left-40 md:text-6xl text-4xl font-code font-regular tracking-widest dark:text-midnight ">
              Hello <br /> World!
            </h1>
          </div>
          <div className=" rounded-full  md:w-[385px] md:h-[385px] w-[245px] h-[245px]  absolute md:top-28 top-20 left-7 bg-transparent z-2 ">
            <h1 className="absolute md:top-[45px] top-3 left-40 md:left-[240px] md:text-6xl text-4xl font-code font-regular tracking-widest dark:text-white">
              Hello <br /> World!
            </h1>
          </div>
        </div>

        <div className="md:border-s-2 md:w-auto w-72 h-32 border-gray md:mt-52 mt-16 md:mx-16 mx-5 md:px-16 flex flex-col justify-center font-sans">
          <p className="dark:text-gray text-xl mb-6">
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
              className="text-midnight bg-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md md:w-40 w-full before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 overflow-hidden"
            >
              <span className="relative z-10">Download CV</span>
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
