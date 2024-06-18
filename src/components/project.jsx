import { useState } from "react";
import {
  AngularIcon,
  FirebaseIcon,
  TSIcon,
  CSSIcon,
  HTMLIcon,
  JSIcon,
  JavaIcon,
  GraphQLIcon,
  JestIcon,
  MySQLIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SpringIcon,
} from "../assets/image/stacks";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ModalProject } from "./modalProject";

export function Project({ item }) {
  const [projectIdHover, setProjectIdHover] = useState("");

  let widthScreen = window.screen.width;

  return (
    <Dialog.Root>
      <>
      <Dialog.Overlay className="inset-0 fixed z-[9999999] bg-black/55"/>
        <div
          key={item.id}
          className="max-w-96 max-h-60 overflow-hidden box-border rounded-[3px] relative md:border-b-2 border-lilac md:hover:scale-110 md:transition md:ease-linear"
          onMouseEnter={() => setProjectIdHover(item.id)}
          onMouseLeave={() => setProjectIdHover("")}
        >
          <img src={item.image} alt="imagem aplicação" className="w-96 h-60 object-cover" />
          <div className="w-96 h-60 bg-black/55 absolute top-0 "></div>
          <div className="absolute top-0 left-0 w-96 h-60 flex flex-col justify-center items-center z-[999999]">
            <span className=" text-zinc-50 font-medium text-2xl">
              {item.title}
            </span>
            <div className="flex justify-center gap-2 pt-3">
              {item.stacks.map((stack, key) => (
                <div key={key}>
                  {stack === "angular" && <AngularIcon justIcon={true} />}
                  {stack === "firebase" && <FirebaseIcon justIcon={true} />}
                  {stack === "typescript" && <TSIcon justIcon={true} />}
                  {stack === "react" && <ReactIcon justIcon={true} />}
                  {stack === "html" && <HTMLIcon justIcon={true} />}
                  {stack === "css" && <CSSIcon justIcon={true} />}
                  {stack === "node" && <NodeIcon justIcon={true} />}
                  {stack === "mysql" && <MySQLIcon justIcon={true} />}
                  {stack === "javascript" && <JSIcon justIcon={true} />}
                  {stack === "jest" && <JestIcon justIcon={true} />}
                  {stack === "graphql" && <GraphQLIcon justIcon={true} />}
                  {stack === "java" && <JavaIcon justIcon={true} />}
                  {stack === "spring" && <SpringIcon justIcon={true} />}
                </div>
              ))}
            </div>
          </div>
          {projectIdHover === item.id && widthScreen > 768 && (
            <Dialog.Trigger>
              <span className="absolute z-[999999] -bottom-0 left-0 w-full flex items-center justify-center h-8 bg-lilac hover:bg-lilacDark text-zinc-50 font-medium text-sm animate-upButton">
                Ver mais
              </span>
            </Dialog.Trigger>
          )}
          {widthScreen <= 768 && (
            <Dialog.Trigger>
              <span className="absolute z-[999999] bottom-0 left-0 w-full flex items-center justify-center h-8 bg-lilac text-zinc-50 font-medium text-sm">
                Ver mais
              </span>
            </Dialog.Trigger>
          )}
        </div>
        <ModalProject project={item} />
      </>
    </Dialog.Root>
  );
}
