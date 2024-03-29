import useDetectScroll from "@smakss/react-scroll-direction";
import { Menu } from "lucide-react";
import { useContext, useState } from "react";
import { ButtonDarkMode } from "./buttonDarkMode";
import { DarkModeContext } from "../context/darkModeContext";

export function Navbar() {
  const { scrollPosition } = useDetectScroll();
  const [openMenu, setOpenMenu] = useState(false);

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  let widthScreen = window.screen.width;

  return (
    <header className="fixed w-screen h-16 z-[9999999] dark:bg-midnight bg-zinc-100 border-b-[1px] border-lilac">
      <nav>
        <button
          className="md:hidden m-5 fixed"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu color={`${!darkMode ? "#6d6d74" : "#a1a1aa"}`} />
        </button>

        <div className="fixed top-3 md:left-3 right-3 z-[9999999] w-10">
          <ButtonDarkMode />
        </div>

        <ul
          className={
            !openMenu
              ? "md:flex md:static md:flex-row hidden items-center justify-center  md:gap-16 md:h-16 md:border-0  font-medium font-sans"
              : "absolute flex top-12 left-10 items-center py-3 w-40 border-[1px] rounded-md dark:border-zinc-600 border-zinc-300 dark:bg-midnight bg-zinc-100 flex-col gap-3 font-medium font-sans"
          }
        >
          <li
            className={
              scrollPosition.top < 600 && widthScreen >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark"
            }
            onClick={() => widthScreen < 768 && setOpenMenu(false)}
          >
            <a href="#home">
              <span className="text-lilac">#</span>início
            </a>
          </li>
          <li
            className={
              scrollPosition.top >= 600 &&
              scrollPosition.top <= 1300 &&
              widthScreen >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark"
            }
            onClick={() => widthScreen < 768 && setOpenMenu(false)}
          >
            <a href="#about">
              <span className="text-lilac">#</span>sobre
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 1300 &&
              scrollPosition.top <= 2100 &&
              widthScreen >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark"
            }
            onClick={() => widthScreen < 768 && setOpenMenu(false)}
          >
            <a href="#skills">
              <span className="text-lilac">#</span>habilidades
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 2100 &&
              scrollPosition.top <= 3000 &&
              widthScreen >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark"
            }
            onClick={() => widthScreen < 768 && setOpenMenu(false)}
          >
            <a href="#projects">
              <span className="text-lilac">#</span>projetos
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 3000 && widthScreen >= 768
                ? "dark:text-zinc-50 text-lilacDark"
                : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-50 hover:text-lilacDark"
            }
            onClick={() => widthScreen < 768 && setOpenMenu(false)}
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
