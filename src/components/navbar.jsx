import useDetectScroll from "@smakss/react-scroll-direction";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ButtonDarkMode } from "./buttonDarkMode/buttonDarkMode";

export function Navbar() {
  const { scrollPosition } = useDetectScroll();
  const [openMenu, setOpenMenu] = useState(false);
 
  let widthScreen = window.screen.width;

  return (
    <header className="fixed w-screen h-16 z-[9999999] bg-midnight">
      <nav>
        <button
          className="md:hidden m-5 fixed"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu color="#a1a1aa" />
        </button>
        <div className="w-10 h-10"><ButtonDarkMode /></div>
        
        <ul
          className={
            !openMenu
              ? "md:flex md:static md:flex-row hidden items-center justify-center  md:gap-16 md:h-16 md:border-0 bg-midnight font-medium font-sans"
              : "absolute flex top-12 left-10 items-center py-3 w-40 border-[1px] rounded-md border-zinc-600 bg-midnight flex-col gap-3 font-medium font-sans"
          }
        >
          <li
            className={
              scrollPosition.top < 600 && widthScreen >= 768
                ? "text-zinc-50"
                : "text-zinc-400 hover:text-zinc-50"
            }
          >
            <a href="#home">
              <span className="text-lilac">#</span>início
            </a>
          </li>
          <li
            className={
              scrollPosition.top >= 600 && scrollPosition.top <= 1300 && widthScreen >= 768
                ? "text-zinc-50"
                : "text-zinc-400 hover:text-zinc-50"
            }
          >
            <a href="#about">
              <span className="text-lilac">#</span>sobre
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 1300 && scrollPosition.top <= 2100 && widthScreen >= 768
                ? "text-zinc-50"
                : "text-zinc-400 hover:text-zinc-50"
            }
          >
            <a href="#skills">
              <span className="text-lilac">#</span>habilidades
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 2100 && scrollPosition.top <= 3000 && widthScreen >= 768
                ? "text-zinc-50"
                : "text-zinc-400 hover:text-zinc-50"
            }
          >
            <a href="#projects">
              <span className="text-lilac">#</span>projetos
            </a>
          </li>
          <li
            className={
              scrollPosition.top > 3000  && widthScreen >= 768
                ? "text-zinc-50"
                : "text-zinc-400 hover:text-zinc-50"
            }
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
