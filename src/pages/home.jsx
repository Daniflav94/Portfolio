import imageProfile from "../assets/image/picture-lilac.png";
import curriculo from "../assets/files/Curriculo.pdf";
import pontilhado from "../assets/image/pontilhado.png";
import pontilhadoBranco from "../assets/image/pontilhado-branco.png";

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { ButtonDarkMode } from "../components/buttonDarkMode";
import { ContactsBottom } from "../components/contactsBottom";
import { projects } from "../utils/mocks";
import useDetectScroll from "@smakss/react-scroll-direction";

export function Home() {
  const { darkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const texts = [
    "Desenvolvedora Front-end",
    "Desenvolvedora Back-end",
    "Desenvolvedora Fullstack",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      setText(
        isDeleting
          ? currentText.substring(0, text.length - 1)
          : currentText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 60);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div
      id="home"
      className={`dark:bg-midnight bg-zinc-100 md:h-[95vh] relative pt-10 md:pt-0`}
    >
      <ContactsBottom />

      <img
        src={`${darkMode ? pontilhado : pontilhadoBranco}`}
        className={`w-36 hidden md:flex md:absolute right-0 bottom-0 z-[99999]`}
        alt="quadrado pontilhado"
      />
      <div className="flex flex-col items-center pt-10 md:pt-0 md:flex md:flex-row md:justify-center md:items-center w-screen md:h-screen">
        <div className="relative">
          <img
            src={imageProfile}
            className="md:w-[430px] w-[280px] ms-5 md:ms-0"
            alt="Profile"
            loading="eager"
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

        <div className="md:border-s-2 md:w-auto w-72 h-32 border-gray md:mt-52 my-16 md:mx-20 md:ps-20 flex flex-col justify-center items-center md:items-start font-sans">
          <div className="dark:text-gray text-zinc-600 text-xl mb-6 h-[65px] w-[290px]">
            Eu sou <span className="text-lilac">Daniele Almeida</span>, <br />{" "}
            <span
              id="typing-text"
              className="h-[28px] overflow-hidden inline-block animate-blink"
            >
              {text}
            </span>
          </div>
          
          <a
            href={curriculo}
            download="Currículo Daniele Almeida"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden h-12 px-8 rounded-lg md:dark:bg-gray-800 md:bg-gray bg-lilac dark:text-midnight md:dark:text-zinc-100 text-white border-none cursor-pointer group">
              <span className="relative z-10">Download CV</span>
              <span className="absolute top-0 left-0 w-full h-full rounded-lg transform scale-x-0 origin-0-50 transition-transform duration-475 bg-gradient-to-r from-purple-500 to-lilac group-hover:scale-x-100"></span>
            </button>
          </a>
        </div>
      </div>
      <div className="hidden">
        {projects.map((item, key) => (
          <img src={item.video} key={key} />
        ))}
      </div>
    </div>
  );
}
