import {
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  JestIcon,
  GraphQLIcon,
  AngularIcon,
  JSIcon,
  TSIcon,
  FirebaseIcon,
  JavaIcon,
  MySQLIcon,
  NestIcon,
  NodeIcon,
  PostgresIcon,
  SpringIcon,
} from "../assets/image/stacks";
import { motion, MotionConfig } from "framer-motion";
import logo from "../assets/image/logo.svg";
import frame from "../assets/image/Frame28.svg";
import { stacksFront, stacksBack } from "../utils/mocks";

export function Skills() {
  return (
    <section id="skills" className="md:h-screen w-screen bg-midnight">
      <div className="bg-zinc-600 w-screen hidden md:flex">
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

      <div className="w-screen md:h-[75vh] bg-midnight flex flex-col justify-center items-center relative md:-top-20">
        <img src={logo} alt="" className="absolute right-10 bottom-0 hidden md:flex  z-[99999]" />
        <img src={frame} alt="" className="absolute left-10 top-10 hidden md:flex" />

        <div className=" w-9/12 flex flex-row items-center justify-center md:justify-start mb-20 mt-10 md:mt-0 gap-5">
          <h2 className="text-zinc-50 font-medium text-4xl tracking-wider">
            <span className="text-lilac">#</span>habilidades
          </h2>
          <div className="bg-lilac h-[2px] w-52 opacity-60 hidden md:flex"></div>
        </div>

        <div className="flex md:flex-row flex-col w-8/12 items-center justify-between mb-10 gap-8">
          <div className="border-zinc-50 border-[1px] rounded-2xl h-fit max-w-md p-10 flex justify-center flex-col items-center relative">
            <span className="text-zinc-50 bg-midnight text-xl font-medium text-center mb-5 absolute -top-4">
              Frontend
            </span>

            <div className="flex gap-6 flex-wrap justify-evenly ">
              {stacksFront?.map((item, key) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: item.delay,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="w-16 hover:animate-wiggle"
                  key={key}
                >
                  {item.stack === "HTMLIcon" && <HTMLIcon />}
                  {item.stack === "CSSIcon" && <CSSIcon />}
                  {item.stack === "TailwindIcon" && <TailwindIcon />}
                  {item.stack === "JSIcon" && <JSIcon />}
                  {item.stack === "TSIcon" && <TSIcon />}
                  {item.stack === "ReactIcon" && <ReactIcon />}
                  {item.stack === "ReactNativeIcon" && <ReactNativeIcon />}
                  {item.stack === "ReduxIcon" && <ReduxIcon />}
                  {item.stack === "JestIcon" && <JestIcon />}
                  {item.stack === "GraphQLIcon" && <GraphQLIcon />}
                  {item.stack === "AngularIcon" && <AngularIcon />}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-zinc-50 border-[1px] rounded-2xl h-fit max-w-md p-10 flex justify-center flex-col items-center relative">
            <span className="text-zinc-50 bg-midnight text-xl font-medium text-center mb-5 absolute -top-4">
              Backend
            </span>
            <div className="flex gap-6 flex-wrap justify-evenly ">
              {stacksBack?.map((item, key) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: item.delay,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="w-16 hover:animate-wiggle"
                  key={key}
                >
                  {item.stack === "NodeIcon" && <NodeIcon />}
                  {item.stack === "NestIcon" && <NestIcon />}
                  {item.stack === "JavaIcon" && <JavaIcon />}
                  {item.stack === "SpringIcon" && <SpringIcon />}
                  {item.stack === "MySQLIcon" && <MySQLIcon />}
                  {item.stack === "PostgresIcon" && <PostgresIcon />}
                  {item.stack === "FirebaseIcon" && <FirebaseIcon />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
