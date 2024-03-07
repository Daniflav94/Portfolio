import discord from "../assets/icons/discord.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="h-screen">
      <div className="bg-zinc-600 w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#282C33"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-screen h-[75vh] bg-midnight flex flex-col justify-center items-center relative -top-32">
        <div className=" w-9/12 flex items-center mb-20 gap-5">
          <h2 className="text-zinc-50 font-medium text-4xl tracking-wider">
            <span className="text-lilac">#</span>contatos
          </h2>
          <div className="bg-lilac h-[2px] w-52 opacity-60"></div>
        </div>

        <div className="w-9/12 flex justify-between">
          <motion.a
            href="https://www.linkedin.com/in/daniele-f-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <img src={linkedin} alt="" className=" w-10" />
            </div>
            <span className="text-zinc-50 font-semibold text-lg">Linkedin</span>
            <span className="text-gray text-sm">@daniele-f-almeida</span>
          </motion.a>

          <motion.a
            href="https://github.com/Daniflav94"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <img src={github} alt="" className=" w-10" />
            </div>
            <span className="text-zinc-50 font-semibold text-lg">Github</span>
            <span className="text-gray text-sm">@Daniflav94</span>
          </motion.a>

          <motion.div
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <img src={discord} alt="" className=" w-10" />
            </div>
            <span className="text-zinc-50 font-semibold text-lg">Discord</span>
            <span className="text-gray text-sm">.danielealmeida</span>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <Phone size={40} color="#c778dd" strokeWidth={2} />
            </div>
            <span className="text-zinc-50 font-semibold text-lg">Telefone</span>
            <span className="text-gray text-sm">(11) 94556-7816</span>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 w-auto justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <div className="rounded-full border-lilac border-[1px] p-5 w-20">
              <Mail size={40} color="#c778dd" strokeWidth={2} />
            </div>
            <span className="text-zinc-50 font-semibold text-lg">E-mail</span>
            <span className="text-gray text-sm">danyelly_mell@hotmail.com</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
