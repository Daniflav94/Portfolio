import discord from "../assets/icons/discord.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

export function Contact() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="contact"
      className="md:h-screen h-fit dark:bg-midnight bg-zinc-100"
    >
      <div className="dark:bg-zinc-600 bg-zinc-200 w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full hidden md:flex"
        >
          <path
            fill={`${darkMode ? "#282C33" : "#f4f4f5"}`}
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-screen md:h-[75vh] h-fit dark:bg-midnight bg-zinc-100 flex flex-col items-center relative -top-10">
        <div className="md:w-9/12 flex items-center mb-16 mt-28 md:mt-0 gap-5">
          <h2 className="dark:text-zinc-50 text-zinc-600 font-medium text-4xl tracking-wider">
            <span className="text-lilac">#</span>contatos
          </h2>
          <div className="bg-lilac h-[2px] w-52 opacity-60 md:flex hidden"></div>
        </div>

        <div className="md:w-9/12 w-screen max-h-[650px] md:max-h-screen flex-wrap flex md:flex-row justify-center md:justify-between items-center gap-8 pb-16 px-5">
          <motion.a
            href="https://www.linkedin.com/in/daniele-f-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 w-auto justify-center items-center"
            initial={{ opacity: 0, translateY: -100, scale: 1 }}
            whileInView={{ opacity: 1, translateY: 0, transition: {
              duration: 0.25,
              delay: 0.1,
              ease: ["linear"],
            } }}
           
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 md:w-20">
              <img src={linkedin} alt="" className=" w-10" />
            </div>
            <span className="dark:text-zinc-50 text-zinc-500 font-semibold text-lg">
              Linkedin
            </span>
            <span className="dark:text-gray text-zinc-400 text-sm">@daniele-f-almeida</span>
          </motion.a>

          <motion.a
            href="https://github.com/Daniflav94"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, translateY: -100, scale: 1 }}
            whileInView={{ opacity: 1, translateY: 0, transition: {
              duration: 0.25,
              delay: 0.25,
              ease: ["linear"]
            } }}
           
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <img src={github} alt="" className=" w-10" />
            </div>
            <span className="dark:text-zinc-50 text-zinc-500 font-semibold text-lg">
              Github
            </span>
            <span className="dark:text-gray text-zinc-400 text-sm">@Daniflav94</span>
          </motion.a>

          <motion.div
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, translateY: -100, scale: 1 }}
            whileInView={{ opacity: 1, translateY: 0, transition: {
              duration: 0.25,
              delay: 0.45,
              ease: ["linear"]
            } }}
           
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <img src={discord} alt="" className=" w-10" />
            </div>
            <span className="dark:text-zinc-50 text-zinc-500 font-semibold text-lg">
              Discord
            </span>
            <span className="dark:text-gray text-zinc-400 text-sm">.danielealmeida</span>
          </motion.div>

          <motion.a
            className="flex flex-col gap-3 w-26 md:auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, translateY: -100, scale: 1 }}
            whileInView={{ opacity: 1, translateY: 0, transition: {
              duration: 0.25,
              delay: 0.65,
              ease: ["linear"]
            } }}
          
            href=" https://wa.me/5511945567816"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <Phone size={40} color="#c778dd" strokeWidth={2} />
            </div>
            <span className="dark:text-zinc-50 text-zinc-500 font-semibold text-lg">
              Telefone
            </span>
            <span className="dark:text-gray text-zinc-400 text-sm">(11) 94556-7816</span>
          </motion.a>

          <motion.a
            className="flex flex-col gap-3 md:auto justify-center items-center pt-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 1, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0, transition: {
              duration: 0.25,
              delay: 0.85,
              ease: ["linear"]
            } }}
            
            href="mailto:danyelly_mell@hotmail.com"
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <Mail size={40} color="#c778dd" strokeWidth={2} />
            </div>
            <span className="dark:text-zinc-50 text-zinc-500 font-semibold text-lg">
              E-mail
            </span>
            <span className="dark:text-gray text-zinc-400 text-sm w-24 text-center ">
              danyelly_mell@hotmail.com
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
