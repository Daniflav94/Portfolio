import useDetectScroll from "@smakss/react-scroll-direction";
import { Menu } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ButtonDarkMode } from "./buttonDarkMode";
import { DarkModeContext } from "../context/darkModeContext";

export function Navbar() {
  const { scrollPosition } = useDetectScroll();
  const [openMenu, setOpenMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <header className="fixed h-12 md:h-16 top-0 w-screen z-[9999999] dark:bg-midnight bg-zinc-100 border-b-[1px] border-lilac">
      <nav>
        <button
          className="md:hidden m-3 fixed"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu color={`${!darkMode ? "#6d6d74" : "#a1a1aa"}`} />
        </button>

        <div className="fixed top-1 md:top-3 md:left-3 right-2 z-[9999999] w-10">
          <ButtonDarkMode />
        </div>

        <ul
          className={`${
            screenWidth >= 768
              ? "md:flex md:static md:flex-row items-center justify-center md:gap-16 md:h-16 md:border-0 font-medium font-sans "
              : !openMenu
              ? "absolute -left-96 transition ease-out"
              : " absolute flex top-12 left-0 text-lg items-center py-8 w-screen h-screen dark:bg-midnight/80 backdrop-blur-lg bg-zinc-100/80 flex-col gap-8 font-medium font-sans transition ease-linear"
          }`}
        >
          <li
            className={
              scrollPosition.top < 600 && screenWidth >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark transition ease-linear"
            }
            onClick={() => screenWidth < 768 && setOpenMenu(false)}
          >
            <a href="#home">
              <span className="text-lilac">#</span>início
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 600 &&
              scrollPosition.top <= 1300 &&
              screenWidth >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark transition ease-linear"
            }
            onClick={() => screenWidth < 768 && setOpenMenu(false)}
          >
            <a href="#about">
              <span className="text-lilac">#</span>sobre
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 1300 &&
              scrollPosition.top <= 2100 &&
              screenWidth >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark transition ease-linear"
            }
            onClick={() => screenWidth < 768 && setOpenMenu(false)}
          >
            <a href="#skills">
              <span className="text-lilac">#</span>habilidades
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 2100 &&
              scrollPosition.top <= 3000 &&
              screenWidth >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark transition ease-linear"
            }
            onClick={() => screenWidth < 768 && setOpenMenu(false)}
          >
            <a href="#projects">
              <span className="text-lilac">#</span>projetos
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 3000 && screenWidth >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark transition ease-linear"
            }
            onClick={() => screenWidth < 768 && setOpenMenu(false)}
          >
            <a href="#contact">
              <span className="text-lilac">#</span>contatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
