import useDetectScroll from "@smakss/react-scroll-direction";

export function Navbar() {
  const { scrollPosition } = useDetectScroll();

  return (
    <header className="fixed w-screen z-[99999] ">
      <nav>
        <ul className="flex items-center justify-center gap-16 h-16 bg-midnight font-medium font-sans">
          <li
            className={
              scrollPosition.top < 600
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
              scrollPosition.top >= 600 && scrollPosition.top <= 1300
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
              scrollPosition.top > 1300 && scrollPosition.top <= 2100
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
              scrollPosition.top > 2100 && scrollPosition.top <= 3000
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
              scrollPosition.top > 3000
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
