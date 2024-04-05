import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Whatsapp from "../assets/icons/Whatsapp.png";

export function ContactsBottom() {
  return (
    <div className="hidden fixed bottom-0 left-5 z-[99999] md:flex flex-col items-center gap-2">
      <a
        href=" https://wa.me/5511945567816"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Whatsapp}
          alt="whatsapp"
          className="hover:scale-125 transition ease-in w-6"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/daniele-f-almeida/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Linkedin}
          alt="linkedin"
          className="hover:scale-125 transition ease-in"
        />
      </a>
      <a
        href="https://github.com/Daniflav94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Github}
          alt="github"
          className="hover:scale-125 transition ease-in"
        />
      </a>

      <div className="bg-zinc-400 w-[2px] h-36 "></div>
    </div>
  );
}
