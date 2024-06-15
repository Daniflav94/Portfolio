import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

export function ModalProject({ project }) {
  return (
    <Dialog.Content className="md:w-[50%] w-[94%] h-fit max-h-[95%] overflow-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999999] dark:bg-midnight bg-zinc-100 rounded-2xl border-[1px] dark:border-zinc-700 border-zinc-300">
      <div className=" flex flex-col overflow-hidden box-border md:p-8 p-5 pt-12 justify-between">
        <div className="w-full h-full col-span-2 mb-6">
          <img src={project.video} loading="lazy" />
        </div>

        <div className="flex flex-col md:gap-6 gap-4 justify-between w-full">
          <div className="flex justify-between items-center">
            <h2 className="dark:text-zinc-50 text-zinc-600 font-medium md:text-2xl text-2xl text-center md:text-left">
              {project.title}
            </h2>
            <span className="dark:text-zinc-300 font-medium ital">{project.date}</span>
          </div>

          <span className="dark:text-gray text-zinc-500 font-sans ">
            {project.description}
          </span>
          <div className="flex flex-wrap md:gap-3 gap-2">
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
          <div className="flex w-full  justify-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <motion.button className="dark:text-midnight text-zinc-50 bg-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md w-full before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-96 overflow-hidden">
                <span>Repositório</span>
              </motion.button>
            </a>
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button className="text-lilac dark:bg-midnight bg-zinc-100 border-[1px] border-lilac py-2 text-1xl font-sans font-medium leading-6 tracking-tighter rounded-md w-full before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-96 overflow-hidden">
                  <span>Deploy</span>
                </motion.button>
              </a>
            )}
          </div>
        </div>
        <Dialog.Close>
          <span className="absolute top-4 right-4">
            <X size={25} color="#ABB2BF" />
          </span>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  );
}
