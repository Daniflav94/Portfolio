import { MapPin, Mail } from "lucide-react";
import pontilhado from "../assets/image/pontilhado-cinza.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function About() {
  const [typeAnimation, setTypeAnimation] = useState({whileInView: { x: 0, opacity: 1 }});

  useEffect(() => {
    let widthScreen = window.screen.width;
    widthScreen <= 768 ? setTypeAnimation({animate: { x: 0, opacity: 1 }}) : setTypeAnimation({whileInView: { x: 0, opacity: 1 }});
  
  }, [])

  return (
    <section id="about" className="md:h-screen h-fit dark:bg-zinc-600 w-screen">
      <div className="dark:bg-midnight w-screen hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full "
        >
          <path
            fill="#52525b"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="dark:md:bg-zinc-600 w-screen md:h-[65vh] flex justify-center items-center md:relative md:-top-20">        
          <motion.div
            initial={{ x: -800, opacity: 1 }}
            transition={{
              ease: "easeIn",
              delay: 0.1,
              duration: 0.8,
            }}
            {...typeAnimation}
              
            className="dark:bg-midnight md:rounded-2xl h-fit max-w-screen-lg p-12 relative"
          >
            <img
              src={pontilhado}
              className="w-36 h-48 absolute -bottom-24 -right-16 hidden md:flex"
            />
            <h2 className="dark:text-zinc-50 text-center font-sans font-medium text-4xl tracking-wider">
              <span className="text-lilac">#</span>
              sobre mim
            </h2>
            <p className="text-gray mt-8 font-sans leading-7 text-[0.9rem] md:px-10">
              &emsp;&emsp;Amo fazer códigos se transformarem em aplicações
              incríveis e funcionais que trazem soluções e melhorias para
              problemas diários, trazendo a melhor experiência possível para o
              usuário.
              <br />
              &emsp;&emsp;Possuo experiência como Desenvolvedora Fullstack e
              tenho como foco principal em minha carreira as áreas de
              desenvolvimento web e mobile. Utilizo atualmente a stack
              JavaScript (Node, React & React Native) para desenvolver em ambas
              as frentes.
              <br />
              &emsp;&emsp;Estou cursando o último semestre em Análise e
              Desenvolvimento de Sistemas e em jan/2023 finalizei o bootcamp
              intensivo de Java Fullstack da Soulcode Academy, no qual tive a
              oportunidade de ser monitora e liderar projetos.
              <br />
            </p>
            <div className="mt-10 flex md:flex-row flex-col justify-center items-center gap-10">
              <div className="flex gap-2">
                <MapPin size={18} color="#C778DD" strokeWidth={1} />
                <p className="text-lilac text-sm">São Paulo - Brasil</p>
              </div>
              <div className="flex gap-2">
                <Mail size={20} color="#C778DD" strokeWidth={1} />
                <p className="text-lilac text-sm">danyelly_mell@hotmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      
    </section>
  );
}
