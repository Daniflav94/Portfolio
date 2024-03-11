import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

export function ModalProject({ project }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode && "dark"}`}>
      <Dialog.Content className="md:w-[82%] w-[90%] h-fit fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999999] dark:bg-midnight bg-zinc-100 rounded-2xl border-[1px] dark:border-zinc-700 border-zinc-300">
        <div className="relative md:grid md:grid-cols-3 flex flex-col gap-8 overflow-hidden box-border md:p-8 p-5 pt-12 ">
          <div className="w-full h-full flex flex-col gap-8 col-span-2">
            <img src={project.video} loading="lazy" />
          </div>

          <div className="flex flex-col gap-6 justify-around">
            <h2 className="dark:text-zinc-50 text-zinc-600 font-medium text-3xl">
              {project.title}
            </h2>
            <span className="dark:text-gray text-zinc-500 font-sans ">{project.description}</span>
            <div className="flex flex-wrap gap-3">
              {project?.stacks.map((stack, key) => (
                <div
                  key={key}
                  className="dark:bg-midnight bg-zinc-100 border-[1px] border-lilac rounded-3xl px-3 w-fit"
                >
                  <span className="text-lilac font-medium font-sans text-xs">
                    {stack}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="dark:text-midnight text-zinc-50 bg-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md w-40 before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 overflow-hidden"
                >
                  <span className="relative z-10 ">Repositório</span>
                </motion.button>
              </a>
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-lilac dark:bg-midnight bg-zinc-100 border-[1px] border-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md w-40 before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 overflow-hidden"
                  >
                    <span className="relative z-10">Deploy</span>
                  </motion.button>
                </a>
              )}
            </div>
          </div>
          <Dialog.Close>
            <button className="absolute top-5 right-5">
              <X size={25} color="#ABB2BF" />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </div>
  );
}
